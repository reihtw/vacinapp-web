(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{419:function(e,a,t){},438:function(e,a,t){},447:function(e,a,t){},684:function(e,a,t){},686:function(e,a,t){},687:function(e,a,t){},704:function(e,a,t){},705:function(e,a,t){},706:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),o=t.n(r),s=(t(419),t(13)),i=t(45),l=Object(n.createContext)({token:null,setToken:function(){}}),j=t(96);function b(e){var a={tipo:"enfermeiros",token:e};return j.post("https://us-central1-vacinapp-1.cloudfunctions.net/authServer/validation",a).then((function(e){return 200})).catch((function(e){return 403}))}t(438);var u=t(7);var O=function(e){e.alteraTabela;var a=Object(n.useContext)(l).token,t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){b(a).then((function(e){o(200===e)}))}),[a]),Object(u.jsx)(u.Fragment,{children:r?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"page-header",children:"VacinApp"}),Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/vacinapp-web/vacinacao/cadastrar",children:Object(u.jsx)("button",{className:"item",children:"Vacinar"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/vacinapp-web/pacientes",children:Object(u.jsx)("button",{className:"item",children:"Pacientes"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/vacinapp-web/enfermeiros",children:Object(u.jsx)("button",{className:"item",children:"Enfermeiros(as)"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/vacinapp-web/vacinas",children:Object(u.jsx)("button",{className:"item",children:"Vacinas"})})})]})})]}):void 0})},d=t(26),m=t(102),p=t(728),h=t(4),f=t(321),v=t(322),g=t(96);function x(e,a,t,n,c){var r={nome:e,email:a,coren:t,senha:n,admin:c};return g.post("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/enfermeiros",r).then((function(e){return e})).catch((function(e){return e}))}function S(e,a,t){var n={};return g.get("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/enfermeiros/".concat(e,"/").concat(a),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return console.log(e),n={registros:Array.from(e.data)},console.log(n),n})).catch((function(e){return n={erro:e}}))}t(447);var N=t(395),C=t.n(N);function y(){return Object(u.jsx)(C.a,{type:"spinningBubbles",color:"#fff"})}var E=Object(h.a)({input:{borderRadius:10}})((function(e){var a=e.classes,t=Object(d.f)(),r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],j=o[1],O=Object(n.useState)(""),h=Object(s.a)(O,2),x=h[0],S=h[1],N=Object(n.useContext)(l),C=N.token,E=N.setToken,P=Object(n.useState)(!1),T=Object(s.a)(P,2),w=T[0],R=T[1],I=Object(n.useState)(!1),k=Object(s.a)(I,2),z=k[0],D=k[1],A=Object(m.a)({palette:{primary:{main:"#5CCFE6"}},spacing:8});return Object(n.useEffect)((function(){D(!0);b(C).then((function(e){D(!1),200===e&&t.push("/vacinapp-web/pacientes")}))}),[C]),Object(u.jsx)("div",{className:"container-login",children:z?Object(u.jsx)(y,{}):Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("h2",{className:"titulo-login",children:"VacinApp"}),Object(u.jsx)(p.a,{theme:A,children:Object(u.jsxs)("form",{className:"formulario-login",onSubmit:function(e){e.preventDefault(),D(!0),function(e,a){var t={tipo:"enfermeiros",user:{coren:e,senha:a}};return g.post("https://us-central1-vacinapp-1.cloudfunctions.net/authServer/login",t).then((function(e){return e})).catch((function(e){return console.log(e),e}))}(i,x).then((function(e){var a=e.data;D(!1),console.log(a),E(a.accessToken),t.push("/vacinapp-web/pacientes")})).catch((function(e){D(!1),R(!0)}))},children:[w&&Object(u.jsx)("h3",{className:"erro",children:"E-mail/Senha inv\xe1lidos"}),Object(u.jsx)(f.a,{label:"COREN",id:"coren",variant:"outlined",margin:"normal",InputProps:{className:a.input},onChange:function(e){j(e.target.value)}}),Object(u.jsx)(f.a,{label:"Senha",id:"senha",variant:"outlined",margin:"normal",type:"password",style:{marginRight:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){S(e.target.value)}}),Object(u.jsx)(v.a,{variant:"contained",color:"primary",size:"large",type:"submit",children:Object(u.jsx)("p",{className:"reset-a",children:"Login"})})]})})]})})})),P=t(398),T=t.n(P),w=t(239),R=t(360),I=t(401),k=t.n(I),z=t(400),D=t.n(z),A=t(241),B=t.n(A),q=y,M=(t(684),t(96));var F=function(e){var a=e.tabela,t=Object(d.f)(),c=Object(n.useState)([]),r=Object(s.a)(c,2),o=r[0],j=r[1],O=Object(n.useState)([]),h=Object(s.a)(O,2),f=h[0],v=h[1],g=Object(n.useState)(!1),x=Object(s.a)(g,2),S=x[0],N=x[1],C={nome:"Nome",cpf:"CPF",email:"E-mail",dataNasc:"Data de Nascimento",coren:"COREN",admin:"Administrador",doenca:"Doen\xe7a",fabricante:"Fabricante",dose:"Doses",lote:"Lote",quantidade:"Quantidade",prazoMaximoEntreDoses:"Prazo m\xe1ximo entre doses",tempoTotalProtecao:"Tempo total de prote\xe7\xe3o"},y=["_id","__v","refreshToken"],E=Object(n.useContext)(l).token,P={admin:{customBodyRender:function(e,a,t){return e?Object(u.jsx)(R.a,{title:"Sim",children:Object(u.jsx)(D.a,{color:"primary"})}):Object(u.jsx)(R.a,{title:"N\xe3o",children:Object(u.jsx)(B.a,{color:"secondary"})})}},acoes:{customBodyRender:function(){return Object(u.jsx)("button",{className:"botao",children:"Editar"})}}};Object(n.useEffect)((function(){b(E).then((function(e){403===e&&t.push("/")})),N(!0),M.get("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/".concat(a),{headers:{Authorization:"Bearer ".concat(E)}}).then((function(e){v(Array.from(e.data)),I(Array.from(e.data)),N(!1)})).catch((function(e){console.log(e)}))}),[a]);var I=function(e){var t=[];if(e.length>0){for(var n=Object.keys(e[0]),c=0;c<n.length;c++){var r=n[c];y.includes(r)&&n.splice(c,1)}for(var o=0,s=n;o<s.length;o++){var i=s[o];t.push({name:i,label:C[i],options:P[i]})}"pacientes"!==a&&t.push({name:"acoes",label:"A\xe7\xf5es",options:P.acoes}),j(t)}},z={filter:!0,filterType:"dropdown",selectableRowsHideCheckboxes:!0,selectableRows:"single",responsive:"vertical",rowsPerPage:8,rowsPerPageOptions:[],customToolbarSelect:function(){},customToolbar:function(){if("pacientes"!==a)return Object(u.jsx)(R.a,{title:"Adicionar",children:Object(u.jsx)(i.b,{to:"/vacinapp-web/".concat(a,"/cadastrar"),children:Object(u.jsx)(w.a,{children:Object(u.jsx)(k.a,{})})})})}};return Object(u.jsx)("div",{className:"container-table",children:S?Object(u.jsx)(q,{}):Object(u.jsx)("div",{className:"sub-container-table",children:Object(u.jsx)(p.a,{theme:Object(m.a)({overrides:{MUIDataTable:{paper:{borderRadius:10,border:"none"}},MUIDataTableToolbarSelect:{root:{borderTopLeftRadius:10,borderTopRightRadius:10}}}}),children:Object(u.jsx)(T.a,{className:"table",title:a.charAt(0).toUpperCase()+a.slice(1),columns:o,data:f,options:z})})})})},V=t(60),L=t.n(V),W=t(84),J=t(6),Q=t(364),U=t(388);t(686);var _=Object(h.a)({input:{borderRadius:10}})((function(e){var a=e.classes,t=Object(d.f)(),r=Object(n.useContext)(l).token,o=Object(n.useState)(!1),i=Object(s.a)(o,2),j=i[0],O=i[1],h=Object(n.useState)(""),g=Object(s.a)(h,2),N=g[0],C=g[1],y=Object(n.useState)(""),E=Object(s.a)(y,2),P=E[0],T=E[1],w=Object(n.useState)(""),R=Object(s.a)(w,2),I=R[0],k=R[1],z=Object(n.useState)(""),D=Object(s.a)(z,2),A=D[0],B=D[1],M=Object(n.useState)(""),F=Object(s.a)(M,2),V=F[0],_=F[1],H=Object(n.useState)(!1),Z=Object(s.a)(H,2),$=Z[0],G=Z[1],K=Object(n.useState)(!1),X=Object(s.a)(K,2),Y=X[0],ee=X[1],ae=Object(n.useState)({nome:!1,coren:!1,email:!1,senha:!1,confirmarSenha:!1}),te=Object(s.a)(ae,2),ne=te[0],ce=te[1],re=Object(n.useState)({nome:{value:!1,message:""},email:{value:!1,message:""},coren:{value:!1,message:""},senha:{value:!1,message:""},confirmarSenha:{value:!1,message:""}}),oe=Object(s.a)(re,2),se=oe[0],ie=oe[1];Object(n.useEffect)((function(){b(r).then((function(e){403===e&&t.push("/vacinapp-web")}))}),[]);var le=function(e){for(var a=0,t=Object.entries(e);a<t.length;a++){var n=Object(s.a)(t[a],2);n[0];if(!n[1].value)return void ee(!1)}ee(!0)},je=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.split(" ").length>=2?(ie(Object(J.a)(Object(J.a)({},se),{},{nome:{value:!0,message:""}})),le(Object(J.a)(Object(J.a)({},se),{},{nome:{value:!0,message:""}}))):(ie(Object(J.a)(Object(J.a)({},se),{},{nome:{value:!1,message:a}})),le(Object(J.a)(Object(J.a)({},se),{},{nome:{value:!1,message:a}})))},be=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.test(e.toLowerCase())?S("email",e,r).then((function(e){var a;console.log(e);try{a=e.registros.length}catch(t){a=0}e.erros||0!==a?(ie(Object(J.a)(Object(J.a)({},se),{},{email:{value:!1,message:"E-mail j\xe1 cadastrado."}})),le(Object(J.a)(Object(J.a)({},se),{},{email:{value:!1,message:"E-mail j\xe1 cadastrado."}}))):(ie(Object(J.a)(Object(J.a)({},se),{},{email:{value:!0,message:""}})),le(Object(J.a)(Object(J.a)({},se),{},{email:{value:!0,message:""}})))})):(ie(Object(J.a)(Object(J.a)({},se),{},{email:{value:!1,message:a}})),le(Object(J.a)(Object(J.a)({},se),{},{email:{value:!1,message:a}})))},ue=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[a-zA-Z]{2})$/;t.test(e.toUpperCase())&&2===e.split("-").length?S("coren",e,r).then((function(e){var a;try{a=e.registros.length}catch(t){a=0}e.erros||0!==a?(ie(Object(J.a)(Object(J.a)({},se),{},{coren:{value:!1,message:"COREN j\xe1 cadastrado."}})),le(Object(J.a)(Object(J.a)({},se),{},{coren:{value:!1,message:"COREN j\xe1 cadastrado."}}))):(ie(Object(J.a)(Object(J.a)({},se),{},{coren:{value:!0,message:""}})),le(Object(J.a)(Object(J.a)({},se),{},{coren:{value:!0,message:""}})))})):(ie(Object(J.a)(Object(J.a)({},se),{},{coren:{value:!1,message:a}})),le(Object(J.a)(Object(J.a)({},se),{},{coren:{value:!1,message:a}})))},Oe=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.length>=5?(ie(Object(J.a)(Object(J.a)({},se),{},{senha:{value:!0,message:""}})),le(Object(J.a)(Object(J.a)({},se),{},{senha:{value:!0,message:""}}))):(ie(Object(J.a)(Object(J.a)({},se),{},{senha:{value:!1,message:a}})),le(Object(J.a)(Object(J.a)({},se),{},{senha:{value:!1,message:a}})))},de=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e===A?(ie(Object(J.a)(Object(J.a)({},se),{},{confirmarSenha:{value:!0,message:""}})),le(Object(J.a)(Object(J.a)({},se),{},{confirmarSenha:{value:!0,message:""}}))):(ie(Object(J.a)(Object(J.a)({},se),{},{confirmarSenha:{value:!1,message:a}})),le(Object(J.a)(Object(J.a)({},se),{},{confirmarSenha:{value:!1,message:a}})))},me=Object(m.a)({palette:{primary:{main:"#5CCFE6"}},spacing:8});return Object(u.jsx)("div",{className:"container-cadastro",children:j?Object(u.jsx)(q,{}):Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("h2",{className:"titulo-cadastro",children:"Cadastrar Enfermeiro"}),Object(u.jsx)(p.a,{theme:me,children:Object(u.jsxs)("form",{className:"formulario-cadastro",children:[Object(u.jsx)(f.a,{label:"Nome",id:"nome",helperText:se.nome.message,variant:"outlined",margin:"normal",error:ne.nome,InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();C(a),je(a)},onBlur:function(){je(N,"\xc9 necess\xe1rio pelo menos um sobrenome."),ce(Object(J.a)(Object(J.a)({},ne),{},{nome:!se.nome.value}))}}),Object(u.jsx)(f.a,{label:"E-mail",id:"email",type:"email",helperText:se.email.message,variant:"outlined",margin:"normal",error:ne.email,InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();console.log(a),T(a),be(a)},onBlur:function(){be(P,"E-mail inv\xe1lido."),ce(Object(J.a)(Object(J.a)({},ne),{},{email:!se.email.value}))}}),Object(u.jsx)(f.a,{label:"COREN",id:"coren",helperText:se.coren.message,error:ne.coren,variant:"outlined",margin:"normal",InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();a.length>14&&(a=a.substring(0,8)),k(a),ue(a)},onBlur:function(){ue(I,"COREN inv\xe1lido! Siga o modelo: 000.000.000-SP."),ce(Object(J.a)(Object(J.a)({},ne),{},{coren:!se.coren.value}))}}),Object(u.jsxs)("div",{className:"senhas",children:[Object(u.jsx)(f.a,{label:"Senha",id:"senha",variant:"outlined",margin:"normal",type:"password",helperText:se.senha.message,error:ne.senha,style:{marginRight:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){var a=e.target.value.trim();B(a),Oe(a)},onBlur:function(){Oe(A,"Senha deve conter pelo menos 5 caract\xe9res."),ce(Object(J.a)(Object(J.a)({},ne),{},{senha:!se.senha.value}))}}),Object(u.jsx)(f.a,{label:"Confirmar Senha",id:"confirmarSenha",variant:"outlined",margin:"normal",type:"password",helperText:se.confirmarSenha.message,error:ne.confirmarSenha,style:{marginLeft:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){var a=e.target.value.trim();_(a),de(a)},onBlur:function(){de(V,"A confirma\xe7\xe3o da senha deve ser igual a senha."),ce(Object(J.a)(Object(J.a)({},ne),{},{confirmarSenha:!se.confirmarSenha.value}))}})]}),Object(u.jsx)(Q.a,{label:"Administrador",control:Object(u.jsx)(U.a,{color:"primary",onChange:function(e){G(e.target.checked)}})}),Object(u.jsx)(v.a,{disabled:!Y,variant:"contained",color:"primary",size:"large",onClick:Object(W.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,x(N,P,I,A,$);case 3:O(!1),t.push("/vacinapp-web/enfermeiros");case 5:case"end":return e.stop()}}),e)}))),children:Object(u.jsx)("p",{className:"reset-a",children:"Cadastrar Enfermeiro"})})]})})]})})})),H=t(96);function Z(e,a,t,n,c,r,o){var s={doenca:e,fabricante:a,dose:t,lote:n,quantidade:c,prazoMaximoEntreDoses:r,tempoTotalProtecao:o};H.post("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/vacinas",s).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}t(687);var $=Object(h.a)({input:{borderRadius:10}})((function(e){var a=e.classes,t=Object(d.f)(),r=Object(n.useContext)(l).token,o=Object(n.useState)(!1),i=Object(s.a)(o,2),j=i[0],O=i[1],h=Object(n.useState)(""),g=Object(s.a)(h,2),x=g[0],S=g[1],N=Object(n.useState)(""),C=Object(s.a)(N,2),y=C[0],E=C[1],P=Object(n.useState)(""),T=Object(s.a)(P,2),w=T[0],R=T[1],I=Object(n.useState)(""),k=Object(s.a)(I,2),z=k[0],D=k[1],A=Object(n.useState)(""),B=Object(s.a)(A,2),M=B[0],F=B[1],V=Object(n.useState)(""),Q=Object(s.a)(V,2),U=Q[0],_=Q[1],H=Object(n.useState)(""),$=Object(s.a)(H,2),G=$[0],K=$[1],X=Object(n.useState)(!1),Y=Object(s.a)(X,2),ee=Y[0],ae=Y[1],te=Object(n.useState)({doenca:!1,dose:!1,lote:!1,quantidade:!1,prazoMaximoEntreDoses:!1,tempoTotalProtecao:!1}),ne=Object(s.a)(te,2),ce=ne[0],re=ne[1],oe=Object(n.useState)({doenca:!1,dose:!1,lote:!1,quantidade:!1,prazoMaximoEntreDoses:!1,tempoTotalProtecao:!1}),se=Object(s.a)(oe,2),ie=se[0],le=se[1];Object(n.useEffect)((function(){b(r).then((function(e){403===e&&t.push("/vacinapp-web")}))}),[]);var je=function(e){for(var a=0,t=Object.entries(e);a<t.length;a++){var n=Object(s.a)(t[a],2);n[0];if(!n[1])return void ae(!1)}ae(!0)},be=Object(m.a)({palette:{primary:{main:"#5CCFE6"}},spacing:8});return Object(u.jsx)("div",{className:"container-cadastro",children:j?Object(u.jsx)(q,{}):Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("h2",{className:"titulo-cadastro",children:"Cadastrar Vacina"}),Object(u.jsx)(p.a,{theme:be,children:Object(u.jsxs)("form",{className:"formulario-cadastro",children:[Object(u.jsx)(f.a,{label:"Doen\xe7a",id:"doenca",helperText:"Ex.: Covid19, Febre Amarela, HPV",variant:"outlined",margin:"normal",error:ce.doenca,InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();S(a),function(e){e.length>0?(le(Object(J.a)(Object(J.a)({},ie),{},{doenca:!0})),je(Object(J.a)(Object(J.a)({},ie),{},{doenca:!0}))):(le(Object(J.a)(Object(J.a)({},ie),{},{doenca:!1})),je(Object(J.a)(Object(J.a)({},ie),{},{doenca:!1})))}(a)},onBlur:function(){re(Object(J.a)(Object(J.a)({},ce),{},{doenca:!ie.doenca}))}}),Object(u.jsx)(f.a,{label:"Fabricante",id:"fabricante",type:"text",helperText:"Ex.: CoronaVac, ",variant:"outlined",margin:"normal",InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();E(a)}}),Object(u.jsx)(f.a,{label:"Doses",id:"doses",helperText:"Quantidade de doses que s\xe3o necess\xe1rias para o paciente tomar.",error:ce.dose,type:"number",variant:"outlined",margin:"normal",InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();R(a),function(e){e>0?(le(Object(J.a)(Object(J.a)({},ie),{},{dose:!0})),je(Object(J.a)(Object(J.a)({},ie),{},{dose:!0}))):(le(Object(J.a)(Object(J.a)({},ie),{},{dose:!1})),je(Object(J.a)(Object(J.a)({},ie),{},{dose:!1})))}(a)},onBlur:function(){re(Object(J.a)(Object(J.a)({},ce),{},{dose:!ie.dose}))}}),Object(u.jsxs)("div",{className:"lote-info",children:[Object(u.jsx)(f.a,{label:"Lote",id:"lote",variant:"outlined",margin:"normal",type:"text",helperText:"C\xf3digo de lote das vacinas",error:ce.lote,style:{marginRight:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){var a=e.target.value.trim();D(a),function(e){e.length>0?(le(Object(J.a)(Object(J.a)({},ie),{},{lote:!0})),je(Object(J.a)(Object(J.a)({},ie),{},{lote:!0}))):(le(Object(J.a)(Object(J.a)({},ie),{},{lote:!1})),je(Object(J.a)(Object(J.a)({},ie),{},{lote:!1})))}(a)},onBlur:function(){re(Object(J.a)(Object(J.a)({},ce),{},{lote:!ie.lote}))}}),Object(u.jsx)(f.a,{label:"Quantidade",id:"quantidade",variant:"outlined",margin:"normal",type:"number",helperText:"Quantidade de vacinas que vieram no lote",error:ce.quantidade,style:{marginLeft:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){var a=e.target.value.trim();F(a),function(e){e>0?(le(Object(J.a)(Object(J.a)({},ie),{},{quantidade:!0})),je(Object(J.a)(Object(J.a)({},ie),{},{quantidade:!0}))):(le(Object(J.a)(Object(J.a)({},ie),{},{quantidade:!1})),je(Object(J.a)(Object(J.a)({},ie),{},{quantidade:!1})))}(a)},onBlur:function(){re(Object(J.a)(Object(J.a)({},ce),{},{quantidade:!ie.quantidade}))}})]}),Object(u.jsxs)("div",{className:"lote-info",children:[Object(u.jsx)(f.a,{label:"Tempo max. entre doses",id:"lote",variant:"outlined",margin:"normal",type:"number",helperText:"Em dias",error:ce.prazoMaximoEntreDoses,style:{marginRight:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){var a=e.target.value.trim();_(a),function(e){e>0?(le(Object(J.a)(Object(J.a)({},ie),{},{prazoMaximoEntreDoses:!0})),je(Object(J.a)(Object(J.a)({},ie),{},{prazoMaximoEntreDoses:!0}))):(le(Object(J.a)(Object(J.a)({},ie),{},{prazoMaximoEntreDoses:!1})),je(Object(J.a)(Object(J.a)({},ie),{},{prazoMaximoEntreDoses:!1})))}(a)},onBlur:function(){re(Object(J.a)(Object(J.a)({},ce),{},{prazoMaximoEntreDoses:!ie.prazoMaximoEntreDoses}))}}),Object(u.jsx)(f.a,{label:"Tempo total de prote\xe7\xe3o",id:"quantidade",variant:"outlined",margin:"normal",type:"number",helperText:"Em meses",error:ce.tempoTotalProtecao,style:{marginLeft:12},InputProps:{className:a.input},fullWidth:!0,onChange:function(e){var a=e.target.value.trim();K(a),function(e){e>0?(le(Object(J.a)(Object(J.a)({},ie),{},{tempoTotalProtecao:!0})),je(Object(J.a)(Object(J.a)({},ie),{},{tempoTotalProtecao:!0}))):(le(Object(J.a)(Object(J.a)({},ie),{},{tempoTotalProtecao:!1})),je(Object(J.a)(Object(J.a)({},ie),{},{tempoTotalProtecao:!1})))}(a)},onBlur:function(){re(Object(J.a)(Object(J.a)({},ce),{},{tempoTotalProtecao:!ie.tempoTotalProtecao}))}})]}),Object(u.jsx)(v.a,{disabled:!ee,variant:"contained",color:"primary",size:"large",onClick:Object(W.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,Z(x,y,w,z,M,U,G);case 3:O(!1),t.push("/vacinapp-web/vacinas");case 5:case"end":return e.stop()}}),e)}))),children:Object(u.jsx)("p",{className:"reset-a",children:"Cadastrar Vacina"})})]})})]})})})),G=t(402),K=t(403),X=t.n(K),Y=t(404),ee=t.n(Y),ae=t(735),te=t(96);var ne=t(405),ce=t(96);t(704);var re=Object(h.a)({input:{borderRadius:10}})((function(e){var a=e.classes,t=Object(d.f)(),c=Object(n.useState)({}),r=Object(s.a)(c,2),o=r[0],i=r[1],j=Object(n.useState)({}),O=Object(s.a)(j,2),h=O[0],g=O[1],x=Object(n.useState)({}),S=Object(s.a)(x,2),N=S[0],C=S[1],y=Object(n.useState)([]),E=Object(s.a)(y,2),P=E[0],T=E[1],w=Object(n.useState)([]),R=Object(s.a)(w,2),I=R[0],k=R[1],z=Object(n.useState)([]),D=Object(s.a)(z,2),A=(D[0],D[1],Object(n.useState)(!1)),B=Object(s.a)(A,2),q=B[0],M=B[1],F=Object(n.useState)(""),V=Object(s.a)(F,2),L=V[0],W=V[1],Q=Object(n.useState)(""),U=Object(s.a)(Q,2),_=U[0],Z=U[1],$=Object(n.useState)(!1),K=Object(s.a)($,2),Y=K[0],re=K[1],oe=Object(n.useState)({vacina:!1,paciente:!1,dataRetorno:!1}),se=Object(s.a)(oe,2),ie=(se[0],se[1],Object(n.useState)({vacina:!1,paciente:!1,dataRetorno:!1})),le=Object(s.a)(ie,2),je=le[0],be=le[1],ue=Object(n.useContext)(l).token,Oe=Object(n.useState)(!1),de=Object(s.a)(Oe,2);de[0],de[1],Object(n.useEffect)((function(){b(ue).then((function(e){403===e&&t.push("/vacinapp-web")})),H.get("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/vacinas").then((function(e){return e.data})).catch((function(e){return e})).then((function(e){var a,t=[],n=Object(G.a)(e);try{for(n.s();!(a=n.n()).done;){var c=a.value;c.quantidade>0&&t.push(c)}}catch(r){n.e(r)}finally{n.f()}T(t)})),te.get("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/pacientes").then((function(e){return e.data})).catch((function(e){return e})).then((function(e){k(e)}))}),[]);var me=function(e){for(var a=0,t=Object.entries(e);a<t.length;a++){var n=Object(s.a)(t[a],2);n[0];if(!n[1])return void re(!1)}re(!0)},pe=Object(m.a)({palette:{primary:{main:"#5CCFE6"}},spacing:8});return Object(u.jsxs)("div",{className:"container-cadastro",children:[Object(u.jsxs)(X.a,{isOpen:q,onRequestClose:function(){return M(!1)},style:{overlay:{zIndex:999,backgroundColor:"rgba(0, 0, 0, 0.45)"},content:{display:"flex",flexDirection:"column",justifyContent:"space-around",width:500,height:500,alignItems:"center",margin:"auto"}},children:[Object(u.jsx)("h2",{children:_}),L&&Object(u.jsx)(ee.a,{value:L,size:450,level:"H",includeMargin:!0})]}),Object(u.jsx)("h2",{className:"titulo-cadastro",children:"Vacinar"}),Object(u.jsx)(p.a,{theme:pe,children:Object(u.jsxs)("form",{className:"formulario-cadastro",children:[Object(u.jsx)(ae.a,{options:P,getOptionLabel:function(e){return"".concat(e.doenca," - ").concat(e.fabricante," - ").concat(e.lote)},variant:"contained",onChange:function(e,a){P.includes(a)?(i(a),be(Object(J.a)(Object(J.a)({},je),{},{vacina:!0})),me(Object(J.a)(Object(J.a)({},je),{},{vacina:!0}))):(be(Object(J.a)(Object(J.a)({},je),{},{vacina:!1})),me(Object(J.a)(Object(J.a)({},je),{},{vacina:!1})))},renderInput:function(e){return Object(u.jsx)(f.a,Object(J.a)(Object(J.a)({},e),{},{label:"Vacina",margin:"normal",variant:"outlined",InputProps:Object(J.a)(Object(J.a)({},e.InputProps),{},{className:a.input})}))}}),Object(u.jsx)(ae.a,{options:I,getOptionLabel:function(e){return"".concat(e.nome," ").concat(e.cpf)},variant:"contained",onChange:function(e,a){I.includes(a)?(g(a),be(Object(J.a)(Object(J.a)({},je),{},{paciente:!0})),me(Object(J.a)(Object(J.a)({},je),{},{paciente:!0}))):(be(Object(J.a)(Object(J.a)({},je),{},{paciente:!1})),me(Object(J.a)(Object(J.a)({},je),{},{paciente:!1})))},renderInput:function(e){return Object(u.jsx)(f.a,Object(J.a)(Object(J.a)({},e),{},{label:"Paciente",margin:"normal",variant:"outlined",InputProps:Object(J.a)(Object(J.a)({},e.InputProps),{},{className:a.input})}))}}),Object(u.jsx)(f.a,{label:"Data de Retorno",id:"tipo",type:"text",variant:"outlined",margin:"normal",InputProps:{className:a.input},onChange:function(e){var a=e.target.value.trim();C(a),function(e){/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(e)?(be(Object(J.a)(Object(J.a)({},je),{},{dataRetorno:!0})),me(Object(J.a)(Object(J.a)({},je),{},{dataRetorno:!0}))):(be(Object(J.a)(Object(J.a)({},je),{},{dataRetorno:!1})),me(Object(J.a)(Object(J.a)({},je),{},{dataRetorno:!1})))}(a)}}),Object(u.jsx)(v.a,{disabled:!Y,variant:"contained",color:"primary",size:"large",style:{marginTop:8},onClick:function(){console.log("Chamando"),function(e,a,t,n){var c=Object(ne.a)(n),r={paciente:a._id,doenca:e.doenca,doses:e.dose,vacina:{fabricante:e.fabricante,lote:e.lote,enfermeiroNome:c.nome,enfermeiroCoren:c.coren,concluido:!1},dataRetorno:t,prazoMaximoEntreDoses:e.prazoMaximoEntreDoses,tempoTotalProtecao:e.tempoTotalProtecao};return console.log(r),ce.post("https://us-central1-vacinapp-1.cloudfunctions.net/server/api/vacinacao",r,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(o,h,N,ue).then((function(e){"id"in e?(Z(e.mensagem),W("".concat(e.id," ").concat(e.dose))):(Z(e.mensagem),W("")),M(!0)}))},children:Object(u.jsx)("p",{className:"reset-a",children:"Vacinar"})})]})})]})})),oe=t(194),se=t.n(oe),ie={};try{if(!window.localStorage)throw Error("no local storage");ie.set=function(e,a){return localStorage.setItem(e,JSON.stringify(a))},ie.get=function(e){var a=localStorage.getItem(e);try{return JSON.parse(a)}catch(t){return null}},ie.remove=function(e){return localStorage.removeItem(e)}}catch(ue){ie.set=se.a.set,ie.get=se.a.getJSON,ie.remove=se.a.remove}var le=ie;var je=function(e){var a=e.children,t=function(e){var a=Object(n.useState)((function(){return le.get(e)})),t=Object(s.a)(a,2),c=t[0],r=t[1];return[c,Object(n.useCallback)((function(a){le.set(e,a),r(a)}),[e]),Object(n.useCallback)((function(){le.remove(e),r(void 0)}),[e])]}("token"),c=Object(s.a)(t,2),r=c[0],o=c[1];return Object(u.jsx)(l.Provider,{value:{token:r,setToken:o},children:a})};t(705);var be=function(){return Object(u.jsx)("section",{className:"content",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(je,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/vacinapp-web/",children:Object(u.jsx)(E,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/vacinapp-web/pacientes",children:Object(u.jsx)(F,{tabela:"pacientes"})}),Object(u.jsx)(d.a,{exact:!0,path:"/vacinapp-web/enfermeiros",children:Object(u.jsx)(F,{tabela:"enfermeiros"})}),Object(u.jsx)(d.a,{path:"/vacinapp-web/enfermeiros/cadastrar",children:Object(u.jsx)(_,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/vacinapp-web/vacinas",children:Object(u.jsx)(F,{tabela:"vacinas"})}),Object(u.jsx)(d.a,{path:"/vacinapp-web/vacinas/cadastrar",children:Object(u.jsx)($,{})}),Object(u.jsx)(d.a,{path:"/vacinapp-web/vacinacao/cadastrar",children:Object(u.jsx)(re,{})}),Object(u.jsx)(d.a,{path:"*",children:Object(u.jsx)("h2",{children:"404"})})]})]})})})};o.a.render(Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)(be,{})}),document.getElementById("root"))}},[[706,1,2]]]);
//# sourceMappingURL=main.22d81ebd.chunk.js.map