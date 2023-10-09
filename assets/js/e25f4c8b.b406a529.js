"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82450],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7896),o=(r(2784),r(30876));const n={title:"\u270f\ufe0f Farmers Market (Two-day Project)",id:"farmers-market-two-day-project",slug:"farmers-market-two-day-project",hide_table_of_contents:!0,sidebar_position:26,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_css_practice_farmers_markets.md"},i=void 0,l={unversionedId:"react/react-fundamentals/farmers-market-two-day-project",id:"react/react-fundamentals/farmers-market-two-day-project",title:"\u270f\ufe0f Farmers Market (Two-day Project)",description:"Goal: Practice adding local state to your application. For these projects, it is enough to add local state that allows users to toggle between components. However, you may wish to experiment with local state in other ways as well.",source:"@site/docs/react/4_react-fundamentals/2a-classwork-css-practice-farmers-markets.md",sourceDirName:"react/4_react-fundamentals",slug:"/react/react-fundamentals/farmers-market-two-day-project",permalink:"/react/react-fundamentals/farmers-market-two-day-project",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"\u270f\ufe0f Farmers Market (Two-day Project)",id:"farmers-market-two-day-project",slug:"farmers-market-two-day-project",hide_table_of_contents:!0,sidebar_position:26,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_classwork_css_practice_farmers_markets.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Prior Course Section Survey",permalink:"/react/react-fundamentals/prior-course-section-survey"},next:{title:"\u270f\ufe0f Farmers Market (Two-day Project) (day 2)",permalink:"/react/react-fundamentals/farmers-market-two-day-project-day-2"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Adding Local State to Help Queue",id:"adding-local-state-to-help-queue",level:3},{value:"Farmer&#39;s Market Circuit",id:"farmers-market-circuit",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal:")," Practice adding local state to your application. For these projects, it is enough to add local state that allows users to toggle between components. However, you may wish to experiment with local state in other ways as well."),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the difference between local state and shared state?"),(0,o.kt)("li",{parentName:"ul"},"What is conditional rendering and how is it useful in React?"),(0,o.kt)("li",{parentName:"ul"},"Why do we need to bind functions in React? What's the alternative to explicitly binding them?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"adding-local-state-to-help-queue"},"Adding Local State to Help Queue"),(0,o.kt)("p",null,"Work along with the homework to add local state to your Help Queue application."),(0,o.kt)("p",null,"Next, use conditional rendering to allow users to see the following three pages in sequence before reaching the ticket form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Have you gone through all the steps on the Learn How to Program debugging lesson?"'),(0,o.kt)("li",{parentName:"ul"},'"Have you asked another pair for help?"'),(0,o.kt)("li",{parentName:"ul"},'"Have you spent 15 minutes going through the problem documenting every step?"')),(0,o.kt)("h3",{id:"farmers-market-circuit"},"Farmer's Market Circuit"),(0,o.kt)("p",null,"Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce and sells it at farmers markets throughout town. Since Avery's is at a different market almost every day, they've started a website to show customers which market they will be at on a given day."),(0,o.kt)("p",null,"Avery's also grows different crops in different seasons. They'd like to display what produce is available during which months on their site too."),(0,o.kt)("p",null,"Using React and all other tools we've covered so far, create a website that depicts this information. ",(0,o.kt)("strong",{parentName:"p"},"The data you'll use is in the ",(0,o.kt)("em",{parentName:"strong"},"Cheat Sheet")," section of this lesson.")," Also, take time to construct your entire environment from scratch. It's important to practice these fundamentals before we increase the complexity of our projects later in this course section!"),(0,o.kt)("p",null,"Try using local state to toggle between different days. Note that we can use conditional rendering for as many conditions as we want \u2014 including all seven days of the week!"),(0,o.kt)("p",null,"Once again, make sure to plan your application first and include a component diagram in your README."),(0,o.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Components are used to create modular UI elements."),(0,o.kt)("li",{parentName:"ul"},"propTypes define data types for all component props."),(0,o.kt)("li",{parentName:"ul"},"Local state has been implemented and works correctly."),(0,o.kt)("li",{parentName:"ul"},"Application is well planned and includes a component diagram."),(0,o.kt)("li",{parentName:"ul"},"Application works as expected.")))}d.isMDXComponent=!0}}]);