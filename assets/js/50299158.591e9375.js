"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8277],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Introduction to ES6",id:"introduction-to-es6",slug:"introduction-to-es6",hide_table_of_contents:!0,sidebar_position:36,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2b_introduction_to_es6.md"},i=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/introduction-to-es6",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/introduction-to-es6",title:"\ud83d\udcd3 Introduction to ES6",description:"JavaScript development is in a constant state of evolution. A big part of being a JS developer is keeping up with changes to popular libraries, frameworks, and the language itself. Frameworks that were popular a few years ago (such as backbone.js) are quickly replaced by cutting edge frameworks (like react.js). Node modules become outdated and deprecated. Libraries are in a constant state of churn.",source:"@site/docs/intermediate-javascript/5_test-driven-development-and-environments-with-javascript/2b-introduction-to-es6.md",sourceDirName:"intermediate-javascript/5_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/introduction-to-es6",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/introduction-to-es6",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{title:"\ud83d\udcd3 Introduction to ES6",id:"introduction-to-es6",slug:"introduction-to-es6",hide_table_of_contents:!0,sidebar_position:36,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2b_introduction_to_es6.md"},sidebar:"intermediate-javascript",previous:{title:"\u270f\ufe0f Test It Out, Sudoku Checker, Project Euler (day 2)",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/test-it-out-sudoku-checker-project-euler-day-2"},next:{title:"\ud83d\udcd3 ES6 Classes",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/es6-classes"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JavaScript development is in a constant state of evolution. A big part of being a JS developer is keeping up with changes to popular libraries, frameworks, and the language itself. Frameworks that were popular a few years ago (such as backbone.js) are quickly replaced by cutting edge frameworks (like react.js). Node modules become outdated and deprecated. Libraries are in a constant state of churn."),(0,a.kt)("p",null,"ES6 adds new functionality to JavaScript. (Remember, ECMAScript is the \u201cofficial\u201d name for JavaScript.) ES6 is also called ES2015, because it was released in 2015. Much of this functionality has since been widely adopted by JavaScript developers. "),(0,a.kt)("p",null,"We've actually already been using one of the most important ES6 features since we first started using JavaScript: ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," (instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"). In the next few lessons, we'll cover some of the most popular ES6 features, including arrow notation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," keyword, and template literals."),(0,a.kt)("p",null,"We'll also learn about other ES6 features in this course section and the next. For example, an ES6 feature that we'll learn about in the next course section is ",(0,a.kt)("strong",{parentName:"p"},"promises"),", which help us manage asynchronous code. Promises are a great example of how functionality gets incorporated into JavaScript. Until ES6, developers had to use libraries like Promise.js and Bluebird.js if they wanted to add this functionality to their applications. However, promises proved to be so popular that they were added to native ECMAScript functionality in ES6."),(0,a.kt)("p",null,"By the end of Intermediate JavaScript, you'll be able to use the following ES6 features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Importing and exporting modules with ",(0,a.kt)("inlineCode",{parentName:"li"},"import")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"export")," statements."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"class")," keyword to create object types."),(0,a.kt)("li",{parentName:"ul"},"Arrow notation to create a function expression."),(0,a.kt)("li",{parentName:"ul"},"Template literals to use variables in strings."),(0,a.kt)("li",{parentName:"ul"},"Promises, which we'll cover in the next course section.")),(0,a.kt)("p",null,"You're also encouraged to explore other ES6 features on your own. You can learn more about ES6 features ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukehoban/es6features"},"here"),"."))}d.isMDXComponent=!0}}]);