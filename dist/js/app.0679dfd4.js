(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=a("1dce"),n=a.n(r),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("form",{staticClass:"form",attrs:{novalidate:""}},[a("h2",{staticClass:"form__title"},[t._v("Создание клиента")]),a("div",{staticClass:"progress-bar"},[a("div",{staticClass:"progress-bar__fill",style:"width: calc(100%*("+t.step+"/3));"})]),a("span",{staticClass:"step-counter"},[t._v("Шаг "+t._s(t.step)+" из 3")]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}]},[a("h3",{staticClass:"step-title"},[t._v("Личные данные")]),a("div",{staticClass:"inputs"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.surName,expression:"clientData.surName",modifiers:{trim:!0}}],staticClass:"input-text",class:{"border-red":t.$v.clientData.surName.$error},attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:t.clientData.surName},on:{blur:[function(e){return t.$v.clientData.surName.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.clientData,"surName",e.target.value.trim())}}}),t.$v.clientData.surName.$dirty&&!t.$v.clientData.surName.required?a("div",{staticClass:"error"},[t._v(" Необходимо заполнить поле! ")]):t.$v.clientData.surName.$dirty&&!t.$v.clientData.surName.alpha?a("div",{staticClass:"error"},[t._v(" Допускаются только буквы! ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.name,expression:"clientData.name",modifiers:{trim:!0}}],staticClass:"input-text",class:{"border-red":t.$v.clientData.name.$error},attrs:{type:"text",placeholder:"Имя*"},domProps:{value:t.clientData.name},on:{blur:[function(e){return t.$v.clientData.name.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.clientData,"name",e.target.value.trim())}}}),t.$v.clientData.name.$dirty&&!t.$v.clientData.name.required?a("div",{staticClass:"error"},[t._v(" Необходимо заполнить поле! ")]):t.$v.clientData.name.$dirty&&!t.$v.clientData.name.alpha?a("div",{staticClass:"error"},[t._v(" Допускаются только буквы! ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.patronymic,expression:"clientData.patronymic",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Отчество (если имеется)"},domProps:{value:t.clientData.patronymic},on:{input:function(e){e.target.composing||t.$set(t.clientData,"patronymic",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.dateOfBirth,expression:"clientData.dateOfBirth",modifiers:{trim:!0}}],staticClass:"input-text input",class:{"border-red":t.$v.clientData.dateOfBirth.$error},attrs:{type:"text",onfocus:"(this.type='date')",placeholder:"Дата рождения*"},domProps:{value:t.clientData.dateOfBirth},on:{blur:[function(e){return t.$v.clientData.dateOfBirth.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.clientData,"dateOfBirth",e.target.value.trim())}}}),t.$v.clientData.dateOfBirth.$error?a("div",{staticClass:"error"},[t._v(" Необходимо заполнить поле! ")]):!t.$v.clientData.dateOfBirth.$dirty||t.$v.clientData.dateOfBirth.$model<=(new Date).toISOString().slice(0,10)&&t.$v.clientData.dateOfBirth.$model>="1920-01-01"?t._e():a("div",{staticClass:"error"},[t._v(" Поле заполнено не корректно! ")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.phone,expression:"clientData.phone",modifiers:{trim:!0}}],staticClass:"input-text",class:{"border-red":t.$v.clientData.phone.$error},attrs:{type:"phone",placeholder:"Номер телефона*"},domProps:{value:t.clientData.phone},on:{blur:[function(e){return t.$v.clientData.phone.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.clientData,"phone",e.target.value.trim())}}}),t.$v.clientData.phone.$dirty&&!t.$v.clientData.phone.required?a("div",{staticClass:"error"},[t._v(" Необходимо заполнить поле! ")]):t.$v.clientData.phone.$dirty&&7!=t.$v.clientData.phone.$model[0]?a("div",{staticClass:"error"},[t._v(" Номер должен начинаться с цифры 7! ")]):t.$v.clientData.phone.$dirty&&!t.$v.clientData.phone.numeric?a("div",{staticClass:"error"},[t._v(" Номер должен состоять только из цифр! ")]):t.$v.clientData.phone.$dirty&&!t.$v.clientData.phone.maxLength?a("div",{staticClass:"error"},[t._v(" Номер должен состоять из "+t._s(t.$v.clientData.phone.$params.maxLength.max)+" цифр! ")]):t.$v.clientData.phone.$dirty&&!t.$v.clientData.phone.minLength?a("div",{staticClass:"error"},[t._v(" Номер должен состоять из "+t._s(t.$v.clientData.phone.$params.minLength.min)+" цифр! ")]):t._e(),a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.gender,expression:"clientData.gender",modifiers:{trim:!0}}],staticClass:"input-text select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Пол")]),a("option",{attrs:{value:"man"}},[t._v("Мужчина")]),a("option",{attrs:{value:"woman"}},[t._v("Женщина")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])]),a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.clientGroup,expression:"clientData.clientGroup",modifiers:{trim:!0}}],staticClass:"input-text select select-multiple",class:{"border-red":t.$v.clientData.clientGroup.$error},attrs:{multiple:""},on:{blur:function(e){return t.$v.clientData.clientGroup.$touch()},change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"clientGroup",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Группа клиентов*")]),a("option",{attrs:{value:"vip"}},[t._v("VIP")]),a("option",{attrs:{value:"problem"}},[t._v("Проблемные")]),a("option",{attrs:{value:"oms"}},[t._v("ОМС")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])]),t.$v.clientData.clientGroup.$error?a("div",{staticClass:"error"},[t._v(" Необходимо выбрать группу! ")]):t._e(),a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.doctor,expression:"clientData.doctor",modifiers:{trim:!0}}],staticClass:"input-text select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"doctor",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Лечащий врач")]),a("option",{attrs:{value:"ivanov"}},[t._v("Иванов")]),a("option",{attrs:{value:"zakharov"}},[t._v("Захаров")]),a("option",{attrs:{value:"chernishova"}},[t._v("Чернышева")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])])]),a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.nSms,expression:"clientData.nSms",modifiers:{trim:!0}}],attrs:{type:"checkbox",id:"sms"},domProps:{checked:Array.isArray(t.clientData.nSms)?t._i(t.clientData.nSms,null)>-1:t.clientData.nSms},on:{change:function(e){var a=t.clientData.nSms,i=e.target,r=!!i.checked;if(Array.isArray(a)){var n=null,s=t._i(a,n);i.checked?s<0&&t.$set(t.clientData,"nSms",a.concat([n])):s>-1&&t.$set(t.clientData,"nSms",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.clientData,"nSms",r)}}}),a("label",{attrs:{for:"sms"}},[t._v("Не отправлять СМС")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}]},[a("h3",{staticClass:"step-title"},[t._v("Адрес проживания")]),a("div",{staticClass:"inputs"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.index,expression:"clientData.index",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Индекс"},domProps:{value:t.clientData.index},on:{input:function(e){e.target.composing||t.$set(t.clientData,"index",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.country,expression:"clientData.country",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Страна"},domProps:{value:t.clientData.country},on:{input:function(e){e.target.composing||t.$set(t.clientData,"country",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.region,expression:"clientData.region",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Область"},domProps:{value:t.clientData.region},on:{input:function(e){e.target.composing||t.$set(t.clientData,"region",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.city,expression:"clientData.city",modifiers:{trim:!0}}],staticClass:"input-text",class:{"border-red":t.$v.clientData.city.$error},attrs:{type:"text",placeholder:"Город*",required:""},domProps:{value:t.clientData.city},on:{blur:[function(e){return t.$v.clientData.city.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.clientData,"city",e.target.value.trim())}}}),t.$v.clientData.city.$error?a("div",{staticClass:"error"},[t._v(" Необходимо выбрать город! ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.street,expression:"clientData.street",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Улица"},domProps:{value:t.clientData.street},on:{input:function(e){e.target.composing||t.$set(t.clientData,"street",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.house,expression:"clientData.house",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Дом"},domProps:{value:t.clientData.house},on:{input:function(e){e.target.composing||t.$set(t.clientData,"house",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step === 3"}]},[a("h3",{staticClass:"step-title"},[t._v("Документ")]),a("div",{staticClass:"inputs"},[a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.document,expression:"clientData.document",modifiers:{trim:!0}}],staticClass:"input-text select",class:{"border-red":t.$v.clientData.document.$error},on:{blur:function(e){return t.$v.clientData.document.$touch()},change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"document",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Тип документа*")]),a("option",{attrs:{value:"pasport"}},[t._v("Паспорт")]),a("option",{attrs:{value:"bc"}},[t._v("Свидетельство о рождении")]),a("option",{attrs:{value:"driver-lic"}},[t._v("Вод. удостоверение")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])]),t.$v.clientData.document.$error?a("div",{staticClass:"error"},[t._v(" Необходимо выбрать тип документа! ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.dSeries,expression:"clientData.dSeries",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Серия документа"},domProps:{value:t.clientData.dSeries},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dSeries",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.dNumber,expression:"clientData.dNumber",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Номер документа"},domProps:{value:t.clientData.dNumber},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dNumber",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.dIssued,expression:"clientData.dIssued",modifiers:{trim:!0}}],staticClass:"input-text",attrs:{type:"text",placeholder:"Кем Выдан"},domProps:{value:t.clientData.dIssued},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dIssued",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.clientData.dDateIssue,expression:"clientData.dDateIssue",modifiers:{trim:!0}}],staticClass:"input-text input",class:{"border-red":t.$v.clientData.dDateIssue.$error},attrs:{type:"text",onfocus:"(this.type='date')",onblur:"(this.type='text')",placeholder:"Дата выдачи*"},domProps:{value:t.clientData.dDateIssue},on:{blur:[function(e){return t.$v.clientData.dDateIssue.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.clientData,"dDateIssue",e.target.value.trim())}}}),t.$v.clientData.dDateIssue.$error?a("div",{staticClass:"error"},[t._v(" Необходимо заполнить поле! ")]):!t.$v.clientData.dDateIssue.$dirty||t.$v.clientData.dDateIssue.$model<=(new Date).toISOString().slice(0,10)&&t.$v.clientData.dDateIssue.$model>="1920-01-01"?t._e():a("div",{staticClass:"error"},[t._v(" Поле заполнено не корректно! ")])]),t.isComplete?a("Complete",{on:{"close-complete":function(e){return t.hideComplete()},"click-db":function(e){return t.msg()},"click-create-more":function(e){return t.clearForm()}}}):t._e()],1),t.isNotValid?a("div",{staticClass:"not-valid"},[t._v("Форма заполнена неверно!")]):t._e(),a("div",{staticClass:"button-wrap"},[a("button",{staticClass:"btn-prev button",attrs:{type:"button"},on:{click:t.prevStep}},[a("i",{staticClass:"material-icons prev"},[t._v("navigate_before")]),t._v(" Назад ")]),3===t.step?a("button",{staticClass:"btn-next button",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.submitForm()}}},[t._v(" Создать клиента "),a("i",{staticClass:"material-icons next"},[t._v("navigate_next")])]):a("button",{staticClass:"btn-next button",attrs:{type:"button"},on:{click:t.nextStep}},[t._v(" Далее "),a("i",{staticClass:"material-icons next"},[t._v("navigate_next")])])])])])},o=[],l=a("b5ae"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-bg"},[a("div",{staticClass:"popup"},[a("div",{staticClass:"content-wraper"},[a("h3",{staticClass:"popup-title"},[t._v("Клиент создан!")]),a("p",{staticClass:"popup-msg"},[t._v(" Вы можете приступить к созданию нового клиента или перейти к общей клиентской базе ")]),a("div",{staticClass:"btn-wrapper"},[a("button",{staticClass:"popup-btn create-another",on:{click:function(e){return e.preventDefault(),t.$emit("click-create-more")}}},[t._v(" Создать еще клиента ")]),a("button",{staticClass:"popup-btn to-db",on:{click:function(e){return e.preventDefault(),t.$emit("click-db")}}},[t._v(" Перейти к базе ")])]),a("button",{staticClass:"btn-close",on:{click:function(e){return e.preventDefault(),t.$emit("close-complete")}}},[t._v(" × ")])])])])},u=[],p={},d=p,m=(a("e350"),a("2877")),v=Object(m["a"])(d,c,u,!1,null,"6dca688a",null),f=v.exports,D=l["helpers"].regex("alpha",/^[a-zA-Zа-яёА-ЯЁ]*$/),h={components:{Complete:f},data:function(){return{step:1,isComplete:!1,isNotValid:!1,clientData:{surName:"",name:"",patronymic:"",dateOfBirth:"",phone:"",gender:"",clientGroup:[],doctor:"",nSms:"",index:"",country:"",region:"",city:"",street:"",house:"",document:"",dSeries:"",dNumber:"",dIssued:"",dDateIssue:""}}},methods:{nextStep:function(){this.step<3&&this.step++},prevStep:function(){this.step>1&&(this.step--,this.isNotValid=!1)},hideComplete:function(){this.isComplete=!1},msg:function(){alert("База данных не создана!")},submitForm:function(){if(this.$v.$invalid)return this.$v.$touch(),void(this.isNotValid=!0);this.isComplete=!0,console.log("Форма отправлена!"),console.log(this.clientData)},clearForm:function(){window.location.reload()}},validations:{clientData:{surName:{required:l["required"],alpha:D},name:{required:l["required"],alpha:D},dateOfBirth:{required:l["required"]},phone:{required:l["required"],minLength:Object(l["minLength"])(11),maxLength:Object(l["maxLength"])(11),numeric:l["numeric"]},clientGroup:{required:l["required"]},city:{required:l["required"]},document:{required:l["required"]},dDateIssue:{required:l["required"]}}}},$=h,g=(a("cf25"),Object(m["a"])($,s,o,!1,null,null,null)),_=g.exports;a("c789"),a("f5df1");i["a"].use(n.a),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(_)}}).$mount("#app"),i["a"].config.devtools=!0},8025:function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},e350:function(t,e,a){"use strict";a("8025")},fea6:function(t,e,a){}});
//# sourceMappingURL=app.0679dfd4.js.map