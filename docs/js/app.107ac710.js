(function(o){function e(e){for(var t,a,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(o[t]=c[t]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var o,e=0;e<r.length;e++){for(var n=r[e],t=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(t=!1)}t&&(r.splice(e--,1),o=a(a.s=n[0]))}return o}var t={},i={app:0},r=[];function a(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=o,a.c=t,a.d=function(o,e,n){a.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:n})},a.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,e){if(1&e&&(o=a(o)),8&e)return o;if(4&e&&"object"===typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)a.d(n,t,function(e){return o[e]}.bind(null,t));return n},a.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return a.d(e,"a",e),e},a.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},a.p="/quotes/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(o,e,n){o.exports=n("56d7")},"034f":function(o,e,n){"use strict";var t=n("4524"),i=n.n(t);i.a},4524:function(o,e,n){},"56d7":function(o,e,n){"use strict";n.r(e);n("2bf3"),n("0dbc"),n("e612"),n("8cf6");var t=n("e832"),i=function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{attrs:{id:"app"}},[o.quote.link?n("a",{attrs:{href:o.quote.link}},[o._v(o._s(o.quote.body))]):n("span",[o._v(o._s(o.quote.body))])])},r=[],a=function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{staticClass:"home"},[o.notificationsSupported?n("button",{on:{click:o.askPermission}},[o._v("Enable notifications")]):o._e()])},s=[],c=n("1475"),u=n.n(c),l=[{body:"Be cool"},{body:"When you create, you must always feel a little bit uncomfortbale. And if you're feeling uncomfortable and alone, you know you're doing something right."},{body:"Simplicity, Patience, and Compassion. Your 3 Greatest Treasures. -Tao Te Ching"},{body:"Moderation is freedom from one's own ideas. -Tao Te Ching"},{body:"Pain that isn't Transformed is Transmitted -Brene Brown"},{body:"Want a lil more? Chill a lil more -Hicks"},{body:"It isn't bout what I do. It's about how I feel -Hicks"},{body:"All we need to do\n is make sure\n we keep talking. -Stephen Hawking"},{body:"Mood is Illusion"},{body:"See self in other"},{body:"What does finishing look like here?"},{body:"Mood swings as unresolved internal conflicts",link:"https://docs.google.com/document/d/1u1-az7tKfeVusg4fxPGbpZKierFkID-N8psiTrOrPqQ/edit"},{body:'"Nothing Bad is Happening" said the Giraffe to the Scared Boy'},{body:'"People can only tell you what is best for them" -Esther Hicks'},{body:'"How do you keep your heart open in hell?" -Ram Dass'},{body:'"You have no right to take away someone\'s suffering" -Ram Dass'},{body:'"Our spirit is fed by a boundless interaction by all that is around us." -Ram Dass'},{body:'"People want to hear what you have to say" -A Star Is Born'},{body:"1st Relax"},{body:"Seeking Harmony w/o Desiring It"},{body:"Dismantle The Machine. All Answers Lie Beneath. -Luna"},{body:"Trying to fix yourself, you'll never do it. -Luna"},{body:"Codify Insights. Update Environment. -Luna"},{body:"Make a decision once. Then just make efforts. -Luna"}];function d(){var o=l.length,e=Math.floor(Math.random()*Math.floor(o));return l[e]}var f={name:"home",data:function(){return{notificationsSupported:!1}},methods:{askPermission:function(){var o=this;this.notificationsSupported&&Notification.requestPermission((function(e){console.log("result from permission question",e),"granted"!==e?alert("You probably do not like notifications?!"):(console.log("A notification will be send from the service worker => This only works in production"),o.showNotification())}))},showNotification:function(){var o=d().body;console.log(o),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.showNotification("Notifications granted",{body:o,icon:"/img/icons/android-chrome-192x192.png",vibrate:[300,200,300]})}))}},created:function(){var o=this;"Notification"in window&&"serviceWorker"in navigator&&(this.notificationsSupported=!0,u.a.schedule("0 42 11 * * *",(function(){o.showNotification()})))}},p=f,h=(n("c83d"),n("a6c2")),b=Object(h["a"])(p,a,s,!1,null,"5ad25764",null),y=b.exports,g={name:"app",data:function(){return{quote:null}},components:{PwaNotification:y},mounted:function(){this.quote=d()}},m=g,v=(n("034f"),Object(h["a"])(m,i,r,!1,null,null,null)),w=v.exports,k=n("1740");Object(k["a"])("".concat("/quotes/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(o){console.error("Error during service worker registration:",o)}}),t["a"].config.productionTip=!1,new t["a"]({render:function(o){return o(w)}}).$mount("#app")},6964:function(o,e,n){},c83d:function(o,e,n){"use strict";var t=n("6964"),i=n.n(t);i.a}});
//# sourceMappingURL=app.107ac710.js.map