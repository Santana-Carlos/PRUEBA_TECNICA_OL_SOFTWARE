(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),o=t.n(s),i=t(42),c=(t(96),t(13)),l=t(12),d=t(18),j=t(146),b=t(147),A=t(148),u=t(149),g=t(106),m=t(144),h=t(145),O=t(143),x=t(5),p=Object(x.a)((function(e){return{root:{display:"flex",width:"100%",height:"100%",color:"#FFFFFF",fontSize:"1.1rem",margin:0,fontWeight:400,textAlign:"center",textTransform:"none",borderRadius:"5px",background:"linear-gradient(45deg, #42ACF0, #193AC2)","&:hover":{transitionDuration:"background 2s ease",background:"linear-gradient(45deg, #6784FF, #142D97)"}}}}))(O.a),f=Object(x.a)((function(e){return{root:{display:"flex",width:"100%",height:"100%",color:"#FFFFFF",fontSize:"1.1rem",margin:0,fontWeight:400,textAlign:"center",textTransform:"none",borderRadius:"5px",background:"linear-gradient(45deg, #8BC247, #649B21)","&:hover":{background:"linear-gradient(45deg, #71A82D, #4A7D0C)"}}}}))(O.a),C=Object(x.a)((function(e){return{root:{display:"flex",width:"100%",height:"100%",color:"#FFFFFF",fontSize:"1.1rem",margin:0,fontWeight:400,textAlign:"center",textTransform:"none",borderRadius:"5px",background:"linear-gradient(45deg, #FB8383, #FB3A3A)","&:hover":{background:"linear-gradient(45deg, #E13434, #A40000)"}}}}))(O.a),v=Object(x.a)((function(e){return{root:{display:"flex",width:"100%",height:"100%",textTransform:"none",color:"#FFFFFF",borderRadius:0,margin:0,fontSize:"1.1rem",fontWeight:400,textAlign:"start",justifyContent:"flex-start",backgroundColor:"transparent","&:hover":{backgroundColor:"rgba(255,255,255,0.05)"}}}}))(O.a),w=function(e){var a=Object(n.useState)(e),t=Object(d.a)(a,2),r=t[0],s=t[1];return{value:r,onChange:function(e){return s(e.target.value)}}},B=t(38),N=(t(75),t(76),t(2)),E=function(){var e=w(""),a=w(""),t=Object(n.useState)(!1),r=Object(d.a)(t,2),s=r[0],o=r[1],i=Object(n.useState)(!1),c=Object(d.a)(i,2),O=c[0],x=c[1];return Object(N.jsxs)("div",{className:"o-login-container",children:[Object(N.jsxs)("form",{onSubmit:function(t){t.preventDefault(),B.users_data.some((function(t){return t.id===e.value&&t.pass===a.value}))?(o(!0),setTimeout((function(){window.location.assign("/dashboard")}),1500)):x(!0)},children:[Object(N.jsx)("h1",{children:" Inicio de sesi\xf3n "}),Object(N.jsxs)("div",{style:{margin:"3rem 0"},children:[Object(N.jsxs)("div",{className:"o-form-log o-form-log-user",children:[Object(N.jsx)("input",Object(l.a)({placeholder:"Usuario",className:"o-input-log"},e)),Object(N.jsx)(m.a,{className:"o-fullcenter"})]}),Object(N.jsxs)("div",{className:"o-form-log",children:[Object(N.jsx)("input",Object(l.a)({type:"password",placeholder:"Contrase\xf1a",className:"o-input-log"},a)),Object(N.jsx)(h.a,{className:"o-fullcenter"})]})]}),Object(N.jsx)("div",{className:"o-button-log",children:Object(N.jsx)(p,{type:"submit",children:"Iniciar sesi\xf3n"})})]}),Object(N.jsxs)(j.a,{open:O,onClose:function(){return x(!1)},PaperProps:{style:{borderRadius:"30px"}},children:[Object(N.jsx)(b.a,{style:{textAlign:"center",paddingBottom:"2rem"},children:"Credenciales inv\xe1lidas"}),Object(N.jsx)(A.a,{style:{textAlign:"center",padding:"0 2rem",maxHeight:"15rem"},children:"El usuario o contrase\xf1a es incorrecto."}),Object(N.jsx)(u.a,{style:{justifyContent:"center",padding:"2rem 0 1rem"},children:Object(N.jsx)("div",{className:"o-button-diag",children:Object(N.jsx)(f,{type:"submit",onClick:function(){return x(!1)},children:"Aceptar"})})})]}),Object(N.jsxs)(g.a,{open:s,className:"o-loading",style:{zIndex:2},children:[Object(N.jsx)("h1",{children:"Estamos preparando todo para t\xed"}),Object(N.jsx)("div",{className:"stage",children:Object(N.jsx)("div",{className:"dot-pulse"})})]})]})},Q=function(){return Object(N.jsxs)("div",{className:"o-login-background",children:[Object(N.jsxs)("div",{className:"o-row",style:{marginTop:"auto"},children:[Object(N.jsxs)("div",{className:"o-login-title",children:[Object(N.jsx)("h1",{style:{fontSize:"2.5em"},children:" Aplicaci\xf3n de Prueba "}),Object(N.jsx)("p",{style:{fontSize:"1.5em"},children:"Prueba pr\xe1ctica Front-end"})]}),Object(N.jsx)(E,{})]}),Object(N.jsx)("p",{style:{margin:"auto 0 1rem"},children:"Diego Colmenares - 2021"})]})},y=t(27),I=t(4),k=t(171),D=t(180),M=t(164),F=t(107),z=t(172),P=t(173),T=t(174),S=t(150),J=t(165),Y=t(166),G=t(167),W=t(168),R=t(169),V=t(170),L=t(175),q=t(151),Z=t.p+"static/media/user.82d2dba4.png",X=(t(77),function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),r=t[0],s=t[1],o=Object(n.useState)(!1),i=Object(d.a)(o,2),c=i[0],l=i[1];return Object(n.useEffect)((function(){s(B.users_data[0].nombres+" "+B.users_data[0].apellidos)}),[]),Object(N.jsxs)("div",{className:"o-appbar-container",children:[Object(N.jsx)("h2",{children:" Prueba Front-end "}),Object(N.jsxs)("div",{className:"o-appbar-useroptions",children:[Object(N.jsxs)("div",{className:"o-appbar-useroptions",children:[Object(N.jsx)("img",{className:"o-appbar-userimg",src:Z,alt:"foto del usuario"}),r]}),Object(N.jsx)(S.a,{style:{marginLeft:"1rem"},onClick:function(){console.log("Click!"),l(!0),setTimeout((function(){window.location.assign("/")}),1e3)},children:Object(N.jsx)(q.a,{style:{color:"#1D43AD"}})})]}),Object(N.jsxs)(g.a,{open:c,className:"o-loading",style:{zIndex:1250},children:[Object(N.jsx)("h1",{children:"Cerrando sesi\xf3n"}),Object(N.jsx)("div",{className:"stage",children:Object(N.jsx)("div",{className:"dot-pulse"})})]})]})}),K=t(68),H=t(153),U=t(154),_=t(155),$=t(156),ee=t(157),ae=t(158),te=t(177),ne=t(178),re=t(176),se=t(161),oe=t(152),ie=t(159),ce=t(160),le=(t(78),function(e){return Object(N.jsx)("div",{className:"o-filtro-bigcontainer",children:"Placeholder de trajeta"})}),de=["16%","16%","26%","10%","10%","12%","10%"],je=function(e){var a=Object(n.useState)(0),t=Object(d.a)(a,2),r=t[0],s=t[1],o=Object(n.useState)(5),i=Object(d.a)(o,2),c=i[0],g=i[1],m=Object(n.useState)(B.users_data),h=Object(d.a)(m,2),O=h[0],x=h[1],v=Object(n.useState)("none"),w=Object(d.a)(v,2),E=w[0],Q=w[1],y=Object(n.useState)({id:"",pass:"",nombres:"",apellidos:"",rol:"",telefono:"",correo:"",estado:""}),I=Object(d.a)(y,2),k=I[0],D=I[1],M=function(){var e=k.id,a=O.filter((function(a){return a.id!==e}));x(a),Q("none")},F=function(){D({id:"",pass:"",nombres:"",apellidos:"",rol:"",telefono:"",correo:"",estado:""})};return Object(N.jsxs)("div",{className:"o-roles-container",children:[Object(N.jsxs)("div",{className:"o-roles-table-bigcontainer",children:[Object(N.jsxs)("div",{className:"o-roles-table-titulo",children:[Object(N.jsxs)("div",{className:"o-roles-row",children:[Object(N.jsx)(oe.a,{style:{marginRight:"0.5rem"},size:"large",color:"inherit"}),Object(N.jsx)("h2",{children:"Usuarios existentes"})]}),Object(N.jsx)("div",{className:"o-roles-btn-add",children:Object(N.jsx)(p,{onClick:function(){F(),Q("add")},children:"Crear"})})]}),Object(N.jsx)(H.a,{className:"o-roles-table-container",children:Object(N.jsxs)(U.a,{stickyHeader:!0,size:"small",children:[Object(N.jsx)(_.a,{children:Object(N.jsxs)($.a,{children:[Object(N.jsx)(ee.a,{style:{minWidth:de[0]},children:"Nombres"}),Object(N.jsx)(ee.a,{style:{minWidth:de[1]},children:"Apellidos"}),Object(N.jsx)(ee.a,{style:{minWidth:de[2]},children:"Id. (C.C.)"}),Object(N.jsx)(ee.a,{style:{minWidth:de[3]},children:"Rol asociado"}),Object(N.jsx)(ee.a,{style:{minWidth:de[4]},children:"Estado"}),Object(N.jsx)(ee.a,{style:{minWidth:de[5]},children:"Tel\xe9fono"}),Object(N.jsx)(ee.a,{style:{minWidth:de[6]},children:"Correo el\xe9ctronico"}),Object(N.jsx)(ee.a,{style:{minWidth:de[7]},children:"Acci\xf3n"})]})}),Object(N.jsx)(ae.a,{children:O.slice(r*c,r*c+c).map((function(e,a){return Object(N.jsxs)($.a,{hover:!0,tabIndex:-1,children:[Object(N.jsx)(ee.a,{style:{minWidth:de[0]},children:e.nombres}),Object(N.jsx)(ee.a,{style:{minWidth:de[1]},children:e.apellidos}),Object(N.jsx)(ee.a,{style:{minWidth:de[2]},children:e.id}),Object(N.jsx)(ee.a,{style:{minWidth:de[3]},children:e.rol}),Object(N.jsx)(ee.a,{style:{minWidth:de[4]},children:e.estado?"Activo":"Inactivo"}),Object(N.jsx)(ee.a,{style:{minWidth:de[5]},children:e.telefono}),Object(N.jsx)(ee.a,{style:{minWidth:de[6]},children:e.correo}),Object(N.jsx)(ee.a,{children:Object(N.jsxs)("div",{className:"o-roles-table-btnicon",children:[Object(N.jsx)(S.a,{size:"small",color:"primary",onClick:function(){return D({id:(a=e).id,pass:a.pass,nombres:a.nombres,apellidos:a.apellidos,rol:a.rol,telefono:a.telefono,correo:a.correo,estado:a.estado}),void Q("edit");var a},children:Object(N.jsx)(ie.a,{})}),Object(N.jsx)(S.a,{size:"small",color:"secondary",onClick:function(){D((function(a){return Object(l.a)(Object(l.a)({},a),{},{id:e.id})})),Q("del")},children:Object(N.jsx)(ce.a,{})})]})})]},a)}))})]})}),Object(N.jsx)(te.a,{rowsPerPageOptions:[5,8,10],component:"div",count:O.length,rowsPerPage:c,labelRowsPerPage:"Filas por p\xe1gina: ",page:r,onChangePage:function(e,a){s(a)},onChangeRowsPerPage:function(e){g(+e.target.value),s(0)}})]}),Object(N.jsx)(le,{}),Object(N.jsxs)(j.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:"add"===E||"edit"===E,maxWidth:!1,PaperProps:{style:{borderRadius:"30px"}},children:[Object(N.jsx)(b.a,{style:{textAlign:"start",paddingLeft:"2rem"},children:"add"===E?"Agregar nuevo usuario":"Editar usuario"}),Object(N.jsx)("div",{className:"o-roles-diag"}),Object(N.jsx)(A.a,{children:Object(N.jsxs)("div",{className:"o-roles-contentform-big",children:[Object(N.jsxs)("div",{className:"o-roles-contentform",children:[Object(N.jsx)("div",{className:"o-roles-label",children:"Nombres"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.nombres,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{nombres:e.target.value})}))},className:"o-space",variant:"outlined",margin:"dense"})}),Object(N.jsx)("div",{className:"o-roles-label",children:"Identificaci\xf3n (C.C.)"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.id,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{id:e.target.value})}))},disabled:"edit"===E,className:"o-space",variant:"outlined",margin:"dense"})}),Object(N.jsx)("div",{className:"o-roles-label",children:"Estado"}),Object(N.jsxs)(re.a,{value:k.estado,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{estado:e.target.value})}))},style:{marginTop:"8px"},variant:"outlined",margin:"dense",className:"o-space o-roles-boxspacing",children:[Object(N.jsx)(se.a,{value:!0,children:"Activo"}),Object(N.jsx)(se.a,{value:!1,children:"Inactivo"})]}),Object(N.jsx)("div",{className:"o-roles-label",children:"Tel\xe9fono"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.telefono,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{telefono:e.target.value})}))},className:"o-space",variant:"outlined",margin:"dense"})})]}),Object(N.jsxs)("div",{className:"o-roles-contentform",children:[Object(N.jsx)("div",{className:"o-roles-label",children:"Apellidos"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.apellidos,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{apellidos:e.target.value})}))},className:"o-space",variant:"outlined",margin:"dense"})}),Object(N.jsx)("div",{className:"o-roles-label",children:"Rol asociado"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.rol,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{rol:e.target.value})}))},className:"o-space",variant:"outlined",margin:"dense"})}),Object(N.jsx)("div",{className:"o-roles-label",children:"Contrase\xf1a"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.pass,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{pass:e.target.value})}))},className:"o-space",type:"password",variant:"outlined",margin:"dense"})}),Object(N.jsx)("div",{className:"o-roles-label",children:"Correo el\xe9ctronico"}),Object(N.jsx)("div",{className:"o-roles-boxspacing",children:Object(N.jsx)(ne.a,{value:k.correo,onChange:function(e){return D((function(a){return Object(l.a)(Object(l.a)({},a),{},{correo:e.target.value})}))},className:"o-space",variant:"outlined",margin:"dense"})})]})]})}),Object(N.jsxs)(u.a,{style:{justifyContent:"center"},children:[Object(N.jsx)("div",{className:"o-roles-btn-diag",children:Object(N.jsx)(C,{onClick:function(){Q("none"),F()},children:"Cancelar"})}),Object(N.jsx)("div",{className:"o-roles-btn-diag",children:Object(N.jsx)(f,{onClick:function(){return function(){var e=k;switch(E){case"add":x((function(a){return[e].concat(Object(K.a)(a))}));break;case"edit":M(),setTimeout((function(){return x((function(a){return[e].concat(Object(K.a)(a))}))}),100)}Q("none")}()},children:"Guardar"})})]})]}),Object(N.jsxs)(j.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:"del"===E,maxWidth:!1,PaperProps:{style:{borderRadius:"30px"}},children:[Object(N.jsx)(b.a,{style:{textAlign:"center"},children:"\xbfDesea eliminar el usuario?"}),Object(N.jsx)(A.a,{}),Object(N.jsxs)(u.a,{style:{justifyContent:"center"},children:[Object(N.jsx)("div",{className:"o-roles-btn-diag",children:Object(N.jsx)(C,{onClick:function(){return M()},children:"Eliminar"})}),Object(N.jsx)("div",{className:"o-roles-btn-diag",children:Object(N.jsx)(f,{onClick:function(){Q("none"),F()},children:"Cancelar"})})]})]})]})},be=function(){return Object(N.jsx)("div",{className:"o-footer",children:" OLSoftware - 2018 "})},Ae="290px",ue="76px",ge=[{palabra:"Programaci\xf3n",url:"/dashboard/programacion",obj:Object(N.jsx)(J.a,{})},{palabra:"Gesti\xf3n de Operaciones",url:"/dashboard/gestion",obj:Object(N.jsx)(Y.a,{})},{palabra:"Perfiles",url:"/dashboard/perfiles",obj:Object(N.jsx)(G.a,{})},{palabra:"Roles",url:"/dashboard/roles",obj:Object(N.jsx)(W.a,{})},{palabra:"Usuario",url:"/dashboard/usuario",obj:Object(N.jsx)(R.a,{})},{palabra:"Reportes",url:"/dashboard/reportes",obj:Object(N.jsx)(V.a,{})}],me=Object(k.a)((function(e){return{root:{display:"flex"},drawer:{width:Ae,flexShrink:0,whiteSpace:"nowrap",color:"#fff"},drawerOpen:{width:Ae,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:ue},mainContent:{display:"flex",flexDirection:"row",justifyContent:"flex-start",height:"calc(100vh - 90px)",backgroundColor:"#F2F2F2",marginLeft:ue,width:"calc(100vw - 76px)"},mainContentOpen:{display:"flex",flexDirection:"row",justifyContent:"flex-start",height:"35px",marginLeft:Ae,width:"calc(100vw - 290px)",transition:e.transitions.create(["margin-left","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},mainContentClose:{display:"flex",flexDirection:"row",justifyContent:"flex-start",height:"35px",marginLeft:ue,width:"calc(100vw - 76px)",transition:e.transitions.create(["margin-left","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}})),he=function(){var e,a,t,r,s=me(),o=Object(n.useState)(!1),l=Object(d.a)(o,2),j=l[0],b=l[1];return Object(N.jsxs)("div",{children:[Object(N.jsxs)(D.a,{variant:"permanent",className:Object(I.a)(s.drawer,(e={},Object(y.a)(e,s.drawerOpen,j),Object(y.a)(e,s.drawerClose,!j),e)),classes:{paper:Object(I.a)((a={},Object(y.a)(a,s.drawerOpen,j),Object(y.a)(a,s.drawerClose,!j),a))},PaperProps:{style:{background:"linear-gradient(180deg, #42ACF0, #193AC2)",color:"#fff"}},children:[Object(N.jsx)(M.a,{children:Object(N.jsx)(i.b,{to:"/dashboard",style:{textDecoration:"none",color:"#fff"},onClick:function(){return b(!1)},children:Object(N.jsxs)(F.a,{button:!0,children:[Object(N.jsx)(z.a,{children:Object(N.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"o-dashboard-logoimg"})}),Object(N.jsx)(P.a,{primary:"App prueba"})]},"Main")})}),Object(N.jsx)(T.a,{style:{background:"#fff"},variant:"middle"}),Object(N.jsx)(M.a,{children:ge.map((function(e,a){return Object(N.jsx)(F.a,{children:Object(N.jsx)(i.c,{to:e.url,className:"o-dashboard-option-btn o-dashboard-option-btn-inactive",activeClassName:"o-dashboard-option-btn o-dashboard-option-btn-active",onClick:function(){return b(!1)},children:Object(N.jsxs)(v,{style:{paddingLeft:"10px"},children:[Object(N.jsx)(z.a,{style:{color:"#fff"},children:e.obj}),Object(N.jsx)(P.a,{primary:e.palabra})]})})},a)}))})]}),Object(N.jsxs)("div",{className:Object(I.a)((t={},Object(y.a)(t,s.mainContentOpen,j),Object(y.a)(t,s.mainContentClose,!j),t)),style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",color:"#1D43AD",height:"55px"},children:[Object(N.jsx)(S.a,{onClick:function(){b((function(e){return!e}))},children:Object(N.jsx)(L.a,{style:{color:"#1D43AD"}})}),Object(N.jsx)(X,{})]}),Object(N.jsx)("div",{className:s.mainContent,onClick:function(){return b(!1)},children:Object(N.jsxs)(c.d,{children:[Object(N.jsx)(c.b,{exact:!0,path:"/dashboard",children:Object(N.jsx)("div",{className:"o-dashboard-option-placeholder",children:"Placeholder Dashboard"})}),Object(N.jsx)(c.b,{path:"/dashboard/roles",children:Object(N.jsx)(je,{})}),ge.map((function(e,a){return Object(N.jsx)(c.b,{path:e.url,children:Object(N.jsxs)("div",{className:"o-dashboard-option-placeholder",children:["Placeholder ",e.palabra]})},a)}))]})}),Object(N.jsx)("div",{className:Object(I.a)((r={},Object(y.a)(r,s.mainContentOpen,j),Object(y.a)(r,s.mainContentClose,!j),r)),children:Object(N.jsx)(be,{})})]})},Oe=(t(103),function(){return Object(N.jsxs)(c.d,{children:[Object(N.jsx)(c.b,{path:"/login",children:Object(N.jsx)(Q,{})}),Object(N.jsx)(c.b,{path:"/dashboard",children:Object(N.jsx)(he,{})}),Object(N.jsx)(c.b,{exact:!0,path:"/",children:Object(N.jsx)(c.a,{exact:!0,to:"/login"})})]})}),xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,181)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),n(e),r(e),s(e),o(e)}))};o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(Oe,{})})}),document.getElementById("root")),xe()},38:function(e){e.exports=JSON.parse('{"auth":[{"user":"user01","pass":"1234","nombres":"Diego Andr\xe9s","apellidos":"Colmenares"},{"user":"user02","pass":"9876","nombres":"Andr\xe9s Felipe","apellidos":"Garc\xeda Castro"},{"user":"admin01","pass":"adminpass","nombres":"Mar\xeda Fernanda","apellidos":"Perez Ortiz"}],"users_data":[{"id":"1010109872","pass":"9876","nombres":"Diego Andr\xe9s","apellidos":"Colmenares Machado","rol":"Conductor","telefono":31081062798,"correo":"diegocol@mail.com","estado":false},{"id":"114485404","pass":"1234","nombres":"Andr\xe9s Felipe","apellidos":"Garcia Castro","rol":"Administrador","telefono":3165303978,"correo":"afgarcia@refinal.com","estado":true},{"id":"665789080","pass":"1234","nombres":"Elizabeth","apellidos":"Arboleda","rol":"Administrador","telefono":3165303978,"correo":"earboleda@refinal.com","estado":false},{"id":"665789043","pass":"1234","nombres":"Jader","apellidos":"Penagos","rol":"Conductor","telefono":3175303978,"correo":"jpenagos@refinal.com","estado":true},{"id":"1122567890","pass":"1234","nombres":"Diana","apellidos":"Villa","rol":"Recolector","telefono":3005303976,"correo":"dvilla@refinal.com","estado":true},{"id":"1144198789","pass":"1234","nombres":"Luis Andr\xe9s","apellidos":"Murillo","rol":"Administrador","telefono":3115134078,"correo":"lamurillo@refinal.com","estado":true},{"id":"44789056","pass":"1234","nombres":"Jairo","apellidos":"Gutierrez","rol":"Coordinador","telefono":3125333977,"correo":"jgutierrez@refinal.com","estado":true},{"id":"1144198786","pass":"1234","nombres":"Alexandra","apellidos":"Culcha","rol":"Digitador CG-UNO","telefono":3145439560,"correo":"aculcha@refinal.com","estado":false},{"id":"72567788","pass":"1234","nombres":"Valentina","apellidos":"Zapata","rol":"Recolector","telefono":3157893970,"correo":"vzapata@refinal.com","estado":true},{"id":"126459785","pass":"1234","nombres":"Pedro","apellidos":"Perez","rol":"Administrador","telefono":3106295425,"correo":"pperz@refinal.com","estado":true},{"id":"120326548","pass":"1234","nombres":"Marta Lucia","apellidos":"Velazques","rol":"Recolector","telefono":3032659485,"correo":"mvelazques@refinal.com","estado":false},{"id":"102326586","pass":"1234","nombres":"Camilo Andr\xe9s","apellidos":"Ortega Velez","rol":"Conductor","telefono":3126598458,"correo":"cortega@refinal.com","estado":true},{"id":"1010265984","pass":"1234","nombres":"Daniel","apellidos":"Londo\xf1es","rol":"Coordinador","telefono":3102659426,"correo":"dlondones@refinal.com","estado":true},{"id":"1495623154","pass":"1234","nombres":"Marta","apellidos":"Manrrique","rol":"Coordinador","telefono":3112536159,"correo":"mmanrrique@refinal.com","estado":true},{"id":"123654895","pass":"1234","nombres":"Juan Pablo","apellidos":"Ortiz","rol":"Administrador","telefono":3152365492,"correo":"jortiz@refinal.com","estado":true},{"id":"159874526","pass":"1234","nombres":"Juan Jose","apellidos":"Martines","rol":"Digitador CG-UNO","telefono":162548215,"correo":"jmartines@refinal.com","estado":true},{"id":"4526195","pass":"1234","nombres":"Valentina","apellidos":"Ortega Nu\xf1ez","rol":"Conductor","telefono":3162512485,"correo":"vortega@refinal.com","estado":false}]}')},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},96:function(e,a,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.0c62af1f.chunk.js.map