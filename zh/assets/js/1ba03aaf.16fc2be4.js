"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[4118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?o.createElement(f,i(i({ref:t},m),{},{components:n})):o.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Platform",l={unversionedId:"development/platform",id:"version-0.7.x/development/platform",title:"Platform",description:"Platforms are responsible for providing plarform-specific support that helps run and build the whole project. In this documentation, we will learn how to implement a platform.",source:"@site/versioned_docs/version-0.7.x/development/platform.md",sourceDirName:"development",slug:"/development/platform",permalink:"/zh/docs/0.7.x/development/platform",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-0.7.x/development/platform.md",tags:[],version:"0.7.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/zh/docs/0.7.x/category/development"},next:{title:"API",permalink:"/zh/docs/0.7.x/category/api"}},p={},s=[{value:"The <code>Platform</code> Interface",id:"the-platform-interface",level:2},{value:"getDefaultConfig",id:"getdefaultconfig",level:3},{value:"getLoaderImports",id:"getloaderimports",level:3},{value:"getDecoratorImports",id:"getdecoratorimports",level:3},{value:"getBootstrapCode",id:"getbootstrapcode",level:3},{value:"getComponentFactoryCode",id:"getcomponentfactorycode",level:3},{value:"generateComponent",id:"generatecomponent",level:3},{value:"The <code>BundlessPlatform</code> Interface",id:"the-bundlessplatform-interface",level:2},{value:"getComponentScript",id:"getcomponentscript",level:3},{value:"agros-platform.config.js",id:"agros-platformconfigjs",level:2},{value:"package.json",id:"packagejson",level:2},{value:"agrosPlatform.bundless",id:"agrosplatformbundless",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"platform"},"Platform"),(0,r.kt)("p",null,"Platforms are responsible for providing plarform-specific support that helps run and build the whole project. In this documentation, we will learn how to implement a platform."),(0,r.kt)("p",null,"A platform should implement the ",(0,r.kt)("a",{parentName:"p",href:"../api/agros-platforms/interfaces/Platform"},(0,r.kt)("inlineCode",{parentName:"a"},"Platform"))," interface, and export the instance of the class as default."),(0,r.kt)("h2",{id:"the-platform-interface"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"Platform")," Interface"),(0,r.kt)("h3",{id:"getdefaultconfig"},"getDefaultConfig"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/agros-platforms/interfaces/Platform#getdefaultconfig"},"Definition")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getDefaultConfig")," returns an object that would be merged into the project platform configuration, whose key name is ",(0,r.kt)("inlineCode",{parentName:"p"},"platformConfig.$PACKAGE_NAME"),", while ",(0,r.kt)("inlineCode",{parentName:"p"},"$PACKAGE_NAME")," is the package name of current platform."),(0,r.kt)("h3",{id:"getloaderimports"},"getLoaderImports"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/agros-platforms/interfaces/Platform#getloaderimports"},"Definition")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getLoaderImports")," should return an array of dependencies that could be used by ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/loader"),"'s AOP to generate bootstrap code."),(0,r.kt)("p",null,"The definition of array item can be found ",(0,r.kt)("a",{parentName:"p",href:"../api/agros-utils/interfaces/EnsureImportOptions"},"here"),". In general, there will always be two things that should be in this array: renderer and router."),(0,r.kt)("p",null,"For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),", we should import ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," (which is exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react/lib/react"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," (which is exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react/lib/react-router-dom"),"), then the ",(0,r.kt)("inlineCode",{parentName:"p"},"getLoaderImports"),"' value will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Platform as IPlatform } from '@agros/platforms';\nclass Platform implements IPlatform {\n    // ...\n    public getLoaderImports() {\n        return [\n            {\n                libName: '@agros/platform-react/lib/react-router-dom',\n                identifierName: 'Routes',\n            },\n            {\n                libName: '@agros/platform-react/lib/react-router-dom',\n                identifierName: 'Route',\n            },\n            // ...\n        ];\n    }\n    // ...\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The import declarations of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," can also be:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    libName: '@agros/platform-react/lib/react-router-dom',\n    identifierName: 'ReactRouter',\n    type: 'default',\n}\n"))),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," field can be ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"named")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," is specified, Agros will add a declaration like ",(0,r.kt)("inlineCode",{parentName:"p"},"import Foo from '/path/to/foo'"),", if ",(0,r.kt)("inlineCode",{parentName:"p"},"named")," is specified, it will add ",(0,r.kt)("inlineCode",{parentName:"p"},"import { Foo } from '/path/to/foo'"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"import * as Foo from '/path/to/foo'")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"."),(0,r.kt)("h3",{id:"getdecoratorimports"},"getDecoratorImports"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/agros-platforms/interfaces/Platform#getdecoratorimports"},"Definition")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getDecoratorImports")," should return an array of dependencies that could be used by ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/loader")," when transforming ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator. The return value is the same as ",(0,r.kt)("a",{parentName:"p",href:"#getLoaderImports"},(0,r.kt)("inlineCode",{parentName:"a"},"getLoaderImports")),"."),(0,r.kt)("h3",{id:"getbootstrapcode"},"getBootstrapCode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/agros-platforms/interfaces/Platform#getbootstrapcode"},"Definition")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getBootstrapCode")," should return a string value that defines the body of the entry function. It passes a value named ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," from ",(0,r.kt)("strong",{parentName:"p"},"string literal")," of code, which points to the default-exported object from the entry file of the project (usually ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ts"),")."),(0,r.kt)("p",null,"The method passes ",(0,r.kt)("inlineCode",{parentName:"p"},"importsMap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"addVirtualFile")," as its parameters."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"importMap")," is an object whose key and value are all ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". The keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"importMap")," are the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifierName")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"getLoaderImports"),", and the values of it are the imported identifier name. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"importMap")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"getBootstrapCode")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react")," should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    React: 'Agros$$React',\n    Routes: 'Agros$$Routes',\n    // ...\n}\n")),(0,r.kt)("p",null,"You won't care about what the true identifier names are, just use ",(0,r.kt)("inlineCode",{parentName:"p"},"importMap[$KEY]")," to get them in code."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addVirtualFile")," is a function that can help add some file into virtual filesystem which can be read by ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/loader"),"."),(0,r.kt)("p",null,"In general, the string of code should contain the code of render function. For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),", the code should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Platform as IPlatform } from '@agros/platforms';\nclass Platform implements IPlatform {\n    // ...\n    public getBootstrapCode(ensuredImportsMap: Record<string, string>): string {\n        const reactIdentifier = ensuredImportsMap['React'] || 'React';\n        const factoryIdentifier = ensuredImportsMap['factory'] || 'factory';\n        return `\n            const {\n                module: Module,\n                RouterComponent,\n                routerProps,\n                container = document.getElementById('root'),\n            } = config;\n            ${factoryIdentifier}.create(Module).then((componentInstance) => {\n                const rootModuleInstance = ${factoryIdentifier}.getRootModuleInstance();\n                const rootRoutes = rootModuleInstance.getProviderValue(${ensuredImportsMap['ROUTES_ROOT']});\n                ${ensuredImportsMap['RouterModule']}.createRouterItems(${factoryIdentifier}, rootRoutes).then((routes) => {\n                    if (routes && Array.isArray(routes) && routes.length > 0) {\n                        const RootContainer = ({\n                            Module,\n                            routerProps = {},\n                            RouterComponent = ${ensuredImportsMap['BrowserRouter'] || 'BrowserRouter'},\n                        }) => {\n                            const elements = ${ensuredImportsMap['createRoutes']}(routes);\n                            return ${reactIdentifier}.createElement(\n                                RouterComponent,\n                                routerProps,\n                                ${reactIdentifier}.createElement(${ensuredImportsMap['Routes'] || 'Routes'}, {}, elements),\n                            );\n                        };\n                        ${ensuredImportsMap['render'] || 'render'}(\n                            ${reactIdentifier}.createElement(RootContainer, {\n                                Module,\n                                RouterComponent,\n                                routerProps,\n                            }),\n                            container,\n                        );\n                    } else {\n                        ${ensuredImportsMap['render'] || 'render'}(\n                            ${reactIdentifier}.createElement(componentInstance.getComponent()),\n                            container,\n                        );\n                    }\n                });\n            });\n        `;\n    }\n    // ...\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This code requires a ",(0,r.kt)("inlineCode",{parentName:"p"},"createRoutes")," which can be invoked by ",(0,r.kt)("inlineCode",{parentName:"p"},"ensuredImportsMap['createRoutes']"),", the following code is its content:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=./create-routes.ts",title:"./create-routes.ts"},"import { RouterItem } from '@agros/common/lib/types';\nimport {\n    createElement,\n} from 'react';\nimport { Route } from 'react-router-dom';\n\nexport const createRoutes = (routerItems: RouterItem[], level = 0) => {\n    return routerItems.map((routerItem, index) => {\n        const {\n            componentInstance,\n            children,\n            ...routeProps\n        } = routerItem;\n        const Component = componentInstance.getComponent();\n        const { elementProps = {} } = componentInstance.metadata;\n\n        return createElement(\n            Route,\n            {\n                key: `level${level}_${index}`,\n                ...routeProps,\n                ...(\n                    Component\n                        ? {\n                            element: createElement(Component, elementProps),\n                        }\n                        : {}\n                ),\n            },\n            (Array.isArray(children) && children.length > 0) ? createRoutes(children, level + 1) : [],\n        );\n    });\n};\n"))),(0,r.kt)("h3",{id:"getcomponentfactorycode"},"getComponentFactoryCode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/agros-platforms/interfaces/Platform#getcomponentfactorycode"},"Definition")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getComponentFactoryCode")," should return a string that contains the code content of a full factory function."),(0,r.kt)("p",null,"The method passes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"importsMap"),": same as the ",(0,r.kt)("inlineCode",{parentName:"li"},"importsMap")," passed to ",(0,r.kt)("a",{parentName:"li",href:"#getBootstrapCode"},(0,r.kt)("inlineCode",{parentName:"a"},"getBootstrapCode")),", the key-value pairs are from the definition of ",(0,r.kt)("a",{parentName:"li",href:"#getDecoratorImports"},(0,r.kt)("inlineCode",{parentName:"a"},"getDecoratorImports"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filePath"),": the relative pathname (with component declaration file) of component file defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"file")," field of ",(0,r.kt)("inlineCode",{parentName:"li"},"@Component()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"identifierName"),": the identifier of dynamically imported component file by ",(0,r.kt)("inlineCode",{parentName:"li"},"@agros/loader"),", defined as ",(0,r.kt)("inlineCode",{parentName:"li"},"const ${identifierName} = import('filePath');")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lazy"),": a boolean value indicates whether the component is lazy or not")),(0,r.kt)("p",null,"The return value of this method should be a full declaration of factory function, in general, the factory function is a single function returns platform-specified import of components. For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),", the factory code is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Platform as IPlatform } from '@agros/platforms';\nclass Platform implements IPlatform {\n    // ...\n    public getComponentFactoryCode(\n        map: Record<string, string>,\n        filePath: string,\n        componentIdentifierName: string,\n        lazy = false,\n    ) {\n        return `() => ${lazy ? `() => import('${filePath}')` : componentIdentifierName};`;\n    }\n    // ...\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"() => import('/path/to/file')")," is ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#import"},"lazy component")," definition of React.js."),(0,r.kt)("h3",{id:"generatecomponent"},"generateComponent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"generateComponent")," passes ",(0,r.kt)("inlineCode",{parentName:"p"},"componentInstance")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," as parameters, which means the instance of current component declaration and the imported component description file."),(0,r.kt)("p",null,"In general, it is optional and you can do nothing with it or simply not declare this method in a platform object since before this method being invoked by the factory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"component")," is already set into component instance by ",(0,r.kt)("inlineCode",{parentName:"p"},"ComponentInstance.prototype.setComponent()")," method, this method provide a way to modify the component in ",(0,r.kt)("inlineCode",{parentName:"p"},"componentInstance"),". For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-react"),", we can inject interceptor executions into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Platform as IPlatform } from '@agros/platforms';\nclass Platform implements IPlatform {\n    // ...\n    public async generateComponent<T = any>(componentInstance: ComponentInstance, component: any): Promise<T> {\n        /**\n         * set component directly so that it can prevent unlimited creating tasks\n         */\n        componentInstance.setComponent((props: any) => {\n            const {\n                interceptorsFallback = null,\n                suspenseFallback = null,\n            } = componentInstance.metadata;\n            const [interceptorEnd, setInterceptorEnd] = useState<boolean>(false);\n\n            useAsyncEffect(async () => {\n                try {\n                    if (Array.isArray(componentInstance.metadata.interceptorInstances)) {\n                        for (const interceptorInstance of componentInstance.metadata.interceptorInstances) {\n                            await interceptorInstance.intercept({\n                                props,\n                            });\n                        }\n                    }\n                } finally {\n                    setInterceptorEnd(true);\n                }\n            }, []);\n\n            return interceptorEnd\n                ? createElement(\n                    Suspense,\n                    {\n                        fallback: suspenseFallback,\n                    },\n                    createElement(component, props),\n                )\n                : interceptorsFallback;\n        });\n\n        return component;\n    }\n    // ...\n}\n")),(0,r.kt)("h2",{id:"the-bundlessplatform-interface"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"BundlessPlatform")," Interface"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")," is only designed to be used by Node.js environment since the methods in it contain some imports that cannot be recognized by Webpack. That is why the interface called ",(0,r.kt)("inlineCode",{parentName:"p"},"BundlessPlatform"),". The following sections will introduce the methods in this interface."),(0,r.kt)("h3",{id:"getcomponentscript"},"getComponentScript"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getComponentScript")," passes the component description file content as parameter and returns an object with type of ",(0,r.kt)("a",{parentName:"p",href:"../api/agros-utils/interfaces/ComponentScript"},(0,r.kt)("inlineCode",{parentName:"a"},"ComponentScript")),", which has two fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"."),(0,r.kt)("admonition",{title:"Why and when should Agros need this method from platform?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When Agros loader loads the component description files whoes code are not totally pure JavaScript or TypeScript, like ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/scaling-up/sfc.html"},"Vue SFC")," files, ",(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/docs#component-format"},"Svelte")," files, etc."),(0,r.kt)("p",{parentName:"admonition"},"Agros will need this method to extract JavaScript or TypeScript code content and the indexes of where it starts and ends, and return them to Agros loader. That is why Agros loader need this method from platform. By the way, other platforms with pure JavaScript or TypeScript frameworks may not provide this method.")),(0,r.kt)("p",null,"For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-vue"),", the definition of this method is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BundlessPlatform as IBundlessPlatform } from '@agros/utils/lib/types';\nimport { parse } from 'vue/compiler-sfc';\n\nclass BundlessPlatform implements IBundlessPlatform {\n    // ...\n    public getComponentScript(source: string) {\n        const ast = parse(source);\n        const content = ast?.descriptor?.script?.content;\n        const start = ast?.descriptor?.script?.loc?.start?.offset;\n        const end = ast?.descriptor?.script?.loc?.end.offset;\n\n        if (typeof start !== 'number' || typeof end !== 'number') {\n            return {\n                content,\n            };\n        }\n\n        return {\n            content,\n            location: {\n                start,\n                end,\n            },\n        };\n    }\n    // ...\n}\n")),(0,r.kt)("h2",{id:"agros-platformconfigjs"},"agros-platform.config.js"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"agros-platform.config.js")," is the configuration file of platform. This configuration file should export a function which passes a default Webpack configuration object from ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/app")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports"),"."),(0,r.kt)("p",null,"In this file, you are allowed to modify some configuration with the parameter configuration object to add some loaders, plugins and any other things."),(0,r.kt)("p",null,"For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-vue"),", the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"agros-platform.config.js")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { defineBuilderConfig } = require('@agros/common/lib/builder-config');\nconst {\n    addBabelPreset,\n    addBabelPlugin,\n} = require('@agros/utils/lib/customizers');\nconst { VueLoaderPlugin } = require('vue-loader');\n\nmodule.exports = defineBuilderConfig((config) => {\n    addBabelPreset(require.resolve('@babel/preset-env'))(config);\n    addBabelPreset(require.resolve('@vue/babel-preset-app'))(config);\n    addBabelPlugin(require.resolve('@babel/plugin-transform-typescript'))(config);\n    addBabelPlugin(require.resolve('@babel/plugin-transform-runtime'))(config);\n    addBabelPlugin(require.resolve('@babel/plugin-transform-parameters'))(config);\n\n    config.module?.rules?.unshift({\n        test: /\\.vue$/,\n        use: [\n            {\n                loader: require.resolve('./lib/loaders/vue-loader.js'),\n                options: {\n                    loaders: {\n                        js: require.resolve('awesome-typescript-loader'),\n                    },\n                },\n            },\n        ],\n    });\n\n    let resourceRule = config.module.rules.find((rule) => rule?.type === 'asset/resource');\n\n    if (!resourceRule) {\n        resourceRule = config.module.rules.find((rule) => !!rule.oneOf)?.oneOf?.find((rule) => {\n            return rule?.type === 'asset/resource';\n        });\n    }\n\n    if (resourceRule) {\n        resourceRule?.exclude?.push(/\\.vue$/);\n    }\n\n    config.plugins?.push(new VueLoaderPlugin());\n    config.module.rules = config.module?.rules?.map((rule) => {\n        if (\n            typeof rule.use === 'string' && (\n                rule.use.indexOf('@agros/loader') !== -1 ||\n                /packages\\/agros-loader/.test(rule.use)\n            )\n        ) {\n            return {\n                ...rule,\n                test: /\\.(js|jsx|ts|tsx|vue)$/,\n            };\n        }\n        return rule;\n    });\n\n    return config;\n});\n")),(0,r.kt)("h2",{id:"packagejson"},"package.json"),(0,r.kt)("p",null,"Agros preserves a field named ",(0,r.kt)("inlineCode",{parentName:"p"},"agrosPlatform")," to manage other key-value configurations. In the following documentation, we will introduce these fields."),(0,r.kt)("h3",{id:"agrosplatformbundless"},"agrosPlatform.bundless"),(0,r.kt)("p",null,"The relative pathname of ",(0,r.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")," file. For example, in ",(0,r.kt)("inlineCode",{parentName:"p"},"@agros/platform-vue"),", the compiled ",(0,r.kt)("inlineCode",{parentName:"p"},"BundlessPlatform")," file is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/bundless-platform.js")," this part of ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "agrosPlatform": {\n        "bundless": "./lib/bundless-platform.js"\n    }\n}\n')))}d.isMDXComponent=!0}}]);