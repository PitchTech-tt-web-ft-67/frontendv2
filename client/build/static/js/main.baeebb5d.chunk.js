(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{212:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(77),r=c.n(s),i=c(5),o=c(7),l=(c(87),c(10)),j=c(3),d=c(32),b=c.n(d),u=Object(n.createContext)(),m=a.a.createContext({products:[],addItem:function(e){}}),O=c(2),h=c(82),p=c(0),x=function(e){var t=e.component,c=Object(h.a)(e,["component"]);return Object(p.jsx)(i.b,Object(O.a)(Object(O.a)({},c),{},{render:function(e){return localStorage.getItem("token")?Object(p.jsx)(t,Object(O.a)({},e)):Object(p.jsx)(i.a,{to:"/login"})}}))},g=function(){var e=localStorage.getItem("token");return b.a.create({baseURL:"https://reqres.in/api",headers:{authorization:e}})},f=function(e){var t=Object(n.useContext)(u).cart;return Object(p.jsx)("div",{className:"navigation",children:Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"navbar-ul",children:[Object(p.jsx)("li",{className:"navbar-li",children:Object(p.jsx)(o.c,{to:"/signup",children:" SignUp "})}),Object(p.jsx)("li",{className:"navbar-li",children:Object(p.jsx)(o.c,{to:"/login",children:"Login"})}),Object(p.jsx)("li",{className:"navbar-li",children:localStorage.getItem("token")&&Object(p.jsx)(o.c,{to:"/products",children:"Products"})}),Object(p.jsx)("li",{className:"navbar-li",children:localStorage.getItem("token")&&Object(p.jsxs)(o.c,{to:"/cart",children:["Cart ",Object(p.jsx)("span",{children:t.length})]})}),Object(p.jsx)("li",{className:"navbar-li",children:localStorage.getItem("token")&&Object(p.jsx)(o.c,{to:"/sellers",children:"Sellers"})}),Object(p.jsx)("li",{className:"navbar-li",children:localStorage.getItem("token")&&Object(p.jsx)(o.b,{onClick:function(){g().post("/logout").then((function(e){console.log(e),localStorage.removeItem("token"),window.location.href="/login"})).catch((function(e){console.log(e.response)}))},children:"Logout"})})]})})})},v=c(8),w=c(4),N=w.b().shape({first_name:w.d().required("first name is required"),last_name:w.d().required("last name is required"),role:w.d().oneOf(["owner","renter"],"role is required"),email:w.d().required("username is required").min(3,"username must be 3 characters long"),password:w.d().required("password is required").min(3,"password must be 3 characters long")}),S={first_name:"",last_name:"",role:"",email:"",password:""},_={email:"",password:""};function I(){var e=Object(n.useState)({}),t=Object(j.a)(e,2)[1],c=Object(n.useState)(S),a=Object(j.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(_),l=Object(j.a)(o,2),d=l[0],b=l[1],u=Object(i.g)().push,m=function(e){var t=e.target,c=t.name,n=t.value;w.c(N,c).validate(n).then((function(){b(Object(O.a)(Object(O.a)({},d),{},Object(v.a)({},c,"")))})).catch((function(e){b(Object(O.a)(Object(O.a)({},d),{},Object(v.a)({},c,e.errors[0])))})),r(Object(O.a)(Object(O.a)({},s),{},Object(v.a)({},c,n)))};return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:"form container",onSubmit:function(e){e.preventDefault();var c={username:s.email.trim(),password:s.password.trim()};!function(e){g().post("https://reqres.in/api/users",e).then((function(e){localStorage.setItem("token",e.data.payload),console.log(e.data),u("/products")})).catch((function(e){console.log(e)}))}(c),t(c),r(S)},children:[Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Email:",Object(p.jsx)("input",{value:s.email,onChange:m,name:"email",type:"text"}),d.email]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Password:",Object(p.jsx)("input",{value:s.password,onChange:m,name:"password",type:"password"}),d.password]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{id:"submitBtn",children:"Log In"})})]})})}var q={first_name:"",last_name:"",role:"",email:"",password:""},C={first_name:"",last_name:"",role:"",email:"",password:""};function k(){var e=Object(n.useState)(q),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(q),r=Object(j.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)(C),b=Object(j.a)(d,2),u=b[0],m=b[1],h=Object(i.g)().push,x=function(e){var t=e.target,c=t.name,n=t.value;console.log(e.target.name,e.target.value),w.c(N,c).validate(n).then((function(){m(Object(O.a)(Object(O.a)({},u),{},Object(v.a)({},c,"")))})).catch((function(e){m(Object(O.a)(Object(O.a)({},u),{},Object(v.a)({},c,e.errors[0])))})),l(Object(O.a)(Object(O.a)({},o),{},Object(v.a)({},c,"checkbox"===e.target.type?e.target.checked:n)))};return console.log(c),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:"form container",onSubmit:function(e){e.preventDefault(),function(e){g().post("https://reqres.in/api/users",e).then((function(e){console.log(e.data),a(e.data),l(q),h("/login")})).catch((function(e){console.log(e.response)}))}({first_name:o.first_name.trim(),last_name:o.last_name.trim(),role:o.role,email:o.email.trim(),password:o.password.trim()})},children:[Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["First Name:",Object(p.jsx)("input",{value:o.first_name,onChange:x,name:"first_name",type:"text"}),u.first_name]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Last Name:",Object(p.jsx)("input",{value:o.last_name,onChange:x,name:"last_name",type:"text"}),u.last_name]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Role",Object(p.jsxs)("select",{onChange:x,value:o.role,name:"role",children:[Object(p.jsx)("option",{value:"",children:"-- Select an Option --"}),Object(p.jsx)("option",{value:"owner",children:"Owner"}),Object(p.jsx)("option",{value:"renter",children:"Renter"})]})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Email:",Object(p.jsx)("input",{value:o.email,onChange:x,name:"email",type:"text"}),u.email]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Password:",Object(p.jsx)("input",{value:o.password,onChange:x,name:"password",type:"password"}),u.password]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{id:"submitBtn",children:"Sign Up"})})]})})}var y=function(e){var t=Object(n.useContext)(m).addItem;return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("img",{src:e.product.image,alt:"".concat(e.product.title," book")}),Object(p.jsxs)("form",{onSubmit:function(c){c.preventDefault(),t(Object(O.a)(Object(O.a)({},e.product),{},{id:Date.now()}))},children:[Object(p.jsx)("h1",{className:"title",children:e.product.title}),Object(p.jsxs)("p",{className:"price",children:["$",e.product.price]}),Object(p.jsx)("button",{type:"submit",children:"Rent Item"})]})]})},P=function(){var e=Object(n.useContext)(m).products;return Object(p.jsx)("div",{className:"products-container",children:e.map((function(e){return Object(p.jsx)(y,{product:e},e.id)}))})},D=function(e){var t=Object(n.useContext)(u).removeItem;return Object(p.jsxs)("div",{className:"shopping-cart_item",children:[Object(p.jsx)("img",{src:e.image,alt:"".concat(e.title," book")}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:e.title}),Object(p.jsxs)("p",{children:["$ ",e.price]}),Object(p.jsx)("button",{onClick:function(c){return t(e)},children:" Remove from cart"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("pre",{children:e.descripton})})]})},L=function(e){var t=Object(n.useContext)(u).cart;return Object(p.jsxs)("div",{className:"shopping-cart",children:[t.map((function(e){return Object(p.jsx)(D,Object(O.a)({},e),e.id)})),Object(p.jsxs)("div",{className:"shopping-cart__checkout",children:[Object(p.jsxs)("p",{children:["Total: $",t.reduce((function(t,c){return e.state?(t+c.price)*e.state:t+c.price}),0).toFixed(2)]}),Object(p.jsx)("button",{children:"Checkout"})]})]})},R=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"table-title",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-6",children:Object(p.jsx)("h2",{children:"Sellers Dashboard"})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)(o.b,{to:"/sellers/add",className:"btn",children:[Object(p.jsx)("i",{className:"material-icons",children:"\ue147"})," ",Object(p.jsx)("span",{children:"Add New Product"})]}),Object(p.jsx)(o.b,{to:"/sellers",className:"btn",children:"View Added Products"})]})]})}),Object(p.jsx)(P,{products:e.products,addItem:e.addItem})]})},A=function(e,t){var c=Object(n.useState)((function(){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):(localStorage.setItem(e,JSON.stringify(t)),t)})),a=Object(j.a)(c,2),s=a[0],r=a[1];return[s,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]},B=function(e){var t=A("items",e),c=Object(j.a)(t,2);return[c[0],c[1]]},E=(w.b().shape({first_name:w.d().required("first name is required"),last_name:w.d().required("last name is required"),role:w.d().oneOf(["owner","renter"],"role is required"),email:w.d().required("username is required").min(3,"username must be 3 characters long"),password:w.d().required("password is required").min(3,"password must be 3 characters long")}),w.b().shape({title:w.d().required("You must enter a title for the item").min(4,"The item name must be at least 4 characters long"),image:w.d().required("You must enter a brand name for the item"),description:w.d().required("You must enter a description for the item").min(10,"The description must be at least 10 characters long"),price:w.a().required("You must enter a suggested rental price").min(1)}));function J(e){var t=Object(n.useContext)(m).setProducts,c=Object(i.g)().push,a={id:Date.now(),title:"",price:"",image:"https://image.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg",description:""},s=Object(n.useState)(a),r=Object(j.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)({title:"",price:"",image:"https://image.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg",description:""}),b=Object(j.a)(d,2),u=b[0],h=b[1],x=Object(n.useState)(!0),f=Object(j.a)(x,2),N=f[0],S=f[1],_=Object(n.useState)([]),I=Object(j.a)(_,2),q=I[0],C=I[1];console.log(q);var k=function(){!function(e){g().post("http://localhost:5000/api/products",e).then((function(e){console.log(e.data),t(e.data,{id:Date.now()}),C(e.data,{id:Date.now()}),c("/products")})).catch((function(e){console.log(e)})).finally(l(a))}({title:o.title.trim(),price:o.price.trim(),image:o.image.trim(),description:o.description.trim()})};Object(n.useEffect)((function(){E.isValid(o).then((function(e){S(!e)}))}),[o]);var y=function(e){var t=e.target,c=t.name,n=t.value,a=t.type,s=t.checked;!function(e,t){w.c(E,e).validate(t).then((function(){h(Object(O.a)(Object(O.a)({},u),{},Object(v.a)({},e,"")))})).catch((function(t){h(Object(O.a)(Object(O.a)({},u),{},Object(v.a)({},e,t.errors[0])))})),l(Object(O.a)(Object(O.a)({},o),{},Object(v.a)({},e,t)))}(c,"checkbox"===a?s:n)};return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"home-wrapper",children:[Object(p.jsx)("nav",{className:"nav",children:Object(p.jsx)("h2",{children:"Add a New Item"})}),Object(p.jsx)("div",{className:"item-wrapper",children:Object(p.jsxs)("form",{classame:"form",onSubmit:function(e){e.preventDefault(),k()},children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("label",{className:"form-row",children:["Title:",Object(p.jsx)("input",{value:o.name,onChange:y,name:"title",type:"text"})]}),Object(p.jsxs)("label",{className:"form-row",children:["Price:",Object(p.jsx)("input",{value:o.brand,onChange:y,name:"price",type:"text"})]}),Object(p.jsxs)("label",{className:"form-row",children:["Image URL:",Object(p.jsx)("input",{value:o.model,onChange:y,name:"image",type:"text"})]}),Object(p.jsxs)("label",{className:"form-row",children:["Description:",Object(p.jsx)("input",{value:o.model_no,onChange:y,name:"description",type:"text"})]}),Object(p.jsx)("section",{className:"form-submit",children:Object(p.jsxs)("section",{className:"errors-section",children:[Object(p.jsx)("p",{children:u.name}),Object(p.jsx)("p",{children:u.category}),Object(p.jsx)("p",{children:u.brand}),Object(p.jsx)("p",{children:u.model}),Object(p.jsx)("p",{children:u.description}),Object(p.jsx)("p",{children:u.min_rent}),Object(p.jsx)("p",{children:u.max_rent}),Object(p.jsx)("p",{children:u.price})]})})]}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("div",{className:"form-button",children:Object(p.jsx)("button",{disabled:N,id:"submitBtn",children:"Add Item"})}),Object(p.jsx)("div",{className:"form-button",children:Object(p.jsx)("button",{onClick:function(e){c("/sellers")},id:"cancelBtn",children:"Cancel"})})]})]})})]})})}var T=function(e){e.newProducts;var t=Object(n.useState)([]),c=Object(j.a)(t,2),a=c[0],s=c[1],r=B([]),o=Object(j.a)(r,2),d=o[0],O=o[1];console.log(d),Object(n.useEffect)((function(){b.a.get("http://localhost:5000/api/products").then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[]),console.log(a);var h=function(e){O([].concat(Object(l.a)(d),[e]))};return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(m.Provider,{value:{products:a,setProducts:s,addItem:h},children:Object(p.jsxs)(u.Provider,{value:{cart:d,removeItem:function(e){O(d.filter((function(t){return e.id!==t.id})))}},children:[Object(p.jsx)(f,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{exact:!0,path:"/",children:Object(p.jsx)(i.a,{to:"/login"})}),Object(p.jsx)(i.b,{path:"/login",component:I}),Object(p.jsx)(i.b,{path:"/signup",component:k}),Object(p.jsx)(x,{exact:!0,path:"/products",children:Object(p.jsx)(P,{products:a,addItem:h})}),Object(p.jsx)(x,{path:"/cart",children:Object(p.jsx)(L,{})}),Object(p.jsx)(x,{exact:!0,path:"/sellers",children:Object(p.jsx)(R,{})}),Object(p.jsx)(x,{path:"/sellers/add",children:Object(p.jsx)(J,{})})]})]})})})},U=Object(i.h)(T);r.a.render(Object(p.jsx)(o.a,{children:Object(p.jsx)(U,{})}),document.getElementById("root"))},87:function(e,t,c){}},[[212,1,2]]]);
//# sourceMappingURL=main.baeebb5d.chunk.js.map