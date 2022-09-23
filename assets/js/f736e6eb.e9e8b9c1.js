"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[2312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="First Steps",l={unversionedId:"overview/first-steps",id:"version-1.1.x/overview/first-steps",title:"First Steps",description:"In this set of documentations, we will describe and document the core fundamentals of Agros. To get familiar with the essential modules of Agros applications, we'll build a basic application with features that cover the most scenes for you to get started with Agros.",source:"@site/versioned_docs/version-1.1.x/overview/first-steps.md",sourceDirName:"overview",slug:"/overview/first-steps",permalink:"/docs/overview/first-steps",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.1.x/overview/first-steps.md",tags:[],version:"1.1.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/category/overview"},next:{title:"Components",permalink:"/docs/overview/components"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Change Platform",id:"change-platform",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-steps"},"First Steps"),(0,a.kt)("p",null,"In this set of documentations, we will describe and document the core fundamentals of Agros. To get familiar with the essential modules of Agros applications, we'll build a basic application with features that cover the most scenes for you to get started with Agros."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"\u2705 Use TypeScript to write project",(0,a.kt)("br",null),"\n\u2705 ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," v16.14.0 or later",(0,a.kt)("br",null),"\n\u2733\ufe0f A computer with 4 GB RAM"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Item with "\u2705" means it is a "it must to" requirement while "\u2733\ufe0f" means "it\'s better to".')),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"Initializing a project requires preparing the NPM and installing the Agros CLI. You can run the following command in your operating system to initialize a new Agros project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @agros/cli -g\nagros generate application\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This command will generate the project's files in the directory where the command is executed, so if a file or directory or anything else exists in the current directory, it will throw an error and terminate execution."),(0,a.kt)("p",{parentName:"admonition"},"Of course, you can also select another directory by means of ",(0,a.kt)("inlineCode",{parentName:"p"},"--path [value]"),", and when this directory does not exist, Agros CLI will create it automatically.")),(0,a.kt)("p",null,"Here are the initial files in the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app.component.css\n\u2502   \u251c\u2500\u2500 app.component.ts\n\u2502   \u251c\u2500\u2500 app.interceptor.ts\n\u2502   \u251c\u2500\u2500 app.module.ts\n\u2502   \u251c\u2500\u2500 app.service.ts\n\u2502   \u251c\u2500\u2500 App.tsx\n\u2502   \u2514\u2500\u2500 index.ts\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Here's a brief overview of the important files in ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Filename"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"app.component.ts")),(0,a.kt)("td",{parentName:"tr",align:null},"The component declaration file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"app.interceptor.ts")),(0,a.kt)("td",{parentName:"tr",align:null},"The interceptor declaration file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"app.module.ts")),(0,a.kt)("td",{parentName:"tr",align:null},"The root-point module")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"App.tsx")),(0,a.kt)("td",{parentName:"tr",align:null},"The component file for React platform")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"index.ts")),(0,a.kt)("td",{parentName:"tr",align:null},"The entry point for the whole project")))),(0,a.kt)("h2",{id:"change-platform"},"Change Platform"),(0,a.kt)("p",null,"By default, Agros starter boilerplate uses ",(0,a.kt)("inlineCode",{parentName:"p"},"@agros/platform-react")," as its default platform, which means you can write React code in the starter project without changing platform."),(0,a.kt)("p",null,"If you want to change a platform, for example, switch from React to Vue, you can make it by following commands:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Uninstall ",(0,a.kt)("inlineCode",{parentName:"li"},"@agros/platform-react"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall @agros/platfrom-react -S\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install official Vue platform ",(0,a.kt)("inlineCode",{parentName:"li"},"@agros/platform-vue"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @agros/platform-vue -S\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add a new file named ",(0,a.kt)("inlineCode",{parentName:"li"},"agros.config.js")," into project directory, and write the following lines:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    platform: '@agros/platform-vue',\n};\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Remove React TSX files and add Vue files")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can find all official platforms at ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40agros%2Fplatform-"},"here"),".")))}m.isMDXComponent=!0}}]);