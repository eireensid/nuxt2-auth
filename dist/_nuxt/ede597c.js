(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{317:function(e,t,r){"use strict";r.r(t);r(27),r(5),r(4),r(2),r(6),r(3),r(7);var n=r(33),o=r(0),c=(r(86),r(1),r(58));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"LoginForm",data:function(){return{name:"",password:"",authError:{show:!1,text:""},btnDisabled:!1}},mixins:[r(169).a],methods:d(d({},Object(c.b)(["setIsAuth"])),{},{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.btnDisabled=!0,e.authError.show=!1,r={name:e.name,password:e.password},t.prev=3,t.next=6,fetch("".concat("https://fair-tan-cape-buffalo-gown.cyclic.app","/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(d({},r))});case 6:if(n=t.sent,e.btnDisabled=!1,200!==n.status){t.next=15;break}return t.next=11,n.json();case 11:(content=t.sent).access_token&&(e.saveTokenToLocal(content.access_token),e.$nextTick((function(){e.$nuxt.$emit("setToken",content.access_token)}))),t.next=17;break;case 15:e.authError.show=!0,e.authError.text="Неверный email или пароль";case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(3),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[3,19]])})))()}})},m=r(63),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-column w-100 p-5"},[t("h1",{staticClass:"mb-1 text-center"},[e._v("Авторизация")]),e._v(" "),t("BForm",{staticClass:"d-flex flex-column align-items-center",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("BFormGroup",{staticClass:"w-50 mb-2",attrs:{label:"Логин:","label-for":"test-name"}},[t("BFormInput",{attrs:{id:"test-name",placeholder:"Введите имя",required:""},on:{focus:function(t){e.authError.show=!1}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t("BFormGroup",{staticClass:"w-50",attrs:{label:"Пароль:","label-for":"text-password"}},[t("BFormInput",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block",placeholder:"Введите пароль",required:""},on:{focus:function(t){e.authError.show=!1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.authError.show,expression:"authError.show"}],staticClass:"w-50 mt-3 danger"},[e._v("\n      "+e._s(e.authError.text)+"\n    ")]),e._v(" "),t("div",{staticClass:"w-50",class:e.authError.show?"mt-2":"mt-4"},[t("BButton",{attrs:{type:"submit",variant:"success",disabled:e.btnDisabled}},[e._v("Войти")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);