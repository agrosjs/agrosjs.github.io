"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[1861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="agros update",l={unversionedId:"cli-commands/update",id:"version-0.7.x/cli-commands/update",title:"agros update",description:"Update project code with a source collection entity and a tar get collection entity. For example, import a service to another service and inject the source service class as an annotated dependency.",source:"@site/versioned_docs/version-0.7.x/cli-commands/update.md",sourceDirName:"cli-commands",slug:"/cli-commands/update",permalink:"/docs/0.7.x/cli-commands/update",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-0.7.x/cli-commands/update.md",tags:[],version:"0.7.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"agros generate",permalink:"/docs/0.7.x/cli-commands/generate"},next:{title:"Configurations",permalink:"/docs/0.7.x/category/configurations"}},p={},s=[{value:"Update Map",id:"update-map",level:2},{value:"agros update module",id:"agros-update-module",level:2},{value:"--from value",id:"--from-value",level:3},{value:"--skip-export",id:"--skip-export",level:3},{value:"--async-module",id:"--async-module",level:3},{value:"agros update component",id:"agros-update-component",level:2},{value:"--from value",id:"--from-value-1",level:3},{value:"agros update service",id:"agros-update-service",level:2},{value:"--from value",id:"--from-value-2",level:3},{value:"--accessibility value",id:"--accessibility-value",level:3},{value:"--skip-readonly",id:"--skip-readonly",level:3},{value:"agros update interceptor",id:"agros-update-interceptor",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agros-update"},"agros update"),(0,a.kt)("p",null,"Update project code with a source collection entity and a tar get collection entity. For example, import a service to another service and inject the source service class as an annotated dependency."),(0,a.kt)("p",null,"With the default official collection ",(0,a.kt)("inlineCode",{parentName:"p"},"@agros/collections"),", its help information is printed as following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: agros update|u [options] [command]\n\nUpdate an Agros.js collections with another collection\n\nOptions:\n  -h, --help                        display help for command\n\nCommands:\n  component|c [options] <target>\n  interceptor|i [options] <target>\n  module|m [options] <target>\n  service|s [options] <target>\n  help [command]                    display help for command\n")),(0,a.kt)("h2",{id:"update-map"},"Update Map"),(0,a.kt)("p",null,"In an Agros project, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," sub-command from CLI to add entity classes to another entity class. However, there are several scenarios that are unable to be permitted, they are listed in the table below. The column are source entities when the row are target entities."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"module")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"component")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"service")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"interceptor")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"module")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"component")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2733\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"service")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"interceptor")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2733\ufe0f")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'"\u2733\ufe0f" means that it is currently not supported by Agros project and CLI, but it will be probably be supported in the future.')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@agros/collections")," provides 4 collections: ",(0,a.kt)("inlineCode",{parentName:"p"},"component"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"interceptor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),", so the ",(0,a.kt)("inlineCode",{parentName:"p"},"agros update")," command can take these 4 collections as its sub commands. We can now dive into them to get more information about them."),(0,a.kt)("h2",{id:"agros-update-module"},"agros update module"),(0,a.kt)("p",null,"Add source entity to a proper field in ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator of target module entity, and export it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros update module|m [options] <target>\n\nArguments:\n  target           Target entity pathname or identifier\n\nOptions:\n  --from [value]   Source entity pathname or identifier (preset: "")\n   --skip-export   Prevent exporting the collection from this module (default: false)\n   --async-module  If the collection is a module, use this flag will asynchronously import this collection (default: false)\n  -h, --help       display help for command\n')),(0,a.kt)("p",null,"Suppose we have a source service file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.service.ts")," which exports a class named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService"),", and a target module file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/bar/bar.module.ts")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/bar/bar.module.ts",title:"src/modules/bar/bar.module.ts"},"import { Module } from '@agros/app';\n\n@Module()\nexport class BarModule {}\n")),(0,a.kt)("p",null,"We can declare ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"BarModule")," and declare it in ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"exports")," fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"agros update module ./src/modules/bar/bar.module.ts --from ./src/modules/foo/foo.service.ts\n")),(0,a.kt)("p",null,"Then the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"BarModule")," file will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@agros/app';\n// highlight-next-line\nimport { BarService } from '@modules/bar/bar.service';\n\n@Module({\n    // highlight-start\n    providers: [\n        BarService,\n    ],\n    exports: [\n        BarService,\n    ],\n    // highlight-end\n})\nexport class FooModule {}\n")),(0,a.kt)("p",null,"In the same way, we can update ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," and other entities to a module."),(0,a.kt)("h3",{id:"--from-value"},"--from ","[value]"),(0,a.kt)("p",null,"The pathname of source entity. It must be specified when executing this command."),(0,a.kt)("h3",{id:"--skip-export"},"--skip-export"),(0,a.kt)("p",null,"When updating ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," and other injectable entities into a module entity, Agros will add them into ",(0,a.kt)("inlineCode",{parentName:"p"},"exports")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator. If this flag is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the entities will not be exported."),(0,a.kt)("h3",{id:"--async-module"},"--async-module"),(0,a.kt)("p",null,"When updating a module entity into another module entity, if this flag is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),",  the import declaration in root module will be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/bar/bar.module.ts",title:"src/modules/bar/bar.module.ts"},"import { Module } from '@agros/app';\n// highlight-next-line\nconst FooModule = import('@modules/foo/foo.module').then(({ FooModule }) => FooModule);\n\n@Module({\n    // ...\n    // highlight-next-line\n    imports: [FooModule],\n})\nexport class BarModule {}\n")),(0,a.kt)("h2",{id:"agros-update-component"},"agros update component"),(0,a.kt)("p",null,"Add source entity to ",(0,a.kt)("inlineCode",{parentName:"p"},"declarations")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros update component|c [options] <target>\n\nArguments:\n  target          Target entity pathname or identifier\n\nOptions:\n  --from [value]  Source entity pathname or identifier (preset: "")\n  -h, --help      display help for command\n')),(0,a.kt)("h3",{id:"--from-value-1"},"--from ","[value]"),(0,a.kt)("p",null,"The pathname of source entity. It must be specified when executing this command."),(0,a.kt)("p",null,"Suppose we have a component declaration named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooComponent")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.components")," with description file at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/Foo.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.component.ts",title:"src/modules/foo/foo.component.ts"},"import { Component } from '@agros/app';\n\n@Component({\n    file: './Foo',\n})\nexport class FooComponent {}\n")),(0,a.kt)("p",null,"If we have a service named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.service.ts")," and we hope add it into ",(0,a.kt)("inlineCode",{parentName:"p"},"FooComponent"),", we should execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"agros update ./src/modules/foo/foo.component.ts --from ./src/modules/foo/foo.service.ts\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FooComponent")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.component.ts",title:"src/modules/foo/foo.component.ts"},"import { Component } from '@agros/app';\n// highlight-next-line\nimport { FooService } from '@modules/foo/foo.service';\n\n@Component({\n    file: './Foo',\n    // highlight-start\n    declarations: [\n        FooService,\n    ],\n    // highlight-end\n})\nexport class FooComponent {}\n")),(0,a.kt)("h2",{id:"agros-update-service"},"agros update service"),(0,a.kt)("p",null,"Add source entity to the constructor of a service class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros update service|s [options] <target>\n\nArguments:\n  target                   Target entity pathname or identifier\n\nOptions:\n  --from [value]           Source entity pathname or identifier (preset: "")\n  --accessibility [value]  The accessibility of the service in target service\'s constructor (default: "private")\n   --skip-readonly         Prevent read-only parameter property (default: false)\n  -h, --help               display help for command\n')),(0,a.kt)("p",null,"Suppose we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.service.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.service.ts",title:"src/modules/foo/foo.service.ts"},"import { Injectable } from '@agros/app';\n\n@Injectable()\nexport class FooService {}\n")),(0,a.kt)("p",null,"If we hope add ",(0,a.kt)("inlineCode",{parentName:"p"},"BarService")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/bar/bar.service"),", we should execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"agros update service ./src/modules/foo/foo.service.ts --from ./src/modules/bar/bar.service.ts\n")),(0,a.kt)("p",null,"Then the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," will be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.service.ts",title:"src/modules/foo/foo.service.ts"},"import { Injectable } from '@agros/app';\n// highlight-next-line\nimport { BarService } from '@modules/bar/bar.service';\n\n@Injectable()\nexport class FooService {\n    // highlight-next-line\n    public constructor(private readonly barService: BarService) {}\n}\n")),(0,a.kt)("h3",{id:"--from-value-2"},"--from ","[value]"),(0,a.kt)("p",null,"The pathname of source entity. It must be specified when executing this command."),(0,a.kt)("h3",{id:"--accessibility-value"},"--accessibility ","[value]"),(0,a.kt)("p",null,"The accessibility of constructor property, default is ",(0,a.kt)("inlineCode",{parentName:"p"},"private")," and supports other two values: ",(0,a.kt)("inlineCode",{parentName:"p"},"protected")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),". For example, if we set the value of this flag as ",(0,a.kt)("inlineCode",{parentName:"p"},"protected"),", the updated content of ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public constructor(protected readonly barService: BarService) {}\n")),(0,a.kt)("h3",{id:"--skip-readonly"},"--skip-readonly"),(0,a.kt)("p",null,"By default, each updated constructor property will be set ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," operator to avoid being modified by user, if we do not want to have the operator, we should set this flag to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", and the updated content of ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public constructor(private barService: BarService) {}\n")),(0,a.kt)("h2",{id:"agros-update-interceptor"},"agros update interceptor"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The content about command ",(0,a.kt)("inlineCode",{parentName:"p"},"agros update interceptor")," is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"agros update service"),".")))}c.isMDXComponent=!0}}]);