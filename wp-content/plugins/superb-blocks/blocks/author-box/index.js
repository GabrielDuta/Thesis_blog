(()=>{var e,t={967:(e,t)=>{"use strict";t.N=void 0;var a=/^([^\w]*)(javascript|data|vbscript)/im,r=/&#(\w+)(^\w|;)?/g,o=/&(newline|tab);/gi,i=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,M=/^.+(:|&colon;)/gim,n=[".","/"];t.N=function(e){var t,u=(t=e||"",t.replace(r,(function(e,t){return String.fromCharCode(t)}))).replace(o,"").replace(i,"").trim();if(!u)return"about:blank";if(function(e){return n.indexOf(e[0])>-1}(u))return u;var l=u.match(M);if(!l)return u;var s=l[0];return a.test(s)?"about:blank":u}},691:(e,t,a)=>{"use strict";const r=window.wp.blocks,o=window.wp.i18n,i=window.React,M=window.wp.blockEditor,n=window.wp.element,u="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfNDIpIj4KPHBhdGggZD0iTTMyIDE2QzMyIDcuMTYzNDQgMjQuODM2NiAwIDE2IDBDNy4xNjM0NCAwIDAgNy4xNjM0NCAwIDE2QzAgMjMuOTg2MSA1Ljg1MSAzMC42MDUzIDEzLjUgMzEuODA1NlYyMC42MjVIOS40Mzc1VjE2SDEzLjVWMTIuNDc1QzEzLjUgOC40NjUgMTUuODg4NyA2LjI1IDE5LjU0MzQgNi4yNUMyMS4yOTQgNi4yNSAyMy4xMjUgNi41NjI1IDIzLjEyNSA2LjU2MjVWMTAuNUgyMS4xMDc0QzE5LjExOTkgMTAuNSAxOC41IDExLjczMzMgMTguNSAxMi45OTg2VjE2SDIyLjkzNzVMMjIuMjI4MSAyMC42MjVIMTguNVYzMS44MDU2QzI2LjE0OTEgMzAuNjA1MyAzMiAyMy45ODYxIDMyIDE2WiIgZmlsbD0iIzE4NzdGMiIvPgo8cGF0aCBkPSJNMjIuMjI4MSAyMC42MjVMMjIuOTM3NSAxNkgxOC41VjEyLjk5ODZDMTguNSAxMS43MzMzIDE5LjExOTggMTAuNSAyMS4xMDc0IDEwLjVIMjMuMTI1VjYuNTYyNUMyMy4xMjUgNi41NjI1IDIxLjI5MzkgNi4yNSAxOS41NDM0IDYuMjVDMTUuODg4NyA2LjI1IDEzLjUgOC40NjUgMTMuNSAxMi40NzVWMTZIOS40Mzc1VjIwLjYyNUgxMy41VjMxLjgwNTZDMTQuMzE0NiAzMS45MzM0IDE1LjE0OTUgMzIgMTYgMzJDMTYuODUwNSAzMiAxNy42ODU0IDMxLjkzMzQgMTguNSAzMS44MDU2VjIwLjYyNUgyMi4yMjgxWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzQyIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",l="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfNDYpIj4KPHBhdGggZD0iTTE2IDMyQzcuMTY0OCAzMiAwIDI0LjgzNTIgMCAxNkMwIDcuMTY0OCA3LjE2NDggMCAxNiAwQzI0LjgzNTIgMCAzMiA3LjE2NDggMzIgMTZDMzIgMjQuODM1MiAyNC44MzUyIDMyIDE2IDMyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfNDYpIi8+CjxwYXRoIGQ9Ik0xNiA3LjA0NjQzQzE4LjkxNTIgNy4wNDY0MyAxOS4yNjA4IDcuMDU2MDMgMjAuNDEyOCA3LjExMDQzQzIxLjQ3ODQgNy4xNTg0MyAyMi4wNTc2IDcuMzM3NjMgMjIuNDQxNiA3LjQ4ODAzQzIyLjk1MDQgNy42ODY0MyAyMy4zMTUyIDcuOTIzMjMgMjMuNjk2IDguMzA0MDNDMjQuMDc2OCA4LjY4NDgzIDI0LjMxMzYgOS4wNDk2MyAyNC41MTIgOS41NTg0M0MyNC42NjI0IDkuOTQyNDMgMjQuODM4NCAxMC41MjE2IDI0Ljg4OTYgMTEuNTg3MkMyNC45NDA4IDEyLjczOTIgMjQuOTUzNiAxMy4wODQ4IDI0Ljk1MzYgMTZDMjQuOTUzNiAxOC45MTUyIDI0Ljk0NCAxOS4yNjA4IDI0Ljg4OTYgMjAuNDEyOEMyNC44NDE2IDIxLjQ3ODQgMjQuNjYyNCAyMi4wNTc2IDI0LjUxMiAyMi40NDE2QzI0LjMxMzYgMjIuOTUwNCAyNC4wNzY4IDIzLjMxNTIgMjMuNjk2IDIzLjY5NkMyMy4zMTUyIDI0LjA3NjggMjIuOTUwNCAyNC4zMTM2IDIyLjQ0MTYgMjQuNTEyQzIyLjA1NzYgMjQuNjYyNCAyMS40Nzg0IDI0LjgzODQgMjAuNDEyOCAyNC44ODk2QzE5LjI2MDggMjQuOTQwOCAxOC45MTUyIDI0Ljk1MzYgMTYgMjQuOTUzNkMxMy4wODQ4IDI0Ljk1MzYgMTIuNzM5MiAyNC45NDQgMTEuNTg3MiAyNC44ODk2QzEwLjUyMTYgMjQuODQxNiA5Ljk0MjQgMjQuNjYyNCA5LjU1ODQgMjQuNTEyQzkuMDQ5NiAyNC4zMTM2IDguNjg0OCAyNC4wNzY4IDguMzA0IDIzLjY5NkM3LjkyMzIgMjMuMzE1MiA3LjY4NjQgMjIuOTUwNCA3LjQ4OCAyMi40NDE2QzcuMzM3NiAyMi4wNTc2IDcuMTYxNiAyMS40Nzg0IDcuMTEwNCAyMC40MTI4QzcuMDU5MiAxOS4yNjA4IDcuMDQ2NCAxOC45MTUyIDcuMDQ2NCAxNkM3LjA0NjQgMTMuMDg0OCA3LjA1NiAxMi43MzkyIDcuMTEwNCAxMS41ODcyQzcuMTU4NCAxMC41MjE2IDcuMzM3NiA5Ljk0MjQzIDcuNDg4IDkuNTU4NDNDNy42ODY0IDkuMDQ5NjMgNy45MjMyIDguNjg0ODMgOC4zMDQgOC4zMDQwM0M4LjY4NDggNy45MjMyMyA5LjA0OTYgNy42ODY0MyA5LjU1ODQgNy40ODgwM0M5Ljk0MjQgNy4zMzc2MyAxMC41MjE2IDcuMTYxNjMgMTEuNTg3MiA3LjExMDQzQzEyLjczOTIgNy4wNTYwMyAxMy4wODQ4IDcuMDQ2NDMgMTYgNy4wNDY0M1pNMTYgNS4wNzg0M0MxMy4wMzM2IDUuMDc4NDMgMTIuNjYyNCA1LjA5MTIzIDExLjQ5NzYgNS4xNDU2M0MxMC4zMzYgNS4yMDAwMyA5LjU0MjQgNS4zODI0MyA4Ljg0NDggNS42NTQ0M0M4LjEyOCA1LjkyOTYzIDcuNTE2OCA2LjMwNDAzIDYuOTEyIDYuOTEyMDNDNi4zMDQgNy41MjAwMyA1LjkzMjggOC4xMjgwMyA1LjY1MTIgOC44NDgwM0M1LjM4MjQgOS41NDI0MyA1LjE5NjggMTAuMzM2IDUuMTQyNCAxMS41MDA4QzUuMDg4IDEyLjY2NTYgNS4wNzUyIDEzLjAzNjggNS4wNzUyIDE2LjAwMzJDNS4wNzUyIDE4Ljk2OTYgNS4wODggMTkuMzQwOCA1LjE0MjQgMjAuNTA1NkM1LjE5NjggMjEuNjY3MiA1LjM3OTIgMjIuNDYwOCA1LjY1MTIgMjMuMTU4NEM1LjkyOTYgMjMuODcyIDYuMzA0IDI0LjQ4MzIgNi45MTIgMjUuMDg4QzcuNTIgMjUuNjk2IDguMTI4IDI2LjA2NzIgOC44NDggMjYuMzQ4OEM5LjU0MjQgMjYuNjE3NiAxMC4zMzYgMjYuODAzMiAxMS41MDA4IDI2Ljg1NzZDMTIuNjY1NiAyNi45MTIgMTMuMDM2OCAyNi45MjQ4IDE2LjAwMzIgMjYuOTI0OEMxOC45Njk2IDI2LjkyNDggMTkuMzQwOCAyNi45MTIgMjAuNTA1NiAyNi44NTc2QzIxLjY2NzIgMjYuODAzMiAyMi40NjA4IDI2LjYyMDggMjMuMTU4NCAyNi4zNDg4QzIzLjg3MiAyNi4wNzA0IDI0LjQ4MzIgMjUuNjk2IDI1LjA4OCAyNS4wODhDMjUuNjk2IDI0LjQ4IDI2LjA2NzIgMjMuODcyIDI2LjM0ODggMjMuMTUyQzI2LjYxNzYgMjIuNDU3NiAyNi44MDMyIDIxLjY2NCAyNi44NTc2IDIwLjQ5OTJDMjYuOTEyIDE5LjMzNDQgMjYuOTI0OCAxOC45NjMyIDI2LjkyNDggMTUuOTk2OEMyNi45MjQ4IDEzLjAzMDQgMjYuOTEyIDEyLjY1OTIgMjYuODU3NiAxMS40OTQ0QzI2LjgwMzIgMTAuMzMyOCAyNi42MjA4IDkuNTM5MjMgMjYuMzQ4OCA4Ljg0MTYzQzI2LjA3MDQgOC4xMjgwMyAyNS42OTYgNy41MTY4MyAyNS4wODggNi45MTIwM0MyNC40OCA2LjMwNDAzIDIzLjg3MiA1LjkzMjgzIDIzLjE1MiA1LjY1MTIzQzIyLjQ1NzYgNS4zODI0MyAyMS42NjQgNS4xOTY4MyAyMC40OTkyIDUuMTQyNDNDMTkuMzM3NiA1LjA5MTIzIDE4Ljk2NjQgNS4wNzg0MyAxNiA1LjA3ODQzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE2IDEwLjM5MDRDMTIuOTAyNCAxMC4zOTA0IDEwLjM5MDQgMTIuOTAyNCAxMC4zOTA0IDE2QzEwLjM5MDQgMTkuMDk3NiAxMi45MDI0IDIxLjYwOTYgMTYgMjEuNjA5NkMxOS4wOTc2IDIxLjYwOTYgMjEuNjA5NiAxOS4wOTc2IDIxLjYwOTYgMTZDMjEuNjA5NiAxMi45MDI0IDE5LjA5NzYgMTAuMzkwNCAxNiAxMC4zOTA0Wk0xNiAxOS42NDE2QzEzLjk5MDQgMTkuNjQxNiAxMi4zNTg0IDE4LjAxMjggMTIuMzU4NCAxNkMxMi4zNTg0IDEzLjk4NzIgMTMuOTkwNCAxMi4zNTg0IDE2IDEyLjM1ODRDMTguMDA5NiAxMi4zNTg0IDE5LjY0MTYgMTMuOTg3MiAxOS42NDE2IDE2QzE5LjY0MTYgMTguMDEyOCAxOC4wMDk2IDE5LjY0MTYgMTYgMTkuNjQxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS44MzA0IDExLjQ4MTZDMjIuNTU1IDExLjQ4MTYgMjMuMTQyNCAxMC44OTQyIDIzLjE0MjQgMTAuMTY5NkMyMy4xNDI0IDkuNDQ1MDEgMjIuNTU1IDguODU3NiAyMS44MzA0IDguODU3NkMyMS4xMDU4IDguODU3NiAyMC41MTg0IDkuNDQ1MDEgMjAuNTE4NCAxMC4xNjk2QzIwLjUxODQgMTAuODk0MiAyMS4xMDU4IDExLjQ4MTYgMjEuODMwNCAxMS40ODE2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfNDYiIHgxPSI0LjY4NjI5IiB5MT0iMjcuMzEzNyIgeDI9IjI3LjMxMzciIHkyPSI0LjY4NjI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkQ1MjEiLz4KPHN0b3Agb2Zmc2V0PSIwLjA1NTEwNDgiIHN0b3AtY29sb3I9IiNGRkQwMjAiLz4KPHN0b3Agb2Zmc2V0PSIwLjEyNDEiIHN0b3AtY29sb3I9IiNGRUMwMUUiLz4KPHN0b3Agb2Zmc2V0PSIwLjIwMDQiIHN0b3AtY29sb3I9IiNGQ0E3MUIiLz4KPHN0b3Agb2Zmc2V0PSIwLjI4MjEiIHN0b3AtY29sb3I9IiNGQTgzMTYiLz4KPHN0b3Agb2Zmc2V0PSIwLjM2ODEiIHN0b3AtY29sb3I9IiNGODU1MTAiLz4KPHN0b3Agb2Zmc2V0PSIwLjQ1NjMiIHN0b3AtY29sb3I9IiNGNTFFMDkiLz4KPHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiNGMzAwMDUiLz4KPHN0b3Agb2Zmc2V0PSIwLjUwMzUiIHN0b3AtY29sb3I9IiNGMjAwMDciLz4KPHN0b3Agb2Zmc2V0PSIwLjU5NjYiIHN0b3AtY29sb3I9IiNFMTAwM0IiLz4KPHN0b3Agb2Zmc2V0PSIwLjY4NzkiIHN0b3AtY29sb3I9IiNEMzAwNjciLz4KPHN0b3Agb2Zmc2V0PSIwLjc3NTciIHN0b3AtY29sb3I9IiNDNzAwODgiLz4KPHN0b3Agb2Zmc2V0PSIwLjg1ODkiIHN0b3AtY29sb3I9IiNCRjAwQTAiLz4KPHN0b3Agb2Zmc2V0PSIwLjkzNTciIHN0b3AtY29sb3I9IiNCQjAwQUYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjkwMEI0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV80NiI+CjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfNTkpIj4KPHBhdGggZD0iTTE2IDMyQzI0LjgzNjYgMzIgMzIgMjQuODM2NiAzMiAxNkMzMiA3LjE2MzQ0IDI0LjgzNjYgMCAxNiAwQzcuMTYzNDQgMCAwIDcuMTYzNDQgMCAxNkMwIDI0LjgzNjYgNy4xNjM0NCAzMiAxNiAzMloiIGZpbGw9IiMwMDdCQjUiLz4KPHBhdGggZD0iTTExIDExSDdWMjVIMTFWMTFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAuNDk5IDExQzE3LjcwOCAxMSAxNy4yMjggMTIuMDE4IDE3IDEzVjExSDEzVjI1SDE3VjE3QzE3IDE1LjcwMyAxNy43MDMgMTUgMTkgMTVDMjAuMjY2IDE1IDIxIDE1LjY4OCAyMSAxN1YyNUgyNVYxOEMyNSAxNCAyNC40NzkgMTEgMjAuNDk5IDExWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkgMTBDMTAuMTA0NiAxMCAxMSA5LjEwNDU3IDExIDhDMTEgNi44OTU0MyAxMC4xMDQ2IDYgOSA2QzcuODk1NDMgNiA3IDYuODk1NDMgNyA4QzcgOS4xMDQ1NyA3Ljg5NTQzIDEwIDkgMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfNTkiPgo8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",g=u,I=l,c=s;function N(e){return e.url?(0,i.createElement)("a",{target:"_blank",rel:"noopener",href:e.url},(0,i.createElement)("img",{src:e.icon})):null}function D(e){const t=e.attributes;if(!t.avatarEnabled)return null;const a=t.customAuthorImage?t.customAuthorImage:t.authorImage;return(0,i.createElement)("img",{width:96,className:"superbaddons-authorbox-avatar",src:a,style:{borderRadius:t.avatarBorderRadius/2+"%",width:t.avatarSize+"px"}})}function j({isEditable:e,...t}){return e?(0,i.createElement)(M.RichText,{...t}):(0,i.createElement)(M.RichText.Content,{...t})}const A=window.wp.escapeHtml,d=e=>{const{attributes:t,setAttributes:a}=e;return(0,i.createElement)(n.Fragment,null,(0,i.createElement)("div",{className:"superbaddons-authorbox superbaddons-authorbox-alignment-"+t.toolbarAlignment,style:{backgroundColor:t.colorBackground,borderRadius:t.borderRadiusBoxed+"px"}},(0,i.createElement)("div",{className:"superbaddons-authorbox-left"},(0,i.createElement)(D,{...e})),(0,i.createElement)("div",{className:"superbaddons-authorbox-right"},(0,i.createElement)(j,{isEditable:e.IsInEditor,className:"superbaddons-authorbox-authorname",tagName:"p",onChange:e=>{a({authorName:e})},value:t.authorName,style:{color:t.colorAuthorName,fontSize:t.fontSizeAuthorName+"px",lineHeight:t.fontSizeAuthorName+8+"px"}}),(0,i.createElement)(j,{isEditable:e.IsInEditor,className:"superbaddons-authorbox-authorbio",tagName:"p",onChange:e=>{a({authorBio:e})},value:t.authorBio,style:{color:t.colorAuthorBio,fontSize:t.fontSizeAuthorBio+"px",lineHeight:t.fontSizeAuthorBio+5+"px"}}),(0,i.createElement)("div",{className:"superbaddons-authorbox-social-wrapper"},(0,i.createElement)(N,{url:(0,A.escapeAttribute)(t.socialsLinkFacebook),icon:g}),(0,i.createElement)(N,{url:(0,A.escapeAttribute)(t.socialsLinkInstagram),icon:I}),(0,i.createElement)(N,{url:(0,A.escapeAttribute)(t.socialsLinkX),icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGc+CjxwYXRoIGQ9Ik0xNiAwQzI0LjgzNTIgMCAzMiA3LjE2NDggMzIgMTZDMzIgMjQuODM1MiAyNC44MzUyIDMyIDE2IDMyQzcuMTY0OCAzMiAwIDI0LjgzNTIgMCAxNkMwIDcuMTY0OCA3LjE2NDggMCAxNiAwWiIgZmlsbD0iIzAwMCIvPgo8L2c+CjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDMuOTgwODkyLCA0Ljc3NzA3KSI+PHBhdGggZmlsbD0iI2U3ZTllYSIgZD0iTTE4LjI0NCAyLjI1aDMuMzA4bC03LjIyNyA4LjI2IDguNTAyIDExLjI0SDE2LjE3bC01LjIxNC02LjgxN0w0Ljk5IDIxLjc1SDEuNjhsNy43My04LjgzNUwxLjI1NCAyLjI1SDguMDhsNC43MTMgNi4yMzF6bS0xLjE2MSAxNy41MmgxLjgzM0w3LjA4NCA0LjEyNkg1LjExN3oiPjwvcGF0aD48L2c+Cjwvc3ZnPgo="}),(0,i.createElement)(N,{url:(0,A.escapeAttribute)(t.socialsLinkLinkedin),icon:c})))))},y=window.wp.components,z=window.wp.data,b=window.wp.coreData,m=e=>{const{Authors:t,AuthorsResolved:a}=(0,z.useSelect)((e=>({Authors:e(b.store).getUsers({who:"authors",per_page:-1}),AuthorsResolved:e(b.store).hasFinishedResolution("getUsers",[{who:"authors",per_page:-1}])})),[]);let r;return r=a?(0,i.createElement)(n.Fragment,null,(0,i.createElement)(y.SelectControl,{value:e.currentSelection,onChange:a=>e.changeCallback(a,t),label:(0,o.__)("Author","superb-blocks"),options:[{label:(0,o.__)("Custom","superb-blocks"),value:-1},...t.map(((e,t)=>({label:e.name,value:t})))],__nextHasNoMarginBottom:!0}),(0,i.createElement)("small",null,(0,o.__)("Select a WordPress User. Author name, description and avatar will be automatically fetched from the user profile.","superb-blocks"))):(0,i.createElement)("p",null,(0,o.__)("Loading...","superb-blocks")),r};var L=a(967),T=a(241);const p=(e,t=!1,a=!1)=>(e=isNaN(e)?0:parseInt(e),t&&e<t&&(e=t),a&&e>a&&(e=a),e),k=e=>e?(0,L.N)(e):"",E=e=>1==e,C=function(e,t){return void 0===t?e[0]:e.find((e=>e===t))},h=function(e,t,a=!1){return a?e.find((e=>e.slug===t))[a]:e.find((e=>e.slug===t))},x=function(e){return void 0!==e&&((0,T.validateHTMLColorHex)(e)||(0,T.validateHTMLColorRgb)(e)||(0,T.validateHTMLColorHsl)(e))?e:"unset"},w=e=>{const{attributes:t,setAttributes:a}=e,r=""!=t.customAuthorImage;return(0,i.createElement)("div",{className:"superbaddons-custom-avatar-wrapper"},(0,i.createElement)(M.MediaUploadCheck,{fallback:(0,o.__)("To set a custom avatar, your account needs permission to upload media on your WordPress site.","superb-blocks")},(0,i.createElement)(M.MediaUpload,{title:(0,o.__)("Custom Avatar","superb-blocks"),onSelect:e=>{a({customAuthorImage:k(e.url)})},allowedTypes:["image"],render:({open:e})=>(0,i.createElement)(y.Button,{onClick:e,variant:"secondary"},r?(0,o.__)("Replace Custom Avatar","superb-blocks"):(0,o.__)("Set Custom Avatar","superb-blocks"))}),r&&(0,i.createElement)(y.Button,{onClick:()=>{a({customAuthorImage:""})},isDestructive:!0,isSmall:!0},(0,o.__)("Remove Custom Avatar","awp")),(0,i.createElement)("small",null,(0,o.__)("Setting a custom avatar will overwrite the avatar set by the author. The custom avatar can be removed at any time and the author's avatar will be used.","superb-blocks"))))},O=[{name:(0,o.__)("Small","superb-blocks"),slug:"small",size:14},{name:(0,o.__)("Medium","superb-blocks"),slug:"medium",size:16},{name:(0,o.__)("Large","superb-blocks"),slug:"large",size:24},{name:(0,o.__)("Huge","superb-blocks"),slug:"huge",size:32},{name:(0,o.__)("Enormous","superb-blocks"),slug:"enormous",size:40}],S=[{name:(0,o.__)("Superb Black","superb-blocks"),slug:"black",color:"#444444"},{name:(0,o.__)("Superb Gray","superb-blocks"),slug:"default",color:"#7C7C7C"},{name:(0,o.__)("Background Gray","superb-blocks"),slug:"bggray",color:"#F2F2F2"},{name:(0,o.__)("Superb Gold","superb-blocks"),slug:"sorange",color:"#FFCA28"},{name:(0,o.__)("White","superb-blocks"),slug:"white",color:"#fff"}],Q=JSON.parse('{"u2":"superb-addons/author-box"}');var f,Y;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)}const B=a.p+"images/defaultAvatar.dda9e675.png",P=a.p+"images/previewAvatar.49120e63.png",U=u,G=l,_=s;function Z(e){return e.url?(0,i.createElement)("a",{target:"_blank",rel:"noopener",href:e.url},(0,i.createElement)("img",{src:e.icon})):null}const H=e=>{const{attributes:t}=e;return(0,i.createElement)(n.Fragment,null,(0,i.createElement)("div",{className:"superbaddons-authorbox superbaddons-authorbox-alignment-"+t.toolbarAlignment,style:{backgroundColor:t.colorBackground,borderRadius:t.borderRadiusBoxed+"px"}},(0,i.createElement)("div",{className:"superbaddons-authorbox-left"},(0,i.createElement)(D,{...e})),(0,i.createElement)("div",{className:"superbaddons-authorbox-right"},(0,i.createElement)(j,{isEditable:e.IsInEditor,className:"superbaddons-authorbox-authorname",tagName:"p",value:t.authorName,style:{color:t.colorAuthorName,fontSize:t.fontSizeAuthorName+"px",lineHeight:t.fontSizeAuthorName+8+"px"}}),(0,i.createElement)(j,{isEditable:e.IsInEditor,className:"superbaddons-authorbox-authorbio",tagName:"p",value:t.authorBio,style:{color:t.colorAuthorBio,fontSize:t.fontSizeAuthorBio+"px",lineHeight:t.fontSizeAuthorBio+5+"px"}}),(0,i.createElement)("div",{className:"superbaddons-authorbox-social-wrapper"},(0,i.createElement)(Z,{url:(0,A.escapeAttribute)(t.socialsLinkFacebook),icon:U}),(0,i.createElement)(Z,{url:(0,A.escapeAttribute)(t.socialsLinkInstagram),icon:G}),(0,i.createElement)(Z,{url:(0,A.escapeAttribute)(t.socialsLinkTwitter),icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzFfNTIpIj4KPHBhdGggZD0iTTE2IDBDMjQuODM1MiAwIDMyIDcuMTY0OCAzMiAxNkMzMiAyNC44MzUyIDI0LjgzNTIgMzIgMTYgMzJDNy4xNjQ4IDMyIDAgMjQuODM1MiAwIDE2QzAgNy4xNjQ4IDcuMTY0OCAwIDE2IDBaIiBmaWxsPSIjMURBMUYyIi8+CjxwYXRoIGQ9Ik0xMi4yODggMjQuMTI4QzE5LjgzMzYgMjQuMTI4IDIzLjk2NDggMTcuODc1MiAyMy45NjQ4IDEyLjQ1MTJDMjMuOTY0OCAxMi4yNzUyIDIzLjk2NDggMTIuMDk2IDIzLjk1MiAxMS45MkMyNC43NTUyIDExLjMzNzYgMjUuNDQ5NiAxMC42MjA4IDI2IDkuNzk1MjFDMjUuMjUxMiAxMC4xMjggMjQuNDU3NiAxMC4zNDU2IDIzLjY0NDggMTAuNDQxNkMyNC41MDI0IDkuOTI5NjEgMjUuMTQyNCA5LjEyMzIxIDI1LjQ0OTYgOC4xNzI4MUMyNC42NDMyIDguNjQ5NjEgMjMuNzYzMiA4Ljk4ODgxIDIyLjg0NDggOS4xNjgwMUMyMS4yODk2IDcuNTE2ODEgMTguNjkxMiA3LjQzNjgxIDE3LjA0IDguOTg4ODFDMTUuOTc0NCA5Ljk5MDQxIDE1LjUyMzIgMTEuNDg0OCAxNS44NTI4IDEyLjkwODhDMTIuNTUzNiAxMi43NDI0IDkuNDc4NCAxMS4xODQgNy4zOTUyIDguNjIwODFDNi4zMDcyIDEwLjQ5NiA2Ljg2MDggMTIuODkyOCA4LjY2NTYgMTQuMDk5MkM4LjAxMjggMTQuMDggNy4zNzI4IDEzLjkwNCA2LjgwMzIgMTMuNTg3MkM2LjgwMzIgMTMuNjAzMiA2LjgwMzIgMTMuNjIyNCA2LjgwMzIgMTMuNjM4NEM2LjgwMzIgMTUuNTkwNCA4LjE3OTIgMTcuMjczNiAxMC4wOTYgMTcuNjYwOEM5LjQ5MTIgMTcuODI0IDguODU3NiAxNy44NDk2IDguMjQzMiAxNy43MzEyQzguNzgwOCAxOS40MDE2IDEwLjMyIDIwLjU0NzIgMTIuMDc2OCAyMC41ODI0QzEwLjYyNCAyMS43MjQ4IDguODI4OCAyMi4zNDU2IDYuOTgyNCAyMi4zNDI0QzYuNjU2IDIyLjM0MjQgNi4zMjk2IDIyLjMyMzIgNi4wMDY0IDIyLjI4MTZDNy44NzUyIDIzLjQ4OCAxMC4wNjA4IDI0LjEyOCAxMi4yODggMjQuMTI0OCIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzUyIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="}),(0,i.createElement)(Z,{url:(0,A.escapeAttribute)(t.socialsLinkLinkedin),icon:_})))))},R=[{attributes:{socialsLinkFacebook:{type:"string",default:""},socialsLinkTwitter:{type:"string",default:""},socialsLinkLinkedin:{type:"string",default:""},socialsLinkInstagram:{type:"string",default:""},authorSelection:{type:"number",default:-1},authorName:{type:"string",default:""},authorBio:{type:"string",default:""},authorImage:{type:"string",default:""},customAuthorImage:{type:"string",default:""},toolbarAlignment:{type:"string",default:"left"},avatarEnabled:{type:"boolean",default:!0},avatarSize:{type:"number",default:96},avatarBorderRadius:{type:"number",default:100},fontSizeAuthorName:{type:"number",default:32},fontSizeAuthorBio:{type:"number",default:14},colorAuthorName:{type:"string",default:"#444444"},colorAuthorBio:{type:"string",default:"#7C7C7C"},colorBackground:{type:"string",default:"#F2F2F2"},borderRadiusBoxed:{type:"number",default:10}},migrate(e){const{socialsLinkTwitter:t,...a}=e;return{...a,socialsLinkX:t}},save:e=>function(e){return(0,i.createElement)("div",{...M.useBlockProps.save()},(0,i.createElement)(H,{...e,IsInEditor:!1}))}(e)}],F={authorSelection:{type:"number",default:-1},authorName:{type:"string",default:(0,o.__)("Author Name","superb-blocks")},authorBio:{type:"string",default:(0,o.__)("Author Description","superb-blocks")},authorImage:{type:"string",default:B},customAuthorImage:{type:"string",default:""}},V={example:{attributes:{socialsLinkFacebook:"#",socialsLinkInstagram:"#",socialsLinkX:"#",socialsLinkLinkedin:"#",authorName:"John Doe",authorBio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id euismod velit, ac imperdiet turpis. Fusce faucibus vulputate neque, eget tempor metus fringilla eget.",authorImage:P}}};(0,r.registerBlockType)(Q.u2,{attributes:{...F,socialsLinkFacebook:{type:"string",default:""},socialsLinkX:{type:"string",default:""},socialsLinkLinkedin:{type:"string",default:""},socialsLinkInstagram:{type:"string",default:""},toolbarAlignment:{type:"string",default:"left"},avatarEnabled:{type:"boolean",default:!0},avatarSize:{type:"number",default:96},avatarBorderRadius:{type:"number",default:100},fontSizeAuthorName:{type:"number",default:32},fontSizeAuthorBio:{type:"number",default:14},colorAuthorName:{type:"string",default:"#444444"},colorAuthorBio:{type:"string",default:"#7C7C7C"},colorBackground:{type:"string",default:"#F2F2F2"},borderRadiusBoxed:{type:"number",default:10}},...V,icon:{src:function(e){return i.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256"},e),f||(f=i.createElement("path",{fill:"#6448e7",d:"M200 32H56a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-72 136a32 32 0 1 1 32-32 32 32 0 0 1-32 32",opacity:.2})),Y||(Y=i.createElement("path",{fill:"#6448e7",d:"M75.19 198.4a8 8 0 0 0 11.21-1.6 52 52 0 0 1 83.2 0 8 8 0 1 0 12.8-9.6 67.9 67.9 0 0 0-27.4-21.69 40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 73.6 187.2a8 8 0 0 0 1.59 11.2M128 112a24 24 0 1 1-24 24 24 24 0 0 1 24-24m72-88H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144ZM88 64a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"})))}},edit:function(e){const{attributes:t,setAttributes:a}=e,r=(e,t,r=1,o=100)=>{let i=p(t,r,o);a({[e]:i})},u=(e,t)=>{let r=k(t);a({[e]:r})},l=(e,t,r)=>{let o=0;o=void 0===t?h(O,r,"size"):p(t,0,100),a({[e]:o})},s=(e,t)=>{let r=x(t);a({[e]:r})};return(0,i.createElement)(n.Fragment,null,(0,i.createElement)(M.BlockControls,null,(0,i.createElement)(M.AlignmentToolbar,{value:t.toolbarAlignment,onChange:e=>{let t=C(["left","center","right"],e);a({toolbarAlignment:t})}})),(0,i.createElement)(M.InspectorControls,null,(0,i.createElement)(y.PanelBody,{title:(0,o.__)("Author Information","superb-blocks"),initialOpen:!0},(0,i.createElement)(m,{currentSelection:t.authorSelection,changeCallback:(e,t)=>{let r=p(e,-1,t.length-1);a({authorSelection:r}),a({authorName:t[e].name}),a({authorBio:t[e].description}),a({authorImage:k(t[e].avatar_urls[96])})}})),(0,i.createElement)(y.PanelBody,{title:(0,o.__)("General Settings","superb-blocks"),initialOpen:!1},(0,i.createElement)(y.RangeControl,{label:(0,o.__)("Boxed Border Radius","superb-blocks"),value:t.borderRadiusBoxed,onChange:e=>r("borderRadiusBoxed",e),min:0,max:100})),(0,i.createElement)(y.PanelBody,{title:(0,o.__)("Avatar","superb-blocks"),initialOpen:!0},(0,i.createElement)(w,{...e}),(0,i.createElement)(y.CheckboxControl,{label:(0,o.__)("Display Avatar","superb-blocks"),checked:t.avatarEnabled,onChange:e=>((e,t)=>{let r=E(t);a({avatarEnabled:r})})(0,e)}),(0,i.createElement)(y.RangeControl,{label:(0,o.__)("Avatar Size","superb-blocks"),value:t.avatarSize,onChange:e=>r("avatarSize",e,24,96),min:24,max:96}),(0,i.createElement)(y.RangeControl,{label:(0,o.__)("Avatar Border Radius","superb-blocks"),value:t.avatarBorderRadius,onChange:e=>r("avatarBorderRadius",e),min:0,max:100})),(0,i.createElement)(y.PanelBody,{title:(0,o.__)("Social Media","superb-blocks"),initialOpen:!0},(0,i.createElement)(y.TextControl,{label:(0,o.__)("Author Facebook Link","superb-blocks"),value:t.socialsLinkFacebook,placeholder:"https://facebook.com/",onChange:e=>u("socialsLinkFacebook",e)}),(0,i.createElement)(y.TextControl,{label:(0,o.__)("Author Instagram Link","superb-blocks"),value:t.socialsLinkInstagram,placeholder:"https://instagram.com/",onChange:e=>u("socialsLinkInstagram",e)}),(0,i.createElement)(y.TextControl,{label:(0,o.__)("Author X Link","superb-blocks"),value:t.socialsLinkX,placeholder:"https://x.com/",onChange:e=>u("socialsLinkX",e)}),(0,i.createElement)(y.TextControl,{label:(0,o.__)("Author LinkedIn Link","superb-blocks"),value:t.socialsLinkLinkedin,placeholder:"https://linkedin.com/",onChange:e=>u("socialsLinkLinkedin",e)}))),(0,i.createElement)(M.InspectorControls,{group:"styles"},(0,i.createElement)(y.PanelBody,{title:(0,o.__)("Colors","superb-blocks"),initialOpen:!0},(0,i.createElement)("label",{className:"components-base-control__label"},(0,o.__)("Author Name Color","superb-blocks")),(0,i.createElement)(y.ColorPalette,{colors:S,defaultValue:t.colorAuthorName,value:t.colorAuthorName,onChange:e=>s("colorAuthorName",e)}),(0,i.createElement)("label",{className:"components-base-control__label"},(0,o.__)("Author Description Color","superb-blocks")),(0,i.createElement)(y.ColorPalette,{colors:S,defaultValue:t.colorAuthorBio,value:t.colorAuthorBio,onChange:e=>s("colorAuthorBio",e)}),(0,i.createElement)("label",{className:"components-base-control__label"},(0,o.__)("Background Color","superb-blocks")),(0,i.createElement)(y.ColorPalette,{colors:S,defaultValue:t.colorBackground,value:t.colorBackground,onChange:e=>s("colorBackground",e)})),(0,i.createElement)(y.PanelBody,{title:(0,o.__)("Font Sizes","superb-blocks"),initialOpen:!0},(0,i.createElement)("label",{className:"components-base-control__label"},(0,o.__)("Author Name","superb-blocks")),(0,i.createElement)(y.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:O,value:t.fontSizeAuthorName,withSlider:!0,withReset:!0,onChange:e=>l("fontSizeAuthorName",e,"huge")}),(0,i.createElement)("hr",null),(0,i.createElement)("label",{className:"components-base-control__label"},(0,o.__)("Author Description","superb-blocks")),(0,i.createElement)(y.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:O,value:t.fontSizeAuthorBio,withSlider:!0,withReset:!0,onChange:e=>l("fontSizeAuthorBio",e,"small")}))),(0,i.createElement)("div",{...(0,M.useBlockProps)()},(0,i.createElement)(d,{...e,IsInEditor:!0})))},save:function(e){return(0,i.createElement)("div",{...M.useBlockProps.save()},(0,i.createElement)(d,{...e,IsInEditor:!1}))},deprecated:R})},241:e=>{e.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"validateHTMLColorName",(function(){return M})),a.d(t,"validateHTMLColorSpecialName",(function(){return n})),a.d(t,"validateHTMLColorHex",(function(){return u})),a.d(t,"validateHTMLColorRgb",(function(){return D})),a.d(t,"validateHTMLColorHsl",(function(){return j})),a.d(t,"validateHTMLColorHwb",(function(){return A})),a.d(t,"validateHTMLColorLab",(function(){return d})),a.d(t,"validateHTMLColorLch",(function(){return y})),a.d(t,"validateHTMLColor",(function(){return z}));const r=e=>e&&"string"==typeof e,o=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenrod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenrodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquamarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenrod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],i=["currentColor","inherit","transparent"],M=e=>{let t=!1;return r(e)&&o.map((a=>(e.toLowerCase()===a.toLowerCase()&&(t=!0),null))),t},n=e=>{let t=!1;return r(e)&&i.map((a=>(e.toLowerCase()===a.toLowerCase()&&(t=!0),null))),t},u=e=>!!r(e)&&(e&&/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i.test(e)),l="(([\\d]{0,5})((\\.([\\d]{1,5}))?))",s=`(${l}%)`,g="(([0-9]|[1-9][0-9]|100)%)",I=`(${g}|(0?((\\.([\\d]{1,5}))?))|1)`,c=`([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})(((${g}))|(0?((\\.([\\d]{1,5}))?))|1))?([\\s]{0,5})\\)`,N="(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)",D=e=>{if(r(e)){const t="([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?",a="((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))",r=new RegExp(`^(rgb)a?\\(${t}${a}${t}${a}${t}${a}((\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0))?\\)$`);return e&&r.test(e)}return!1},j=e=>{if(r(e)){const t=new RegExp(`^(hsl)a?\\((([\\s]{0,5})(${N}|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)|((([0-5])?\\.([\\d]{1,5})|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)|((0?((\\.([\\d]{1,5}))?)|1)turn))((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${g})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${g})([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?|,?)([\\s]{0,5})(((${g}))|(0?((\\.([\\d]{1,5}))?))|1))?\\)$`);return e&&t.test(e)}return!1},A=e=>{if(r(e)){const t=new RegExp(`^(hwb\\(([\\s]{0,5})${N}([\\s]{1,5}))((0|${g})([\\s]{1,5}))((0|${g})${c}$`);return e&&t.test(e)}return!1},d=e=>{if(r(e)){const t="(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))",a=new RegExp(`^(lab\\(([\\s]{0,5})${s}([\\s]{1,5})${t}([\\s]{1,5})${t}${c}$`);return e&&a.test(e)}return!1},y=e=>{if(r(e)){const t=new RegExp(`^lch\\((([\\s]{0,5})((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)([\\s]{1,5})${""+l}([\\s]{1,5})((${N})|(0|${I})|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))([\\s]{0,5})((\\/([\\s]{0,5})${I}))?)\\)$`);return e&&t.test(e)}return!1},z=e=>!!(e&&u(e)||D(e)||j(e)||A(e)||d(e)||y(e));t.default=e=>!!(e&&u(e)||M(e)||n(e)||D(e)||j(e)||A(e)||d(e)||y(e))}])}},a={};function r(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,a,o,i)=>{if(!a){var M=1/0;for(s=0;s<e.length;s++){for(var[a,o,i]=e[s],n=!0,u=0;u<a.length;u++)(!1&i||M>=i)&&Object.keys(r.O).every((e=>r.O[e](a[u])))?a.splice(u--,1):(n=!1,i<M&&(M=i));if(n){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,o,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e={551:0,466:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[M,n,u]=a,l=0;if(M.some((t=>0!==e[t]))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(u)var s=u(r)}for(t&&t(a);l<M.length;l++)i=M[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},a=globalThis.webpackChunksuperb_elementor_and_gutenberg_addons=globalThis.webpackChunksuperb_elementor_and_gutenberg_addons||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=r.O(void 0,[466],(()=>r(691)));o=r.O(o)})();