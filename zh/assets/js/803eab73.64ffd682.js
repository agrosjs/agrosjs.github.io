"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[8554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=o,k=u["".concat(s,".").concat(c)]||u[c]||p[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={},l=void 0,i={unversionedId:"api/agros-common/index",id:"api/agros-common/index",title:"index",description:"@agros/common",source:"@site/docs/api/agros-common/index.md",sourceDirName:"api/agros-common",slug:"/api/agros-common/",permalink:"/zh/docs/next/api/agros-common/",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-common/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/zh/docs/next/api/agros-cli/"},next:{title:"RouterModule",permalink:"/zh/docs/next/api/agros-common/classes/RouterModule"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Classes",id:"classes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:'<a id="routermodulefeatureoptions" name="routermodulefeatureoptions"></a> RouterModuleFeatureOptions',id:"-routermodulefeatureoptions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Variables",id:"variables-1",level:2},{value:'<a id="di_deps_symbol" name="di_deps_symbol"></a> DI_DEPS_SYMBOL',id:"-di_deps_symbol",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="di_global_module_symbol" name="di_global_module_symbol"></a> DI_GLOBAL_MODULE_SYMBOL',id:"-di_global_module_symbol",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="di_metadata_component_symbol" name="di_metadata_component_symbol"></a> DI_METADATA_COMPONENT_SYMBOL',id:"-di_metadata_component_symbol",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="di_metadata_module_symbol" name="di_metadata_module_symbol"></a> DI_METADATA_MODULE_SYMBOL',id:"-di_metadata_module_symbol",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="di_metadata_use_interceptors_symbol" name="di_metadata_use_interceptors_symbol"></a> DI_METADATA_USE_INTERCEPTORS_SYMBOL',id:"-di_metadata_use_interceptors_symbol",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="routes_feature" name="routes_feature"></a> ROUTES_FEATURE',id:"-routes_feature",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="routes_root" name="routes_root"></a> ROUTES_ROOT',id:"-routes_root",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Functions",id:"functions-1",level:2},{value:'<a id="component" name="component"></a> Component',id:"-component",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:'<a id="global" name="global"></a> Global',id:"-global",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="injectable" name="injectable"></a> Injectable',id:"-injectable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="module" name="module"></a> Module',id:"-module",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:'<a id="useinterceptors" name="useinterceptors"></a> UseInterceptors',id:"-useinterceptors",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-12",level:4}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"@agros/common"),(0,o.kt)("h1",{id:"agroscommon"},"@agros/common"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"classes"},"Classes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/classes/RouterModule"},"RouterModule"))),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/interfaces/Interceptor"},"Interceptor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/interfaces/RouterModuleRootOptions"},"RouterModuleRootOptions"))),(0,o.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#routermodulefeatureoptions"},"RouterModuleFeatureOptions"))),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#di_deps_symbol"},"DI","_","DEPS","_","SYMBOL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#di_global_module_symbol"},"DI","_","GLOBAL","_","MODULE","_","SYMBOL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#di_metadata_component_symbol"},"DI","_","METADATA","_","COMPONENT","_","SYMBOL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#di_metadata_module_symbol"},"DI","_","METADATA","_","MODULE","_","SYMBOL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#di_metadata_use_interceptors_symbol"},"DI","_","METADATA","_","USE","_","INTERCEPTORS","_","SYMBOL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#routes_feature"},"ROUTES","_","FEATURE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#routes_root"},"ROUTES","_","ROOT"))),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#component"},"Component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#global"},"Global")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#injectable"},"Injectable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#module"},"Module")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-common/#useinterceptors"},"UseInterceptors"))),(0,o.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,o.kt)("h3",{id:"-routermodulefeatureoptions"},(0,o.kt)("a",{id:"routermodulefeatureoptions",name:"routermodulefeatureoptions"})," RouterModuleFeatureOptions"),(0,o.kt)("p",null,"\u01ac ",(0,o.kt)("strong",{parentName:"p"},"RouterModuleFeatureOptions"),": ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-common/interfaces/RouterModuleRootOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"RouterModuleRootOptions"))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/modules/router.module.ts#L19"},"agros-common/src/modules/router.module.ts:19")),(0,o.kt)("h2",{id:"variables-1"},"Variables"),(0,o.kt)("h3",{id:"-di_deps_symbol"},(0,o.kt)("a",{id:"di_deps_symbol",name:"di_deps_symbol"})," DI","_","DEPS","_","SYMBOL"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"DI","_","DEPS","_","SYMBOL"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-common/#di_deps_symbol"},(0,o.kt)("inlineCode",{parentName:"a"},"DI_DEPS_SYMBOL"))),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L1"},"agros-common/src/constants.ts:1")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-di_global_module_symbol"},(0,o.kt)("a",{id:"di_global_module_symbol",name:"di_global_module_symbol"})," DI","_","GLOBAL","_","MODULE","_","SYMBOL"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"DI","_","GLOBAL","_","MODULE","_","SYMBOL"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-common/#di_global_module_symbol"},(0,o.kt)("inlineCode",{parentName:"a"},"DI_GLOBAL_MODULE_SYMBOL"))),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L2"},"agros-common/src/constants.ts:2")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-di_metadata_component_symbol"},(0,o.kt)("a",{id:"di_metadata_component_symbol",name:"di_metadata_component_symbol"})," DI","_","METADATA","_","COMPONENT","_","SYMBOL"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","COMPONENT","_","SYMBOL"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-common/#di_metadata_component_symbol"},(0,o.kt)("inlineCode",{parentName:"a"},"DI_METADATA_COMPONENT_SYMBOL"))),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L5"},"agros-common/src/constants.ts:5")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-di_metadata_module_symbol"},(0,o.kt)("a",{id:"di_metadata_module_symbol",name:"di_metadata_module_symbol"})," DI","_","METADATA","_","MODULE","_","SYMBOL"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","MODULE","_","SYMBOL"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-common/#di_metadata_module_symbol"},(0,o.kt)("inlineCode",{parentName:"a"},"DI_METADATA_MODULE_SYMBOL"))),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L4"},"agros-common/src/constants.ts:4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-di_metadata_use_interceptors_symbol"},(0,o.kt)("a",{id:"di_metadata_use_interceptors_symbol",name:"di_metadata_use_interceptors_symbol"})," DI","_","METADATA","_","USE","_","INTERCEPTORS","_","SYMBOL"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","USE","_","INTERCEPTORS","_","SYMBOL"),": typeof ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-common/#di_metadata_use_interceptors_symbol"},(0,o.kt)("inlineCode",{parentName:"a"},"DI_METADATA_USE_INTERCEPTORS_SYMBOL"))),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L6"},"agros-common/src/constants.ts:6")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-routes_feature"},(0,o.kt)("a",{id:"routes_feature",name:"routes_feature"})," ROUTES","_","FEATURE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"ROUTES","_","FEATURE"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"agros:internal:routes:feature"')),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L9"},"agros-common/src/constants.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-routes_root"},(0,o.kt)("a",{id:"routes_root",name:"routes_root"})," ROUTES","_","ROOT"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"ROUTES","_","ROOT"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"agros:internal:routes:root"')),(0,o.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/constants.ts#L8"},"agros-common/src/constants.ts:8")),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"-component"},(0,o.kt)("a",{id:"component",name:"component"})," Component"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"Component"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ComponentDecoratorOptions"),"<",(0,o.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/decorators/component.decorator.ts#L8"},"agros-common/src/decorators/component.decorator.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-global"},(0,o.kt)("a",{id:"global",name:"global"})," Global"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"Global"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/decorators/global.decorator.ts#L4"},"agros-common/src/decorators/global.decorator.ts:4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-injectable"},(0,o.kt)("a",{id:"injectable",name:"injectable"})," Injectable"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"Injectable"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/decorators/injectable.decorator.ts#L4"},"agros-common/src/decorators/injectable.decorator.ts:4")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-module"},(0,o.kt)("a",{id:"module",name:"module"})," Module"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"Module"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ModuleDecoratorOptions"))))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/decorators/module.decorator.ts#L8"},"agros-common/src/decorators/module.decorator.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-useinterceptors"},(0,o.kt)("a",{id:"useinterceptors",name:"useinterceptors"})," UseInterceptors"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"UseInterceptors"),"(...",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"...interceptors")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"UseInterceptorsDecoratorOptions"))))),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,o.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/4a028b2/packages/agros-common/src/decorators/use-interceptors.decorator.ts#L5"},"agros-common/src/decorators/use-interceptors.decorator.ts:5")))}p.isMDXComponent=!0}}]);