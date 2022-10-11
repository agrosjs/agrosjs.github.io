"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[1015],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,u=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(u,p(p({ref:t},d),{},{components:a})):n.createElement(u,p({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},p=void 0,l={unversionedId:"api/agros-tools/interfaces/Factory",id:"api/agros-tools/interfaces/Factory",title:"Factory",description:"@agros/tools / Factory",source:"@site/docs/api/agros-tools/interfaces/Factory.md",sourceDirName:"api/agros-tools/interfaces",slug:"/api/agros-tools/interfaces/Factory",permalink:"/zh/docs/next/api/agros-tools/interfaces/Factory",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-tools/interfaces/Factory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EntryTailCodeData",permalink:"/zh/docs/next/api/agros-tools/interfaces/EntryTailCodeData"},next:{title:"FactoryCode",permalink:"/zh/docs/next/api/agros-tools/interfaces/FactoryCode"}},i={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="create" name="create"></a> create',id:"-create",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="generatedependencymap" name="generatedependencymap"></a> generateDependencyMap',id:"-generatedependencymap",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="getcomponentinstancemap" name="getcomponentinstancemap"></a> getComponentInstanceMap',id:"-getcomponentinstancemap",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="getmoduleinstancemap" name="getmoduleinstancemap"></a> getModuleInstanceMap',id:"-getmoduleinstancemap",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="getrootmoduleinstance" name="getrootmoduleinstance"></a> getRootModuleInstance',id:"-getrootmoduleinstance",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/"},"@agros/tools")," / Factory"),(0,r.kt)("h1",{id:"interface-factory"},"Interface: Factory"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/interfaces/Factory#create"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/interfaces/Factory#generatedependencymap"},"generateDependencyMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/interfaces/Factory#getcomponentinstancemap"},"getComponentInstanceMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/interfaces/Factory#getmoduleinstancemap"},"getModuleInstanceMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/api/agros-tools/interfaces/Factory#getrootmoduleinstance"},"getRootModuleInstance"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-create"},(0,r.kt)("a",{id:"create",name:"create"})," create"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"create"),": <T",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleClass"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 <",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleClass"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),">"),(0,r.kt)("h5",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ModuleClass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/8812b02/packages/agros-tools/src/types.ts#L117"},"packages/agros-tools/src/types.ts:117")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-generatedependencymap"},(0,r.kt)("a",{id:"generatedependencymap",name:"generatedependencymap"})," generateDependencyMap"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"generateDependencyMap"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"componentInstanceOrId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"componentInstanceOrId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentInstanceOrId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/8812b02/packages/agros-tools/src/types.ts#L118"},"packages/agros-tools/src/types.ts:118")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getcomponentinstancemap"},(0,r.kt)("a",{id:"getcomponentinstancemap",name:"getcomponentinstancemap"})," getComponentInstanceMap"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getComponentInstanceMap"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),">"),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ComponentInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentInstance")),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/8812b02/packages/agros-tools/src/types.ts#L121"},"packages/agros-tools/src/types.ts:121")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getmoduleinstancemap"},(0,r.kt)("a",{id:"getmoduleinstancemap",name:"getmoduleinstancemap"})," getModuleInstanceMap"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getModuleInstanceMap"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/#type"},(0,r.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">",", ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance")),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/8812b02/packages/agros-tools/src/types.ts#L119"},"packages/agros-tools/src/types.ts:119")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getrootmoduleinstance"},(0,r.kt)("a",{id:"getrootmoduleinstance",name:"getrootmoduleinstance"})," getRootModuleInstance"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getRootModuleInstance"),": () => ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance"))),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance"))),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/api/agros-tools/classes/ModuleInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleInstance"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/8812b02/packages/agros-tools/src/types.ts#L120"},"packages/agros-tools/src/types.ts:120")))}c.isMDXComponent=!0}}]);