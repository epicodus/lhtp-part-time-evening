"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88710],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},11736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7896),r=(a(2784),a(30876));const o={title:"\u270f\ufe0f Refactoring with Many-To-Many (Week-Long Project) - Part 3 (day 3)",id:"refactoring-with-many-to-many-week-long-project---part-3-day-3",slug:"refactoring-with-many-to-many-week-long-project---part-3-day-3",hide_table_of_contents:!0,sidebar_position:4,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3a_classwork_refactoring_with_many_to_many.md"},i=void 0,l={unversionedId:"c-and-net/many-to-many-relationships-part-2/refactoring-with-many-to-many-week-long-project---part-3-day-3",id:"c-and-net/many-to-many-relationships-part-2/refactoring-with-many-to-many-week-long-project---part-3-day-3",title:"\u270f\ufe0f Refactoring with Many-To-Many (Week-Long Project) - Part 3 (day 3)",description:"Goal: Continue your practice with many-to-many relationships by refactoring an old project.",source:"@site/docs/c-and-net/13_many-to-many-relationships-part-2/3a-classwork-refactoring-with-many-to-many-day-3.md",sourceDirName:"c-and-net/13_many-to-many-relationships-part-2",slug:"/c-and-net/many-to-many-relationships-part-2/refactoring-with-many-to-many-week-long-project---part-3-day-3",permalink:"/c-and-net/many-to-many-relationships-part-2/refactoring-with-many-to-many-week-long-project---part-3-day-3",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u270f\ufe0f Refactoring with Many-To-Many (Week-Long Project) - Part 3 (day 3)",id:"refactoring-with-many-to-many-week-long-project---part-3-day-3",slug:"refactoring-with-many-to-many-week-long-project---part-3-day-3",hide_table_of_contents:!0,sidebar_position:4,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3a_classwork_refactoring_with_many_to_many.md"},sidebar:"c-and-net",previous:{title:"\u270f\ufe0f Refactoring with Many-To-Many (Week-Long Project) - Part 2 (day 2)",permalink:"/c-and-net/many-to-many-relationships-part-2/refactoring-with-many-to-many-week-long-project---part-2-day-2"},next:{title:"\u270f\ufe0f Refactoring with Many-To-Many (Week-Long Project) - Part 4 (day 4)",permalink:"/c-and-net/many-to-many-relationships-part-2/refactoring-with-many-to-many-week-long-project---part-4-day-4"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Project Refactor",id:"project-refactor",level:3},{value:"Design Your Own",id:"design-your-own",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal"),": Continue your practice with many-to-many relationships by refactoring an old project. "),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What navigation properties do we need to include on a join entity and any corresponding entities?"),(0,r.kt)("li",{parentName:"ul"},"What is model validation?"),(0,r.kt)("li",{parentName:"ul"},"What is a validation attribute and how do we use it in our C# models?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Choose between the two prompts below and work on solidifying your skills with many-to-many relationships in a multi-day project. This is an opportunity to build out a polished site, and explore implementation of EF Core functionality that is not covered by the curriculum."),(0,r.kt)("h3",{id:"project-refactor"},"Project Refactor"),(0,r.kt)("p",null,"Revisit an old project with a one-to-many relationship and refactor it to have a many-to-many relationship. Consider the impact this may have on routing, and how your models and controllers will need to change to handle this new functionality. "),(0,r.kt)("p",null,"Make sure to include model validation for all CREATE and UPDATE actions, and a splash page that lists data from two or more database tables."),(0,r.kt)("h3",{id:"design-your-own"},"Design Your Own"),(0,r.kt)("p",null,"Build a new project that includes a many-to-many relationship with full CRUD. Make sure to write user stories to guide your development before beginning to code."),(0,r.kt)("p",null,"Make sure to include model validation for all CREATE and UPDATE actions, and a splash page that lists data from two or more database tables."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do database tables and columns follow proper naming conventions?"),(0,r.kt)("li",{parentName:"ul"},"Does one of your classes have all CRUD methods implemented in your app? That includes: Create, Read (all and singular) Update and Delete (all and singular)."),(0,r.kt)("li",{parentName:"ul"},"Are you able to view both sides of the many-many relationship? For a particular instance of a class, are you able to view all of the instances of the ",(0,r.kt)("strong",{parentName:"li"},"other")," class that are related to it? And vice versa?"),(0,r.kt)("li",{parentName:"ul"},"Is the many-to-many relationship set up correctly in the database?"),(0,r.kt)("li",{parentName:"ul"},"Are validation attributes used to validate models before they are saved to the database?"),(0,r.kt)("li",{parentName:"ul"},"Is there a splash page that lists data from two or more database tables?")))}u.isMDXComponent=!0}}]);