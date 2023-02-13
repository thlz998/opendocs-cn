"use strict";(self.webpackChunkopendocs_cn=self.webpackChunkopendocs_cn||[]).push([[101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},c="\u5feb\u901f\u5165\u95e8",i={unversionedId:"quickstart/quickstart",id:"quickstart/quickstart",title:"\u5feb\u901f\u5165\u95e8",description:"OpenAI\u8bad\u7ec3\u4e86\u5148\u8fdb\u7684\u8bed\u8a00\u6a21\u578b\uff0c\u975e\u5e38\u64c5\u957f\u7406\u89e3\u548c\u751f\u6210\u6587\u672c\u3002\u6211\u4eec\u7684API\u63d0\u4f9b\u5bf9\u8fd9\u4e9b\u6a21\u578b\u7684\u8bbf\u95ee\uff0c\u53ef\u4ee5\u7528\u4e8e\u89e3\u51b3\u51e0\u4e4e\u4efb\u4f55\u6d89\u53ca\u5904\u7406\u8bed\u8a00\u7684\u4efb\u52a1\u3002",source:"@site/docs/quickstart/2.quickstart.md",sourceDirName:"quickstart",slug:"/quickstart/quickstart",permalink:"/opendocs-cn/docs/quickstart/quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/2.quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/opendocs-cn/docs/introduction"},next:{title:"\u7b80\u4ecb",permalink:"/opendocs-cn/docs/quickstart/Introduction"}},u={},s=[],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5165\u95e8"},"\u5feb\u901f\u5165\u95e8"),(0,o.kt)("p",null,"OpenAI\u8bad\u7ec3\u4e86\u5148\u8fdb\u7684\u8bed\u8a00\u6a21\u578b\uff0c\u975e\u5e38\u64c5\u957f\u7406\u89e3\u548c\u751f\u6210\u6587\u672c\u3002\u6211\u4eec\u7684API\u63d0\u4f9b\u5bf9\u8fd9\u4e9b\u6a21\u578b\u7684\u8bbf\u95ee\uff0c\u53ef\u4ee5\u7528\u4e8e\u89e3\u51b3\u51e0\u4e4e\u4efb\u4f55\u6d89\u53ca\u5904\u7406\u8bed\u8a00\u7684\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u5728\u672c\u5feb\u901f\u5165\u95e8\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u3002\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u4f7f\u7528API\u5904\u7406\u4efb\u4f55\u4efb\u52a1\u7684\u5173\u952e\u6982\u5ff5\u548c\u6280\u672f\uff0c\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u751f\u6210"),(0,o.kt)("li",{parentName:"ul"},"\u6458\u8981"),(0,o.kt)("li",{parentName:"ul"},"\u5206\u7c7b\u3001\u5f52\u7c7b\u548c\u60c5\u611f\u5206\u6790"),(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u63d0\u53d6"),(0,o.kt)("li",{parentName:"ul"},"\u7ffb\u8bd1"),(0,o.kt)("li",{parentName:"ul"},"\u4ee5\u53ca\u66f4\u591a\uff01")))}d.isMDXComponent=!0}}]);