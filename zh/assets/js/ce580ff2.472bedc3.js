"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},o="Providers",s={unversionedId:"overview/providers",id:"version-1.0.x/overview/providers",title:"Providers",description:"Providers are the most important and fundamental concept in Agros. Almost any class can be treated as a provider by Agros: services, components, interceptors and tool libraries, etc. Agros makes it possible to establish various relationships between different provider objects by injecting dependencies.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.0.x/overview/providers.md",sourceDirName:"overview",slug:"/overview/providers",permalink:"/zh/docs/overview/providers",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.0.x/overview/providers.md",tags:[],version:"1.0.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/zh/docs/overview/components"},next:{title:"Modules",permalink:"/zh/docs/overview/modules"}},p={},c=[{value:"Services",id:"services",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Registration",id:"registration",level:2}],l={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"providers"},"Providers"),(0,i.kt)("p",null,"Providers are the most important and fundamental concept in Agros. Almost any class can be treated as a provider by Agros: services, components, interceptors and tool libraries, etc. Agros makes it possible to establish various relationships between different provider objects by ",(0,i.kt)("strong",{parentName:"p"},"injecting dependencies"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"providers",src:n(330).Z,width:"2332",height:"1452"})),(0,i.kt)("p",null,"As you can see in the image above, each provider can depend on another provider by passing parameters with the provider class as a type annotation in the constructor. With the Agros runtime, these type annotation-based provider parameters will be instantiated and made available when the web application starts."),(0,i.kt)("h2",{id:"services"},"Services"),(0,i.kt)("p",null,"Service is a typical provider that is often used to write all the business logic and utilities in a module. For example, we recommend writing ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest"},"XHR requests"),", sorting calculations, processing user input and output, and other logic in services."),(0,i.kt)("p",null,"Let's start by creating a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService"),". This service will be responsible for data storage and retrieval of users, so it's good to be defined as a provider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.service.ts",title:"user.service.ts"},"import { Injectable } from '@agros/app';\nimport { User } from './user.interface';\nimport axios from 'axios';\n\n@Injectable()\nexport class UserService {\n    private currentUser: Promise<User>;\n\n    public constructor() {\n        this.currentUser = axios.get('/user').then(({ data }) => data);\n    }\n\n    public async getCurrentUser() {\n        return await this.currentUser;\n    }\n\n    public async create(user: User) {\n        await axios.post('/user', user);\n    }\n\n    public async find(uid: string): Promise<User> {\n        const { data } = await axios.get('/user?uid=' + uid);\n        return data;\n    }\n\n    public async findAll(): Promise<User[]> {\n        const { data } = await axios.get('/users');\n        return data;\n    }\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To create a service using the CLI, simply execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"agros generate service user")," command.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," above is a normal class with ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findAll")," methods. The only difference between it and other classes is that it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Injectable()")," decorator. The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Injectable()")," decorator attaches metadata, which declares that ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," is a class that can be managed by the Agros ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inversion_of_control"},"IoC")," container. The code below is the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," interface corresponding with ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.interface.ts",title:"user.interface.ts"},"export interface User {\n    uid: string;\n    name: string;\n    email: string;\n    picture: string;\n    createdAt: Date;\n    updatedAt: Date;\n}\n")),(0,i.kt)("p",null,"At this time, there is a class to manage users, we can use it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserComponent"),", which provides a component declaration of UI component for the web application to manage users:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.component.ts",title:"user.component.ts"},"import { Component } from '@agros/app';\n// highlight-next-line\nimport { UserService } from './user.service';\n\n@Component({\n    file: './User',\n    // highlight-start\n    declarations: [\n        UserService,\n    ],\n    // highlight-end\n})\nexport class UserComponent {}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," is injected through the ",(0,i.kt)("inlineCode",{parentName:"p"},"declarations")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator. In the component description file, you can get the service through ",(0,i.kt)("inlineCode",{parentName:"p"},"getContainer")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=User.tsx",title:"User.tsx"},"import { getContainer } from '@agros/app';\n// highlight-next-line\nimport { UserService } from './user.service';\n\nexport default () => {\n    // highlight-start\n    const container = getContainer();\n    const userService = container.get<UserService>(UserService);\n    // highlight-end\n\n    // You can do something with the instance of UserService here ...\n    userService.find('UID').then(() => {\n        // ...\n    });\n\n    return (\n        // ...\n    );\n};\n")),(0,i.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,i.kt)("p",null,"The same as ",(0,i.kt)("a",{parentName:"p",href:"https://nestjs.com"},"Nest")," and ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io"},"Angular"),", Agros provides a system of dependency injection based on IoC container. If you are not familiar with it, we recommend you reading ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/dependency-injection"},"this article")," from Angular's official documentation."),(0,i.kt)("p",null,"In Agros apps, based on TypeScript's IoC capabilities, it's extremely easy to manage dependencies because they are resolved just by type. In the example below, Agros will resolve the ",(0,i.kt)("inlineCode",{parentName:"p"},"userService")," by creating and returning an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere). This dependency is resolved and passed to your controller's constructor (or assigned to the indicated property):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"public constructor(private userService: UserService) {}\n")),(0,i.kt)("h2",{id:"registration"},"Registration"),(0,i.kt)("p",null,"After defining a provider, we should declare it in the corresponding module file to register it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.module.ts",title:"user.module.ts"},"import { Module } from '@agros/app';\nimport { UserService } from './user.service';\n\n@Module({\n    // highlight-start\n    providers: [\n        UserService,\n    ],\n    // highlight-end\n})\nexport class UserModule {}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Agros CLI will automatically add these lines to corresponding module file when adding a new provider using ",(0,i.kt)("inlineCode",{parentName:"p"},"agros generate")," command.")))}d.isMDXComponent=!0},330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/providers-01a3a5100815b6aff37c5c276b203ef4.png"}}]);