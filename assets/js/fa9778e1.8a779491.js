"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[66649],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7896),r=(n(2784),n(30876));const a={title:"Event Handler Properties in a Project: Using window.onload",id:"event-handler-properties-in-a-project-using-windowonload",slug:"event-handler-properties-in-a-project-using-windowonload",hide_table_of_contents:!0,sidebar_position:9,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2l_window_onload_and_event_handler_properties_in_a_project.md"},i=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers-part-2/event-handler-properties-in-a-project-using-windowonload",id:"introduction-to-programming/javascript-and-web-browsers-part-2/event-handler-properties-in-a-project-using-windowonload",title:"Event Handler Properties in a Project: Using window.onload",description:"So far we've been practicing new code and concepts using the DevTools console. We've learned how to:",source:"@site/docs/introduction-to-programming/4_javascript-and-web-browsers-part-2/2l-window-onload-and-event-handler-properties-in-a-project.md",sourceDirName:"introduction-to-programming/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming/javascript-and-web-browsers-part-2/event-handler-properties-in-a-project-using-windowonload",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/event-handler-properties-in-a-project-using-windowonload",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Event Handler Properties in a Project: Using window.onload",id:"event-handler-properties-in-a-project-using-windowonload",slug:"event-handler-properties-in-a-project-using-windowonload",hide_table_of_contents:!0,sidebar_position:9,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2l_window_onload_and_event_handler_properties_in_a_project.md"},sidebar:"introduction-to-programming",previous:{title:"Event Handling with Event Handler Properties",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/event-handling-with-event-handler-properties"},next:{title:"Practice: Event Handling with Event Handler Properties",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-event-handling-with-event-handler-properties"}},l={},p=[{value:"Adding Event Handling to a Project&#39;s JS File",id:"adding-event-handling-to-a-projects-js-file",level:2},{value:"Waiting for the Webpage to Load",id:"waiting-for-the-webpage-to-load",level:2},{value:"Takeaways",id:"takeaways",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far we've been practicing new code and concepts using the DevTools console. We've learned how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access the DOM."),(0,r.kt)("li",{parentName:"ul"},"Manipulate DOM element attributes."),(0,r.kt)("li",{parentName:"ul"},"Handle events with event handler properties.")),(0,r.kt)("p",null,"It's important to feel comfortable with the DevTools console, because this is one of the quickest ways you can try out JavaScript and work with Web APIs! However, in this lesson we'll shift gears and learn how to incorporate the new code we've learned into our project's JS file. "),(0,r.kt)("p",null,"In the process, we'll learn about a new event handler property for the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object that makes our JS code wait to be run until our webpage and all of its resources have been loaded: ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload"),". Soon, we'll learn why this is important."),(0,r.kt)("h2",{id:"adding-event-handling-to-a-projects-js-file"},"Adding Event Handling to a Project's JS File"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"All of the code that we've written in the DevTools console can be added directly to our project's JS file. However, there are different ways to organize your code. Let's work through some examples. You are welcome to code along with this lesson, or just read through it. In the next lesson, we'll practice the concepts covered in this lesson."),(0,r.kt)("p",null,"If we want to put our event handlers for our Cookie Recipe project into a JS file, it's a matter of creating a file and doing just that. In the following example, I've created a ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file in a ",(0,r.kt)("inlineCode",{parentName:"p"},"js/")," directory in my Cookie Recipe project, and I've taken the 3 mouseover event handlers and placed them directly inside:"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// User Interface Logic\nlet h1 = document.querySelector("h1");\nh1.onmouseover = function() {\n  window.alert("I am a heading element.");\n};\n\nlet p = document.querySelector("p");\np.onmouseover = function() {\n  document.querySelector("p>em").innerText = "Don\'t be surprised";\n};\n\nlet img = document.querySelector("img");\nimg.onmouseover = function() {\n  img.style.height = "700px";\n};\n')),(0,r.kt)("p",null,"Notice that I've included a comment to denote the section of my scripts that includes user interface (UI) logic. Any code that you write that accesses the DOM or changes anything in the DOM is considered user interface logic. This is because it interacts with the part of our website that is visible to users: the DOM. If this distinction is still unclear, don't worry \u2014 we'll look at more examples of UI and business logic."),(0,r.kt)("h2",{id:"waiting-for-the-webpage-to-load"},"Waiting for the Webpage to Load"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's try this new code out in the browser! After creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," file, adding the above code, and reopening or refreshing the Cookie Recipe project in the browser, we're going to see if our ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseover")," event handlers are working."),(0,r.kt)("p",null,"Hmm... it turns out our mouseover events are NOT working. What's going on? When I check the DevTools console, I see an error:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/missing-window-onload-cookie-recipe.png",alt:"This image shows an error in the DevTools console related to our event handler properties."})),(0,r.kt)("p",null,"This error says:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught TypeError: Cannot set properties of null (setting 'onmouseover')\n    at scripts.js:3:16\n")),(0,r.kt)("p",null,"Something in my code is null, and it's related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseover")," event handler property. I can also see from reading the error message that this error is coming from line 3 of ",(0,r.kt)("inlineCode",{parentName:"p"},"js/scripts.js"),", which contains this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'h1.onmouseover = function() {  // line 3 starts here.\n  window.alert("I am a heading element.");\n};\n')),(0,r.kt)("p",null,"According to MDN, a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"},"TypeError")," represents an error that occurs when: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.")),(0,r.kt)("p",null,"Given this information, when I reread the error message, I can understand that if there's an issue with setting the property ",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseover")," on line 3, that must mean that my ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," variable is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". We're getting a ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeError")," because I can't access a property on a variable that is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u2014 there's an issue with the data type. Overall, this is surprising because this same exact code worked in the last lesson when we tried it out in the DevTools console!"),(0,r.kt)("p",null,"It turns out that this is a classic issue that happens when adding JS to a webpage. Because of how our HTML is set up, our JavaScript loads in the browser before our HTML is loaded. How? Check out the snippet of code below from the Cookie Recipe. Notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tag that loads our JavaScript in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," comes before the ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>")," with all of the HTML elements that we want to target in our scripts: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title> Best Chocolate Chip Cookies </title>\n    <link rel="stylesheet" href="css/styles.css" type="text/css">\n    <script src="js/scripts.js"><\/script>\n  </head>\n  <body>\n    <h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n    <img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg" alt="An image of a cookie"/>\n\n    ...\n\n</html>\n')),(0,r.kt)("p",null,"The browser reads our HTML document from top to bottom, which means that the browser loads and processes the JavaScript file first, actually running the contents of our JS file. This happens before the browser gets to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>")," of our HTML to create the DOM. This results in errors from our script file about undefined or null variables. Quite literally, when we're telling our JS to get the H1 element in this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let h1 = document.querySelector("h1");\n')),(0,r.kt)("p",null,"It doesn't exist yet! So, how do we fix this? One option is to put any ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tags at the end of the body like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title> Best Chocolate Chip Cookies </title>\n    <link rel="stylesheet" href="css/styles.css" type="text/css">\n  </head>\n  <body>\n    <h1 id="specialHeader">Best Chocolate Chip Cookies</h1>\n    <img src="https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-articleLarge.jpg" alt="An image of a cookie"/>\n\n    ...\n\n    <script src="js/scripts.js"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Some developers feel strongly about this practice. Others prefer that scripts should stay within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," tags, the HTML element that contains all metadata about our HTML document \u2014 data that is not displayed and that describes linked resources (files or libraries), the title of the document, the character set, styles, and more. This debate centers around webpage performance \u2014 how quickly our webpage can load. We won't get into the details of this now, but you can read more about it on ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/38407962/when-to-use-the-script-tag-in-the-head-and-body-section-of-a-html-page#:~:text=It%20is%20a%20good%20idea,can%20slow%20down%20the%20display."},"this Stack Overflow article"),". At Epicodus, we'll always write our JavaScript code in a separate file that we link to in our HTML, so we'll always include any ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tags within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," tags of our HTML documents. So, what's our solution then? "),(0,r.kt)("p",null,"Our web browsers have a ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," event handler that will allow us to wait until our entire webpage has loaded: ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload"),'. This event is called the "load" event, and it fires when all of a webpage\'s dependencies have been fully loaded: images, stylesheets, JavaScript, and the HTML. Just like all of our other event handler properties, we set the value of ',(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," to a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"window.onload = function() {\n  \n};\n")),(0,r.kt)("p",null,"In this case, we're using a function expression. "),(0,r.kt)("p",null,"And what should we put in the body of this function? All of the code that we want to wait to run until our webpage has fully loaded. Or in other words, all of the code that we want to run when our webpage is ready to go. This typically includes setting up event handlers. Let's see how we'll update ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," of our Cookie Recipe project to incorporate ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload"),":"),(0,r.kt)("div",{class:"filename"},"js/scripts.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// User Interface Logic\nwindow.onload = function() {\n  let h1 = document.querySelector("h1");\n  h1.onmouseover = function() {\n    window.alert("I am a heading element.");\n  };\n\n  let p = document.querySelector("p");\n  p.onmouseover = function() {\n    document.querySelector("p>em").innerText = "Don\'t be surprised";\n  };\n\n  let img = document.querySelector("img");\n  img.onmouseover = function() {\n    img.style.height = "700px";\n  };\n};\n')),(0,r.kt)("p",null,"Notice that we've placed all of our ",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseover")," event handlers directly into the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler. This will make it so that none of our ",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseover")," event handlers get created until after our webpage has been fully loaded. If we re-run our Cookie Recipe project, the error will be gone and we'll find that our mouseover events are working!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Going forward all event handlers that should be created when a webpage loads should be located inside of a ",(0,r.kt)("inlineCode",{parentName:"strong"},"window.onload")," event handler.")," Take note that you only need ONE ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler. In other words, multiple event handlers can go inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler."),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In this lesson, we've learned how to add event handlers to our project's JS file. In the process we learned about the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler property and the crucial role it plays in making our JS code wait to execute until our webpage and all of its resources have fully loaded. This resolves the common error of our JS not being able to find the DOM elements it is supposed to target with an event handler. What's actually causing this error is that our JS is being run before the DOM has been constructed, which means the DOM elements actually don't exist when our JS is being run."))}h.isMDXComponent=!0}}]);