"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[33639],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7896),i=(r(2784),r(30876));const a={title:"\u270f\ufe0f Technical Interview Practice: NoSQL",id:"technical-interview-practice-nosql",slug:"technical-interview-practice-nosql",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4a_technical_interview_practice_nosql_classwork.md"},o=void 0,l={unversionedId:"react/react-with-nosql/technical-interview-practice-nosql",id:"react/react-with-nosql/technical-interview-practice-nosql",title:"\u270f\ufe0f Technical Interview Practice: NoSQL",description:"Technical Interview Questions",source:"@site/docs/react/8_react-with-nosql/4a-technical-interview-practice-nosql-classwork.md",sourceDirName:"react/8_react-with-nosql",slug:"/react/react-with-nosql/technical-interview-practice-nosql",permalink:"/react/react-with-nosql/technical-interview-practice-nosql",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"\u270f\ufe0f Technical Interview Practice: NoSQL",id:"technical-interview-practice-nosql",slug:"technical-interview-practice-nosql",hide_table_of_contents:!0,sidebar_position:27,day:"wednesday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4a_technical_interview_practice_nosql_classwork.md"},sidebar:"react",previous:{title:"\u270f\ufe0f Firestore Survey, Quiz of Choice (Three-Day Project) - Part 3",permalink:"/react/react-with-nosql/firestore-survey-quiz-of-choice-three-day-project---part-3"},next:{title:"\ud83d\udcd3 Firestore Queries",permalink:"/react/react-with-nosql/firestore-queries"}},s={},c=[{value:"Technical Interview Questions",id:"technical-interview-questions",level:2},{value:"Stories and Examples",id:"stories-and-examples",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"technical-interview-questions"},"Technical Interview Questions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Hooks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What pain points in React development do hooks solve?"),(0,i.kt)("li",{parentName:"ul"},"What are the rules of hooks? What are some best practices for hooks?"),(0,i.kt)("li",{parentName:"ul"},"What does the ",(0,i.kt)("inlineCode",{parentName:"li"},"useState()")," hook do? Describe how to set it up."),(0,i.kt)("li",{parentName:"ul"},"Can we use hooks in class components?"),(0,i.kt)("li",{parentName:"ul"},"What does the ",(0,i.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook do? Describe how to set it up."),(0,i.kt)("li",{parentName:"ul"},"When should you abstract stateful logic into a custom hook?")),(0,i.kt)("p",null,"NoSQL and Firebase:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What are the major differences between SQL and NoSQL?"),(0,i.kt)("li",{parentName:"ul"},"What is the CAP theorem? Why is it important and how does it describe NoSQL databases?"),(0,i.kt)("li",{parentName:"ul"},"How is the CAP theorem different from ACID?"),(0,i.kt)("li",{parentName:"ul"},"What are some of the advantages of using a cloud-based service like Firebase?"),(0,i.kt)("li",{parentName:"ul"},"What are some of the disadvantages of using a cloud-based service?"),(0,i.kt)("li",{parentName:"ul"},"Other than using a get request, how can we configure Firestore to get the latest snapshot of the database?"),(0,i.kt)("li",{parentName:"ul"},"What is the difference between client-side and server-side routing?"),(0,i.kt)("li",{parentName:"ul"},"When do we need to index fields in our Firestore database and why? What is indexing and why is it helpful?")),(0,i.kt)("h2",{id:"stories-and-examples"},"Stories and Examples"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Offering a tangible story or example that highlights your skills usually goes ",(0,i.kt)("em",{parentName:"p"},"much further")," in an interview than simply ",(0,i.kt)("em",{parentName:"p"},"telling")," your interviewer you're good at something. (i.e.: Telling a story about a time you tracked down a tricky bug versus simply saying ",(0,i.kt)("em",{parentName:"p"},'"I\'m good at problem-solving!"'),")."),(0,i.kt)("p",null,"Review the ",(0,i.kt)("strong",{parentName:"p"},"STAR")," method, discussed in ",(0,i.kt)("a",{parentName:"p",href:"/internship-and-job-search/preparing-for-job-interviews/non-technical-interview"},"this lesson on non-technical interviews"),". Use the ",(0,i.kt)("strong",{parentName:"p"},"STAR")," method to practice answering non-technical questions with your partner."),(0,i.kt)("p",null,"Again, if you come up with a story or example you feel good about, jot it down somewhere! It's tough to come up with stories like this in an interview on the spot. Having a few tucked away to review before an interview will be a huge benefit to you later."))}h.isMDXComponent=!0}}]);