"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[8710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},0:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Interceptors",s={unversionedId:"overview/interceptors",id:"version-1.1.x/overview/interceptors",title:"Interceptors",description:"An interceptor is a class annotated with the @Injectable() decorator and implements the Interceptor interface. Interceptors can be used to bind extra logic before a component is loaded, for example, check user's permission of getting access to the current component, etc.",source:"@site/versioned_docs/version-1.1.x/overview/interceptors.md",sourceDirName:"overview",slug:"/overview/interceptors",permalink:"/zh/docs/overview/interceptors",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-1.1.x/overview/interceptors.md",tags:[],version:"1.1.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/zh/docs/overview/modules"},next:{title:"Application",permalink:"/zh/docs/overview/application"}},p={},c=[{value:"Implementation",id:"implementation",level:2},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Context",id:"context",level:2},{value:"Usage",id:"usage",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interceptors"},"Interceptors"),(0,o.kt)("p",null,"An interceptor is a class annotated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable()")," decorator and implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"Interceptor")," interface. Interceptors can be used to bind extra logic before a component is loaded, for example, check user's permission of getting access to the current component, etc."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Interceptor is currently an unstable feature in Agros. Please be careful when use it in production environments.")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Suppose we have a component ",(0,o.kt)("inlineCode",{parentName:"p"},"UserComponent")," that is controlled by user access control (UAC), before a user entering this component, an interceptor should be set to check the permission of the user, we can write the logic in ",(0,o.kt)("inlineCode",{parentName:"p"},"public intercept()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.interceptor.ts",title:"user.interceptor.ts"},"import {\n    Injectable,\n    Interceptor,\n} from '@agros/app';\nimport axios from 'axios';\n\n@Injectable()\nexport class UserInterceptor implements Interceptor {\n    public async intercept() {\n        const { data } = await axios.get('/api/user/permission?entity=UserComponent');\n\n        if (!data) {\n            throw new Error('No permission');\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,o.kt)("p",null,"The same as other providers, interceptors can also be injected with dependencies, and at the mean time, interceptors should be put into ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," array of ",(0,o.kt)("inlineCode",{parentName:"p"},"@Module()")," decorator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.module.ts",title:"user.module.ts"},"import { Module } from '@agros/app';\nimport { UserInterceptor } from './user.interceptor';\n\n@Module({\n    providers: [\n        UserInterceptor,\n    ],\n})\nexport class UserModule {}\n")),(0,o.kt)("p",null,"We write a ",(0,o.kt)("inlineCode",{parentName:"p"},"checkPermission")," method in ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService")," to help check permission:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.service.ts",title:"user.service.ts"},"import { Injectable } from '@agros/app';\nimport axios from 'axios';\n\n@Injectable()\nexport class UserService {\n    public async checkPermission(entity: string) {\n        const { data } = await axios.get('/api/user/permission?entity=' + entity);\n        return data;\n    }\n}\n")),(0,o.kt)("p",null,"We can inject it into ",(0,o.kt)("inlineCode",{parentName:"p"},"UserInterceptor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.interceptor.ts",title:"user.interceptor.ts"},"import {\n    Injectable,\n    Interceptor,\n} from '@agros/app';\nimport { UserService } from './user.service';\n\n@Injectable()\nexport class UserInterceptor implements Interceptor {\n    public construcor(\n        private readonly userService: UserService,\n    ) {}\n\n    public async intercept() {\n        const { data } = await axios.get('/api/user/permission?entity=UserComponent');\n\n        if (!(await this.userService.checkPermission('UserComponent'))) {\n            throw new Error('No permission');\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"In general scenes, ",(0,o.kt)("inlineCode",{parentName:"p"},"public intercept()")," accepts multiple arguments, the first of them is context object. It will be defined and passed by the platform which is used by current project. If you want to get access to it and find out what type of object it would be, please go to the documentation of the platform."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To apply interceptors to component, the decorator ",(0,o.kt)("inlineCode",{parentName:"p"},"@UseInterceptors()")," should be assined to component declaration class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.component.ts",title:"user.component.ts"},"import {\n    Component,\n    UseInterceptors,\n} from '@agros/app';\nimport { UserInterceptor } from './user.interceptor';\n\n@Component({\n    // ...\n})\n@UseInterceptors(UserInterceptor)\nexport class UserComponent {}\n")))}m.isMDXComponent=!0}}]);