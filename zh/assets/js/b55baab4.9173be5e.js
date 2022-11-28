"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4022],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>k});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(i),k=n,h=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return i?a.createElement(h,l(l({ref:t},p),{},{components:i})):a.createElement(h,l({ref:t},p))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4848:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(7462),n=(i(7294),i(3905));const r={},l=void 0,o={unversionedId:"api/agros-tools/interfaces/PathDescriptor",id:"version-2.0.x/api/agros-tools/interfaces/PathDescriptor",title:"PathDescriptor",description:"@agros/tools / PathDescriptor",source:"@site/versioned_docs/version-2.0.x/api/agros-tools/interfaces/PathDescriptor.md",sourceDirName:"api/agros-tools/interfaces",slug:"/api/agros-tools/interfaces/PathDescriptor",permalink:"/zh/docs/api/agros-tools/interfaces/PathDescriptor",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-2.0.x/api/agros-tools/interfaces/PathDescriptor.md",tags:[],version:"2.0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ModuleMetadata",permalink:"/zh/docs/api/agros-tools/interfaces/ModuleMetadata"},next:{title:"Platform",permalink:"/zh/docs/api/agros-tools/interfaces/Platform"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="absolutepath" name="absolutepath"></a> absolutePath',id:"-absolutepath",level:3},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="aliaspath" name="aliaspath"></a> aliasPath',id:"-aliaspath",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:'<a id="filename" name="filename"></a> filename',id:"-filename",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:'<a id="id" name="id"></a> id',id:"-id",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:'<a id="relativepath" name="relativepath"></a> relativePath',id:"-relativepath",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods-1",level:2},{value:'<a id="isblockdevice" name="isblockdevice"></a> isBlockDevice',id:"-isblockdevice",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:'<a id="ischaracterdevice" name="ischaracterdevice"></a> isCharacterDevice',id:"-ischaracterdevice",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:'<a id="isdirectory" name="isdirectory"></a> isDirectory',id:"-isdirectory",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:'<a id="isfifo" name="isfifo"></a> isFIFO',id:"-isfifo",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:'<a id="isfile" name="isfile"></a> isFile',id:"-isfile",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:'<a id="issocket" name="issocket"></a> isSocket',id:"-issocket",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:'<a id="issymboliclink" name="issymboliclink"></a> isSymbolicLink',id:"-issymboliclink",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-11",level:4}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zh/docs/api/agros-tools/"},"@agros/tools")," / PathDescriptor"),(0,n.kt)("h1",{id:"interface-pathdescriptor"},"Interface: PathDescriptor"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Dirent"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"name"'),">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"PathDescriptor"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/api/agros-tools/interfaces/CollectionDescriptor"},(0,n.kt)("inlineCode",{parentName:"a"},"CollectionDescriptor"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#absolutepath"},"absolutePath")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#aliaspath"},"aliasPath")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#filename"},"filename")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#id"},"id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#relativepath"},"relativePath"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#isblockdevice"},"isBlockDevice")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#ischaracterdevice"},"isCharacterDevice")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#isdirectory"},"isDirectory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#isfifo"},"isFIFO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#isfile"},"isFile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#issocket"},"isSocket")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/api/agros-tools/interfaces/PathDescriptor#issymboliclink"},"isSymbolicLink"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"-absolutepath"},(0,n.kt)("a",{id:"absolutepath",name:"absolutepath"})," absolutePath"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"absolutePath"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L202"},"packages/agros-tools/src/types.ts:202")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-aliaspath"},(0,n.kt)("a",{id:"aliaspath",name:"aliaspath"})," aliasPath"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"aliasPath"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L203"},"packages/agros-tools/src/types.ts:203")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-filename"},(0,n.kt)("a",{id:"filename",name:"filename"})," filename"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"filename"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L204"},"packages/agros-tools/src/types.ts:204")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-id"},(0,n.kt)("a",{id:"id",name:"id"})," id"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"id"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L200"},"packages/agros-tools/src/types.ts:200")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-relativepath"},(0,n.kt)("a",{id:"relativepath",name:"relativepath"})," relativePath"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"relativePath"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/7ebe656/packages/agros-tools/src/types.ts#L201"},"packages/agros-tools/src/types.ts:201")),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"-isblockdevice"},(0,n.kt)("a",{id:"isblockdevice",name:"isblockdevice"})," isBlockDevice"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isBlockDevice"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,"Omit.isBlockDevice"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:63"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-ischaracterdevice"},(0,n.kt)("a",{id:"ischaracterdevice",name:"ischaracterdevice"})," isCharacterDevice"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isCharacterDevice"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,"Omit.isCharacterDevice"),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:64"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-isdirectory"},(0,n.kt)("a",{id:"isdirectory",name:"isdirectory"})," isDirectory"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isDirectory"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,"Omit.isDirectory"),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:62"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-isfifo"},(0,n.kt)("a",{id:"isfifo",name:"isfifo"})," isFIFO"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isFIFO"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,"Omit.isFIFO"),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:66"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-isfile"},(0,n.kt)("a",{id:"isfile",name:"isfile"})," isFile"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isFile"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,"Omit.isFile"),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:61"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-issocket"},(0,n.kt)("a",{id:"issocket",name:"issocket"})," isSocket"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isSocket"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.kt)("p",null,"Omit.isSocket"),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:67"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-issymboliclink"},(0,n.kt)("a",{id:"issymboliclink",name:"issymboliclink"})," isSymbolicLink"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isSymbolicLink"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.kt)("p",null,"Omit.isSymbolicLink"),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,"common/temp/node_modules/.pnpm/@",(0,n.kt)("a",{parentName:"p",href:"mailto:types+node@15.14.9"},"types+node@15.14.9"),"/node_modules/@types/node/fs.d.ts:65"))}c.isMDXComponent=!0}}]);