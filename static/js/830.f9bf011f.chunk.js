"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[830],{2830:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,i,a,o=r(6351),s=r(168),l=r(5867),c=l.ZP.ul(t||(t=(0,s.Z)(["\n font-size: 18px;\n    font-weight: 600;\n    display: flex;\n    flex-direction: column;\n    padding: 20px; \n    box-shadow: 0px 1px  4px rgba(86, 114, 110, 0.856); \n    background:  rgba(242, 247, 247, 0.92);\n    border-radius: 3px;\n    color: rgb(32, 32, 32);\n\n    @media screen and (min-width: 580px){\n      max-width: 800px;\n      padding: 35px; \n      font-size: 22px;\n    }\n"]))),d=l.ZP.li(i||(i=(0,s.Z)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: flex-start;\n    padding: 20px 0px;\n    border-bottom: 1px solid rgba(193, 194, 194, 0.856);\n\n    .contact{\n    display: flex;\n    gap: 60px;\n    justify-content: space-between;\n    align-items: center;\n\n} \n@media screen and (min-width: 580px){\nflex-direction: row; \nalign-items: center;\njustify-content: space-between;\n\n    }\n"]))),x=l.ZP.button(a||(a=(0,s.Z)(["\nposition: relative;\n    display: inline-block;\n    font-size: 15px;\n    font-weight: 600;\n     width: 85px; \n    padding: 10px ;\n    border-radius: 4px;\n    text-align: start;\n    background: grey;\n    border-color: transparent;\n    color: white;\n    box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856);\n    cursor: pointer;\n\n\n    &:hover {\n      background-color: blue;\n    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856);  }\n\n    \n  @media screen and (min-width: 580px){\n    font-size: 17px;\n    padding: 13px 12px;\n    width: 100px;\n    }\n"]))),p=r(9434),u=r(1437),h=r(3329);function f(){var n=(0,p.v9)(o.K2),e=(0,p.v9)(o.zK),r=(0,p.v9)(o.Kv),t=(0,p.v9)(o.by),i=(0,p.I0)();return(0,h.jsx)("div",{children:(0,h.jsxs)(c,{children:[r&&!t&&(0,h.jsx)("b",{children:"  Loading..."}),t&&(0,h.jsx)("p",{children:t.message}),function(){var r=e.toLocaleLowerCase();return n.filter((function(n){return n.name.toLocaleLowerCase().includes(r)}))}().map((function(n){return(0,h.jsxs)(d,{children:[(0,h.jsxs)("p",{children:[n.name," ",n.number," "]}),(0,h.jsx)(x,{onClick:function(){return i((0,u.xX)(n.id))},children:"Delete"})]},n.id)}))]})})}var m=r(4808);function b(){var n=(0,p.I0)();return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{children:["Find contacts by name:",(0,h.jsx)("input",{type:"text",onChange:function(e){return function(e){var r=e;n((0,m.x)(r))}(e.target.value)}})]})})}var g,j,w,v=r(5705),y=r(6727),k=y.Ry().shape({name:y.Z_().matches(/^[a-zA-Z\s]+$/,"Only letters are allowed").min(2,"Too Short!").required("Please fill that"),number:y.Z_().matches(/^\d{3}-\d{2}-\d{2}$/,"Must be in format: 000-00-00").required("This field is required, please fill that")}),Z=l.ZP.button(g||(g=(0,s.Z)(["\n font-size: 17px;\n    font-weight: 600;\n    padding: 10px 15px;\n    margin-top: 15px;\n    border-radius: 4px;\n    color: white; \n   background-color: rgba(99, 212, 240, 0.989);\n  width: 130px;\n  background: grey;\n  border-color: transparent;\n  box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); \n\n    cursor: pointer;\n    letter-spacing: 0.5px;\n\n\n    &:hover,\n    &:focus{\n        background-color: blue;\n    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856); \n    }\n"]))),C=l.ZP.label(j||(j=(0,s.Z)(["\nposition: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-size: 20px;\n    font-weight: 500;\n"]))),z=l.ZP.div(w||(w=(0,s.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    margin-left: 40px;\n   \n"])));function L(){var n=(0,p.I0)(),e=(0,p.v9)(o.K2);return(0,h.jsx)(v.J9,{initialValues:{name:"",number:""},validationSchema:k,onSubmit:function(r,t){!function(r){if(e.some((function(n){return n.name.toLocaleLowerCase()===r.name.toLocaleLowerCase()})))alert("$This Name is already in contacts.");else{var t=r;n((0,u.je)(t))}}(r),t.resetForm()},children:(0,h.jsx)(v.l0,{children:(0,h.jsxs)(z,{children:[(0,h.jsxs)(C,{children:["Name:",(0,h.jsx)(v.gN,{name:"name",placeholder:"Jane"}),(0,h.jsx)(v.Bc,{name:"name"})]}),(0,h.jsxs)(C,{children:["Number:",(0,h.jsx)(v.gN,{name:"number",placeholder:"658-58-69",type:"tel"}),(0,h.jsx)(v.Bc,{name:"number"})]}),(0,h.jsx)(Z,{type:"submit",children:"Add contact"})]})})})}var P=r(2791);function _(){var n=(0,p.v9)(o.zK),e=(0,p.I0)();return(0,P.useEffect)((function(){e((0,u.VC)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"Phonebook"}),(0,h.jsx)(L,{}),(0,h.jsx)("p",{children:"Contacts"}),(0,h.jsx)(b,{filter:n}),(0,h.jsx)(f,{})]})}}}]);
//# sourceMappingURL=830.f9bf011f.chunk.js.map