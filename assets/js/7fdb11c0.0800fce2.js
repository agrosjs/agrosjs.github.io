"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[2357],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>k});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),k=a,f=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return i?n.createElement(f,o(o({ref:t},c),{},{components:i})):n.createElement(f,o({ref:t},c))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const r={},o=void 0,l={unversionedId:"api/agros-common/interfaces/EntityDescriptor",id:"api/agros-common/interfaces/EntityDescriptor",title:"EntityDescriptor",description:"@agros/common / EntityDescriptor",source:"@site/docs/api/agros-common/interfaces/EntityDescriptor.md",sourceDirName:"api/agros-common/interfaces",slug:"/api/agros-common/interfaces/EntityDescriptor",permalink:"/docs/next/api/agros-common/interfaces/EntityDescriptor",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-common/interfaces/EntityDescriptor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decorator",permalink:"/docs/next/api/agros-common/interfaces/Decorator"},next:{title:"ExportItem",permalink:"/docs/next/api/agros-common/interfaces/ExportItem"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="absolutepath" name="absolutepath"></a> absolutePath',id:"-absolutepath",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="aliaspath" name="aliaspath"></a> aliasPath',id:"-aliaspath",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="collectiontype" name="collectiontype"></a> collectionType',id:"-collectiontype",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="entityname" name="entityname"></a> entityName',id:"-entityname",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="filename" name="filename"></a> filename',id:"-filename",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="id" name="id"></a> id',id:"-id",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="modulename" name="modulename"></a> moduleName',id:"-modulename",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="modules" name="modules"></a> modules',id:"-modules",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="relativepath" name="relativepath"></a> relativePath',id:"-relativepath",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="isblockdevice" name="isblockdevice"></a> isBlockDevice',id:"-isblockdevice",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice',id:"-ischaracterdevice",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="isdirectory" name="isdirectory"></a> isDirectory',id:"-isdirectory",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:'<a id="isfifo" name="isfifo"></a> isFIFO',id:"-isfifo",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:'<a id="isfile" name="isfile"></a> isFile',id:"-isfile",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:'<a id="issocket" name="issocket"></a> isSocket',id:"-issocket",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:'<a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink',id:"-issymboliclink",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-15",level:4}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/"},"@agros/common")," / EntityDescriptor"),(0,a.kt)("h1",{id:"interface-entitydescriptor"},"Interface: EntityDescriptor"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectionDescriptor"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EntityDescriptor"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/RootPointDescriptor"},(0,a.kt)("inlineCode",{parentName:"a"},"RootPointDescriptor"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#absolutepath"},"absolutePath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#aliaspath"},"aliasPath")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#collectiontype"},"collectionType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#entityname"},"entityName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#filename"},"filename")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#id"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#modulename"},"moduleName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#modules"},"modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#relativepath"},"relativePath"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#isblockdevice"},"isBlockDevice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#isdirectory"},"isDirectory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#isfifo"},"isFIFO")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#isfile"},"isFile")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#issocket"},"isSocket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor#issymboliclink"},"isSymbolicLink"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"-absolutepath"},(0,a.kt)("a",{id:"absolutepath",name:"absolutepath"})," absolutePath"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"absolutePath"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#absolutepath"},"absolutePath")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L10"},"packages/agros-common/src/types.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-aliaspath"},(0,a.kt)("a",{id:"aliaspath",name:"aliaspath"})," aliasPath"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"aliasPath"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#aliaspath"},"aliasPath")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L11"},"packages/agros-common/src/types.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-collectiontype"},(0,a.kt)("a",{id:"collectiontype",name:"collectiontype"})," collectionType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"collectionType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectionType")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#collectiontype"},"collectionType")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L16"},"packages/agros-common/src/types.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-entityname"},(0,a.kt)("a",{id:"entityname",name:"entityname"})," entityName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"entityName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L20"},"packages/agros-common/src/types.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-filename"},(0,a.kt)("a",{id:"filename",name:"filename"})," filename"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"filename"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#filename"},"filename")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L12"},"packages/agros-common/src/types.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-id"},(0,a.kt)("a",{id:"id",name:"id"})," id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#id"},"id")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L8"},"packages/agros-common/src/types.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-modulename"},(0,a.kt)("a",{id:"modulename",name:"modulename"})," moduleName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"moduleName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L21"},"packages/agros-common/src/types.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-modules"},(0,a.kt)("a",{id:"modules",name:"modules"})," modules"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"modules"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/EntityDescriptor"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityDescriptor")),"[]"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L22"},"packages/agros-common/src/types.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-relativepath"},(0,a.kt)("a",{id:"relativepath",name:"relativepath"})," relativePath"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"relativePath"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#relativepath"},"relativePath")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L9"},"packages/agros-common/src/types.ts:9")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"-isblockdevice"},(0,a.kt)("a",{id:"isblockdevice",name:"isblockdevice"})," isBlockDevice"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isBlockDevice"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#isblockdevice"},"isBlockDevice")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:63"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-ischaracterdevice"},(0,a.kt)("a",{id:"ischaracterdevice",name:"ischaracterdevice"})," isCharacterDevice"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isCharacterDevice"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:64"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-isdirectory"},(0,a.kt)("a",{id:"isdirectory",name:"isdirectory"})," isDirectory"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDirectory"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#isdirectory"},"isDirectory")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:62"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-isfifo"},(0,a.kt)("a",{id:"isfifo",name:"isfifo"})," isFIFO"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isFIFO"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#isfifo"},"isFIFO")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:66"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-isfile"},(0,a.kt)("a",{id:"isfile",name:"isfile"})," isFile"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isFile"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#isfile"},"isFile")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:61"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-issocket"},(0,a.kt)("a",{id:"issocket",name:"issocket"})," isSocket"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isSocket"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#issocket"},"isSocket")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:67"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"-issymboliclink"},(0,a.kt)("a",{id:"issymboliclink",name:"issymboliclink"})," isSymbolicLink"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isSymbolicLink"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/agros-common/interfaces/CollectionDescriptor#issymboliclink"},"isSymbolicLink")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,a.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:65"))}m.isMDXComponent=!0}}]);