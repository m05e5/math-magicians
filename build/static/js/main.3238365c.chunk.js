(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(17),c=n.n(o),s=(n(28),n(18)),r=n(19),l=n(23),u=n(21),m=n(8),d=n(2),j=(n(29),n(10)),p=n(22),b=n(13),x=n.n(b);function h(t,e,n){var i=x()(t),a=x()(e);if("+"===n)return i.plus(a).toString();if("-"===n)return i.minus(a).toString();if("x"===n)return i.times(a).toString();if("\xf7"===n)return i.div(a).toString();if("%"===n)return i.mod(a).toString();throw Error("Unknown operation '".concat(n,"'"))}var O=n(1),g=function(){var t={total:null,next:null,operation:null},e=Object(i.useState)(t),n=Object(p.a)(e,2),a=n[0],o=n[1],c=function(e){var n,i,c=e.target.innerHTML;if("\xf7"===a.operation&&"="===c&&"0"===a.next)document.getElementById("calc-p").innerHTML="Math Error",setTimeout((function(){o(Object(j.a)({},t))}),1e3);else if(null!==a.operation&&"="===c&&null!==a.next&&null===a.total)document.getElementById("calc-p").innerHTML="Syntaxe Error",setTimeout((function(){o(Object(j.a)({},t))}),1e3);else{var s=(n=a,"AC"===(i=c)?{total:null,next:null,operation:null}:i.match(/[0-9]+/)?"0"===i&&"0"===n.next?{}:n.operation?n.next?{next:n.next+i}:{next:i}:n.next?{next:n.next+i,total:null}:{next:i,total:null}:"."===i?n.next?n.next.includes(".")?{}:{next:n.next+"."}:n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:n.total+"."}:{total:"0."}:"="===i?n.next&&n.operation?{total:h(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===i?n.next?{next:(-1*parseFloat(n.next)).toString()}:n.total?{total:(-1*parseFloat(n.total)).toString()}:{}:n.operation?{total:h(n.total,n.next,n.operation),next:null,operation:i}:n.next?{total:n.next,next:null,operation:i}:{operation:i});o(Object(j.a)(Object(j.a)({},a),s))}};return Object(O.jsxs)("div",{className:"calc",children:[Object(O.jsx)("div",{className:"calc-input",children:Object(O.jsx)("p",{id:"calc-p",children:(a.total||"")+(a.operation||"")+(a.next||"")})}),Object(O.jsx)("table",{className:"calc-buttons",children:["AC","+/-","%","\xf7",7,8,9,"x",4,5,6,"-",1,2,3,"+",0,".","="].map((function(t){return Object(O.jsx)("button",{type:"button",onClick:function(t){return c(t)},className:"btnn",name:t,children:t},t)}))})]})},f=function(){return Object(O.jsxs)("div",{className:"calculator",children:[Object(O.jsx)("h3",{children:"Wecome to our page!"}),Object(O.jsx)(g,{})]})},v=function(){return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)("h2",{children:"Wecome to our page!"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus aspernatur, molestias dicta enim fuga perspiciatis non ratione ullam, iste natus fugiat temporibus veniam impedit distinctio quis? Ab, commodi eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus aspernatur, molestias dicta enim fuga perspiciatis non ratione ullam, iste natus fugiat temporibus veniam impedit distinctio quis? Ab, commodi eligendi!"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus aspernatur, molestias dicta enim fuga perspiciatis non ratione ullam, iste natus fugiat temporibus veniam impedit distinctio quis? Ab, commodi eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus aspernatur, molestias dicta enim fuga perspiciatis non ratione ullam, iste natus fugiat temporibus veniam impedit distinctio quis? Ab, commodi eligendi!"})]})},N=function(){return Object(O.jsx)("div",{className:"quote",children:Object(O.jsx)("p",{children:"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston"})})},L=function(){return Object(O.jsxs)("header",{children:[Object(O.jsx)("h1",{children:"Math Magicians"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{className:"navUl",children:[Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/",className:"navLink",children:"home"})}),"|",Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/calculator",className:"navLink",children:"calculator"})}),"|",Object(O.jsx)("li",{children:Object(O.jsx)(m.b,{to:"/quote",className:"navLink",children:"quote"})})]})})]})},S=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(L,{}),Object(O.jsx)("div",{className:"App-body",id:"App-body",children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/quote",children:Object(O.jsx)(N,{})}),Object(O.jsx)(d.a,{path:"/calculator",children:Object(O.jsx)(f,{})}),Object(O.jsx)(d.a,{path:"/",children:Object(O.jsx)(v,{})})]})})]})})}}]),n}(a.a.PureComponent);c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3238365c.chunk.js.map