"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17527],{30876:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var i=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),l=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return i.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||n;return t?i.createElement(m,o(o({ref:r},u),{},{components:t})):i.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<n;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63760:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=t(7896),a=(t(2784),t(30876));const n={title:"\u270f\ufe0f Whiteboard Practice: Recursion",id:"whiteboard-practice-recursion",slug:"whiteboard-practice-recursion",hide_table_of_contents:!0,sidebar_position:23,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_classwork_whiteboard_recursion_practice.md"},o=void 0,c={unversionedId:"react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard-practice-recursion",id:"react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard-practice-recursion",title:"\u270f\ufe0f Whiteboard Practice: Recursion",description:"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!",source:"@site/docs/react/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/1c-classwork-whiteboard-recursion-practice.md",sourceDirName:"react/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard-practice-recursion",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard-practice-recursion",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"\u270f\ufe0f Whiteboard Practice: Recursion",id:"whiteboard-practice-recursion",slug:"whiteboard-practice-recursion",hide_table_of_contents:!0,sidebar_position:23,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1c_classwork_whiteboard_recursion_practice.md"},sidebar:"react",previous:{title:"\u270f\ufe0f Whiteboard Practice: Closures",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/whiteboard-practice-closures"},next:{title:"\ud83d\udcd3 The Problems of Classical Inheritance",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/the-problems-of-classical-inheritance"}},s={},l=[{value:"Practice with Recursion",id:"practice-with-recursion",level:3},{value:"Problem #1",id:"problem-1",level:4},{value:"Problem #2",id:"problem-2",level:4}],u={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You will get a chance to practice whiteboarding a lot during this course section. Time will be set aside during most class sessions at the discretion of your teacher. Use this time wisely to improve both your whiteboarding and functional programming skills!"),(0,a.kt)("h3",{id:"practice-with-recursion"},"Practice with Recursion"),(0,a.kt)("p",null,"Alternate problem #1 and #2 with your pair."),(0,a.kt)("h4",{id:"problem-1"},"Problem #1"),(0,a.kt)("p",null,'Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".'),(0,a.kt)("h4",{id:"problem-2"},"Problem #2"),(0,a.kt)("p",null,'Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. ',(0,a.kt)("inlineCode",{parentName:"p"},"rgr(3)")," should return the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"red green refactor red green refactor red green refactor"\n')))}f.isMDXComponent=!0}}]);