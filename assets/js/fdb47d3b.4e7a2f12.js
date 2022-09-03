"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[582],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>c});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},u=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||a;return t?n.createElement(f,s(s({ref:o},u),{},{components:t})):n.createElement(f,s({ref:o},u))}));function c(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2245:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2},s="agros routes",i={unversionedId:"cli-commands/routes",id:"version-0.x/cli-commands/routes",title:"agros routes",description:"Manage routes in Agros projects.",source:"@site/versioned_docs/version-0.x/cli-commands/routes.md",sourceDirName:"cli-commands",slug:"/cli-commands/routes",permalink:"/docs/cli-commands/routes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.x/cli-commands/routes.md",tags:[],version:"0.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"agros update",permalink:"/docs/cli-commands/update"},next:{title:"Configurations",permalink:"/docs/category/configurations"}},l={},p=[{value:"agros routes add",id:"agros-routes-add",level:2},{value:"--export",id:"--export",level:3},{value:"--path, -p pathname",id:"--path--p-pathname",level:3},{value:"--use-component, -C identifier",id:"--use-component--c-identifier",level:3},{value:"--use-module, -M identifier",id:"--use-module--m-identifier",level:3}],u={toc:p};function m(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agros-routes"},"agros routes"),(0,r.kt)("p",null,"Manage routes in Agros projects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Usage: agros routes|r [options] [command]\n\nManage project routes\n\nOptions:\n  -h, --help                display help for command\n\nCommands:\n  add|a [options] <target>  Add a route with a module class or a component class\n  help [command]            display help for command\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details about routes in Agros, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/application#routes"},"this documentation"),".")),(0,r.kt)("h2",{id:"agros-routes-add"},"agros routes add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Usage: agros routes add|a [options] <target>\n\nAdd a route with a module class or a component class\n\nArguments:\n  target                            Target module\'s pathname or identifier\n\nOptions:\n  --export                          Export source class from target module (default: false)\n  -p, --path [pathname]             The pathname to the route (preset: "")\n  -C, --use-component [identifier]  Source component\'s pathname or identifier (preset: "")\n  -M, --use-module [identifier]     Source module\'s pathname or identifier (preset: "")\n  -h, --help                        display help for command\n')),(0,r.kt)("p",null,"Add routes by CLI, a target module's pathname, ",(0,r.kt)("inlineCode",{parentName:"p"},"--path")," and one of ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-component")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-module")," must be specified. By executing this command, a route or a group of routes will be added to the target module."),(0,r.kt)("p",null,"Suppose we have a module named ",(0,r.kt)("inlineCode",{parentName:"p"},"FooModule")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.module.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.modules.ts",title:"src/modules/foo/foo.modules.ts"},"import { Module } from '@agros/app';\n\n@Module()\nexport class FooModule {}\n")),(0,r.kt)("p",null,"And a component named ",(0,r.kt)("inlineCode",{parentName:"p"},"FooComponent")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.component.ts"),", if we want to add a route with pathname ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),", we should execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"agros routes add ./src/modules/foo/foo.module.ts --path foo --use-component ./src/modules/foo/foo.component.ts\n")),(0,r.kt)("p",null,"Then the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"FooModule")," will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\nimport { FooComponent } from '@modules/foo/foo.component';\n\n@Module({\n    components: [FooComponent],\n    routes: [\n        {\n            path: 'foo',\n            useComponentClass: FooComponent,\n        },\n    ],\n})\nexport class FooModule {}\n")),(0,r.kt)("h3",{id:"--export"},"--export"),(0,r.kt)("p",null,"This flag controls the source class should be exported or not. By default it is set to be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If the flag be specified, it will export ",(0,r.kt)("strong",{parentName:"p"},"component classes")," from target module when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-component")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\nimport { FooComponent } from '@modules/foo/foo.component';\n\n@Module({\n    components: [FooComponent],\n    routes: [\n        {\n            path: 'foo',\n            useComponentClass: FooComponent,\n        },\n    ],\n    // highlight-next-line\n    exports: [FooComponent],\n})\nexport class FooModule {}\n")),(0,r.kt)("h3",{id:"--path--p-pathname"},"--path, -p ","[pathname]"),(0,r.kt)("p",null,"A pathname without leading slash."),(0,r.kt)("h3",{id:"--use-component--c-identifier"},"--use-component, -C ","[identifier]"),(0,r.kt)("p",null,"Use a component class to define a route, a pathname to the component declaration file must be specified as value."),(0,r.kt)("h3",{id:"--use-module--m-identifier"},"--use-module, -M ","[identifier]"),(0,r.kt)("p",null,"Use a module class to define a route, a pathname to the module declaration file must be specified as value."))}m.isMDXComponent=!0}}]);