(function(t){function e(e){for(var n,o,l=e[0],r=e[1],c=e[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("1dce"),s=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("form",{staticClass:"form",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("h2",{staticClass:"form__title"},[t._v("Создание клиента")]),a("div",{staticClass:"progress-bar"},[a("div",{staticClass:"progress-bar__fill",style:"width: calc(100%*("+t.step+"/3));"})]),a("span",{staticClass:"step-counter"},[t._v("Шаг "+t._s(t.step)+" из 3")]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}]},[a("h3",{staticClass:"step-title"},[t._v("Личные данные")]),a("div",{staticClass:"inputs"},[a("div",{staticClass:"input-parent correct"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.surName,expression:"clientData.surName"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:t.clientData.surName},on:{input:function(e){e.target.composing||t.$set(t.clientData,"surName",e.target.value)}}})]),a("div",{staticClass:"input-parent not-fill-error"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.name,expression:"clientData.name"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Имя*"},domProps:{value:t.clientData.name},on:{input:function(e){e.target.composing||t.$set(t.clientData,"name",e.target.value)}}})]),a("div",{staticClass:"input-parent incorrect-error"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.patronymic,expression:"clientData.patronymic"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Отчество (если имеется)"},domProps:{value:t.clientData.patronymic},on:{input:function(e){e.target.composing||t.$set(t.clientData,"patronymic",e.target.value)}}})]),a("div",{staticClass:"input-parent"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.dateOfBirth,expression:"clientData.dateOfBirth"}],staticClass:"input-text input",attrs:{type:"text",onfocus:"(this.type='date')",onblur:"(this.type='text')",placeholder:"Дата рождения*"},domProps:{value:t.clientData.dateOfBirth},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dateOfBirth",e.target.value)}}}),a("div",{staticClass:"input-parent"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.phone,expression:"clientData.phone"}],staticClass:"input-text",attrs:{type:"phone",placeholder:"Номер телефона*"},domProps:{value:t.clientData.phone},on:{input:function(e){e.target.composing||t.$set(t.clientData,"phone",e.target.value)}}})]),a("div",{staticClass:"input-parent"},[a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.clientData.gender,expression:"clientData.gender"}],staticClass:"input-text select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Пол")]),a("option",{attrs:{value:"man"}},[t._v("Мужчина")]),a("option",{attrs:{value:"woman"}},[t._v("Женщина")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])])]),a("div",{staticClass:"input-parent"},[a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.clientData.clientGroup,expression:"clientData.clientGroup"}],staticClass:"input-text select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"clientGroup",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Группа клиентов*")]),a("option",{attrs:{value:"vip"}},[t._v("VIP")]),a("option",{attrs:{value:"problem"}},[t._v("Проблемные")]),a("option",{attrs:{value:"oms"}},[t._v("ОМС")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])])]),a("div",{staticClass:"input-parent"},[a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.clientData.doctor,expression:"clientData.doctor"}],staticClass:"input-text select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"doctor",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Лечащий врач*")]),a("option",{attrs:{value:"ivanov"}},[t._v("Иванов")]),a("option",{attrs:{value:"zakharov"}},[t._v("Захаров")]),a("option",{attrs:{value:"chernishova"}},[t._v("Чернышева")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])])])]),a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.nSms,expression:"clientData.nSms"}],attrs:{type:"checkbox",id:"sms"},domProps:{checked:Array.isArray(t.clientData.nSms)?t._i(t.clientData.nSms,null)>-1:t.clientData.nSms},on:{change:function(e){var a=t.clientData.nSms,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s=null,o=t._i(a,s);n.checked?o<0&&t.$set(t.clientData,"nSms",a.concat([s])):o>-1&&t.$set(t.clientData,"nSms",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.clientData,"nSms",i)}}}),a("label",{attrs:{for:"sms"}},[t._v("Не отправлять СМС")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.step,expression:"step === 2"}]},[a("h3",{staticClass:"step-title"},[t._v("Адрес проживания")]),a("div",{staticClass:"inputs"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.index,expression:"clientData.index"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Индекс"},domProps:{value:t.clientData.index},on:{input:function(e){e.target.composing||t.$set(t.clientData,"index",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.country,expression:"clientData.country"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Страна"},domProps:{value:t.clientData.country},on:{input:function(e){e.target.composing||t.$set(t.clientData,"country",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.region,expression:"clientData.region"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Область"},domProps:{value:t.clientData.region},on:{input:function(e){e.target.composing||t.$set(t.clientData,"region",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.city,expression:"clientData.city"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Город*",required:""},domProps:{value:t.clientData.city},on:{input:function(e){e.target.composing||t.$set(t.clientData,"city",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.street,expression:"clientData.street"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Улица"},domProps:{value:t.clientData.street},on:{input:function(e){e.target.composing||t.$set(t.clientData,"street",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.house,expression:"clientData.house"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Дом"},domProps:{value:t.clientData.house},on:{input:function(e){e.target.composing||t.$set(t.clientData,"house",e.target.value)}}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.step,expression:"step === 3"}]},[a("h3",{staticClass:"step-title"},[t._v("Документ")]),a("div",{staticClass:"inputs"},[a("div",{staticClass:"select-wrap"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.clientData.document,expression:"clientData.document"}],staticClass:"input-text select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.clientData,"document",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Тип документа*")]),a("option",{attrs:{value:"pasport"}},[t._v("Паспорт")]),a("option",{attrs:{value:"bc"}},[t._v("Свидетельство о рождении")]),a("option",{attrs:{value:"driver-lic"}},[t._v("Вод. удостоверение")])]),a("i",{staticClass:"material-icons select-expand"},[t._v("expand_more")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.dSeries,expression:"clientData.dSeries"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Серия"},domProps:{value:t.clientData.dSeries},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dSeries",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.dNumber,expression:"clientData.dNumber"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Номер"},domProps:{value:t.clientData.dNumber},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dNumber",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.dIssued,expression:"clientData.dIssued"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Кем Выдан"},domProps:{value:t.clientData.dIssued},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dIssued",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clientData.dDateIssue,expression:"clientData.dDateIssue"}],staticClass:"input-text input",attrs:{type:"text",onfocus:"(this.type='date')",onblur:"(this.type='text')",placeholder:"Дата выдачи*"},domProps:{value:t.clientData.dDateIssue},on:{input:function(e){e.target.composing||t.$set(t.clientData,"dDateIssue",e.target.value)}}})]),t.isComplete?a("Complete",{on:{"close-complete":function(e){return t.hideComplete()},"click-db":function(e){return t.msg()},"click-create-more":function(e){t.step=1,t.hideComplete()}}}):t._e()],1),a("div",{staticClass:"button-wrap"},[a("button",{staticClass:"btn-prev button",attrs:{type:"button"},on:{click:t.prevStep}},[a("i",{staticClass:"material-icons prev"},[t._v("navigate_before")]),t._v(" Назад ")]),3===t.step?a("button",{staticClass:"btn-next button",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.isComplete=!0}}},[t._v(" Создать клиента "),a("i",{staticClass:"material-icons next"},[t._v("navigate_next")])]):a("button",{staticClass:"btn-next button",attrs:{type:"button"},on:{click:t.nextStep}},[t._v(" Далее "),a("i",{staticClass:"material-icons next"},[t._v("navigate_next")])])])])])},l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-bg"},[a("div",{staticClass:"popup"},[a("div",{staticClass:"content-wraper"},[a("h3",{staticClass:"popup-title"},[t._v("Клиент создан!")]),a("p",{staticClass:"popup-msg"},[t._v(" Вы можете приступить к созданию нового клиента или перейти к общей клиентской базе ")]),a("div",{staticClass:"btn-wrapper"},[a("button",{staticClass:"popup-btn create-another",on:{click:function(e){return e.preventDefault(),t.$emit("click-create-more")}}},[t._v(" Создать еще клиента ")]),a("button",{staticClass:"popup-btn to-db",on:{click:function(e){return e.preventDefault(),t.$emit("click-db")}}},[t._v(" Перейти к базе ")])]),a("button",{staticClass:"btn-close",on:{click:function(e){return e.preventDefault(),t.$emit("close-complete")}}},[t._v(" × ")])])])])},c=[],p={},u=p,d=(a("e350"),a("2877")),v=Object(d["a"])(u,r,c,!1,null,"6dca688a",null),m=v.exports,f={components:{Complete:m},data:function(){return{step:1,isComplete:!1,clientData:{surName:"",name:"",patronymic:"",dateOfBirth:"",phone:"",gender:"",clientGroup:"",doctor:"",nSms:"",index:"",country:"",region:"",city:"",street:"",house:"",document:"",dSeries:"",dNumber:"",dIssued:"",dDateIssue:""}}},methods:{nextStep:function(){this.step<3&&this.step++},prevStep:function(){this.step>1&&this.step--},hideComplete:function(){this.isComplete=!1},msg:function(){alert("База данных не создана!")},submitForm:function(){console.log("Форма отправлена!")}},validatons:{}},D=f,g=(a("cf25"),Object(d["a"])(D,o,l,!1,null,null,null)),x=g.exports;a("c789"),a("f5df1");n["a"].use(s.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app"),n["a"].config.devtools=!0},8025:function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},e350:function(t,e,a){"use strict";a("8025")},fea6:function(t,e,a){}});
//# sourceMappingURL=app.99128faa.js.map