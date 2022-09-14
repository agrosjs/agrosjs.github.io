"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[8969],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>c});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function l(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?l(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function u(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var o=t.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},p=function(e){var o=s(e.components);return t.createElement(i.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,f=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return n?t.createElement(f,a(a({ref:o},p),{},{components:n})):t.createElement(f,a({ref:o},p))}));function c(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var i in o)hasOwnProperty.call(o,i)&&(u[i]=o[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4361:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const l={},a="RouterModule",u={unversionedId:"built-in-modules/router-module",id:"version-1.0.x/built-in-modules/router-module",title:"RouterModule",description:"Agros provides an official built-in router module, you can import it by:",source:"@site/versioned_docs/version-1.0.x/built-in-modules/router-module.md",sourceDirName:"built-in-modules",slug:"/built-in-modules/router-module",permalink:"/zh/docs/built-in-modules/router-module",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.0.x/built-in-modules/router-module.md",tags:[],version:"1.0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Built-in Modules",permalink:"/zh/docs/category/built-in-modules"},next:{title:"Development",permalink:"/zh/docs/category/development"}},i={},s=[{value:"Feature Modules",id:"feature-modules",level:2},{value:"Root Module",id:"root-module",level:2}],p={toc:s};function m(e){let{components:o,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"routermodule"},"RouterModule"),(0,r.kt)("p",null,"Agros provides an official built-in router module, you can import it by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RouterModule } from '@agros/app';\n")),(0,r.kt)("p",null,"Now we start this section by the following project structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 src/\n    \u2514\u2500\u2500 modules/\n        \u251c\u2500\u2500 foo/\n        \u2502   \u251c\u2500\u2500 foo.module.ts\n        \u2502   \u251c\u2500\u2500 foo.service.ts\n        \u2502   \u251c\u2500\u2500 foo.component.ts\n        \u2502   \u2514\u2500\u2500 Foo.tsx\n        \u2514\u2500\u2500 bar/\n            \u251c\u2500\u2500 bar.module.ts\n            \u2514\u2500\u2500 bar.service.ts\n")),(0,r.kt)("h2",{id:"feature-modules"},"Feature Modules"),(0,r.kt)("p",null,"To declare a route in a feature module, we should add ",(0,r.kt)("inlineCode",{parentName:"p"},"RouterModule.forFeature()")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"imports")," field of ",(0,r.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import {\n    Module,\n    // highlight-next-line\n    RouterModule,\n} from '@agros/app';\nimport { FooComponent } from './foo.component';\nimport { FooService } from './foo.service';\n\n@Module({\n    imports: [\n        // highlight-start\n        RouterModule.forFeature({\n            routes: [\n                {\n                    path: 'foo',\n                    useComponentClass: FooComponent,\n                },\n            ],\n        }),\n        // highlight-end\n    ],\n    components: [\n        FooComponent,\n    ],\n    providers: [\n        FooService,\n    ],\n    exports: [\n        FooService,\n    ],\n})\nexport class FooModule {}\n")),(0,r.kt)("p",null,"You can also use a module class to configure the routes by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"useModuleClass")," option. Now the project looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 src/\n    \u2514\u2500\u2500 modules/\n        \u251c\u2500\u2500 foo/\n        \u2502   \u251c\u2500\u2500 foo.module.ts\n        \u2502   \u251c\u2500\u2500 foo.service.ts\n        \u2502   \u251c\u2500\u2500 foo.component.ts\n        \u2502   \u2514\u2500\u2500 Foo.tsx\n        \u251c\u2500\u2500 bar/\n        \u2502   \u251c\u2500\u2500 bar.module.ts\n        \u2502   \u2514\u2500\u2500 bar.service.ts\n        \u2514\u2500\u2500 baz/\n            \u251c\u2500\u2500 baz.module.ts\n            \u251c\u2500\u2500 baz.service.ts\n            \u251c\u2500\u2500 baz-child.component.ts\n            \u251c\u2500\u2500 BazChild.tsx\n            \u251c\u2500\u2500 baz.component.ts\n            \u2514\u2500\u2500 Baz.tsx\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"baz.module.ts"),"'s definition looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/baz/baz.module.ts",title:"src/modules/baz/baz.module.ts"},"import {\n    Module,\n    RouterModule,\n} from '@agros/app';\nimport { BazComponent } from './baz.component';\nimport { BazChildComponent } from './baz-child.component';\nimport { BazService } from './baz.service';\n\n@Module({\n    imports: [\n        RouterModule.forFeature({\n            routes: [\n                {\n                    path: 'baz',\n                    useComponentClass: BazComponent,\n                    // highlight-start\n                    children: [\n                        {\n                            path: 'child',\n                            useComponentClass: BazChildComponent,\n                        },\n                    ],\n                    // highlight-end\n                },\n            ],\n        }),\n    ],\n    components: [\n        BazComponent,\n        BazChildComponent,\n    ],\n    providers: [\n        BazService,\n    ],\n    exports: [\n        BazComponent,\n        BazChildComponent,\n        BazService,\n    ],\n})\nexport class BazModule {}\n")),(0,r.kt)("p",null,"and the ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.module.ts"),"'s content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/modules/foo/foo.module.ts",title:"src/modules/foo/foo.module.ts"},"import {\n    Module,\n    RouterModule,\n} from '@agros/app';\nimport { BazModule } from '../baz/baz.module';\nimport { FooComponent } from './foo.component';\nimport { FooService } from './foo.service';\n\n@Module({\n    imports: [\n        BazModule,\n    ],\n    components: [\n        FooComponent,\n    ],\n    providers: [\n        FooService,\n    ],\n    exports: [\n        FooService,\n    ],\n    routes: [\n        {\n            path: 'foo',\n            useComponentClass: FooComponent,\n            children: [\n                {\n                    // highlight-next-line\n                    useModuleClass: BazModule,\n                },\n            ],\n        },\n    ],\n})\nexport class FooModule {}\n")),(0,r.kt)("h2",{id:"root-module"},"Root Module"),(0,r.kt)("p",null,"The declaration of routes in root module is similar to feature modules, to declare a route in root module, we should add ",(0,r.kt)("inlineCode",{parentName:"p"},"RouterModule.forRoot()")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"imports")," field of ",(0,r.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/app.module.ts",title:"src/app.module.ts"},"import {\n    Module,\n    RouterModule,\n} from '@agros/app';\nimport { BarModule } from '../bar/bar.module';\nimport { FooModule } from '../foo/foo.module';\n\n@Module({\n    imports: [\n        BarModule,\n        FooModule,\n        // highlight-next-line\n        RouterModule.forRoot({\n            routes: [\n                {\n                    path: 'foo',\n                    useComponentClass: FooModule,\n                },\n                {\n                    path: 'bar',\n                    useComponentClass: BarModule,\n                },\n            ],\n        }),\n    ],\n})\nexport class AppModule {}\n")))}m.isMDXComponent=!0}}]);