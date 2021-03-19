(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),i=r(5),s=r.n(i),j=(r(11),r(12),r(4)),a=r.n(j),d=r(6),l=r(2),u=(r(14),r(15),r(0));var h=function(e){return Object(u.jsx)("div",{className:"flights",children:Object(u.jsxs)("table",{id:"flightResults",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Flight ID"}),Object(u.jsx)("th",{children:"Price"}),Object(u.jsx)("th",{children:"Direct Flight"}),Object(u.jsx)("th",{children:"Carrier ID"}),Object(u.jsx)("th",{children:"Departure Date"})]})}),Object(u.jsx)("tbody",{children:e.flights.map((function(e){return Object(u.jsxs)("tr",{id:e.QuoteId,children:[Object(u.jsx)("td",{children:e.QuoteId}),Object(u.jsx)("td",{children:e.MinPrice}),Object(u.jsx)("td",{children:e.Direct?"Yes":"No"}),Object(u.jsx)("td",{children:e.OutboundLeg.CarrierIds}),Object(u.jsx)("td",{children:e.OutboundLeg.DepartureDate.slice(0,10)})]})}))})]})})};var b=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],n=t[1],i=Object(c.useState)(!1),s=Object(l.a)(i,2),j=s[0],b=s[1],o=Object(c.useState)(""),O=Object(l.a)(o,2),x=O[0],p=O[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),v=g[0],y=g[1],m=Object(c.useState)(""),D=Object(l.a)(m,2),I=D[0],S=D[1],F=Object(c.useState)(""),q=Object(l.a)(F,2),C=q[0],k=q[1],Y=Object(c.useState)(""),E=Object(l.a)(Y,2),M=E[0],N=E[1];return Object(u.jsxs)("div",{className:"airportinfo",children:[Object(u.jsx)("form",{onSubmit:function(e){function t(){return(t=Object(d.a)(a.a.mark((function e(){var t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"359296051emshb0fc111a532c1adp17946ejsn7d7cec06afca","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},r="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/"+x+"/en-US/"+v+"/"+I+"/"+C+(M?"/"+M:""),e.next=5,fetch(r,t);case 5:return c=e.sent,e.next=8,c.json();case 8:c=e.sent,n(c.Quotes);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),b(!0)},children:Object(u.jsx)("table",{id:"formSubmit",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{htmlFor:"queryInput",children:"Currency:"})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{id:"queryInput",value:x,onChange:function(e){return p(e.target.value)},placeholder:"Enter currency symbol (ex. USD):",required:!0})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{htmlFor:"queryInput",children:"Origin:"})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{id:"queryInput",value:v,onChange:function(e){return y(e.target.value)},placeholder:"Enter airport code (ex. JFK-sky):",required:!0})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{htmlFor:"queryInput",children:"Destination:"})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{id:"queryInput",value:I,onChange:function(e){return S(e.target.value)},placeholder:"Enter airport code (ex. LAX-sky):",required:!0})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{htmlFor:"queryInput",children:"Start Date:"})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{id:"queryInput",value:C,onChange:function(e){return k(e.target.value)},placeholder:"Enter date in YYYY-MM-DD format:",required:!0})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("label",{htmlFor:"queryInput",children:"End Date:"})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{id:"queryInput",value:M,onChange:function(e){return N(e.target.value)},placeholder:"Enter date in YYYY-MM-DD format:"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"search",children:"Submit"})})]})]})})}),j?Object(u.jsx)(h,{flights:r}):Object(u.jsx)(u.Fragment,{})]})};r(17);var o=function(e){return Object(u.jsx)("div",{className:"header",children:e.title})};var O=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{title:"Fly-Hy: Flight Options"}),Object(u.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.f0e7af8b.chunk.js.map