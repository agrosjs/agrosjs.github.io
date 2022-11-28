"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="CLI",l={unversionedId:"cli-commands/index",id:"version-2.0.x/cli-commands/index",title:"CLI",description:"The following are the help information printed from @agros/cli:",source:"@site/versioned_docs/version-2.0.x/cli-commands/index.md",sourceDirName:"cli-commands",slug:"/cli-commands/",permalink:"/zh/docs/cli-commands/",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-2.0.x/cli-commands/index.md",tags:[],version:"2.0.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Application",permalink:"/zh/docs/overview/application"},next:{title:"agros generate",permalink:"/zh/docs/cli-commands/generate"}},c={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"The following are the help information printed from ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/cli"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: agros [options] [command]\n\nOptions:\n  -V, --version   output the version number\n  -h, --help      display help for command\n\nCommands:\n  generate|g      Generate Agros.js collections\n  update|u        Update an Agros.js collections with another collection\n  routes|r        Manage project routes\n  help [command]  display help for command\n")),(0,o.kt)("p",null,"In this section of documentation, we will introduce our CLI commands based on official platform ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/platform-react")," and template generator ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/create-app"),". You can initialize the environment by the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Initialize starter template"',title:'"Initialize',starter:!0,'template"':!0},"npm create @agros/app\n")),(0,o.kt)("p",null,"Then follow the instruction to create template files to your disk filesystem."))}m.isMDXComponent=!0}}]);