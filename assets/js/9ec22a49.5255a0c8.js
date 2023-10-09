"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[35547],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var r=a(7896),i=(a(2784),a(30876));const n={title:"\u270f\ufe0f Technical Interview Practice: APIs and Further Exploration",id:"technical-interview-practice-apis-and-further-exploration",slug:"technical-interview-practice-apis-and-further-exploration",hide_table_of_contents:!0,sidebar_position:7,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3a_technical_interview_practice_apis_and_further_exploration_classwork.md"},o=void 0,c={unversionedId:"react/react-with-apis-part-2/technical-interview-practice-apis-and-further-exploration",id:"react/react-with-apis-part-2/technical-interview-practice-apis-and-further-exploration",title:"\u270f\ufe0f Technical Interview Practice: APIs and Further Exploration",description:"Technical Interview Questions",source:"@site/docs/react/11_react-with-apis-part-2/3a-technical-interview-practice-apis-and-further-exploration-classwork.md",sourceDirName:"react/11_react-with-apis-part-2",slug:"/react/react-with-apis-part-2/technical-interview-practice-apis-and-further-exploration",permalink:"/react/react-with-apis-part-2/technical-interview-practice-apis-and-further-exploration",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u270f\ufe0f Technical Interview Practice: APIs and Further Exploration",id:"technical-interview-practice-apis-and-further-exploration",slug:"technical-interview-practice-apis-and-further-exploration",hide_table_of_contents:!0,sidebar_position:7,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3a_technical_interview_practice_apis_and_further_exploration_classwork.md"},sidebar:"react",previous:{title:"\u270f\ufe0f React with API (Multi-Week Project) (day 3)",permalink:"/react/react-with-apis-part-2/react-with-api-multi-week-project-day-3"},next:{title:"\u270f\ufe0f React with API (Multi-Week Project) (day 4)",permalink:"/react/react-with-apis-part-2/react-with-api-multi-week-project-day-4"}},l={},s=[{value:"Technical Interview Questions",id:"technical-interview-questions",level:2},{value:"Stories and Examples",id:"stories-and-examples",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"technical-interview-questions"},"Technical Interview Questions"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When should we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"useState()")," hook?"),(0,i.kt)("li",{parentName:"ul"},"How is state management with a ",(0,i.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook different from state management with Redux?"),(0,i.kt)("li",{parentName:"ul"},"What arguments do we need to pass in to the ",(0,i.kt)("inlineCode",{parentName:"li"},"useReducer()")," hook when we call it? "),(0,i.kt)("li",{parentName:"ul"},"What is React context used for?"),(0,i.kt)("li",{parentName:"ul"},"When should we use React context?"),(0,i.kt)("li",{parentName:"ul"},"What are the alternatives to React context?"),(0,i.kt)("li",{parentName:"ul"},"How does React context share data between two components? Name the mechanisms it uses."),(0,i.kt)("li",{parentName:"ul"},"What is full stack development? What are the differences between front and back end development?"),(0,i.kt)("li",{parentName:"ul"},"When we make an API call with React, what part of the React lifecycle should we use to trigger the API call? Why?"),(0,i.kt)("li",{parentName:"ul"},"What is React Native? Name a few ways in which it is different from React."),(0,i.kt)("li",{parentName:"ul"},"Why are hooks so useful?"),(0,i.kt)("li",{parentName:"ul"},"What is data visualization and why might we want to add it to an application?"),(0,i.kt)("li",{parentName:"ul"},"What issues does React have with SEO? How can we address these issues?")),(0,i.kt)("h2",{id:"stories-and-examples"},"Stories and Examples"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Offering a tangible story or example that highlights your skills usually goes ",(0,i.kt)("em",{parentName:"p"},"much further")," in an interview than simply ",(0,i.kt)("em",{parentName:"p"},"telling")," your interviewer you're good at something. (i.e.: Telling a story about a time you tracked down a tricky bug versus simply saying ",(0,i.kt)("em",{parentName:"p"},'"I\'m good at problem-solving!"'),")."),(0,i.kt)("p",null,"Review the ",(0,i.kt)("strong",{parentName:"p"},"STAR")," method, discussed in ",(0,i.kt)("a",{parentName:"p",href:"/internship-and-job-search/preparing-for-job-interviews/non-technical-interview"},"this lesson on non-technical interviews"),". Use the ",(0,i.kt)("strong",{parentName:"p"},"STAR")," method to practice answering non-technical questions with your partner."),(0,i.kt)("p",null,"Again, if you come up with a story or example you feel good about, jot it down somewhere! It's tough to come up with stories like this in an interview on the spot. Having a few tucked away to review before an interview will be a huge benefit to you later."))}h.isMDXComponent=!0}}]);