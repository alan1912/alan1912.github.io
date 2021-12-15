(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,4],{262:function(e,t,o){var content=o(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(53).default)("412f36f1",content,!0,{sourceMap:!1})},263:function(e,t,o){var content=o(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(53).default)("4502b8e5",content,!0,{sourceMap:!1})},264:function(e,t,o){"use strict";o(262)},265:function(e,t,o){var r=o(52)(!1);r.push([e.i,'.switch{position:relative;display:inline-block;width:60px;height:34px}.switch input{opacity:0;width:0;height:0}.switch input:checked+.slider{background-color:#2196f3}.switch input:focus+.slider{box-shadow:0 0 1px #2196f3}.switch input:checked+.slider:before{transform:translateX(26px)}.switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.switch .slider:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.switch .slider.round{border-radius:34px}.switch .slider.round:before{border-radius:50%}',""]),e.exports=r},266:function(e,t,o){"use strict";o(263)},267:function(e,t,o){var r=o(52)(!1);r.push([e.i,".dialog{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100vh;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);z-index:100}.dialog .dialog-box{width:640px;height:calc(100% - 80px);background:#fff;border:1px solid #ced4da;z-index:101;border-radius:1rem}.dialog .dialog-box .header{display:flex;justify-content:center;position:relative;align-items:center;height:64px;padding:1rem;border-bottom:1px solid #ced4da}.dialog .dialog-box .header span.prev{display:flex;align-items:center;position:absolute;left:1rem;font-size:1.4rem;cursor:pointer;padding:.5rem}.dialog .dialog-box .header span.prev:hover{color:#8ab4f8}.dialog .dialog-box .header span.close{display:flex;align-items:center;position:absolute;right:1rem;font-size:1.4rem;cursor:pointer;padding:.5rem}.dialog .dialog-box .header span.close:hover{color:#8ab4f8}.dialog .dialog-box .body{padding:1rem;height:calc(100% - 128px);overflow-y:auto}.dialog .dialog-box .footer{display:flex;align-items:center;height:64px;padding:1rem;border-top:1px solid #ced4da}",""]),e.exports=r},268:function(e,t,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(53).default)("5878e1fa",content,!0,{sourceMap:!1})},270:function(e,t,o){"use strict";o.r(t);var r={name:"ToggleSwitchComponent",props:{value:{type:Array,require:!0,default:function(){}},inputValue:{type:String,require:!0,default:""}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},n=(o(264),o(22)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"switch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox"},domProps:{value:e.inputValue,checked:Array.isArray(e.model)?e._i(e.model,e.inputValue)>-1:e.model},on:{change:function(t){var o=e.model,r=t.target,n=!!r.checked;if(Array.isArray(o)){var l=e.inputValue,d=e._i(o,l);r.checked?d<0&&(e.model=o.concat([l])):d>-1&&(e.model=o.slice(0,d).concat(o.slice(d+1)))}else e.model=n}}}),e._v(" "),o("span",{staticClass:"slider round"})])}),[],!1,null,null,null);t.default=component.exports},271:function(e,t,o){"use strict";o.r(t);var r={name:"DialogBoxComponent",props:{box:{type:Object,require:!0,default:function(){}}},data:function(){return{}},methods:{close:function(){this.box&&this.box.close()}}},n=(o(266),o(22)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.box.show?o("div",{staticClass:"dialog"},[o("div",{staticClass:"dialog-box"},[o("div",{staticClass:"header"},[o("span",{staticClass:"prev",on:{click:e.close}},[o("fa",{attrs:{icon:["fas","chevron-left"]}})],1),e._v(" "),o("h3",[e._v(e._s(e.box.title))]),e._v(" "),o("span",{staticClass:"close",on:{click:e.close}},[o("fa",{attrs:{icon:["fas","times"]}})],1)]),e._v(" "),o("div",{staticClass:"body"},[e._t("body")],2),e._v(" "),o("div",{staticClass:"footer"},[e._t("footer")],2)])]):e._e()}),[],!1,null,null,null);t.default=component.exports},272:function(e,t,o){"use strict";o(268)},273:function(e,t,o){var r=o(52)(!1);r.push([e.i,".cards{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:2rem;margin:1rem 0}.cards .card-single{display:flex;justify-content:space-between;background:#fff;padding:2rem;border-radius:2px}.cards .card-single div:first-child span{color:#9aa0a6}.cards .card-single div:last-child span{font-size:3rem;color:#202124}@media (max-width:960px){.cards{grid-template-columns:repeat(3,1fr)}}@media (max-width:768px){.cards{grid-template-columns:repeat(2,1fr)}}@media (max-width:560px){.cards{grid-template-columns:100%}}.card{background-color:#fff;border-radius:5px}.card .features{display:flex;justify-content:flex-end;padding:0,1.5rem}.card .card-body{padding:1.5rem}.card .card-body h4{width:100%;margin-bottom:.5rem;font-weight:700;font-size:24px;color:#202124}.card .card-body p{width:100%;margin-bottom:1rem;font-size:18px;color:#9aa0a6}",""]),e.exports=r},276:function(e,t,o){"use strict";o.r(t);var r={layout:"admin",middleware:"auth",data:function(){var e=this;return{enables:[2],box:{title:"Title",show:!0,loading:!1,close:function(){e.box.show=!1}}}}},n=(o(272),o(22)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("div",{staticClass:"cards"},[o("div",{staticClass:"card-single"},[e._m(0),e._v(" "),o("div",[o("span",[o("fa",{attrs:{icon:["fas","users"]}})],1)])]),e._v(" "),o("div",{staticClass:"card-single"},[e._m(1),e._v(" "),o("div",[o("span",[o("fa",{attrs:{icon:["fas","clipboard-list"]}})],1)])]),e._v(" "),o("div",{staticClass:"card-single"},[e._m(2),e._v(" "),o("div",[o("span",[o("fa",{attrs:{icon:["fas","shopping-bag"]}})],1)])]),e._v(" "),o("div",{staticClass:"card-single"},[e._m(3),e._v(" "),o("div",[o("span",[o("fa",{attrs:{icon:["fab","google-wallet"]}})],1)])])]),e._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("h4",[e._v("Basic example")]),e._v(" "),o("p",[e._v("For basic styling—light padding and only horizontal dividers—add the base class")]),e._v(" "),o("div",{staticClass:"features"},[o("button",[e._v("Import "),o("span",[o("fa",{attrs:{icon:["fas","arrow-right"]}})],1)]),e._v(" "),o("button",{staticClass:"blue"},[e._v("Export "),o("span",[o("fa",{attrs:{icon:["fas","arrow-right"]}})],1)])]),e._v(" "),o("div",{staticClass:"table-responsive"},[o("table",[e._m(4),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Risa D. Pearson")]),e._v(" "),o("td",[e._v("336-508-2157")]),e._v(" "),o("td",[e._v("July 24, 1950July 24, 1950July 24, 1950July 24, 1950July 24, 1950July 24, 1950July 24, 1950")]),e._v(" "),o("td",[e._v("July 24, 1950")]),e._v(" "),o("td",[e._v("July 24, 1950")]),e._v(" "),o("td",[o("ToggleSwitchComponent",{attrs:{"input-value":"1"},model:{value:e.enables,callback:function(t){e.enables=t},expression:"enables"}})],1)]),e._v(" "),o("tr",[o("td",[e._v("Ann C. Thompson")]),e._v(" "),o("td",[e._v("646-473-2057")]),e._v(" "),o("td",[e._v("January 25, 1959")]),e._v(" "),o("td",[e._v("January 25, 1959")]),e._v(" "),o("td",[e._v("January 25, 1959")]),e._v(" "),o("td",[o("div",[o("ToggleSwitchComponent",{attrs:{"input-value":"2"},model:{value:e.enables,callback:function(t){e.enables=t},expression:"enables"}})],1)])]),e._v(" "),o("tr",[o("td",[e._v("Paul J. Friend")]),e._v(" "),o("td",[e._v("281-308-0793")]),e._v(" "),o("td",[e._v("September 1, 1939")]),e._v(" "),o("td",[e._v("September 1, 1939")]),e._v(" "),o("td",[e._v("September 1, 1939")]),e._v(" "),o("td",[o("ToggleSwitchComponent",{attrs:{"input-value":"3"},model:{value:e.enables,callback:function(t){e.enables=t},expression:"enables"}})],1)]),e._v(" "),o("tr",[o("td",[e._v("Linda G. Smith")]),e._v(" "),o("td",[e._v("606-253-1207")]),e._v(" "),o("td",[e._v("May 3, 1962")]),e._v(" "),o("td",[e._v("May 3, 1962")]),e._v(" "),o("td",[e._v("May 3, 1962")]),e._v(" "),o("td",[o("ToggleSwitchComponent",{attrs:{"input-value":"4"},model:{value:e.enables,callback:function(t){e.enables=t},expression:"enables"}})],1)])])])])])]),e._v(" "),o("DialogBoxComponent",{attrs:{box:e.box},scopedSlots:e._u([{key:"body",fn:function(){return[e._v("\n      Body\n    ")]},proxy:!0}])})],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("54")]),e._v(" "),o("span",[e._v("Customers")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("79")]),e._v(" "),o("span",[e._v("Projects")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("124")]),e._v(" "),o("span",[e._v("Orders")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("$6k")]),e._v(" "),o("span",[e._v("Income")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Phone Number")]),e._v(" "),o("th",[e._v("Date of Birth")]),e._v(" "),o("th",[e._v("Date of Birth")]),e._v(" "),o("th",[e._v("Date of Birth")]),e._v(" "),o("th",[e._v("Active?")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ToggleSwitchComponent:o(270).default,DialogBoxComponent:o(271).default})}}]);