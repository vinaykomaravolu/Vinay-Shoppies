(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{136:function(e,a,t){e.exports=t.p+"static/media/noImage.104a1a91.png"},154:function(e,a,t){e.exports=t(397)},397:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),o=t.n(i),l=t(443),c=t(442),s=t(22),m=t(440),u=t(401),p=t(445),d=t(444),h=t(435),g=t(431),f=t(437),E=t(436),v=t(136),b=t.n(v),N=t(79),S=t.n(N),y=t(446),x=t(434),O=t(438),k=t(439),B=Object(g.a)((function(e){return{root:{display:"flex"},media:{height:0,paddingTop:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},textBold:{fontWeight:600},cardHeader:{overflow:"hidden"},title:{padding:e.spacing(3),textAlign:"center"},movieDetails:{flexDirection:"column"},nominateButton:{alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),maxWidth:"60%",marginLeft:"20%"}}}));function I(e){var a=B(),t=e.handleNominate,n=e.data,i=e.isNominated,o=e.bid,l=e.apiKey,c=r.a.useState(!1),m=Object(s.a)(c,2),p=m[0],d=m[1],g=r.a.useState({}),v=Object(s.a)(g,2),N=v[0],I=v[1],w=r.a.useState(0),j=Object(s.a)(w,2),R=j[0],T=j[1],A=function(){if("{}"===JSON.stringify(N)){var e="https://www.omdbapi.com/?apikey="+l+"&t="+n.Title+"&plot=full&";fetch(e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){"True"===e.Response&&I(e),d(!p)})).catch((function(e){console.log(e)}))}else d(!p)};return r.a.createElement(y.a,{onClick:A,style:0===R?{}:{backgroundColor:"rgba(255, 255, 255, 0.08)"},varient:"elevation",onMouseOut:function(){return T(0)},onMouseOver:function(){return T(24)},elevation:R,id:o,"data-key":n.imdbID},r.a.createElement(x.a,{expandIcon:r.a.createElement(S.a,{style:{fontSize:40}}),"aria-controls":"panel"+{bid:o}+"bh-content",id:"panel"+{bid:o}+"bh-header"},r.a.createElement("img",{width:"22%",height:"21%",src:"N/A"===n.Poster?b.a:n.Poster,alt:"new"}),r.a.createElement(h.a,{container:!0,alignItems:"center",justify:"center",spacing:0},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(E.a,{style:{backgroundColor:"#303030"}},r.a.createElement(u.a,{className:a.title,variant:"h5"},n.Title))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f.a,{className:a.nominateButton,type:"submit",fullWidth:!0,variant:"contained",color:"primary",id:o,onClick:t,disabled:i},"Nominate")))),r.a.createElement(O.a,{onClick:A,className:a.movieDetails},r.a.createElement(k.a,null),r.a.createElement(u.a,{variant:"h6",className:a.textBold,paragraph:!0},"Released:"),r.a.createElement(u.a,{paragraph:!0},N.Released),r.a.createElement(u.a,{variant:"h6",className:a.textBold,paragraph:!0},"Runtime:"),r.a.createElement(u.a,{paragraph:!0},N.Runtime),r.a.createElement(u.a,{variant:"h6",className:a.textBold,paragraph:!0},"Language:"),r.a.createElement(u.a,{paragraph:!0},N.Language),r.a.createElement(u.a,{variant:"h6",className:a.textBold,paragraph:!0},"Actors:"),r.a.createElement(u.a,{paragraph:!0},N.Actors),r.a.createElement(u.a,{variant:"h6",className:a.textBold,paragraph:!0},"Plot:"),r.a.createElement(u.a,{paragraph:!0},N.Plot)))}var w=t(137),j=t.n(w),R=Object(g.a)((function(e){return{image:{display:"flex",height:"70%",width:"100%"}}}));function T(e){var a=R(),t=e.handleRemoveNominate,n=e.data,i=e.bid,o=r.a.useState(0),l=Object(s.a)(o,2),c=l[0],m=l[1];return r.a.createElement(y.a,{style:0===c?{}:{backgroundColor:"rgba(255, 255, 255, 0.08)"},varient:"elevation",onMouseOut:function(){return m(0)},onMouseOver:function(){return m(24)},elevation:c,id:i,"data-key":n.imdbID},r.a.createElement(x.a,{expandIcon:r.a.createElement(S.a,null),"aria-controls":"panel"+{bid:i}+"bh-content",id:"panel"+{bid:i}+"bh-header"},r.a.createElement(h.a,{container:!0,spacing:1},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f.a,{startIcon:r.a.createElement(j.a,null),type:"submit",fullWidth:!0,variant:"contained",color:"secondary",id:i,onClick:t},"Remove")),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(u.a,{variant:"h6"},n.Title)))),r.a.createElement(O.a,null,r.a.createElement("img",{className:a.image,src:n.Poster,alt:"new"})))}var A=t(139),C=t.n(A),P=t(400),F=t(441),D=t(138),J=t.n(D),L=Object(g.a)((function(e){return{nominations:{width:"100%"},searchList:{width:"100%"},background:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#00091A"},textBar:{width:"100%",padding:e.spacing(.5)},title:{padding:e.spacing(1),textAlign:"center",fontWeight:600,width:"100%"},listContainer:{paddingTop:e.spacing(3)},text:{padding:e.spacing(1)}}})),z={particles:{number:{value:160,density:{enable:!1}},color:{value:["#ffffff","#FF00FF"]},size:{value:7,random:!0,anim:{speed:2,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}};function M(){var e=L(),a=r.a.useState(""),t=Object(s.a)(a,2),n=t[0],i=t[1],o=r.a.useState(""),l=Object(s.a)(o,2),c=l[0],g=l[1],f=r.a.useState([]),v=Object(s.a)(f,2),b=v[0],N=v[1],S=r.a.useState([]),y=Object(s.a)(S,2),x=y[0],O=y[1],k=r.a.useState(!1),B=Object(s.a)(k,2),w=B[0],j=B[1],R=r.a.useState(""),A=Object(s.a)(R,2),D=A[0],M=A[1];r.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("NominationsVinayShoppies"));e&&N(e)}),[]);var V=function(e,a){e.stopPropagation();var t=e.target.id;e.target.id||(t=e.target.parentNode.id);var n=b.concat([x[t]]);N(n),function(e){var a=JSON.parse(localStorage.getItem("NominationsVinayShoppies"));a||(a=[]),a.push(e),localStorage.setItem("NominationsVinayShoppies",JSON.stringify(a))}(x[t]),n.length>=5&&j(!0)},W=function(e){e.stopPropagation();var a=e.target.id;e.target.id||(a=e.target.parentNode.id);var t=b.slice();t.splice(a,1),N(t),function(e){var a=JSON.parse(localStorage.getItem("NominationsVinayShoppies"));a?(a.splice(e,1),localStorage.setItem("NominationsVinayShoppies",JSON.stringify(a))):a=[]}(a),t.length<5&&j(!1)};return r.a.createElement("div",null,r.a.createElement(J.a,{params:z,className:e.background}),r.a.createElement(u.a,{className:e.title,variant:"h3",component:"h1",gutterBottom:!0},"The Shoppies"),r.a.createElement(m.a,null,r.a.createElement(p.a,{my:6},r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:5},r.a.createElement(d.a,{className:e.textBar,name:"OMDB API key",variant:"filled",label:"API KEY",size:"small",autoFocus:!0,onInput:function(e){return g(e.target.value.trim())}}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://www.omdbapi.com/?apikey="+c+"&s="+n+"&",{method:"GET"}).then((function(e){return e.json()})).then((function(e){"True"===e.Response?(O(e.Search),M(n)):O([])})).catch((function(e){console.log(e)}))}},r.a.createElement(d.a,{className:e.textBar,name:"searchBar",variant:"filled",label:"Search Movies",size:"small",autoFocus:!0,onInput:function(e){return i(e.target.value.trim())},InputProps:{endAdornment:r.a.createElement(F.a,null,r.a.createElement(P.a,{type:"Submit",disableFocusRipple:!0,disableRipple:!0},r.a.createElement(C.a,null)))}}))),r.a.createElement(h.a,{item:!0,xs:!0},b.length<5?r.a.createElement(u.a,{className:e.title,variant:"h4",component:"h1",gutterBottom:!0},"Please Select ",5-b.length," Nominations!"):r.a.createElement(E.a,{variant:"outlined"},r.a.createElement(u.a,{className:e.title,variant:"h3",component:"h1",gutterBottom:!0},"Thank You For Nominating!")),r.a.createElement(u.a,{className:e.title,variant:"h6",component:"h1",gutterBottom:!0},"Nominations Are Saved! Feel Free To Come Back Anytime!"))),r.a.createElement(h.a,{container:!0,className:e.listContainer,spacing:3},r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(E.a,null,D?r.a.createElement(u.a,{className:e.title,variant:"h4",component:"h1",gutterBottom:!0},'Results for "',D,'"'):r.a.createElement(u.a,{className:e.title,variant:"h4",component:"h1",gutterBottom:!0},"Search Results"),r.a.createElement("div",{className:e.searchList},x.map((function(e,a){var t=!1;if(w)t=!0;else for(var n=0;n<b.length;n++)if(b[n].imdbID===e.imdbID){t=!0;break}return r.a.createElement(I,{apiKey:c,bid:a,handleNominate:function(e){return V(e)},data:e,isNominated:t})}))))),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(E.a,null,r.a.createElement(u.a,{className:e.title,variant:"h4",component:"h1",gutterBottom:!0},"Nominations"),r.a.createElement("div",{className:e.nominations},b.map((function(e,a){return r.a.createElement(T,{bid:a,handleRemoveNominate:function(e){return W(e)},data:e})})))))))))}var V=t(140),W=Object(V.a)({palette:{type:"dark",primary:{main:"#660066"}}});o.a.render(r.a.createElement(c.a,{theme:W},r.a.createElement(l.a,null),r.a.createElement(M,null)),document.querySelector("#root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.6a293e0f.chunk.js.map