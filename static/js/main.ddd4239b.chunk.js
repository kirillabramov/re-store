(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(n,e,t){n.exports=t(45)},45:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(15),c=t.n(o),i=t(9),u=t(48),l=t(2),f=t(7),s=t(8),b=t(12),m=t(11),d=t(13),O=t(49),p=t(47),j=t(50),v=t(46),h=t(3);function P(){var n=Object(l.a)(["\n    font-size: 30px;\n    color: cadetblue;\n    margin-right: 10px;\n"]);return P=function(){return n},n}function E(){var n=Object(l.a)(["\n    align-self: center;\n    font-size: 18px;\n"]);return E=function(){return n},n}function x(){var n=Object(l.a)(["\n    max-width: 1040px;\n    margin: 0 auto;\n    border-bottom: 1px solid #ddd;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: space-between; \n"]);return x=function(){return n},n}function g(){var n=Object(l.a)(["\n    font-family: 'Playfair Display' , sans-serif;\n    font-size: 40px;\n    &:hover{\n        text-decoration: none;\n    }\n"]);return g=function(){return n},n}var y=function(n){var e=n.numItems,t=n.total;return a.a.createElement(A,null,a.a.createElement(w,{className:"text-dark",to:"/re-store/"},"ReStore"),a.a.createElement(T,{to:"/cart/"},a.a.createElement(R,{className:"fa fa-shopping-cart"}),e," ",1===e?"item":"items"," ($",t,")"))},w=Object(h.a)(v.a)(g()),A=h.a.div(x()),T=Object(h.a)(v.a)(E()),R=h.a.i(P()),D=function(){return a.a.createElement(qn,null,"Cart page")};function k(){var n=Object(l.a)(["\n    width: 100px;    \n"]);return k=function(){return n},n}function L(){var n=Object(l.a)(["\n    margin-right: 30px;\n"]);return L=function(){return n},n}function G(){var n=Object(l.a)(["\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n"]);return G=function(){return n},n}function X(){var n=Object(l.a)([""]);return X=function(){return n},n}function M(){var n=Object(l.a)(["\n    display: flex;\n    list-style-type: none;\n    border-radius: 3px;\n    padding: 5px;\n    margin:10px 0;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 15px;\n    &:last-child{\n        border: none;\n    }\n"]);return M=function(){return n},n}function U(){var n=Object(l.a)(["\n    font-size: 21px;\n\n"]);return U=function(){return n},n}function W(){var n=Object(l.a)([""]);return W=function(){return n},n}function I(){var n=Object(l.a)(["\n    font-size: 24px;\n"]);return I=function(){return n},n}function K(){var n=Object(l.a)(["\n    display: block;\n    text-decoration: none;\n    transition: .25s ease;\n    &:hover{\n        text-decoration: none;\n        transition: .25s ease;\n    }\n"]);return K=function(){return n},n}var z=function(n){var e=n.book,t=n.onAddedToCart,r=e.title,o=e.author,c=e.price,i=e.imgLink;return a.a.createElement(Y,null,a.a.createElement(V,null,a.a.createElement(N,{src:i})),a.a.createElement(H,null,a.a.createElement(Q,{href:"#"},r),a.a.createElement(J,null,o),a.a.createElement(F,null,"$",c),a.a.createElement(B,{onClick:t,className:"btn btn-info"},"Add to cart")))},C=h.a.a(K()),Q=Object(h.a)(C)(I()),J=h.a.span(W()),F=h.a.span(U()),Y=h.a.li(M()),B=h.a.button(X()),H=h.a.div(G()),V=h.a.div(L()),N=h.a.img(k());function S(){var n=Object(l.a)(["\n    font-size: 18px;\n    color: #000;\n"]);return S=function(){return n},n}function Z(){var n=Object(l.a)(["\n    width:100%;\n    text-align: center;\n    margin-top: 100px;\n"]);return Z=function(){return n},n}var q=function(){return a.a.createElement(_,null,a.a.createElement($,null,"Something went wrong..."),a.a.createElement($,null,"We will fix it as soon as possible 4 you :)"))},_=h.a.div(Z()),$=h.a.p(S());function nn(){var n=Object(l.a)(["\n    animation-delay: -0.16s;\n    animation-delay: -0.32s;\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n    animation-delay: -0.16s;\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n    width: 18px;\n    height: 18px;\n    background-color: #000;\n    border-radius: 100%;\n    display: inline-block;\n    animation: "," 1.4s infinite ease-in-out both;\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n    0%, 80%, 100% { \n         transform: scale(0);\n    }\n\n    40% { \n        transform: scale(1.0);\n    }\n\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n    margin: 100px auto 0;\n    width: 70px;\n    text-align: center;\n    height: 340px;\n"]);return an=function(){return n},n}var on=function(){return a.a.createElement(cn,null,a.a.createElement(ln,null),a.a.createElement(fn,null),a.a.createElement(sn,null))},cn=h.a.div(an()),un=Object(h.b)(rn()),ln=h.a.div(tn(),un),fn=Object(h.a)(ln)(en()),sn=Object(h.a)(ln)(nn()),bn=a.a.createContext(),mn=bn.Provider,dn=bn.Consumer,On=function(n){return{type:"BOOK_ADDED_TO_CART",payload:n}},pn=function(n,e){return function(){e({type:"FETCH_BOOKS_REQUEST"}),n.getBooks().then(function(n){e({type:"FETCH_BOOKS_LOADED",payload:n})}).catch(function(n){return e(function(n){return{type:"FETCH_BOOKS_ERROR",payload:n}}(n))})}};function jn(){var n=Object(l.a)(["\n    list-style-type: none;\n    padding: 0;\n"]);return jn=function(){return n},n}var vn=function(n){var e=n.books,t=n.onAddedToCart;return a.a.createElement(En,null,e.map(function(n){return a.a.createElement(z,{key:n.id,book:n,onAddedToCart:function(){return t(n.id)}})}))},hn=function(n){function e(){return Object(f.a)(this,e),Object(b.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.fetchBooks)()}},{key:"render",value:function(){var n=this.props,e=n.books,t=n.loading,r=n.error,o=n.onAddedToCart;return t?a.a.createElement(on,null):r?a.a.createElement(q,null):a.a.createElement(vn,{books:e,onAddedToCart:o})}}]),e}(r.Component),Pn=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){return e.reduceRight(function(n,e){return e(n)},n)}}(function(n){return function(e){return a.a.createElement(dn,null,function(t){return a.a.createElement(n,Object.assign({bookstoreService:t},e))})}},Object(i.b)(function(n){var e=n.bookList;return{books:e.books,loading:e.loading,error:e.error}},function(n,e){var t=e.bookstoreService;return{fetchBooks:pn(t,n),onAddedToCart:function(e){return n(On(e))}}}))(hn),En=h.a.ul(jn());function xn(){var n=Object(l.a)(["\n    font-size: 25px;\n    text-align: right;\n"]);return xn=function(){return n},n}function gn(){var n=Object(l.a)([""]);return gn=function(){return n},n}function yn(){var n=Object(l.a)(["\n    margin-right: 10px;    \n    &:last-child{\n        margin-right: 0;\n    }\n"]);return yn=function(){return n},n}function wn(){var n=Object(l.a)([""]);return wn=function(){return n},n}function An(){var n=Object(l.a)([""]);return An=function(){return n},n}function Tn(){var n=Object(l.a)([""]);return Tn=function(){return n},n}function Rn(){var n=Object(l.a)([""]);return Rn=function(){return n},n}function Dn(){var n=Object(l.a)([""]);return Dn=function(){return n},n}function kn(){var n=Object(l.a)([""]);return kn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n\n"]);return Ln=function(){return n},n}var Gn={onIncrease:On,onDecrease:function(n){return{type:"BOOK_REMOVE_FROM_CART",payload:n}},onDelete:function(n){return{type:"BOOK_DELETE_FROM_CART",payload:n}}},Xn=Object(i.b)(function(n){var e=n.shoppingCart;return{items:e.cartItems,total:e.orderTotal}},Gn)(function(n){var e=n.items,t=n.total,r=n.onIncrease,o=n.onDecrease,c=n.onDelete;return a.a.createElement(qn,null,a.a.createElement(Mn,null,"Your order"),a.a.createElement(Un,{className:"table"},a.a.createElement(Wn,null,a.a.createElement(zn,null,a.a.createElement(In,null,"#"),a.a.createElement(In,null,"Item"),a.a.createElement(In,null,"Count"),a.a.createElement(In,null,"Price"),a.a.createElement(In,null,"Action"))),a.a.createElement(Kn,null,e.map(function(n,e){var t=n.id,i=n.title,u=n.count,l=n.total;return a.a.createElement(zn,{key:t},a.a.createElement(Cn,null,e+1),a.a.createElement(Cn,null,i),a.a.createElement(Cn,null,u),a.a.createElement(Cn,null,"$",l),a.a.createElement(Cn,null,a.a.createElement(Qn,{className:"btn btn-outline-success btn-small",onClick:function(){return r(t)}},a.a.createElement(Jn,{className:"fa fa-plus-circle"})),a.a.createElement(Qn,{className:"btn btn-outline-warning btn-small",onClick:function(){return o(t)}},a.a.createElement(Jn,{className:"fa fa-minus-circle"})),a.a.createElement(Qn,{className:"btn btn-outline-danger btn-small",onClick:function(){return c(t)}},a.a.createElement(Jn,{className:"fa fa-trash-o"}))))}))),a.a.createElement(Fn,null,"Total: $",t))}),Mn=h.a.h2(Ln()),Un=h.a.table(kn()),Wn=h.a.thead(Dn()),In=h.a.th(Rn()),Kn=h.a.tbody(Tn()),zn=h.a.tr(An()),Cn=h.a.td(wn()),Qn=h.a.button(yn()),Jn=h.a.i(gn()),Fn=h.a.div(xn()),Yn=function(){return a.a.createElement(qn,null,a.a.createElement(Pn,null),a.a.createElement(Xn,null))};function Bn(){var n=Object(l.a)(["\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid lightgray;\n  border-radius: 3px;\n  color: #000;\n  transition: .25s ease;\n  &:hover{\n    color: #000;\n    text-decoration: none;\n    transform: scale(.95);\n    transition: .25s ease;\n  }\n  &:active{\n    transform: scale(.90);\n    transition: .25s ease;\n  }\n"]);return Bn=function(){return n},n}function Hn(){var n=Object(l.a)(["\n  color: #000;\n  text-align: center;\n"]);return Hn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n  text-align: center\n"]);return Vn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  max-width: 1040px;\n  margin: 0 auto;\n"]);return Nn=function(){return n},n}var Sn=function(n){function e(){return Object(f.a)(this,e),Object(b.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props,e=n.cartItems,t=n.orderTotal,r=Object.keys(e).reduce(function(n,t){return n+e[t].count},0);return a.a.createElement(qn,null,a.a.createElement(y,{numItems:r,total:t}),a.a.createElement(O.a,null,a.a.createElement(p.a,{path:"/re-store/",component:Yn,exact:!0}),a.a.createElement(p.a,{path:"/cart/",component:D}),a.a.createElement(p.a,{render:function(){return a.a.createElement(_n,null,a.a.createElement($n,null,"Page not found"),a.a.createElement(ne,{to:"/re-store/"},"Home"))}})))}}]),e}(r.Component),Zn=Object(j.a)(Object(i.b)(function(n){var e=n.shoppingCart;return{cartItems:e.cartItems,orderTotal:e.orderTotal}})(Sn)),qn=h.a.div(Nn()),_n=Object(h.a)(qn)(Vn()),$n=h.a.h2(Hn()),ne=Object(h.a)(v.a)(Bn()),ee=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(b.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(a)))).state={hasError:!1},t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(q,null):this.props.children}}]),e}(r.Component),te=function(){function n(){Object(f.a)(this,n),this.data=[{id:1,title:"The fountainhead",author:"Ayn Rand",price:20,imgLink:"data:image/webp;base64,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"},{id:2,title:"Mindpower",author:"John Kehoe",price:9,imgLink:"data:image/webp;base64,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"}]}return Object(s.a)(n,[{key:"getBooks",value:function(){var n=this;return new Promise(function(e,t){setTimeout(function(){Math.random()>.75?t(new Error("your message")):e(n.data)},1e3)})}}]),n}(),re=t(16),ae=function(n,e){var t=e.type,r=e.payload;if(void 0===n)return{books:[],loading:!0,error:null};switch(t){case"FETCH_BOOKS_REQUEST":return{loading:!0,error:null};case"FETCH_BOOKS_LOADED":return{books:r,loading:!1,error:null};case"FETCH_BOOKS_ERROR":return{loading:!1,error:r};default:return n.bookList}},oe=t(33),ce=t(14),ie=function(n,e,t){return 0===e.count?[].concat(Object(ce.a)(n.slice(0,t)),Object(ce.a)(n.slice(t+1))):-1===t?[].concat(Object(ce.a)(n),[e]):[].concat(Object(ce.a)(n.slice(0,t)),[e],Object(ce.a)(n.slice(t+1)))},ue=function(n,e,t){var r=n.bookList.books,a=n.shoppingCart.cartItems,o=r.find(function(n){return n.id===e}),c=a.findIndex(function(n){return n.id===e}),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=n.id,a=void 0===r?e.id:r,o=n.title,c=void 0===o?e.title:o,i=n.count,u=void 0===i?0:i,l=n.total;return{id:a,title:c,count:u+t,total:(void 0===l?0:l)+t*e.price}}(a[c],o,t);return Object(oe.a)({},n,{cartItems:ie(a,i,c),orderTotal:n.shoppingCart.orderTotal+o.price*t})},le=function(n,e){var t=e.type,r=e.payload;if(void 0===n)return{cartItems:[],orderTotal:0};switch(t){case"BOOK_ADDED_TO_CART":return ue(n,r,1);case"BOOK_REMOVE_FROM_CART":return ue(n,r,-1);case"BOOK_DELETE_FROM_CART":var a=n.shoppingCart.cartItems.find(function(n){return n.id===r});return ue(n,r,-a.count);default:return n.shoppingCart}},fe=function(n,e){var t=e.type,r=e.payload;return{bookList:ae(n,{type:t,payload:r}),shoppingCart:le(n,{type:t,payload:r})}},se=Object(re.b)(fe),be=new te;c.a.render(a.a.createElement(i.a,{store:se},a.a.createElement(ee,null,a.a.createElement(mn,{value:be},a.a.createElement(u.a,null,a.a.createElement(Zn,null))))),document.getElementById("root"))}},[[35,2,1]]]);
//# sourceMappingURL=main.ddd4239b.chunk.js.map