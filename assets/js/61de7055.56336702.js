"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44346],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7896),a=(r(2784),r(30876));const n={title:"\u270f\ufe0f Power Plant, Project Euler (Two-day Project)",id:"power-plant-project-euler-two-day-project",slug:"power-plant-project-euler-two-day-project",hide_table_of_contents:!0,sidebar_position:31,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_power_plant_project_euler.md"},i=void 0,l={unversionedId:"react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/power-plant-project-euler-two-day-project",id:"react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/power-plant-project-euler-two-day-project",title:"\u270f\ufe0f Power Plant, Project Euler (Two-day Project)",description:"Goal: Use closures to store state. Practice using composition to add functionality to objects. Focus on testing your applications thoroughly and keeping your business logic functional.",source:"@site/docs/react/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/2a-classwork-power-plant-project-euler.md",sourceDirName:"react/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/power-plant-project-euler-two-day-project",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/power-plant-project-euler-two-day-project",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"\u270f\ufe0f Power Plant, Project Euler (Two-day Project)",id:"power-plant-project-euler-two-day-project",slug:"power-plant-project-euler-two-day-project",hide_table_of_contents:!0,sidebar_position:31,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_power_plant_project_euler.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Prior Course Section Survey",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/prior-course-section-survey"},next:{title:"\u270f\ufe0f Whiteboard Practice: Composition",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard-practice-composition"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Power Plant",id:"power-plant",level:3},{value:"Project Euler Problems",id:"project-euler-problems",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:")," Use closures to store state. Practice using composition to add functionality to objects. Focus on testing your applications thoroughly and keeping your business logic functional."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is composition? How is it different from inheritance?"),(0,a.kt)("li",{parentName:"ul"},"How can we make a shallow copy of an object in JavaScript?"),(0,a.kt)("li",{parentName:"ul"},"What is the difference between a shallow copy and a deep copy?"),(0,a.kt)("li",{parentName:"ul"},"How is it possible to store information inside a closure?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"power-plant"},"Power Plant"),(0,a.kt)("p",null,"Follow along with the homework to build an application for growing plants. Make sure to include tests, to separate your logic, and to use webpack. Once you have completed the example shown in the coursework, try adding the following functionality."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add functionality to create multiple plants.")," Remember that we can use closures to store state about different objects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add functionality so different plants have different abilities.")," Use composition to add these abilities.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Build out a fully functioning game where users can feed their plants.")," This could include a UI, special powerups, and any creative functionality you might want to add!"))),(0,a.kt)("h3",{id:"project-euler-problems"},"Project Euler Problems"),(0,a.kt)("p",null,"You've had a chance to solve ",(0,a.kt)("a",{parentName:"p",href:"https://projecteuler.net/archives"},"Project Euler")," problems in Intermediate JavaScript. Now try coming up with functional solutions to some of these problems. Functional programming is often used for math and computation so this is a great way to get more practice with functional techniques."),(0,a.kt)("p",null,"Do not worry about implementing a UI. Focus on writing and testing functional code."),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code correctly uses closures to store state when needed."),(0,a.kt)("li",{parentName:"ul"},"Code is well tested."),(0,a.kt)("li",{parentName:"ul"},"Objects are copied instead of mutated."),(0,a.kt)("li",{parentName:"ul"},"Application works as expected.")))}f.isMDXComponent=!0}}]);