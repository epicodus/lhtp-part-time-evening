"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[46389],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={title:"Future Project Structure",id:"future-project-structure",slug:"future-project-structure",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0d_future_project_structure.md"},o=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript/future-project-structure",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript/future-project-structure",title:"Future Project Structure",description:"In this lesson, we'll provide an overview of what our file's project structure will look like by the end of this course section. We'll also briefly describe the purpose of each file. Do not add any files to your project just yet. We will add them as they are needed. This lesson just provides an introduction to how our file structure will change, including contrasting it with our project's current file structure.",source:"@site/docs/intermediate-javascript/5_test-driven-development-and-environments-with-javascript/0d-future-project-structure.md",sourceDirName:"intermediate-javascript/5_test-driven-development-and-environments-with-javascript",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/future-project-structure",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/future-project-structure",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Future Project Structure",id:"future-project-structure",slug:"future-project-structure",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0d_future_project_structure.md"},sidebar:"intermediate-javascript",previous:{title:"Basic Project Structure",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/basic-project-structure"},next:{title:"Git Best Practices and Adding a .gitignore File",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/git-best-practices-and-adding-a-gitignore-file"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll provide an overview of what our file's project structure will look like by the end of this course section. We'll also briefly describe the purpose of each file. ",(0,a.kt)("strong",{parentName:"p"},"Do not add any files to your project just yet.")," We will add them as they are needed. This lesson just provides an introduction to how our file structure will change, including contrasting it with our project's current file structure."),(0,a.kt)("p",null,"Here's the structure of our project so far:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 triangle.js\n\u2514\u2500\u2500 css\n    \u2514\u2500\u2500 styles.css\n")),(0,a.kt)("p",null,'Here is what a "built" project will look like by the ',(0,a.kt)("strong",{parentName:"p"},"end of this section"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shape-tracker/\n\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2514\u2500\u2500 bundle.js\n\u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u251c\u2500\u2500 circle.test.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 triangle.test.js\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u2514\u2500\u2500 images  \n\u2502   \u2502       \u2514\u2500\u2500 image.jpg   \n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 styles.css    \n\u2502   \u251c\u2500\u2500 circle.js\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 index.js\n\u2502   \u2514\u2500\u2500 triangle.js  \n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 webpack.config.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .babelrc\n\u251c\u2500\u2500 .eslintrc\n\u2514\u2500\u2500 README.md\n")),(0,a.kt)("p",null,"That is a lot more files! We will be creating some of these files manually and some will automatically be generated for us. ",(0,a.kt)("strong",{parentName:"p"},"Once again, do not add any of these files now.")," This lesson is just an overview of what our completed environment will look like at the end of this section."),(0,a.kt)("p",null,"Let's briefly summarize the purpose of each file. Remember, we will be exploring all these files in more depth soon \u2014 so these summaries aren't meant to be comprehensive."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"dist"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"bundle.js")),": webpack will automatically bundle all of the separate files (our JS, HTML, CSS, images, and other files) into one single file called ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle.js"),". Then, this file will be added to a directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"dist"),", which is short for distribution. This is where our finished code goes! We will never create this folder or file manually \u2014 webpack will do it for us. If we want to open our project in the browser, this is the file we'll open.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"__tests__"),":")," All of the tests we write will go in this directory. And yep, two underscores before and after is the naming convention! Each JavaScript file that contains business logic will have its own corresponding test file. Our finished project will have logic files for two shapes, meaning we will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"circle.test.js")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"triangle.test.js"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"src")),": Our ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory will contain ",(0,a.kt)("em",{parentName:"p"},"all")," of our source code, and not just our JavaScript files. We'll put our HTML and CSS files in here, too. webpack will look in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory and bundle everything together for us, turning it into ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/bundle.js"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"package.json"),":")," This file has a list of all of our project's dependencies (external JavaScript libraries that we call 'packages' that our project needs to function) so we can easily and automatically install them. It also contains other important information about our project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"package-lock.json"),":")," This file will automatically be generated for us when we install our dependencies. It includes an exact list of all the packages that are currently installed. This list will differ from the more general list in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", as many of the dependencies we'll use rely on yet other dependencies which will automatically be installed for us.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"webpack.config.js"),":")," This will hold our webpack configuration, providing specific instructions on how webpack should process and bundle our source code. This includes processes like minifying code to make it smaller and concatenating files together into one single file. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"node_modules"),":")," This directory contains all the dependencies our project needs. It is automatically generated for us and we should never edit anything in it, though sometimes we may need to delete this directory and rebuild it if we are having issues with our environment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".gitignore"),":")," This will include all the files that we don't ever want to push to GitHub, which include automatically generated files and files with sensitive information (like passwords). Since we'll automatically generate some of our files, there's no reason for those generated files to be in GitHub. Other developers can clone our project and automatically generate those files, too.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".babelrc"),":")," This file holds our Babel configuration. Babel is a transpiler. A ",(0,a.kt)("strong",{parentName:"p"},"transpiler")," is a tool that translates more advanced versions of a language into another version of the same language. Babel handles translating more recent versions of JavaScript (like ES6 and ES versions 2016 \u2014 2018) into an earlier version of JavaScript that all browsers implement. We'll only be using Babel to make sure Jest (our testing framework) can run properly, but Babel can also allow us to use cutting-edge JavaScript tools in browsers that don't have support for those tools yet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".eslintrc"),":")," This file holds our ESLint configuration. ESLint is a linter for JavaScript. A ",(0,a.kt)("strong",{parentName:"p"},"linter")," is a tool that analyzes code to alert developers about bugs and badly-written code.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"README.md"),":")," Our projects should always include a README. It becomes even more important once we start using an environment because we need to provide exact instructions for other developers about how to set up the same environment when they clone our projects."))),(0,a.kt)("p",null,"That's a lot of files. "),(0,a.kt)("p",null,"It may seem over the top for smaller projects. Chances are, though, that down the road you won't just be building little projects. Enterprise applications are a lot bigger and more involved than this. Also, in the real world, it's very rare that you'll be building a project from scratch \u2014 you'll be jumping right into a much larger codebase."),(0,a.kt)("p",null,"In the next lesson, we'll actually start building out our environment further \u2014 starting with creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file."))}d.isMDXComponent=!0}}]);