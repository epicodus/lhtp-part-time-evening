"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42212],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7896),i=(a(2784),a(30876));const r={title:"\u270f\ufe0f Building an API - Part 1",id:"building-an-api---part-1",slug:"building-an-api---part-1",hide_table_of_contents:!0,sidebar_position:16,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_building_an_api.md"},o=void 0,l={unversionedId:"c-and-net/building-an-api/building-an-api---part-1",id:"c-and-net/building-an-api/building-an-api---part-1",title:"\u270f\ufe0f Building an API - Part 1",description:"Goal: Build and test your own API. Once you've completed the basic functionality for your API, review the lesson Further Exploration with APIs to learn about additional API-building objectives.",source:"@site/docs/c-and-net/16_building-an-api/1a-classwork-building-an-api.md",sourceDirName:"c-and-net/16_building-an-api",slug:"/c-and-net/building-an-api/building-an-api---part-1",permalink:"/c-and-net/building-an-api/building-an-api---part-1",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"\u270f\ufe0f Building an API - Part 1",id:"building-an-api---part-1",slug:"building-an-api---part-1",hide_table_of_contents:!0,sidebar_position:16,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1a_classwork_building_an_api.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Journal #13",permalink:"/c-and-net/building-an-api/journal-13"},next:{title:"\ud83d\udcd3 Configuring Application URLs to Run Two ASP.NET Core Applications",permalink:"/c-and-net/building-an-api/configuring-application-urls-to-run-two-aspnet-core-applications"}},s={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Building Your Own API",id:"building-your-own-api",level:2},{value:"Code",id:"code",level:2},{value:"Travel API",id:"travel-api",level:3},{value:"Message Board API",id:"message-board-api",level:3},{value:"API of Choice",id:"api-of-choice",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal"),": Build and test your own API. Once you've completed the basic functionality for your API, review the lesson ",(0,i.kt)("em",{parentName:"p"},"Further Exploration with APIs")," to learn about additional API-building objectives."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Discuss possible answers to these common C#-specific interview questions. You can format this as a mock interview or brainstorm answers as a team:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What makes C# an object-oriented programming language?"),(0,i.kt)("li",{parentName:"ul"},"What is the difference between static and instance methods? When are each used?"),(0,i.kt)("li",{parentName:"ul"},"What is the difference between public and private?")),(0,i.kt)("h2",{id:"building-your-own-api"},"Building Your Own API"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For the first half of the section"),", you'll build your own API. You should also use Postman to manually test your calls. When you create your documentation, keep in mind that your primary API users will be developers implementing the API into their own applications."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For the second half of the section"),", you'll build an application that communicates with one of the APIs either you or your peers built in class during the first half of the section. You\u2019ll also continue to build out and refactor the API you're working with. "),(0,i.kt)("p",null,"You may work with a pair for the entire course section or split the section into two. This means 2 two-day projects for full-time students, or 2 week-long projects for part-time students."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On short weeks"),", you'll spend most of your time on building out the API and pursuing further exploration. At least one class will be set aside for building an application that communicates with your API."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Select an API to build from the options below, and make sure to complete the following requirements:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Whatever API you choose to build, you'll be expected to implement a further exploration topic from the lesson ",(0,i.kt)("a",{parentName:"strong",href:"/c-and-net/building-an-api/further-exploration-with-apis"},"Further Exploration with APIs"),".")," Take some time to learn a bit about each further exploration topic, and then pick at least one to implement in your API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. You are expected to create robust documentation of your API's endpoints in your project's README.md.")," For any further exploration topic that you implement in your API you should explain what it is and how to interact with it."),(0,i.kt)("h3",{id:"travel-api"},"Travel API"),(0,i.kt)("p",null,"Build an API that allows users to ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," reviews about various travel destinations around the world. Here are some user stories to get started. Note that you will have to create custom endpoints for some of these user stories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," reviews about travel destinations."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," reviews by country or city."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to see the most popular travel destinations by number of reviews or by overall rating."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," reviews, but only if I wrote them. (Start by requiring a ",(0,i.kt)("inlineCode",{parentName:"li"},"user_name")," param to match the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_name")," of the author on the message. You can always try authentication later.)"),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to look up random destinations just for fun.")),(0,i.kt)("h3",{id:"message-board-api"},"Message Board API"),(0,i.kt)("p",null,"Create a message board service that can be accessed via your API. Users should be able to ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," messages for specific message boards. Note that you will have to create custom endpoints for some of these user stories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," all messages related to a specific group."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," messages to a specific group."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to be able to see a list of all groups."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to input date parameters and retrieve only messages posted during that time frame."),(0,i.kt)("li",{parentName:"ul"},"As a user, I want to be able to ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," messages, but only if I wrote them. (Start by requiring a ",(0,i.kt)("inlineCode",{parentName:"li"},"user_name")," param to match the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_name")," of the author on the message. You can always try authentication later.)")),(0,i.kt)("h3",{id:"api-of-choice"},"API of Choice"),(0,i.kt)("p",null,"APIs aren't just used for data interaction and manipulation. They can also be used for computation as well. Build a database-centered or computation API around an area of interest to you. Make sure you write your own user stories first."),(0,i.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application successfully returns responses for each API call."),(0,i.kt)("li",{parentName:"ul"},"README thoroughly describes all endpoints along with parameters that can be used."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/c-and-net/building-an-api/further-exploration-with-apis"},"further exploration topic")," has been implemented in the API."),(0,i.kt)("li",{parentName:"ul"},"README thoroughly describes the further exploration topic that's been implemented in the API."),(0,i.kt)("li",{parentName:"ul"},"Application works as expected.")))}d.isMDXComponent=!0}}]);