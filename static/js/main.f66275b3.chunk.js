(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{180:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){},340:function(e,t,n){"use strict";n.r(t);var i=n(4),c=n(0),s=n.n(c),o=n(60),a=n.n(o),r=n(18),l=(n(180),n(181),n(19)),j=["clear"],d=["drizzle","heavy drizzle","light drizzle","heavy drizzle/rain","light drizzle/rain","freezing drizzle/freezing rain","heavy freezing drizzle/freezing rain","light freezing drizzle/freezing rain"],u=["blowing or drifting snow","snow","snow showers","heavy snow","light snow"],b=["heavy rain and snow","light rain and snow","snow and rain showers"],h=["fog","freezing fog"],m=["hail","hail showers"],O=["rain","rain showers","heavy rain","light rain","precipitation in vicinity","heavy freezing rain","light freezing rain"],g=["diamond dust","mist","duststorm"],p=["lightning without thunder","thunderstorm without precipitation"];var x=function(e){var t=e.conditions.split(", ")[0].toLowerCase(),n=e.imgSize,c="white";return j.includes(t)?Object(i.jsx)(l.g,{size:n,color:c}):d.includes(t)?Object(i.jsx)(l.m,{size:n,color:c}):u.includes(t)?Object(i.jsx)(l.p,{size:n,color:c}):b.includes(t)?Object(i.jsx)(l.n,{size:n,color:c}):h.includes(t)?Object(i.jsx)(l.i,{size:n,color:c}):m.includes(t)?Object(i.jsx)(l.j,{size:n,color:c}):O.includes(t)?Object(i.jsx)(l.l,{size:n,color:c}):g.includes(t)?Object(i.jsx)(l.h,{size:n,color:c}):p.includes(t)?Object(i.jsx)(l.k,{size:n,color:c}):"thunderstorm"===t?Object(i.jsx)(l.r,{size:n,color:c}):"partially cloudy"===t?Object(i.jsx)(l.f,{size:n,color:c}):"overcast"===t?Object(i.jsx)(l.d,{size:n,color:c}):"ice"===t?Object(i.jsx)(l.q,{size:n,color:c}):"funnel cloud/tornado"===t?Object(i.jsx)(l.s,{size:n,color:c}):"smoke or haze"===t?Object(i.jsx)(l.o,{size:n,color:c}):"squalls"===t?Object(i.jsx)(l.e,{size:n,color:c}):"sky coverage decreasing"===t?Object(i.jsx)(l.a,{size:n,color:c}):"sky coverage increasing"===t?Object(i.jsx)(l.c,{size:n,color:c}):"sky unchanged"===t?Object(i.jsx)(l.b,{size:n,color:c}):Object(i.jsx)(l.g,{size:n,color:c})},z=["January","February","March","April","May","June","July","August","September","October","November","December"];var f=function(e){var t=new Date(e.dateTime),n=t.getDate(),s=z[t.getMonth()],o={animationName:"fadeInOpacity",animationDelay:e.delay,animationDuration:"1s",animationFillMode:"forwards"},a=Object(c.useRef)(null);if(e.toggleItem===e.index)var r="focused card";else r="card";return Object(i.jsxs)("div",{ref:a,style:o,className:r,onClick:function(){e.handleSetToggledItem(e.index),a.current.scrollIntoView({behavior:"smooth",inline:"center"})},children:[Object(i.jsx)(x,{conditions:e.conditions,imgSize:64,imgColor:"black"}),Object(i.jsx)("h2",{children:n}),Object(i.jsx)("h3",{children:s}),Object(i.jsxs)("p",{className:"temp",children:[e.temp,"\xb0"]}),Object(i.jsxs)("p",{className:"tempMin",children:[e.tempMin,"\xb0"]}),Object(i.jsxs)("p",{className:"tempMax",children:[e.tempMax,"\xb0"]})]})},v=(n(183),n(342)),y=n(343),w=n(170),k=n(347),S=n(166),N=n(167),I=n(70),M=n(67);var C=function(e){var t=e.hours.filter((function(e,t){return t%2===0}));return Object(i.jsx)("div",{className:"weatherInfo",children:Object(i.jsx)(v.a,{width:"100%",height:"80%",children:Object(i.jsxs)(y.a,{data:t,children:[Object(i.jsx)(w.a,{name:"Temperature",type:"monotone",dataKey:"temp",stroke:"orange"}),Object(i.jsx)(w.a,{name:"Wind Speed",type:"monotone",dataKey:"windspeed",stroke:"#03e5b7"}),Object(i.jsx)(w.a,{name:"Precipitation Probability",type:"monotone",dataKey:"precipprob",stroke:"#037ade"}),Object(i.jsx)(k.a,{stroke:"#ccc"}),Object(i.jsx)(S.a,{dataKey:"datetime",stroke:"#ccc"}),Object(i.jsx)(N.a,{stroke:"#ccc"}),Object(i.jsx)(I.a,{content:function(e){var t=e.active,n=e.payload,c=e.label;return t&&n&&n.length?Object(i.jsxs)("div",{className:"custom-tooltip",children:[Object(i.jsx)("p",{className:"label",children:c}),Object(i.jsxs)("p",{children:["Temperature: ",n[0].value,"\u2103"]}),Object(i.jsxs)("p",{children:["Wind: ",n[1].value," km/h"]}),Object(i.jsxs)("p",{children:["Precipitation: ",n[2].value,"%"]})]}):null}}),Object(i.jsx)(M.a,{verticalAlign:"bottom",height:36})]})})})},T=n.p+"static/media/ReactWeatherIcon.b0a87d89.png",D=n(168),P=n.n(D);n(337).config();var W=function(){var e=Object(c.useState)("searchCountry"),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)("mainLogo"),a=Object(r.a)(o,2),l=a[0],j=a[1],d=Object(c.useState)(!1),u=Object(r.a)(d,2),b=u[0],h=u[1],m=Object(c.useState)([]),O=Object(r.a)(m,2),g=O[0],p=O[1],x=Object(c.useState)(0),z=Object(r.a)(x,2),v=z[0],y=z[1],w=function(e){y(e)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"flexContainer",children:g.length>0&&g.map((function(e,t){return Object(i.jsx)(f,{index:t,toggleItem:v,conditions:e.conditions,dateTime:e.datetime,temp:e.temp,tempMax:e.tempmax,tempMin:e.tempmin,handleSetToggledItem:w,delay:"".concat(t/6,"s")},t)}))}),g.length>0&&Object(i.jsx)(C,{hours:g[v].hours}),Object(i.jsx)("img",{className:l,src:T,alt:"React Weather"}),Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),P.a.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(e.target.country.value,"?unitGroup=metric&key=").concat("7UV9TBU6CX9NPWV6HP8CBDB56","&contentType=json")).then((function(e){var t=e.data;p(t.days),s("searchCountry moveOnSubmit"),j("mainLogo miniLogo")})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers),h(!0),setTimeout((function(){h(!1)}),5e3)):e.request?console.log(e.request):console.log("Error",e.message)}))},children:Object(i.jsxs)("div",{className:n,children:[Object(i.jsx)("input",{id:"countryInput",name:"country",type:"text",className:"locationInput",autoFocus:!0,autoComplete:"off"}),b&&Object(i.jsx)("p",{style:{color:"red"},children:"*Please enter a valid location"})]})})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.f66275b3.chunk.js.map