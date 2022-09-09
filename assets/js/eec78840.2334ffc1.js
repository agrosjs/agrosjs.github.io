"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[3135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(r),f=i,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},16:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},p=void 0,o={unversionedId:"api/agros-utils/interfaces/RequireFromStringOptions",id:"api/agros-utils/interfaces/RequireFromStringOptions",title:"RequireFromStringOptions",description:"@agros/utils / RequireFromStringOptions",source:"@site/docs/api/agros-utils/interfaces/RequireFromStringOptions.md",sourceDirName:"api/agros-utils/interfaces",slug:"/api/agros-utils/interfaces/RequireFromStringOptions",permalink:"/docs/next/api/agros-utils/interfaces/RequireFromStringOptions",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/api/agros-utils/interfaces/RequireFromStringOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EnsureImportResult",permalink:"/docs/next/api/agros-utils/interfaces/EnsureImportResult"},next:{title:"index",permalink:"/docs/next/api/agros-logger/"}},s={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:'<a id="appendpaths" name="appendpaths"></a> appendPaths',id:"-appendpaths",level:3},{value:"Defined in",id:"defined-in",level:4},{value:'<a id="prependpaths" name="prependpaths"></a> prependPaths',id:"-prependpaths",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/agros-utils/"},"@agros/utils")," / RequireFromStringOptions"),(0,i.kt)("h1",{id:"interface-requirefromstringoptions"},"Interface: RequireFromStringOptions"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/agros-utils/interfaces/RequireFromStringOptions#appendpaths"},"appendPaths")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/agros-utils/interfaces/RequireFromStringOptions#prependpaths"},"prependPaths"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"-appendpaths"},(0,i.kt)("a",{id:"appendpaths",name:"appendpaths"})," appendPaths"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"appendPaths"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"List of ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),", that will be appended to module ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),".\nUseful when you want to be able require modules from these paths."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/b876817/packages/agros-utils/src/require-from-string.ts#L9"},"require-from-string.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"-prependpaths"},(0,i.kt)("a",{id:"prependpaths",name:"prependpaths"})," prependPaths"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"prependPaths"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"List of ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),", that will be preppended to module ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),".\nUseful when you want to be able require modules from these paths."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/agrosjs/agros/blob/b876817/packages/agros-utils/src/require-from-string.ts#L14"},"require-from-string.ts:14")))}d.isMDXComponent=!0}}]);