"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23679],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={title:"Exception Handling for API Calls",id:"exception-handling-for-api-calls",slug:"exception-handling-for-api-calls",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0i_XHR_exception_handling.md"},s=void 0,i={unversionedId:"intermediate-javascript/asynchrony-and-apis/exception-handling-for-api-calls",id:"intermediate-javascript/asynchrony-and-apis/exception-handling-for-api-calls",title:"Exception Handling for API Calls",description:"In this lesson, we'll complete our OpenWeather API website by incorporating error handling into our API request. What this means is having our code do something when an API call is not 200 OK, but instead any of the other possible HTTP status codes, like:",source:"@site/docs/intermediate-javascript/7_asynchrony-and-apis/0i-XHR-exception-handling.md",sourceDirName:"intermediate-javascript/7_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/exception-handling-for-api-calls",permalink:"/intermediate-javascript/asynchrony-and-apis/exception-handling-for-api-calls",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Exception Handling for API Calls",id:"exception-handling-for-api-calls",slug:"exception-handling-for-api-calls",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0i_XHR_exception_handling.md"},sidebar:"intermediate-javascript",previous:{title:"Protecting API Keys",permalink:"/intermediate-javascript/asynchrony-and-apis/protecting-api-keys"},next:{title:"The DevTools Network Tab",permalink:"/intermediate-javascript/asynchrony-and-apis/the-devtools-network-tab"}},l={},p=[{value:"The Errors that We&#39;ll Encounter",id:"the-errors-that-well-encounter",level:2},{value:"Error Handling with <code>XMLHttpRequest.status</code> and <code>XMLHttpRequest.statusText</code>",id:"error-handling-with-xmlhttprequeststatus-and-xmlhttprequeststatustext",level:2},{value:"Using <code>XMLHttpRequest.status</code> and <code>XMLHttpRequest.statusText</code>",id:"using-xmlhttprequeststatus-and-xmlhttprequeststatustext",level:3},{value:"Testing the Error Handling",id:"testing-the-error-handling",level:3},{value:"Using an API&#39;s Error Messages",id:"using-an-apis-error-messages",level:2},{value:"Figuring Out How an API Reports Errors",id:"figuring-out-how-an-api-reports-errors",level:3},{value:"Introducing Errors in an API Call via Postman",id:"introducing-errors-in-an-api-call-via-postman",level:4},{value:"Reviewing the API Documentation on Errors",id:"reviewing-the-api-documentation-on-errors",level:4},{value:"Displaying Custom Error Messages from an API",id:"displaying-custom-error-messages-from-an-api",level:3},{value:"Summary",id:"summary",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll complete our OpenWeather API website by incorporating error handling into our API request. What this means is having our code do something when an API call is not 200 OK, but instead any of the other possible HTTP status codes, like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"400"),": Bad request. We'd better check the API request and make sure it's correct."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"401"),": Unauthorized. We aren't authorized to access the resource, which might mean we haven't logged in correctly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"403"),": Forbidden \u2014 we aren't allowed to access that content."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"404"),": Not found. The resource couldn't be found."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"500"),": Internal server error. Not our fault! Something is going on with the API. In general, if we get any ",(0,a.kt)("inlineCode",{parentName:"li"},"500")," errors, the server is having problems.")),(0,a.kt)("p",null,"The error handling that we'll incorporate into our application will be basic: if the API response is not 200 OK, we'll display an error message in the webpage letting the user know what happened, including a status code and short descriptive text. This won't fix all of the errors that could happen, but in some cases it will give the user just enough information to fix some errors they run into, like a typo in their input. "),(0,a.kt)("p",null,"That's why this solution is basic \u2014 we're making sure to communicate to the user what happened with the request. More advanced error handling might involve logging all errors that are generated by the API and using a notification system so that developers are notified of these errors and can address them. In fact, there are tech companies who sell products that do monitoring and error reporting, and most website hosting sites have such tools built-in. In this program, we'll stick to basic error handling since learning about software monitoring and reporting tools is out of the scope of this program. "),(0,a.kt)("p",null,"We'll learn two ways of delivering information about errors to the user: using ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object properties, and using the error messages that an API creates and sends independently. "),(0,a.kt)("p",null,"Let's get into it!"),(0,a.kt)("h2",{id:"the-errors-that-well-encounter"},"The Errors that We'll Encounter"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The errors that we'll deal with \u2014 and can test for in our apps \u2014 are ",(0,a.kt)("strong",{parentName:"p"},"client"),' errors, which are errors that come from the computer making the request to the API, also known as the "client". In this lesson, we\'ll cause a few errors and see how the OpenWeather API responds:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A bad input"),(0,a.kt)("li",{parentName:"ul"},"A bad API key"),(0,a.kt)("li",{parentName:"ul"},"A bad request URL (but a good API key)")),(0,a.kt)("p",null,"Other APIs may respond a bit differently to these errors, but using these test cases will be sufficient to ensure we have very solid, albeit basic, error handling in place. "),(0,a.kt)("p",null,"When you add error handling to your API projects in this course section, make sure that your code handles the above three situations."),(0,a.kt)("h2",{id:"error-handling-with-xmlhttprequeststatus-and-xmlhttprequeststatustext"},"Error Handling with ",(0,a.kt)("inlineCode",{parentName:"h2"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"XMLHttpRequest.statusText")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first method of error handling is one that will stay the same with every API that you work with, so long as you are using an ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object. That's because it involves using properties from the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object: ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.statusText"),". We briefly learned about these properties in a previous lesson, so let's do another review here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status"),": The status is the HTTP status code of the API response. A 200 means it was successful. As we just reviewed, there are many other codes such as 404 not found and so on. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"statusText"),": This is the short description or title that accompanies the ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," code. For a 200 status, the ",(0,a.kt)("inlineCode",{parentName:"li"},"statusText"),' will be "OK". For a 404 status, the ',(0,a.kt)("inlineCode",{parentName:"li"},"statusText"),' will be "Not Found".')),(0,a.kt)("p",null,"You should not bother to memorize all status codes, and instead get in the habit of looking them up anytime you run into a new one. You can find a complete list of status codes on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"Wikipedia")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"MDN"),". "),(0,a.kt)("p",null,"The great thing about these two properties is that they are automatically populated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object when we make an API call. That means we can always rely on them to contain relevant information to the API call we just made. Let's go ahead and use these two properties in our code. "),(0,a.kt)("h3",{id:"using-xmlhttprequeststatus-and-xmlhttprequeststatustext"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"XMLHttpRequest.statusText")),(0,a.kt)("p",null,"The first section of code that we'll want to update is our ",(0,a.kt)("inlineCode",{parentName:"p"},'"loadend"')," event listener. Currently our code looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather(city) {\n  ...\n\n  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    }\n  });\n\n  ...\n}\n')),(0,a.kt)("p",null,"We'll add an ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement to our branching to handle every other case \u2014 that is, when ",(0,a.kt)("inlineCode",{parentName:"p"},"this.status")," does NOT equal ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),". "),(0,a.kt)("p",null,"Here's our new code:"),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function getWeather(city) {\n  ...\n\n  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    } else {\n      printError(this, city);\n    }\n  });\n\n  ...\n}\n')),(0,a.kt)("p",null,"Take note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," function doesn't exist yet. However, we know what direction we're heading in, so we can already define the name of the function and what arguments should be passed into it. Let's break this down:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We call our function ",(0,a.kt)("inlineCode",{parentName:"li"},"printError"),", because it will handle printing error messages to the DOM."),(0,a.kt)("li",{parentName:"ul"},"We're passing in two arguments: ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"city"),". ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Why ",(0,a.kt)("inlineCode",{parentName:"li"},"this"),"? Remember that ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," represents the ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object and we need to access the ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"statusText")," properties inside of it. "),(0,a.kt)("li",{parentName:"ul"},"Why ",(0,a.kt)("inlineCode",{parentName:"li"},"city"),"? Remember that the ",(0,a.kt)("inlineCode",{parentName:"li"},"city")," variable represents the user's input. We don't actually have to include this information when we print an error message to the DOM, but it will make our error message more descriptive. ")))),(0,a.kt)("p",null,"With this new code, we're handling all other status codes at once, in one ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement. While we could target specific status codes, something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    if (this.status === 200) {\n      printElements(response, city);\n    } else if (this.status === 404) {\n      printError(this, city);\n    } else if (this.status === 401) {\n      printError(this, city);\n    }\n    ... \n    ...\n  });\n')),(0,a.kt)("p",null,"This is verbose and unnecessary. We can capture all non-200 status codes with just one ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement."),(0,a.kt)("p",null,"Alright, let's create our ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," function next. We can add this to our user interface logic, just above the ",(0,a.kt)("inlineCode",{parentName:"p"},"printElements")," function."),(0,a.kt)("div",{class:"filename"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// UI Logic\n\nfunction printError(request, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}:  ${request.status} ${request.statusText}`;\n}\n")),(0,a.kt)("p",null,"We start out by declaring two descriptive parameters that match the arguments we already passed in: ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"city"),". "),(0,a.kt)("p",null,"Next, we access the P tag with the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"showResponse")," and update its inner text with an error message. Here, too, we use template literals to add variables directly to our string."),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," parameter represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object, we can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"statusText")," properties with dot notation: ",(0,a.kt)("inlineCode",{parentName:"p"},"request.status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"request.statusText"),". "),(0,a.kt)("p",null,"The extra touch with this error message is including the city. You can come up with your own error message in your own projects, and include as much extra detail as you want. "),(0,a.kt)("h3",{id:"testing-the-error-handling"},"Testing the Error Handling"),(0,a.kt)("p",null,"Now that we have our code in place, let's test it out to make sure that it functions as expected. We have three test cases that we'll try out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A bad input"),(0,a.kt)("li",{parentName:"ul"},"A bad API key"),(0,a.kt)("li",{parentName:"ul"},"A bad request URL (but a good API key)")),(0,a.kt)("p",null,"Let's start with a bad user input. This is asking the question, what will the status code be if a resource cannot be found given the user's input?"),(0,a.kt)("p",null,'Start your application, and enter in a phony input like "wefsdvx". We should see our error message print on the page!'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"There was an error accessing the weather data for wefsdvx: 404 Not Found\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/404-error-message.png",alt:'The error message "There was an error accessing the weather data for wefsdvx: 404 Not Found" is successfully printed to the webpage.'})),(0,a.kt)("p",null,"Very cool! We can see our error handling working as expected."),(0,a.kt)("p",null,"Next, let's try a bad API key. With this test, we're asking the question, what will the status code be if we're not authorized to access a resource on an API?"),(0,a.kt)("p",null,"With this one, we'll need to close our server, change the API key in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),", and then restart the server. We can mess up our API key simply by removing the last character. Go ahead and do that now, and then restart the server. "),(0,a.kt)("p",null,"If we enter a location, even a bogus one, we should see a new status code printed to the webpage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"There was an error accessing the weather data for Portland, Oregon: 401 Unauthorized\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/401-unauthorized.png",alt:'The error message "There was an error accessing the weather data for Portland, Oregon: 401 Unauthorized" is successfully printed to the webpage.'})),(0,a.kt)("p",null,"Alright, let's move onto our last test. Before we do, be sure to close your server, fix your API key, and restart it. "),(0,a.kt)("p",null,"With this next test, we're asking the question, what will the status code be if our request is written incorrectly?"),(0,a.kt)("p",null,"To cause this error, let's change something about our request URL; we'll change the request parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"q=${city}")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"p=${city}"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getWeather() {\n  ...\n  const url = `http://api.openweathermap.org/data/2.5/weather?p=${city}&appid=${process.env.API_KEY}`;\n  ...\n}\n")),(0,a.kt)("p",null,"Enter in a location to see what sort of error message this typo in our parameter causes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"There was an error accessing the weather data for portland: 400 Bad Request\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/400-bad-request.png",alt:'The error message "There was an error accessing the weather data for portland: 400 Bad Request" is successfully printed to the webpage.'})),(0,a.kt)("p",null,"Sure enough, we'll get an error message about our request being incorrect in some way. "),(0,a.kt)("p",null,"Since we as developers are on the hook for ensuring that our request URLs work as expected, this last situation should only come up in development. However, trying out many different ways to break our code is always a good learning process, and it helps us ensure that our error handling works as expected."),(0,a.kt)("h2",{id:"using-an-apis-error-messages"},"Using an API's Error Messages"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, let's look at the other way we can handle errors when we make a request to an API: using the API's own error messages. The important gotcha about this method is that no two APIs are the same, which means how errors and relevant info is reported will always vary. Sometimes APIs have extensive internal error messages, and other APIs have none at all. We'll revisit this in just a moment."),(0,a.kt)("p",null,"One thing to note about API call errors is that the status code will never change for the type of error that's reported whether you are using the API's custom error messages or ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.statusText"),"."),(0,a.kt)("p",null,"So why bother using the API's custom error messages if we can essentially get the same information via the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object? Well, custom error messages that are crafted by an API are usually more descriptive, which means we can use them to provide a better user and developer experience. Let's look at the same 3 test cases that we just tried out and see what the API returns as far as an error message."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A bad input")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object returns 404 Not Found"),(0,a.kt)("li",{parentName:"ul"},'The API returns 404 "city not found"')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"A bad API key")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object returns 401 Unauthorized"),(0,a.kt)("li",{parentName:"ul"},'The API returns 401 "Invalid API key. Please see ',(0,a.kt)("a",{parentName:"li",href:"http://openweathermap.org/faq#error401"},"http://openweathermap.org/faq#error401"),' for more info."')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"A bad request URL (but a good API key)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest")," object returns 400 Bad Request"),(0,a.kt)("li",{parentName:"ul"},'The API returns 400 "Nothing to geocode"')),(0,a.kt)("p",null,"As we can see, the OpenWeather API returns error messages that are way more descriptive, which can be a big benefit to users and developers alike. "),(0,a.kt)("p",null,"So, let's learn how to access these errors."),(0,a.kt)("h3",{id:"figuring-out-how-an-api-reports-errors"},"Figuring Out How an API Reports Errors"),(0,a.kt)("p",null,"Keep in mind that every API will report errors differently. To find out how an API reports errors, we need to do two things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cause errors in our API calls and see what gets returned. "),(0,a.kt)("li",{parentName:"ul"},"Look for information in the documentation about how errors are structured.")),(0,a.kt)("p",null,"The order in which you do the two tasks above doesn't matter. What matters is that you do both. We'll start with the first one \u2014 introducing errors into our API calls and seeing what gets returned. We can easily do this with Postman!"),(0,a.kt)("h4",{id:"introducing-errors-in-an-api-call-via-postman"},"Introducing Errors in an API Call via Postman"),(0,a.kt)("p",null,"We'll look at one example to see how the OpenWeather API structures its errors. We'll look at a bad input (status code 404). To see what a bad input returns we can enter the following URL into Postman:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://api.openweathermap.org/data/2.5/weather?q=a3edf3&appid=[YOUR-API-KEY-HERE]\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"[YOUR-API-KEY-HERE]")," is replaced with your API key. "),(0,a.kt)("p",null,"After we send this request, we should get a response object from the API that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "cod": "404",\n    "message": "city not found"\n}\n')),(0,a.kt)("p",null,"What this tells us is that when there's an error, the OpenWeather API returns two keys: ",(0,a.kt)("inlineCode",{parentName:"p"},'"cod"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"message"'),". The ",(0,a.kt)("inlineCode",{parentName:"p"},'"cod"')," key contains the HTTP status code, and the ",(0,a.kt)("inlineCode",{parentName:"p"},'"message"')," key contains the description for what went wrong. "),(0,a.kt)("p",null,"If we then try out the two remaining errors, one for a bad API key and one for a bad request URL, we'll find that this same structure is returned to us, where ",(0,a.kt)("inlineCode",{parentName:"p"},'"cod"')," contains the HTTP status code and ",(0,a.kt)("inlineCode",{parentName:"p"},'"message"')," contains the description of the error. "),(0,a.kt)("p",null,"With this information already we can update our JS to access and print this information, but before we do that, we should always do a little research on the API documentation. Why? There just may be more information on how errors are reported. "),(0,a.kt)("h4",{id:"reviewing-the-api-documentation-on-errors"},"Reviewing the API Documentation on Errors"),(0,a.kt)("p",null,"When you are ready to look through the API's documentation to learn how it reports errors, there's a couple places you should look:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the API you are using has multiple APIs, start in the documentation for the specific API you are using. For the OpenWeather API, we're getting current weather data, so I would start by looking in ",(0,a.kt)("a",{parentName:"li",href:"https://openweathermap.org/current"},"the current weather documentation"),". Look at any table of contents, and try using ",(0,a.kt)("inlineCode",{parentName:"li"},"ctrl + f"),' to search for "error" to see if you can quickly locate the section that goes over error reporting. '),(0,a.kt)("li",{parentName:"ol"},"If you can't find any information about error reporting for a specific API, go one level up. For the OpenWeather API, this would be looking at ",(0,a.kt)("a",{parentName:"li",href:"https://openweathermap.org/api"},"their webpage that lists all APIs"),". "),(0,a.kt)("li",{parentName:"ol"},"If you still can't find any information about error reporting, I would look for a FAQ page, or something similar. Some APIs may include a search option to search their API documentation, which you could also try using."),(0,a.kt)("li",{parentName:"ol"},"If you still can't find any information about error reporting, you'll need to assume the API doesn't have custom error messages when a response is not 200 OK. ")),(0,a.kt)("p",null,"If you found in your testing in Postman that the API does in fact return custom error messages, you can choose to incorporate what you've learned from the testing the API or just stick with the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object's ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"statusText")," properties to handle reporting errors. "),(0,a.kt)("p",null,"As we noted earlier, each API is different, so the process of locating its documentation on error reporting (if any) and learning how to use it will vary. For the OpenWeather API, it turns out that it has ",(0,a.kt)("a",{parentName:"p",href:"https://openweathermap.org/faq"},"a section dedicated to API errors at the bottom of its FAQ page"),", which was hard for me to find. What's more, it doesn't actually show what the API response object for each error looks like.  "),(0,a.kt)("p",null,"So, do your best to research the API documentation to find helpful information on errors, and then always try introducing errors into your request via Postman to test how the API responds. When in doubt, stick to using ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest.statusText")," to deliver error messages to the user."),(0,a.kt)("h3",{id:"displaying-custom-error-messages-from-an-api"},"Displaying Custom Error Messages from an API"),(0,a.kt)("p",null,"Since the OpenWeather API does include custom error messages, let's briefly look at how we can access that information in our project. We'll update our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," function to also print the API's error data along with the information from the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object."),(0,a.kt)("p",null,"First, we'll need to update our ",(0,a.kt)("inlineCode",{parentName:"p"},'"loadend"')," event listener in the ",(0,a.kt)("inlineCode",{parentName:"p"},"getWeather")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  request.addEventListener("loadend", function() {\n    const response = JSON.parse(this.responseText);\n    console.log(response);\n    if (this.status === 200) {\n      printElements(response, city);\n    } else {\n      // there\'s a new argument\n      printError(this, response, city);\n    }\n  });\n')),(0,a.kt)("p",null,"Notice that we've added a new argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," function: ",(0,a.kt)("inlineCode",{parentName:"p"},"response"),". Now our ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," function will have access to the API's response (",(0,a.kt)("inlineCode",{parentName:"p"},"response"),"), as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object (represented by ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),") and the user input (",(0,a.kt)("inlineCode",{parentName:"p"},"city"),"). "),(0,a.kt)("p",null,"Keep in mind that the API will return different information based on whether the API call was successful or not. If we had an error free request with a status of 200 OK, the ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," variable will represent the weather data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "coord": {\n        "lon": -122.6762,\n        "lat": 45.5234\n    },\n    "weather": [\n        {\n            "id": 800,\n            "main": "Clear",\n            "description": "clear sky",\n            "icon": "01d"\n        }\n    ],\n    "base": "stations",\n    "main": {\n        "temp": 305.23,\n        "feels_like": 306.11,\n        "temp_min": 303.01,\n        "temp_max": 308.14,\n        "pressure": 1012,\n        "humidity": 43\n    },\n    "visibility": 10000,\n    "wind": {\n        "speed": 2.68,\n        "deg": 225,\n        "gust": 2.68\n    },\n    "clouds": {\n        "all": 6\n    },\n    "dt": 1658779129,\n    "sys": {\n        "type": 2,\n        "id": 2008548,\n        "country": "US",\n        "sunrise": 1658753199,\n        "sunset": 1658807250\n    },\n    "timezone": -25200,\n    "id": 5746545,\n    "name": "Portland",\n    "cod": 200\n}\n')),(0,a.kt)("p",null,"If there was an error and the status code is anything other than 200 OK, ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," will be set to an error object that looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "cod": "404",\n    "message": "city not found"\n}\n')),(0,a.kt)("p",null,"Now it's time to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"printError")," function to have a new parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"apiResponse"),", and to do something with it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function printError(request, apiResponse, city) {\n  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${city}: ${request.status} ${request.statusText}: ${apiResponse.message}`;\n}\n")),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiResponse")," parameter represents the response object from the API, we can access it with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"},"object property accessors"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"apiResponse.message"),". "),(0,a.kt)("p",null,"Now our error messages will print look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"There was an error accessing the weather data for fake city: 404 Not Found: city not found\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Async-and-APIs-2020/updated-404-with-detailed-message.png",alt:'The error message "There was an error accessing the weather data for fake city: 404 Not Found: city not found"" is successfully printed to the webpage.'})),(0,a.kt)("p",null,"Of course, you don't have to stick with this formatting for the error message \u2014 as long as you inform the user why there was an error, including the HTTP status code and description, that's sufficient for basic error handling."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson we learned how to add basic error handling to our API calls. The goal of basic error handling is to inform the user why an API call went wrong, which includes relaying two key pieces of information: the HTTP status code and the title/description of that status code. "),(0,a.kt)("p",null,"We learned two ways to communicate error messages to the user: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By printing the ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest.status")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequest.statusText")," to the webpage. "),(0,a.kt)("li",{parentName:"ol"},"By learning how the API structures custom error messages (if it has any) and printing those to the webpage. ")),(0,a.kt)("p",null,"Not all APIs have custom error messages, which is why it's important to test out error responses with your API and review its documentation. When APIs do include custom error messages, they are usually more descriptive than reporting the HTTP status code and title from the ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," object, which is why it's good to research and use in your code."),(0,a.kt)("p",null,"To test out your error handling, we recommend these three test cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Using a bad input, like a non-existent city, which causes a "404 Not Found" error.'),(0,a.kt)("li",{parentName:"ul"},'Using a bad API key, which causes a "401 Not Authorized" error.'),(0,a.kt)("li",{parentName:"ul"},'Using a bad request URL (but a good API key), like messing up the request parameters, which causes a "400 Bad Request" error.')),(0,a.kt)("p",null,"Including basic error handling for API calls is required on this section's independent project, so make sure to practice it during this course section."),(0,a.kt)("p",null,"Later on in this course section, we'll continue to learn how to handle errors with the new tools we learn to use to handle asynchrony and making API calls. Up next, we'll learn about the DevTools ",(0,a.kt)("em",{parentName:"p"},"Network")," tab, which we can use to inspect our API calls and test how our error handling deals with one more type of error: a network error."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-js-api-call-with-webpack"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for API Project"))),(0,a.kt)("p",null,"The above link takes you to a branch within a repo. Make sure that you are referencing the code from the branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"1_xhr_api_call"),". This is the default branch, so running ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone...")," with the URL of the repo home page will automatically clone down the branch called ",(0,a.kt)("inlineCode",{parentName:"p"},"1_xhr_api_call"),". As needed, review the lesson on ",(0,a.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/accessing-code-from-different-branches"},"accessing code from different branches"),"."))}d.isMDXComponent=!0}}]);