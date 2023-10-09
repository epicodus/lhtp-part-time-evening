"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[27575],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||h[m]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7896),o=(r(2784),r(30876));const n={title:"\ud83d\udcd3 Further Exploration Opportunities",id:"further-exploration-opportunities",slug:"further-exploration-opportunities",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3c_further_exploration_with_firebase.md"},i=void 0,s={unversionedId:"react/react-with-nosql-part-2/further-exploration-opportunities",id:"react/react-with-nosql-part-2/further-exploration-opportunities",title:"\ud83d\udcd3 Further Exploration Opportunities",description:"If you take one glance at the Firebase docs, you know that there's a whole lot we can do with its many services! In this lesson, we'll take a look at a few opportunities for further exploration within Firebase, React Router, and React.",source:"@site/docs/react/9_react-with-nosql-part-2/3c-further-exploration-with-firebase.md",sourceDirName:"react/9_react-with-nosql-part-2",slug:"/react/react-with-nosql-part-2/further-exploration-opportunities",permalink:"/react/react-with-nosql-part-2/further-exploration-opportunities",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udcd3 Further Exploration Opportunities",id:"further-exploration-opportunities",slug:"further-exploration-opportunities",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3c_further_exploration_with_firebase.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Styled Components",permalink:"/react/react-with-nosql-part-2/styled-components"},next:{title:"\u270f\ufe0f Choose Your Own Adventure (One-Week Project) - Part 2",permalink:"/react/react-with-nosql-part-2/choose-your-own-adventure-one-week-project---part-2"}},l={},c=[{value:"Firebase Services",id:"firebase-services",level:3},{value:"React Router",id:"react-router",level:3},{value:"React",id:"react",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you take one glance at the Firebase docs, you know that there's a whole lot we can do with its many services! In this lesson, we'll take a look at a few opportunities for further exploration within Firebase, React Router, and React. "),(0,o.kt)("p",null,"You're not required to explore the options listed below now, and know that there's much more out there than what's in this lesson. Instead, read through the following list to get an idea of what else you might want to explore in your projects this week, or for your capstone."),(0,o.kt)("h3",{id:"firebase-services"},"Firebase Services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explore using ",(0,o.kt)("a",{parentName:"li",href:"https://firebaseopensource.com/platform/web/"},"an external library")," that provides tools for using Firebase that are meant to work specifically with React. These libraries are often called ",(0,o.kt)("strong",{parentName:"li"},"binding libraries"),", as they help two separate libraries work together."),(0,o.kt)("li",{parentName:"ul"},"Firebase provides a drop-in authentication solution for React called FirebaseUI. There's a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/firebase/firebaseui-web"},"web version")," and a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/firebase/firebaseui-web-react"},"version specifically for React"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to set ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/security/get-started"},"your Firestore database security rules"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/web/auth-state-persistence"},"persist authentication"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to enable ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/manage-data/enable-offline"},"offline access of Firestore data"),"."),(0,o.kt)("li",{parentName:"ul"},"Improve the creation of new users or user profiles by exploring ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/web/manage-users"},"other ",(0,o.kt)("inlineCode",{parentName:"a"},"User")," fields for authentication")),(0,o.kt)("li",{parentName:"ul"},"Learn how to implement a ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/database/web/start"},"Firebase Realtime Database"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to add a custom domain to a hosted Firebase project using ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting/custom-domain"},"Firebase's custom domain documentation"),".")),(0,o.kt)("h3",{id:"react-router"},"React Router"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"https://reactrouter.com/en/main/getting-started/tutorial#adding-a-no-match-route"},"add a route when the supplied URL does not match any existing routes"),". "),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"https://reactrouter.com/en/main/getting-started/tutorial#reading-url-params"},"read URL parameters"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"https://reactrouter.com/en/main/getting-started/tutorial#search-params"},"create website searches using search params"),".  ")),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explore other React hooks on the ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html"},"Hooks API Reference")," documentation."),(0,o.kt)("li",{parentName:"ul"},"There are many smaller libraries that offer custom hooks as well. Check out ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rehooks/awesome-react-hooks"},"this excellent list of resources on hooks"),", which includes tutorials and links to various custom hooks. Among other things, these custom hooks offer the following additional functionality to function components:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Handling form state"),(0,o.kt)("li",{parentName:"ul"},"Using the Fetch API"),(0,o.kt)("li",{parentName:"ul"},"Drawing SVGs"),(0,o.kt)("li",{parentName:"ul"},"Handling media queries")))))}h.isMDXComponent=!0}}]);