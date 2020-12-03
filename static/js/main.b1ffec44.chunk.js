(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{154:function(e,n,t){},155:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(23),i=t.n(c),o=t(37),u=t.n(o),l=t(47),p=t(34),m=t(11),d=t(67),s=t.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID KAAsvFr439mUJAXpPSEe4DOgGGdh98x5uWJWdGv9v7Q"}}),f=t(12);function g(){var e=Object(m.a)(["\n    background: ",";\n    border-radius: 10px;\n    padding: 10px 20px;\n    margin: 10px 20px;\n    border: none;\n    outline: none;\n"]);return g=function(){return e},e}var v=f.a.button(g(),(function(e){return e.color})),x={primary:"#9DA65D",secondary:"#F2F2F2"},b=function(e){var n=e.onClick,t=e.children,a=e.type,c=x[a];return r.a.createElement("div",null,r.a.createElement(v,{color:c,onClick:n},t))};function E(){var e=Object(m.a)(["\n    width: 500px;\n    background: #e6e6e6;\n    border-radius: 50px;\n    padding: 10px 20px;\n    margin: 10px 30px 10px 0px;\n    border: none;\n    outline: none;\n"]);return E=function(){return e},e}function h(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    i {\n        padding: 10px;\n        font-size: 28px;\n    }\n    "]);return h=function(){return e},e}function y(){var e=Object(m.a)(["\n    background: #fff;\n    border-radius: 10px;\n    // width: 60%;\n    padding: 10px 10px 0px;\n    margin-top: 50px;\n    margin-bottom: 50px;\n"]);return y=function(){return e},e}var j=f.a.div(y()),O=f.a.div(h()),w=f.a.input(E()),k=function(e){return r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.onSubmit(e.term)}},"  ",r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-search"}),r.a.createElement(w,{type:"text",value:e.term,onChange:function(n){return e.setTerm(n.target.value)},placeholder:"Find Your Favorite Picture"}))),r.a.createElement(S,{onSubmit:e.onSubmit,text:e.term})))},S=function(e){e.text;var n=e.onSubmit,t=function(e){return function(){n(e)}};return r.a.createElement("div",null,r.a.createElement(b,{type:"primary",onClick:n},"Search"),r.a.createElement("div",{className:"l-flex"},r.a.createElement(b,{type:"secondary",onClick:t("canada")},"Canada"),r.a.createElement(b,{type:"secondary",onClick:t("vancouver")},"Vancouver"),r.a.createElement(b,{type:"secondary",onClick:t("tronto")},"Tronto")))},C=t(71),F=t.n(C);function A(){var e=Object(m.a)(["\n    width: 80px;\n    height: 80px;\n    margin: 50px;\n    "]);return A=function(){return e},e}var D=function(){var e=f.a.img(A());return r.a.createElement(r.a.Fragment,null,r.a.createElement(e,{src:F.a,onClick:function(){window.location.reload()}}))},J=(t(118),t(159)),T=function(e){var n=Object(a.useState)(0),t=Object(p.a)(n,2),c=t[0],i=t[1],o=Object(a.useRef)(null);Object(a.useEffect)((function(){o.current.addEventListener("load",u)}),[]);var u=function(){var e=o.current.clientHeight,n=Math.ceil(e/10);i(n)},l=e.image,m=l.description,d=l.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(c)}},r.a.createElement("img",{ref:o,alt:m,src:d.regular}))};function G(){var e=Object(m.a)(["\n        // display: flex;\n        // flex-wrap: wrap;\n        // flex-direction: row;\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        grid-gap: 10px;\n        // grid-auto-rows: 5px;\n        img {\n            width: 250px;\n            margin: 10px;\n            // object-fit: contain;\n            // grid-row-end: span 2;\n        }\n    "]);return G=function(){return e},e}var R=f.a.div(G()),q=function(e){var n=e.images.map((function(n){return e.images.length>10?void 0:r.a.createElement(T,{key:n.id,image:n})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{style:{marginBottom:"100px"}},n))};function z(){var e=Object(m.a)(["\n    text-align: center;\n    padding-top: 50px;\n"]);return z=function(){return e},e}var I=f.a.div(z()),L=function(e){console.log(e.images.length);return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null,r.a.createElement(q,{images:e.images}),r.a.createElement(J.a,{style:{color:"#fff"},onChange:function(n,t){e.onSubmit(e.term,n),console.log(n,t)},defaultCurrent:1,total:100})))};t(154);function N(){var e=Object(m.a)(["\n    display: flex;\n    "]);return N=function(){return e},e}function P(){var e=Object(m.a)(["\n    background: #f8f5f2;\n    padding: 10vh 5vw;\n"]);return P=function(){return e},e}var U=f.a.div(P()),W=f.a.div(N()),B=function(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)([]),o=Object(p.a)(i,2),m=o[0],d=(o[1],Object(a.useState)("")),f=Object(p.a)(d,2),g=f[0],v=f[1],x=function(){var e=Object(l.a)(u.a.mark((function e(n){var t,a,r,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:0,console.log(n),e.next=4,s.get("/search/photos",{params:{query:n,page:t}});case 4:a=e.sent,r=a.data.results,c(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(U,{style:{paddingTop:"20px"}},r.a.createElement(W,null,r.a.createElement(D,null),r.a.createElement(k,{onSubmit:x,setTerm:v,term:g,singleId:m})),r.a.createElement(L,{images:t,onSubmit:x,term:g}))};i.a.render(r.a.createElement(B,null),document.querySelector("#root"))},71:function(e,n,t){e.exports=t.p+"static/media/camera-logo.0b571cc5.png"},96:function(e,n,t){e.exports=t(155)}},[[96,1,2]]]);
//# sourceMappingURL=main.b1ffec44.chunk.js.map