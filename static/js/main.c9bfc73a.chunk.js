(this["webpackJsonpamazone-clone"]=this["webpackJsonpamazone-clone"]||[]).push([[0],{67:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},84:function(e,t,i){},86:function(e,t,i){"use strict";i.r(t);var c=i(8),s=i.n(c),n=i(41),a=i.n(n),r=(i(67),i(56)),o=i(17),j=(i(68),i(69),i(58)),l=i.n(j),d=i(59),h=i.n(d),u=i(35),m=i(6),b=Object(c.createContext)(),x=function(e){var t=e.reducer,i=e.initialState,s=e.children;return Object(m.jsx)(b.Provider,{value:Object(c.useReducer)(t,i),children:s})},g=function(){return Object(c.useContext)(b)},O=i(50),p=(O.a.initializeApp({apiKey:"AIzaSyCHy19QQ91pkq17pVTmVGcjIeY4YGPjMrM",authDomain:"e-clone-34f03.firebaseapp.com",projectId:"e-clone-34f03",storageBucket:"e-clone-34f03.appspot.com",messagingSenderId:"720669548602",appId:"1:720669548602:web:9ee78551449d422ed21503",measurementId:"G-BB7KR0R5DZ"}).firestore(),O.a.auth());var v=function(){var e=g(),t=Object(o.a)(e,2),i=t[0],c=i.basket,s=i.user,n=(t[1],function(){s&&p.signOut()});return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"header_logo",src:"data:image/png;base64,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"})}),Object(m.jsxs)("div",{className:"header_search",children:[Object(m.jsx)("input",{className:"header_searchInput",type:"text"}),Object(m.jsx)(l.a,{className:"header_searchIcon"})]}),Object(m.jsxs)("div",{className:"header_nav",children:[Object(m.jsx)(u.b,{to:!s&&"/login",children:Object(m.jsxs)("div",{onClick:n,className:"header_option",children:[Object(m.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",null===s||void 0===s?void 0:s.email]}),Object(m.jsxs)("span",{className:"header_optionLineTwo",children:[s?"Sign Out":"Sign In"," "]})]})}),Object(m.jsxs)("div",{className:"header_option",children:[Object(m.jsx)("span",{className:"header_optionLineOne",children:"Return"}),Object(m.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]}),Object(m.jsxs)("div",{onChange:n,className:"header_option",children:[Object(m.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(m.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]}),Object(m.jsx)(u.b,{to:"/checkout",children:Object(m.jsxs)("div",{className:"header_optionBasket",children:[Object(m.jsx)(h.a,{}),Object(m.jsx)("span",{className:"header_optionLineTwo header_basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})};i(78),i(79);var f=function(e){var t=e.id,i=e.title,c=e.image,s=e.price,n=e.rating,a=g(),r=Object(o.a)(a,2),j=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product_info",children:[Object(m.jsx)("p",{children:i}),Object(m.jsxs)("p",{className:"product_price",children:[Object(m.jsx)("small",{children:"\u20b9"}),Object(m.jsxs)("strong",{children:[" ",s]})]}),Object(m.jsx)("div",{className:"product_rating",children:Array(n).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50"})}))})]}),Object(m.jsx)("img",{src:c,alt:""}),Object(m.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:i,image:c,price:s,rating:n}})},children:"Add to basket"})]})};var A=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home_container",children:[Object(m.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home_row",children:[Object(m.jsx)(f,{title:"The lean startup",price:780,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",rating:4}),Object(m.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:5870,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(m.jsxs)("div",{className:"home_row",children:[Object(m.jsx)(f,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:2074,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(m.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:1860,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(m.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:15990,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(m.jsx)("div",{className:"home_row",children:Object(m.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:56840,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},S=i(22);i(80),i(81);var N=function(e){var t=e.id,i=e.image,c=e.title,s=e.price,n=e.rating,a=g(),r=Object(o.a)(a,2),j=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{className:"checkoutProduct_image",src:i}),Object(m.jsxs)("div",{className:"checkoutProduct_info",children:[Object(m.jsx)("p",{className:"checkoutProduct_title",children:c}),Object(m.jsxs)("p",{className:"checkoutProduct_price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:s})]}),Object(m.jsx)("div",{className:"checkoutProduct_rating",children:Array(n).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(m.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},k=(i(82),i(60)),E=i.n(k),C=i(19),Y=i(36),P=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},F=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(Y.a)(Object(Y.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var i=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(C.a)(e.basket);return i>=0?c.splice(i,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(Y.a)(Object(Y.a)({},e),{},{basket:c});case"SET_USER":return Object(Y.a)(Object(Y.a)({},e),{},{user:t.user});default:return e}};var G=function(){var e=g(),t=Object(o.a)(e,2),i=t[0].basket;return t[1],Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(E.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",i.length," items): ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("small",{className:"subtotal_gift",children:[Object(m.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:P(i),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),Object(m.jsx)("button",{children:"Proceed to Checkout"})]})};var R=function(){var e=g(),t=Object(o.a)(e,2),i=t[0],c=i.basket,s=i.user;return t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout_left",children:[Object(m.jsx)("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(m.jsxs)("div",{className:"checkout_title",children:[Object(m.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(m.jsx)("h2",{children:"Your shopping basket"}),c.map((function(e){return Object(m.jsx)(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout_right",children:Object(m.jsx)(G,{})})]})};i(84);var z=function(){var e=Object(S.f)(),t=Object(c.useState)(""),i=Object(o.a)(t,2),s=i[0],n=i[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),j=r[0],l=r[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign-in"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:j,onChange:function(e){return l(e.target.value)}}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.massage)}))},className:"login__signInButton",children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(s,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create Amazone Account"})]})]})};var D=function(){return Object(m.jsx)("div",{className:"orders",children:Object(m.jsx)("h1",{children:"Your Orders"})})};var M=function(){var e=g(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var i=t[1];return Object(c.useEffect)((function(){p.onAuthStateChanged((function(e){console.log("THE USER IS >>>> ",e),i(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(S.c,{children:[Object(m.jsxs)(S.a,{path:"/orders",children:[Object(m.jsx)(v,{}),Object(m.jsx)(D,{})]}),Object(m.jsx)(S.a,{path:"/login",children:Object(m.jsx)(z,{})}),Object(m.jsxs)(S.a,{path:"/checkout",children:[Object(m.jsx)(v,{}),Object(m.jsx)(R,{})]}),Object(m.jsxs)(S.a,{path:"/",children:[Object(m.jsx)(v,{}),Object(m.jsx)(A,{})]})]})})})},w=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,98)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{initialState:{basket:[],user:null},reducer:F,children:Object(m.jsx)(M,{})})}),document.getElementById("root")),w()}},[[86,1,2]]]);
//# sourceMappingURL=main.c9bfc73a.chunk.js.map