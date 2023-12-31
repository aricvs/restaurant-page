(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,":root {\n  --text-color: rgb(255, 184, 53);\n}\n\nhtml {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  background-color: black;\n  color: var(--text-color);\n  font-family: sans-serif;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 2.5rem 1fr;\n  max-width: 50%;\n}\n\n.tab-selector {\n  height: 2rem;\n  width: 4rem;\n  border: 2px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.selected {\n  background-color: white;\n  color: red;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid;\n  padding: 2rem;\n  grid-column: 1 / -1;\n  grid-row: 1 / -1;\n}\n\n.tab-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=n.p+"1e05ff4a1d2bb9766ebe.jpg",h=()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("img"),r=document.createElement("h1"),o=document.createElement("p");t.classList.add("tab-div"),n.src=v,n.alt="meats on a grill",n.width="300",r.textContent="The best barbecue!",o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n  occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n  mollit anim id est laborum.",t.appendChild(n),t.appendChild(r),t.appendChild(o),e.appendChild(t)};(()=>{const e=document.getElementsByTagName("BODY")[0],t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.classList.add("tab1","tab-selector","selected"),n.classList.add("tab2","tab-selector"),r.classList.add("tab3","tab-selector"),t.textContent="Home",n.textContent="About",r.textContent="Contact",e.appendChild(t),e.appendChild(n),e.appendChild(r)})(),h(),(()=>{const e=document.querySelector(".tab1"),t=document.querySelector(".tab2"),n=document.querySelector(".tab3");e.addEventListener("click",(()=>{const r=document.querySelector("#content");for(;r.firstChild;)r.removeChild(r.firstChild);e.classList.add("selected"),t.classList.remove("selected"),n.classList.remove("selected"),h()}))})(),(()=>{const e=document.querySelector(".tab1"),t=document.querySelector(".tab2"),n=document.querySelector(".tab3");t.addEventListener("click",(()=>{const r=document.querySelector("#content");for(;r.firstChild;)r.removeChild(r.firstChild);t.classList.add("selected"),e.classList.remove("selected"),n.classList.remove("selected"),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("p");t.classList.add("tab-div"),n.textContent="This project was done mainly to learn about integrating\n  a project in Webpack, I got lazy and did not want to add any content or make\n  it look good. Please don't take this as a demonstration of my design skills.",t.appendChild(n),e.appendChild(t)})()}))})(),(()=>{const e=document.querySelector(".tab1"),t=document.querySelector(".tab2"),n=document.querySelector(".tab3");n.addEventListener("click",(()=>{const r=document.querySelector("#content");for(;r.firstChild;)r.removeChild(r.firstChild);n.classList.add("selected"),e.classList.remove("selected"),t.classList.remove("selected"),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("p");t.classList.add("tab-div"),n.textContent="There is no contact information here, but if you like my \n  Webpack skills and want to hire me please send me an email at \n  aricvs@gmail.com.",t.appendChild(n),e.appendChild(t)})()}))})()})()})();