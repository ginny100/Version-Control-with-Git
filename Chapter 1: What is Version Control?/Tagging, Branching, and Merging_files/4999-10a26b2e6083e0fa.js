(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4999],{48384:function(s,a,n){"use strict";n.d(a,{Z:function(){return p}});var i=n(85893),t=n(67294),e=n(14293),_=n.n(e),l=n(96026),r=n.n(l),c=n(26793),d=n(98722),o=n(25913),v=n(98271),g=n.n(v),p=function(s){var a=s.onClick,n=s.rating,e=void 0===n?null:n,l=s.filledColor,v=s.emptyColor,p=s.fixed,x=(0,c.$)().t,b=(0,t.useState)(null),k=b[0],h=b[1],T=_()(k)?e:k,u=function(s){!p&&h(s.number)},f=r()(1,6).map((function(s){return{number:s,title:x("lesson.lab.starTitle",{rating:s})}}));return(0,i.jsx)("ol",{className:g()["star-rating-light"],onMouseLeave:function(){h(null)},children:f.map((function(s){var n=!!T&&T>=s.number;return(0,i.jsx)("li",{className:g().star,onFocus:function(){return u(s)},onMouseOver:function(){return u(s)},children:(0,i.jsx)(d.RoundButton,{testID:"star-".concat(s.number),variant:"minimal",onClick:function(){return function(s){a&&a(s.number)}(s)},label:s.title,showLabel:!1,icon:n?(0,i.jsx)(o.Gvv,{color:l,title:s.title}):(0,i.jsx)(o.OlN,{color:v,title:s.title})})},s.number)}))})}},44221:function(s,a,n){"use strict";n.d(a,{Z:function(){return o}});var i=n(85893),t=(n(67294),n(94184)),e=n.n(t),_=n(98722),l=n(24435),r=n(6321),c=n(37696),d=n.n(c);var o=function(s){var a,n,t,c=s.label,o=s.id,v=(0,r.g)(),g=v.selected,p=v.setSelected;return(0,i.jsx)("div",{className:e()(d()["tab-button"],(a={},n=d().active,t=g===o,n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a)),children:(0,i.jsx)(_.Button,{label:c,variant:"minimal",small:!0,onClick:function(){(0,l.j)("Classroom CTA Clicked",{cta_type:"button",message:c}),p(o)}})})}},85674:function(s,a,n){"use strict";n.d(a,{OY:function(){return d},gC:function(){return o}});var i=n(85893),t=n(67294),e=n(22397),_=n.n(e);function l(s,a){(null==a||a>s.length)&&(a=s.length);for(var n=0,i=new Array(a);n<a;n++)i[n]=s[n];return i}function r(s,a){return function(s){if(Array.isArray(s))return s}(s)||function(s,a){var n=null==s?null:"undefined"!==typeof Symbol&&s[Symbol.iterator]||s["@@iterator"];if(null!=n){var i,t,e=[],_=!0,l=!1;try{for(n=n.call(s);!(_=(i=n.next()).done)&&(e.push(i.value),!a||e.length!==a);_=!0);}catch(r){l=!0,t=r}finally{try{_||null==n.return||n.return()}finally{if(l)throw t}}return e}}(s,a)||function(s,a){if(!s)return;if("string"===typeof s)return l(s,a);var n=Object.prototype.toString.call(s).slice(8,-1);"Object"===n&&s.constructor&&(n=s.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(s,a)}(s,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t.createContext(null);function d(s){var a=r(t.useState(s),2);return{selected:a[0],setSelected:a[1]}}function o(){var s=t.useContext(c);if(!s)throw new Error("Tab compound components cannot be rendered outside the Tabs component");return s}a.ZP=function(s){var a=s.selected,n=s.setSelected,t=s.children;return(0,i.jsx)("div",{className:_()["tabs-selector-container"],children:(0,i.jsx)(c.Provider,{value:{selected:a,setSelected:n},children:t})})}},6321:function(s,a,n){"use strict";n.d(a,{g:function(){return i.gC}});var i=n(85674);a.Z=i.ZP},98271:function(s){s.exports={"vds-box-shadow--none":"StarRating_vds-box-shadow--none__3unI1","vds-box-shadow--1":"StarRating_vds-box-shadow--1__WJJMt","vds-box-shadow--2":"StarRating_vds-box-shadow--2__jFwN0","vds-box-shadow--3":"StarRating_vds-box-shadow--3__aC3ny","vds-box-shadow--4":"StarRating_vds-box-shadow--4__nAijy","vds-box-shadow--5":"StarRating_vds-box-shadow--5__RzpiL","vds-color--white":"StarRating_vds-color--white__sYfQK","vds-color--black":"StarRating_vds-color--black__Y41Aa","vds-color--cerulean-darker":"StarRating_vds-color--cerulean-darker__xQDxP","vds-color--cerulean-dark":"StarRating_vds-color--cerulean-dark__GN5Is","vds-color--cerulean":"StarRating_vds-color--cerulean__u0bPO","vds-color--cerulean-light":"StarRating_vds-color--cerulean-light__V0frM","vds-color--cerulean-lighter":"StarRating_vds-color--cerulean-lighter__MbI_2","vds-color--cerulean-lightest":"StarRating_vds-color--cerulean-lightest__ewucR","vds-color--slate-darker":"StarRating_vds-color--slate-darker__4OVi2","vds-color--slate-dark":"StarRating_vds-color--slate-dark__yG1kG","vds-color--slate":"StarRating_vds-color--slate__rVJq_","vds-color--slate-light":"StarRating_vds-color--slate-light__fFIrT","vds-color--slate-lighter":"StarRating_vds-color--slate-lighter__LQ4Vm","vds-color--slate-lightest":"StarRating_vds-color--slate-lightest__o3oev","vds-color--silver-darker":"StarRating_vds-color--silver-darker__LOgWC","vds-color--silver-dark":"StarRating_vds-color--silver-dark__vViGO","vds-color--silver":"StarRating_vds-color--silver__fi73c","vds-color--silver-light":"StarRating_vds-color--silver-light__zrIFn","vds-color--silver-lighter":"StarRating_vds-color--silver-lighter__e9VU_","vds-color--silver-lightest":"StarRating_vds-color--silver-lightest__OD_FO","vds-color--red-darker":"StarRating_vds-color--red-darker__HbNHe","vds-color--red-dark":"StarRating_vds-color--red-dark__EOxTY","vds-color--red":"StarRating_vds-color--red__SABTm","vds-color--red-light":"StarRating_vds-color--red-light__q8y5k","vds-color--red-lighter":"StarRating_vds-color--red-lighter__CYeFt","vds-color--red-lightest":"StarRating_vds-color--red-lightest__syfXP","vds-color--orange-darker":"StarRating_vds-color--orange-darker__Tgn4C","vds-color--orange-dark":"StarRating_vds-color--orange-dark__VNndJ","vds-color--orange":"StarRating_vds-color--orange__fHI_t","vds-color--orange-light":"StarRating_vds-color--orange-light__MRBtq","vds-color--orange-lighter":"StarRating_vds-color--orange-lighter__t7Jtu","vds-color--orange-lightest":"StarRating_vds-color--orange-lightest__6nG8d","vds-color--green-darker":"StarRating_vds-color--green-darker__2K7LE","vds-color--green-dark":"StarRating_vds-color--green-dark__wtac_","vds-color--green":"StarRating_vds-color--green__FsrGf","vds-color--green-light":"StarRating_vds-color--green-light__oNZqT","vds-color--green-lighter":"StarRating_vds-color--green-lighter__rHzxe","vds-color--green-lightest":"StarRating_vds-color--green-lightest__IFUd2","vds-color--blue-darker":"StarRating_vds-color--blue-darker__AAzdm","vds-color--blue-dark":"StarRating_vds-color--blue-dark__cHcZO","vds-color--blue":"StarRating_vds-color--blue__NUoiG","vds-color--blue-light":"StarRating_vds-color--blue-light__861AR","vds-color--blue-lighter":"StarRating_vds-color--blue-lighter__poY60","vds-color--blue-lightest":"StarRating_vds-color--blue-lightest__IUoER","vds-color--purple-darker":"StarRating_vds-color--purple-darker__Amq7D","vds-color--purple-dark":"StarRating_vds-color--purple-dark__c1dZ3","vds-color--purple":"StarRating_vds-color--purple__6Zb84","vds-color--purple-light":"StarRating_vds-color--purple-light__7xN5Z","vds-color--purple-lighter":"StarRating_vds-color--purple-lighter__rUyW7","vds-color--purple-lightest":"StarRating_vds-color--purple-lightest__6gM9P","vds-color--yellow-darker":"StarRating_vds-color--yellow-darker__CGNBQ","vds-color--yellow-dark":"StarRating_vds-color--yellow-dark__CADO1","vds-color--yellow":"StarRating_vds-color--yellow__so384","vds-color--yellow-light":"StarRating_vds-color--yellow-light__ntS2p","vds-color--yellow-lighter":"StarRating_vds-color--yellow-lighter__YH8ku","vds-color--yellow-lightest":"StarRating_vds-color--yellow-lightest__p6HAA","vds-color--teal-darker":"StarRating_vds-color--teal-darker__M3LA0","vds-color--teal-dark":"StarRating_vds-color--teal-dark__k4J_B","vds-color--teal":"StarRating_vds-color--teal__V_3IE","vds-color--teal-light":"StarRating_vds-color--teal-light__Hht_l","vds-color--teal-lighter":"StarRating_vds-color--teal-lighter__JF9qF","vds-color--teal-lightest":"StarRating_vds-color--teal-lightest__NKHhf","vds-color--magenta-darker":"StarRating_vds-color--magenta-darker__Yiqjv","vds-color--magenta-dark":"StarRating_vds-color--magenta-dark__969Ov","vds-color--magenta":"StarRating_vds-color--magenta__p4oiw","vds-color--magenta-light":"StarRating_vds-color--magenta-light___2bzd","vds-color--magenta-lighter":"StarRating_vds-color--magenta-lighter__cm8lj","vds-color--magenta-lightest":"StarRating_vds-color--magenta-lightest__VrLOY","vds-font-family--text":"StarRating_vds-font-family--text___sMUg","vds-font-family--code":"StarRating_vds-font-family--code__PYnd8","vds-font-style--text-normal":"StarRating_vds-font-style--text-normal__4saIv","vds-font-style--text-italic":"StarRating_vds-font-style--text-italic__4C64w","vds-font-style--code-normal":"StarRating_vds-font-style--code-normal__YniXI","vds-font-weight--text-light":"StarRating_vds-font-weight--text-light__b_Vkc","vds-font-weight--text-regular":"StarRating_vds-font-weight--text-regular___uAgR","vds-font-weight--text-semibold":"StarRating_vds-font-weight--text-semibold__n5Jc_","vds-font-weight--code-regular":"StarRating_vds-font-weight--code-regular__VWwuI","vds-font-weight--code-semibold":"StarRating_vds-font-weight--code-semibold__VmReP","vds-scroll-lock":"StarRating_vds-scroll-lock__awws6","vds-spacing--inline-none":"StarRating_vds-spacing--inline-none__j4Wcr","vds-spacing--inline-half":"StarRating_vds-spacing--inline-half__UbnDF","vds-spacing--inline-1x":"StarRating_vds-spacing--inline-1x__lB68x","vds-spacing--inline-2x":"StarRating_vds-spacing--inline-2x__LZMRT","vds-spacing--inline-3x":"StarRating_vds-spacing--inline-3x__piOLd","vds-spacing--inline-4x":"StarRating_vds-spacing--inline-4x__stm3q","vds-spacing--inline-6x":"StarRating_vds-spacing--inline-6x__R53jO","vds-spacing--inline-inline-half":"StarRating_vds-spacing--inline-inline-half__bRX7u","vds-spacing--inline-inline-1x":"StarRating_vds-spacing--inline-inline-1x__9W5Ks","vds-spacing--inline-inline-2x":"StarRating_vds-spacing--inline-inline-2x__32g1C","vds-spacing--inline-inline-3x":"StarRating_vds-spacing--inline-inline-3x__26PUX","vds-spacing--inline-inline-4x":"StarRating_vds-spacing--inline-inline-4x__e5qYY","vds-spacing--inline-inline-6x":"StarRating_vds-spacing--inline-inline-6x__Xf7vZ","vds-spacing--inline-inset-half":"StarRating_vds-spacing--inline-inset-half__RsrWY","vds-spacing--inline-inset-1x":"StarRating_vds-spacing--inline-inset-1x__hENAU","vds-spacing--inline-inset-2x":"StarRating_vds-spacing--inline-inset-2x__vt5V_","vds-spacing--inline-inset-3x":"StarRating_vds-spacing--inline-inset-3x__UOzTH","vds-spacing--inline-inset-4x":"StarRating_vds-spacing--inline-inset-4x__fD1Km","vds-spacing--inline-inset-6x":"StarRating_vds-spacing--inline-inset-6x__Gh9VG","vds-spacing--inline-stack-half":"StarRating_vds-spacing--inline-stack-half___efHZ","vds-spacing--inline-stack-1x":"StarRating_vds-spacing--inline-stack-1x__3cM0c","vds-spacing--inline-stack-2x":"StarRating_vds-spacing--inline-stack-2x__YYC71","vds-spacing--inline-stack-3x":"StarRating_vds-spacing--inline-stack-3x__opb_o","vds-spacing--inline-stack-4x":"StarRating_vds-spacing--inline-stack-4x__XlcBD","vds-spacing--inline-stack-6x":"StarRating_vds-spacing--inline-stack-6x__f_Anr","vds-spacing--inset-none":"StarRating_vds-spacing--inset-none__traZs","vds-spacing--inset-half":"StarRating_vds-spacing--inset-half__nEJt_","vds-spacing--inset-1x":"StarRating_vds-spacing--inset-1x___5yNH","vds-spacing--inset-2x":"StarRating_vds-spacing--inset-2x__0SFn_","vds-spacing--inset-3x":"StarRating_vds-spacing--inset-3x__GZT10","vds-spacing--inset-4x":"StarRating_vds-spacing--inset-4x__G0huT","vds-spacing--inset-6x":"StarRating_vds-spacing--inset-6x__gAbDt","vds-spacing--inset-inline-half":"StarRating_vds-spacing--inset-inline-half__8ZR4_","vds-spacing--inset-inline-1x":"StarRating_vds-spacing--inset-inline-1x__PFPbQ","vds-spacing--inset-inline-2x":"StarRating_vds-spacing--inset-inline-2x__IpkKZ","vds-spacing--inset-inline-3x":"StarRating_vds-spacing--inset-inline-3x__VWzoL","vds-spacing--inset-inline-4x":"StarRating_vds-spacing--inset-inline-4x___6qez","vds-spacing--inset-inline-6x":"StarRating_vds-spacing--inset-inline-6x___CJ3d","vds-spacing--inset-inset-half":"StarRating_vds-spacing--inset-inset-half__krKni","vds-spacing--inset-inset-1x":"StarRating_vds-spacing--inset-inset-1x__6hv_X","vds-spacing--inset-inset-2x":"StarRating_vds-spacing--inset-inset-2x__XdWkt","vds-spacing--inset-inset-3x":"StarRating_vds-spacing--inset-inset-3x__Ua0uL","vds-spacing--inset-inset-4x":"StarRating_vds-spacing--inset-inset-4x__Mn0Mb","vds-spacing--inset-inset-6x":"StarRating_vds-spacing--inset-inset-6x__Uhnq4","vds-spacing--inset-stack-half":"StarRating_vds-spacing--inset-stack-half__KIY21","vds-spacing--inset-stack-1x":"StarRating_vds-spacing--inset-stack-1x__5uFAk","vds-spacing--inset-stack-2x":"StarRating_vds-spacing--inset-stack-2x__L_UKL","vds-spacing--inset-stack-3x":"StarRating_vds-spacing--inset-stack-3x__VPEQk","vds-spacing--inset-stack-4x":"StarRating_vds-spacing--inset-stack-4x__6HnMa","vds-spacing--inset-stack-6x":"StarRating_vds-spacing--inset-stack-6x__1bdc1","vds-spacing--stack-none":"StarRating_vds-spacing--stack-none__vBmFg","vds-spacing--stack-half":"StarRating_vds-spacing--stack-half__7iJog","vds-spacing--stack-1x":"StarRating_vds-spacing--stack-1x__DLXNS","vds-spacing--stack-2x":"StarRating_vds-spacing--stack-2x__hTjaI","vds-spacing--stack-3x":"StarRating_vds-spacing--stack-3x__sKpd4","vds-spacing--stack-4x":"StarRating_vds-spacing--stack-4x__6RnKW","vds-spacing--stack-6x":"StarRating_vds-spacing--stack-6x__uWUM8","vds-spacing--stack-inline-half":"StarRating_vds-spacing--stack-inline-half__BQ7O5","vds-spacing--stack-inline-1x":"StarRating_vds-spacing--stack-inline-1x__FX3ck","vds-spacing--stack-inline-2x":"StarRating_vds-spacing--stack-inline-2x__RZq8k","vds-spacing--stack-inline-3x":"StarRating_vds-spacing--stack-inline-3x__4aHzm","vds-spacing--stack-inline-4x":"StarRating_vds-spacing--stack-inline-4x___FXGb","vds-spacing--stack-inline-6x":"StarRating_vds-spacing--stack-inline-6x__oU3ig","vds-spacing--stack-inset-half":"StarRating_vds-spacing--stack-inset-half__eaD1Y","vds-spacing--stack-inset-1x":"StarRating_vds-spacing--stack-inset-1x__t3jJX","vds-spacing--stack-inset-2x":"StarRating_vds-spacing--stack-inset-2x__U__li","vds-spacing--stack-inset-3x":"StarRating_vds-spacing--stack-inset-3x__VbQhz","vds-spacing--stack-inset-4x":"StarRating_vds-spacing--stack-inset-4x__lj1_g","vds-spacing--stack-inset-6x":"StarRating_vds-spacing--stack-inset-6x__dyvKh","vds-spacing--stack-stack-half":"StarRating_vds-spacing--stack-stack-half__glGrz","vds-spacing--stack-stack-1x":"StarRating_vds-spacing--stack-stack-1x__XyCdF","vds-spacing--stack-stack-2x":"StarRating_vds-spacing--stack-stack-2x__yHDnJ","vds-spacing--stack-stack-3x":"StarRating_vds-spacing--stack-stack-3x__PaY06","vds-spacing--stack-stack-4x":"StarRating_vds-spacing--stack-stack-4x__5x6Oo","vds-spacing--stack-stack-6x":"StarRating_vds-spacing--stack-stack-6x__vGTJX","vds-text-align--left":"StarRating_vds-text-align--left__gjoGz","vds-text-align--center":"StarRating_vds-text-align--center__Z17Vl","vds-text-align--right":"StarRating_vds-text-align--right__OSS_a","vds-text-transform--none":"StarRating_vds-text-transform--none__oWjkJ","vds-text-transform--capitalize":"StarRating_vds-text-transform--capitalize__YSyyA","vds-text-transform--lowercase":"StarRating_vds-text-transform--lowercase__QxjrS","vds-text-transform--uppercase":"StarRating_vds-text-transform--uppercase__UR8DT","vds-visually-hidden":"StarRating_vds-visually-hidden__O4KA1","_star-rating":"StarRating__star-rating__qPcMe",star:"StarRating_star__DlEX1","star-rating-light":"StarRating_star-rating-light__uLARV StarRating__star-rating__qPcMe"}},37696:function(s){s.exports={"vds-box-shadow--none":"Tab_vds-box-shadow--none__K2tUI","vds-box-shadow--1":"Tab_vds-box-shadow--1__6IHyT","vds-box-shadow--2":"Tab_vds-box-shadow--2__ov3oj","vds-box-shadow--3":"Tab_vds-box-shadow--3__yWIzb","vds-box-shadow--4":"Tab_vds-box-shadow--4___zTig","vds-box-shadow--5":"Tab_vds-box-shadow--5__iN6Xb","vds-color--white":"Tab_vds-color--white__0w8rK","vds-color--black":"Tab_vds-color--black__9MwSW","vds-color--cerulean-darker":"Tab_vds-color--cerulean-darker__mMNiO","vds-color--cerulean-dark":"Tab_vds-color--cerulean-dark__nDqgz","vds-color--cerulean":"Tab_vds-color--cerulean__AKzV2","vds-color--cerulean-light":"Tab_vds-color--cerulean-light__zGfZK","vds-color--cerulean-lighter":"Tab_vds-color--cerulean-lighter__1DNyN","vds-color--cerulean-lightest":"Tab_vds-color--cerulean-lightest__6OkIi","vds-color--slate-darker":"Tab_vds-color--slate-darker__3y1sS","vds-color--slate-dark":"Tab_vds-color--slate-dark__E7t1_","vds-color--slate":"Tab_vds-color--slate__7qxjO","vds-color--slate-light":"Tab_vds-color--slate-light__QcpYH","vds-color--slate-lighter":"Tab_vds-color--slate-lighter__8_jx_","vds-color--slate-lightest":"Tab_vds-color--slate-lightest__5mtOq","vds-color--silver-darker":"Tab_vds-color--silver-darker__aFHFI","vds-color--silver-dark":"Tab_vds-color--silver-dark__LFoWO","vds-color--silver":"Tab_vds-color--silver__7bQ48","vds-color--silver-light":"Tab_vds-color--silver-light__ORw6o","vds-color--silver-lighter":"Tab_vds-color--silver-lighter__GwzbX","vds-color--silver-lightest":"Tab_vds-color--silver-lightest__oGFqN","vds-color--red-darker":"Tab_vds-color--red-darker__qmSED","vds-color--red-dark":"Tab_vds-color--red-dark__MPYPC","vds-color--red":"Tab_vds-color--red__RDCOH","vds-color--red-light":"Tab_vds-color--red-light__SD9p4","vds-color--red-lighter":"Tab_vds-color--red-lighter__lrKX0","vds-color--red-lightest":"Tab_vds-color--red-lightest__EdVH6","vds-color--orange-darker":"Tab_vds-color--orange-darker__fCGK3","vds-color--orange-dark":"Tab_vds-color--orange-dark__bU5Sc","vds-color--orange":"Tab_vds-color--orange__4cb8Y","vds-color--orange-light":"Tab_vds-color--orange-light__bJLZX","vds-color--orange-lighter":"Tab_vds-color--orange-lighter__8Ynya","vds-color--orange-lightest":"Tab_vds-color--orange-lightest__sLtVN","vds-color--green-darker":"Tab_vds-color--green-darker__6pjHD","vds-color--green-dark":"Tab_vds-color--green-dark__1N_SG","vds-color--green":"Tab_vds-color--green___uTbT","vds-color--green-light":"Tab_vds-color--green-light__qgMQn","vds-color--green-lighter":"Tab_vds-color--green-lighter__cJg7F","vds-color--green-lightest":"Tab_vds-color--green-lightest__JPIun","vds-color--blue-darker":"Tab_vds-color--blue-darker__L8ebj","vds-color--blue-dark":"Tab_vds-color--blue-dark__vSQRr","vds-color--blue":"Tab_vds-color--blue__yiW3C","vds-color--blue-light":"Tab_vds-color--blue-light__5gSTX","vds-color--blue-lighter":"Tab_vds-color--blue-lighter__gxX6x","vds-color--blue-lightest":"Tab_vds-color--blue-lightest__4H5SD","vds-color--purple-darker":"Tab_vds-color--purple-darker__1F8GF","vds-color--purple-dark":"Tab_vds-color--purple-dark__N1Sbo","vds-color--purple":"Tab_vds-color--purple__SPSrl","vds-color--purple-light":"Tab_vds-color--purple-light__UyEGd","vds-color--purple-lighter":"Tab_vds-color--purple-lighter__7hLSG","vds-color--purple-lightest":"Tab_vds-color--purple-lightest__WoJa4","vds-color--yellow-darker":"Tab_vds-color--yellow-darker__XqSXM","vds-color--yellow-dark":"Tab_vds-color--yellow-dark__yXG7G","vds-color--yellow":"Tab_vds-color--yellow__0PrJh","vds-color--yellow-light":"Tab_vds-color--yellow-light__AKY9q","vds-color--yellow-lighter":"Tab_vds-color--yellow-lighter__bme5S","vds-color--yellow-lightest":"Tab_vds-color--yellow-lightest__its9a","vds-color--teal-darker":"Tab_vds-color--teal-darker__lbjhA","vds-color--teal-dark":"Tab_vds-color--teal-dark__dRwhJ","vds-color--teal":"Tab_vds-color--teal__uuVUW","vds-color--teal-light":"Tab_vds-color--teal-light__ynVpX","vds-color--teal-lighter":"Tab_vds-color--teal-lighter__14wHl","vds-color--teal-lightest":"Tab_vds-color--teal-lightest___grto","vds-color--magenta-darker":"Tab_vds-color--magenta-darker__b44uK","vds-color--magenta-dark":"Tab_vds-color--magenta-dark__iCdvo","vds-color--magenta":"Tab_vds-color--magenta__ZcpIJ","vds-color--magenta-light":"Tab_vds-color--magenta-light__hydS3","vds-color--magenta-lighter":"Tab_vds-color--magenta-lighter__IxyR6","vds-color--magenta-lightest":"Tab_vds-color--magenta-lightest__Gweo_","vds-font-family--text":"Tab_vds-font-family--text__7fURo","vds-font-family--code":"Tab_vds-font-family--code__lyBzd","vds-font-style--text-normal":"Tab_vds-font-style--text-normal__6OsA9","vds-font-style--text-italic":"Tab_vds-font-style--text-italic__TZDth","vds-font-style--code-normal":"Tab_vds-font-style--code-normal__xS65d","vds-font-weight--text-light":"Tab_vds-font-weight--text-light__dswot","vds-font-weight--text-regular":"Tab_vds-font-weight--text-regular__jgUd1","vds-font-weight--text-semibold":"Tab_vds-font-weight--text-semibold___NC80","vds-font-weight--code-regular":"Tab_vds-font-weight--code-regular__9hAAL","vds-font-weight--code-semibold":"Tab_vds-font-weight--code-semibold___EdsP","vds-scroll-lock":"Tab_vds-scroll-lock__F40BU","vds-spacing--inline-none":"Tab_vds-spacing--inline-none__2HYXH","vds-spacing--inline-half":"Tab_vds-spacing--inline-half__PESqE","vds-spacing--inline-1x":"Tab_vds-spacing--inline-1x__52SIP","vds-spacing--inline-2x":"Tab_vds-spacing--inline-2x__60nYA","vds-spacing--inline-3x":"Tab_vds-spacing--inline-3x__n5_r2","vds-spacing--inline-4x":"Tab_vds-spacing--inline-4x__ff98X","vds-spacing--inline-6x":"Tab_vds-spacing--inline-6x__irflt","vds-spacing--inline-inline-half":"Tab_vds-spacing--inline-inline-half__bRHZu","vds-spacing--inline-inline-1x":"Tab_vds-spacing--inline-inline-1x__2ae8W","vds-spacing--inline-inline-2x":"Tab_vds-spacing--inline-inline-2x__Nyvle","vds-spacing--inline-inline-3x":"Tab_vds-spacing--inline-inline-3x__zmizS","vds-spacing--inline-inline-4x":"Tab_vds-spacing--inline-inline-4x__Sncfu","vds-spacing--inline-inline-6x":"Tab_vds-spacing--inline-inline-6x__YkGcX","vds-spacing--inline-inset-half":"Tab_vds-spacing--inline-inset-half__gLxUD","vds-spacing--inline-inset-1x":"Tab_vds-spacing--inline-inset-1x__vV3Rx","vds-spacing--inline-inset-2x":"Tab_vds-spacing--inline-inset-2x__rA8B2","vds-spacing--inline-inset-3x":"Tab_vds-spacing--inline-inset-3x__sW0rf","vds-spacing--inline-inset-4x":"Tab_vds-spacing--inline-inset-4x__j1BNV","vds-spacing--inline-inset-6x":"Tab_vds-spacing--inline-inset-6x__mIJwg","vds-spacing--inline-stack-half":"Tab_vds-spacing--inline-stack-half__VV7YE","vds-spacing--inline-stack-1x":"Tab_vds-spacing--inline-stack-1x__AWhNx","vds-spacing--inline-stack-2x":"Tab_vds-spacing--inline-stack-2x__oYKS4","vds-spacing--inline-stack-3x":"Tab_vds-spacing--inline-stack-3x__mxxUr","vds-spacing--inline-stack-4x":"Tab_vds-spacing--inline-stack-4x__Z_dw3","vds-spacing--inline-stack-6x":"Tab_vds-spacing--inline-stack-6x__IHjS_","vds-spacing--inset-none":"Tab_vds-spacing--inset-none__B4irE","vds-spacing--inset-half":"Tab_vds-spacing--inset-half__QB4f6","vds-spacing--inset-1x":"Tab_vds-spacing--inset-1x__3gPLf","vds-spacing--inset-2x":"Tab_vds-spacing--inset-2x__Y3hkB","vds-spacing--inset-3x":"Tab_vds-spacing--inset-3x___94LA","vds-spacing--inset-4x":"Tab_vds-spacing--inset-4x__JcDWA","vds-spacing--inset-6x":"Tab_vds-spacing--inset-6x__csLHC","vds-spacing--inset-inline-half":"Tab_vds-spacing--inset-inline-half__VTMYP","vds-spacing--inset-inline-1x":"Tab_vds-spacing--inset-inline-1x__dH92k","vds-spacing--inset-inline-2x":"Tab_vds-spacing--inset-inline-2x__HLUxZ","vds-spacing--inset-inline-3x":"Tab_vds-spacing--inset-inline-3x__tWhzJ","vds-spacing--inset-inline-4x":"Tab_vds-spacing--inset-inline-4x__A1eCb","vds-spacing--inset-inline-6x":"Tab_vds-spacing--inset-inline-6x__B_YJM","vds-spacing--inset-inset-half":"Tab_vds-spacing--inset-inset-half__4AijE","vds-spacing--inset-inset-1x":"Tab_vds-spacing--inset-inset-1x__IE73b","vds-spacing--inset-inset-2x":"Tab_vds-spacing--inset-inset-2x__nhlJh","vds-spacing--inset-inset-3x":"Tab_vds-spacing--inset-inset-3x__HhvIA","vds-spacing--inset-inset-4x":"Tab_vds-spacing--inset-inset-4x__eiDfQ","vds-spacing--inset-inset-6x":"Tab_vds-spacing--inset-inset-6x__xDL3m","vds-spacing--inset-stack-half":"Tab_vds-spacing--inset-stack-half__gczMU","vds-spacing--inset-stack-1x":"Tab_vds-spacing--inset-stack-1x___sCaX","vds-spacing--inset-stack-2x":"Tab_vds-spacing--inset-stack-2x__oreMk","vds-spacing--inset-stack-3x":"Tab_vds-spacing--inset-stack-3x__1tYFR","vds-spacing--inset-stack-4x":"Tab_vds-spacing--inset-stack-4x__kHvUw","vds-spacing--inset-stack-6x":"Tab_vds-spacing--inset-stack-6x__06J5c","vds-spacing--stack-none":"Tab_vds-spacing--stack-none__oR6Xf","vds-spacing--stack-half":"Tab_vds-spacing--stack-half__xkim_","vds-spacing--stack-1x":"Tab_vds-spacing--stack-1x__Clh2b","vds-spacing--stack-2x":"Tab_vds-spacing--stack-2x__6qf8Q","vds-spacing--stack-3x":"Tab_vds-spacing--stack-3x__3wvxe","vds-spacing--stack-4x":"Tab_vds-spacing--stack-4x__1TWbh","vds-spacing--stack-6x":"Tab_vds-spacing--stack-6x__rSzyB","vds-spacing--stack-inline-half":"Tab_vds-spacing--stack-inline-half__1K1lZ","vds-spacing--stack-inline-1x":"Tab_vds-spacing--stack-inline-1x__uR85i","vds-spacing--stack-inline-2x":"Tab_vds-spacing--stack-inline-2x__x6dtV","vds-spacing--stack-inline-3x":"Tab_vds-spacing--stack-inline-3x__yUD0R","vds-spacing--stack-inline-4x":"Tab_vds-spacing--stack-inline-4x__t3AQj","vds-spacing--stack-inline-6x":"Tab_vds-spacing--stack-inline-6x__te69k","vds-spacing--stack-inset-half":"Tab_vds-spacing--stack-inset-half__nFAWP","vds-spacing--stack-inset-1x":"Tab_vds-spacing--stack-inset-1x__6VZOo","vds-spacing--stack-inset-2x":"Tab_vds-spacing--stack-inset-2x__xWjEf","vds-spacing--stack-inset-3x":"Tab_vds-spacing--stack-inset-3x__zU921","vds-spacing--stack-inset-4x":"Tab_vds-spacing--stack-inset-4x__oH1lM","vds-spacing--stack-inset-6x":"Tab_vds-spacing--stack-inset-6x__iVD9S","vds-spacing--stack-stack-half":"Tab_vds-spacing--stack-stack-half__nOy39","vds-spacing--stack-stack-1x":"Tab_vds-spacing--stack-stack-1x__p75IH","vds-spacing--stack-stack-2x":"Tab_vds-spacing--stack-stack-2x__WNIy7","vds-spacing--stack-stack-3x":"Tab_vds-spacing--stack-stack-3x__GHTY9","vds-spacing--stack-stack-4x":"Tab_vds-spacing--stack-stack-4x__4q_Yb","vds-spacing--stack-stack-6x":"Tab_vds-spacing--stack-stack-6x__8utAd","vds-text-align--left":"Tab_vds-text-align--left__PXQkv","vds-text-align--center":"Tab_vds-text-align--center__rvzds","vds-text-align--right":"Tab_vds-text-align--right__L7p_J","vds-text-transform--none":"Tab_vds-text-transform--none__r9ksM","vds-text-transform--capitalize":"Tab_vds-text-transform--capitalize__vdLBC","vds-text-transform--lowercase":"Tab_vds-text-transform--lowercase__j1s5k","vds-text-transform--uppercase":"Tab_vds-text-transform--uppercase__9wH1d","vds-visually-hidden":"Tab_vds-visually-hidden__WP6Pw","tab-button":"Tab_tab-button__DnK4t",active:"Tab_active__SQ1Hj"}},22397:function(s){s.exports={"vds-box-shadow--none":"Tabs_vds-box-shadow--none__QJiHg","vds-box-shadow--1":"Tabs_vds-box-shadow--1__HU1oJ","vds-box-shadow--2":"Tabs_vds-box-shadow--2__dwxeP","vds-box-shadow--3":"Tabs_vds-box-shadow--3__Z3WnW","vds-box-shadow--4":"Tabs_vds-box-shadow--4__dGoEW","vds-box-shadow--5":"Tabs_vds-box-shadow--5__2Na1G","vds-color--white":"Tabs_vds-color--white__gA52f","vds-color--black":"Tabs_vds-color--black__SIPvx","vds-color--cerulean-darker":"Tabs_vds-color--cerulean-darker__V3c_R","vds-color--cerulean-dark":"Tabs_vds-color--cerulean-dark__q9mt7","vds-color--cerulean":"Tabs_vds-color--cerulean__3KeFa","vds-color--cerulean-light":"Tabs_vds-color--cerulean-light__1tI_X","vds-color--cerulean-lighter":"Tabs_vds-color--cerulean-lighter___tSQv","vds-color--cerulean-lightest":"Tabs_vds-color--cerulean-lightest__sNZ0k","vds-color--slate-darker":"Tabs_vds-color--slate-darker__fl8k3","vds-color--slate-dark":"Tabs_vds-color--slate-dark__hP03i","vds-color--slate":"Tabs_vds-color--slate__Gq3_m","vds-color--slate-light":"Tabs_vds-color--slate-light__KIWKm","vds-color--slate-lighter":"Tabs_vds-color--slate-lighter__5RjZN","vds-color--slate-lightest":"Tabs_vds-color--slate-lightest__uqn_m","vds-color--silver-darker":"Tabs_vds-color--silver-darker__UH9ib","vds-color--silver-dark":"Tabs_vds-color--silver-dark___PQLz","vds-color--silver":"Tabs_vds-color--silver__5nuBv","vds-color--silver-light":"Tabs_vds-color--silver-light__gN7Ok","vds-color--silver-lighter":"Tabs_vds-color--silver-lighter__1VXUJ","vds-color--silver-lightest":"Tabs_vds-color--silver-lightest__xGia0","vds-color--red-darker":"Tabs_vds-color--red-darker__jMvhY","vds-color--red-dark":"Tabs_vds-color--red-dark__bY40Z","vds-color--red":"Tabs_vds-color--red__qIwRL","vds-color--red-light":"Tabs_vds-color--red-light__YNyE6","vds-color--red-lighter":"Tabs_vds-color--red-lighter__RNH2P","vds-color--red-lightest":"Tabs_vds-color--red-lightest__IPXnb","vds-color--orange-darker":"Tabs_vds-color--orange-darker__l1OiD","vds-color--orange-dark":"Tabs_vds-color--orange-dark__lbuY6","vds-color--orange":"Tabs_vds-color--orange__YocL5","vds-color--orange-light":"Tabs_vds-color--orange-light__U6Vw_","vds-color--orange-lighter":"Tabs_vds-color--orange-lighter___nyzn","vds-color--orange-lightest":"Tabs_vds-color--orange-lightest__tDWhe","vds-color--green-darker":"Tabs_vds-color--green-darker__T_Cgv","vds-color--green-dark":"Tabs_vds-color--green-dark__deace","vds-color--green":"Tabs_vds-color--green__8OE1I","vds-color--green-light":"Tabs_vds-color--green-light__E4J_Y","vds-color--green-lighter":"Tabs_vds-color--green-lighter__zZ7cO","vds-color--green-lightest":"Tabs_vds-color--green-lightest__GATho","vds-color--blue-darker":"Tabs_vds-color--blue-darker__jDmmD","vds-color--blue-dark":"Tabs_vds-color--blue-dark__AvYOl","vds-color--blue":"Tabs_vds-color--blue__Fjmuo","vds-color--blue-light":"Tabs_vds-color--blue-light__sbBRz","vds-color--blue-lighter":"Tabs_vds-color--blue-lighter__yfdH8","vds-color--blue-lightest":"Tabs_vds-color--blue-lightest__sKBfN","vds-color--purple-darker":"Tabs_vds-color--purple-darker__ATJFt","vds-color--purple-dark":"Tabs_vds-color--purple-dark__BCfjI","vds-color--purple":"Tabs_vds-color--purple__XvNRr","vds-color--purple-light":"Tabs_vds-color--purple-light__AMKgK","vds-color--purple-lighter":"Tabs_vds-color--purple-lighter__5aI6c","vds-color--purple-lightest":"Tabs_vds-color--purple-lightest__bXU1y","vds-color--yellow-darker":"Tabs_vds-color--yellow-darker__lzqUF","vds-color--yellow-dark":"Tabs_vds-color--yellow-dark__O44kR","vds-color--yellow":"Tabs_vds-color--yellow__IUkVg","vds-color--yellow-light":"Tabs_vds-color--yellow-light__OQeYo","vds-color--yellow-lighter":"Tabs_vds-color--yellow-lighter__iF7Er","vds-color--yellow-lightest":"Tabs_vds-color--yellow-lightest__FjOms","vds-color--teal-darker":"Tabs_vds-color--teal-darker__cJ403","vds-color--teal-dark":"Tabs_vds-color--teal-dark__u_ZCm","vds-color--teal":"Tabs_vds-color--teal__y64mr","vds-color--teal-light":"Tabs_vds-color--teal-light__2ew3r","vds-color--teal-lighter":"Tabs_vds-color--teal-lighter__135lR","vds-color--teal-lightest":"Tabs_vds-color--teal-lightest__SHIUz","vds-color--magenta-darker":"Tabs_vds-color--magenta-darker__0hwgz","vds-color--magenta-dark":"Tabs_vds-color--magenta-dark__J6EhR","vds-color--magenta":"Tabs_vds-color--magenta__QjJ6V","vds-color--magenta-light":"Tabs_vds-color--magenta-light__JF9h3","vds-color--magenta-lighter":"Tabs_vds-color--magenta-lighter__BYeXJ","vds-color--magenta-lightest":"Tabs_vds-color--magenta-lightest__WFTVY","vds-font-family--text":"Tabs_vds-font-family--text__t1Wem","vds-font-family--code":"Tabs_vds-font-family--code__CAFqd","vds-font-style--text-normal":"Tabs_vds-font-style--text-normal__NNITE","vds-font-style--text-italic":"Tabs_vds-font-style--text-italic__LMsZl","vds-font-style--code-normal":"Tabs_vds-font-style--code-normal__VnYKa","vds-font-weight--text-light":"Tabs_vds-font-weight--text-light__y_WkJ","vds-font-weight--text-regular":"Tabs_vds-font-weight--text-regular__Y0WFo","vds-font-weight--text-semibold":"Tabs_vds-font-weight--text-semibold__o_3zw","vds-font-weight--code-regular":"Tabs_vds-font-weight--code-regular__P5OdO","vds-font-weight--code-semibold":"Tabs_vds-font-weight--code-semibold__sYdpC","vds-scroll-lock":"Tabs_vds-scroll-lock__w6M8h","vds-spacing--inline-none":"Tabs_vds-spacing--inline-none__5T7Zv","vds-spacing--inline-half":"Tabs_vds-spacing--inline-half__CqruA","vds-spacing--inline-1x":"Tabs_vds-spacing--inline-1x__av_J0","vds-spacing--inline-2x":"Tabs_vds-spacing--inline-2x__5D5US","vds-spacing--inline-3x":"Tabs_vds-spacing--inline-3x__R8KTU","vds-spacing--inline-4x":"Tabs_vds-spacing--inline-4x__DByXt","vds-spacing--inline-6x":"Tabs_vds-spacing--inline-6x__7I6Wk","vds-spacing--inline-inline-half":"Tabs_vds-spacing--inline-inline-half__wT_Sr","vds-spacing--inline-inline-1x":"Tabs_vds-spacing--inline-inline-1x__rVJZM","vds-spacing--inline-inline-2x":"Tabs_vds-spacing--inline-inline-2x__mry5o","vds-spacing--inline-inline-3x":"Tabs_vds-spacing--inline-inline-3x__XfZVG","vds-spacing--inline-inline-4x":"Tabs_vds-spacing--inline-inline-4x__nvPI6","vds-spacing--inline-inline-6x":"Tabs_vds-spacing--inline-inline-6x__XjmuW","vds-spacing--inline-inset-half":"Tabs_vds-spacing--inline-inset-half__yWj0g","vds-spacing--inline-inset-1x":"Tabs_vds-spacing--inline-inset-1x__rR_3q","vds-spacing--inline-inset-2x":"Tabs_vds-spacing--inline-inset-2x__O4nLT","vds-spacing--inline-inset-3x":"Tabs_vds-spacing--inline-inset-3x__6Wxx3","vds-spacing--inline-inset-4x":"Tabs_vds-spacing--inline-inset-4x__KJ9Pi","vds-spacing--inline-inset-6x":"Tabs_vds-spacing--inline-inset-6x__8MPPS","vds-spacing--inline-stack-half":"Tabs_vds-spacing--inline-stack-half__bw9CK","vds-spacing--inline-stack-1x":"Tabs_vds-spacing--inline-stack-1x__v5R7W","vds-spacing--inline-stack-2x":"Tabs_vds-spacing--inline-stack-2x__EQmku","vds-spacing--inline-stack-3x":"Tabs_vds-spacing--inline-stack-3x__Li0FR","vds-spacing--inline-stack-4x":"Tabs_vds-spacing--inline-stack-4x__RSpDV","vds-spacing--inline-stack-6x":"Tabs_vds-spacing--inline-stack-6x__ZQzyQ","vds-spacing--inset-none":"Tabs_vds-spacing--inset-none__OdM11","vds-spacing--inset-half":"Tabs_vds-spacing--inset-half__IghkT","vds-spacing--inset-1x":"Tabs_vds-spacing--inset-1x__MwyCJ","vds-spacing--inset-2x":"Tabs_vds-spacing--inset-2x__Dc6tb","vds-spacing--inset-3x":"Tabs_vds-spacing--inset-3x__Zuxzx","vds-spacing--inset-4x":"Tabs_vds-spacing--inset-4x__1KgEf","vds-spacing--inset-6x":"Tabs_vds-spacing--inset-6x__DXKj1","vds-spacing--inset-inline-half":"Tabs_vds-spacing--inset-inline-half__son8i","vds-spacing--inset-inline-1x":"Tabs_vds-spacing--inset-inline-1x__tjeC7","vds-spacing--inset-inline-2x":"Tabs_vds-spacing--inset-inline-2x__ki0Ns","vds-spacing--inset-inline-3x":"Tabs_vds-spacing--inset-inline-3x__xKsxa","vds-spacing--inset-inline-4x":"Tabs_vds-spacing--inset-inline-4x__7YzgO","vds-spacing--inset-inline-6x":"Tabs_vds-spacing--inset-inline-6x__KZJEU","vds-spacing--inset-inset-half":"Tabs_vds-spacing--inset-inset-half__3KTPY","vds-spacing--inset-inset-1x":"Tabs_vds-spacing--inset-inset-1x__I2dkl","vds-spacing--inset-inset-2x":"Tabs_vds-spacing--inset-inset-2x__PYZk5","vds-spacing--inset-inset-3x":"Tabs_vds-spacing--inset-inset-3x__GBk24","vds-spacing--inset-inset-4x":"Tabs_vds-spacing--inset-inset-4x__iA74N","vds-spacing--inset-inset-6x":"Tabs_vds-spacing--inset-inset-6x__QbQ6X","vds-spacing--inset-stack-half":"Tabs_vds-spacing--inset-stack-half__SWZ_i","vds-spacing--inset-stack-1x":"Tabs_vds-spacing--inset-stack-1x__wcP9E","vds-spacing--inset-stack-2x":"Tabs_vds-spacing--inset-stack-2x__UcZUH","vds-spacing--inset-stack-3x":"Tabs_vds-spacing--inset-stack-3x__76RoU","vds-spacing--inset-stack-4x":"Tabs_vds-spacing--inset-stack-4x__xFum9","vds-spacing--inset-stack-6x":"Tabs_vds-spacing--inset-stack-6x__bLS0g","vds-spacing--stack-none":"Tabs_vds-spacing--stack-none__JAU3A","vds-spacing--stack-half":"Tabs_vds-spacing--stack-half__lypxr","vds-spacing--stack-1x":"Tabs_vds-spacing--stack-1x__pbxrD","vds-spacing--stack-2x":"Tabs_vds-spacing--stack-2x__OGQFi","vds-spacing--stack-3x":"Tabs_vds-spacing--stack-3x__6mtm3","vds-spacing--stack-4x":"Tabs_vds-spacing--stack-4x__AsYMl","vds-spacing--stack-6x":"Tabs_vds-spacing--stack-6x__h5pEO","vds-spacing--stack-inline-half":"Tabs_vds-spacing--stack-inline-half__7GXw3","vds-spacing--stack-inline-1x":"Tabs_vds-spacing--stack-inline-1x__CcL2G","vds-spacing--stack-inline-2x":"Tabs_vds-spacing--stack-inline-2x__m3rpX","vds-spacing--stack-inline-3x":"Tabs_vds-spacing--stack-inline-3x__MKcya","vds-spacing--stack-inline-4x":"Tabs_vds-spacing--stack-inline-4x__gImAl","vds-spacing--stack-inline-6x":"Tabs_vds-spacing--stack-inline-6x__1S88M","vds-spacing--stack-inset-half":"Tabs_vds-spacing--stack-inset-half__0hymP","vds-spacing--stack-inset-1x":"Tabs_vds-spacing--stack-inset-1x___3_Tc","vds-spacing--stack-inset-2x":"Tabs_vds-spacing--stack-inset-2x__2M6bo","vds-spacing--stack-inset-3x":"Tabs_vds-spacing--stack-inset-3x__QyMdC","vds-spacing--stack-inset-4x":"Tabs_vds-spacing--stack-inset-4x__NORHV","vds-spacing--stack-inset-6x":"Tabs_vds-spacing--stack-inset-6x__r55FN","vds-spacing--stack-stack-half":"Tabs_vds-spacing--stack-stack-half__wSSz2","vds-spacing--stack-stack-1x":"Tabs_vds-spacing--stack-stack-1x__GwIPe","vds-spacing--stack-stack-2x":"Tabs_vds-spacing--stack-stack-2x__wLcyk","vds-spacing--stack-stack-3x":"Tabs_vds-spacing--stack-stack-3x__zNYu0","vds-spacing--stack-stack-4x":"Tabs_vds-spacing--stack-stack-4x__mbUEZ","vds-spacing--stack-stack-6x":"Tabs_vds-spacing--stack-stack-6x__aJHV5","vds-text-align--left":"Tabs_vds-text-align--left__CqPOl","vds-text-align--center":"Tabs_vds-text-align--center__6fK3E","vds-text-align--right":"Tabs_vds-text-align--right__tQb0N","vds-text-transform--none":"Tabs_vds-text-transform--none__Q5L4L","vds-text-transform--capitalize":"Tabs_vds-text-transform--capitalize__VNJY_","vds-text-transform--lowercase":"Tabs_vds-text-transform--lowercase__meRQH","vds-text-transform--uppercase":"Tabs_vds-text-transform--uppercase__vpzgT","vds-visually-hidden":"Tabs_vds-visually-hidden__FYprN","tabs-selector-container":"Tabs_tabs-selector-container__a0MwF"}}}]);