"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));n(2389);const a={sidebar_position:1},i="agros update",c={unversionedId:"cli-commands/update",id:"version-0.x/cli-commands/update",title:"agros update",description:"Update project code with a source collection entity and a tar get collection entity. For example, import a service to another service and inject the source service class as an annotated dependency.",source:"@site/versioned_docs/version-0.x/cli-commands/update.mdx",sourceDirName:"cli-commands",slug:"/cli-commands/update",permalink:"/docs/cli-commands/update",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.x/cli-commands/update.mdx",tags:[],version:"0.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"agros generate",permalink:"/docs/cli-commands/generate"},next:{title:"agros routes",permalink:"/docs/cli-commands/routes"}},s={},p=[{value:"Sub Commands",id:"sub-commands",level:2},{value:"agros update module",id:"agros-update-module",level:3},{value:"agros update component",id:"agros-update-component",level:3},{value:"agros update service",id:"agros-update-service",level:3},{value:"agros update interceptor",id:"agros-update-interceptor",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agros-update"},"agros update"),(0,r.kt)("p",null,"Update project code with a source collection entity and a tar get collection entity. For example, import a service to another service and inject the source service class as an annotated dependency."),(0,r.kt)("p",null,"With the default official collection ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/collections"),", its help information is printed as following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage: agros update|u [options] [command]\n\nUpdate an Agros.js collections with another collection\n\nOptions:\n  -h, --help                        display help for command\n\nCommands:\n  component|c [options] <target>\n  interceptor|i [options] <target>\n  module|m [options] <target>\n  service|s [options] <target>\n  help [command]                    display help for command\n")),(0,r.kt)("h2",{id:"sub-commands"},"Sub Commands"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@agros/collections")," provides 4 collections: ",(0,r.kt)("inlineCode",{parentName:"p"},"component"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"interceptor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", so the ",(0,r.kt)("inlineCode",{parentName:"p"},"agros update")," command can take these 4 collections as its sub commands. We can now dive into them to get more information about them."),(0,r.kt)("h3",{id:"agros-update-module"},"agros update module"),(0,r.kt)("h3",{id:"agros-update-component"},"agros update component"),(0,r.kt)("h3",{id:"agros-update-service"},"agros update service"),(0,r.kt)("h3",{id:"agros-update-interceptor"},"agros update interceptor"))}d.isMDXComponent=!0}}]);