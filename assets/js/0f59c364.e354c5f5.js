"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74174],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Strings",id:"strings",slug:"strings",hide_table_of_contents:!0,sidebar_position:13,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0j_strings.md"},i=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers/strings",id:"introduction-to-programming/javascript-and-web-browsers/strings",title:"\ud83d\udcd3 Strings",description:"We've done a lot with numbers, but there's more to this world than just math. Let's look at words.",source:"@site/docs/introduction-to-programming/3_javascript-and-web-browsers/0j-strings.md",sourceDirName:"introduction-to-programming/3_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/strings",permalink:"/introduction-to-programming/javascript-and-web-browsers/strings",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"\ud83d\udcd3 Strings",id:"strings",slug:"strings",hide_table_of_contents:!0,sidebar_position:13,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0j_strings.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 JavaScript Variables",permalink:"/introduction-to-programming/javascript-and-web-browsers/javascript-variables"},next:{title:"\u270f\ufe0f Practice: Variables and Strings",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-variables-and-strings"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've done a lot with numbers, but there's more to this world than just math. Let's look at words."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "Hello world!";\n"Hello world!"\n')),(0,a.kt)("p",null,"The stuff inside the quotes is called a ",(0,a.kt)("strong",{parentName:"p"},"string"),". Strings can include letters, punctuation, and even numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "5674";\n"5674"\n> "!?&";\n"!?&"\n> "Strings are wild! ;)";\n"Strings are wild! ;)"\n')),(0,a.kt)("p",null,"What happens if we don't surround our string with quotes?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> hello;\nx Uncaught ReferenceError: hello is not defined (...)\n")),(0,a.kt)("p",null,"This doesn't work because JavaScript doesn't know what ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," means when it's not a string. It looks to see if it's a variable or something similar, and if it doesn't find a variable with that name defined anywhere it gives us an error message."),(0,a.kt)("p",null,"We can set variables equal to strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> const myString = "Strings can contain characters like @, $, and %.";\nundefined\n')),(0,a.kt)("p",null,"If you want to put a quote inside a string, you have two options. Here's the first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> "Quoth the raven, \\"Nevermore.\\"";\n"Quoth the raven, "Nevermore.""\n')),(0,a.kt)("p",null,"The backslashes ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," in front of the quotes is called an ",(0,a.kt)("strong",{parentName:"p"},"escape"),". It tells JavaScript that the quote ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," that comes right after it is not the end of the string, but just a character inside the string."),(0,a.kt)("p",null,"You can also use single quotes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'> \'"Programming is fun!", she exclaimed.\';\n""Programming is fun!", she exclaimed."\n')),(0,a.kt)("p",null,"JavaScript generally doesn't care if you use single or double quotes to indicate a string. If you have a lot of double quotes within the string, using single quotes to indicate the string saves you from having to escape all of the double quotes inside."),(0,a.kt)("p",null,"Finally, note that we are still using semicolons at the end of each line. By doing so, we can be explicit about where a piece of code terminates (at the end of a line) instead of expecting JavaScript to automatically do it for us."))}d.isMDXComponent=!0}}]);