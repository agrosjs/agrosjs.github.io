"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>c});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=o,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return r?a.createElement(g,i(i({ref:t},f),{},{components:r})):a.createElement(g,i({ref:t},f))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6923:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={},i=void 0,l={unversionedId:"api/agros-config/classes/PlatformConfigParser",id:"version-1.0.x/api/agros-config/classes/PlatformConfigParser",title:"PlatformConfigParser",description:"@agros/config / PlatformConfigParser",source:"@site/versioned_docs/version-1.0.x/api/agros-config/classes/PlatformConfigParser.md",sourceDirName:"api/agros-config/classes",slug:"/api/agros-config/classes/PlatformConfigParser",permalink:"/zh/docs/api/agros-config/classes/PlatformConfigParser",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.0.x/api/agros-config/classes/PlatformConfigParser.md",tags:[],version:"1.0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLIConfigParser",permalink:"/zh/docs/api/agros-config/classes/CLIConfigParser"},next:{title:"ProjectConfigParser",permalink:"/zh/docs/api/agros-config/classes/ProjectConfigParser"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:'<a id="constructor" name="constructor"></a> constructor',id:"-constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:'<a id="platformconfig" name="platformconfig"></a> platformConfig',id:"-platformconfig",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="platformindexfile" name="platformindexfile"></a> platformIndexFile',id:"-platformindexfile",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="platformname" name="platformname"></a> platformName',id:"-platformname",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="platformrootdir" name="platformrootdir"></a> platformRootDir',id:"-platformrootdir",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="getbundlessplatform" name="getbundlessplatform"></a> getBundlessPlatform',id:"-getbundlessplatform",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="getplatform" name="getplatform"></a> getPlatform',id:"-getplatform",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="getplatformrootdir" name="getplatformrootdir"></a> getPlatformRootDir',id:"-getplatformrootdir",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="getplatformwebpackconfigfactory" name="getplatformwebpackconfigfactory"></a> getPlatformWebpackConfigFactory',id:"-getplatformwebpackconfigfactory",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4}],f={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh/docs/api/agros-config/"},"@agros/config")," / PlatformConfigParser"),(0,o.kt)("h1",{id:"class-platformconfigparser"},"Class: PlatformConfigParser"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"constructors"},"Constructors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#constructor"},"constructor"))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#platformconfig"},"platformConfig")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#platformindexfile"},"platformIndexFile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#platformname"},"platformName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#platformrootdir"},"platformRootDir"))),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#getbundlessplatform"},"getBundlessPlatform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#getplatform"},"getPlatform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#getplatformrootdir"},"getPlatformRootDir")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-config/classes/PlatformConfigParser#getplatformwebpackconfigfactory"},"getPlatformWebpackConfigFactory"))),(0,o.kt)("h2",{id:"constructors-1"},"Constructors"),(0,o.kt)("h3",{id:"-constructor"},(0,o.kt)("a",{id:"constructor",name:"constructor"})," constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new PlatformConfigParser"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"platformName"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"platformName")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L21"},"platform-config-parser.ts:21")),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"-platformconfig"},(0,o.kt)("a",{id:"platformconfig",name:"platformconfig"})," platformConfig"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,o.kt)("strong",{parentName:"p"},"platformConfig"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/api/agros-config/interfaces/PlatformConfig"},(0,o.kt)("inlineCode",{parentName:"a"},"PlatformConfig")),">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L16"},"platform-config-parser.ts:16")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-platformindexfile"},(0,o.kt)("a",{id:"platformindexfile",name:"platformindexfile"})," platformIndexFile"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,o.kt)("strong",{parentName:"p"},"platformIndexFile"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L14"},"platform-config-parser.ts:14")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-platformname"},(0,o.kt)("a",{id:"platformname",name:"platformname"})," platformName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"platformName"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L21"},"platform-config-parser.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-platformrootdir"},(0,o.kt)("a",{id:"platformrootdir",name:"platformrootdir"})," platformRootDir"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,o.kt)("strong",{parentName:"p"},"platformRootDir"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L15"},"platform-config-parser.ts:15")),(0,o.kt)("h2",{id:"methods-1"},"Methods"),(0,o.kt)("h3",{id:"-getbundlessplatform"},(0,o.kt)("a",{id:"getbundlessplatform",name:"getbundlessplatform"})," getBundlessPlatform"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getBundlessPlatform"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L65"},"platform-config-parser.ts:65")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-getplatform"},(0,o.kt)("a",{id:"getplatform",name:"getplatform"})," getPlatform"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPlatform"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"T"),">","(): ",(0,o.kt)("inlineCode",{parentName:"p"},"T")),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"T")),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L57"},"platform-config-parser.ts:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-getplatformrootdir"},(0,o.kt)("a",{id:"getplatformrootdir",name:"getplatformrootdir"})," getPlatformRootDir"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPlatformRootDir"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L49"},"platform-config-parser.ts:49")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"-getplatformwebpackconfigfactory"},(0,o.kt)("a",{id:"getplatformwebpackconfigfactory",name:"getplatformwebpackconfigfactory"})," getPlatformWebpackConfigFactory"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPlatformWebpackConfigFactory"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Function")),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Function")),(0,o.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/308fc0e/packages/agros-config/src/platform-config-parser.ts#L53"},"platform-config-parser.ts:53")))}m.isMDXComponent=!0}}]);