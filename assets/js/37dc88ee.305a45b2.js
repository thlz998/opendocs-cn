"use strict";(self.webpackChunkopendocs_cn=self.webpackChunkopendocs_cn||[]).push([[1446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},c="\u7b80\u4ecb",i={unversionedId:"quickstart/Introduction",id:"quickstart/Introduction",title:"\u7b80\u4ecb",description:"completions\u7aef\u70b9\u662f\u6211\u4eecAPI\u7684\u6838\u5fc3\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u3001\u7075\u6d3b\u548c\u5f3a\u5927\u7684\u63a5\u53e3\u3002\u60a8\u8f93\u5165\u4e00\u4e9b\u6587\u672c\u4f5c\u4e3a\u63d0\u793a\uff0cAPI\u5c06\u8fd4\u56de\u4e00\u4e2a\u6587\u672cprompt\uff0c\u8bd5\u56fe\u5339\u914d\u60a8\u7ed9\u51fa\u7684\u4efb\u4f55\u6307\u4ee4\u6216\u4e0a\u4e0b\u6587\u3002",source:"@site/docs/quickstart/3.Introduction.md",sourceDirName:"quickstart",slug:"/quickstart/Introduction",permalink:"/docs/quickstart/Introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/3.Introduction.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/quickstart/quickstart"},next:{title:"\u4ece\u4e00\u6761\u6307\u4ee4\u5f00\u59cb",permalink:"/docs/quickstart/start-with-an-instruction"}},p={},s=[],u={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/completions"},"completions"),"\u7aef\u70b9\u662f\u6211\u4eecAPI\u7684\u6838\u5fc3\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u3001\u7075\u6d3b\u548c\u5f3a\u5927\u7684\u63a5\u53e3\u3002\u60a8\u8f93\u5165\u4e00\u4e9b\u6587\u672c\u4f5c\u4e3a\u63d0\u793a\uff0cAPI\u5c06\u8fd4\u56de\u4e00\u4e2a\u6587\u672cprompt\uff0c\u8bd5\u56fe\u5339\u914d\u60a8\u7ed9\u51fa\u7684\u4efb\u4f55\u6307\u4ee4\u6216\u4e0a\u4e0b\u6587\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\ncompletions: \u4e3a\u4e00\u5bb6\u51b0\u6dc7\u6dcb\u5e97\u5199\u4e00\u4e2a\u6807\u8bed\u3002\n\nprompt: \u6211\u4eec\u4e3a\u6bcf\u4e00\u52fa\u51b0\u6dc7\u6dcb\u5e26\u6765\u7b11\u5bb9\uff01\n\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u4e00\u4e2a\u975e\u5e38\u9ad8\u7ea7\u7684\u81ea\u52a8\u5b8c\u6210\u529f\u80fd\u2014\u2014\u6a21\u578b\u5904\u7406\u60a8\u7684\u6587\u672c\u63d0\u793a\u5e76\u5c1d\u8bd5\u9884\u6d4b\u63a5\u4e0b\u6765\u6700\u53ef\u80fd\u51fa\u73b0\u7684\u5185\u5bb9\u3002"))}d.isMDXComponent=!0}}]);