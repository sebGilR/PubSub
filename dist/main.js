!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:h(m,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var i=v++;n=p||(p=c(t)),o=m.bind(null,n,i,!1),r=m.bind(null,n,i,!0)}else n=c(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"*{padding:0;margin:0}html{font-size:20px}body{min-height:100px}.wrapper{display:grid;grid-template-columns:1fr 3fr;grid-template-areas:'forms lists';grid-template-rows:auto}main{background-color:#eee;grid-area:lists;display:flex;flex-direction:row;justify-content:space-evenly;align-items:stretch}aside{grid-area:forms;background-color:#ddd}.actor-container{padding:2rem;margin:1rem;border:1px solid #ddd;flex-basis:40%;background-color:#e6ccb3;color:#4d331a;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight:300}.actor-container::before{display:block;content:'Actors';transform:rotate(-5deg) translate(-1rem, -2rem);text-shadow:2px 2px 4px #999;font-weight:500;font-size:2rem}.movie-container{padding:2rem;margin:1rem;border:1px solid #ddd;flex-basis:40%;background-color:#b3d5e6;color:#1a3c4d;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight:300}.movie-container::before{display:block;content:'Movies';transform:rotate(-5deg) translate(-1rem, -2rem);text-shadow:2px 2px 4px #999;font-weight:500;font-size:2rem}.movie-form,.actor-form{padding:1rem;margin:1rem;border:1px solid #ddd;flex-basis:100%;background-color:#b3e6c4;color:#1a4d2b;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight:300;font-size:1rem}.movie-form input,.movie-form button,.actor-form input,.actor-form button{font-size:inherit;font-weight:inherit;margin:0.25rem;padding:0.25rem 1rem}.stats-container{padding:1rem;margin:1rem;border:1px solid #ddd;flex-basis:100%;background-color:#b3b3e6;color:#1a1a4d;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-weight:300}footer{padding:1rem}footer ol{list-style-type:decimal;list-style-position:inside}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o={events:{},subscribe:function(e,t){console.log("PUBSUB: someone just subscribed to know about "+e),this.events[e]=this.events[e]||[],this.events[e].push(t)},unsubscribe:function(e,t){console.log("PUBSUB: someone just UNsubscribed from "+e),this.events[e]&&(this.events[e]=this.events[e].filter(e=>e!==t))},publish:function(e,t){console.log(`PUBSUB: Making an broadcast about ${e} with ${t}`),this.events[e]&&this.events[e].forEach(e=>{e(t)})}};const r={list:[],render:e=>{let t=document.getElementById("movieListTemplate").content.cloneNode(!0);e.appendChild(t),document.querySelector(".movie-container ul").addEventListener("click",r.deleted),console.log("MOVIES: want to know if a movie is added"),o.subscribe("movieAdded",r.movieAdded)},deleted:e=>{let t=e.target.closest("li"),n=t.textContent;r.list=r.list.filter(e=>e!==n),o.publish("movieDeleted",r.list),t.parentElement.removeChild(t)},movieAdded:e=>{console.log(`MOVIES: I hear that ${e} was added`);let t=new Set(r.list);t.add(e),r.list=Array.from(t).sort(),console.log("MOVIES: just moviesUpdated the list"),o.publish("moviesUpdated",r.list);let n=document.querySelector(".movie-container ul");n.innerHTML="";let i=document.createDocumentFragment();r.list.forEach(e=>{let t=document.createElement("li");t.innerText=e,i.appendChild(t)}),n.appendChild(i)}},i={list:[],render:e=>{let t=document.getElementById("actorListTemplate").content.cloneNode(!0);e.appendChild(t),document.querySelector(".actor-container ul").addEventListener("click",i.actorDeleted),console.log("ACTORS: want to know if an actor is added"),o.subscribe("actorAdded",i.actorAdded)},actorAdded:e=>{console.log(`ACTORS: I hear that ${e} was added`);let t=new Set(i.list);t.add(e),i.list=Array.from(t).sort(),console.log("ACTORS: actorsUpdated the list"),o.publish("actorsUpdated",i.list);let n=document.querySelector(".actor-container ul");n.innerHTML="";let r=document.createDocumentFragment();i.list.forEach(e=>{let t=document.createElement("li");t.innerText=e,r.appendChild(t)}),n.appendChild(r)},actorDeleted:e=>{let t=e.target.closest("li"),n=t.textContent;i.list=i.list.filter(e=>e!==n),t.parentElement.removeChild(t),console.log("ACTORS: actorDeleted the "+n),o.publish("actorDeleted",i.list)}},a={render:e=>{let t=document.getElementById("movieFormTemplate").content.cloneNode(!0);t.querySelector("button").addEventListener("click",a.add),e.appendChild(t)},add:e=>{e.preventDefault();let t=document.querySelector(".movie-form input"),n=t.value;t.value="",console.log(`MOVIE FORM: just movieAdded "${n}"`),o.publish("movieAdded",n)}},s={render:e=>{let t=document.getElementById("actorFormTemplate").content.cloneNode(!0);t.querySelector("button").addEventListener("click",s.add),e.appendChild(t)},add:e=>{e.preventDefault();let t=document.querySelector(".actor-form input"),n=t.value;t.value="",console.log("ACTOR FORM: just actorAdded "+n),o.publish("actorAdded",n)}},l={render:e=>{let t=document.createElement("div");t.className="stats-container",e.appendChild(t);let n=document.createElement("p");n.className="movie-count",n.innerHTML="0 movies in list",t.appendChild(n);let r=document.createElement("p");r.className="actor-count",r.innerHTML="0 actors in list",t.appendChild(r),o.subscribe("moviesUpdated",l.moviesUpdated),console.log("STATS: listening for moviesUpdated events"),o.subscribe("actorsUpdated",l.actorsUpdated),console.log("STATS: listening for actorsUpdated events"),o.subscribe("actorDeleted",l.actorsUpdated),o.subscribe("movieDeleted",l.moviesUpdated)},moviesUpdated:e=>{console.log(`STATS: I hear that the movie list now has ${e.length} titles.`),document.querySelector(".movie-count").innerText=e.length+" movies in list"},actorsUpdated:e=>{console.log(`STATS: I hear that the actor list now has ${e.length} names.`),document.querySelector(".actor-count").innerText=e.length+" actors in list"}};document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("main"),t=document.querySelector("aside");r.render(e),a.render(t),l.render(t),i.render(e),s.render(t)})}]);