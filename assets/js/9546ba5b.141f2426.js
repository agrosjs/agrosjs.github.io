"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[6047],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,f=c["".concat(l,".").concat(k)]||c[k]||s[k]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},i=void 0,p={unversionedId:"api/agros-platforms/interfaces/Platform",id:"version-1.0.x/api/agros-platforms/interfaces/Platform",title:"Platform",description:"@agros/platforms / Platform",source:"@site/versioned_docs/version-1.0.x/api/agros-platforms/interfaces/Platform.md",sourceDirName:"api/agros-platforms/interfaces",slug:"/api/agros-platforms/interfaces/Platform",permalink:"/docs/api/agros-platforms/interfaces/Platform",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.0.x/api/agros-platforms/interfaces/Platform.md",tags:[],version:"1.0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetComponentFactoryCodeData",permalink:"/docs/api/agros-platforms/interfaces/GetComponentFactoryCodeData"},next:{title:"index",permalink:"/docs/api/agros-platform-vue/"}},l={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="generatecomponent" name="generatecomponent"></a> generateComponent',id:"-generatecomponent",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="getbootstrapcode" name="getbootstrapcode"></a> getBootstrapCode',id:"-getbootstrapcode",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="getcomponentfactorycode" name="getcomponentfactorycode"></a> getComponentFactoryCode',id:"-getcomponentfactorycode",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="getdecoratorimports" name="getdecoratorimports"></a> getDecoratorImports',id:"-getdecoratorimports",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="getdefaultconfig" name="getdefaultconfig"></a> getDefaultConfig',id:"-getdefaultconfig",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="getentrytailcode" name="getentrytailcode"></a> getEntryTailCode',id:"-getentrytailcode",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="getloaderimports" name="getloaderimports"></a> getLoaderImports',id:"-getloaderimports",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-6",level:4}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/"},"@agros/platforms")," / Platform"),(0,r.kt)("h1",{id:"interface-platform"},"Interface: Platform"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#generatecomponent"},"generateComponent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#getbootstrapcode"},"getBootstrapCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#getcomponentfactorycode"},"getComponentFactoryCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#getdecoratorimports"},"getDecoratorImports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#getdefaultconfig"},"getDefaultConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#getentrytailcode"},"getEntryTailCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-platforms/interfaces/Platform#getloaderimports"},"getLoaderImports"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-generatecomponent"},(0,r.kt)("a",{id:"generatecomponent",name:"generatecomponent"})," generateComponent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"generateComponent"),": <T",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"componentInstance"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentInstance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 <",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"componentInstance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"component"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("h5",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"componentInstance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ComponentInstance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"component")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L32"},"platform.interface.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getbootstrapcode"},(0,r.kt)("a",{id:"getbootstrapcode",name:"getbootstrapcode"})," getBootstrapCode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getBootstrapCode"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"ensuredImportsMap"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"addVirtualFile"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/#addvirtualfile"},(0,r.kt)("inlineCode",{parentName:"a"},"AddVirtualFile")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"ensuredImportsMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"addVirtualFile"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ensuredImportsMap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"addVirtualFile")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/agros-platforms/#addvirtualfile"},(0,r.kt)("inlineCode",{parentName:"a"},"AddVirtualFile")))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L29"},"platform.interface.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getcomponentfactorycode"},(0,r.kt)("a",{id:"getcomponentfactorycode",name:"getcomponentfactorycode"})," getComponentFactoryCode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getComponentFactoryCode"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/GetComponentFactoryCodeData"},(0,r.kt)("inlineCode",{parentName:"a"},"GetComponentFactoryCodeData")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/FactoryCode"},(0,r.kt)("inlineCode",{parentName:"a"},"FactoryCode"))),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/FactoryCode"},(0,r.kt)("inlineCode",{parentName:"a"},"FactoryCode"))),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/agros-platforms/interfaces/GetComponentFactoryCodeData"},(0,r.kt)("inlineCode",{parentName:"a"},"GetComponentFactoryCodeData")))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/FactoryCode"},(0,r.kt)("inlineCode",{parentName:"a"},"FactoryCode"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L30"},"platform.interface.ts:30")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getdecoratorimports"},(0,r.kt)("a",{id:"getdecoratorimports",name:"getdecoratorimports"})," getDecoratorImports"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getDecoratorImports"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureImportOptions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"statements"'),">","[]"),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureImportOptions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"statements"'),">","[]"),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureImportOptions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"statements"'),">","[]"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L28"},"platform.interface.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getdefaultconfig"},(0,r.kt)("a",{id:"getdefaultconfig",name:"getdefaultconfig"})," getDefaultConfig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"getDefaultConfig"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L31"},"platform.interface.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getentrytailcode"},(0,r.kt)("a",{id:"getentrytailcode",name:"getentrytailcode"})," getEntryTailCode"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"getEntryTailCode"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/EntryTailCodeData"},(0,r.kt)("inlineCode",{parentName:"a"},"EntryTailCodeData")),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/agros-platforms/interfaces/EntryTailCodeData"},(0,r.kt)("inlineCode",{parentName:"a"},"EntryTailCodeData")))))),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L33"},"platform.interface.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getloaderimports"},(0,r.kt)("a",{id:"getloaderimports",name:"getloaderimports"})," getLoaderImports"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"getLoaderImports"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureImportOptions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"statements"'),">","[]"),(0,r.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureImportOptions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"statements"'),">","[]"),(0,r.kt)("h5",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"EnsureImportOptions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"statements"'),">","[]"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-platforms/src/platform.interface.ts#L27"},"platform.interface.ts:27")))}s.isMDXComponent=!0}}]);