(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,n,o){},14:function(t,n,o){},16:function(t,n,o){"use strict";o.r(n);var e=o(4),s=o.n(e),c=o(5),r=o(6),i=o(8),a=o(7),l=o(1),u=o.n(l),d=(o(13),o(2)),h=o.n(d);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){return f().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)}))},j=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},y=(o(14),o(0)),m=function(t){var n=t.goods;return Object(y.jsx)("ul",{className:"goods__list",children:n&&n.map((function(t){return Object(y.jsx)("li",{className:"goods__item",style:{color:t.color},children:t.name},t.id)}))})},g=function(t){Object(i.a)(o,t);var n=Object(a.a)(o);function o(){var t;Object(c.a)(this,o);for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return(t=n.call.apply(n,[this].concat(s))).state={goods:null,sortBy:"all"},t.showAll=function(){f().then((function(n){t.setState({goods:n,sortBy:"all"})}))},t.showFirst5=function(){b().then((function(n){t.setState({goods:n,sortBy:"first5"})}))},t.showOnlyRed=function(){j().then((function(n){t.setState({goods:n,sortBy:"onlyRed"})}))},t}return Object(r.a)(o,[{key:"render",value:function(){var t=this.state,n=t.goods,o=t.sortBy;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{children:"Dynamic list of Goods"}),Object(y.jsx)("button",{type:"button",className:h()("button",{active:"all"===o}),onClick:this.showAll,children:"Load All goods"}),Object(y.jsx)("button",{type:"button",className:h()("button",{active:"first5"===o}),onClick:this.showFirst5,children:"Load first 5 goods"}),Object(y.jsx)("button",{type:"button",className:h()("button",{active:"onlyRed"===o}),onClick:this.showOnlyRed,children:"Load only red goods"}),this.state.goods&&Object(y.jsx)(m,{goods:n})]})}}]),o}(u.a.Component);s.a.render(Object(y.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.21b99b74.chunk.js.map