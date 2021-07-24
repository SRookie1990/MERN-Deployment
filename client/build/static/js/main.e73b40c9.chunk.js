(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,c){},49:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var n=c(1),l=c.n(n),s=c(17),r=c.n(s),j=(c(23),c(2)),i=c(5),a=c.n(i),o=c(3),b=c(0),h=function(t){var e=t.pets;t.setPets;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(o.a,{to:"/pets/new",children:"Add an pet"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"These pets are looking for a good home"}),e.map((function(t){return Object(b.jsxs)("table",{style:{margin:"auto"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Pet"}),Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{textAlign:"left"},children:t.name}),Object(b.jsx)("td",{children:t.type}),Object(b.jsxs)("td",{children:[Object(b.jsx)(o.a,{to:"/pets/".concat(t._id),children:"Details"})," |\xa0",Object(b.jsx)(o.a,{to:"/pets/edit/".concat(t._id),children:"Edit"})]})]})})]},t._id)}))]})},u=function(){var t=Object(n.useState)([]),e=Object(j.a)(t,2),c=e[0],l=e[1];return Object(n.useEffect)((function(){a.a.get("http://localhost:8000/api/pets").then((function(t){return l(t.data)})).catch((function(t){return console.log("Error: ",t)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{pets:c})})},d=function(t){var e=t.id,c=Object(n.useState)(""),l=Object(j.a)(c,2),s=l[0],r=l[1],i=Object(n.useState)(""),h=Object(j.a)(i,2),u=h[0],d=h[1],O=Object(n.useState)(""),p=Object(j.a)(O,2),x=p[0],f=p[1],g=Object(n.useState)([]),m=Object(j.a)(g,2),v=m[0],k=m[1],y=Object(n.useState)([]),S=Object(j.a)(y,2),C=S[0],F=S[1],P=Object(n.useState)([]),w=Object(j.a)(P,2),E=w[0],D=w[1],T=Object(n.useState)([]),A=Object(j.a)(T,2),_=A[0],I=A[1];Object(n.useEffect)((function(){a.a.get("http://localhost:8000/api/pets/".concat(e)).then((function(t){console.log(t.data),r(t.data.name),d(t.data.type),f(t.data.description),k(t.data.skill1),F(t.data.skill2),D(t.data.skill3),console.log(t.data.skill)})).catch((function(t){return Object(o.d)("/404")}))}),[e]);return Object(b.jsxs)("div",{children:[_.map((function(t,e){return Object(b.jsx)("p",{style:{color:"red"},children:t},e)})),Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsxs)("h2",{children:["Edit ",s]}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.a.put("http://localhost:8000/api/pets/".concat(e),{name:s,type:u,description:x,skill1:v,skill2:C,skill3:E}).then((function(t){console.log(t),Object(o.d)("/")})).catch((function(t){var e=t.response.data.errors,c=Object.keys(e).map((function(t){return e[t].message}));I(c)}))},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Pet Name:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return r(t.target.value)},value:s})]}),0!==s.length&&s.length<3?Object(b.jsx)("p",{style:{color:"red"},children:"Client Validation Error: Author's name must be atleast 3 characters!"}):"",Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Pet Type:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return d(t.target.value)},value:u})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Pet Description:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return f(t.target.value)},value:x})]}),Object(b.jsx)("h3",{children:"Skills (optional):"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Skill 1:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return k(t.target.value)},value:v})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Skill 2:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return F(t.target.value)},value:C})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Skill 3:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return D(t.target.value)},value:E})]}),Object(b.jsx)(o.a,{to:"/",children:Object(b.jsx)("button",{children:"Cancel"})}),Object(b.jsx)("input",{type:"submit"})]})]})},O=function(t){var e=Object(n.useState)(""),c=Object(j.a)(e,2),l=c[0],s=c[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),h=i[0],u=i[1],d=Object(n.useState)(""),O=Object(j.a)(d,2),p=O[0],x=O[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),m=g[0],v=g[1],k=Object(n.useState)(""),y=Object(j.a)(k,2),S=y[0],C=y[1],F=Object(n.useState)(""),P=Object(j.a)(F,2),w=P[0],E=P[1],D=Object(n.useState)(0),T=Object(j.a)(D,2),A=T[0],_=(T[1],Object(n.useState)([])),I=Object(j.a)(_,2),L=I[0],N=I[1];return Object(b.jsxs)("div",{children:[L.map((function(t,e){return Object(b.jsx)("p",{style:{color:"red"},children:t},e)})),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.a.post("http://localhost:8000/api/pets",{name:l,type:h,description:p,skill1:m,skill2:S,skill3:w,likes:A}).then((function(t){console.log(t),s(""),Object(o.d)("/")})).catch((function(t){var e=t.response.data.errors,c=Object.keys(e).map((function(t){return e[t].message}));N(c)}))},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Pet Name:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)},value:l})]}),0!==l.length&&l.length<3?Object(b.jsx)("p",{style:{color:"red"},children:"Client Validation Error: Author's name must be atleast 3 characters!"}):"",Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Pet Type:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return u(t.target.value)},value:h})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Pet Description:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return x(t.target.value)},value:p})]}),Object(b.jsx)("h3",{children:"Skills (optional):"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Skill 1:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return v(t.target.value)},value:m})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Skill 2:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return C(t.target.value)},value:S})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"",children:"Skill 3:"}),"\xa0\xa0\xa0",Object(b.jsx)("input",{type:"text",onChange:function(t){return E(t.target.value)},value:w})]}),Object(b.jsx)(o.a,{to:"/",children:Object(b.jsx)("button",{children:"Cancel"})}),Object(b.jsx)("input",{type:"submit"})]})]})},p=function(t){return Object(b.jsx)("div",{children:Object(b.jsxs)("h3",{children:["We're sorry, but we could not find the author you are looking for. If you would like to add this author, ",Object(b.jsx)(o.a,{to:"/authors/new",children:"Click here!"})]})})},x=function(t){var e=t.id,c=Object(n.useState)({}),l=Object(j.a)(c,2),s=l[0],r=l[1],i=Object(n.useState)(0),h=Object(j.a)(i,2),u=h[0],d=h[1];Object(n.useEffect)((function(){a.a.get("http://localhost:8000/api/pets/".concat(e)).then((function(t){r(t.data),d(t.data)}))}),[e]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsxs)("h2",{children:["Details about: ",s.name]}),Object(b.jsxs)("button",{style:{backgroundColor:"red",color:"white"},onClick:function(t){var e;e=s._id,console.log(e),a.a.delete("http://localhost:8000/api/pets/".concat(e)).then((function(t){console.log(t.data),Object(o.d)("/"),r(s.filter((function(t){return t._id!==e})))})).catch((function(t){return console.log(t)}))},children:["Adopt ",s.name]}),Object(b.jsxs)("p",{children:["Pet Type: ",s.type]}),Object(b.jsxs)("p",{children:["Description: ",s.description]}),Object(b.jsx)("p",{children:"Skills:"}),Object(b.jsx)("p",{children:s.skill1}),Object(b.jsx)("p",{children:s.skill2}),Object(b.jsx)("p",{children:s.skill3}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("button",{style:{backgroundColor:"green",color:"white"},onClick:function(t){return d(u+1),void a.a.put("http://localhost:8000/api/pets/".concat(e),{likes:u}).then((function(t){return console.log(t.data.likes)})).catch((function(t){return console.log(t)}))},children:["Like ",s.name]}),Object(b.jsxs)("p",{children:[s.likes," like(s)"]}),Object(b.jsx)(o.a,{to:"/",children:"back to home"})," |\xa0",Object(b.jsx)(o.a,{to:"/pets/edit/"+s._id,children:"Edit"})]})};c(49);var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.b,{from:"/",to:"/pets",noThrow:"true"}),Object(b.jsx)(d,{path:"/pets/edit/:id"}),Object(b.jsx)(x,{path:"pets/:id"}),Object(b.jsx)(O,{path:"/pets/new"}),Object(b.jsx)(p,{path:"/404"}),Object(b.jsx)(u,{path:"/pets"})]})})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,n=e.getFID,l=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),l(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.e73b40c9.chunk.js.map