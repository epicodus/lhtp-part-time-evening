"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[77117],{30876:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>y});var i=n(2784);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=i.createContext({}),d=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=d(t.components);return i.createElement(u.Provider,{value:e},t.children)},l="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),l=d(n),p=o,y=l["".concat(u,".").concat(p)]||l[p]||h[p]||a;return n?i.createElement(y,r(r({ref:e},s),{},{components:n})):i.createElement(y,r({ref:e},s))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[l]="string"==typeof t?t:o,r[1]=c;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71530:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(7896),o=(n(2784),n(30876));const a={title:"\ud83d\udcd3 Introduction to Authentication, Authorization, and Identity",id:"introduction-to-authentication-authorization-and-identity",slug:"introduction-to-authentication-authorization-and-identity",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2c_introduction_to_authentication_and_identity.md"},r=void 0,c={unversionedId:"c-and-net/authentication-with-identity/introduction-to-authentication-authorization-and-identity",id:"c-and-net/authentication-with-identity/introduction-to-authentication-authorization-and-identity",title:"\ud83d\udcd3 Introduction to Authentication, Authorization, and Identity",description:"In this lesson we'll introduce authentication in general as well as Identity, the authentication tool built into ASP.NET Core.",source:"@site/docs/c-and-net/14_authentication-with-identity/2c-introduction-to-authentication-and-identity.md",sourceDirName:"c-and-net/14_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/introduction-to-authentication-authorization-and-identity",permalink:"/c-and-net/authentication-with-identity/introduction-to-authentication-authorization-and-identity",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udcd3 Introduction to Authentication, Authorization, and Identity",id:"introduction-to-authentication-authorization-and-identity",slug:"introduction-to-authentication-authorization-and-identity",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2c_introduction_to_authentication_and_identity.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Async and Await",permalink:"/c-and-net/authentication-with-identity/async-and-await"},next:{title:"\ud83d\udcd3 Identity Setup and Configuration",permalink:"/c-and-net/authentication-with-identity/identity-setup-and-configuration"}},u={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Introduction to Identity",id:"introduction-to-identity",level:2},{value:"Don&#39;t Confuse &quot;ASP.NET Core Identity&quot; with &quot;Microsoft Identity Platform&quot;!",id:"dont-confuse-aspnet-core-identity-with-microsoft-identity-platform",level:3}],s={toc:d},l="wrapper";function h(t){let{components:e,...n}=t;return(0,o.kt)(l,(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson we'll introduce authentication in general as well as Identity, the authentication tool built into ASP.NET Core."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authentication")," is the process of identifying users by matching sign-in credentials with user account data in the application. Whenever you log into an account through a website, that site or application is ",(0,o.kt)("em",{parentName:"p"},"authenticating")," you."),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Keep in mind authentication differs from authorization. While authentication is the process of determining who you are, ",(0,o.kt)("strong",{parentName:"p"},"authorization")," is the process of managing what you are allowed to do. For example, an admin would have different permissions than a moderator or a basic user."),(0,o.kt)("h2",{id:"introduction-to-identity"},"Introduction to Identity"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To support user accounts and authentication in our .NET applications, we'll use a popular tool called ",(0,o.kt)("strong",{parentName:"p"},"Identity"),". As explained in the Microsoft Article ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?tabs=visual-studio-code&view=aspnetcore-6.0"},"Introduction to Identity on ASP.NET Core"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ASP.NET Core Identity is a membership system which allows you to add login functionality to your application. Users can create an account and login with a user name and password or they can use an external login provider such as Facebook, Google, Microsoft Account, Twitter or others.")),(0,o.kt)("p",null,"It's considered the recommended approach for managing user accounts in ASP.NET Core applications. In the next lesson, we'll begin walking through how to integrate Identity into our own ASP.NET MVC applications."),(0,o.kt)("h3",{id:"dont-confuse-aspnet-core-identity-with-microsoft-identity-platform"},'Don\'t Confuse "ASP.NET Core Identity" with "Microsoft Identity Platform"!'),(0,o.kt)("p",null,"The last thing to note here is that ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?tabs=visual-studio-code&view=aspnetcore-6.0"},"ASP.NET Core Identity")," is a separate tool from the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/"},"Microsoft identity platform"),", which is an authentication service through Microsoft's cloud platform called ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/"},"Azure"),"."))}h.isMDXComponent=!0}}]);