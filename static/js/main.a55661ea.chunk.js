(this["webpackJsonpjfdzr2-homework-5"]=this["webpackJsonpjfdzr2-homework-5"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(29),o=c.n(s),r=(c(37),c(9)),i=c(3),l=(c(38),c(0)),j=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex poke-font justify-between",children:[Object(l.jsx)("li",{className:"mr-4",children:Object(l.jsx)(r.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"mr-4",children:Object(l.jsx)(r.b,{to:"/pokemons",children:"Pokemons"})}),Object(l.jsx)("li",{className:"mr-4 text-center",children:Object(l.jsx)(r.b,{to:"/favourites",children:"Favourites\u2764\ufe0f"})})]})})},d=c(31),b=c(2),p=c(10),u=c.n(p),x=function(e){var t=e.children,c=e.className;return Object(l.jsx)("div",{className:"mt-12 p-8 bg-red-500 rounded shadow-xl ".concat(c||""),children:t})},m=c(19),h=c(32),O=function(e){var t=e.children,c=e.className,n=Object(h.a)(e,["children","className"]);return Object(l.jsx)("h1",Object(m.a)(Object(m.a)({className:"poke-font text-2xl text-center mt-2 text-white font-bold ".concat(c||"")},n),{},{children:t}))},f={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7bb",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c.serialize,s=void 0===n?JSON.stringify:n,o=c.deserialize,r=void 0===o?JSON.parse:o,i=a.a.useState((function(){var c=window.localStorage.getItem(e);return c?r(c):"function"===typeof t?t():t})),l=Object(b.a)(i,2),j=l[0],d=l[1],p=a.a.useRef(e);return a.a.useEffect((function(){p.current!==e&&window.localStorage.removeItem(p),p.current=e,window.localStorage.setItem(e,s(j))}),[e,s,j]),[j,d]},v=function(){var e=Object(i.g)().index,t=Object(i.f)(),c=Object(n.useState)(),a=Object(b.a)(c,2),s=a[0],o=a[1],r=Object(n.useState)(!0),j=Object(b.a)(r,2),p=j[0],m=j[1],h=Object(n.useState)(!1),v=Object(b.a)(h,2),k=v[0],y=v[1],N=Object(n.useState)(""),w=Object(b.a)(N,2),S=w[0],P=w[1],T=g("favourite-pokemons",[]),C=Object(b.a)(T,2),A=C[0],M=C[1];Object(n.useEffect)((function(){u.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){o(e.data),m(!1),y(!1)})).catch((function(e){console.log(e),y(!0),P("Pokemon not found!"),m(!1)}))}),[e]);return Object(l.jsxs)(x,{children:[Object(l.jsx)("button",{className:"poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",style:{textTransform:"uppercase"},onClick:function(){return t.push("/pokemons")},children:"\u25c0\ufe0f Back to Pokemons List"}),Object(l.jsxs)("div",{className:"pokemon-details-wrapper text-white poke-font",children:[k?Object(l.jsx)("p",{className:"poke-font py-6 text-center",children:S}):null,p&&Object(l.jsx)("p",{className:"text-white poke-font py-6 text-center",children:"Loading..."}),s&&Object(l.jsxs)("div",{className:"pokemon-details-card bg-red-700",children:[Object(l.jsxs)("div",{className:"pokemon-details-title",children:[Object(l.jsxs)(O,{children:["#",s.id,": ",s.name.charAt(0).toUpperCase()+s.name.slice(1)]}),A.map((function(e){return e.name})).includes(s.name)?Object(l.jsx)("button",{className:"poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",style:{textTransform:"uppercase",color:"grey",cursor:"not-allowed"},disabled:!0,children:"Added To \ud83d\udda4"}):Object(l.jsx)("button",{className:"poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",style:{textTransform:"uppercase"},onClick:function(){var e={id:s.id,name:s.name,avatar:s.sprites.front_default,types:s.types};A.length>5&&A.shift(),M([].concat(Object(d.a)(A),[e]))},children:"Add To \u2764\ufe0f"})]}),Object(l.jsx)("div",{className:"images",children:Object(l.jsx)("img",{src:s.sprites.front_default,alt:"pokemon image"})}),Object(l.jsxs)("div",{className:"pokemon-details-card-text",children:[Object(l.jsx)("h3",{children:"Pokemon Info"}),Object(l.jsxs)("p",{children:["Species: ",Object(l.jsx)("span",{style:{color:"lightskyblue"},children:s.species.name})]}),Object(l.jsxs)("p",{children:["Height: ",Math.round(s.height)/10," m"]}),Object(l.jsxs)("p",{children:["Weight: ",Math.round(s.weight)/10," kg"]}),Object(l.jsx)("p",{children:"Types:"}),Object(l.jsx)("div",{className:"pokemon-details-types-info",children:s.types.map((function(e){return Object(l.jsx)("span",{style:{backgroundColor:f[e.type.name]},children:"".concat(e.type.name)},e.type.name)}))}),Object(l.jsx)("p",{children:"Abilities:"}),Object(l.jsx)("div",{className:"pokemon-details-abilities-info",children:s.abilities.map((function(e){return Object(l.jsx)("span",{children:"".concat(e.ability.name)},e.ability.name)}))})]})]})]})]})},k=function(e){var t=e.id,c=e.name,n=e.avatar,a=e.types;return Object(l.jsx)(r.b,{to:"/pokemons/".concat(t),children:Object(l.jsxs)("figure",{className:"pokemon-card max-w-xs bg-gray-100 rounded-xl p-4 hover:bg-red-700 cursor-pointer",children:[Object(l.jsx)("img",{className:"w-32 h-32 rounded-full mx-auto",src:n,alt:"Pokemon Avatar",width:"384",height:"512"}),Object(l.jsx)("div",{className:"pt-4 text-center",children:Object(l.jsxs)("figcaption",{className:"font-medium",children:[Object(l.jsxs)("div",{className:"text-cyan-600",children:["#",t," ",c]}),Object(l.jsx)("div",{className:"text-gray-500",children:a.map((function(e){return e.type.name})).join(", ")})]})})]})})},y=function(){var e=g("favourite-pokemons"),t=Object(b.a)(e,2),c=t[0];t[1];return Object(l.jsxs)(x,{children:[Object(l.jsx)(O,{children:"Favourites"}),Object(l.jsx)("div",{className:"pokemons-fav-list-wrapper mt-8 poke-font text-xs",children:c?c.map((function(e,t){return Object(l.jsx)(k,{name:e.name,types:e.types,avatar:e.avatar,id:e.id},"".concat(e.name," - ").concat(t))})):Object(l.jsx)("div",{className:"poke-font text-white text-center mt-7",children:"There are no pokemons in your favourites list"})})]})};function N(){return Object(l.jsx)(x,{children:Object(l.jsx)(O,{children:"Pokedex"})})}var w=function(e){var t=e.pokemons,c=Object(n.useState)(""),a=Object(b.a)(c,2),s=a[0],o=a[1],i=Object(n.useState)(),j=Object(b.a)(i,2),d=j[0],p=j[1];return Object(n.useEffect)((function(){u.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.name)).then((function(e){o(e.data.sprites.front_default),p(e.data.id)}))}),[t]),Object(l.jsx)(r.b,{to:"/pokemons/".concat(d),children:Object(l.jsxs)("figure",{className:"pokemon-card max-w-xs bg-gray-100 rounded-xl p-4 poke-font hover:bg-red-700 cursor-pointer",children:[Object(l.jsx)("img",{className:"w-32 h-32 rounded-full mx-auto",src:s,alt:"Pokemon Avatar"}),Object(l.jsx)("div",{className:"pt-4 text-center",children:Object(l.jsxs)("figcaption",{className:"font-medium",children:[Object(l.jsxs)("div",{className:"text-cyan-600",children:["#",d]}),Object(l.jsx)("div",{className:"text-cyan-600",children:t.name})]})})]})})},S=function(e){var t=e.goToNextPage,c=e.goToPrevPage,n=e.page,a=e.totalPages;return Object(l.jsxs)("div",{className:"pagination-buttons-wrapper flex poke-font",children:[c&&Object(l.jsx)("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",onClick:c,children:"Prev"}),Object(l.jsxs)("div",{children:[n," of ",a]}),t&&Object(l.jsx)("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",onClick:t,children:"Next"})]})};function P(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),o=Object(b.a)(s,2),r=o[0],i=o[1],j=Object(n.useState)(!1),d=Object(b.a)(j,2),p=d[0],m=d[1],h=Object(n.useState)(""),f=Object(b.a)(h,2),g=f[0],v=f[1],k=Object(n.useState)(0),y=Object(b.a)(k,2),N=y[0],P=y[1],T=Object(n.useState)(0),C=Object(b.a)(T,2),A=C[0],M=C[1],E=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?limit=".concat(20,"&offset=").concat(0)),I=Object(b.a)(E,2),z=I[0],J=I[1],H=Object(n.useState)(),L=Object(b.a)(H,2),_=L[0],B=L[1],F=Object(n.useState)(),R=Object(b.a)(F,2),U=R[0],W=R[1];Object(n.useEffect)((function(){var e;return u.a.get(z,{cancelToken:new u.a.CancelToken((function(t){return e=t}))}).then((function(e){a(e.data.results),B(e.data.next),W(e.data.previous),M(Math.ceil(e.data.count/20)),i(!1),m(!1)})).catch((function(e){console.log(e),m(!0),v("Could not fetch the data :("),i(!1)})),function(){return e()}}),[z]);return Object(l.jsxs)(x,{children:[Object(l.jsx)(O,{children:"Pokemons list"}),p?Object(l.jsx)("p",{className:"text-white poke-font py-6 text-center",children:g}):null,r&&Object(l.jsx)("p",{className:"text-white poke-font py-6 text-center",children:"Loading..."}),Object(l.jsx)(S,{page:N+1,totalPages:A,goToPrevPage:U?function(){J(U);var e=Math.max(N-1,0);P(e)}:null,goToNextPage:_?function(){J(_);var e=Math.min(N+1,A-1);P(e)}:null}),Object(l.jsx)("ol",{className:"pokemons-list-wrapper",children:c&&c.map((function(e,t){return Object(l.jsx)(w,{pokemons:e,index:t},"".concat(e.name," - ").concat(t+1))}))})]})}var T=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)("main",{className:"App bg-red-100",style:{minHeight:"100vh"},children:Object(l.jsx)("div",{className:"app-wrapper w-10/12 pt-4 mx-auto",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)(N,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/pokemons",children:Object(l.jsx)(P,{})}),Object(l.jsx)(i.a,{path:"/pokemons/:index",children:Object(l.jsx)(v,{})}),Object(l.jsx)(i.a,{path:"/favourites",children:Object(l.jsx)(y,{})})]})})]})})})})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a55661ea.chunk.js.map