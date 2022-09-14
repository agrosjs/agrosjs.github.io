"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[6078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(g,i(i({ref:t},f),{},{components:r})):a.createElement(g,i({ref:t},f))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"api/agros-config/classes/PlatformConfigParser",id:"api/agros-config/classes/PlatformConfigParser",title:"PlatformConfigParser",description:"@agros/config / PlatformConfigParser",source:"@site/docs/api/agros-config/classes/PlatformConfigParser.md",sourceDirName:"api/agros-config/classes",slug:"/api/agros-config/classes/PlatformConfigParser",permalink:"/docs/next/api/agros-config/classes/PlatformConfigParser",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-config/classes/PlatformConfigParser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLIConfigParser",permalink:"/docs/next/api/agros-config/classes/CLIConfigParser"},next:{title:"ProjectConfigParser",permalink:"/docs/next/api/agros-config/classes/ProjectConfigParser"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:'<a id="constructor" name="constructor"></a> constructor',id:"-constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:'<a id="platformconfig" name="platformconfig"></a> platformConfig',id:"-platformconfig",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="platformindexfile" name="platformindexfile"></a> platformIndexFile',id:"-platformindexfile",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="platformname" name="platformname"></a> platformName',id:"-platformname",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="platformrootdir" name="platformrootdir"></a> platformRootDir',id:"-platformrootdir",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="getbundlessplatform" name="getbundlessplatform"></a> getBundlessPlatform',id:"-getbundlessplatform",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="getplatform" name="getplatform"></a> getPlatform',id:"-getplatform",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="getplatformrootdir" name="getplatformrootdir"></a> getPlatformRootDir',id:"-getplatformrootdir",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="getplatformwebpackconfigfactory" name="getplatformwebpackconfigfactory"></a> getPlatformWebpackConfigFactory',id:"-getplatformwebpackconfigfactory",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4}],f={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/agros-config/"},"@agros/config")," / PlatformConfigParser"),(0,n.kt)("h1",{id:"class-platformconfigparser"},"Class: PlatformConfigParser"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#constructor"},"constructor"))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#platformconfig"},"platformConfig")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#platformindexfile"},"platformIndexFile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#platformname"},"platformName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#platformrootdir"},"platformRootDir"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#getbundlessplatform"},"getBundlessPlatform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#getplatform"},"getPlatform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#getplatformrootdir"},"getPlatformRootDir")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/agros-config/classes/PlatformConfigParser#getplatformwebpackconfigfactory"},"getPlatformWebpackConfigFactory"))),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"-constructor"},(0,n.kt)("a",{id:"constructor",name:"constructor"})," constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new PlatformConfigParser"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"platformName"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"platformName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L21"},"platform-config-parser.ts:21")),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"-platformconfig"},(0,n.kt)("a",{id:"platformconfig",name:"platformconfig"})," platformConfig"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"platformConfig"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/agros-config/interfaces/PlatformConfig"},(0,n.kt)("inlineCode",{parentName:"a"},"PlatformConfig")),">"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L16"},"platform-config-parser.ts:16")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-platformindexfile"},(0,n.kt)("a",{id:"platformindexfile",name:"platformindexfile"})," platformIndexFile"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"platformIndexFile"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L14"},"platform-config-parser.ts:14")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-platformname"},(0,n.kt)("a",{id:"platformname",name:"platformname"})," platformName"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"platformName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L21"},"platform-config-parser.ts:21")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-platformrootdir"},(0,n.kt)("a",{id:"platformrootdir",name:"platformrootdir"})," platformRootDir"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,n.kt)("strong",{parentName:"p"},"platformRootDir"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L15"},"platform-config-parser.ts:15")),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"-getbundlessplatform"},(0,n.kt)("a",{id:"getbundlessplatform",name:"getbundlessplatform"})," getBundlessPlatform"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getBundlessPlatform"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L65"},"platform-config-parser.ts:65")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-getplatform"},(0,n.kt)("a",{id:"getplatform",name:"getplatform"})," getPlatform"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getPlatform"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">","(): ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L57"},"platform-config-parser.ts:57")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-getplatformrootdir"},(0,n.kt)("a",{id:"getplatformrootdir",name:"getplatformrootdir"})," getPlatformRootDir"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getPlatformRootDir"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L49"},"platform-config-parser.ts:49")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-getplatformwebpackconfigfactory"},(0,n.kt)("a",{id:"getplatformwebpackconfigfactory",name:"getplatformwebpackconfigfactory"})," getPlatformWebpackConfigFactory"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getPlatformWebpackConfigFactory"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Function")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Function")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/01b3301/packages/agros-config/src/platform-config-parser.ts#L53"},"platform-config-parser.ts:53")))}m.isMDXComponent=!0}}]);