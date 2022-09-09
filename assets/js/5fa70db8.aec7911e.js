"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[1857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7},i="Application",l={unversionedId:"overview/application",id:"version-0.7.x/overview/application",title:"Application",description:"Platforms",source:"@site/versioned_docs/version-0.7.x/overview/application.md",sourceDirName:"overview",slug:"/overview/application",permalink:"/docs/overview/application",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-0.7.x/overview/application.md",tags:[],version:"0.7.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Interceptors",permalink:"/docs/overview/interceptors"},next:{title:"CLI",permalink:"/docs/cli-commands/"}},p={},s=[{value:"Platforms",id:"platforms",level:2},{value:"Entry Point",id:"entry-point",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application"},"Application"),(0,o.kt)("h2",{id:"platforms"},"Platforms"),(0,o.kt)("p",null,"Agros supports many frameworks. Now we have already supported React.js and Vue.js with SFC officially, and we are still have Svelte and Solid.js in progress. Agros made it by the technology called ",(0,o.kt)("strong",{parentName:"p"},"platform"),". An Agros platform provides the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"component generator: a function that can be invoked by Agros factory to generate framework-specific component with component declaration instance"),(0,o.kt)("li",{parentName:"ul"},"routes creator: a function that can be invoked by Agros factory to generate framework-specific routes config with ",(0,o.kt)("inlineCode",{parentName:"li"},"routes")," option in ",(0,o.kt)("inlineCode",{parentName:"li"},"@Module()")," decorator"),(0,o.kt)("li",{parentName:"ul"},"component decorator transformer: transform ",(0,o.kt)("inlineCode",{parentName:"li"},"file")," option in ",(0,o.kt)("inlineCode",{parentName:"li"},"@Component()")," decorator with import declarations that will be invoked by component generator to generate components")),(0,o.kt)("p",null,"and so on to help Agros factory build and run the application."),(0,o.kt)("p",null,"By default, Agros provides two platforms mentioned above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.org/package/@agros/platform-react"},(0,o.kt)("inlineCode",{parentName:"a"},"@agros/platform-react")),": Official platform for React.js"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npmjs.org/package/@agros/platform-vue"},(0,o.kt)("inlineCode",{parentName:"a"},"@agros/platform-vue")),": Official platform for Vue.js")),(0,o.kt)("p",null,"To use a platform, for example, use official Vue.js platform, run the following command in the root directory of your Agros project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @agros/platform-vue -S\n")),(0,o.kt)("p",null,"and add the following code into ",(0,o.kt)("inlineCode",{parentName:"p"},"agros.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=agros.config.js",title:"agros.config.js"},"module.exports = {\n    platform: '@agros/platform-vue',\n};\n")),(0,o.kt)("h2",{id:"entry-point"},"Entry Point"),(0,o.kt)("p",null,"By default, Agros uses ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts")," as the entry of an application. Agros build scripts takes an object default exported from this file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"module"),": the root module class, be used of constructing the whole application dependencies graph"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"container"),": a ",(0,o.kt)("inlineCode",{parentName:"li"},"HTMLElement")," node that indicate where the application should be mounted, the default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"document.getElementById('root')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RouterComponent"),": a router component by platform")),(0,o.kt)("p",null,"The code below is an example of entry point file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts",title:"src/index.ts"},"import { HashRouter } from '@agros/platform-react/lib/react-router-dom';\nimport { AppModule } from './app.module';\n\nexport default {\n    module: AppModule,\n    container: document.getElementById('root'),\n    RouterComponent: HashRouter,\n};\n")))}m.isMDXComponent=!0}}]);