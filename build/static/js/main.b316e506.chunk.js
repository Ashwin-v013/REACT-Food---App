(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__196fO",control:"Checkout_control__1lwVu",actions:"Checkout_actions__p7CzW",submit:"Checkout_submit__1zP-J",invalid:"Checkout_invalid__3tu6n"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3RGps",total:"Cart_total__bMLiT",actions:"Cart_actions__1-X6E","button--alt":"Cart_button--alt__j8-Je",button:"Cart_button__3eHCr"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2IWSz",summary:"CartItem_summary__31NfD",price:"CartItem_price__1K7yL",amount:"CartItem_amount__2RY7c",actions:"CartItem_actions__1heOx"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__oyj5_",icon:"HeaderCartButton_icon__2S_vM",badge:"HeaderCartButton_badge__3yZ6m",bump:"HeaderCartButton_bump__1J7g8"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__3uaYg",description:"MealItem_description__1iWEQ",price:"MealItem_price__3bFF8"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__VRwzf","meals-appear":"AvailableMeals_meals-appear__3lW5Y",mealsloading:"AvailableMeals_mealsloading__20Ohh",mealserror:"AvailableMeals_mealserror__bc4yR"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__37-jE",modal:"Modal_modal__2W7Z-","slide-down":"Modal_slide-down__37gsz"}},,function(e,t,n){e.exports={header:"Header_header__yXE3s","main-image":"Header_main-image__2GCqg"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__18w-z"}},function(e,t,n){e.exports={card:"Card_card__2bCyp"}},function(e,t,n){e.exports={input:"Input_input__3Ruvu"}},function(e,t,n){e.exports={form:"MealItemForm_form__A1XiH"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearcart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),h=n.n(O),x=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:h.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:h.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},p=n(19),f=n.n(p),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),y=n(12),g=n(20),N=n.n(g),A=function(e){return Object(o.jsx)("div",{className:N.a.card,children:e.children})},k=n(5),w=n(21),I=n.n(w),S=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:I.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),M=n(22),E=n.n(M),R=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(S,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},F=n(13),H=n.n(F),z=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(R,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(14),T=n.n(D),B=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),l=s[0],u=s[1],d=Object(i.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(i.useEffect)((function(){(function(){var e=Object(y.a)(C.a.mark((function e(){var t,n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,fetch("https://react-http-1f8b2-default-rtdb.firebaseio.com/meals.json");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Something went wrong");case 7:return e.next=9,t.json();case 9:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),u(!1),b(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}})()()}),[]),l)return Object(o.jsx)("section",{className:T.a.mealsloading,children:Object(o.jsx)("p",{children:"Loading....."})});if(m)return Object(o.jsx)("section",{className:T.a.mealserror,children:Object(o.jsx)("p",{children:"something went wrong"})});var O=n.map((function(e){return Object(o.jsx)(z,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:T.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},P=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(B,{})]})},J=n(15),Y=n.n(J),V=function(e){return Object(o.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},W=function(e){return Object(o.jsx)("div",{className:Y.a.modal,children:Object(o.jsx)("div",{className:Y.a.content,children:e.children})})},L=document.getElementById("overlays"),X=function(e){return Object(o.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(o.jsx)(V,{onClose:e.onClose}),L),a.a.createPortal(Object(o.jsx)(W,{children:e.children}),L)]})},$=n(7),q=n.n($),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:q.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:q.a.summary,children:[Object(o.jsx)("span",{className:q.a.price,children:t}),Object(o.jsx)("span",{className:q.a.amount,children:e.amount})]})]}),Object(o.jsxs)("div",{className:q.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(4),K=n.n(Z),Q=n(3),U=n.n(Q),ee=function(e){return""!==e.trim()},te=function(e){var t=Object(i.useState)({name:!0,street:!0,postalcode:!0,city:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(U.a.control," ").concat(c.name?"":U.a.invalid),m="".concat(U.a.control," ").concat(c.street?"":U.a.invalid),b="".concat(U.a.control," ").concat(c.postalcode?"":U.a.invalid),O="".concat(U.a.control," ").concat(c.city?"":U.a.invalid);return Object(o.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=l.current.value,r=u.current.value,i=d.current.value,o=ee(n),j=ee(c),m=ee(i),b=5===r.trim().length;a({name:o,street:j,city:m,postalcode:b}),o&&j&&b&&m&&e.onConfirm({name:n,street:c,postalcode:r,city:i})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(o.jsx)("p",{children:"Enter valid name "})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Enter valid street "})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalcode&&Object(o.jsx)("p",{children:"Enter valid postalcode "})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(o.jsx)("p",{children:"Enter valid city "})]}),Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:U.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],p=Object(i.useContext)(u),f="$".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,v=function(e){p.removeItem(e)},g=function(e){p.addItem(e)},N=function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-1f8b2-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,ordereditems:p.items})});case 3:m(!1),x(!0),p.clearcart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:K.a["cart-items"],children:p.items.map((function(e){return Object(o.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),k=Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:K.a.button,onClick:function(){a(!0)},children:"Order"})]}),w=Object(o.jsxs)(s.a.Fragment,{children:[" ",A,Object(o.jsxs)("div",{className:K.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:f})]}),c&&Object(o.jsx)(te,{onConfirm:N,onCancel:e.onClose}),!c&&k]}),I=Object(o.jsx)("p",{children:"Sending the orders"}),S=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"Order sent successfully ...."}),Object(o.jsx)("div",{className:K.a.actions,children:Object(o.jsx)("button",{className:K.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(X,{onClose:e.onClose,children:[!j&&!h&&w,j&&!h&&I,h&&!j&&S]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearcart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(ne,{onClose:function(){c(!1)}}),Object(o.jsx)(x,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(P,{})})]})};a.a.render(Object(o.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.b316e506.chunk.js.map