(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{391:function(n,e,t){"use strict";var a=t(225),s=t(7),o=t(14),r=t(30),i=t(228),c=t(226);a("match",1,(function(n,e,t){return[function(e){var t=r(this),a=null==e?void 0:e[n];return void 0!==a?a.call(e,t):new RegExp(e)[n](String(t))},function(n){var a=t(e,n,this);if(a.done)return a.value;var r=s(n),l=String(this);if(!r.global)return c(r,l);var p=r.unicode;r.lastIndex=0;for(var u,d=[],f=0;null!==(u=c(r,l));){var v=String(u[0]);d[f]=v,""===v&&(r.lastIndex=i(l,o(r.lastIndex),p)),f++}return 0===f?null:d}]}))},396:function(n,e,t){t(126)("toStringTag")},397:function(n,e,t){var a=t(3);t(59)(a.JSON,"JSON",!0)},398:function(n,e,t){t(59)(Math,"Math",!0)},399:function(n,e,t){"use strict";var a=t(12),s=t(3),o=t(125),r=t(22),i=t(8),c=t(24),l=t(407),p=t(64),u=t(4),d=t(60),f=t(86).f,v=t(32).f,m=t(11).f,h=t(418).trim,g=s.Number,b=g.prototype,w="Number"==c(d(b)),k=function(n){var e,t,a,s,o,r,i,c,l=p(n,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=h(l)).charCodeAt(0))||45===e){if(88===(t=l.charCodeAt(2))||120===t)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+l}for(r=(o=l.slice(2)).length,i=0;i<r;i++)if((c=o.charCodeAt(i))<48||c>s)return NaN;return parseInt(o,a)}return+l};if(o("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,x=function(n){var e=arguments.length<1?0:n,t=this;return t instanceof x&&(w?u((function(){b.valueOf.call(t)})):"Number"!=c(t))?l(new g(k(e)),t,x):k(e)},C=a?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;C.length>S;S++)i(g,y=C[S])&&!i(x,y)&&m(x,y,v(g,y));x.prototype=b,b.constructor=x,r(s,"Number",x)}},400:function(n,e,t){function a(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=a=function(n){return typeof n}:n.exports=a=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(e)}t(57),t(58),t(85),t(63),t(9),t(31),t(41),n.exports=a},401:function(n,e){n.exports=function(n){return n&&n.__esModule?n:{default:n}}},406:function(n,e,t){"use strict";function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",(function(){return a}))},407:function(n,e,t){var a=t(5),s=t(132);n.exports=function(n,e,t){var o,r;return s&&"function"==typeof(o=e.constructor)&&o!==t&&a(r=o.prototype)&&r!==t.prototype&&s(n,r),n}},417:function(n,e,t){},418:function(n,e,t){var a=t(30),s="["+t(419)+"]",o=RegExp("^"+s+s+"*"),r=RegExp(s+s+"*$"),i=function(n){return function(e){var t=String(a(e));return 1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(r,"")),t}};n.exports={start:i(1),end:i(2),trim:i(3)}},419:function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},422:function(n,e,t){"use strict";var a=t(1),s=t(62),o=t(449),r=t(450),i=t(4),c=1..toFixed,l=Math.floor,p=function(n,e,t){return 0===e?t:e%2==1?p(n,e-1,t*n):p(n*n,e/2,t)};a({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){c.call({})}))},{toFixed:function(n){var e,t,a,i,c=o(this),u=s(n),d=[0,0,0,0,0,0],f="",v="0",m=function(n,e){for(var t=-1,a=e;++t<6;)a+=n*d[t],d[t]=a%1e7,a=l(a/1e7)},h=function(n){for(var e=6,t=0;--e>=0;)t+=d[e],d[e]=l(t/n),t=t%n*1e7},g=function(){for(var n=6,e="";--n>=0;)if(""!==e||0===n||0!==d[n]){var t=String(d[n]);e=""===e?t:e+r.call("0",7-t.length)+t}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(t=(e=function(n){for(var e=0,t=n;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}(c*p(2,69,1))-69)<0?c*p(2,-e,1):c/p(2,e,1),t*=4503599627370496,(e=52-e)>0){for(m(0,t),a=u;a>=7;)m(1e7,0),a-=7;for(m(p(10,a,1),0),a=e-1;a>=23;)h(1<<23),a-=23;h(1<<a),m(1,1),h(2),v=g()}else m(0,t),m(1<<-e,0),v=g()+r.call("0",u);return v=u>0?f+((i=v.length)<=u?"0."+r.call("0",u-i)+v:v.slice(0,i-u)+"."+v.slice(i-u)):f+v}})},423:function(n,e,t){var a=t(1),s=t(451);a({global:!0,forced:parseFloat!=s},{parseFloat:s})},449:function(n,e,t){var a=t(24);n.exports=function(n){if("number"!=typeof n&&"Number"!=a(n))throw TypeError("Incorrect invocation");return+n}},450:function(n,e,t){"use strict";var a=t(62),s=t(30);n.exports="".repeat||function(n){var e=String(s(this)),t="",o=a(n);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(t+=e);return t}},451:function(n,e,t){var a=t(3),s=t(418).trim,o=t(419),r=a.parseFloat,i=1/r(o+"-0")!=-1/0;n.exports=i?function(n){var e=s(String(n)),t=r(e);return 0===t&&"-"==e.charAt(0)?-0:t}:r},459:function(n,e,t){"use strict";var a=t(401);e.__esModule=!0,e.default=function(){return{install:function(n){n.mixins||(n.mixins=[]),n.mixins.push({mounted:function(){var n=this;this.$nextTick((function(){o(n.$el).addEventListener("click",n.handleCopyCodeClick)}))},beforeDestroy:function(){o(this.$el).removeEventListener("click",this.handleCopyCodeClick)},methods:{handleCopyCodeClick:function(n){var e=n.target;if(e.classList.contains("v-md-copy-code-btn")){var t=function n(e){if(e.classList.contains("v-md-pre-wrapper"))return e;return n(e.parentNode)}(e.parentNode);if(t){var a=t.querySelector("code").innerText;(0,s.default)(a),this.$emit("copy-code-success",a)}}}}})}}};var s=a(t(460));function o(n){return n.classList.contains("v-md-editor-preview")?n:n.querySelector(".v-md-editor-preview")}},460:function(n,e,t){"use strict";var a=t(461),s={"text/plain":"Text","text/html":"Url",default:"Text"};n.exports=function(n,e){var t,o,r,i,c,l,p=!1;e||(e={}),t=e.debug||!1;try{if(r=a(),i=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=n,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(a){if(a.stopPropagation(),e.format)if(a.preventDefault(),void 0===a.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=s[e.format]||s.default;window.clipboardData.setData(o,n)}else a.clipboardData.clearData(),a.clipboardData.setData(e.format,n);e.onCopy&&(a.preventDefault(),e.onCopy(a.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(a){t&&console.error("unable to copy using execCommand: ",a),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",n),e.onCopy&&e.onCopy(window.clipboardData),p=!0}catch(a){t&&console.error("unable to copy using clipboardData: ",a),t&&console.error("falling back to prompt"),o=function(n){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return n.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,n)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),l&&document.body.removeChild(l),r()}return p}},461:function(n,e){n.exports=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var e=document.activeElement,t=[],a=0;a<n.rangeCount;a++)t.push(n.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return n.removeAllRanges(),function(){"Caret"===n.type&&n.removeAllRanges(),n.rangeCount||t.forEach((function(e){n.addRange(e)})),e&&e.focus()}}},462:function(n,e,t){},729:function(n,e,t){(function(n){var a,s,o;t(57),t(58),t(396),t(221),t(397),t(398),t(399),t(422),t(9),t(423),t(55),t(391);var r,i=t(400);"undefined"!=typeof self&&self,r=function(){return function(n){var e={};function t(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==i(n)&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)t.d(a,s,function(e){return n[e]}.bind(null,s));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=114)}({114:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"v-md-editor-preview",style:{tabSize:n.tabSize,"-moz-tab-size":n.tabSize,"-o-tab-size":n.tabSize},on:{click:n.handlePreviewClick}},[t("div",{class:[n.previewClass],domProps:{innerHTML:n._s(n.html)}}),n.previewSrc?t("v-md-image-preview",{attrs:{src:n.previewSrc,"on-close":n.handleClosePreview}}):n._e()],1)};a._withStripped=!0;var s={name:"v-md-preview-html",mixins:[t(19).a],props:{html:{type:String,default:""},previewClass:String}},o=t(2),r=Object(o.a)(s,a,[],!1,null,null,null);r.options.__file="src/preview-html.vue";var i=r.exports;t(20),i.version="1.7.5",i.install=function(n){n.component(i.name,i)},i.use=function(n,e){return"function"==typeof n?n(i,e):n.install(i,e),i},e.default=i},19:function(n,e,t){"use strict";var a=t(6),s=t(9),o=t(3),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{name:"viewer-fade",appear:""}},[t("div",{ref:"v-md-viewer__wrapper",staticClass:"v-md-viewer__wrapper",style:{"z-index":n.zIndex},attrs:{tabindex:"-1"}},[t("div",{staticClass:"v-md-viewer__mask",on:{click:n.hide}}),t("div",{staticClass:"v-md-viewer__btn v-md-viewer__actions"},[t("div",{staticClass:"v-md-viewer__actions__inner"},[t("i",{staticClass:"v-md-icon-zoom-out",on:{click:function(e){return n.handleActions("zoomOut")}}}),t("i",{staticClass:"v-md-icon-zoom-in",on:{click:function(e){return n.handleActions("zoomIn")}}}),t("i",{staticClass:"v-md-icon-refresh-left",on:{click:function(e){return n.handleActions("anticlocelise")}}}),t("i",{staticClass:"v-md-icon-refresh-right",on:{click:function(e){return n.handleActions("clocelise")}}})])]),t("div",{staticClass:"v-md-viewer__canvas"},[t("img",{ref:"img",staticClass:"v-md-viewer__img",style:n.imgStyle,attrs:{src:n.src},on:{load:n.handleImgLoad,error:n.handleImgError,mousedown:n.handleMouseDown}})])])])};r._withStripped=!0;var i=t(4),c="undefined"!=typeof window&&window.navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel",l="",p={name:"v-md-image-preview",props:{src:String,zIndex:{type:Number,default:2e3},onClose:{type:Function,default:function(){}}},data:function(){return{isShow:!1,infinite:!0,loading:!1,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{imgStyle:function(){var n=this.transform,e=n.scale,t=n.deg,a=n.offsetX,s=n.offsetY;return{transform:"scale("+e+") rotate("+t+"deg)",transition:n.enableTransition?"transform .3s":"","margin-left":a+"px","margin-top":s+"px",maxWidth:"100%",maxHeight:"100%"}}},mounted:function(){this.deviceSupportInstall(),this.$refs["v-md-viewer__wrapper"].focus(),l=document.body.style.overflow,document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow=l},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var n=this;this.keyDownHandler=function(e){switch(e.keyCode){case 38:n.handleActions("zoomIn");break;case 40:n.handleActions("zoomOut")}},this.mouseWheelHandler=function(e){(e.wheelDelta?e.wheelDelta:-e.detail)>0?n.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):n.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})},document.addEventListener("keydown",this.keyDownHandler),document.addEventListener(c,this.mouseWheelHandler)},deviceSupportUninstall:function(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener(c,this.mouseWheelHandler),this.keyDownHandler=null,this.mouseWheelHandler=null},handleImgLoad:function(){this.loading=!1},handleImgError:function(n){this.loading=!1,n.target.alt="加载失败"},handleMouseDown:function(n){var e=this;if(!this.loading&&0===n.button){var t=this.transform,a=t.offsetX,s=t.offsetY,o=n.pageX,r=n.pageY;this.dragHandler=function(n){e.transform.offsetX=a+n.pageX-o,e.transform.offsetY=s+n.pageY-r},document.addEventListener("mousemove",this.dragHandler),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",e.dragHandler)})),n.preventDefault()}},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},handleActions:function(n,e){if(void 0===e&&(e={}),!this.loading){var t=Object(i.a)({zoomRate:.2,rotateDeg:90,enableTransition:!0},e),a=t.zoomRate,s=t.rotateDeg,o=t.enableTransition,r=this.transform;switch(n){case"zoomOut":r.scale>.2&&(r.scale=parseFloat((r.scale-a).toFixed(3)));break;case"zoomIn":r.scale=parseFloat((r.scale+a).toFixed(3));break;case"clocelise":r.deg+=s;break;case"anticlocelise":r.deg-=s}r.enableTransition=o}}}},u=(t(33),t(2)),d=Object(u.a)(p,r,[],!1,null,null,null);d.options.__file="src/components/image-preview.vue";var f,v=d.exports;e.a={props:{scrollContainer:{type:Function,default:function(){return window}},top:{type:Number,default:0},tabSize:{type:Number,default:2}},components:(f={},f[v.name]=v,f),data:function(){return{previewSrc:""}},methods:{handleClosePreview:function(){this.previewSrc=""},handlePreviewClick:function(n){var e=n.target;if("IMG"!==e.tagName){var t=e.getAttribute(o.a),a=this.$el.querySelector("["+o.b+'="'+t+'"]');a&&this.scrollToTarget({target:a})}else{var s=e.getAttribute("src");this.previewSrc=s}},getOffsetTop:function(n,e){var t=n.getBoundingClientRect();return e===window||e===document.documentElement?t.top:t.top-e.getBoundingClientRect().top},scrollToTarget:function(n){var e=n.target,t=n.scrollContainer,o=void 0===t?this.scrollContainer():t,r=n.top,i=void 0===r?this.top:r,c=n.onScrollEnd,l=this.getOffsetTop(e,o),p=Object(a.a)(o)+l-i;Object(s.a)({scrollTarget:o,scrollToTop:p,onScrollEnd:c})},scrollToLine:function(n){var e=n.lineIndex,t=n.onScrollEnd;if(e){var a=this.$el.querySelector("["+o.c+'="'+e+'"]');a&&this.scrollToTarget({target:a,onScrollEnd:t})}}}}},2:function(n,e,t){"use strict";function a(n,e,t,a,s,o,r,i){var c,l="function"==typeof n?n.options:n;if(e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),s&&s.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=i?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(n,e){return c.call(e),p(n,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:n,options:l}}t.d(e,"a",(function(){return a}))},20:function(n,e,t){},3:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return o}));var a="data-v-md-line",s="data-v-md-heading",o="data-v-md-anchor"},33:function(n,e,t){"use strict";var a=t(7);t.n(a).a},4:function(n,e,t){"use strict";function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return a}))},6:function(n,e,t){"use strict";function a(n){var e=0;return n===window?e=n.pageYOffset:n&&(e=n.scrollTop),e}function s(n,e){n===window?window.scrollTo(window.pageYOffset,e):n&&(n.scrollTop=e)}t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return s}))},7:function(n,e,t){},9:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return o}));var a=t(6);function s(n){var e=n.currentScrollTop,t=n.scrollToTop,a=n.scrollFn,s=n.percent,o=void 0===s?10:s,r=n.onScrollEnd,i=t>e?"down":"up",c=o/100*(t-e);window.requestAnimationFrame((function n(){e+=c,"down"===i&&e>=t||"up"===i&&e<=t?(a(t),window.cancelAnimationFrame(void 0),r&&window.requestAnimationFrame(r)):(a(e),window.requestAnimationFrame(n))}))}function o(n){var e=n.scrollTarget,t=n.scrollToTop,o=n.percent,r=void 0===o?10:o,i=n.onScrollEnd;s({currentScrollTop:Object(a.a)(e),scrollToTop:t,scrollFn:function(n){return Object(a.b)(e,n)},percent:r,onScrollEnd:i})}}}).default},"object"==i(e)&&"object"==i(n)?n.exports=r():(s=[],void 0===(o="function"==typeof(a=r)?a.apply(e,s):a)||(n.exports=o))}).call(this,t(124)(n))},730:function(n,e,t){},754:function(n,e,t){"use strict";t.r(e);var a=t(406),s=t(729),o=t.n(s),r=(t(730),t(459)),i=t.n(r);t(417),t(462);o.a.use(i()());var c={components:Object(a.a)({},o.a.name,o.a),data:function(){return{html:'<div class="vuepress-markdown-body"><div data-v-md-line="1"><h1 align="center">Markdown Editor built on Vue</h1>\n</div><div data-v-md-line="3"><p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n</div><h2 data-v-md-heading="links" data-v-md-line="9">Links</h2>\n<ul data-v-md-line="11">\n<li><a href="https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html" target="_blank">Demo<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></li>\n<li><a href="https://code-farmer-i.github.io/vue-markdown-editor/" target="_blank">Documentation<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></li>\n<li><a href="https://code-farmer-i.github.io/vue-markdown-editor/changelog.html" target="_blank">Changelog<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></li>\n</ul>\n<h2 data-v-md-heading="install" data-v-md-line="15">Install</h2>\n<div data-v-md-line="17"><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper-bash line-numbers-mode"><pre class="v-md-prism-bash"><code># use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n</code></pre>\n<div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div>\n    <button class="v-md-copy-code-btn" type="button">\n      <i>\n        <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n          <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>\n        </svg>\n      </i>\n    </button></div></div><h2 data-v-md-heading="quick-start" data-v-md-line="25">Quick Start</h2>\n<div data-v-md-line="27"><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper-js line-numbers-mode"><pre class="v-md-prism-js"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> VueMarkdownEditor <span class="token keyword">from</span> <span class="token string">\'@kangc/v-md-editor\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'@kangc/v-md-editor/lib/style/base-editor.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> vuepressTheme <span class="token keyword">from</span> <span class="token string">\'@kangc/v-md-editor/lib/theme/vuepress.js\'</span><span class="token punctuation">;</span>\n\nVueMarkdownEditor<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuepressTheme<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueMarkdownEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div>\n    <button class="v-md-copy-code-btn" type="button">\n      <i>\n        <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n          <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>\n        </svg>\n      </i>\n    </button></div></div><h2 data-v-md-heading="usage" data-v-md-line="38">Usage</h2>\n<div data-v-md-line="40"><div class="v-md-pre-wrapper copy-code-mode v-md-pre-wrapper-html line-numbers-mode"><pre class="v-md-prism-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-md-editor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-md-editor</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n<div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div>\n    <button class="v-md-copy-code-btn" type="button">\n      <i>\n        <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n          <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>\n        </svg>\n      </i>\n    </button></div></div><h2 data-v-md-heading="refrence" data-v-md-line="56">Refrence</h2>\n<ul data-v-md-line="58">\n<li><a href="https://github.com/ElemeFE/element/tree/dev/packages/scrollbar" target="_blank">ElementUi Scrollbar Component<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></li>\n<li><a href="https://vuepress.github.io/zh/plugins/container/" target="_blank">vuepress-plugin-container<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></li>\n</ul>\n</div>'}}},l=t(54),p=Object(l.a)(c,(function(){var n=this.$createElement;return(this._self._c||n)("v-md-preview-html",{attrs:{html:this.html,height:"500px"}})}),[],!1,null,null,null);e.default=p.exports}}]);