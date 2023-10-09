"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[72561],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const a={title:"\ud83d\udcd3 Literal Notation Versus Constructors",id:"literal-notation-versus-constructors",slug:"literal-notation-versus-constructors",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0d_literal_notation_vs_constructors.md"},s=void 0,i={unversionedId:"intermediate-javascript/object-oriented-javascript/literal-notation-versus-constructors",id:"intermediate-javascript/object-oriented-javascript/literal-notation-versus-constructors",title:"\ud83d\udcd3 Literal Notation Versus Constructors",description:"In the previous lesson we created objects using Literal Notation. Let's explore further examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors. We haven't learned about constructors yet, but we will in this lesson!",source:"@site/docs/intermediate-javascript/3_object-oriented-javascript/0d-literal-notation-vs-constructors.md",sourceDirName:"intermediate-javascript/3_object-oriented-javascript",slug:"/intermediate-javascript/object-oriented-javascript/literal-notation-versus-constructors",permalink:"/intermediate-javascript/object-oriented-javascript/literal-notation-versus-constructors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udcd3 Literal Notation Versus Constructors",id:"literal-notation-versus-constructors",slug:"literal-notation-versus-constructors",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0d_literal_notation_vs_constructors.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 JavaScript Objects",permalink:"/intermediate-javascript/object-oriented-javascript/javascript-objects"},next:{title:"\ud83d\udcd3 Constructors and Prototypes",permalink:"/intermediate-javascript/object-oriented-javascript/constructors-and-prototypes"}},l={},c=[{value:"Literal Notation",id:"literal-notation",level:2},{value:"Constructors",id:"constructors",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous lesson we created objects using ",(0,o.kt)("strong",{parentName:"p"},"Literal Notation"),". Let's explore further examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors. We haven't learned about constructors yet, but we will in this lesson!"),(0,o.kt)("h2",{id:"literal-notation"},"Literal Notation"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's say a dog walker wants to keep track of all dogs they walk. We'll create a dog object using literal notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog1 = {\n  name: "Falcor",\n  colors: ["black"],\n  age: 4\n};\n')),(0,o.kt)("p",null,"Now we'll create another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog2 = {\n  name: "Nola",\n  colors: ["white", "black"],\n  age: 6\n};\n')),(0,o.kt)("p",null,"And another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog3 = {\n  name: "Patsy",\n  colors: ["brown"],\n  age: 2\n};\n')),(0,o.kt)("p",null,"You may notice that this is getting a little repetitive. All of these dogs have the same properties, which involves typing ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"colors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," over and over again, each time we want to create a new dog. Good news is, there is a much faster way to make dog objects! Instead of using literal notation to manually create each individual dog object, we can use a constructor as a blueprint."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We will write a ",(0,o.kt)("strong",{parentName:"p"},"constructor function")," to create dog objects momentarily, but first, what ",(0,o.kt)("em",{parentName:"p"},"is")," a constructor function? A constructor function (or just 'constructor') is a special type of function that is used to make an instance of a type of object, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dog")," object. The next lesson will introduce constructors and demonstrate how we can use constructors and prototypes to make our lives easier."),(0,o.kt)("p",null,"After we write a constructor we'll be able to create the same dogs we created in literal notation above, with these three simple lines of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let dog1 = new Dog("Falcor", ["black"], 4);\nlet dog2 = new Dog("Nola", ["white", "black"], 6);\nlet dog3 = new Dog("Patsy", ["brown"], 7);\n')),(0,o.kt)("p",null,"As you can see, this is ",(0,o.kt)("em",{parentName:"p"},"far")," less code, and it's much more scalable!"))}d.isMDXComponent=!0}}]);