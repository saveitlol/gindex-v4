(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-602bddd0"],{a5f7:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"conten mx-2 mt-2"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(s){e.loading=s}}})],1),t("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[t("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[t("article",{class:e.errormessageVisibility?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Error Requesting !!")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.errormessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("article",{class:e.successmessageVisibility?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.successmessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[e._v("Request Access")]),t("form",{on:{submit:function(s){return s.preventDefault(),e.handleSubmit(s)}}},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-rounded is-focused",attrs:{placeholder:"Email",id:"email",type:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),e._m(0),e._m(1)])]),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input is-rounded",attrs:{placeholder:"Your Name",id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}}),e._m(2),e._m(3)])]),t("div",{staticClass:"field"},[t("label",{staticClass:"label has-text-white"},[e._v("Select the Space for Which Access is Required ?")]),t("div",{staticClass:"control"},[t("div",{staticClass:"select is-fullwidth"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.drive,expression:"drive"}],attrs:{id:"drive"},on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(e){var s="_value"in e?e._value:e.value;return s}));e.drive=s.target.multiple?t:t[0]}}},e._l(e.gds,(function(s,a){return t("option",{key:a,domProps:{value:a}},[e._v(e._s(s.name))])})),0)])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"textarea is-success is-rounded",attrs:{placeholder:"Why You Need Access ?",id:"message",rows:"3",required:""},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}}),t("p",{staticClass:"help is-success"},[e._v("How did You Know about this and Why do You need?")])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-success is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(s){var t=e.checked,a=s.target,i=!!a.checked;if(Array.isArray(t)){var c=null,l=e._i(t,c);a.checked?l<0&&(e.checked=t.concat([c])):l>-1&&(e.checked=t.slice(0,l).concat(t.slice(l+1)))}else e.checked=i}}}),e._m(4)])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-success is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.codechecked,expression:"codechecked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"code",name:"terms"},domProps:{checked:Array.isArray(e.codechecked)?e._i(e.codechecked,null)>-1:e.codechecked},on:{change:function(s){var t=e.codechecked,a=s.target,i=!!a.checked;if(Array.isArray(t)){var c=null,l=e._i(t,c);a.checked?l<0&&(e.codechecked=t.concat([c])):l>-1&&(e.codechecked=t.slice(0,l).concat(t.slice(l+1)))}else e.codechecked=i}}}),e._m(5)])])]),t("button",{class:e.loading?"button is-loading is-rounded is-warning is-medium":"button is-warning is-rounded is-medium",attrs:{type:"submit",disabled:e.disabled}},[e._m(6),t("span",[e._v("Request Access")])])])]),e._m(7)])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-user"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("label",{attrs:{for:"terms"}},[t("span",{staticClass:"content has-text-white"},[e._v(" I Accept and Read the "),t("a",{staticClass:"has-text-success",attrs:{href:"https://raw.githubusercontent.com/tks18/gindex-v4/dark-mode-0-1/CONTRIBUTING.md",target:"_blank"}},[e._v("Community Guidelines")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("label",{attrs:{for:"code"}},[t("span",{staticClass:"content has-text-white"},[e._v(" I Accept and Read the "),t("a",{staticClass:"has-text-success",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Code of Conduct")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"column is-half"},[t("section",{staticClass:"hero is-black is-medium"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-parent"},[t("article",{staticClass:"tile has-text-centered is-child notification is-warning"},[t("p",{staticClass:"title has-text-dark"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-superpowers"})]),t("span",[e._v(" Nicee")])]),t("p",{staticClass:"subtitle has-text-dark"},[e._v("Request Content Access")]),t("div",{staticClass:"content"},[t("p",{staticClass:"has-text-dark has-text-weight-semibold"},[e._v("You have to Request Before Continuing in the Website.")]),t("p",{staticClass:"has-text-dark"},[e._v("When our Admins Accept your Request, You will Receive an Email Containing an OTP to Register your Account and Verify.")])])])])])])])])])}],c=(t("d81d"),t("b0c0"),t("9062")),l=t.n(c),n=(t("e40d"),{components:{Loading:l.a},props:["nextUrl"],data:function(){return{name:"",email:"",emailFocus:"",nameFocus:"",message:"",drive:0,gds:[],currgd:{},resultmessage:"",databasemessage:"",checked:"",codechecked:"",loading:!1,disabled:!0,fullpage:!0,successmessageVisibility:!1,errormessageVisibility:!1}},methods:{handleSubmit:function(e){var s=this;if(this.loading=!0,e.preventDefault(),this.checked)if(this.codechecked){var t=window.apiRoutes.requestRoute;this.$http.post(t,{name:this.name,email:this.email,drives:this.drive,message:this.message}).then((function(e){e&&(e.data.auth&&e.data.registered?(s.successmessageVisibility=!0,s.errormessageVisibility=!1,s.loading=!1,s.resultmessage=e.data.message):(s.successmessageVisibility=!1,s.errormessageVisibility=!0,s.loading=!1,s.resultmessage=e.data.message))})).catch((function(e){console.error(e)}))}else this.successmessageVisibility=!1,this.errormessageVisibility=!0,this.loading=!1,this.resultmessage="> You Need to Accept Code of Conduct.",this.checked=!1;else this.successmessageVisibility=!1,this.errormessageVisibility=!0,this.loading=!1,this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1},checkParams:function(){this.$route.params.email?(this.email=this.$route.params.email,this.emailFocus=!1,this.nameFocus=!0):(this.email="",this.emailFocus=!0,this.nameFocus=!1)},validateData:function(){var e=/[a-z1-9].+@+[a-z1-9A-Z].+[.][a-z]+/g;e.test(this.email)&&this.name.length>0&&this.message.length>0&&this.checked&&this.codechecked?this.disabled=!1:this.disabled=!0}},mounted:function(){this.checkParams()},created:function(){if(window.gds&&window.gds.length>0){this.gds=window.gds.map((function(e,s){return{name:e,id:s}}));var e=this.$route.params.id;this.gds&&this.gds.length>=e&&(this.currgd=this.gds[e])}},watch:{name:"validateData",email:"validateData",message:"validateData",checked:"validateData",codechecked:"validateData",drive:function(){console.log(this.drive)}}}),r=n,d=t("2877"),o=Object(d["a"])(r,a,i,!1,null,null,null);s["default"]=o.exports},e40d:function(e,s,t){}}]);