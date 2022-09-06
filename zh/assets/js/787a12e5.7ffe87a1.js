"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[8848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,u=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Platform",p={unversionedId:"development/platform",id:"version-0.x/development/platform",title:"Platform",description:"Platforms are responsible for providing plarform-specific support that helps run and build the whole project. In this documentation, we will learn how to implement a platform.",source:"@site/versioned_docs/version-0.x/development/platform.md",sourceDirName:"development",slug:"/development/platform",permalink:"/zh/docs/development/platform",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.x/development/platform.md",tags:[],version:"0.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/zh/docs/category/development"},next:{title:"Collection",permalink:"/zh/docs/development/collection"}},l={},s=[{value:"getDefaultConfig",id:"getdefaultconfig",level:2},{value:"getLoaderImports",id:"getloaderimports",level:2},{value:"getDecoratorImports",id:"getdecoratorimports",level:2},{value:"getBootstrapCode",id:"getbootstrapcode",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"platform"},"Platform"),(0,o.kt)("p",null,"Platforms are responsible for providing plarform-specific support that helps run and build the whole project. In this documentation, we will learn how to implement a platform."),(0,o.kt)("p",null,"A platform should implement the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/Platform"},(0,o.kt)("inlineCode",{parentName:"a"},"Platform"))," interface, and export the class as default."),(0,o.kt)("h2",{id:"getdefaultconfig"},"getDefaultConfig"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/Platform#getdefaultconfig"},"Definition")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getDefaultConfig")," returns an object that would be merged into the project platform configuration, whose key name is ",(0,o.kt)("inlineCode",{parentName:"p"},"platformConfig.$PACKAGE_NAME"),", while ",(0,o.kt)("inlineCode",{parentName:"p"},"$PACKAGE_NAME")," is the package name of current platform."),(0,o.kt)("h2",{id:"getloaderimports"},"getLoaderImports"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/Platform#getloaderimports"},"Definition")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getLoaderImports")," should return an array of dependencies that could be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/loader"),"'s AOP to generate bootstrap code."),(0,o.kt)("p",null,"The definition of array item can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/agros-utils/interfaces/EnsureImportOptions"},"here"),". In general, there will always be two things that should be in this array: renderer and router."),(0,o.kt)("p",null,"For example, in ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),", we should import ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," (which is exported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/platform-react/lib/react"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom")," (which is exported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/platform-react/lib/react-router-dom"),"), then the ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoaderImports"),"' value will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Platform as IPlatform } from '@agros/platforms';\nclass Platform implements IPlatform {\n    // ...\n    public getLoaderImports() {\n        return [\n            {\n                libName: '@agros/platform-react/lib/react-router-dom',\n                identifierName: 'Routes',\n            },\n            {\n                libName: '@agros/platform-react/lib/react-router-dom',\n                identifierName: 'Route',\n            },\n            {\n                libName: '@agros/platform-react/lib/react-router-dom',\n                identifierName: 'BrowserRouter',\n            },\n            {\n                libName: '@agros/platform-react/lib/react',\n                identifierName: 'React',\n                type: 'default',\n            },\n            {\n                libName: '@agros/platform-react/lib/react-dom',\n                identifierName: 'render',\n            },\n        ];\n    },\n    // ...\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The import declarations of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom")," can also be:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    libName: '@agros/platform-react/lib/react-router-dom',\n    identifierName: 'ReactRouter',\n    type: 'default',\n}\n"))),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field can be ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"named")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," is specified, Agros will add a declaration like ",(0,o.kt)("inlineCode",{parentName:"p"},"import Foo from '/path/to/foo'"),", if ",(0,o.kt)("inlineCode",{parentName:"p"},"named")," is specified, it will add ",(0,o.kt)("inlineCode",{parentName:"p"},"import { Foo } from '/path/to/foo'"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"import * as Foo from '/path/to/foo'")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),"."),(0,o.kt)("h2",{id:"getdecoratorimports"},"getDecoratorImports"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/Platform#getdecoratorimports"},"Definition")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getDecoratorImports")," should return an array of dependencies that could be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/loader")," when transforming ",(0,o.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator. The return value is the same as ",(0,o.kt)("a",{parentName:"p",href:"#getLoaderImports"},(0,o.kt)("inlineCode",{parentName:"a"},"getLoaderImports")),"."),(0,o.kt)("h2",{id:"getbootstrapcode"},"getBootstrapCode"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/agros-platforms/interfaces/Platform#getbootstrapcode"},"Definition")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getBootstrapCode")," should return a string value that defines the body of the entry function. It passes a value named ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," from ",(0,o.kt)("strong",{parentName:"p"},"string literal")," of code, which points to the default-exported object from the entry file of the project (usually ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts"),")."),(0,o.kt)("p",null,"The method passes ",(0,o.kt)("inlineCode",{parentName:"p"},"importsMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addVirtualFile")," as its parameters."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"importMap")," is an object whose key and value are all ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". The keys of ",(0,o.kt)("inlineCode",{parentName:"p"},"importMap")," are the ",(0,o.kt)("inlineCode",{parentName:"p"},"identifierName")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoaderImports"),", and the values of it are the imported identifier name. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"importMap")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"getBootstrapCode")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/platform-react")," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    React: 'Agros$$React',\n    Routes: 'Agros$$Routes',\n    // ...\n}\n")),(0,o.kt)("p",null,"You won't care about what the true identifier names are, just use ",(0,o.kt)("inlineCode",{parentName:"p"},"importMap[$KEY]")," to get them in code."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"addVirtualFile")," is a function that can help add some file into virtual filesystem which can be read by ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/loader"),"."),(0,o.kt)("p",null,"In general, the string of code should contain the code of render function. For example, in ",(0,o.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),", the code should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Platform as IPlatform } from '@agros/platforms';\nclass Platform implements IPlatform {\n    // ...\n    public getBootstrapCode(ensuredImportsMap: Record<string, string>): string {\n        const reactIdentifier = ensuredImportsMap['React'] || 'React';\n        const factoryIdentifier = ensuredImportsMap['factory'] || 'factory';\n        const platformIdentifier = ensuredImportsMap['platform'] || 'platform';\n        return `\n            const {\n                module: Module,\n                RouterComponent,\n                routerProps,\n                container = document.getElementById('root'),\n            } = config;\n            ${factoryIdentifier}.create(Module).then((routeItems) => {\n                const RootContainer = ({\n                    Module,\n                    routerProps = {},\n                    RouterComponent = ${ensuredImportsMap['BrowserRouter'] || 'BrowserRouter'},\n                }) => {\n                    const elements = ${platformIdentifier}.createRoutes(routeItems);\n\n                    return ${reactIdentifier}.createElement(\n                        RouterComponent,\n                        routerProps,\n                        ${reactIdentifier}.createElement(${ensuredImportsMap['Routes'] || 'Routes'}, {}, elements),\n                    );\n                };\n                ${ensuredImportsMap['render'] || 'render'}(\n                    ${reactIdentifier}.createElement(RootContainer, {\n                        Module,\n                        RouterComponent,\n                        routerProps,\n                    }),\n                    container,\n                );\n            });\n        `;\n    },\n    // ...\n}\n")))}d.isMDXComponent=!0}}]);