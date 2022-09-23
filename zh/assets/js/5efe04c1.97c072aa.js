"use strict";(self.webpackChunkagrosjs_github_io=self.webpackChunkagrosjs_github_io||[]).push([[2943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Components",s={unversionedId:"overview/components",id:"version-0.7.x/overview/components",title:"Components",description:"Components are considered as the carrier of a page in Agros apps. They control the lazy loading, fallbacks and other options that are not supported by the component.",source:"@site/versioned_docs/version-0.7.x/overview/components.md",sourceDirName:"overview",slug:"/overview/components",permalink:"/zh/docs/overview/components",draft:!1,editUrl:"https://github.com/agrosjs/agrosjs.github.io/tree/master/versioned_docs/version-0.7.x/overview/components.md",tags:[],version:"0.7.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"First Steps",permalink:"/zh/docs/overview/first-steps"},next:{title:"Providers",permalink:"/zh/docs/overview/providers"}},p={},l=[{value:"Component Description",id:"component-description",level:2},{value:"Component Declaration",id:"component-declaration",level:2},{value:"Dependency Imports",id:"dependency-imports",level:3},{value:"Lazy Loading",id:"lazy-loading",level:3},{value:"Styles",id:"styles",level:3},{value:"Registration",id:"registration",level:3}],m={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"components"},"Components"),(0,r.kt)("p",null,"Components are considered as the carrier of a page in Agros apps. They control the lazy loading, fallbacks and other options that are not supported by the component."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"components",src:n(4019).Z,width:"2012",height:"1092"})),(0,r.kt)("p",null,"A component must be consist of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"component description"),(0,r.kt)("li",{parentName:"ul"},"component declaration")),(0,r.kt)("p",null,"Now we will learn what they are and how to define a component properly."),(0,r.kt)("h2",{id:"component-description"},"Component Description"),(0,r.kt)("p",null,"Component descriptions are written in the same format as framework-specific components, for example, on Agros' React platform, component description files are written in ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html#gatsby-focus-wrapper"},"JSX"),", and on the Vue platform, you can write component descriptions using the ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/scaling-up/sfc.html"},"single-file component")," (known as SFC)."),(0,r.kt)("p",null,"Here we write a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," component description using the two frameworks above."),(0,r.kt)("p",null,"Component description with React:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=User.tsx",title:"User.tsx"},'import React from \'@agros/platform-react/lib/react\';\n\nexport default ({\n    name,\n    avatar: pictureUrl,\n    email,\n    motto,\n}) => {\n    return (\n        <div className="user-card">\n            <img className="avatar" src={pictureUrl} />\n            <div className="info-wrapper">\n                <h1>{name}</h1>\n                <h2>{email}</h2>\n                <h6>{motto}</h6>\n            </div>\n        </div>\n    );\n} as React.FC;\n')),(0,r.kt)("p",null,"Component description with Vue SFC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=User.vue",title:"User.vue"},'<template>\n    <div class="user-card">\n        <img class="avatar" :src="pictureUrl" />\n        <div class="info-wrapper">\n            <h1>{{name}}</h1>\n            <h2>{{email}}</h2>\n            <h6>{{motto}}</h6>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nexport default {\n    props: [\n        \'name\',\n        \'email\',\n        \'motto\',\n        \'avatar\',\n    ],\n}\n<\/script>\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the subsequent documentation, we use React as our default platform, unless we encounter platform-specific content.")),(0,r.kt)("h2",{id:"component-declaration"},"Component Declaration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Component declaration is also a type of provider"),". Like normal providers, any provider (including component declaration) can be injected into a component declaration as a dependency, but a component declaration cannot be injected into other types of providers as a dependency."),(0,r.kt)("p",null,"Let's start by creating a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"UserComponent"),". This component declaration will use ",(0,r.kt)("inlineCode",{parentName:"p"},"User.tsx")," as its description mentioned above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.component.ts",title:"user.component.ts"},"import { Component } from '@agros/app';\n\n@Component({\n    file: './User',\n})\nexport class UserComponent {}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To create a service using the CLI, simply execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"agros generate component user")," command.")),(0,r.kt)("h3",{id:"dependency-imports"},"Dependency Imports"),(0,r.kt)("p",null,"Agros provides an option in its ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator called ",(0,r.kt)("inlineCode",{parentName:"p"},"declarations"),", which is an array of provider classes that you can pass in to complete the imports of providers."),(0,r.kt)("p",null,"Now we extract a card for describing user's basic information, like avatar, name, email and motto because the card will be used by not only ",(0,r.kt)("inlineCode",{parentName:"p"},"UserComponent"),", but other components. So we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserCard.tsx")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=UserCard.tsx",title:"UserCard.tsx"},'import React from \'@agros/platform-react/lib/react\';\n\nexport default ({\n    name,\n    avatar: pictureUrl,\n    email,\n    motto,\n}) => {\n    return (\n        <div className="user-card">\n            <img className="avatar" src={pictureUrl} />\n            <div className="info-wrapper">\n                <h1>{name}</h1>\n                <h2>{email}</h2>\n                <h6>{motto}</h6>\n            </div>\n        </div>\n    );\n} as React.FC;\n')),(0,r.kt)("p",null,"Then we should write a component declaration file to describe this component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user-card.component.ts",title:"user-card.component.ts"},"import { Component } from '@agros/app';\n\n@Component({\n    file: './UserCard',\n})\nexport class UserCardComponent {}\n")),(0,r.kt)("p",null,"We can now refactor our code in ",(0,r.kt)("inlineCode",{parentName:"p"},"User.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"user.component.ts"),", import ",(0,r.kt)("inlineCode",{parentName:"p"},"UserCard")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.component.ts",title:"user.component.ts"},"import { Component } from '@agros/app';\n// highlight-next-line\nimport { UserCardComponent } from './user-card.component.ts';\n\n@Component({\n    file: './User',\n    declarations: [\n        // highlight-start\n        // Add `UserCardComponent` into `declarations`\n        UserCardComponent,\n        // highlight-end\n    ],\n})\nexport class UserComponent {}\n")),(0,r.kt)("p",null,"In the component description file, you can get the service through ",(0,r.kt)("inlineCode",{parentName:"p"},"getContainer")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=User.tsx",title:"User.tsx"},"import React from '@agros/platform-react/lib/react';\nimport { getContainer } from '@agros/app';\n// highlight-next-line\nimport UserCardComponent from './user-card.component';\n\nexport default (props) => {\n    // highlight-start\n    const container = getContainer();\n    const UserCard = container.get<React.FC>(UserCardComponent);\n    // highlight-end\n    return (\n        <div>\n            <p>Information of current user:</p>\n            <UserCard {...props} />\n        </div>\n    );\n} as React.FC;\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Other types of providers will also be able to be imported as the same way, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/providers#services"},"this")," for more information.")),(0,r.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,r.kt)("p",null,"You can turn a component description into a dynamic component by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Agros provides fallbacks when ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator is set to be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=user.component.tsx",title:"user.component.tsx"},"import { Component } from '@agros/app';\n\n@Component({\n    file: './User',\n    // highlight-start\n    lazy: true,\n    suspenseFallback: <div>loading...</div>,\n    // highlight-end\n})\nexport class UserComponent {}\n")),(0,r.kt)("p",null,"Here is a demo GIF of lazy loading:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"full-width",src:n(7712).Z,width:"1662",height:"1110"})),(0,r.kt)("h3",{id:"styles"},"Styles"),(0,r.kt)("p",null,"Style files can be passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," option of ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component()")," decorator. It's an array of string, which indicates the all style files' location. You can pass either absolute path or relative path (with the component declaration file) into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@agros/app';\n\n@Component({\n    file: './User',\n    // highlight-start\n    styles: [\n        './user.component.css',\n    ],\n    // highlight-end\n})\nexport class UserComponent {}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Agros supports the following style preprocessers:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://lesscss.org/"},"Less")," with ",(0,r.kt)("inlineCode",{parentName:"li"},".less")," extension"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sass-lang.com/"},"Sass")," with ",(0,r.kt)("inlineCode",{parentName:"li"},".sass")," and ",(0,r.kt)("inlineCode",{parentName:"li"},".scss")," extensions"))),(0,r.kt)("h3",{id:"registration"},"Registration"),(0,r.kt)("p",null,"After defining a component, we should declare it in the corresponding module file to register it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=user.module.ts",title:"user.module.ts"},"import { Module } from '@agros/app';\nimport { UserComponent } from './user.component';\n\n@Module({\n    // highlight-start\n    components: [\n        UserComponent,\n    ],\n    // highlight-end\n})\nexport class UserModule {}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Agros CLI will automatically add these lines to corresponding module file when adding a new component using ",(0,r.kt)("inlineCode",{parentName:"p"},"agros generate")," command.")))}c.isMDXComponent=!0},4019:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/components-a74303642a2f0df7925a15363daba83f.png"},7712:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lazy-loading-1e2416303f473469e3b2511e21808246.gif"}}]);