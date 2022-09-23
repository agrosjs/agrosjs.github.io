"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[3334],{3905:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>u});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},m=function(e){var o=s(e.components);return n.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return t?n.createElement(g,l(l({ref:o},m),{},{components:t})):n.createElement(g,l({ref:o},m))}));function u(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9112:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_position:0},l="agros generate",i={unversionedId:"cli-commands/generate",id:"version-0.7.x/cli-commands/generate",title:"agros generate",description:"Generate files to project from specified collection.",source:"@site/versioned_docs/version-0.7.x/cli-commands/generate.md",sourceDirName:"cli-commands",slug:"/cli-commands/generate",permalink:"/docs/0.7.x/cli-commands/generate",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-0.7.x/cli-commands/generate.md",tags:[],version:"0.7.x",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/0.7.x/cli-commands/"},next:{title:"agros update",permalink:"/docs/0.7.x/cli-commands/update"}},p={},s=[{value:"agros generate application",id:"agros-generate-application",level:2},{value:"--path, -p",id:"--path--p",level:3},{value:"--skip-install, -S",id:"--skip-install--s",level:3},{value:"agros generate module",id:"agros-generate-module",level:2},{value:"--global",id:"--global",level:3},{value:"--async",id:"--async",level:3},{value:"--skip-declare-collections",id:"--skip-declare-collections",level:3},{value:"--skip-export-declared-collections",id:"--skip-export-declared-collections",level:3},{value:"agros generate component",id:"agros-generate-component",level:2},{value:"--lazy",id:"--lazy",level:3},{value:"--skip-export",id:"--skip-export",level:3},{value:"agros generate interceptor",id:"agros-generate-interceptor",level:2},{value:"--skip-export",id:"--skip-export-1",level:3},{value:"agros generate service",id:"agros-generate-service",level:2},{value:"--skip-export",id:"--skip-export-2",level:3}],m={toc:s};function d(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agros-generate"},"agros generate"),(0,a.kt)("p",null,"Generate files to project from specified collection."),(0,a.kt)("p",null,"With the default official collection ",(0,a.kt)("inlineCode",{parentName:"p"},"@agros/collections"),", its help information is printed as following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: agros generate|g [options] [command]\n\nGenerate Agros.js collections\n\nOptions:\n  -h, --help                                    display help for command\n\nCommands:\n  application|a [options]\n  component|c [options] <name> [module-name]\n  interceptor|i [options] <name> [module-name]\n  module|m [options] <name>\n  service|s [options] <name> [module-name]\n  help [command]                                display help for command\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@agros/collections")," provides 5 collections: ",(0,a.kt)("inlineCode",{parentName:"p"},"application"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"component"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"interceptor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),", so the ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate")," command can take these 5 collections as its sub commands. We can now dive into them to get more information about them."),(0,a.kt)("h2",{id:"agros-generate-application"},"agros generate application"),(0,a.kt)("p",null,"Generate the whole application with default template using ",(0,a.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),". It's based on ",(0,a.kt)("inlineCode",{parentName:"p"},"@agros/create-app"),", so it equals to ",(0,a.kt)("inlineCode",{parentName:"p"},"npm create @agros/app"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros generate application|a [options]\n\nOptions:\n  -p, --path [value]          Target path of the project (default: "")\n  -S, --skip-install [value]  Skip dependencies installation (default: false)\n  -h, --help                  display help for command\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is dangerous because it will modify cwd directory.")),(0,a.kt)("h3",{id:"--path--p"},"--path, -p"),(0,a.kt)("p",null,"The target pathname to generate project files, default value is the current cwd, which should be ",(0,a.kt)("inlineCode",{parentName:"p"},"process.cwd()"),"."),(0,a.kt)("h3",{id:"--skip-install--s"},"--skip-install, -S"),(0,a.kt)("p",null,"If this flag is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the generator will not automatically install dependencies after generating the project."),(0,a.kt)("h2",{id:"agros-generate-module"},"agros generate module"),(0,a.kt)("p",null,"Generate module file and automatically import and update root module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: agros generate module|m [options] <name>\n\nArguments:\n  name                                 The name of the module\n\nOptions:\n   --global                            Set this module as a global module (default: false)\n   --async                             Set this module as a async module (default: false)\n   --skip-declare-collections          Skip declaring existed collections (services & components) (default: false)\n   --skip-export-declared-collections  Skip exporting the collections declared before (default: false)\n  -h, --help                           display help for command\n")),(0,a.kt)("p",null,"The argument ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," must be specified to define module name. The module's class name would be named as ",(0,a.kt)("strong",{parentName:"p"},"start case")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"'s value. Here is a example of ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate module"),":"),(0,a.kt)("p",null,"Suppose we want to generate a module named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooModule"),", we should execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"agros generate module foo\n")),(0,a.kt)("p",null,"It will generate the module file content into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.module.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\n\n@Module()\nexport class FooModule {}\n")),(0,a.kt)("p",null,"Root module will be automatically updated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/app.module.ts",title:"src/app.module.ts"},"import { Module } from '@agros/app';\nimport { AppComponent } from '@/app.component';\nimport { AppService } from '@/app.service';\nimport { AppInterceptor } from '@/app.interceptor';\n// highlight-next-line\nimport { FooModule } from '@modules/foo/foo.module';\n\n@Module({\n    providers: [\n        AppInterceptor,\n        AppService,\n    ],\n    components: [AppComponent],\n    routes: [\n        {\n            path: '',\n            useComponentClass: AppComponent,\n        },\n    ],\n    exports: [\n        AppComponent,\n        AppInterceptor,\n        AppService,\n    ],\n    // highlight-next-line\n    imports: [FooModule],\n})\nexport class AppModule {}\n")),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"Generate a ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/modules#global-modules"},"global module"),"."),(0,a.kt)("h3",{id:"--async"},"--async"),(0,a.kt)("p",null,"Asynchoronously import this module in root module, if the flag is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the import declaration in root module will be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/app.module.ts",title:"src/app.module.ts"},"import { Module } from '@agros/app';\n// highlight-next-line\nconst FooModule = import('@modules/foo/foo.module').then(({ FooModule }) => FooModule);\n\n@Module({\n    // ...\n    // highlight-next-line\n    imports: [FooModule],\n})\nexport class AppModule {}\n")),(0,a.kt)("h3",{id:"--skip-declare-collections"},"--skip-declare-collections"),(0,a.kt)("p",null,"Suppose we have a directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/bar"),", and there are not a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/bar/bar.module.ts"),", but have a service file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/bar/bar.service.ts"),",that is, no module file in the directory -- it is legal of course. In this case, when we execute ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate module bar"),", it will automatically declare ",(0,a.kt)("inlineCode",{parentName:"p"},"BarService")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"bar.service.ts")," as its provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/bar/bar.module.ts",title:"src/modules/bar/bar.module.ts"},"import { Module } from '@agros/app';\n// highlight-next-line\nimport { BarService } from '@modules/bar/bar.service';\n\n@Module({\n    // highlight-start\n    providers: [\n        BarService,\n    ],\n    // highlight-end\n    // ...\n})\nexport class BarModule {}\n")),(0,a.kt)("p",null,"If the flag is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the new-generated module file will not declare any providers and components anymore."),(0,a.kt)("h3",{id:"--skip-export-declared-collections"},"--skip-export-declared-collections"),(0,a.kt)("p",null,"In the case mentioned above, a new-generated will also export existing providers and components by default. If this flag is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the new-generated module file will not export any providers and components anymore."),(0,a.kt)("h2",{id:"agros-generate-component"},"agros generate component"),(0,a.kt)("p",null,"Generate component declaration file into a module and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in the corresponding module file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros generate component|c [options] <name> [module-name]\n\nArguments:\n  name             The name of the component\n  module-name      The name of module who manages this component (default: "$context$name")\n\nOptions:\n   --lazy          Lazy-load component (default: false)\n   --skip-export   Skip exporting this component from module (default: false)\n  -h, --help       display help for command\n')),(0,a.kt)("p",null,"The argument ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," must be specified when the ",(0,a.kt)("inlineCode",{parentName:"p"},"module-name")," argument can take the value from ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," as its default value. The component's class name would be named as ",(0,a.kt)("strong",{parentName:"p"},"start case")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"'s value. Here is a example of ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate component"),":"),(0,a.kt)("p",null,"Suppose we have a project initialized by ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate application"),", which contains a module named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooModule"),", we can now generate a component named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooComponent")," by executing this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"agros generate component foo\n")),(0,a.kt)("p",null,"It will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.component.ts")," as component declaration file and ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/Foo.tsx")," as component description file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.component.ts",title:"src/modules/foo/foo.component.ts"},"import { Component } from '@agros/app';\n\n@Component({\n    file: '@modules/foo/Foo',\n})\nexport class FooComponent {}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@modules/*")," is a default path alias in Agros application which points to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/*"),".")),(0,a.kt)("p",null,"In the meantime, ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.module.ts")," will be automatically updated to import ",(0,a.kt)("inlineCode",{parentName:"p"},"FooComponent")," and declare it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\n// highlight-next-line\nimport { FooComponent } from '@modules/foo/foo.component';\n\n@Module({\n    // highlight-start\n    components: [FooComponent],\n    exports: [FooComponent],\n    // highlight-end\n})\nexport class FooModule {}\n")),(0,a.kt)("h3",{id:"--lazy"},"--lazy"),(0,a.kt)("p",null,"Import component description as a lazy-load component. The component declaration file will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.component.ts",title:"src/modules/foo/foo.component.ts"},"import { Component } from '@agros/app';\n\n@Component({\n    file: '@modules/foo/Foo',\n    // highlight-next-line\n    lazy: true,\n})\nexport class FooComponent {}\n")),(0,a.kt)("h3",{id:"--skip-export"},"--skip-export"),(0,a.kt)("p",null,"If this flat is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the component declaration will not be exported from its corresponding module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\nimport { FooComponent } from '@modules/foo/foo.component';\n\n@Module({\n    components: [FooComponent],\n    // highlight-start\n    exports: [],\n    // highlight-end\n})\nexport class FooModule {}\n")),(0,a.kt)("h2",{id:"agros-generate-interceptor"},"agros generate interceptor"),(0,a.kt)("p",null,"Generate interceptor file into a module and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in the corresponding module file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros generate interceptor|i [options] <name> [module-name]\n\nArguments:\n  name            The name of the interceptor\n  module-name     The name of module who manages this interceptor (default: "$context$name")\n\nOptions:\n   --skip-export  Skip exporting this interceptor from module (default: false)\n  -h, --help      display help for command\n')),(0,a.kt)("p",null,"The argument ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," must be specified when the ",(0,a.kt)("inlineCode",{parentName:"p"},"module-name")," argument can take the value from ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," as its default value. The interceptor's class name would be named as ",(0,a.kt)("strong",{parentName:"p"},"start case")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"'s value. Here is a example of ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate interceptor"),":"),(0,a.kt)("p",null,"We can now generate a interceptor named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooInterceptor")," by executing this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"agros generate interceptor foo\n")),(0,a.kt)("p",null,"It will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.interceptor.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.interceptor.ts",title:"src/modules/foo/foo.interceptor.ts"},"import {\n    Injectable,\n    Interceptor,\n} from '@agros/app';\n\n@Injectable()\nexport class FooInterceptor implements Interceptor {\n    public intercept(props, context): any {\n        return;\n    }\n}\n")),(0,a.kt)("p",null,"In the meantime, ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.module.ts")," will be automatically updated to import ",(0,a.kt)("inlineCode",{parentName:"p"},"FooInterceptor")," and declare it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\nimport { FooComponent } from '@modules/foo/foo.component';\n// highlight-next-line\nimport { FooInterceptor } from '@modules/foo/foo.interceptor';\n\n@Module({\n    components: [FooComponent],\n    exports: [\n        FooComponent,\n        // highlight-next-line\n        FooInterceptor,\n    ],\n    providers: [FooInterceptor],\n})\nexport class FooModule {}\n")),(0,a.kt)("h3",{id:"--skip-export-1"},"--skip-export"),(0,a.kt)("p",null,"If this flat is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the interceptor will not be exported from its corresponding module."),(0,a.kt)("h2",{id:"agros-generate-service"},"agros generate service"),(0,a.kt)("p",null,"Generate service file into a module and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," field of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator in the corresponding module file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: agros generate service|s [options] <name> [module-name]\n\nArguments:\n  name            The name of the service\n  module-name     The name of module who manages this service (default: "$context$name")\n\nOptions:\n   --skip-export  Skip exporting this service from module (default: false)\n  -h, --help      display help for command\n')),(0,a.kt)("p",null,"The argument ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," must be specified when the ",(0,a.kt)("inlineCode",{parentName:"p"},"module-name")," argument can take the value from ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," as its default value. The service's class name would be named as ",(0,a.kt)("strong",{parentName:"p"},"start case")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"'s value. Here is a example of ",(0,a.kt)("inlineCode",{parentName:"p"},"agros generate service"),":"),(0,a.kt)("p",null,"We can now generate a service named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," by executing this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"agros generate service foo\n")),(0,a.kt)("p",null,"It will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.service.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.service.ts",title:"src/modules/foo/foo.service.ts"},"import { Injectable } from '@agros/app';\n\n@Injectable()\nexport class FooService {}\n")),(0,a.kt)("p",null,"In the meantime, ",(0,a.kt)("inlineCode",{parentName:"p"},"src/modules/foo/foo.module.ts")," will be automatically updated to import ",(0,a.kt)("inlineCode",{parentName:"p"},"FooService")," and declare it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import { Module } from '@agros/app';\nimport { FooComponent } from '@modules/foo/foo.component';\nimport { FooInterceptor } from '@modules/foo/foo.interceptor';\n// highlight-next-line\nimport { FooService } from '@modules/foo/foo.service';\n\n@Module({\n    components: [FooComponent],\n    exports: [\n        FooComponent,\n        FooInterceptor,\n        // highlight-next-line\n        FooService,\n    ],\n    providers: [\n        FooInterceptor,\n        // highlight-next-line\n        FooService,\n    ],\n})\nexport class FooModule {}\n")),(0,a.kt)("h3",{id:"--skip-export-2"},"--skip-export"),(0,a.kt)("p",null,"If this flat is set to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the service will not be exported from its corresponding module."))}d.isMDXComponent=!0}}]);