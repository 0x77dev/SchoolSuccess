webpackJsonp([1],{0:function(t,n){},1:function(t,n){},NHnr:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("7+uW"),i=o("xJD8"),r={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("div",[o("vs-navbar",{staticClass:"nabarx",model:{value:t.lang,callback:function(n){t.lang=n},expression:"lang"}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("vs-navbar-title",[t._v(t._s(t.$t("title",t.lang)))])],1),t._v(" "),o("vs-navbar-item",{attrs:{index:"en"}},[o("a",{attrs:{href:"#"}},[t._v("English")])]),t._v(" "),o("vs-navbar-item",{attrs:{index:"ru"}},[o("a",{attrs:{href:"#"}},[t._v("Русский")])])],1)],1),t._v(" "),o("vs-list",[o("vs-list-header",{attrs:{color:"danger",title:t.$t("countOfImportant",t.lang)}}),t._v(" "),o("vs-list-item",[o("vs-input-number",{attrs:{color:"danger"},model:{value:t.countOfLessons,callback:function(n){t.countOfLessons=n},expression:"countOfLessons"}})],1),t._v(" "),o("vs-list-header",{attrs:{color:"success",title:t.$t("countOfLessons",t.lang)}}),t._v(" "),o("vs-list-item",[o("vs-input-number",{attrs:{color:"success"},model:{value:t.countOfImportant,callback:function(n){t.countOfImportant=n},expression:"countOfImportant"}})],1),t._v(" "),o("vs-list-header",{attrs:{color:"warning",title:t.$t("countOfHomeWork",t.lang)}}),t._v(" "),o("vs-list-item",[o("vs-input-number",{attrs:{color:"warning"},model:{value:t.countOfHomeWork,callback:function(n){t.countOfHomeWork=n},expression:"countOfHomeWork"}})],1),t._v(" "),o("vs-list-header",{attrs:{color:"dark",title:t.$t("countOfDoneHomeWork",t.lang)}}),t._v(" "),o("vs-list-item",[o("vs-input-number",{attrs:{color:"dark"},model:{value:t.countOfDoneHomeWork,callback:function(n){t.countOfDoneHomeWork=n},expression:"countOfDoneHomeWork"}})],1),t._v(" "),o("vs-list-header",{attrs:{color:"dark",title:t.$t("nnOptions",t.lang)}}),t._v(" "),o("vs-list-item",[t._v("\n        inputSize:\n        "),o("vs-input-number",{attrs:{color:"danger"},model:{value:t.nnOptions.inputSize,callback:function(n){t.$set(t.nnOptions,"inputSize",n)},expression:"nnOptions.inputSize"}})],1),t._v(" "),o("vs-list-item",[t._v("\n        inputRange:\n        "),o("vs-input-number",{attrs:{color:"success"},model:{value:t.nnOptions.inputRange,callback:function(n){t.$set(t.nnOptions,"inputRange",n)},expression:"nnOptions.inputRange"}})],1),t._v(" "),o("vs-list-item",[t._v("\n        outputSize:\n        "),o("vs-input-number",{attrs:{color:"warning"},model:{value:t.nnOptions.outputSize,callback:function(n){t.$set(t.nnOptions,"outputSize",n)},expression:"nnOptions.outputSize"}})],1),t._v(" "),o("vs-list-item",[t._v("\n        hiddenLayer1:\n        "),o("vs-input-number",{attrs:{color:"warning"},model:{value:t.nnOptions.hiddenLayer1,callback:function(n){t.$set(t.nnOptions,"hiddenLayer1",n)},expression:"nnOptions.hiddenLayer1"}})],1),t._v(" "),o("vs-list-item",[t._v("\n        hiddenLayer2\n        "),o("vs-input-number",{attrs:{color:"warning"},model:{value:t.nnOptions.hiddenLayer2,callback:function(n){t.$set(t.nnOptions,"hiddenLayer2",n)},expression:"nnOptions.hiddenLayer2"}})],1),t._v(" "),o("vs-list-item",{staticClass:"net-svg",domProps:{innerHTML:t._s(t.toSVG())}})],1),t._v(" "),o("vs-divider",{attrs:{position:"center"}},[o("vs-button",{attrs:{"line-position":"bottom","line-origin":"center",color:"dark",type:"line"},on:{click:function(n){t.$vs.notify({title:t.$t("prognoseDone",t.lang),text:t.prognose()+"% "+t.$t("ofSuccess",t.lang),color:"primary",position:"bottom-center",icon:"done",time:6e4})}}},[t._v(t._s(t.$t("prognose",t.lang))+"!")])],1),t._v(" "),o("vs-divider",{attrs:{position:"center"}},[o("vs-button",{attrs:{"line-position":"bottom","line-origin":"center",color:"dark",type:"line"},on:{click:function(n){t.$vs.notify({title:t.$t("trainDone",t.lang),text:t.train(),color:"success",position:"bottom-center",icon:"done",time:6e4})}}},[t._v(t._s(t.$t("train",t.lang))+"!")])],1),t._v(" "),o("pre",{domProps:{innerHTML:t._s(t.log)}})],1)},staticRenderFns:[]};var u=function(t){o("d78W")},s=o("VU/8")(i.a,r,!1,u,null,null).exports,a=o("EJLk"),c=o.n(a),l=o("p7o8"),p=o.n(l),d=(o("R5w9"),o("TXmL"));e.default.use(d.a);var f,v,g=new d.a({locale:Object({NODE_ENV:"production"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:(f=o("hFeb"),v={},f.keys().forEach(function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var o=n[1];v[o]=f(t)}}),v)}),m=o("ydGU");Object(m.a)(Object({NODE_ENV:"production"}).BASE_URL+"service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),e.default.use(p.a,{theme:{colors:{primary:"#5b3cc4",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"rgb(36, 33, 69)"}}}),window.brain=c.a,e.default.config.productionTip=!1,new e.default({el:"#app",components:{App:s},i18n:g,template:"<App/>"})},NU94:function(t,n){t.exports={title:"Сделай прогноз твоего завтрашнего успеха в школе, с помощью нейронной сети!",countOfImportant:"Количество Важных Уроков",countOfLessons:"Количество Уроков",countOfHomeWork:"Количество Домашник заданий",countOfDoneHomeWork:"Количество Выполненых Домашник заданий",prognose:"Сделать прогноз",train:"Обучиться",trainDone:"Обучение закончено!",prognoseDone:"Прогнозирование окончено!",ofSuccess:" успеха!",nnOptions:"Опции Нейронной-Сети"}},NuBg:function(t,n){t.exports={title:"Prognose of your School day for tomorrow, using nerual network!",countOfImportant:"Count Of Important Lessons",countOfLessons:"Count of Lessons",countOfHomeWork:"Count of HomeWork",countOfDoneHomeWork:"Count of Done HomeWork",prognose:"Prognose",train:"Train",trainDone:"Training done!",prognoseDone:"Prognose done!",ofSuccess:"of success!",nnOptions:"NerualNetwork Options"}},QUr0:function(t,n,o){"use strict";var e=o("woOf"),i=o.n(e),r=o("Gu7T"),u=o.n(r),s=o("Zrlr"),a=o.n(s),c=o("wxAW"),l=o.n(c),p=o("EJLk"),d=o.n(p),f=[{input:[0,0,0,0],output:[0]},{input:[5,7,4,4],output:[1]},{input:[6,8,5,3],output:[.95]},{input:[4,6,2,2],output:[1]},{input:[5,5,5,0],output:[.01]},{input:[1,4,3,2],output:[.65]},{input:[1,1,1,1],output:[1]},{input:[6,6,0,0],output:[0]},{input:[0,6,0,0],output:[0]},{input:[0,5,0,0],output:[0]},{input:[0,4,0,0],output:[0]},{input:[0,3,0,0],output:[0]},{input:[0,2,0,0],output:[0]},{input:[0,1,0,0],output:[0]},{input:[5,6,6,0],output:[.1]},{input:[5,6,0,0],output:[.89]},{input:[5,6,0,0],output:[.89]},{input:[5,6,6,0],output:[.1]},{input:[6,6,6,0],output:[.1]},{input:[5,5,6,0],output:[.1]},{input:[4,5,6,0],output:[.1]},{input:[4,4,6,0],output:[.1]},{input:[4,5,0,0],output:[.89]},{input:[4,5,0,0],output:[.89]},{input:[5,5,0,0],output:[.89]},{input:[5,5,0,0],output:[.89]},{input:[4,6,3,0],output:[0]},{input:[4,4,4,0],output:[0]},{input:[5,5,5,0],output:[0]},{input:[2,2,2,0],output:[0]},{input:[4,6,2,2],output:[1]},{input:[0,0,0,0],output:[0]}],v=function(){function t(){a()(this,t),this.inputData=f,this.brain=d.a,this.net=new this.brain.NeuralNetwork({inputSize:4,inputRange:8,outputSize:1,hiddenLayers:[5,5]}),this.log=""}return l()(t,[{key:"train",value:function(){var t=this;return this.net.train(this.inputData,{log:function(n){t.log=t.log+"\n"+n},iterations:5e3})}},{key:"run",value:function(t){return this.net.run(t)}},{key:"toSVG",value:function(t,n){var o={line:{width:"0.5",color:"black"},inputs:{color:"rgba(0, 128, 0, 0.5)",label:!1},outputs:{color:"rgba(100, 149, 237, 0.5)"},hidden:{color:"rgba(255, 127, 80, 0.5)"},fontSize:"14px",radius:"8",width:window.innerWidth,height:"250"},e="number"==typeof t.inputSize&&"number"==typeof t.outputSize&&t.inputSize>0&&t.outputSize>0&&[t.inputSize].concat(u()(t.hiddenLayers),[t.outputSize]);if((n=i()(o,n)).inputs.label=n.inputs.label.length==t.inputSize&&n.inputs.label,e){var r='<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="'+n.width+'" height="'+n.height+'">',s=n.width/e.length;return e.forEach(function(t,o){var i=n.height/t;[].concat(u()(Array(t))).forEach(function(t,u){if(0==o)r+='<rect x="'+(s/2-n.radius)+'" y="'+(i/2+u*i-n.radius)+'" width="'+2*n.radius+'" height="'+2*n.radius+'" stroke="black" stroke-width="1" fill="'+n.inputs.color+'" />',r+='<line x1="'+s/4+'" y1="'+(i/2+u*i)+'" x2="'+(s/2-n.radius)+'" y2="'+(i/2+u*i)+'" style="stroke:'+n.line.color+";stroke-width:"+n.line.width+'" />',n.inputs.label&&(r+='<text x="'+s/8+'" y="'+(i/2+u*i-5)+'" fill="black" font-size= "'+n.fontSize+'">'+n.inputs.label[u]+"</text>");else{var a=n.height/e[o-1];o==e.length-1?(r+='<circle cx="'+(s/2+o*s)+'" cy="'+(i/2+u*i)+'" r="'+n.radius+'" stroke="black" stroke-width="1" fill="'+n.outputs.color+'" />',r+='<line x1="'+(s/2+o*s+n.radius)+'" y1="'+(i/2+u*i)+'" x2="'+(s/2+o*s+s/4)+'" y2="'+(i/2+u*i)+'" style="stroke:'+n.line.color+";stroke-width:"+n.line.width+'" />'):r+='<circle cx="'+(s/2+o*s)+'" cy="'+(i/2+u*i)+'" r="'+n.radius+'" stroke="black" stroke-width="1" fill="'+n.hidden.color+'" />';for(var c=0;c<e[o-1];c++)r+='<line x1="'+(s/2+(o-1)*s+n.radius)+'" y1="'+(a/2+c*a)+'" x2="'+(s/2+o*s-n.radius)+'" y2="'+(i/2+u*i)+'" style="stroke:'+n.line.color+";stroke-width:"+n.line.width+'" />'}})}),r+="</svg>"}return!1}}]),t}();n.a=v},R5w9:function(t,n){},d78W:function(t,n){},hFeb:function(t,n,o){var e={"./en.json":"NuBg","./ru.json":"NU94"};function i(t){return o(r(t))}function r(t){var n=e[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}i.keys=function(){return Object.keys(e)},i.resolve=r,t.exports=i,i.id="hFeb"},xJD8:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__brain__=__webpack_require__("QUr0"),NN=new __WEBPACK_IMPORTED_MODULE_0__brain__.a;window.NN=NN,window.countOfLessons=0,window.countOfImportant=0,window.countOfHomeWork=0,window.countOfDoneHomeWork=0,__webpack_exports__.a={name:"App",data:function(){return{countOfLessons:0,countOfImportant:0,countOfHomeWork:0,countOfDoneHomeWork:0,nnOptions:{inputSize:4,inputRange:8,outputSize:1,hiddenLayer1:5,hiddenLayer2:5},log:NN.log,lang:"ru"}},watch:{countOfLessons:function(t){return window.countOfLessons=t},countOfImportant:function(t){return window.countOfImportant=t},countOfHomeWork:function(t){return window.countOfHomeWork=t},countOfDoneHomeWork:function(t){return window.countOfDoneHomeWork=t},nnOptions:{handler:function(t){NN.net=new NN.brain.NeuralNetwork({inputSize:t.inputSize,inputRange:t.inputRange,outputSize:t.outputSize,hiddenLayers:[t.hiddenLayer1,t.hiddenLayer2]}),document.querySelector(".net-svg").innerHTML=NN.toSVG(NN.net)},deep:!0}},methods:{prognose:function prognose(){NN.train();var out=Math.round(100*eval(NN.run([window.countOfLessons,window.countOfImportant,window.countOfHomeWork,window.countOfDoneHomeWork]).toString()))/100*100;return out},train:function(){var t=NN.train();return t.iterations+",\n "+t.error},toSVG:function(){return NN.toSVG(NN.net)}}}}},["NHnr"]);
//# sourceMappingURL=app.2b4ba7d7d939d297f070.js.map