(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),o=t.n(r),a=t(15),u=t.n(a),i=(t(21),t(6)),s=t(3),l=function(e){var n=e.searchPerson,t=e.handleSearch;return Object(c.jsxs)("div",{children:["Filter shown with \xa0",Object(c.jsx)("input",{placeholder:"Search",value:n,onChange:t})]})},d=function(e){var n=e.newName,t=e.handleName,r=e.telephoneNumber,o=e.handleTelNo,a=e.addPerson;return Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{children:["Name \xa0",Object(c.jsx)("input",{placeholder:"John Doe",value:n,onChange:t})]}),Object(c.jsxs)("div",{children:["Number \xa0",Object(c.jsx)("input",{placeholder:"Enter tel no",value:r,onChange:o})]}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",onClick:a,children:"Add"})})]})},h=function(e){var n=e.person,t=e.removePerson;return Object(c.jsxs)("li",{children:[n.name,", ",n.telNo,"\xa0",Object(c.jsx)("button",{onClick:t,children:"Delete"})]})},j=function(e){var n=e.notification;if(null===n)return null;var t=n.message,r=n.type;return Object(c.jsx)("div",{className:"notification ".concat(r),children:t})},f=t(4),b=t.n(f),m="/api/persons",O=function(){return b.a.get(m).then((function(e){return e.data}))},p=function(e){return b.a.post(m,e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=function(e,n){return b.a.delete("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},g=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(""),u=Object(s.a)(a,2),f=u[0],b=u[1],m=Object(r.useState)(""),g=Object(s.a)(m,2),N=g[0],w=g[1],y=Object(r.useState)(""),S=Object(s.a)(y,2),k=S[0],C=S[1],P=Object(r.useState)(null),T=Object(s.a)(P,2),D=T[0],E=T[1];Object(r.useEffect)((function(){O().then((function(e){return o(e)}))}),[k]);var J=k?t.filter((function(e){return e.name.toLowerCase().includes(k.toLocaleLowerCase())})):t;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(j,{notification:D}),Object(c.jsx)(l,{searchPerson:k,handleSearch:function(e){return C(e.target.value)}}),Object(c.jsx)("h2",{children:"Add a New Contact"}),Object(c.jsx)(d,{newName:f,handleName:function(e){return b(e.target.value)},telephoneNumber:N,handleTelNo:function(e){return w(e.target.value)},addPerson:function(e){e.preventDefault();var n={name:f,telNo:N};if(t.filter((function(e){return e.name===n.name})).length>0){if(window.confirm("".concat(n.name," is already added to the Phone Book. Would you like to replace the old number with the new one?"))){var c=t.find((function(e){return e.name===n.name}));v(c.id,Object(i.a)(Object(i.a)({},c),{},{telNo:N})).then((function(e){o(t.map((function(n){return n.name===f?e:n})))})).catch((function(e){return E({message:"".concat(e),type:"error"})})),o(t.concat(n)),b(""),w(""),setTimeout((function(){return E({message:"Successfully updated telephone number for ".concat(n.name),type:"success"})}),2e3)}}else p(n).then((function(e){o(t.concat(e)),b(""),w(""),setTimeout((function(){return E({message:"Successfully added ".concat(n.name),type:"success"})}),2e3)})).catch((function(e){return E({message:"".concat(e),type:"error"})}))}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)("ul",{children:J.map((function(e){return Object(c.jsx)(h,{person:e,removePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Remove ".concat(n.name,"?"))&&x(e,n).then((function(){o(t.filter((function(n){return n.id!==e}))),b(""),w(""),setTimeout((function(){return E({message:"Successfully removed ".concat(n.name),type:"success"})}),2e3)})).catch((function(e){return E({message:"".concat(e),type:"error"})}))}(e.id)}},e.id)}))})]})};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b673333c.chunk.js.map