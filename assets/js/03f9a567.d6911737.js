"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80617],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(2784);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},73842:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(7896),a=(o(2784),o(30876));const i={title:"Accessing and Configuring the Browser DevTools Console",id:"accessing-and-configuring-the-browser-devtools-console",slug:"accessing-and-configuring-the-browser-devtools-console",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0d_devtools_access_and_configuration.md"},r=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/accessing-and-configuring-the-browser-devtools-console",id:"introduction-to-programming/javascript-and-web-browsers/accessing-and-configuring-the-browser-devtools-console",title:"Accessing and Configuring the Browser DevTools Console",description:"In this section we'll use our browser's DevTools (developer tools) to practice new JavaScript concepts and tools, and to debug our JavaScript code. In the last course section, we learned how to use the Elements tab to explore our HTML and CSS. In this section, we'll explore the Console and Sources tabs. Our goal is to become very comfortable with using browser DevTools so that we can improve our development and debugging processes.",source:"@site/docs/introduction-to-programming/3_javascript-and-web-browsers/0d-devtools-access-and-configuration.md",sourceDirName:"introduction-to-programming/3_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/accessing-and-configuring-the-browser-devtools-console",permalink:"/introduction-to-programming/javascript-and-web-browsers/accessing-and-configuring-the-browser-devtools-console",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Accessing and Configuring the Browser DevTools Console",id:"accessing-and-configuring-the-browser-devtools-console",slug:"accessing-and-configuring-the-browser-devtools-console",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0d_devtools_access_and_configuration.md"},sidebar:"introduction-to-programming",previous:{title:"Documentation and Resources",permalink:"/introduction-to-programming/javascript-and-web-browsers/documentation-and-resources"},next:{title:"Using the DevTools Console for Practice and Pair Programming",permalink:"/introduction-to-programming/javascript-and-web-browsers/using-the-devtools-console-for-practice-and-pair-programming"}},s={},c=[{value:"Accessing DevTools",id:"accessing-devtools",level:2},{value:"DevTools Inspector Versus Console",id:"devtools-inspector-versus-console",level:3},{value:"Tips for Using the Console",id:"tips-for-using-the-console",level:2},{value:"Configuration",id:"configuration",level:3},{value:"To set a dark or light theme:",id:"to-set-a-dark-or-light-theme",level:4},{value:"To increase/decrease the size of the text:",id:"to-increasedecrease-the-size-of-the-text",level:4},{value:"To increase/decrease the size of the DevTools window:",id:"to-increasedecrease-the-size-of-the-devtools-window",level:4},{value:"To move the location of the DevTools window:",id:"to-move-the-location-of-the-devtools-window",level:4},{value:"Formatting Code",id:"formatting-code",level:3},{value:"Autocompletion",id:"autocompletion",level:3},{value:"Clearing the Console",id:"clearing-the-console",level:3},{value:"DevTools Documentation",id:"devtools-documentation",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we'll use our browser's DevTools (developer tools) to practice new JavaScript concepts and tools, and to debug our JavaScript code. In the last course section, we learned how to use the ",(0,a.kt)("em",{parentName:"p"},"Elements")," tab to explore our HTML and CSS. In this section, we'll explore the ",(0,a.kt)("em",{parentName:"p"},"Console")," and ",(0,a.kt)("em",{parentName:"p"},"Sources")," tabs. Our goal is to become very comfortable with using browser DevTools so that we can improve our development and debugging processes."),(0,a.kt)("p",null,"In this lesson, we'll cover how to access and configure the DevTools console. In the next lesson, we'll cover how to use the DevTools console in personal practice and in pair programming. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Take note that all of our instructions are for the Google Chrome browser DevTools"),". While major web browsers offer very similar options and configurations for their developer tools, there may be slight differences that could be confusing. If you are not using ",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"the Google Chrome browser")," yet, we recommend downloading and installing it now."),(0,a.kt)("h2",{id:"accessing-devtools"},"Accessing DevTools"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'To access your browser\'s DevTools, start by finding the browser menu, an icon with 3 dots or lines in the top right-hand corner of your browser. If you are anything like me, it could say "update" next to the three dots/slashes, indicating that you have an update to install for your browser. '),(0,a.kt)("p",null,"Once the menu is open:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("em",{parentName:"li"},"More Tools")," menu."),(0,a.kt)("li",{parentName:"ul"},"Then, select ",(0,a.kt)("em",{parentName:"li"},"Developer Tools"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/dev-tool-open.gif",alt:"A gif that shows how to open the Developer Console"})),(0,a.kt)("p",null,"Shortcuts for accessing the DevTools console are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"j")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," "))),(0,a.kt)("li",{parentName:"ul"},"Mac: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Option")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"i")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"F12"))))),(0,a.kt)("p",null,"Shortcuts for accessing the DevTools ",(0,a.kt)("em",{parentName:"p"},"Elements")," inspector are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"c")),(0,a.kt)("li",{parentName:"ul"},"Mac: ",(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"c"))),(0,a.kt)("h3",{id:"devtools-inspector-versus-console"},"DevTools Inspector Versus Console"),(0,a.kt)("p",null,"The DevTools inspector and console are different. Each lives on a separate tab in the DevTools window. The DevTools inspector is found in the ",(0,a.kt)("em",{parentName:"p"},"Elements")," tab and helps us inspect HTML elements. This includes being able to look at an element's CSS rules and adjust them. You can optionally review ",(0,a.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/debugging-html-and-css"},"the features of the elements tab in this lesson")," from the previous section. "),(0,a.kt)("p",null,"The DevTools console is a JavaScript console that lets us write and execute JavaScript code. It is found in the ",(0,a.kt)("em",{parentName:"p"},"Console")," tab of the DevTools window. This console is also used for logging errors and warning messages. We'll learn how to use the console in this section. As a preview, see the image below with the DevTools console open and a line of JavaScript (",(0,a.kt)("inlineCode",{parentName:"p"},"3 + 4;"),") written."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/devtools-console.png",alt:"This image shows the DevTools console open with a line of JavaScript written (`3 + 4;`)"})),(0,a.kt)("h2",{id:"tips-for-using-the-console"},"Tips for Using the Console"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can configure the console's location, size, and colors! Review the instructions below, and optionally check out the Gif that summarizes these configuration options."),(0,a.kt)("h4",{id:"to-set-a-dark-or-light-theme"},"To set a dark or light theme:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("em",{parentName:"li"},"Settings")," cog at the top right corner of the DevTools window."),(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("em",{parentName:"li"},"Preferences")," tab (this is usually the default location that settings opens to)."),(0,a.kt)("li",{parentName:"ul"},"Under the ",(0,a.kt)("em",{parentName:"li"},"Appearance")," section, look for ",(0,a.kt)("em",{parentName:"li"},"Theme")," and set it to your preference. When you change a setting, the DevTools window will prompt you to reload.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/dev-tool-theme-change.gif",alt:"A gif that shows how to change the  Developer Console's theme"})),(0,a.kt)("h4",{id:"to-increasedecrease-the-size-of-the-text"},"To increase/decrease the size of the text:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Windows: use ",(0,a.kt)("inlineCode",{parentName:"li"},"ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," to increase and ",(0,a.kt)("inlineCode",{parentName:"li"},"ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," to decrease text size."),(0,a.kt)("li",{parentName:"ul"},"For Mac: use ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," to increase and ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," to decrease text size.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/dev-tool-increase-decrease-size.gif",alt:"A gif that shows how to change the text size of the Developer Console"})),(0,a.kt)("h4",{id:"to-increasedecrease-the-size-of-the-devtools-window"},"To increase/decrease the size of the DevTools window:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simply drag the side of the window in/out or up/down. The DevTools window acts the same as a browser window.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/dev-tool-increase-size.gif",alt:"A gif that shows how to change the size of the Developer Console window"})),(0,a.kt)("h4",{id:"to-move-the-location-of-the-devtools-window"},"To move the location of the DevTools window:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the menu represented by three vertical dots in the top right corner of the window. This will be next to the settings cog. Once open, find the option for ",(0,a.kt)("em",{parentName:"li"},"dock side")," and select the option that works best for you.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/dev-tool-change-position.gif",alt:"A gif that shows how to change the dock position of the Developer Console window"})),(0,a.kt)("h3",{id:"formatting-code"},"Formatting Code"),(0,a.kt)("p",null,"When typing code into the console, we have some options to format what we write:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To create a new line, use ",(0,a.kt)("inlineCode",{parentName:"li"},"shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"enter"),"."),(0,a.kt)("li",{parentName:"ul"},"To tab over multiple spaces for indentation, use ",(0,a.kt)("inlineCode",{parentName:"li"},"tab"),". To configure the console to use 2 spaces for indentation with ",(0,a.kt)("inlineCode",{parentName:"li"},"tab"),", in the DevTools window, go to ",(0,a.kt)("em",{parentName:"li"},"Settings")," > ",(0,a.kt)("em",{parentName:"li"},"Preferences")," > scroll to the ",(0,a.kt)("em",{parentName:"li"},"Sources"),' section > set "Default indentation" to 2 spaces.')),(0,a.kt)("h3",{id:"autocompletion"},"Autocompletion"),(0,a.kt)("p",null,"This can be very helpful, but when you are just starting out with the DevTools console, it can be more confusing than helpful. Check out the following image. In the image, I've only typed out ",(0,a.kt)("inlineCode",{parentName:"p"},"thi")," in the console. I haven't even completed what I've wanted to type, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),", a JavaScript concept we'll learn about later in the course. However, autocomplete has already suggested an ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," to complete the word ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," and a host of other suggestions, as well as a possible answer (",(0,a.kt)("inlineCode",{parentName:"p"},"Window {0: ...}"),"). Like I said earlier, this can be confusing when you are just starting out."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/devtools-auto-complete2.png",alt:'An image that shows the autocomplete suggestions after typing in "thi" into the console.'})),(0,a.kt)("p",null,"We'll be working with the autocomplete feature later in this section. If autocomplete is bugging you as you work through the upcoming lessons, you can turn autocomplete off by going to ",(0,a.kt)("em",{parentName:"p"},"Settings")," > ",(0,a.kt)("em",{parentName:"p"},"Preferences")," > ",(0,a.kt)("em",{parentName:"p"},"Sources"),' and unchecking the box for "Autocompletion". '),(0,a.kt)("p",null,"Or, you can work with autocompletion turned on. Here's how to do that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To accept an autocomplete suggestion, hit ",(0,a.kt)("inlineCode",{parentName:"li"},"enter")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"tab")),(0,a.kt)("li",{parentName:"ul"},"To navigate through the list of autocomplete suggestions, use your arrow keys or scroll with your mouse or trackpad."),(0,a.kt)("li",{parentName:"ul"},"To ignore or deny an autocomplete suggestion, complete what you are typing and use a ",(0,a.kt)("inlineCode",{parentName:"li"},"space")," or punctuation, like ",(0,a.kt)("inlineCode",{parentName:"li"},";"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"{ }")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"( )"),". We'll learn more about punctuation in JavaScript soon. ")),(0,a.kt)("h3",{id:"clearing-the-console"},"Clearing the Console"),(0,a.kt)("p",null,"You can clear the contents of the DevTools console by clicking the icon of a circle with a slash at the top toolbar of the console. See the following image, where the icon is circled in red:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/dev-tools/devtools-console-clear.png",alt:"This image shows the button to clear the console circled in red. This clear-console button is an icon of a circle with a slash."})),(0,a.kt)("h3",{id:"devtools-documentation"},"DevTools Documentation"),(0,a.kt)("p",null,"Optionally, you can review documentation on browser DevTools, but generally everything you'll need will be covered in the lessons. To see the Chrome DevTools documentation, ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"go to this link"),"."))}d.isMDXComponent=!0}}]);