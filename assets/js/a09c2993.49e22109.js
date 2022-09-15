"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Agros is a framework for building robust, clean and scalable web applications. It based on TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming).",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/next/introduction",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/docs/next/category/overview"}},s={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Features",id:"features",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Installation",id:"installation",level:3},{value:"TypeScript Configuration",id:"typescript-configuration",level:3},{value:"Run the Project",id:"run-the-project",level:3},{value:"Build the Project",id:"build-the-project",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Agros is a framework for building robust, clean and scalable web applications. It based on TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming)."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Web front-end frameworks (such as React.js, Vue.js and so on) has greatly helped developers build fast and responsive web applications, while its simplicity has also allowed it to accumulate a large number of users in a short period of time, and some large websites have started to be built entirely using them. All of this speaks volumes about the success of them. However, there are a number of architectural problems with building large web applications using front-end frameworks that add up to additional and increasingly large expenses for maintaining and iterating on the project, and Agros was created to solve these problems."),(0,o.kt)("p",null,"Inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io"},"Angular")," and ",(0,o.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"Nest.js")," and based on multiple platforms support, Agros provides an out-of-the-box experience to help developers create highly available, highly maintainable, stable, and low-coupling web applications."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy to Use. Agros provides some extremely simple decorators and methods to help you get started with Agros quickly, and Agros is minimally invasive to existing projects, so there's no need to go through the trouble of refactoring your code"),(0,o.kt)("li",{parentName:"ul"},"Framework Unrelated. Agros is a runtime for extensible web application architectures that does not contain any framework-related methods. Agros implements framework-specific abstractions based on platform technologies, so framework support can be implemented by introducing the corresponding platform. Agros currently has full support for React.js and Vue.js respectively"),(0,o.kt)("li",{parentName:"ul"},"Empower Efficiency. Agros provides a set of command line tools to help you quickly generate various modules of Agros applications. In addition, Agros uses a convention-over-configuration model, which allows you to quickly jump into development without having to pay too much attention to various configuration items")),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To get started, you can either scaffold the project with the Agros CLI. The Agros CLI helps you easily make and configure collections (providers, components and modules) into your projects, which is useful when the structure project is increasing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @agros/cli -g\n")),(0,o.kt)("p",null,"To scaffold the project with the Agros CLI, run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# With Agros CLI\nagros generate application\n")),(0,o.kt)("p",null,"Follow the instruction prompted from CLI and it will create a new project in the current directory (or create a new project directory with ",(0,o.kt)("inlineCode",{parentName:"p"},"--path [value]")," specified), and populate the directory with the initial core Agros files and supporting modules, creating a base structure for your project."),(0,o.kt)("p",null,"Creating a new project with the Agros CLI is recommended for first-time users. But you can still use ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/create-app")," to alternatively generate the same project files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Globally install package\nnpm i @agros/create-app\n# Generate project\nnpm create @agros/app\n# or\ncreate-agros-app\n")),(0,o.kt)("h3",{id:"typescript-configuration"},"TypeScript Configuration"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the project root directory, add following options into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "emitDecoratorMetadata": true,\n        "experimentalDecorators": true\n    }\n}\n')),(0,o.kt)("h3",{id:"run-the-project"},"Run the Project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n# or\nnpx agros-app start\n")),(0,o.kt)("p",null,"Agros will start a server binds with ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0:3000")," after executing this command. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," port is already in use, it will automatically find a new port available."),(0,o.kt)("h3",{id:"build-the-project"},"Build the Project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n# or\nnpx agros-app build\n")),(0,o.kt)("p",null,"The default distribution directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),", after executing this command, Agros will generate all the bundled files into it. You can run a HTTP server in it or do any other things you want with them."))}u.isMDXComponent=!0}}]);