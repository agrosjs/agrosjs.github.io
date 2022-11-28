"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[2492],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(i),k=r,f=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return i?a.createElement(f,n(n({ref:t},d),{},{components:i})):a.createElement(f,n({ref:t},d))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var p=2;p<o;p++)n[p]=i[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7473:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=i(7462),r=(i(7294),i(3905));const o={},n=void 0,l={unversionedId:"api/agros-tools/interfaces/EntityDescriptor",id:"version-1.1.x/api/agros-tools/interfaces/EntityDescriptor",title:"EntityDescriptor",description:"@agros/tools / EntityDescriptor",source:"@site/versioned_docs/version-1.1.x/api/agros-tools/interfaces/EntityDescriptor.md",sourceDirName:"api/agros-tools/interfaces",slug:"/api/agros-tools/interfaces/EntityDescriptor",permalink:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.1.x/api/agros-tools/interfaces/EntityDescriptor.md",tags:[],version:"1.1.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EnsureImportResult",permalink:"/docs/1.1.x/api/agros-tools/interfaces/EnsureImportResult"},next:{title:"EntryTailCodeData",permalink:"/docs/1.1.x/api/agros-tools/interfaces/EntryTailCodeData"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="absolutepath" name="absolutepath"></a> absolutePath',id:"-absolutepath",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="aliaspath" name="aliaspath"></a> aliasPath',id:"-aliaspath",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="collectiontype" name="collectiontype"></a> collectionType',id:"-collectiontype",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="entityname" name="entityname"></a> entityName',id:"-entityname",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="filename" name="filename"></a> filename',id:"-filename",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="id" name="id"></a> id',id:"-id",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="modulename" name="modulename"></a> moduleName',id:"-modulename",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="modules" name="modules"></a> modules',id:"-modules",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="relativepath" name="relativepath"></a> relativePath',id:"-relativepath",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="isblockdevice" name="isblockdevice"></a> isBlockDevice',id:"-isblockdevice",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice',id:"-ischaracterdevice",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="isdirectory" name="isdirectory"></a> isDirectory',id:"-isdirectory",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:'<a id="isfifo" name="isfifo"></a> isFIFO',id:"-isfifo",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:'<a id="isfile" name="isfile"></a> isFile',id:"-isfile",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:'<a id="issocket" name="issocket"></a> isSocket',id:"-issocket",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:'<a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink',id:"-issymboliclink",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-15",level:4}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/"},"@agros/tools")," / EntityDescriptor"),(0,r.kt)("h1",{id:"interface-entitydescriptor"},"Interface: EntityDescriptor"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionDescriptor"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EntityDescriptor"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/RootPointDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"RootPointDescriptor"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#absolutepath"},"absolutePath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#aliaspath"},"aliasPath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#collectiontype"},"collectionType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#entityname"},"entityName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#filename"},"filename")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#id"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#modulename"},"moduleName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#modules"},"modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#relativepath"},"relativePath"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#isblockdevice"},"isBlockDevice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#isdirectory"},"isDirectory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#isfifo"},"isFIFO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#isfile"},"isFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#issocket"},"isSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor#issymboliclink"},"isSymbolicLink"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-absolutepath"},(0,r.kt)("a",{id:"absolutepath",name:"absolutepath"})," absolutePath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"absolutePath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#absolutepath"},"absolutePath")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L202"},"packages/agros-tools/src/types.ts:202")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-aliaspath"},(0,r.kt)("a",{id:"aliaspath",name:"aliaspath"})," aliasPath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"aliasPath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#aliaspath"},"aliasPath")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L203"},"packages/agros-tools/src/types.ts:203")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-collectiontype"},(0,r.kt)("a",{id:"collectiontype",name:"collectiontype"})," collectionType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"collectionType"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/#collectiontype"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionType"))),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#collectiontype"},"collectionType")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L208"},"packages/agros-tools/src/types.ts:208")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-entityname"},(0,r.kt)("a",{id:"entityname",name:"entityname"})," entityName"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"entityName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L212"},"packages/agros-tools/src/types.ts:212")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-filename"},(0,r.kt)("a",{id:"filename",name:"filename"})," filename"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"filename"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#filename"},"filename")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L204"},"packages/agros-tools/src/types.ts:204")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-id"},(0,r.kt)("a",{id:"id",name:"id"})," id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#id"},"id")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L200"},"packages/agros-tools/src/types.ts:200")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-modulename"},(0,r.kt)("a",{id:"modulename",name:"modulename"})," moduleName"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"moduleName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L213"},"packages/agros-tools/src/types.ts:213")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-modules"},(0,r.kt)("a",{id:"modules",name:"modules"})," modules"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"modules"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/EntityDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityDescriptor")),"[]"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L214"},"packages/agros-tools/src/types.ts:214")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-relativepath"},(0,r.kt)("a",{id:"relativepath",name:"relativepath"})," relativePath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"relativePath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#relativepath"},"relativePath")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L201"},"packages/agros-tools/src/types.ts:201")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"-isblockdevice"},(0,r.kt)("a",{id:"isblockdevice",name:"isblockdevice"})," isBlockDevice"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isBlockDevice"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#isblockdevice"},"isBlockDevice")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:63"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-ischaracterdevice"},(0,r.kt)("a",{id:"ischaracterdevice",name:"ischaracterdevice"})," isCharacterDevice"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isCharacterDevice"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:64"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-isdirectory"},(0,r.kt)("a",{id:"isdirectory",name:"isdirectory"})," isDirectory"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isDirectory"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#isdirectory"},"isDirectory")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:62"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-isfifo"},(0,r.kt)("a",{id:"isfifo",name:"isfifo"})," isFIFO"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isFIFO"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#isfifo"},"isFIFO")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:66"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-isfile"},(0,r.kt)("a",{id:"isfile",name:"isfile"})," isFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isFile"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#isfile"},"isFile")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:61"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-issocket"},(0,r.kt)("a",{id:"issocket",name:"issocket"})," isSocket"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isSocket"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#issocket"},"isSocket")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:67"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-issymboliclink"},(0,r.kt)("a",{id:"issymboliclink",name:"issymboliclink"})," isSymbolicLink"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isSymbolicLink"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor"},"CollectionDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/1.1.x/api/agros-tools/interfaces/CollectionDescriptor#issymboliclink"},"isSymbolicLink")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:65"))}c.isMDXComponent=!0}}]);