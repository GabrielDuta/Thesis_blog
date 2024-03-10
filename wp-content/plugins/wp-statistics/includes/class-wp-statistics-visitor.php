<?php

namespace WP_STATISTICS;

class Visitor
{
    /**
     * For each visit to account for several hits.
     *
     * @var int
     */
    public static $coefficient = 1;

    /**
     * Get Coefficient
     */
    public static function getCoefficient()
    {
        return apply_filters('wp_statistics_coefficient_per_visitor', self::$coefficient);
    }

    /**
     * Check Active Record Visitors
     *
     * @return mixed
     */
    public static function active()
    {
        return (has_filter('wp_statistics_active_visitors')) ? apply_filters('wp_statistics_active_visitors', true) : Option::get('visitors');
    }

    /**
     * Save new Visitor To DB
     *
     * @param array $visitor
     * @return INT
     */
    public static function save_visitor($visitor = array())
    {
        global $wpdb;

        # Add Filter Insert ignore
        add_filter('query', array('\WP_STATISTICS\DB', 'insert_ignore'), 10);

        # Save to WordPress Database
        $insert = $wpdb->insert(
            DB::table('visitor'),
            $visitor
        );
        if (!$insert) {
            if (!empty($wpdb->last_error)) {
                \WP_Statistics::log($wpdb->last_error);
            }
        }

        # Get Visitor ID
        $visitor_id = $wpdb->insert_id;

        # Remove ignore filter
        remove_filter('query', array('\WP_STATISTICS\DB', 'insert_ignore'), 10);

        # Do Action After Save New Visitor
        do_action('wp_statistics_save_visitor', $visitor_id, $visitor, Pages::get_page_type());

        return $visitor_id;
    }

    /**
     * Check This ip has recorded in Custom Day
     *
     * @param $ip
     * @param $date
     * @return bool
     */
    public static function exist_ip_in_day($ip, $date = false)
    {
        global $wpdb;

        $last_counter = ($date === false ? TimeZone::getCurrentDate('Y-m-d') : $date);
        $sql          = $wpdb->prepare("SELECT * FROM `" . DB::table('visitor') . "` WHERE `last_counter` = %s AND `ip` = %s", $last_counter, $ip);
        $visitor      = $wpdb->get_row($sql);

        return (!$visitor ? false : $visitor);
    }

    /**
     * Record Uniq Visitor Detail in DB
     *
     * @param array $arg
     * @return bool|INT
     * @throws \Exception
     */
    public static function record($arg = array())
    {
        global $wpdb;

        // Define the array of defaults
        $defaults = array(
            'location'         => GeoIP::getDefaultCountryCode(),
            'exclusion_match'  => false,
            'exclusion_reason' => '',
        );
        $args     = wp_parse_args($arg, $defaults);

        // Check User Exclusion
        if ($args['exclusion_match'] === false || $args['exclusion_reason'] == 'Honeypot') {

            // Get User IP
            $user_ip = IP::getStoreIP();

            // Get User Agent
            $user_agent = UserAgent::getUserAgent();

            //Check Exist This User in Current Day
            $same_visitor = self::exist_ip_in_day($user_ip);

            // If we have a new Visitor in Day
            if (!$same_visitor) {

                // Prepare Visitor information
                $visitor = array(
                    'last_counter' => TimeZone::getCurrentDate('Y-m-d'),
                    'referred'     => Referred::get(),
                    'agent'        => $user_agent['browser'],
                    'platform'     => $user_agent['platform'],
                    'version'      => $user_agent['version'],
                    'device'       => $user_agent['device'],
                    'model'        => $user_agent['model'],
                    'ip'           => $user_ip,
                    'location'     => GeoIP::getCountry(IP::getIP()),
                    'user_id'      => User::get_user_id(),
                    'UAString'     => (Option::get('store_ua') == true ? UserAgent::getHttpUserAgent() : ''),
                    'hits'         => 1,
                    'honeypot'     => ($args['exclusion_reason'] == 'Honeypot' ? 1 : 0),
                );
                $visitor = apply_filters('wp_statistics_visitor_information', $visitor);

                //Save Visitor TO DB
                $visitor_id = self::save_visitor($visitor);

            } else {

                //Get Current Visitor ID
                $visitor_id = $same_visitor->ID;

                // Update Same Visitor Hits
                if ($args['exclusion_reason'] != 'Honeypot' and $args['exclusion_reason'] != 'Robot threshold') {

                    // Action Before Visitor Update
                    do_action('wp_statistics_update_visitor_hits', $visitor_id, $same_visitor);

                    $visitorTable = DB::table('visitor');

                    // Update Visitor Count in DB
                    $sql = $wpdb->prepare(
                        "UPDATE `{$visitorTable}` SET `hits` = `hits` + %d, user_id = %s WHERE `ID` = %d",
                        1,
                        User::get_user_id(),
                        $visitor_id
                    );

                    $wpdb->query($sql);
                }
            }
        }

        return (isset($visitor_id) ? $visitor_id : false);
    }

    /**
     * Saves or updates a visitor relationship entry in the database.
     *
     * @param $page_id
     * @param $visitor_id
     * @return int
     */
    public static function save_visitors_relationships($page_id, $visitor_id)
    {
        global $wpdb;

        $tableName   = DB::table('visitor_relationships');
        $currentDate = TimeZone::getCurrentDate('Y-m-d');

        /**
         * Check if a record already exists for the same visitor_id, page_id, and current date.
         * The query counts the number of matching records.
         *
         * Note: Ideally, this operation should be handled with a REPLACE INTO or INSERT OR REPLACE query.
         * However, since the table was not considered a unique key at first for these fields, As they say, "Fools tie knots, and wise men loose them :)" we manually check for the record's existence,
         *
         */
        $sql   = $wpdb->prepare("SELECT COUNT(*) FROM {$tableName} WHERE `visitor_id` = %d AND `page_id` = %d AND DATE(`date`) = %s", $visitor_id, $page_id, $currentDate);
        $exist = $wpdb->get_var($sql);

        /**
         * If a record exists, update its date to the current date.
         * Otherwise, insert a new record with the visitor ID, page ID, and current date.
         */
        if ($exist) {

            $sql    = $wpdb->prepare("UPDATE {$tableName} SET `date` = %s WHERE DATE(`date`) = %s AND `visitor_id` = %d AND `page_id` = %d", TimeZone::getCurrentDate(), $currentDate, $visitor_id, $page_id);
            $result = $wpdb->query($sql);

        } else {

            $result = $wpdb->insert($tableName,
                array(
                    'visitor_id' => $visitor_id,
                    'page_id'    => $page_id,
                    'date'       => TimeZone::getCurrentDate()
                ),
                array('%d', '%d', '%s')
            );
        }

        if (!$result) {
            if (!empty($wpdb->last_error)) {
                \WP_Statistics::log($wpdb->last_error);
            }
        }

        $insert_id = $wpdb->insert_id;

        /**
         * Trigger a WordPress action hook after saving the visitor relationship.
         * This allows for custom actions to be executed.
         */
        do_action('wp_statistics_save_visitor_relationship', $page_id, $visitor_id, $insert_id);

        return $insert_id;
    }

    /**
     * Get Top Visitors
     *
     * @param array $arg
     * @return array
     * @throws \Exception
     */
    public static function getTop($arg = array())
    {
        global $wpdb;

        // Define the array of defaults
        $defaults = array(
            'day'      => 'today',
            'per_page' => 10,
            'paged'    => 1,
        );
        $args     = wp_parse_args($arg, $defaults);

        // Prepare time
        if ($args['day'] == 'today') {
            $sql_time = TimeZone::getCurrentDate('Y-m-d');
        } else {
            $sql_time = date('Y-m-d', strtotime($args['day']));
        }

        // Prepare Query
        $args['sql'] = $wpdb->prepare("SELECT * FROM `" . DB::table('visitor') . "` WHERE last_counter = %s ORDER BY hits DESC", $sql_time);

        // Get Visitors Data
        return self::get($args);
    }

    /**
     * Get Visitors List By Custom Query
     *
     * @param array $arg
     * @return mixed
     * @throws \Exception
     */
    public static function get($arg = array())
    {
        global $wpdb;

        // Define the array of defaults
        $defaults = array(
            'per_page' => 10,
            'paged'    => 1,
            'fields'   => 'all',
            'order'    => 'DESC',
            'orderby'  => 'ID'
        );
        $args     = wp_parse_args($arg, $defaults);

        $limit = (($args['paged'] - 1) * $args['per_page']);

        // Prepare the Query & Set Pagination
        if (empty($args['sql'])) {
            $args['sql'] = "SELECT * FROM `" . DB::table('visitor') . "` ORDER BY ID DESC";
        }

        $args['sql'] = $args['sql'] . $wpdb->prepare(" LIMIT %d, %d", $limit, $args['per_page']);

        // Send Request
        $result = $wpdb->get_results($args['sql']);

        // Get Visitor Data
        return self::prepareData($result);
    }

    /**
     * Prepare Visitor Data
     *
     * @param array $result
     * @return array
     * @throws \Exception
     */
    public static function prepareData($result = array())
    {

        // Prepare List
        $list = array();

        // Push to List
        foreach ($result as $items) {

            $ip       = esc_html($items->ip);
            $agent    = esc_html($items->agent);
            $version  = esc_html($items->version);
            $platform = esc_html($items->platform);

            $item = array(
                'hits'     => (int)$items->hits,
                'referred' => Referred::get_referrer_link($items->referred),
                'refer'    => $items->referred,
                'date'     => date_i18n(get_option('date_format'), strtotime($items->last_counter)),
                'agent'    => $agent,
                'platform' => $platform,
                'version'  => esc_html($items->version)
            );

            if (isset($items->date)) {
                $item['date'] = date_i18n(get_option('date_format') . ' ' . get_option('time_format'), strtotime($items->date));
            }

            // Push User Data
            if ($items->user_id > 0 and User::exists($items->user_id)) {
                $user_data    = User::get($items->user_id);
                $item['user'] = array(
                    'ID'         => $items->user_id,
                    'user_login' => $user_data['user_login']
                );
            }

            // Push Browser
            $item['browser'] = array(
                'name'    => $agent,
                'version' => $version,
                'logo'    => UserAgent::getBrowserLogo($agent),
                'link'    => Menus::admin_url('visitors', array('agent' => $agent))
            );

            // Push IP
            if (IP::IsHashIP($ip)) {
                $item['ip'] = array('value' => substr($ip, 6, 10), 'link' => Menus::admin_url('visitors', array('ip' => urlencode($ip))));
            } else {
                $item['ip']  = array('value' => $ip, 'link' => Menus::admin_url('visitors', array('ip' => $ip)));
                $item['map'] = GeoIP::geoIPTools($ip);
            }

            // Push Country
            if (GeoIP::active()) {
                $item['country'] = array('location' => $items->location, 'flag' => Country::flag($items->location), 'name' => Country::getName($items->location));
            }

            // Push City
            if (GeoIP::active('city')) {
                $item['city'] = GeoIP::getCity($ip);
            }

            // Check If Search Word
            if (isset($items->words)) {
                $item['word'] = $items->words;
            }

            // Get What is Page
            if (Option::get('visitors_log') && isset($items->page_id)) {
                $item['page'] = self::get_page_by_id($items->page_id);
            }

            $list[] = $item;
        }

        return $list;
    }

    /**
     * Get Page Information By page ID
     *
     * @param $page_id
     * @return mixed
     */
    public static function get_page_by_id($page_id)
    {
        global $wpdb;

        // Default Params
        $params = array('link' => '', 'title' => '');

        // Check Active Visitors Log
        if (!Option::get('visitors_log')) {
            return $params;
        }

        $pageTable = DB::table('pages');

        // Get Row
        $sql  = $wpdb->prepare("SELECT * FROM {$pageTable} WHERE page_id = %s", $page_id);
        $item = $wpdb->get_row($sql, ARRAY_A);

        if ($item !== null) {
            $params = Pages::get_page_info($item['id'], $item['type']);
        }

        return $params;
    }

    /**
     * Get Top Pages Visited by a visitor
     *
     * @param $visitor_ID
     * @param $total
     *
     * @return mixed
     */
    public static function get_pages_by_visitor_id($visitor_ID, $total = 5)
    {
        global $wpdb;

        $visitor_relationships_table = DB::table('visitor_relationships');
        $pages_table                 = DB::table('pages');

        // Get Result
        $query = $wpdb->prepare("SELECT DISTINCT {$pages_table}.id, {$pages_table}.uri FROM {$pages_table} INNER JOIN {$visitor_relationships_table} ON {$pages_table}.page_id = {$visitor_relationships_table}.page_id WHERE {$visitor_relationships_table}.visitor_id = %d ORDER BY {$pages_table}.count DESC LIMIT %d", $visitor_ID, $total);

        return $wpdb->get_results($query, ARRAY_N);
    }

    /**
     * Count User By Custom Filter
     *
     * @param array $args
     * @return int
     */
    public static function Count($args = array())
    {
        global $wpdb;
        $sql = "SELECT COUNT(*) FROM `" . DB::table('visitor') . "`";
        $sql .= Helper::getConditionSQL($args);
        return $wpdb->get_var($sql);
    }

    /**
     * Get List Of visitor that Registered in WordPress Users
     *
     * @return array
     */
    public static function get_users_visitor()
    {
        global $wpdb;
        $query = $wpdb->get_results("SELECT `user_id` FROM `" . DB::table('visitor') . "` WHERE `user_id` >0 AND EXISTS (SELECT `ID` FROM `{$wpdb->users}` WHERE " . DB::table('visitor') . ".user_id = {$wpdb->users}.ID) GROUP BY `user_id` ORDER BY `user_id` DESC", ARRAY_A);
        $item  = array();
        foreach ($query as $row) {
            $user_data             = User::get($row['user_id']);
            $item[$row['user_id']] = array(
                'user_login' => $user_data['user_login'],
                'user_email' => $user_data['user_email']
            );
        }

        return $item;
    }

}