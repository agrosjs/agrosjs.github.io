"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4987],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(i),f=r,h=m["".concat(s,".").concat(f)]||m[f]||d[f]||n;return i?a.createElement(h,o(o({ref:t},c),{},{components:i})):a.createElement(h,o({ref:t},c))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5817:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=i(7462),r=(i(7294),i(3905));const n={},o=void 0,l={unversionedId:"api/agros-common/interfaces/CollectionDescriptor",id:"version-0.7.x/api/agros-common/interfaces/CollectionDescriptor",title:"CollectionDescriptor",description:"@agros/common / CollectionDescriptor",source:"@site/versioned_docs/version-0.7.x/api/agros-common/interfaces/CollectionDescriptor.md",sourceDirName:"api/agros-common/interfaces",slug:"/api/agros-common/interfaces/CollectionDescriptor",permalink:"/docs/api/agros-common/interfaces/CollectionDescriptor",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-0.7.x/api/agros-common/interfaces/CollectionDescriptor.md",tags:[],version:"0.7.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collection",permalink:"/docs/api/agros-common/interfaces/Collection"},next:{title:"CollectionGenerateResult",permalink:"/docs/api/agros-common/interfaces/CollectionGenerateResult"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="absolutepath" name="absolutepath"></a> absolutePath',id:"-absolutepath",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="aliaspath" name="aliaspath"></a> aliasPath',id:"-aliaspath",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="collectiontype" name="collectiontype"></a> collectionType',id:"-collectiontype",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="filename" name="filename"></a> filename',id:"-filename",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="id" name="id"></a> id',id:"-id",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:'<a id="relativepath" name="relativepath"></a> relativePath',id:"-relativepath",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="isblockdevice" name="isblockdevice"></a> isBlockDevice',id:"-isblockdevice",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice',id:"-ischaracterdevice",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="isdirectory" name="isdirectory"></a> isDirectory',id:"-isdirectory",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:'<a id="isfifo" name="isfifo"></a> isFIFO',id:"-isfifo",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="isfile" name="isfile"></a> isFile',id:"-isfile",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="issocket" name="issocket"></a> isSocket',id:"-issocket",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:'<a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink',id:"-issymboliclink",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/"},"@agros/common")," / CollectionDescriptor"),(0,r.kt)("h1",{id:"interface-collectiondescriptor"},"Interface: CollectionDescriptor"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"PathDescriptor"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CollectionDescriptor"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/EntityDescriptor"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityDescriptor"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#absolutepath"},"absolutePath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#aliaspath"},"aliasPath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#collectiontype"},"collectionType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#filename"},"filename")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#id"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#relativepath"},"relativePath"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#isblockdevice"},"isBlockDevice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#isdirectory"},"isDirectory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#isfifo"},"isFIFO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#isfile"},"isFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#issocket"},"isSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/agros-common/interfaces/CollectionDescriptor#issymboliclink"},"isSymbolicLink"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"-absolutepath"},(0,r.kt)("a",{id:"absolutepath",name:"absolutepath"})," absolutePath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"absolutePath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#absolutepath"},"absolutePath")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L10"},"packages/agros-common/src/types.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-aliaspath"},(0,r.kt)("a",{id:"aliaspath",name:"aliaspath"})," aliasPath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"aliasPath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#aliaspath"},"aliasPath")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L11"},"packages/agros-common/src/types.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-collectiontype"},(0,r.kt)("a",{id:"collectiontype",name:"collectiontype"})," collectionType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"collectionType"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectionType")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L16"},"packages/agros-common/src/types.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-filename"},(0,r.kt)("a",{id:"filename",name:"filename"})," filename"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"filename"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#filename"},"filename")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L12"},"packages/agros-common/src/types.ts:12")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-id"},(0,r.kt)("a",{id:"id",name:"id"})," id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#id"},"id")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L8"},"packages/agros-common/src/types.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-relativepath"},(0,r.kt)("a",{id:"relativepath",name:"relativepath"})," relativePath"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"relativePath"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#relativepath"},"relativePath")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/462a64e/packages/agros-common/src/types.ts#L9"},"packages/agros-common/src/types.ts:9")),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"-isblockdevice"},(0,r.kt)("a",{id:"isblockdevice",name:"isblockdevice"})," isBlockDevice"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isBlockDevice"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#isblockdevice"},"isBlockDevice")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:63"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-ischaracterdevice"},(0,r.kt)("a",{id:"ischaracterdevice",name:"ischaracterdevice"})," isCharacterDevice"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isCharacterDevice"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:64"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-isdirectory"},(0,r.kt)("a",{id:"isdirectory",name:"isdirectory"})," isDirectory"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isDirectory"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#isdirectory"},"isDirectory")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:62"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-isfifo"},(0,r.kt)("a",{id:"isfifo",name:"isfifo"})," isFIFO"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isFIFO"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#isfifo"},"isFIFO")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:66"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-isfile"},(0,r.kt)("a",{id:"isfile",name:"isfile"})," isFile"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isFile"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#isfile"},"isFile")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:61"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-issocket"},(0,r.kt)("a",{id:"issocket",name:"issocket"})," isSocket"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isSocket"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#issocket"},"isSocket")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:67"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-issymboliclink"},(0,r.kt)("a",{id:"issymboliclink",name:"issymboliclink"})," isSymbolicLink"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isSymbolicLink"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor"},"PathDescriptor"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/agros-common/interfaces/PathDescriptor#issymboliclink"},"isSymbolicLink")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,r.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:65"))}d.isMDXComponent=!0}}]);