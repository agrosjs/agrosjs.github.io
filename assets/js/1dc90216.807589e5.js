"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[1133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,u=c["".concat(s,".").concat(k)]||c[k]||p[k]||o;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},l=void 0,i={unversionedId:"api/agros-common/index",id:"version-1.1.x/api/agros-common/index",title:"index",description:"@agros/common",source:"@site/versioned_docs/version-1.1.x/api/agros-common/index.md",sourceDirName:"api/agros-common",slug:"/api/agros-common/",permalink:"/docs/1.1.x/api/agros-common/",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.1.x/api/agros-common/index.md",tags:[],version:"1.1.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/1.1.x/api/agros-cli/"},next:{title:"RouterModule",permalink:"/docs/1.1.x/api/agros-common/classes/RouterModule"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Classes",id:"classes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:'<a id="di_deps_symbol" name="di_deps_symbol"></a> DI_DEPS_SYMBOL',id:"-di_deps_symbol",level:3},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="di_global_module_symbol" name="di_global_module_symbol"></a> DI_GLOBAL_MODULE_SYMBOL',id:"-di_global_module_symbol",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="di_metadata_component_symbol" name="di_metadata_component_symbol"></a> DI_METADATA_COMPONENT_SYMBOL',id:"-di_metadata_component_symbol",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="di_metadata_module_symbol" name="di_metadata_module_symbol"></a> DI_METADATA_MODULE_SYMBOL',id:"-di_metadata_module_symbol",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="di_metadata_param_base_provider_symbol" name="di_metadata_param_base_provider_symbol"></a> DI_METADATA_PARAM_BASE_PROVIDER_SYMBOL',id:"-di_metadata_param_base_provider_symbol",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="di_metadata_use_interceptors_symbol" name="di_metadata_use_interceptors_symbol"></a> DI_METADATA_USE_INTERCEPTORS_SYMBOL',id:"-di_metadata_use_interceptors_symbol",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="is_dynamic_module" name="is_dynamic_module"></a> IS_DYNAMIC_MODULE',id:"-is_dynamic_module",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="routes" name="routes"></a> ROUTES',id:"-routes",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="self_declared_deps_metadata" name="self_declared_deps_metadata"></a> SELF_DECLARED_DEPS_METADATA',id:"-self_declared_deps_metadata",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Functions",id:"functions-1",level:2},{value:'<a id="component" name="component"></a> Component',id:"-component",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="global" name="global"></a> Global',id:"-global",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="inject" name="inject"></a> Inject',id:"-inject",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-11",level:4},{value:'<a id="injectable" name="injectable"></a> Injectable',id:"-injectable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:'<a id="module" name="module"></a> Module',id:"-module",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:'<a id="useinterceptors" name="useinterceptors"></a> UseInterceptors',id:"-useinterceptors",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-14",level:4}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"@agros/common"),(0,r.kt)("h1",{id:"agroscommon"},"@agros/common"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/classes/RouterModule"},"RouterModule"))),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/interfaces/Interceptor"},"Interceptor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/interfaces/RouterModuleAsyncOptions"},"RouterModuleAsyncOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/interfaces/RouterModuleOptions"},"RouterModuleOptions"))),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#di_deps_symbol"},"DI","_","DEPS","_","SYMBOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#di_global_module_symbol"},"DI","_","GLOBAL","_","MODULE","_","SYMBOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#di_metadata_component_symbol"},"DI","_","METADATA","_","COMPONENT","_","SYMBOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#di_metadata_module_symbol"},"DI","_","METADATA","_","MODULE","_","SYMBOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#di_metadata_param_base_provider_symbol"},"DI","_","METADATA","_","PARAM","_","BASE","_","PROVIDER","_","SYMBOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#di_metadata_use_interceptors_symbol"},"DI","_","METADATA","_","USE","_","INTERCEPTORS","_","SYMBOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#is_dynamic_module"},"IS","_","DYNAMIC","_","MODULE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#routes"},"ROUTES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#self_declared_deps_metadata"},"SELF","_","DECLARED","_","DEPS","_","METADATA"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#global"},"Global")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#inject"},"Inject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#injectable"},"Injectable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#module"},"Module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-common/#useinterceptors"},"UseInterceptors"))),(0,r.kt)("h2",{id:"variables-1"},"Variables"),(0,r.kt)("h3",{id:"-di_deps_symbol"},(0,r.kt)("a",{id:"di_deps_symbol",name:"di_deps_symbol"})," DI","_","DEPS","_","SYMBOL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DI","_","DEPS","_","SYMBOL"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-common/#di_deps_symbol"},(0,r.kt)("inlineCode",{parentName:"a"},"DI_DEPS_SYMBOL"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L1"},"agros-common/src/constants.ts:1")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-di_global_module_symbol"},(0,r.kt)("a",{id:"di_global_module_symbol",name:"di_global_module_symbol"})," DI","_","GLOBAL","_","MODULE","_","SYMBOL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DI","_","GLOBAL","_","MODULE","_","SYMBOL"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-common/#di_global_module_symbol"},(0,r.kt)("inlineCode",{parentName:"a"},"DI_GLOBAL_MODULE_SYMBOL"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L2"},"agros-common/src/constants.ts:2")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-di_metadata_component_symbol"},(0,r.kt)("a",{id:"di_metadata_component_symbol",name:"di_metadata_component_symbol"})," DI","_","METADATA","_","COMPONENT","_","SYMBOL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","COMPONENT","_","SYMBOL"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-common/#di_metadata_component_symbol"},(0,r.kt)("inlineCode",{parentName:"a"},"DI_METADATA_COMPONENT_SYMBOL"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L5"},"agros-common/src/constants.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-di_metadata_module_symbol"},(0,r.kt)("a",{id:"di_metadata_module_symbol",name:"di_metadata_module_symbol"})," DI","_","METADATA","_","MODULE","_","SYMBOL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","MODULE","_","SYMBOL"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-common/#di_metadata_module_symbol"},(0,r.kt)("inlineCode",{parentName:"a"},"DI_METADATA_MODULE_SYMBOL"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L4"},"agros-common/src/constants.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-di_metadata_param_base_provider_symbol"},(0,r.kt)("a",{id:"di_metadata_param_base_provider_symbol",name:"di_metadata_param_base_provider_symbol"})," DI","_","METADATA","_","PARAM","_","BASE","_","PROVIDER","_","SYMBOL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","PARAM","_","BASE","_","PROVIDER","_","SYMBOL"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-common/#di_metadata_param_base_provider_symbol"},(0,r.kt)("inlineCode",{parentName:"a"},"DI_METADATA_PARAM_BASE_PROVIDER_SYMBOL"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L7"},"agros-common/src/constants.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-di_metadata_use_interceptors_symbol"},(0,r.kt)("a",{id:"di_metadata_use_interceptors_symbol",name:"di_metadata_use_interceptors_symbol"})," DI","_","METADATA","_","USE","_","INTERCEPTORS","_","SYMBOL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DI","_","METADATA","_","USE","_","INTERCEPTORS","_","SYMBOL"),": typeof ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-common/#di_metadata_use_interceptors_symbol"},(0,r.kt)("inlineCode",{parentName:"a"},"DI_METADATA_USE_INTERCEPTORS_SYMBOL"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L6"},"agros-common/src/constants.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-is_dynamic_module"},(0,r.kt)("a",{id:"is_dynamic_module",name:"is_dynamic_module"})," IS","_","DYNAMIC","_","MODULE"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"IS","_","DYNAMIC","_","MODULE"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"IS_DYNAMIC_MODULE"')),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L12"},"agros-common/src/constants.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-routes"},(0,r.kt)("a",{id:"routes",name:"routes"})," ROUTES"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"ROUTES"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"agros:internal:routes"')),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L9"},"agros-common/src/constants.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-self_declared_deps_metadata"},(0,r.kt)("a",{id:"self_declared_deps_metadata",name:"self_declared_deps_metadata"})," SELF","_","DECLARED","_","DEPS","_","METADATA"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"SELF","_","DECLARED","_","DEPS","_","METADATA"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"self:paramtypes"')),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/constants.ts#L11"},"agros-common/src/constants.ts:11")),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"-component"},(0,r.kt)("a",{id:"component",name:"component"})," Component"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"Component"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ComponentDecoratorOptions"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/decorators/component.decorator.ts#L8"},"agros-common/src/decorators/component.decorator.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-global"},(0,r.kt)("a",{id:"global",name:"global"})," Global"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"Global"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/decorators/global.decorator.ts#L4"},"agros-common/src/decorators/global.decorator.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-inject"},(0,r.kt)("a",{id:"inject",name:"inject"})," Inject"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"Inject"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"token?"),"): (",(0,r.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/decorators/inject.decorator.ts#L6"},"agros-common/src/decorators/inject.decorator.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-injectable"},(0,r.kt)("a",{id:"injectable",name:"injectable"})," Injectable"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"Injectable"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/decorators/injectable.decorator.ts#L4"},"agros-common/src/decorators/injectable.decorator.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-module"},(0,r.kt)("a",{id:"module",name:"module"})," Module"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"Module"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ModuleDecoratorOptions"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/decorators/module.decorator.ts#L8"},"agros-common/src/decorators/module.decorator.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-useinterceptors"},(0,r.kt)("a",{id:"useinterceptors",name:"useinterceptors"})," UseInterceptors"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"UseInterceptors"),"(...",(0,r.kt)("inlineCode",{parentName:"p"},"interceptors"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"...interceptors")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UseInterceptorsDecoratorOptions"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassDecorator")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-common/src/decorators/use-interceptors.decorator.ts#L5"},"agros-common/src/decorators/use-interceptors.decorator.ts:5")))}p.isMDXComponent=!0}}]);