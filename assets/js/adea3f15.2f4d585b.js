"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[34269],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7896),n=(r(2784),r(30876));const a={title:"Practice: Forms",id:"practice-forms",slug:"practice-forms",hide_table_of_contents:!0,sidebar_position:14,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3c_classwork_practice_forms.md"},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers-part-2/practice-forms",id:"introduction-to-programming/javascript-and-web-browsers-part-2/practice-forms",title:"Practice: Forms",description:"Goal",source:"@site/docs/introduction-to-programming/4_javascript-and-web-browsers-part-2/3c-classwork-practice-forms.md",sourceDirName:"introduction-to-programming/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-forms",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-forms",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Practice: Forms",id:"practice-forms",slug:"practice-forms",hide_table_of_contents:!0,sidebar_position:14,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3c_classwork_practice_forms.md"},sidebar:"introduction-to-programming",previous:{title:"Debugging in JavaScript: Using console.log()",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/debugging-in-javascript-using-consolelog"},next:{title:"Homework: Practical Tips for Researching Web APIs",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/homework-practical-tips-for-researching-web-apis"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Shouting Machine",id:"shouting-machine",level:3},{value:"Form Letter",id:"form-letter",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),": Practice creating HTML forms and debugging:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the HTML structure of a form."),(0,n.kt)("li",{parentName:"ul"},"Implement the ",(0,n.kt)("inlineCode",{parentName:"li"},"onsubmit")," event handler property."),(0,n.kt)("li",{parentName:"ul"},"Gather the input values from the form."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"console.log()")," in your code.")),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Why do you need ",(0,n.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," when working with a submission event for a form?"),(0,n.kt)("li",{parentName:"ul"},"What is the ",(0,n.kt)("inlineCode",{parentName:"li"},"event")," object and what sort of information or tools does it offer to developers?"),(0,n.kt)("li",{parentName:"ul"},"What property do we access to get the value of an HTML ",(0,n.kt)("inlineCode",{parentName:"li"},"<input>"),"?"),(0,n.kt)("li",{parentName:"ul"},'Review the 3 different ways to organize the scripts file from the lesson called "Forms, Hiding and Showing Elements, and the Event Object". Which organization do you prefer and why?')),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"First, take the time to follow along with the lesson to make a Mad Libs website of your own.")," "),(0,n.kt)("p",null,"Then, meet the goal by completing one of the projects below. "),(0,n.kt)("p",null,"If you have additional time in your class, complete both of the projects listed below."),(0,n.kt)("h3",{id:"shouting-machine"},"Shouting Machine"),(0,n.kt)("p",null,"Create a page that asks the user to type something into a field, and when they submit the form, have the page say it back to them in all uppercase. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"console.log")," once \u2014 either to try it out or to debug an issue."),(0,n.kt)("p",null,"For an extra challenge include this functionality as well: an increasing font size with every form submission. This is tricky! Think about where you could save a variable for font size in your code that won't get erased after each form submission. Also, you'll need to consider that you'll be working with strings and numbers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a number for the font size so that you can increase the number on each form submission."),(0,n.kt)("li",{parentName:"ul"},"a string for the actual value that you set for the inline style for text size.")),(0,n.kt)("h3",{id:"form-letter"},"Form Letter"),(0,n.kt)("p",null,"Make a form letter where the user inputs their name, and they get back a letter addressed to them. Feel free to use lorem ipsum for the text of the letter. Use Bootstrap and your knowledge of CSS to make the letter ",(0,n.kt)("em",{parentName:"p"},"look")," like a letter or virtual postcard. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"console.log()")," once \u2014 either to try it out or to debug an issue."),(0,n.kt)("p",null,"Optionally include this functionality as well:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A way to reset the form and letter by clearing those values/results."),(0,n.kt)("li",{parentName:"ul"},"A way for the user to create their own letter in response, addressed to you.")))}m.isMDXComponent=!0}}]);