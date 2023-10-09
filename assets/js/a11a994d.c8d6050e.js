"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44313],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7896),a=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Arrays and Looping Objectives",id:"arrays-and-looping-objectives",slug:"arrays-and-looping-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0a_arrays_and_looping_objectives.md",paginationPrev:null},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping/arrays-and-looping-objectives",id:"introduction-to-programming/arrays-and-looping/arrays-and-looping-objectives",title:"\ud83d\udcd3 Arrays and Looping Objectives",description:"In this section, we'll learn about two important programming concepts that will allow us to better work with data:",source:"@site/docs/introduction-to-programming/5_arrays-and-looping/0a-arrays-and-looping-objectives.md",sourceDirName:"introduction-to-programming/5_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/arrays-and-looping-objectives",permalink:"/introduction-to-programming/arrays-and-looping/arrays-and-looping-objectives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83d\udcd3 Arrays and Looping Objectives",id:"arrays-and-looping-objectives",slug:"arrays-and-looping-objectives",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0a_arrays_and_looping_objectives.md",paginationPrev:null},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f JavaScript and Web Browsers Independent Project",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/javascript-and-web-browsers-independent-project"},next:{title:"\ud83d\udcd3 Additional Pair Programming Tips",permalink:"/introduction-to-programming/arrays-and-looping/additional-pair-programming-tips"}},s={},c=[{value:"Independent Project Objectives",id:"independent-project-objectives",level:2},{value:"What is a polished, portfolio-quality state?",id:"what-is-a-polished-portfolio-quality-state",level:3},{value:"What are the baseline project requirements?",id:"what-are-the-baseline-project-requirements",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, we'll learn about two important programming concepts that will allow us to better work with data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Arrays:")," Lists of data or information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Looping:")," A way of repeating code until a condition is met")),(0,a.kt)("p",null,"We'll learn many different kinds of looping techniques in this section. Then, at the end of the section, we'll review these techniques and learn about when to use each kind of loop."),(0,a.kt)("p",null,"While we learn how to use arrays and looping in our applications, we'll also learn about Test-Driven Development (TDD), a development technique that focuses on breaking down large problems into a series of smaller steps. With TDD, we'll start writing tests for our business logic, and manually testing the code we write. Specifically, we'll learn the TDD workflow by building out an application called Text Analyzer. In the process, we'll continue to hone our organization skills for the JavaScript we write, applying:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Separation of business and user interface logic, which we were introduced to in the last section. In this section, we'll continue to practice separation of logic."),(0,a.kt)("li",{parentName:"ul"},"Separation of concerns, which is a key programming concept that dictates that each function in an application should only be responsible for doing one thing. In this context, a 'concern' is a responsibility. For instance, one function might be 'concerned' about one thing (adding two numbers together) while another function might be 'concerned' with returning those numbers to the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"D"),"on't ",(0,a.kt)("strong",{parentName:"li"},"R"),"epeat ",(0,a.kt)("strong",{parentName:"li"},"Y"),"ourself, or DRY, another programming concept that dictates that we should avoid repeating code where possible. As we'll learn, DRY code sometimes comes at the expense of code that's separated by concern.")),(0,a.kt)("p",null,"We'll also build on the last section by learning about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Document")," methods that return collections of HTML elements, and how to access just one element in the collection."),(0,a.kt)("li",{parentName:"ul"},"Using a code linter as another debugging tool. "),(0,a.kt)("li",{parentName:"ul"},"How to use checkboxes in our forms. "),(0,a.kt)("li",{parentName:"ul"},"New methods to create and add new HTML elements to our webpage, as well as to remove elements from our webpage."),(0,a.kt)("li",{parentName:"ul"},"Git tools to rewrite our commits.")),(0,a.kt)("p",null,"We'll dedicate the rest of our time to coding and putting into practice everything we've learned so far."),(0,a.kt)("p",null,"This section also shifts where our attention will be focused. So far, we have been creating websites with HTML, CSS, and (sometimes) Bootstrap. We've learned how to access and manipulate the DOM using Web APIs, and gotten started on the basics of JavaScript. When a project was completed, we ran the code in the browser to display it. In this section, we will focus more on building out JavaScript business logic functions that we can call on in our user interface logic. "),(0,a.kt)("p",null,"At the end of this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Break problems down into simple achievable steps using TDD"),(0,a.kt)("li",{parentName:"ul"},"Build JavaScript functions that use arrays and looping"),(0,a.kt)("li",{parentName:"ul"},"Create applications with well-separated logic, including many business logic functions that process data.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember that speed and quantity are not measurements of success at the end of a day...",(0,a.kt)("em",{parentName:"strong"},"understanding")," is.  While we expect you to review and share each other's work, there's a great saying that applies (with a slight Epicodus modification): ",(0,a.kt)("em",{parentName:"strong"},"Don't compare your code to the code of others. Compare your code to the code you wrote yesterday"),"."),"  "),(0,a.kt)("h2",{id:"independent-project-objectives"},"Independent Project Objectives"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At the end of this section, you will complete an independent project. Your code will be reviewed for the following objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JavaScript business logic and user interface logic are separate."),(0,a.kt)("li",{parentName:"ul"},"Tests are included for each business logic behavior and code is committed after each test passes."),(0,a.kt)("li",{parentName:"ul"},"Application implements a loop and works as expected."),(0,a.kt)("li",{parentName:"ul"},"The user can use the application repeatedly and see new results. "),(0,a.kt)("li",{parentName:"ul"},"Project is in a polished, portfolio-quality state."),(0,a.kt)("li",{parentName:"ul"},"The prompt's required functionality and baseline project requirements are in place by the deadline.")),(0,a.kt)("h3",{id:"what-is-a-polished-portfolio-quality-state"},"What is a polished, portfolio-quality state?"),(0,a.kt)("p",null,"When a project is both polished and in a portfolio-quality state, this means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure. "),(0,a.kt)("li",{parentName:"ul"},"You are following the best practices and coding conventions we teach. Make sure that your:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools."),(0,a.kt)("li",{parentName:"ul"},"Variable names are descriptive and use lower camel case (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"myVariableExample"),")."),(0,a.kt)("li",{parentName:"ul"},'Commits are made regularly with clear messages that finish the phrase "It will\u2026".')))),(0,a.kt)("h3",{id:"what-are-the-baseline-project-requirements"},"What are the baseline project requirements?"),(0,a.kt)("p",null,"All independent coding projects at Epicodus have these baseline requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A complete and informative README",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is ",(0,a.kt)("em",{parentName:"li"},"not")," required to include a link to your site hosted on gh-pages, but you are welcome and encouraged to do so!"))),(0,a.kt)("li",{parentName:"ul"},"The project's commit history demonstrates that the project's required work schedule and hours have been met:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"8 hours completed on Friday is required for full-time students"),(0,a.kt)("li",{parentName:"ul"},"4 hours completed over the weekend is required for part-time students"))),(0,a.kt)("li",{parentName:"ul"},"Completion of the project based on the prompt ",(0,a.kt)("em",{parentName:"li"},"and")," objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.")))}d.isMDXComponent=!0}}]);