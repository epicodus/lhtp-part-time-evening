"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51171],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const o={title:"\ud83d\udcd3 Introduction to APIs",id:"introduction-to-apis",slug:"introduction-to-apis",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0c_introduction_to_apis.md"},i=void 0,s={unversionedId:"intermediate-javascript/asynchrony-and-apis/introduction-to-apis",id:"intermediate-javascript/asynchrony-and-apis/introduction-to-apis",title:"\ud83d\udcd3 Introduction to APIs",description:"In this lesson, we'll discuss the general concept of APIs, including what they are and how they work. This lesson is only meant to be a quick overview of APIs. We'll learn a lot more about how they work in future lessons.",source:"@site/docs/intermediate-javascript/7_asynchrony-and-apis/0c-introduction-to-apis.md",sourceDirName:"intermediate-javascript/7_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/introduction-to-apis",permalink:"/intermediate-javascript/asynchrony-and-apis/introduction-to-apis",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udcd3 Introduction to APIs",id:"introduction-to-apis",slug:"introduction-to-apis",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0c_introduction_to_apis.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 Asynchrony in JavaScript",permalink:"/intermediate-javascript/asynchrony-and-apis/asynchrony-in-javascript"},next:{title:"\ud83d\udcd3 API Documentation and Keys",permalink:"/intermediate-javascript/asynchrony-and-apis/api-documentation-and-keys"}},l={},p=[{value:"Application Programming Interfaces",id:"application-programming-interfaces",level:2},{value:"Requests and Responses",id:"requests-and-responses",level:3},{value:"Header and Body",id:"header-and-body",level:3},{value:"Status Codes",id:"status-codes",level:3},{value:"API Calls are Asynchronous",id:"api-calls-are-asynchronous",level:3},{value:"GET and POST requests",id:"get-and-post-requests",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll discuss the general concept of APIs, including what they are and how they work. This lesson is only meant to be a quick overview of APIs. We'll learn a lot more about how they work in future lessons."),(0,r.kt)("h2",{id:"application-programming-interfaces"},"Application Programming Interfaces"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The term ",(0,r.kt)("strong",{parentName:"p"},"API")," stands for ",(0,r.kt)("strong",{parentName:"p"},"Application Programming Interface"),". In simple terms, APIs are a set of requirements that determine how one application may communicate, or ",(0,r.kt)("strong",{parentName:"p"},"interface"),", with another. APIs can be used with any programming language and are not specific to JavaScript."),(0,r.kt)("p",null,"At this point, we're very familiar with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Web APIs"),", which are a collection of APIs, each with tools that developers can use in their applications to interact with the browser window, the DOM, events, and other browser structures. These tools are made up of object types, properties, and methods that are built-in to our browser."),(0,r.kt)("p",null,"Let's consider another example of an API. When you're reading an article online, you might click a ",(0,r.kt)("em",{parentName:"p"},"Share on Twitter")," button to publish the article to your Twitter feed. Following the requirements of the Twitter API, the news application communicates (or ",(0,r.kt)("em",{parentName:"p"},"interfaces"),") with Twitter, publishing the article to your feed. "),(0,r.kt)("p",null,"While we won't be using the Twitter API, we'll be working with similar ",(0,r.kt)("strong",{parentName:"p"},"third-party APIs"),". A ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs"},"third-party API")," is provided by a company to use their data or services. Think of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mapquest.com/"},"MapQuest"),", sites with free images like ",(0,r.kt)("a",{parentName:"p",href:"https://unsplash.com/developers"},"Unsplash"),", music sites like ",(0,r.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/web-api/"},"Spotify"),", or even ",(0,r.kt)("a",{parentName:"p",href:"https://data.gov/developers/apis/index.html"},"the US government")," and ",(0,r.kt)("a",{parentName:"p",href:"https://api.nasa.gov/"},"NASA"),". There's ",(0,r.kt)("em",{parentName:"p"},"a lot")," out there!  "),(0,r.kt)("h3",{id:"requests-and-responses"},"Requests and Responses"),(0,r.kt)("p",null,"API calls involve making a ",(0,r.kt)("strong",{parentName:"p"},"request")," to a server and then waiting for a ",(0,r.kt)("strong",{parentName:"p"},"response")," from that server. In the Twitter API example, the request-response process goes like this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A user clicks the ",(0,r.kt)("em",{parentName:"li"},"Share on Twitter")," button. "),(0,r.kt)("li",{parentName:"ol"},"Then the news application makes a request to Twitter's API with all the information needed to add a tweet of the article to the user's account. "),(0,r.kt)("li",{parentName:"ol"},"Finally, Twitter's API will respond with a message. In this kind of situation, the message usually just states whether the request was successful or not. If it is, the news application will inform the user. If not, the application will tell the user that there was an error and they should try again.")),(0,r.kt)("p",null,"This is unlike the process of using Web APIs, which are built into our browsers. With Web APIs, we simply need to know which object (or property) we're targeting, and make sure that we access it properly (like using the right syntax when we use it)."),(0,r.kt)("p",null,"On the other hand, with third-party APIs we always need to make a request to a server for information and wait for a response."),(0,r.kt)("h3",{id:"header-and-body"},"Header and Body"),(0,r.kt)("p",null,"An API response has several parts including the header and the body: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"header")," contains information such as the date, content type, any authorization information, and so on. "),(0,r.kt)("li",{parentName:"ul"},"Meanwhile, the ",(0,r.kt)("strong",{parentName:"li"},"body")," contains any messages from the API, a status code, plus data we've requested. ")),(0,r.kt)("p",null,"In this section, we will mostly focus on working with the body of an API response."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("p",null,"All API responses come with a status code that lets us know the status of the API call. These codes are used in the browser as well and some will be familiar to you already. There are a ",(0,r.kt)("em",{parentName:"p"},"lot")," of different status codes but there are only a few that we really need to be familiar with. Don't worry about trying to memorize these now. Just look them over so you have some general familiarity. You can always look up status codes as needed later."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"200"),": The API call was successful! This is also known as 200 OK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"400"),": Bad request. We'd better check the API request and make sure it's correct."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"401"),": Unauthorized. We aren't authorized to access the resource, which might mean we haven't logged in correctly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"403"),": Forbidden. We aren't allowed to access that content."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"404"),": Not found. The resource couldn't be found."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"500"),": Internal server error. Not our fault! Something is going on with the API. In general, if we get any ",(0,r.kt)("inlineCode",{parentName:"li"},"500")," errors, the server is having problems.")),(0,r.kt)("p",null,"For a full list of status codes, see ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"Wikipedia's List of HTTP status codes"),"."),(0,r.kt)("h3",{id:"api-calls-are-asynchronous"},"API Calls are Asynchronous"),(0,r.kt)("p",null,"The entire process of making an API call is asynchronous. Even though the user clicks a button ",(0,r.kt)("em",{parentName:"p"},"now"),", they won't get a result back until ",(0,r.kt)("em",{parentName:"p"},"later")," even if the call only takes a fraction of a second to process. "),(0,r.kt)("p",null,"It should be clear why API calls need to be asynchronous. It takes time to make a request and receive a response \u2014 and we don't want the user's browser to freeze up when that happens. That also means that the code itself is asynchronous as well so we need to handle it with special code to ensure that we don't handle API requests until ",(0,r.kt)("em",{parentName:"p"},"after")," they are complete."),(0,r.kt)("h3",{id:"get-and-post-requests"},"GET and POST requests"),(0,r.kt)("p",null,"There are several different kinds of API requests. The most common are ",(0,r.kt)("strong",{parentName:"p"},"GET")," and ",(0,r.kt)("strong",{parentName:"p"},"POST")," requests. A GET request gets information. For instance, if we wanted to display all tweets mentioning the ",(0,r.kt)("em",{parentName:"p"},"@Epicodus")," Twitter account, we could send the Twitter API a request asking for this information. The Twitter API will respond with a list of tweets mentioning ",(0,r.kt)("em",{parentName:"p"},"@Epicodus"),"."),(0,r.kt)("p",null,"In our earlier Twitter API example when we posted the news article to our Twitter feed, the news application makes a ",(0,r.kt)("strong",{parentName:"p"},"POST")," request because information needs to be ",(0,r.kt)("em",{parentName:"p"},"added")," to Twitter's server. The news application isn't asking to receive some information \u2014 it's asking for something to be changed."),(0,r.kt)("p",null,"We will be focused on making GET requests in this section. Only GET requests will be required for this section's independent project. When you study a backend language such as Ruby or C#, you will learn about making other kinds of requests, like POST requests."),(0,r.kt)("p",null,"Before we actually start writing JavaScript code to write API calls, we'll do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get an API key for the OpenWeather Map API and explore its API documentation"),(0,r.kt)("li",{parentName:"ul"},"Download Postman, a tool for making API calls, and learn the basics of making an API call"),(0,r.kt)("li",{parentName:"ul"},"Practice parsing the JSON body of an API call")),(0,r.kt)("p",null,"Only then will we be ready to start making API calls in our JavaScript code."))}h.isMDXComponent=!0}}]);