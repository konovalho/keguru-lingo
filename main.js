!function(n){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(e);p.length;)p.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([473,1]),t()}({272:function(n,e,t){"use strict";(function(n){var r=t(107),a=t.n(r),o=t(273),i=t.n(o),s=t(60),c=t.n(s),l=t(61),u=t.n(l),d=t(62),p=t.n(d),m=t(63),f=t.n(m),h=t(64),b=t.n(h),g=t(0),j=t.n(g),v=t(281),y=t(29),w=t(4),k=t.n(w),x=t(286),E=t(285),O=t(288),z=t(279),_=t(287),C=function(n){function e(){var n,t;c()(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=p()(this,(n=f()(e)).call.apply(n,[this].concat(a)))).container=j.a.createRef(),t}return b()(e,n),u()(e,[{key:"componentDidUpdate",value:function(n){this.props.location.pathname!==n.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){var n=this.props.children;return j.a.createElement("div",null,n)}}]),e}(g.Component),S=function(e){function t(){return c()(this,t),p()(this,f()(t).apply(this,arguments))}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this;return j.a.createElement(x.a,O.a,j.a.createElement(z.a.Provider,{value:this.state},j.a.createElement(v.a,{basename:n.env.PUBLIC_URL},j.a.createElement(y.a,{render:function(n){var t=n.location;return j.a.createElement(C,{location:t,setHeaderPosition:e.setHeaderPosition},j.a.createElement(I,{exact:!0,name:"Test",path:"/",component:E.a}))}}))))}}]),t}(j.a.Component);function I(n){var e=n.component,t=i()(n,["component"]);return j.a.createElement(y.a,a()({},t,{render:function(n){return j.a.createElement(_.a,t,j.a.createElement(e,a()({},n,t)))}}))}I.propTypes={component:k.a.oneOfType([k.a.element,k.a.func]).isRequired},e.a=S}).call(this,t(106))},275:function(n,e,t){n.exports=t.p+"955c359ac7519c05d24189baa8565d5e.jpg"},276:function(n,e,t){n.exports={content__dangerous:"_3Enjm",light:"_3cY_3",root:"_38zlC"}},277:function(n,e,t){"use strict";(function(n){t.d(e,"a",function(){return a});var r=t(0);function a(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=Object(r.useRef)();Object(r.useEffect)(function(){o.current=t},[t]),Object(r.useEffect)(function(){var n=function(n){return o.current(n)};return a.addEventListener(e,n),function(){return a.removeEventListener(e,n)}},[e,a])}}).call(this,t(76))},278:function(n,e,t){n.exports={content__dangerous:"_1OAg2",light:"_31zdR",root:"_1kEyf"}},279:function(n,e,t){"use strict";var r=t(0),a=void 0,o=t.n(r).a.createContext({search:"",onChangeSearch:function(){},headerPosition:0,changeHeaderPosition:function(n){return a.headerPosition=n}});e.a=o},280:function(n,e,t){n.exports={content__dangerous:"_3PGTR",light:"_1Po36",wrapper:"nOy2U"}},285:function(n,e,t){"use strict";var r=t(274),a=t.n(r),o=t(77),i=t.n(o),s=t(22),c=t.n(s),l=t(0),u=t.n(l),d=t(275),p=t.n(d),m=t(4),f=t.n(m),h=t(78),b=t.n(h),g=function(n){var e=n.handleSubmit,t=Object(l.useState)(""),r=c()(t,2),a=r[0],o=r[1],i=Object(l.useState)(""),s=c()(i,2),d=s[0],p=s[1];return u.a.createElement("form",{className:b.a.root,onSubmit:function(n){n.preventDefault(),e({word:a,translate:d}),o(""),p("")}},u.a.createElement("div",{className:b.a.fieldWrap},u.a.createElement("label",{htmlFor:"inpWord"},"Слово",u.a.createElement("input",{value:a,onChange:function(n){o(n.target.value)},type:"text",name:"word",id:"inpWord"}))),u.a.createElement("div",{className:b.a.fieldWrap},u.a.createElement("label",{htmlFor:"inpTranslate"},"Перевод",u.a.createElement("input",{value:d,onChange:function(n){p(n.target.value)},type:"text",name:"inpTranslate"}))),u.a.createElement("button",{type:"submit"},"Добавить"))};g.propTypes={handleSubmit:f.a.func.isRequired};var j=g,v=t(276),y=t.n(v),w=function(n){var e=n.changeShowTranslate,t=n.showTranslate,r=n.toggleIsCheck;return u.a.createElement("div",{className:y.a.root},u.a.createElement("button",{onClick:e,type:"button"},t?"Скрыть":"Показать"," перевод"),u.a.createElement("button",{onClick:r,type:"button",disabled:t},"Проверить"))};w.propTypes={showTranslate:f.a.bool.isRequired,changeShowTranslate:f.a.func.isRequired,toggleIsCheck:f.a.func.isRequired};var k=w,x=t(277);var E=t(278),O=t.n(E),z=function(n){var e=n.id,t=n.handleBlur,r=Object(l.useState)(""),a=c()(r,2),o=a[0],i=a[1];return u.a.createElement("input",{className:O.a.root,value:o,onChange:function(n){i(n.target.value)},onBlur:function(n){t({id:e,value:n.target.value})}})};z.propTypes={id:f.a.number.isRequired,handleBlur:f.a.func.isRequired};var _=z,C=t(65),S=t.n(C),I=function(n){var e,t,r,a,o=n.list,i=n.showTranslate,s=n.addValueForCheck,d=n.isCheck,p=n.listChecked,m=Object(l.useState)(0),f=c()(m,2),h=f[0],b=f[1],g=(e=function(){return b(0)},t=h,r=Object(l.useRef)(),a=Object(l.useRef)(),Object(x.a)("mousedown",function(n){t&&!r.current.contains(n.target)&&a.current(n)}),Object(l.useEffect)(function(){a.current=e},[]),{ref:r});return o.length>0?u.a.createElement("ul",{className:S.a.root},o.map(function(n){return u.a.createElement("li",{className:S.a.itemWord,key:n.id},u.a.createElement("div",{className:S.a.word},n.word),u.a.createElement("div",{className:S.a.translate,onDoubleClick:(e=n.id,function(){i&&b(e)})},i?u.a.createElement("div",{className:"content"},h===n.id?u.a.createElement("input",g):n.translate):u.a.createElement(_,{id:n.id,handleBlur:s})),d&&u.a.createElement("div",{className:"checkField"},p.find(function(e){return e.id===n.id})&&n.translate===p.find(function(e){return e.id===n.id}).value?"правильно":"нет"));var e})):null};I.propTypes={list:f.a.arrayOf(f.a.shape({id:f.a.number,word:f.a.string,translate:f.a.string})).isRequired,listChecked:f.a.arrayOf(f.a.shape({id:f.a.number,value:f.a.string})).isRequired,showTranslate:f.a.bool.isRequired,addValueForCheck:f.a.func.isRequired,isCheck:f.a.bool.isRequired};var R=I,P=t(53),T=t.n(P);function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?q(t,!0).forEach(function(e){a()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}e.a=function(){var n=JSON.parse(localStorage.getItem("list"))||[],e=Object(l.useState)(!0),t=c()(e,2),r=t[0],a=t[1],o=Object(l.useState)(n),s=c()(o,2),d=s[0],m=s[1],f=Object(l.useState)([]),h=c()(f,2),b=h[0],g=h[1],v=Object(l.useState)(!1),y=c()(v,2),w=y[0],x=y[1];return u.a.createElement("div",{className:T.a.root},u.a.createElement("div",{className:T.a.container},u.a.createElement("h1",{className:T.a.title},"Кенгуру Линго"),u.a.createElement("img",{className:T.a.logo,src:p.a,width:"20%",alt:"logo"}),u.a.createElement("h2",{className:T.a.desc},"Приложение для обучения английских слов"),u.a.createElement(j,{handleSubmit:function(n){var e=d.length>0?d[d.length-1].id+1:1,t=[].concat(i()(d),[N({},n,{id:e})]);m(t),localStorage.setItem("list",JSON.stringify(t))}}),u.a.createElement(k,{changeShowTranslate:function(){a(!r)},showTranslate:r,toggleIsCheck:function(){x(!w)}}),u.a.createElement(R,{list:d,showTranslate:r,addValueForCheck:function(n){var e=b.findIndex(function(e){return e.id===n.id});if(-1!==e){var t=i()(b);t[e]=n.value,g(t)}g([].concat(i()(b),[N({},n)]))},isCheck:w,listChecked:b})))}},287:function(n,e,t){"use strict";var r=t(60),a=t.n(r),o=t(61),i=t.n(o),s=t(62),c=t.n(s),l=t(63),u=t.n(l),d=t(64),p=t.n(d),m=t(0),f=t.n(m),h=(t(453),t(454),function(n){var e=n.children;return f.a.createElement(m.Fragment,null,e)}),b=t(280),g=t.n(b),j=function(n){function e(){return a()(this,e),c()(this,u()(e).apply(this,arguments))}return p()(e,n),i()(e,[{key:"render",value:function(){var n=this.props.children;return f.a.createElement(h,null,f.a.createElement("div",{className:g.a.wrapper},n))}}]),e}(f.a.Component);e.a=j},288:function(n,e,t){"use strict";e.a={PostsStore:function(){}}},435:function(n,e,t){var r={"./af":137,"./af.js":137,"./ar":138,"./ar-dz":139,"./ar-dz.js":139,"./ar-kw":140,"./ar-kw.js":140,"./ar-ly":141,"./ar-ly.js":141,"./ar-ma":142,"./ar-ma.js":142,"./ar-sa":143,"./ar-sa.js":143,"./ar-tn":144,"./ar-tn.js":144,"./ar.js":138,"./az":145,"./az.js":145,"./be":146,"./be.js":146,"./bg":147,"./bg.js":147,"./bm":148,"./bm.js":148,"./bn":149,"./bn.js":149,"./bo":150,"./bo.js":150,"./br":151,"./br.js":151,"./bs":152,"./bs.js":152,"./ca":153,"./ca.js":153,"./cs":154,"./cs.js":154,"./cv":155,"./cv.js":155,"./cy":156,"./cy.js":156,"./da":157,"./da.js":157,"./de":158,"./de-at":159,"./de-at.js":159,"./de-ch":160,"./de-ch.js":160,"./de.js":158,"./dv":161,"./dv.js":161,"./el":162,"./el.js":162,"./en-SG":163,"./en-SG.js":163,"./en-au":164,"./en-au.js":164,"./en-ca":165,"./en-ca.js":165,"./en-gb":166,"./en-gb.js":166,"./en-ie":167,"./en-ie.js":167,"./en-il":168,"./en-il.js":168,"./en-nz":169,"./en-nz.js":169,"./eo":170,"./eo.js":170,"./es":171,"./es-do":172,"./es-do.js":172,"./es-us":173,"./es-us.js":173,"./es.js":171,"./et":174,"./et.js":174,"./eu":175,"./eu.js":175,"./fa":176,"./fa.js":176,"./fi":177,"./fi.js":177,"./fo":178,"./fo.js":178,"./fr":179,"./fr-ca":180,"./fr-ca.js":180,"./fr-ch":181,"./fr-ch.js":181,"./fr.js":179,"./fy":182,"./fy.js":182,"./ga":183,"./ga.js":183,"./gd":184,"./gd.js":184,"./gl":185,"./gl.js":185,"./gom-latn":186,"./gom-latn.js":186,"./gu":187,"./gu.js":187,"./he":188,"./he.js":188,"./hi":189,"./hi.js":189,"./hr":190,"./hr.js":190,"./hu":191,"./hu.js":191,"./hy-am":192,"./hy-am.js":192,"./id":193,"./id.js":193,"./is":194,"./is.js":194,"./it":195,"./it-ch":196,"./it-ch.js":196,"./it.js":195,"./ja":197,"./ja.js":197,"./jv":198,"./jv.js":198,"./ka":199,"./ka.js":199,"./kk":200,"./kk.js":200,"./km":201,"./km.js":201,"./kn":202,"./kn.js":202,"./ko":203,"./ko.js":203,"./ku":204,"./ku.js":204,"./ky":205,"./ky.js":205,"./lb":206,"./lb.js":206,"./lo":207,"./lo.js":207,"./lt":208,"./lt.js":208,"./lv":209,"./lv.js":209,"./me":210,"./me.js":210,"./mi":211,"./mi.js":211,"./mk":212,"./mk.js":212,"./ml":213,"./ml.js":213,"./mn":214,"./mn.js":214,"./mr":215,"./mr.js":215,"./ms":216,"./ms-my":217,"./ms-my.js":217,"./ms.js":216,"./mt":218,"./mt.js":218,"./my":219,"./my.js":219,"./nb":220,"./nb.js":220,"./ne":221,"./ne.js":221,"./nl":222,"./nl-be":223,"./nl-be.js":223,"./nl.js":222,"./nn":224,"./nn.js":224,"./pa-in":225,"./pa-in.js":225,"./pl":226,"./pl.js":226,"./pt":227,"./pt-br":228,"./pt-br.js":228,"./pt.js":227,"./ro":229,"./ro.js":229,"./ru":105,"./ru.js":105,"./sd":230,"./sd.js":230,"./se":231,"./se.js":231,"./si":232,"./si.js":232,"./sk":233,"./sk.js":233,"./sl":234,"./sl.js":234,"./sq":235,"./sq.js":235,"./sr":236,"./sr-cyrl":237,"./sr-cyrl.js":237,"./sr.js":236,"./ss":238,"./ss.js":238,"./sv":239,"./sv.js":239,"./sw":240,"./sw.js":240,"./ta":241,"./ta.js":241,"./te":242,"./te.js":242,"./tet":243,"./tet.js":243,"./tg":244,"./tg.js":244,"./th":245,"./th.js":245,"./tl-ph":246,"./tl-ph.js":246,"./tlh":247,"./tlh.js":247,"./tr":248,"./tr.js":248,"./tzl":249,"./tzl.js":249,"./tzm":250,"./tzm-latn":251,"./tzm-latn.js":251,"./tzm.js":250,"./ug-cn":252,"./ug-cn.js":252,"./uk":253,"./uk.js":253,"./ur":254,"./ur.js":254,"./uz":255,"./uz-latn":256,"./uz-latn.js":256,"./uz.js":255,"./vi":257,"./vi.js":257,"./x-pseudo":258,"./x-pseudo.js":258,"./yo":259,"./yo.js":259,"./zh-cn":260,"./zh-cn.js":260,"./zh-hk":261,"./zh-hk.js":261,"./zh-tw":262,"./zh-tw.js":262};function a(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=o,n.exports=a,a.id=435},436:function(n,e,t){var r=t(437);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(439)(r,a);r.locals&&(n.exports=r.locals)},437:function(n,e,t){(n.exports=t(438)(!1)).push([n.i,'html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}',""])},454:function(n,e,t){n.exports={content__dangerous:"_1bJen",light:"_2gfN3",chromeframe:"WTvJE","input-checkbox":"_20QGs",text:"ydYQ5",root:"_3wMc2"}},473:function(n,e,t){"use strict";t.r(e);t(289),t(291),t(292),t(294),t(295),t(297),t(298),t(88),t(301),t(302),t(303),t(305),t(306),t(307),t(308),t(309),t(310),t(311),t(312),t(313),t(314),t(315),t(317),t(318),t(319),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(336),t(338),t(339),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(362),t(363),t(364),t(366),t(367),t(368),t(369),t(370),t(371),t(372),t(373),t(374),t(375),t(376),t(377),t(128),t(378),t(380),t(381),t(382),t(383),t(384),t(385),t(387),t(388),t(389),t(390),t(391),t(392),t(393),t(394),t(395),t(396),t(397),t(398),t(399),t(400),t(401),t(402),t(403),t(404),t(405),t(406),t(407),t(408),t(409),t(410),t(411),t(412),t(413),t(414),t(415),t(416),t(417),t(418),t(419),t(420),t(421),t(422),t(423),t(424),t(425),t(426),t(427),t(428);var r=t(0),a=t.n(r),o=t(59),i=t.n(o),s=(t(433),t(1)),c=t.n(s),l=(t(105),t(436),t(272)),u=t(284);t.n(u).a.create({baseURL:"/v1",withCredentials:!0,headers:{"Content-Type":"application/json"}});c.a.locale("ru"),i.a.render(a.a.createElement(l.a,null),document.getElementById("root"))},53:function(n,e,t){n.exports={content__dangerous:"_10MBC",light:"_1hg7j",root:"_1qDdL",container:"_3H9aE",title:"_3qyP0",logo:"z_MTn",desc:"_1zuAk"}},65:function(n,e,t){n.exports={content__dangerous:"NBCGm",light:"_1hPFY",root:"_3cDrj",itemWord:"_2BbvF",word:"wvlYu",translate:"_12SnK"}},78:function(n,e,t){n.exports={content__dangerous:"nEh0l",light:"_3_Sg2",root:"_1423W",fieldWrap:"_1n-aC"}}});