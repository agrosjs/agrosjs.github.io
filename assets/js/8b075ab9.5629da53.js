"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4732],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(o),c=n,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return o?r.createElement(h,a(a({ref:t},d),{},{components:o})):r.createElement(h,a({ref:t},d))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4391:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:4},a="Modules",l={unversionedId:"overview/modules",id:"version-0.x/overview/modules",title:"Modules",description:"A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata with providers, components, routes, imported modules, which could be made use of to organize an Agros application.",source:"@site/versioned_docs/version-0.x/overview/modules.md",sourceDirName:"overview",slug:"/overview/modules",permalink:"/docs/overview/modules",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.x/overview/modules.md",tags:[],version:"0.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Providers",permalink:"/docs/overview/providers"},next:{title:"Interceptors",permalink:"/docs/overview/interceptors"}},s={},p=[{value:"Shared Modules",id:"shared-modules",level:2},{value:"Exports",id:"exports",level:3},{value:"Imports",id:"imports",level:3},{value:"Global Modules",id:"global-modules",level:2},{value:"Asynchoronous Modules",id:"asynchoronous-modules",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modules"},"Modules"),(0,n.kt)("p",null,"A module is a class annotated with a ",(0,n.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator. The ",(0,n.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator provides metadata with providers, components, routes, imported modules, which could be made use of to organize an Agros application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"modules",src:o(1303).Z,width:"2012",height:"1052"})),(0,n.kt)("p",null,"When an Agros application is to be initialized, one and only one module, called the ",(0,n.kt)("strong",{parentName:"p"},"root module"),", must be provided as the entry module for the application built by Agros."),(0,n.kt)("p",null,"Let's continue with the examples written before, now we should create a module called ",(0,n.kt)("inlineCode",{parentName:"p"},"UserModule"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.module.ts",title:"user.module.ts"},"import { Module } from '@agros/app';\n\n@Module()\nexport class UserModule {}\n")),(0,n.kt)("h2",{id:"shared-modules"},"Shared Modules"),(0,n.kt)("h3",{id:"exports"},"Exports"),(0,n.kt)("p",null,"In Agros, any normal module is shared module, which means it can be reused by other modules and its ",(0,n.kt)("strong",{parentName:"p"},"exported")," providers and components can also be accessed from other modules .Here is an example of using imports and exports to share providers between modules:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 src/\n    \u2514\u2500\u2500 modules/\n        \u251c\u2500\u2500 user/\n        \u2502   \u251c\u2500\u2500 user.module.ts\n        \u2502   \u2514\u2500\u2500 user.service.ts\n        \u2514\u2500\u2500 profile/\n            \u251c\u2500\u2500 profile.module.ts\n            \u2514\u2500\u2500 profile.service.ts\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"user.service.ts")," is a provider declared in the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserModule"),", which is declared and exported by the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserModule"),":"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can find the content of ",(0,n.kt)("inlineCode",{parentName:"p"},"UserService")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/overview/providers#services"},"here"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.module.ts",title:"user.module.ts"},"import { Module } from '@agros/app';\nimport { UserService } from './user.service';\n\n@Module({\n    providers: [\n        UserService,\n    ],\n    // highlight-start\n    exports: [\n        UserService,\n    ],\n    // highlight-end\n})\nexport class UserModule {}\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"UserService")," must be ",(0,n.kt)("strong",{parentName:"p"},"exported")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"UserModule")," that it can be imported by other modules.")),(0,n.kt)("h3",{id:"imports"},"Imports"),(0,n.kt)("p",null,"Now, the ",(0,n.kt)("inlineCode",{parentName:"p"},"ProfileService")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ProfileModule")," wants to have access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getCurrentUser")," method in the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserService"),", so the ",(0,n.kt)("inlineCode",{parentName:"p"},"FooModule")," must be imported via the ",(0,n.kt)("inlineCode",{parentName:"p"},"imports")," option in ",(0,n.kt)("inlineCode",{parentName:"p"},"bar.module.ts"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=profile.module.ts",title:"profile.module.ts"},"import { Module } from '@agros/app';\nimport { ProfileService } from './profile.service';\n// highlight-next-line\nimport { UserModule } from '../user/user.module';\n\n@Module({\n    imports: [\n        UserModule,\n    ],\n    // highlight-start\n    providers: [\n        ProfileService,\n    ],\n    // highlight-end\n})\nexport class ProfileModule {}\n")),(0,n.kt)("p",null,"Next, the ",(0,n.kt)("inlineCode",{parentName:"p"},"ProfileService")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"profile.service.ts")," can pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserService")," as a type annotation with one parameter into the constructor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=profile.service.ts",title:"profile.service.ts"},"import { Injectable } from '@agros/app';\nimport { UserService } from '../user/user.service';\n\n@Injectable()\nexport class ProfileService {\n    // highlight-start\n    public constructor(\n        private readonly userService: UserService,\n    ) {}\n    // highlight-end\n\n    public async getProfile() {\n        // highlight-next-line\n        const currentUser = await this.userServuce.getCurrentUser();\n        return currentUser;\n    }\n}\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Notice the use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"private")," syntax. This shorthand allows us to both declare and initialize the ",(0,n.kt)("inlineCode",{parentName:"p"},"userService"),"'s member immediately in the same location.")),(0,n.kt)("h2",{id:"global-modules"},"Global Modules"),(0,n.kt)("p",null,"If you have to import the same set of modules everywhere, it can be very boring. So when you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., utilities, etc.), make the module global with the ",(0,n.kt)("inlineCode",{parentName:"p"},"@Global()")," decorator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=utils.module.ts",title:"utils.module.ts"},"import {\n    Global,\n    Module,\n} from '@agros/app';\n\n@Global()\n@Module(/* metadata */)\nexport class UtilsModule {}\n")),(0,n.kt)("p",null,"Once the ",(0,n.kt)("inlineCode",{parentName:"p"},"UtilsModule")," has been imported into the root module, any other module can access its exported providers without having to explicitly import it."),(0,n.kt)("h2",{id:"asynchoronous-modules"},"Asynchoronous Modules"),(0,n.kt)("p",null,"Agros support importing modules as a dynamic promise by ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},(0,n.kt)("inlineCode",{parentName:"a"},"import()"))," declaration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=app.module.ts",title:"app.module.ts"},"import { Module } from '@agros/app';\nimport { AppComponent } from '@/app.component';\nimport { AppService } from '@/app.service';\nimport { AppInterceptor } from '@/app.interceptor';\nimport { FooModule } from '@modules/foo/foo.module';\n\n// highlight-next-line\nconst BazModule = import('@modules/baz/baz.module').then(({ BazModule }) => BazModule);\n\n@Module({\n    providers: [\n        AppInterceptor,\n        AppService,\n    ],\n    components: [AppComponent],\n    routes: [\n        {\n            path: '',\n            useComponentClass: AppComponent,\n        },\n    ],\n    exports: [\n        AppComponent,\n        AppInterceptor,\n        AppService,\n    ],\n    imports: [\n        FooModule,\n        BazModule,\n    ],\n})\nexport class AppModule {}\n")),(0,n.kt)("p",null,"According to ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"Webpack's behavior")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"import()"),", it will be dynamically loaded and splitted into a standalone bundle by Webpack."))}u.isMDXComponent=!0},1303:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/modules-837acb8a40676efedef24715a4ac9e52.png"}}]);