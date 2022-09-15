"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,o={unversionedId:"api/agros-common/classes/AbstractCollection",id:"version-1.1.x/api/agros-common/classes/AbstractCollection",title:"AbstractCollection",description:"@agros/common / AbstractCollection",source:"@site/versioned_docs/version-1.1.x/api/agros-common/classes/AbstractCollection.md",sourceDirName:"api/agros-common/classes",slug:"/api/agros-common/classes/AbstractCollection",permalink:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.1.x/api/agros-common/classes/AbstractCollection.md",tags:[],version:"1.1.x",frontMatter:{}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:'<a id="constructor" name="constructor"></a> constructor',id:"-constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:'<a id="entities" name="entities"></a> entities',id:"-entities",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="projectconfig" name="projectconfig"></a> projectConfig',id:"-projectconfig",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="generate" name="generate"></a> generate',id:"-generate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="getentitydescriptor" name="getentitydescriptor"></a> getEntityDescriptor',id:"-getentitydescriptor",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="modulespath" name="modulespath"></a> modulesPath',id:"-modulespath",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="projectpath" name="projectpath"></a> projectPath',id:"-projectpath",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="srcpath" name="srcpath"></a> srcPath',id:"-srcpath",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="updateentities" name="updateentities"></a> updateEntities',id:"-updateentities",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:'<a id="writebinaryfile" name="writebinaryfile"></a> writeBinaryFile',id:"-writebinaryfile",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="writefile" name="writefile"></a> writeFile',id:"-writefile",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="writetemplatefile" name="writetemplatefile"></a> writeTemplateFile',id:"-writetemplatefile",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-11",level:4}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.1.x/api/agros-common/"},"@agros/common")," / AbstractCollection"),(0,r.kt)("h1",{id:"class-abstractcollection"},"Class: AbstractCollection"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#entities"},"entities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#projectconfig"},"projectConfig"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#generate"},"generate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#getentitydescriptor"},"getEntityDescriptor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#modulespath"},"modulesPath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#projectpath"},"projectPath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#srcpath"},"srcPath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#updateentities"},"updateEntities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#writebinaryfile"},"writeBinaryFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#writefile"},"writeFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/1.1.x/api/agros-common/classes/AbstractCollection#writetemplatefile"},"writeTemplateFile"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"-constructor"},(0,r.kt)("a",{id:"constructor",name:"constructor"})," constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new AbstractCollection"),"()"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L40"},"packages/agros-common/src/collection.ts:40")),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-entities"},(0,r.kt)("a",{id:"entities",name:"entities"})," entities"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"entities"),": ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.1.x/api/agros-common/interfaces/EntityDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityDescriptor")),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L38"},"packages/agros-common/src/collection.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-projectconfig"},(0,r.kt)("a",{id:"projectconfig",name:"projectconfig"})," projectConfig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"projectConfig"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectConfigParser")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L37"},"packages/agros-common/src/collection.ts:37")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"-generate"},(0,r.kt)("a",{id:"generate",name:"generate"})," generate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"generate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.1.x/api/agros-common/interfaces/CollectionGenerateResult"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionGenerateResult")),">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.1.x/api/agros-common/interfaces/CollectionGenerateResult"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionGenerateResult")),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L142"},"packages/agros-common/src/collection.ts:142")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-getentitydescriptor"},(0,r.kt)("a",{id:"getentitydescriptor",name:"getentitydescriptor"})," getEntityDescriptor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"getEntityDescriptor"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname"),"): ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.1.x/api/agros-common/interfaces/EntityDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityDescriptor"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/1.1.x/api/agros-common/interfaces/EntityDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityDescriptor"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L119"},"packages/agros-common/src/collection.ts:119")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-modulespath"},(0,r.kt)("a",{id:"modulespath",name:"modulespath"})," modulesPath"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"modulesPath"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L65"},"packages/agros-common/src/collection.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-projectpath"},(0,r.kt)("a",{id:"projectpath",name:"projectpath"})," projectPath"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"projectPath"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L49"},"packages/agros-common/src/collection.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-srcpath"},(0,r.kt)("a",{id:"srcpath",name:"srcpath"})," srcPath"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"srcPath"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L57"},"packages/agros-common/src/collection.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-updateentities"},(0,r.kt)("a",{id:"updateentities",name:"updateentities"})," updateEntities"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"updateEntities"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L45"},"packages/agros-common/src/collection.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-writebinaryfile"},(0,r.kt)("a",{id:"writebinaryfile",name:"writebinaryfile"})," writeBinaryFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"writeBinaryFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"buffer"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"buffer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L128"},"packages/agros-common/src/collection.ts:128")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-writefile"},(0,r.kt)("a",{id:"writefile",name:"writefile"})," writeFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"writeFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pathname"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pathname")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/1.1.x/api/agros-common/interfaces/CollectionWriteFileOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionWriteFileOptions")))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L73"},"packages/agros-common/src/collection.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-writetemplatefile"},(0,r.kt)("a",{id:"writetemplatefile",name:"writetemplatefile"})," writeTemplateFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"writeTemplateFile"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"props?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"target")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"any"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/zh/docs/1.1.x/api/agros-common/interfaces/CollectionWriteFileOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionWriteFileOptions")))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/f31aa82/packages/agros-common/src/collection.ts#L97"},"packages/agros-common/src/collection.ts:97")))}d.isMDXComponent=!0}}]);