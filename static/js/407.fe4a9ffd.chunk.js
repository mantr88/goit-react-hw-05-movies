"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[407],{407:function(n,r,t){t.r(r),t.d(r,{default:function(){return _}});var e,a,o,c,i=t(861),u=t(439),s=t(757),p=t.n(s),f=t(791),d=t(390),x=t(637),l=t(87),v=t(174),m=t(0),h=t(168),Z=t(444),b=Z.ZP.form(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),g=Z.ZP.input(a||(a=(0,h.Z)(["\n  border: 2px solid #ff6347;\n  border-radius: 4px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n"]))),w=Z.ZP.button(o||(o=(0,h.Z)(["\n  background-color: #ffa07a;\n  border: 1px solid #ffa07a;\n  border-radius: 4px;\n  padding: 8px 18px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #ff4500;\n    color: #ffffff;\n  }\n"]))),y=Z.ZP.span(c||(c=(0,h.Z)(["\n  margin-left: 10px;\n"]))),k=t(184),j=function(n){var r=n.onSubmit;return(0,k.jsxs)(b,{onSubmit:r,children:[(0,k.jsx)(g,{type:"text",name:"query"}),(0,k.jsxs)(w,{type:"submit",children:[(0,k.jsx)(m.Vph,{}),(0,k.jsx)(y,{children:"Search"})]})]})},_=function(){var n=(0,f.useState)([]),r=(0,u.Z)(n,2),t=r[0],e=r[1],a=(0,f.useState)(!1),o=(0,u.Z)(a,2),c=o[0],s=o[1],m=(0,l.lr)({query:""}),h=(0,u.Z)(m,2),Z=h[0],b=h[1],g=Z.get("query");(0,f.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(){var r,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==g){n.next=4;break}return e([]),n.abrupt("return");case 4:return s(!0),n.next=7,(0,d.Uo)(g);case 7:r=n.sent,t=r.results,e(t),n.next=15;break;case 12:throw n.prev=12,n.t0=n.catch(0),new Error("\ud83d\ude22Sorry, it is error. Your error \ud83d\udc49 ".concat(n.t0));case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]);return(0,k.jsxs)("main",{children:[(0,k.jsx)(j,{onSubmit:function(n){n.preventDefault();var r=n.target.elements.query.value.trim();b({query:r})}}),(0,k.jsx)("div",{children:c&&(0,k.jsx)(x.Z,{color:"#d66b36"})}),(0,k.jsx)(v.Z,{movies:t})]})}},174:function(n,r,t){t.d(r,{Z:function(){return m}});var e,a,o,c,i=t(689),u=t(168),s=t(444),p=t(87),f=s.ZP.ul(e||(e=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  text-align: center;\n  text-decoration: none;\n"]))),d=s.ZP.li(a||(a=(0,u.Z)(["\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 4px;\n"]))),x=s.ZP.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  text-decoration: none;\n"]))),l=(0,s.ZP)(p.OL)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n"]))),v=t(184),m=function(n){var r=n.movies,t=(0,i.TH)();return(0,v.jsx)(f,{children:r.map((function(n){var r=n.id,e=n.poster_path,a=n.title;return(0,v.jsx)(d,{children:(0,v.jsxs)(l,{to:"/movies/".concat(r),state:{from:t},children:[(0,v.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w300".concat(e):"https://www.movienewz.com/img/films/poster-holder.jpg",alt:a}),(0,v.jsx)(x,{children:a})]})},r)}))})}},390:function(n,r,t){t.d(r,{Mc:function(){return p},Pm:function(){return f},SU:function(){return u},Uo:function(){return s},it:function(){return d}});var e=t(861),a=t(757),o=t.n(a),c=t(243),i="01917690f0f54d5c14258bd49d6faae2";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,e.Z)(o().mark((function n(){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day?api_key=".concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r,"?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("\nmovie/".concat(r,"/reviews?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=407.fe4a9ffd.chunk.js.map