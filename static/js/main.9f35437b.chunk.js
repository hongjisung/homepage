(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){e.exports=n.p+"static/media/study.4e9ae6c3.md"},144:function(e,t,n){e.exports=n.p+"static/media/projects.b6935ecb.md"},145:function(e,t,n){e.exports=n.p+"static/media/home.1c686847.md"},146:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(40),l=n.n(r),o=(n(53),n(14)),i=n(12),s=n(7),m=function(e){return{textDecoration:"none",color:e.color?e.color:"white",cursor:"pointer",padding:e.padding?e.padding:"0px 0px"}},u=function(e){return c.a.createElement(i.b,{exact:!0,to:e.path,onClick:e.setMobileList,style:m(e)},e.children)},p=(n(62),function(e){var t=e.setMobileList;return c.a.createElement("button",{className:"header-button",onClick:t},c.a.createElement("div",{className:"header-smallbar"}),c.a.createElement("div",{className:"header-smallbar"}),c.a.createElement("div",{className:"header-smallbar"}))}),d=function(){return c.a.createElement("ul",{className:"header-list"},c.a.createElement("li",null,c.a.createElement(u,{path:"/projects"},"Projects")),c.a.createElement("li",null,c.a.createElement(u,{path:"/study"},"Study")),c.a.createElement("li",null,c.a.createElement(u,{path:"/interest"},"interest")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/hongjisung"},c.a.createElement("img",{className:"header-img",src:n(29),alt:"github-logo"}))))},E=function(e){var t=e.setMobileList,a=e.setMLfalse;return c.a.createElement("header",{className:"header-main"},c.a.createElement(p,{setMobileList:t}),c.a.createElement("div",{className:"header-text"},c.a.createElement(u,{path:"/",setMobileList:a},"Jisung")),c.a.createElement(d,null),c.a.createElement("div",{className:"header-button img"},c.a.createElement("a",{href:"https://github.com/hongjisung"},c.a.createElement("img",{className:"header-img",src:n(29),alt:"github-logo"}))))},A=n(9),g=n.n(A),b=(n(37),function(){return c.a.createElement("div",{className:"md"},c.a.createElement(g.a,{source:"\n## Jisung Hong(\ud64d\uc9c0\uc131)\n- rhfktj@gmail.com\n\n## Eduation\n- Study computer science, korea university (2013~)\n"}))}),h=n(43),w=n(44);n(38);function v(){var e=Object(h.a)(["\n  position: fixed;\n  background-color: white;\n  top: ",";\n  height: 50px;\n  width: 100%;\n  font-size: 20px;\n  color: black;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid #585858;\n  border-bottom: 1px solid #585858;\n"]);return v=function(){return e},e}var f=w.a.div(v(),function(e){return e.top}),M=function(e){var t=e.setMobileList;return c.a.createElement("div",{className:"topdownMenu fixed"},c.a.createElement(f,{top:"50px"},c.a.createElement(u,{path:"/projects",color:"#585858",setMobileList:t,padding:"0px 20px"},"Projects")),c.a.createElement(f,{top:"100px"},c.a.createElement(u,{path:"/study",color:"#585858",setMobileList:t,padding:"0px 20px"},"Study")),c.a.createElement(f,{top:"150px"},c.a.createElement(u,{path:"/interest",color:"#585858",setMobileList:t,padding:"0px 20px"},"Interest")))},N=(n(142),function(){return c.a.createElement("header",{className:"sb"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u,{path:"/study/algorithm",color:"#585858"},"Algorithm")),c.a.createElement("li",null,c.a.createElement(u,{path:"/study/graphic",color:"#585858"},"Graphic"))))}),j=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(!0),i=Object(o.a)(l,2),s=i[0],m=i[1];return Object(a.useEffect)(function(){m(!0),fetch(e).then(function(e){return e.text()}).then(function(e){r(e),m(!1)})},[e]),{md:c,loading:s}},D=n(143),I=n(144),x=n(145),k=function(e){var t=void 0;switch(e.name){case"study":t=D;break;case"projects":t=I;break;case"home":t=x;break;default:console.log("wrong route")}var n=j(t).md;return c.a.createElement("div",{className:"md"},c.a.createElement(g.a,{source:n}))},B=function(){return c.a.createElement(b,null)},L=function(){return c.a.createElement(k,{name:"projects"})},y=function(){return c.a.createElement("main",null,c.a.createElement(L,null))},J=function(){return c.a.createElement("div",null)},R=(n(39),function(){return c.a.createElement(k,{name:"study"})}),S=function(){return c.a.createElement("main",{className:"app"},c.a.createElement(N,null),c.a.createElement(s.a,{exact:!0,path:"/study/",component:R}),c.a.createElement(s.a,{path:"/study/algorithm",component:J}))},U=function(){return c.a.createElement("div",null,c.a.createElement(g.a,{source:"## &nbsp;&nbsp;My Interest\n"}))},O=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],l=function(){return r(!n)};return c.a.createElement(i.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(E,{setMobileList:l,setMLfalse:function(){return r(!1)}}),c.a.createElement("div",{className:"app-top"}),n?[c.a.createElement(M,{setMobileList:l}),c.a.createElement("div",{className:"topdownMenu "})]:null,c.a.createElement("div",{className:"app-body"},c.a.createElement(s.a,{exact:!0,path:"/",component:B}),c.a.createElement(s.a,{path:"/projects",component:y}),c.a.createElement(s.a,{path:"/study",component:S}),c.a.createElement(s.a,{path:"/interest",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){e.exports=n(146)},53:function(e,t,n){},62:function(e,t,n){}},[[48,1,2]]]);
//# sourceMappingURL=main.9f35437b.chunk.js.map