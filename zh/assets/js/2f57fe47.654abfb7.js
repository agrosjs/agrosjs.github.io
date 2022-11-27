"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[9707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={},o=void 0,l={unversionedId:"api/agros-tools/classes/ModuleInstance",id:"api/agros-tools/classes/ModuleInstance",title:"ModuleInstance",description:"@agros/tools / ModuleInstance",source:"@site/docs/api/agros-tools/classes/ModuleInstance.md",sourceDirName:"api/agros-tools/classes",slug:"/api/agros-tools/classes/ModuleInstance",permalink:"/zh/docs/next/api/agros-tools/classes/ModuleInstance",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-tools/classes/ModuleInstance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentInstance",permalink:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},next:{title:"AddImportedEntityToModuleOptions",permalink:"/zh/docs/next/api/agros-tools/interfaces/AddImportedEntityToModuleOptions"}},i={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:'<a id="constructor" name="constructor"></a> constructor',id:"-constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:'<a id="importedmoduleinstances" name="importedmoduleinstances"></a> importedModuleInstances',id:"-importedmoduleinstances",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="metadata" name="metadata"></a> metadata',id:"-metadata",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="addimportedmoduleinstance" name="addimportedmoduleinstance"></a> addImportedModuleInstance',id:"-addimportedmoduleinstance",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="generatebaseprovidervalue" name="generatebaseprovidervalue"></a> generateBaseProviderValue',id:"-generatebaseprovidervalue",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="getbaseprovider" name="getbaseprovider"></a> getBaseProvider',id:"-getbaseprovider",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="getimportedmoduleinstances" name="getimportedmoduleinstances"></a> getImportedModuleInstances',id:"-getimportedmoduleinstances",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="getproviders" name="getproviders"></a> getProviders',id:"-getproviders",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="hasdependedproviderclass" name="hasdependedproviderclass"></a> hasDependedProviderClass',id:"-hasdependedproviderclass",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:'<a id="setbaseproviderwithvalue" name="setbaseproviderwithvalue"></a> setBaseProviderWithValue',id:"-setbaseproviderwithvalue",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/"},"@agros/tools")," / ModuleInstance"),(0,r.kt)("h1",{id:"class-moduleinstance"},"Class: ModuleInstance"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#importedmoduleinstances"},"importedModuleInstances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#metadata"},"metadata"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#addimportedmoduleinstance"},"addImportedModuleInstance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#generatebaseprovidervalue"},"generateBaseProviderValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#getbaseprovider"},"getBaseProvider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#getimportedmoduleinstances"},"getImportedModuleInstances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#getproviders"},"getProviders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#hasdependedproviderclass"},"hasDependedProviderClass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance#setbaseproviderwithvalue"},"setBaseProviderWithValue"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"-constructor"},(0,r.kt)("a",{id:"constructor",name:"constructor"})," constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ModuleInstance"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"globalModuleInstances"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamicModuleInstanceList"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/interfaces/ModuleInstanceMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstanceMetadata")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globalModuleInstances")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Set"),"<",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dynamicModuleInstanceList")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/interfaces/DynamicModuleListItem"},(0,r.kt)("inlineCode",{parentName:"a"},"DynamicModuleListItem")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">","[]")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L27"},"packages/agros-tools/src/module-instance.class.ts:27")),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-importedmoduleinstances"},(0,r.kt)("a",{id:"importedmoduleinstances",name:"importedmoduleinstances"})," importedModuleInstances"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"importedModuleInstances"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L21"},"packages/agros-tools/src/module-instance.class.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-metadata"},(0,r.kt)("a",{id:"metadata",name:"metadata"})," metadata"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"metadata"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/interfaces/ModuleInstanceMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstanceMetadata"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L28"},"packages/agros-tools/src/module-instance.class.ts:28")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"-addimportedmoduleinstance"},(0,r.kt)("a",{id:"addimportedmoduleinstance",name:"addimportedmoduleinstance"})," addImportedModuleInstance"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addImportedModuleInstance"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"moduleInstance"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"moduleInstance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L43"},"packages/agros-tools/src/module-instance.class.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-generatebaseprovidervalue"},(0,r.kt)("a",{id:"generatebaseprovidervalue",name:"generatebaseprovidervalue"})," generateBaseProviderValue"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"generateBaseProviderValue"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"createProviderInstance?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#baseprovider"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseProvider")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"createProviderInstance?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"Class"),": ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">",") => ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L129"},"packages/agros-tools/src/module-instance.class.ts:129")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getbaseprovider"},(0,r.kt)("a",{id:"getbaseprovider",name:"getbaseprovider"})," getBaseProvider"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBaseProvider"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"providerKey"),"): ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#baseproviderwithvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseProviderWithValue")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"providerKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#providertoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderToken")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#baseproviderwithvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseProviderWithValue")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L110"},"packages/agros-tools/src/module-instance.class.ts:110")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getimportedmoduleinstances"},(0,r.kt)("a",{id:"getimportedmoduleinstances",name:"getimportedmoduleinstances"})," getImportedModuleInstances"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getImportedModuleInstances"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L53"},"packages/agros-tools/src/module-instance.class.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getproviders"},(0,r.kt)("a",{id:"getproviders",name:"getproviders"})," getProviders"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getProviders"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"get provider classes recursively from imported modules"),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L61"},"packages/agros-tools/src/module-instance.class.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-hasdependedproviderclass"},(0,r.kt)("a",{id:"hasdependedproviderclass",name:"hasdependedproviderclass"})," hasDependedProviderClass"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"hasDependedProviderClass"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"providerKey"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"providerKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">"," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#providertoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderToken")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L118"},"packages/agros-tools/src/module-instance.class.ts:118")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-setbaseproviderwithvalue"},(0,r.kt)("a",{id:"setbaseproviderwithvalue",name:"setbaseproviderwithvalue"})," setBaseProviderWithValue"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setBaseProviderWithValue"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"providerToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"baseProviderWithValue"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"providerToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#providertoken"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderToken")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseProviderWithValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#baseproviderwithvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseProviderWithValue")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e5e3da1/packages/agros-tools/src/module-instance.class.ts#L158"},"packages/agros-tools/src/module-instance.class.ts:158")))}m.isMDXComponent=!0}}]);