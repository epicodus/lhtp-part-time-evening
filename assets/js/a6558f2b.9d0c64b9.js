"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12070],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(o),d=n,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return o?a.createElement(m,i(i({ref:t},p),{},{components:o})):a.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},99653:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=o(7896),n=(o(2784),o(30876));const r={title:"\ud83d\udcd3 The DevTools Network Tab",id:"the-devtools-network-tab",slug:"the-devtools-network-tab",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0j_devtools_network_tab.md"},i=void 0,s={unversionedId:"intermediate-javascript/asynchrony-and-apis/the-devtools-network-tab",id:"intermediate-javascript/asynchrony-and-apis/the-devtools-network-tab",title:"\ud83d\udcd3 The DevTools Network Tab",description:"In this lesson, we'll take a look at the Network tab and how we can use it to debug API calls. As it usually goes for each tab in our browser DevTools, there's a lot of available tools, so we'll just stick to the basics.",source:"@site/docs/intermediate-javascript/7_asynchrony-and-apis/0j-devtools-network-tab.md",sourceDirName:"intermediate-javascript/7_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/the-devtools-network-tab",permalink:"/intermediate-javascript/asynchrony-and-apis/the-devtools-network-tab",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\ud83d\udcd3 The DevTools Network Tab",id:"the-devtools-network-tab",slug:"the-devtools-network-tab",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0j_devtools_network_tab.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 Exception Handling for API Calls",permalink:"/intermediate-javascript/asynchrony-and-apis/exception-handling-for-api-calls"},next:{title:"\ud83d\udcd3 Homework: JavaScript Exception Handling with try...catch",permalink:"/intermediate-javascript/asynchrony-and-apis/homework-javascript-exception-handling-with-trycatch"}},l={},h=[{value:"DevTools Network Tab",id:"devtools-network-tab",level:2},{value:"Throttling",id:"throttling",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}],p={toc:h},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this lesson, we'll take a look at the ",(0,n.kt)("em",{parentName:"p"},"Network")," tab and how we can use it to debug API calls. As it usually goes for each tab in our browser DevTools, there's ",(0,n.kt)("em",{parentName:"p"},"a lot")," of available tools, so we'll just stick to the basics."),(0,n.kt)("p",null,"Postman and the DevTools ",(0,n.kt)("em",{parentName:"p"},"Network")," tab can offer similar information, and it's likely that Postman will meet most of your needs. We recommend that you use Postman before you start coding to test out your API and get to know how its response is structured. You should also use Postman to try out different parameters while you are coding or expanding your code's functionality. "),(0,n.kt)("p",null,"On the other hand the ",(0,n.kt)("em",{parentName:"p"},"Network")," tab can be helpful when your API call is failing in the browser, but not in Postman. This happens on occasion. What's notable here is that the ",(0,n.kt)("em",{parentName:"p"},"Network")," tab offers debugging tools for API calls in the context of making them from the browser, which Postman cannot offer. So, let's get familiar with this new tool by learning the very basics."),(0,n.kt)("h2",{id:"devtools-network-tab"},"DevTools Network Tab"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Network")," tab in our browser's DevTools logs all requests made on the network. This includes requests to our localhost and to outside resources, like third-party APIs. For demonstration, we'll continue to use our OpenWeather API project."),(0,n.kt)("p",null,"With our project opened in our browser, when we first open the DevTools to the ",(0,n.kt)("em",{parentName:"p"},"Network")," tab, we probably won't see anything in it. However, if you refresh the page, we'll see all of the requests made to localhost to populate the webpage. The requests made when we first load our webpage are highlighted by the red rectangle below. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/network-tab-requests.png",alt:"This image highlights all of the requests made to populate our webpage in the DevTools _Network_ tab."})),(0,n.kt)("p",null,"Generally, we won't need any of the data from those requests. Though if we were working on performance optimization, we'd use that data. What we're interested in is any information about our API call to the OpenWeather API. Let's see what happens when we submit the form to get weather data for Portland. "),(0,n.kt)("p",null,"As highlighted in red in the image below, we'll see a new request listed. We can hover over the data in each row to get the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The full URL of the request."),(0,n.kt)("li",{parentName:"ul"},"The status code of the request, which is 200."),(0,n.kt)("li",{parentName:"ul"},'The type of request, which is listed at "xhr", which is short for ',(0,n.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest"),"."),(0,n.kt)("li",{parentName:"ul"},'The "initiator", or where the request originated from in our code.'),(0,n.kt)("li",{parentName:"ul"},"The size of the transferred data and how long the request took to complete."),(0,n.kt)("li",{parentName:"ul"},'Where the request is located within the "waterfall" of all requests. In otherwise, the "waterfall" is a visualization of which requests occurred when and for how long.')),(0,n.kt)("p",null,"Also, the API response object is conveniently added to the small console at the bottom of the DevTools, which we can expand and explore. This is highlighted in green in the following image."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/our-api-call-in-networks-tab.png",alt:"This image highlights our OpenWeather API call in the DevTools _Network_ tab, as well as the response object that's automatically added to the console."})),(0,n.kt)("p",null,"When we click on the name of a request, a new window will open to the right of it with even more data about this request. There's many tabs in this new window, and we're opened directly to the ",(0,n.kt)("em",{parentName:"p"},"Headers")," tab. The headers of an API call include additional information about the request or response, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What type of request is it? We'll be performing GET requests to get information, and later in the program we'll learn how to make POST requests to add new information to an API."),(0,n.kt)("li",{parentName:"ul"},"What is the origin of the request? This means, where did it come from, which in our case is localhost. "),(0,n.kt)("li",{parentName:"ul"},"What is the language and what is the encoding? We won't need to configure this information in the program.")),(0,n.kt)("p",null,"We won't spend a lot of time changing our headers, since we'll stick to basic configurations. To optionally explore more about headers, ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"},"visit the MDN documentation on HTTP headers"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/request-headers-devtools-network-tab.png",alt:"This shows the _Headers_ tab opened in the _Network_ tab for our OpenWeather API call."})),(0,n.kt)("p",null,"The next tab over is called ",(0,n.kt)("em",{parentName:"p"},"Payload")," and this lists the parameters that are included in the request URL, as well as any data that we're sending along with the request. Not data about the request, but data like user input that we need to add to an API call to get the right data we're looking for. "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/request-payload-devtools-network-tab.png",alt:"This shows the _Payload__ tab opened in the _Network_ tab for our OpenWeather API call."})),(0,n.kt)("p",null,"The next two tabs, ",(0,n.kt)("em",{parentName:"p"},"Preview")," and ",(0,n.kt)("em",{parentName:"p"},"Response"),", both show the API's response in different formats. The ",(0,n.kt)("em",{parentName:"p"},"Preview")," tab nicely formats the response in a way that makes the object easy to explore."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/request-preview-devtools-network-tab.png",alt:"This shows the _Preview_ tab opened in the _Network_ tab for our OpenWeather API call."})),(0,n.kt)("p",null,"The last two tabs, ",(0,n.kt)("em",{parentName:"p"},"Initiator")," and ",(0,n.kt)("em",{parentName:"p"},"Timing"),", include information about where in our code the request came from (the ",(0,n.kt)("inlineCode",{parentName:"p"},"getWeather")," function in ",(0,n.kt)("inlineCode",{parentName:"p"},"index.js"),"), and how long it took for our request to complete. We won't use these last two tabs much. "),(0,n.kt)("h3",{id:"throttling"},"Throttling"),(0,n.kt)("p",null,"The DevTools ",(0,n.kt)("em",{parentName:"p"},"Network")," tab includes an option for throttling. When we ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Network_throttling"},(0,n.kt)("strong",{parentName:"a"},"throttle")," the network connection"),", we're telling it how fast or slow our internet connection should be. This tool helps developers test their applications under a variety of internet connections that their users might experience."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/devtools-network-tab-throttling.png",alt:"This image shows the throttling option in the DevTools _Network_ tab."})),(0,n.kt)("p",null,'The default option is "no throttling", and at its most extreme we can tell our DevTools to make our webpage think it is offline. If we select offline and then submit our form to make an API call to the OpenWeather API, this simulates another type of error called a "network error". '),(0,n.kt)("p",null,"With our ",(0,n.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," objects, our webpage will silently fail if we're offline. However, later on we'll learn how to use a tool called the Fetch API, which will return an error when there's a network error. But that's for another lesson!"),(0,n.kt)("p",null,"For now, try throttling your network connection and refreshing the page \u2014 you'll see it takes much longer the more you throttle the connection."),(0,n.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"And with that, we've covered the very basics of the DevTools ",(0,n.kt)("em",{parentName:"p"},"Network")," tab. As mentioned previously, a lot of this information is similar to what you would find in Postman. While it's okay to favor one tool over the other, you should use and explore both tools to become familiar with each during this course section. "),(0,n.kt)("p",null,"If you do ever find yourself adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"console.log()")," in your code to check out an API response object in the DevTools console, you should instead be using the DevTools ",(0,n.kt)("em",{parentName:"p"},"Network")," tab."))}c.isMDXComponent=!0}}]);