"use strict";(self.webpackChunkopendocs_cn=self.webpackChunkopendocs_cn||[]).push([[3742],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},804:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:9},i="\u8d44\u6e90\u5e93",l={unversionedId:"libraries/libraries",id:"libraries/libraries",title:"\u8d44\u6e90\u5e93",description:"python\u8d44\u6e90\u5e93",source:"@site/docs/libraries/8.libraries.md",sourceDirName:"libraries",slug:"/libraries/libraries",permalink:"/docs/libraries/libraries",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/libraries/8.libraries.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u5e94\u7528",permalink:"/docs/quickstart/build-your-application"},next:{title:"\u6a21\u578b",permalink:"/docs/models/models"}},s={},p=[{value:"python\u8d44\u6e90\u5e93",id:"python\u8d44\u6e90\u5e93",level:2}],c={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d44\u6e90\u5e93"},"\u8d44\u6e90\u5e93"),(0,o.kt)("h2",{id:"python\u8d44\u6e90\u5e93"},"python\u8d44\u6e90\u5e93"),(0,o.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2aPython\u5e93\uff0c\u60a8\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install openai\n")),(0,o.kt)("p",null,"\u5b89\u88c5\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u7ed1\u5b9a\u548c\u5bc6\u94a5\u8fd0\u884c\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'import os\nimport openai\n\n# Load your API key from an environment variable or secret management service\nopenai.api_key = os.getenv("OPENAI_API_KEY")\n\nresponse = openai.Completion.create(model="text-davinci-003", prompt="Say this is a test", temperature=0, max_tokens=7)\n')))}m.isMDXComponent=!0}}]);