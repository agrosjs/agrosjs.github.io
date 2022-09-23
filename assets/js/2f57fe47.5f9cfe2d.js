"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[9707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<s;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={},l=void 0,o={unversionedId:"api/agros-tools/classes/ModuleInstance",id:"api/agros-tools/classes/ModuleInstance",title:"ModuleInstance",description:"@agros/tools / ModuleInstance",source:"@site/docs/api/agros-tools/classes/ModuleInstance.md",sourceDirName:"api/agros-tools/classes",slug:"/api/agros-tools/classes/ModuleInstance",permalink:"/docs/next/api/agros-tools/classes/ModuleInstance",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-tools/classes/ModuleInstance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ComponentInstance",permalink:"/docs/next/api/agros-tools/classes/ComponentInstance"},next:{title:"AddImportedEntityToModuleOptions",permalink:"/docs/next/api/agros-tools/interfaces/AddImportedEntityToModuleOptions"}},i={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:'<a id="constructor" name="constructor"></a> constructor',id:"-constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:'<a id="importedmoduleinstances" name="importedmoduleinstances"></a> importedModuleInstances',id:"-importedmoduleinstances",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="metadata" name="metadata"></a> metadata',id:"-metadata",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="valueprovidermap" name="valueprovidermap"></a> valueProviderMap',id:"-valueprovidermap",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="addimportedmoduleinstance" name="addimportedmoduleinstance"></a> addImportedModuleInstance',id:"-addimportedmoduleinstance",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="generateprovidervalues" name="generateprovidervalues"></a> generateProviderValues',id:"-generateprovidervalues",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="getimportedmoduleinstances" name="getimportedmoduleinstances"></a> getImportedModuleInstances',id:"-getimportedmoduleinstances",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="getproviderclasses" name="getproviderclasses"></a> getProviderClasses',id:"-getproviderclasses",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="getprovidervalue" name="getprovidervalue"></a> getProviderValue',id:"-getprovidervalue",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:'<a id="hasdependedproviderclass" name="hasdependedproviderclass"></a> hasDependedProviderClass',id:"-hasdependedproviderclass",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="setvalueprovideritem" name="setvalueprovideritem"></a> setValueProviderItem',id:"-setvalueprovideritem",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/"},"@agros/tools")," / ModuleInstance"),(0,r.kt)("h1",{id:"class-moduleinstance"},"Class: ModuleInstance"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#importedmoduleinstances"},"importedModuleInstances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#metadata"},"metadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#valueprovidermap"},"valueProviderMap"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#addimportedmoduleinstance"},"addImportedModuleInstance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#generateprovidervalues"},"generateProviderValues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#getimportedmoduleinstances"},"getImportedModuleInstances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#getproviderclasses"},"getProviderClasses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#getprovidervalue"},"getProviderValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#hasdependedproviderclass"},"hasDependedProviderClass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/agros-tools/classes/ModuleInstance#setvalueprovideritem"},"setValueProviderItem"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"-constructor"},(0,r.kt)("a",{id:"constructor",name:"constructor"})," constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ModuleInstance"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"globalModuleInstances"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/agros-tools/interfaces/ModuleInstanceMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstanceMetadata")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"globalModuleInstances")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Set"),"<",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L19"},"packages/agros-tools/src/module-instance.class.ts:19")),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-importedmoduleinstances"},(0,r.kt)("a",{id:"importedmoduleinstances",name:"importedmoduleinstances"})," importedModuleInstances"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"importedModuleInstances"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L12"},"packages/agros-tools/src/module-instance.class.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-metadata"},(0,r.kt)("a",{id:"metadata",name:"metadata"})," metadata"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"metadata"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/interfaces/ModuleInstanceMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstanceMetadata"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L20"},"packages/agros-tools/src/module-instance.class.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-valueprovidermap"},(0,r.kt)("a",{id:"valueprovidermap",name:"valueprovidermap"})," valueProviderMap"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"valueProviderMap"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L13"},"packages/agros-tools/src/module-instance.class.ts:13")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"-addimportedmoduleinstance"},(0,r.kt)("a",{id:"addimportedmoduleinstance",name:"addimportedmoduleinstance"})," addImportedModuleInstance"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addImportedModuleInstance"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"moduleInstance"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"moduleInstance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L24"},"packages/agros-tools/src/module-instance.class.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-generateprovidervalues"},(0,r.kt)("a",{id:"generateprovidervalues",name:"generateprovidervalues"})," generateProviderValues"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"generateProviderValues"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/agros-tools/interfaces/Factory"},(0,r.kt)("inlineCode",{parentName:"a"},"Factory")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L72"},"packages/agros-tools/src/module-instance.class.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getimportedmoduleinstances"},(0,r.kt)("a",{id:"getimportedmoduleinstances",name:"getimportedmoduleinstances"})," getImportedModuleInstances"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getImportedModuleInstances"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L34"},"packages/agros-tools/src/module-instance.class.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getproviderclasses"},(0,r.kt)("a",{id:"getproviderclasses",name:"getproviderclasses"})," getProviderClasses"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getProviderClasses"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("p",null,"get provider classes recursively from imported modules"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L42"},"packages/agros-tools/src/module-instance.class.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getprovidervalue"},(0,r.kt)("a",{id:"getprovidervalue",name:"getprovidervalue"})," getProviderValue"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getProviderValue"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L80"},"packages/agros-tools/src/module-instance.class.ts:80")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-hasdependedproviderclass"},(0,r.kt)("a",{id:"hasdependedproviderclass",name:"hasdependedproviderclass"})," hasDependedProviderClass"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"hasDependedProviderClass"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderClass"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ProviderClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L64"},"packages/agros-tools/src/module-instance.class.ts:64")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-setvalueprovideritem"},(0,r.kt)("a",{id:"setvalueprovideritem",name:"setvalueprovideritem"})," setValueProviderItem"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setValueProviderItem"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/19ac562/packages/agros-tools/src/module-instance.class.ts#L68"},"packages/agros-tools/src/module-instance.class.ts:68")))}m.isMDXComponent=!0}}]);