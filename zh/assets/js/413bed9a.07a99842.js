"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[3483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,u=d["".concat(s,".").concat(g)]||d[g]||f[g]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"api/agros-config/classes/CLIConfigParser",id:"version-1.0.x/api/agros-config/classes/CLIConfigParser",title:"CLIConfigParser",description:"@agros/config / CLIConfigParser",source:"@site/versioned_docs/version-1.0.x/api/agros-config/classes/CLIConfigParser.md",sourceDirName:"api/agros-config/classes",slug:"/api/agros-config/classes/CLIConfigParser",permalink:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.0.x/api/agros-config/classes/CLIConfigParser.md",tags:[],version:"1.0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/zh/docs/1.0.x/api/agros-config/"},next:{title:"PlatformConfigParser",permalink:"/zh/docs/1.0.x/api/agros-config/classes/PlatformConfigParser"}},s={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:'<a id="constructor" name="constructor"></a> constructor',id:"-constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:'<a id="cliconfig" name="cliconfig"></a> cliConfig',id:"-cliconfig",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="configfilepath" name="configfilepath"></a> configFilePath',id:"-configfilepath",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="defaultcliconfig" name="defaultcliconfig"></a> defaultCLIConfig',id:"-defaultcliconfig",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="getconfig" name="getconfig"></a> getConfig',id:"-getconfig",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="reloaduserconfig" name="reloaduserconfig"></a> reloadUserConfig',id:"-reloaduserconfig",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="setconfig" name="setconfig"></a> setConfig',id:"-setconfig",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.0.x/api/agros-config/"},"@agros/config")," / CLIConfigParser"),(0,r.kt)("h1",{id:"class-cliconfigparser"},"Class: CLIConfigParser"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#cliconfig"},"cliConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#configfilepath"},"configFilePath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#defaultcliconfig"},"defaultCLIConfig"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#getconfig"},"getConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#reloaduserconfig"},"reloadUserConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.0.x/api/agros-config/classes/CLIConfigParser#setconfig"},"setConfig"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"-constructor"},(0,r.kt)("a",{id:"constructor",name:"constructor"})," constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new CLIConfigParser"),"()"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L17"},"cli-config-parser.ts:17")),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-cliconfig"},(0,r.kt)("a",{id:"cliconfig",name:"cliconfig"})," cliConfig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"cliConfig"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.0.x/api/agros-config/interfaces/CLIConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"CLIConfig"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L15"},"cli-config-parser.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-configfilepath"},(0,r.kt)("a",{id:"configfilepath",name:"configfilepath"})," configFilePath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"configFilePath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L11"},"cli-config-parser.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-defaultcliconfig"},(0,r.kt)("a",{id:"defaultcliconfig",name:"defaultcliconfig"})," defaultCLIConfig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"defaultCLIConfig"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.0.x/api/agros-config/interfaces/CLIConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"CLIConfig"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L12"},"cli-config-parser.ts:12")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"-getconfig"},(0,r.kt)("a",{id:"getconfig",name:"getconfig"})," getConfig"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getConfig"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L42"},"cli-config-parser.ts:42")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-reloaduserconfig"},(0,r.kt)("a",{id:"reloaduserconfig",name:"reloaduserconfig"})," reloadUserConfig"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"reloadUserConfig"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L50"},"cli-config-parser.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-setconfig"},(0,r.kt)("a",{id:"setconfig",name:"setconfig"})," setConfig"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setConfig"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/e90e8df/packages/agros-config/src/cli-config-parser.ts#L21"},"cli-config-parser.ts:21")))}f.isMDXComponent=!0}}]);