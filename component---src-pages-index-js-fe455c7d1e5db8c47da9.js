/*! For license information please see component---src-pages-index-js-fe455c7d1e5db8c47da9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0qJg":function(e,t,a){e.exports=a.p+"static/placeholder-190426ebebd4235cca0f7f09a9072790.png"},"2mql":function(e,t,a){"use strict";var n=a("TOwV"),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return n.isMemo(e)?r:o[e.$$typeof]||i}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=r;var s=Object.defineProperty,m=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,a,n){if("string"!=typeof a){if(f){var i=u(a);i&&i!==f&&e(t,i,n)}var r=m(a);d&&(r=r.concat(d(a)));for(var o=l(t),p=l(a),g=0;g<r.length;++g){var h=r[g];if(!(c[h]||n&&n[h]||p&&p[h]||o&&o[h])){var j=b(a,h);try{s(t,h,j)}catch(O){}}}}return t}},MHL5:function(e,t,a){e.exports=a.p+"static/map-flower-9815cac66efb24f1f79971c479f3cc5f.png"},NAT8:function(e,t,a){e.exports=a.p+"static/intro-right-flower-b04ff458685e3d1bdaccaf6f4f9751cf.png"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("kDDq"),i=a("q1tI"),c=a.n(i);function r(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=a("dI71"),m=a("TOwV"),d=a("2mql"),b=a.n(d);function u(e,t){if(!e){var a=new Error("loadable: "+t);throw a.framesToPop=1,a.name="Invariant Violation",a}}var f=c.a.createContext();var p={initialChunks:{}};var g=function(e){return e};function h(e){var t=e.defaultResolveComponent,a=void 0===t?g:t,n=e.render,i=e.onLoad;function d(e,t){void 0===t&&(t={});var d=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function h(e){return t.cacheKey?t.cacheKey(e):d.resolve?d.resolve(e):"static"}function j(e,n,i){var c=t.resolveComponent?t.resolveComponent(e,n):a(e);if(t.resolveComponent&&!Object(m.isValidElementType)(c))throw new Error("resolveComponent returned something that is not a React component!");return b()(i,c,{preload:!0}),c}var O,y=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={result:null,error:null,loading:!0,cacheKey:h(a)},u(!a.__chunkExtractor||d.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),a.__chunkExtractor?(!1===t.ssr||(d.requireAsync(a).catch((function(){return null})),n.loadSync(),a.__chunkExtractor.addChunk(d.chunkName(a))),l(n)):(!1!==t.ssr&&(d.isReady&&d.isReady(a)||d.chunkName&&p.initialChunks[d.chunkName(a)])&&n.loadSync(),n)}Object(s.a)(a,e),a.getDerivedStateFromProps=function(e,t){var a=h(e);return o({},t,{cacheKey:a,loading:t.loading||t.cacheKey!==a})};var c=a.prototype;return c.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},c.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},c.componentWillUnmount=function(){this.mounted=!1},c.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},c.getCacheKey=function(){return h(this.props)},c.getCache=function(){return g[this.getCacheKey()]},c.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},c.triggerOnLoad=function(){var e=this;i&&setTimeout((function(){i(e.state.result,e.props)}))},c.loadSync=function(){if(this.state.loading)try{var e=j(d.requireSync(this.props),this.props,x);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:d.resolve(this.props),chunkName:d.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},c.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var a=j(t,e.props,{Loadable:x});e.safeSetState({result:a,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},c.resolveAsync=function(){var e=this,t=this.props,a=(t.__chunkExtractor,t.forwardedRef,r(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=d.requireAsync(a)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:d.resolve(e.props),chunkName:d.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},c.render=function(){var e=this.props,a=e.forwardedRef,i=e.fallback,c=(e.__chunkExtractor,r(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,s=l.error,m=l.loading,d=l.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(s)throw s;var b=i||t.fallback||null;return m?b:n({fallback:b,result:d,options:t,props:o({},c,{ref:a})})},a}(c.a.Component),v=(O=y,function(e){return c.a.createElement(f.Consumer,null,(function(t){return c.a.createElement(O,Object.assign({__chunkExtractor:t},e))}))}),x=c.a.forwardRef((function(e,t){return c.a.createElement(v,Object.assign({forwardedRef:t},e))}));return x.preload=function(e){d.requireAsync(e)},x.load=function(e){return d.requireAsync(e)},x}return{loadable:d,lazy:function(e,t){return d(e,o({},t,{suspense:!0}))}}}var j=h({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,a=e.props;return c.a.createElement(t,a)}}),O=j.loadable,y=j.lazy,v=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,a=e.props;return a.children?a.children(t):null}}),x=v.loadable,w=v.lazy;var N=O;N.lib=x,y.lib=w;var S=N,k=a("ZO2u"),M=a("lGf+"),L=a("qKvR"),C=function(){return Object(L.c)(M.a,{noMargin:!0},"11 07 2020")},z=a("4xma"),T=a.n(z),E=a("NAT8"),$=a.n(E),P=a("7Qib"),R=a("OTPt");var D=Object(n.c)({name:"1qem2jg-move",styles:"0%{transform:translateY(-15px);}100%{transform:translateY(5px);};label:move;"}),A={container:Object(n.a)("display:flex;align-items:center;justify-content:center;flex-direction:column;[data-element='label'] > *{transition:",P.a.transition,";}&:hover{cursor:pointer;[data-element='label'] > *{color:",P.a.neutral," !important;}[data-element='line']{background:",P.a.neutralLight,";}}@media ",P.a.screenM,"{[data-element='label'],[data-element='line']{display:none;}};label:container;"),line:Object(n.a)("width:1px;height:30px;background:",P.a.neutralLighter,";transition:",P.a.transition,";animation:calc(",P.a.transitionTime," * 3) ease-in-out infinite alternate ",D,";;label:line;"),icon:Object(n.a)("display:none;transition:",P.a.transition,";animation:calc(",P.a.transitionTime," * 3) ease-in-out infinite alternate ",D,";color:",P.a.neutralLight,";@media ",P.a.screenM,"{display:block;};label:icon;")},F=function(e){var t=e.children,a=e.onClick;return Object(L.c)("div",{onClick:function(){return a?a():window.fullpage_api.moveSectionDown()},className:A.container},Object(L.c)("div",{className:A.icon},Object(L.c)(R.a,{name:"arrow-down"})),Object(L.c)("div",{"data-element":"line",className:A.line}),Object(L.c)("div",{"data-element":"label"},Object(L.c)(M.a,null,t)))},_=a("0g4d");var q={intro:Object(n.a)({name:"18id4bq-intro",styles:"flex:1;position:relative;display:flex;justify-content:center;align-items:center;min-height:100vh;;label:intro;"}),title:Object(n.a)("display:flex;align-items:center;justify-content:center;flex-direction:column;[data-element='mobile']{display:none;}@media ",P.a.screenM,"{[data-element='mobile']{display:block;}[data-element='desktop']{display:none;}};label:title;"),rightFlower:Object(n.a)("position:absolute;right:calc(",P.a.marginLarge," * -2);bottom:0;z-index:99;height:70vh;display:flex;justify-content:flex-end;pointer-events:none;> img{height:100%;object-fit:contain;transform:scaleX(-1);}@media ",P.a.screenM,"{right:calc(",P.a.marginLarge," * -1);height:35vh;};label:rightFlower;"),leftFlower:Object(n.a)("position:absolute;top:calc(",P.a.marginLarge," * -2);left:calc(",P.a.marginLarge," * -1);z-index:99;height:60vh;display:flex;justify-content:flex-start;pointer-events:none;> img{height:100%;object-fit:contain;}@media ",P.a.screenM,"{left:calc(",P.a.marginLarge," * -1);top:calc(",P.a.margin," * -1);height:30vh;};label:leftFlower;"),nextSection:Object(n.a)("position:absolute;bottom:",P.a.marginLarge,";left:20%;z-index:999;@media ",P.a.screenM,"{left:",P.a.marginLarge,";bottom:calc(",P.a.marginLarge," * 2);};label:nextSection;")},W=function(){return Object(L.c)("div",{className:q.intro},Object(L.c)("div",{className:q.leftFlower},Object(L.c)("img",{src:T.a})),Object(L.c)("div",{className:q.title},Object(L.c)("div",{"data-element":"desktop"},Object(L.c)(_.a,null,"Jemima & Nicolaos")),Object(L.c)("div",{"data-element":"mobile"},Object(L.c)(_.a,null,"Jemima",Object(L.c)("br",null),"&",Object(L.c)("br",null),"Nicolaos")),Object(L.c)(M.a,null,"Are getting married")),Object(L.c)("div",{className:q.rightFlower},Object(L.c)("img",{src:$.a})),Object(L.c)("div",{className:q.nextSection},Object(L.c)(F,null,"When?")))},J=a("oDAe"),K=a.n(J);var G={countdown:Object(n.a)({name:"132ws8j-countdown",styles:"display:flex;align-items:flex-start;justify-content:center;;label:countdown;"}),item:Object(n.a)({name:"1sclrys-item",styles:"display:flex;align-items:center;justify-content:center;flex-direction:column;min-width:140px;;label:item;"}),bigLabel:Object(n.a)("font-size:5em;text-transform:uppercase;color:",P.a.neutral,";font-weight:300;margin:0 ",P.a.marginSmall,";@media ",P.a.screenM,"{font-size:2em;margin:0 5px;};label:bigLabel;"),label:Object(n.a)("font-size:3.5em;font-family:",P.a.altFontFamily,";color:",P.a.neutral,";margin-top:calc(",P.a.margin," * 2);@media ",P.a.screenM,"{font-size:2.2em;};label:label;")},I=new Date("2021-07-24T15:00"),X=function(e){var t=e.time,a=e.label;return Object(L.c)("div",{className:G.item},Object(L.c)("div",{className:G.bigLabel},t),Object(L.c)("div",{className:G.label},a))},B=function(){var e=Object(i.useState)(+I-+new Date),t=e[0],a=e[1];Object(P.b)((function(){a(+I-+new Date)}),1e3);var n={days:Math.abs(Math.floor(t/864e5)),hours:Math.abs(Math.floor(t/36e5%24)),minutes:Math.abs(Math.floor(t/1e3/60%60)),seconds:Math.abs(Math.floor(t/1e3%60))};return Object(L.c)("div",{className:G.countdown},Object(L.c)(X,{time:n.days,label:"days"}),Object(L.c)("div",{className:G.bigLabel},":"),Object(L.c)(X,{time:n.hours,label:"hours"}),Object(L.c)("div",{className:G.bigLabel},":"),Object(L.c)(X,{time:n.minutes,label:"minutes"}),Object(L.c)("div",{className:G.bigLabel},":"),Object(L.c)(X,{time:n.seconds,label:"secs"}))};var V={dateSection:Object(n.a)({name:"mkd7tj-dateSection",styles:"flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;min-height:100vh;;label:dateSection;"}),subtitle:Object(n.a)("margin-bottom:",P.a.marginLarge,";;label:subtitle;"),title:Object(n.a)("font-size:3em;text-transform:uppercase;color:",P.a.neutral,";font-weight:300;margin-top:0;@media ",P.a.screenM,"{font-size:2em;};label:title;"),group:Object(n.a)("display:flex;align-items:center;justify:center;margin-top:",P.a.margin,";;label:group;"),flower:Object(n.a)("width:200px;@media ",P.a.screenM,"{width:100px;};label:flower;"),at:Object(n.a)("margin:0 ",P.a.margin,";;label:at;"),countdown:Object(n.a)("margin-top:calc(",P.a.marginLarge," * 2);position:relative;@media ",P.a.screenM,"{margin-top:",P.a.marginLarge,";};label:countdown;"),smallMargin:Object(n.a)("margin-top:",P.a.marginLarge,";;label:smallMargin;"),nextSection:Object(n.a)("position:absolute;bottom:",P.a.margin,";left:50%;transform:translateX(-50%);;label:nextSection;"),alreadyMarried:Object(n.a)("text-align:center;margin-bottom:calc(",P.a.marginLarge," * 2);@media ",P.a.screenM,"{margin-bottom:",P.a.marginLarge,";};label:alreadyMarried;")},Y=new Date("2021-07-24"),Q=function(){var e,t=Y<new Date;return Object(L.c)("div",{className:V.dateSection},Object(L.c)("div",{className:V.subtitle},t?Object(L.c)(M.a,null,"The wedding was held on"):Object(L.c)(M.a,null,"The wedding will be held on")),Object(L.c)("div",{className:V.title},"July 24, 2021"),Object(L.c)("div",{className:V.group},Object(L.c)("img",{className:V.flower,src:K.a}),Object(L.c)("div",{className:V.at},Object(L.c)(M.a,null,"At")),Object(L.c)("div",{className:V.title},"3 PM")),Object(L.c)("div",{className:Object(n.b)(V.countdown,(e={},e[V.smallMargin]=t,e))},t?Object(L.c)("div",{className:V.alreadyMarried},Object(L.c)(M.a,null,"Married since")):Object(L.c)("div",{className:V.alreadyMarried},Object(L.c)(M.a,null,"In")),Object(L.c)(B,null)),Object(L.c)("div",{className:V.nextSection},Object(L.c)(F,null,"Where?")))},H=(a("LJRI"),a("MHL5")),U=a.n(H),Z={section:Object(n.a)("flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;position:relative;padding-top:calc(",P.a.paddingLarge," * 3);@media ",P.a.screenM,"{padding-right:",P.a.marginSmall,";padding-left:",P.a.marginSmall,";};label:section;"),map:Object(n.a)("height:40vh;width:100%;margin-top:calc(",P.a.marginLarge," * 2);position:relative;@media ",P.a.screenM,"{margin-top:",P.a.margin,";height:35vh;};label:map;"),nextSection:Object(n.a)("position:absolute;bottom:",P.a.margin,";left:50%;transform:translateX(-50%);;label:nextSection;"),flower:Object(n.a)("position:absolute;top:calc(",P.a.marginLarge," * -2);right:calc(",P.a.marginLarge," * -1);width:400px;pointer-events:none;@media ",P.a.screenM,"{width:150px;top:calc(",P.a.margin," * -1);right:calc(",P.a.margin," * -1);};label:flower;"),description:Object(n.a)("@media ",P.a.screenM,"{font-size:0.8em;};label:description;"),title:Object(n.a)("@media ",P.a.screenM,"{font-size:0.8em;};label:title;")},ee=function(){return Object(L.c)("div",{className:Z.section},Object(L.c)(M.a,null,"You will spend the day with us at"),Object(L.c)("div",{className:Z.title},Object(L.c)(_.a,null,"Loonbeek Castle")),Object(L.c)(M.a,{style:{textTransform:"none"}},Object(L.c)("span",{className:Z.description},"Sint-Jansbergsteenweg 24-26, 3040 Loonbeek")),Object(L.c)("div",{className:Z.map},Object(L.c)("img",{src:U.a,className:Z.flower}),Object(L.c)("iframe",{scrolling:"no",src:"https://snazzymaps.com/embed/210943",width:"100%",height:"100%",style:{border:"none"}})),Object(L.c)("div",{className:Z.nextSection},Object(L.c)(F,null,"What's the plan?")))},te=a("mF2h");var ae={section:Object(n.a)("flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;min-height:100vh;@media ",P.a.screenM,"{padding-top:calc(",P.a.paddingLarge," * 2);padding-bottom:calc(",P.a.paddingLarge," * 4);};label:section;"),timeline:Object(n.a)("margin-top:",P.a.marginLarge,";display:flex;align-items:flex-start;position:relative;@media ",P.a.screenM,"{flex-direction:column;width:calc(100% - ",P.a.paddingLarge," * 2);};label:timeline;"),horizontalLine:Object(n.a)("position:absolute;top:130px;width:100%;background:",P.a.neutral,";height:2px;@media ",P.a.screenM,"{height:100%;width:2px;top:0;left:50%;transform:translateX(50%);};label:horizontalLine;"),column:Object(n.a)("width:200px;display:flex;flex-direction:column;align-items:center;@media ",P.a.screenM,"{position:relative;flex-direction:row;height:150px;width:100%;justify-content:space-between;};label:column;"),time:Object(n.a)({name:"1rdv5z6-time",styles:";label:time;"}),iconWrapper:Object(n.a)({name:"15sondv-iconWrapper",styles:"height:70px;display:flex;;label:iconWrapper;"}),icon:Object(n.a)({name:"3fs8wh-icon",styles:"width:70px;flex:1;;label:icon;"}),line:Object(n.a)("width:2px;height:25px;background:",P.a.neutral,";@media ",P.a.screenM,"{height:2px;width:25px;position:absolute;left:calc(50% + 2px);top:50%;transform:translate(-50%,-50%);};label:line;"),label:Object(n.a)("max-width:150px;text-align:center;@media ",P.a.screenM,"{width:35vw;};label:label;"),group:Object(n.a)("display:flex;flex-direction:column;align-items:center;@media ",P.a.screenM,"{margin-left:",P.a.margin,";};label:group;"),nextSection:Object(n.a)("position:absolute;bottom:",P.a.margin,";left:50%;transform:translateX(-50%);;label:nextSection;")},ne=function(e){var t=e.time,a=e.label,n=e.icon;return Object(L.c)("div",{className:ae.column},Object(L.c)("div",{className:ae.group},Object(L.c)("div",{className:ae.iconWrapper},Object(L.c)("img",{src:n,className:ae.icon})),Object(L.c)("div",{className:ae.time},Object(L.c)(M.a,null,t))),Object(L.c)("div",{className:ae.line}),Object(L.c)("div",{className:ae.label},Object(L.c)(M.a,{style:{color:P.a.neutral}},a)))},ie=function(){return Object(L.c)("div",{className:ae.section},Object(L.c)(M.a,null,"The"),Object(L.c)(_.a,null,"Wedding"),Object(L.c)(M.a,null,"Day"),Object(L.c)("div",{className:ae.timeline},Object(L.c)("div",{className:ae.horizontalLine}),Object(L.c)(ne,{time:"3 PM",label:"Ceremony",icon:te.l}),Object(L.c)(ne,{time:"4 PM",label:"Drinks & photos",icon:te.d}),Object(L.c)(ne,{time:"7 PM",label:"Dinner",icon:te.m}),Object(L.c)(ne,{time:"9 PM",label:"Dance & party",icon:te.b}),Object(L.c)(ne,{time:"Forever",label:"Happy times",icon:te.g})),Object(L.c)("div",{className:ae.nextSection},Object(L.c)(F,null,"Who will be there?")))},ce=a("dY+F"),re=a.n(ce),oe=a("0qJg"),le=a.n(oe),se={section:Object(n.a)("display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;padding-top:calc(",P.a.paddingLarge," * 3);flex:1;min-height:100vh;padding-bottom:calc(",P.a.paddingLarge," * 6);;label:section;"),row:Object(n.a)("display:flex;align-items:flex-start;margin-top:",P.a.marginLarge,";padding-bottom:",P.a.paddingLarge,";@media ",P.a.screenM,"{flex-direction:column;padding-bottom:0;margin-top:0;align-items:stretch;&:nth-of-type(4){> div{flex-direction:row;[data-element='container']{margin-right:",P.a.marginLarge,";margin-left:0;}&:nth-of-type(2){flex-direction:row-reverse;[data-element='container']{margin-left:",P.a.marginLarge,";margin-right:0;}}}}};label:row;"),person:Object(n.a)("display:flex;flex-direction:column;align-items:center;margin:0 calc(",P.a.margin," * 2);@media ",P.a.screenM,"{flex:1;flex-direction:row;margin:0;margin-top:",P.a.marginLarge,";&:nth-child(odd){flex-direction:row-reverse;[data-element='container']{margin-right:0;margin-left:",P.a.marginLarge,";}}};label:person;"),container:Object(n.a)("position:relative;height:250px;width:250px;border-radius:1000px;overflow:hidden;display:flex;justify-content:center;align-items:flex-end;background-position:center;background-size:290px;transition:",P.a.transition,";> img{width:180px;transform:translateY(10px);}&:hover{cursor:pointer;transform:scale(0.9);[data-element='overlay']{background:transparent;}}@media ",P.a.screenM,"{height:130px;width:130px;margin-right:",P.a.marginLarge,";> img{width:100px;}};label:container;"),overlay:Object(n.a)("position:absolute;top:0;left:0;height:100%;width:100%;background:white;transition:",P.a.transition,";;label:overlay;"),info:Object(n.a)("@media ",P.a.screenM,"{flex:1;text-align:center;};label:info;"),title:Object(n.a)("font-family:",P.a.altFontFamily,";font-size:4.5em;margin-bottom:",P.a.margin,";margin-top:",P.a.marginLarge,";text-align:center;@media ",P.a.screenM,"{font-size:3.8em;};label:title;"),nextSection:Object(n.a)("position:absolute;bottom:",P.a.margin,";left:50%;transform:translateX(-50%);;label:nextSection;")},me=function(e){var t=e.image,a=e.label,n=e.title,i=e.background;return Object(L.c)("div",{className:se.person},Object(L.c)("div",{"data-element":"container",className:se.container,style:{backgroundImage:"url("+i+")"}},Object(L.c)("div",{"data-element":"overlay",className:se.overlay}),Object(L.c)("img",{src:t})),Object(L.c)("div",{className:se.info},Object(L.c)("div",{className:se.title},n),Object(L.c)(M.a,{style:{textAlign:"center"}},a)))},de=function(){return Object(L.c)("div",{className:se.section},Object(L.c)(M.a,null,"The wedding"),Object(L.c)(_.a,null,"Party"),Object(L.c)("div",{className:se.row},Object(L.c)(me,{background:re.a,image:le.a,title:"Jemima",label:"Bride"}),Object(L.c)(me,{background:re.a,image:le.a,title:"Nicolaos",label:"Groom"})),Object(L.c)("div",{className:se.row},Object(L.c)(me,{background:re.a,image:le.a,title:"Aislinn",label:"Maid of honor"}),Object(L.c)(me,{background:re.a,image:le.a,title:"Geoffrey",label:"Best man"}),Object(L.c)(me,{background:re.a,image:le.a,title:"Nathalie",label:"Bridesmaid"})),Object(L.c)("div",{className:se.row},Object(L.c)(me,{background:re.a,image:le.a,title:"Gary",label:"Groomsman"}),Object(L.c)(me,{background:re.a,image:le.a,title:"Andrea",label:"Bridesmaid"}),Object(L.c)(me,{background:re.a,image:le.a,title:"Ollie",label:"Groomsman"})),Object(L.c)("div",{className:se.row},Object(L.c)(me,{background:re.a,image:le.a,title:"Amina",label:"Bridesmaid"}),Object(L.c)(me,{background:re.a,image:le.a,title:"Praj",label:"Groomsman"})),Object(L.c)("div",{className:se.nextSection},Object(L.c)(F,null,"Anything else?")))},be=(a("JM9Q"),a("Wbzz")),ue=a("vCQb");var fe={section:Object(n.a)("display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;padding-bottom:400px;padding-top:calc(",P.a.paddingLarge," * 4);@media ",P.a.screenM,"{padding:0 ",P.a.padding,";margin-top:calc(",P.a.margin," * -1);min-height:100vh;};label:section;"),subtitle:Object(n.a)("margin-top:",P.a.marginLarge,";;label:subtitle;"),links:Object(n.a)("display:flex;margin-top:",P.a.marginLarge,";@media ",P.a.screenM,"{flex-direction:column;align-items:center;margin-top:0;};label:links;"),link:Object(n.a)("display:inline-block;margin:0 ",P.a.marginLarge,";font-family:",P.a.defaultFontFamily,";font-size:1em;color:",P.a.neutral,";text-transform:uppercase;&:hover{cursor:pointer;}@media ",P.a.screenM,"{margin-top:",P.a.margin,";};label:link;"),flower:Object(n.a)("position:absolute;left:calc(",P.a.marginLarge," * -2);bottom:0;z-index:99;height:70vh;display:flex;justify-content:flex-start;pointer-events:none;> img{height:100%;object-fit:contain;}@media ",P.a.screenM,"{height:35vh;left:calc(",P.a.marginSmall," * -2);bottom:0;};label:flower;"),toTop:Object(n.a)("position:absolute;bottom:",P.a.marginLarge,";right:20%;z-index:999;@media ",P.a.screenM,"{display:none;};label:toTop;"),group:Object(n.a)({name:"15afp0f-group",styles:"display:flex;align-items:center;justify-content:center;flex-direction:column;;label:group;"}),subsubtitle:Object(n.a)("margin-top:calc(",P.a.marginSmall," / 2);color:",P.a.neutralLight,";text-align:center;font-size:0.7em;text-transform:uppercase;;label:subsubtitle;")},pe=function(){var e=Object(be.useStaticQuery)("2697244306");return Object(L.c)("div",{className:fe.section},Object(L.c)(_.a,null,"See you there!"),Object(L.c)("div",{className:fe.subtitle},Object(L.c)(M.a,null,"For more details follow the links below:")),Object(L.c)("div",{className:fe.links},Object(L.c)(ue.a,{to:e.site.siteMetadata.kadologLink,external:!0},Object(L.c)("div",{className:fe.link},"Registry")),Object(L.c)(ue.a,{to:"/faq"},Object(L.c)("div",{className:fe.link},"faq")),Object(L.c)(ue.a,{to:"/gallery"},Object(L.c)("div",{className:fe.group},Object(L.c)("div",{className:fe.link},"Gallery"),Object(L.c)("div",{className:fe.subsubtitle},"Coming soon")))),Object(L.c)("div",{className:fe.flower},Object(L.c)("img",{src:$.a})),Object(L.c)("div",{className:fe.toTop},Object(L.c)(F,{onClick:function(){return window.fullpage_api.moveTo("intro")}},"Back to top")))},ge=a("t69M"),he=a("aWf/");var je={pageWrapper:Object(n.a)({name:"1dq3onz-pageWrapper",styles:"position:relative;;label:pageWrapper;"}),menu:Object(n.a)("position:fixed;top:",P.a.marginLarge,";right:",P.a.marginLarge,";z-index:9;;label:menu;"),date:Object(n.a)("position:fixed;bottom:",P.a.marginLarge,";left:",P.a.marginLarge,";transform-origin:left;transform:rotateZ(-90deg) translateY(50%);z-index:9;@media ",P.a.screenM,"{display:none;};label:date;"),flexSection:Object(n.a)({name:"igh6is-flexSection",styles:".fp-tableCell{display:flex;};label:flexSection;"})},Oe=["intro","date","location","timeline","people","footer"],ye=S((function(){return a.e(13).then(a.t.bind(null,"wXU7",7))}));t.default=function(){var e=Object(i.useState)(!1),t=e[0],a=e[1];return Object(L.c)(he.b,null,Object(L.c)("div",{className:je.pageWrapper},Object(L.c)(ge.a,{onClickClose:function(){return a(!1)},visible:t}),Object(L.c)("div",{className:je.menu},Object(L.c)(k.a,{onClick:function(){return a(!0)}})),Object(L.c)("div",{className:je.date},Object(L.c)(C,null)),Object(L.c)(ye,{scrollingSpeed:1e3,easingcss3:"ease-in-out",scrollOverflow:!0,anchors:Oe,render:function(){return Object(L.c)(ye.Wrapper,null,Object(L.c)("div",{className:"section fp-noscroll"},Object(L.c)(W,null)),Object(L.c)("div",{className:"section fp-noscroll"},Object(L.c)(Q,null)),Object(L.c)("div",{className:"section fp-noscroll "+je.flexSection},Object(L.c)(ee,null)),Object(L.c)("div",{className:"section "+(window.innerWidth>375?"fp-noscroll":"")},Object(L.c)(ie,null)),Object(L.c)("div",{className:"section"},Object(L.c)(de,null)),Object(L.c)("div",{className:"section "+(window.innerWidth>375?"fp-auto-height":"fp-noscroll")},Object(L.c)(pe,null)))}})))}},TOwV:function(e,t,a){"use strict";e.exports=a("qT12")},"dY+F":function(e,t,a){e.exports=a.p+"static/flower-background-d3399bec5882469d91956293b375d410.png"},oDAe:function(e,t,a){e.exports=a.p+"static/countdown-flower-f84b351ec6c2538a6b1353bd1bb18d55.png"},qT12:function(e,t,a){"use strict";var n="function"==typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,c=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,b=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,j=n?Symbol.for("react.block"):60121,O=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,v=n?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case d:case b:case r:case l:case o:case f:return e;default:switch(e=e&&e.$$typeof){case m:case u:case h:case g:case s:return e;default:return t}}case c:return t}}}function w(e){return x(e)===b}t.AsyncMode=d,t.ConcurrentMode=b,t.ContextConsumer=m,t.ContextProvider=s,t.Element=i,t.ForwardRef=u,t.Fragment=r,t.Lazy=h,t.Memo=g,t.Portal=c,t.Profiler=l,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return w(e)||x(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return x(e)===m},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===r},t.isLazy=function(e){return x(e)===h},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===c},t.isProfiler=function(e){return x(e)===l},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===b||e===l||e===o||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===s||e.$$typeof===m||e.$$typeof===u||e.$$typeof===O||e.$$typeof===y||e.$$typeof===v||e.$$typeof===j)},t.typeOf=x}}]);
//# sourceMappingURL=component---src-pages-index-js-fe455c7d1e5db8c47da9.js.map