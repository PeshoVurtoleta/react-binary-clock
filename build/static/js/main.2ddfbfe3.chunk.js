(this["webpackJsonpreact-grid-binary-clock"]=this["webpackJsonpreact-grid-binary-clock"]||[]).push([[0],[,,,,,,,,,function(n,e,t){n.exports=t(19)},,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),c=t(2),u=t.n(c),i=(t(14),t(15),t(6)),a=t(3),m=t(4),l=t(7),d=t(5),s=t(8);t(16),t(17);function b(n){var e=n.on,t=n.column,o=n.row,c=n.number,u=o?" grid__row-".concat(o):"",i=e?" Clock__Square--lit":"";return r.a.createElement("span",{className:"Clock__Square grid__column-".concat(t).concat(u).concat(i)},e&&c)}t(18);function f(n){var e=n.children;return r.a.createElement("span",{className:"Time"},e)}var w=[{id:1,column:1,row:3,number:2},{id:2,column:1,row:4,number:1},{id:3,column:2,number:8},{id:4,column:2,number:4},{id:5,column:2,number:2},{id:6,column:2,number:1},{id:7,column:3,row:2,number:4},{id:8,column:3,row:3,number:2},{id:9,column:3,row:4,number:1},{id:10,column:4,number:8},{id:11,column:4,number:4},{id:12,column:4,number:2},{id:13,column:4,number:1},{id:14,column:5,row:2,number:4},{id:15,column:5,row:3,number:2},{id:16,column:5,row:4,number:1},{id:17,column:6,number:8},{id:18,column:6,number:4},{id:19,column:6,number:2},{id:20,column:6,number:1}],h=function(n){var e=new Date;return[n(e.getHours()),n(e.getMinutes()),n(e.getSeconds())]},v=function(n){return("0"+n).slice(-2)},p=function(n,e){return e.reduce((function(e,t,o){return e+function(n,e){for(;n.length<e;)n="0"+n;return n}((n[o]>>>0).toString(2),t)}),"").split("")},g=function(n){function e(){var n,t;Object(a.a)(this,e);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(r)))).delay=1e3,t.digitPerRows=[2,4,3,4,3,4],t.timeoutId=null,t.state={time:null,binary:[]},t.tick=function(){return setTimeout((function(){var n=h(v),e=Object(i.a)(n,3),o=e[0],r=e[1],c=e[2];t.setState((function(){return{time:"".concat(o,":").concat(r,":").concat(c),binary:p(o+r+c,t.digitPerRows)}}))}),t.delay)},t}return Object(s.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.timeoutId=this.tick()}},{key:"componentDidUpdate",value:function(){this.timeoutId=this.tick()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var n=this.state,e=n.binary,t=n.time;return r.a.createElement("div",{className:"Clock"},e.map((function(n,e){return r.a.createElement(b,{on:"1"===n,key:w[e].id,column:w[e].column,row:w[e].row,number:w[e].number})})),r.a.createElement(f,null,t))}}]),e}(r.a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2ddfbfe3.chunk.js.map