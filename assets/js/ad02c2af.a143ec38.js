"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[55168],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),m=o,p=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7896),o=(n(2784),n(30876));const r={title:"\ud83d\udcd3 More Branching and Error Handling",id:"more-branching-and-error-handling",slug:"more-branching-and-error-handling",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3g_more_branching.md"},i=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers-part-2/more-branching-and-error-handling",id:"introduction-to-programming/javascript-and-web-browsers-part-2/more-branching-and-error-handling",title:"\ud83d\udcd3 More Branching and Error Handling",description:'Sometimes, our branching logic can get more complicated. Let\'s build a website to determine which amusement park ride someone can go on based on their age and height. In the process, we\'ll learn about using the logical "and" && and "or" || operators, nesting if statements, and the concepts of "truthy" and "falsy". We\'ll also include polish our website by adding error handling and a button to clear the form and results.',source:"@site/docs/introduction-to-programming/4_javascript-and-web-browsers-part-2/3g-more-branching.md",sourceDirName:"introduction-to-programming/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming/javascript-and-web-browsers-part-2/more-branching-and-error-handling",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/more-branching-and-error-handling",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"\ud83d\udcd3 More Branching and Error Handling",id:"more-branching-and-error-handling",slug:"more-branching-and-error-handling",hide_table_of_contents:!0,sidebar_position:18,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3g_more_branching.md"},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f Practice: Branching",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-branching"},next:{title:"\u270f\ufe0f Practice: More Branching",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-more-branching"}},l={},d=[{value:"Amusement Park",id:"amusement-park",level:2},{value:"Project Setup",id:"project-setup",level:3},{value:"Adding the First Condition \u2014 Tower of Doom",id:"adding-the-first-condition--tower-of-doom",level:3},{value:"Adding the Second Condition \u2014 Roller Coaster",id:"adding-the-second-condition--roller-coaster",level:3},{value:"Adding the Last Two Conditions",id:"adding-the-last-two-conditions",level:3},{value:"Adding Error Handling and Exploring Truthy and Falsy",id:"adding-error-handling-and-exploring-truthy-and-falsy",level:3},{value:"Truthy and Falsy Are Caused By Data Type Coercion",id:"truthy-and-falsy-are-caused-by-data-type-coercion",level:3},{value:"An Alternative: Using the Logical Not <code>!</code> Operator",id:"an-alternative-using-the-logical-not--operator",level:3},{value:"Next Steps and Completed Code",id:"next-steps-and-completed-code",level:3}],u={toc:d},h="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes, our branching logic can get more complicated. Let's build a website to determine which amusement park ride someone can go on based on their age and height. In the process, we'll learn about using the logical \"and\" ",(0,o.kt)("inlineCode",{parentName:"p"},"&&"),' and "or" ',(0,o.kt)("inlineCode",{parentName:"p"},"||"),' operators, nesting if statements, and the concepts of "truthy" and "falsy". We\'ll also include polish our website by adding error handling and a button to clear the form and results.'),(0,o.kt)("h2",{id:"amusement-park"},"Amusement Park"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At the Fun 4 All Amusement Park, we'll have 3 rides, each with a condition that we need to check for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'You need to be at least 6 years old to ride the "Swings" swinging chair ride.'),(0,o.kt)("li",{parentName:"ul"},"You need to be either 12 years old or 48 or more inches tall to ride the Roller Coaster."),(0,o.kt)("li",{parentName:"ul"},'You need to be 12 years old and 60 or more inches tall to ride the "Tower of Doom" with a big vertical drop.')),(0,o.kt)("p",null,"On our webpage, we'll only display information about rides that the user is tall and old enough to safely ride. "),(0,o.kt)("h3",{id:"project-setup"},"Project Setup"),(0,o.kt)("p",null,"Here's the HTML and JS that we'll start with:"),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".hidden {\n  display: none;\n}\n")),(0,o.kt)("div",{class:"filename"},"amusement-park.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <script src="js/scripts.js"><\/script>\n  <title>Amusement Park</title>\n</head>\n<body>\n  <div>\n    <h1>Fun 4 All</h1>\n\n    <p>Welcome to the Fun 4 All amusement park!</p>\n    <p>At Fun 4 All you need to be a certain age and height to ride on our rides.</p>\n    <p>Enter your age and height in the form below and we\'ll show you what rides you can go on.</p>\n\n    <form id="userInfo">\n      <label for="age">Age</label>\n      <input id="age" type="text" name="age">\n      <label for="height">Height in inches</label>\n      <input id="height" type="text" name="height">\n      <button type="submit">Show me what I can ride!</button>\n    </form>\n\n    <div id="swings" class="hidden">\n      <h1>You can ride the Swings.</h1>\n      <p>To ride the Swings you need to be at least 6 years old.</p> \n    </div>\n    <div id="coaster" class="hidden">\n      <h1>You can ride the Roller Coaster.</h1>\n      <p>To ride the Roller Coaster you need to be either 12 years old or 48 or more inches tall.</p> \n    </div>\n    <div id="tower" class="hidden">\n      <h1>You can ride the Tower of Doom.</h1>\n      <p>To ride the Tower of Doom you need to be at least 12 years old and 60 or more inches tall.</p> \n    </div>\n    <div id="sorry" class="hidden">\n      <h1>You are too young to ride! Sorry!</h1>\n      <p>Come back when you are 6 years old.</p> \n    </div>\n  </div>\n</body>\n</html>\n')),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// User Interface Logic\n\nfunction hideResults() {\n  document.getElementById("swings").setAttribute("class", "hidden");\n  document.getElementById("coaster").setAttribute("class", "hidden");\n  document.getElementById("tower").setAttribute("class", "hidden");\n  document.getElementById("sorry").setAttribute("class", "hidden");\n}\n\nwindow.onload = function() {\n  document.querySelector("form").onsubmit = function(event) {\n    event.preventDefault();\n    hideResults();\n    const age = parseInt(document.querySelector("input#age").value);\n    const height = parseInt(document.querySelector("input#height").value);\n  };\n};\n\n')),(0,o.kt)("p",null,"This initial setup should look somewhat familiar to previous ones: we set up an ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler for our form and we gather the two values for ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),"; we also make sure to prevent the default behavior of a form submission. "),(0,o.kt)("p",null,"Note that we also have a separate function called ",(0,o.kt)("inlineCode",{parentName:"p"},"hideResults();")," that we use to hide our results. We call this function in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler in order to clear results every time that the form is submitted so that the user can submit it again and again and always see new results."),(0,o.kt)("h3",{id:"adding-the-first-condition--tower-of-doom"},"Adding the First Condition \u2014 Tower of Doom"),(0,o.kt)("p",null,"We're now ready to put our ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," variables through an ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement. Let's add the next bit of code. Take note that the following code snippet only highlights the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler where we'll put our ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n  // Note: we\'re only looking at the onsubmit event handler now!\n  document.querySelector("form").onsubmit = function(event) {\n    event.preventDefault();\n    hideResults();\n    const age = parseInt(document.querySelector("input#age").value);\n    const height = parseInt(document.querySelector("input#height").value);\n\n    // we\'re evaluating the Tower of Doom ride first\n    if (age >= 12 && height >= 60) {\n      document.getElementById("swings").removeAttribute("class");\n      document.getElementById("coaster").removeAttribute("class");\n      document.getElementById("tower").removeAttribute("class");\n    } \n  };\n...\n')),(0,o.kt)("p",null,"With our first ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement, we've used the logical ",(0,o.kt)("strong",{parentName:"p"},"and")," operator, ",(0,o.kt)("inlineCode",{parentName:"p"},"&&"),". The expression ",(0,o.kt)("inlineCode",{parentName:"p"},"age >= 12 && height >= 60")," only evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if both conditions evaluate to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". In other words, a user's age needs to be 12 years or older AND their height needs to be 60 inches or more."),(0,o.kt)("p",null,"You may be wondering why we started with the Tower of Doom condition first. It seems like it would be easier to check if a user is older than 6 to let them know they can ride on the Swings. However, when it comes to handling multiple types of conditions, you always want to start with the condition that's the most specific and complex. Since we need two conditions to be true to ride the Tower of Doom, we need to start with this ride first. "),(0,o.kt)("h3",{id:"adding-the-second-condition--roller-coaster"},"Adding the Second Condition \u2014 Roller Coaster"),(0,o.kt)("p",null,"So what's next? Based on what we learned about handling our conditions in the order of most complex/specific to least, we should handle the Roller Coaster next. Let's add an ",(0,o.kt)("inlineCode",{parentName:"p"},"else if")," to our branching. Again, the following code snippet only highlights the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n  // Note: we\'re only looking at the onsubmit event handler now!\n  document.querySelector("form").onsubmit = function(event) {\n    event.preventDefault();\n    hideResults();\n    const age = parseInt(document.querySelector("input#age").value);\n    const height = parseInt(document.querySelector("input#height").value);\n\n    if (age >= 12 && height >= 60) {\n      document.getElementById("swings").removeAttribute("class");\n      document.getElementById("coaster").removeAttribute("class");\n      document.getElementById("tower").removeAttribute("class");\n      // Next, we\'re evaluating the Roller Coaster ride.\n    } else if (age >= 12 || height >= 48) {\n      document.getElementById("swings").removeAttribute("class");\n      document.getElementById("coaster").removeAttribute("class");\n    }\n  };\n...\n')),(0,o.kt)("p",null,"With our ",(0,o.kt)("inlineCode",{parentName:"p"},"else if")," statement, we've used the ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," logical ",(0,o.kt)("strong",{parentName:"p"},"or")," operator. We use this operator when only one of two (or more) conditions needs to be true. In this case, a user who is 11 years old and 49 inches tall can ride the roller coaster, and so can a user who is 12 years old and 45 inches tall. "),(0,o.kt)("h3",{id:"adding-the-last-two-conditions"},"Adding the Last Two Conditions"),(0,o.kt)("p",null,"The next condition is for the Swings ride \u2014 we need to make sure the user is at least 6 years old. Let's add code for this condition now. While we're at it, let's add the ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statement that will handle all other conditions, which is when a user is not 6 years old and can't ride anything. In this case, we'll give them a message asking them to come back when they are  years old!"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n  // Note: we\'re only looking at the onsubmit event handler now!\n  document.querySelector("form").onsubmit = function(event) {\n    hideResults();\n    event.preventDefault();\n    const age = parseInt(document.querySelector("input#age").value);\n    const height = parseInt(document.querySelector("input#height").value);\n\n    if (age >= 12 && height >= 60) {\n      document.getElementById("swings").removeAttribute("class");\n      document.getElementById("coaster").removeAttribute("class");\n      document.getElementById("tower").removeAttribute("class");\n    } else if (age >= 12 || height >= 48) {\n      document.getElementById("swings").removeAttribute("class");\n      document.getElementById("coaster").removeAttribute("class");\n      // Next, we\'re evaluating the Swings ride.\n    } else if (age >= 6) {\n      document.getElementById("swings").removeAttribute("class");\n      // Finally, we have our "catch-all" for when a user is less than 6 years old.\n    } else {\n      document.getElementById("sorry").removeAttribute("class");\n    }\n  };\n...\n')),(0,o.kt)("p",null,"The last ",(0,o.kt)("inlineCode",{parentName:"p"},"else if")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," statements at this point should be straight forward."),(0,o.kt)("p",null,"Remember that when you need to create branching to handle multiple conditions: start by handling the more complex and specific conditions first. When figuring out the order of conditions, take your time and talk about it with a pair. It's okay if you need to refactor and try out a different order mid-way through your branching."),(0,o.kt)("h3",{id:"adding-error-handling-and-exploring-truthy-and-falsy"},"Adding Error Handling and Exploring Truthy and Falsy"),(0,o.kt)("p",null,"There's two additional pieces of functionality we can add to make this website polished and complete. The first is error handling. What happens if a user leaves our form blank? We can use branching to help us out! "),(0,o.kt)("p",null,"Let's add some HTML for an error message:"),(0,o.kt)("div",{class:"filename"},"amusement-park.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n  <form id="userInfo">\n    \x3c!-- There\'s a new line below this comment! --\x3e\n    <p id="error-message" class="hidden">Please enter an age and height in whole numbers.</p>\n    <label for="age">Age</label>\n    <input id="age" type="text">\n    <label for="height">Height in inches</label>\n    <input id="height" type="text">\n    <button type="submit">Show me what I can ride!</button>\n  </form>\n...\n')),(0,o.kt)("p",null,"In the above code snippet we've added an error message in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," tag to our HTML. We've hidden it, because we only want to display it if there is an error. "),(0,o.kt)("p",null,"Let's add some styles to make the text bold and red to look like an error message:"),(0,o.kt)("div",{class:"filename"},"css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"...\n\n#error-message {\n  font-weight: 600; \n  color:'red';\n}\n")),(0,o.kt)("p",null,"We'll also want to make sure that our error message gets hidden every time the user submits the form, so let's adapt the ",(0,o.kt)("inlineCode",{parentName:"p"},"hideResults()")," function to also hide the error message. Note, we've omitted some code that we haven't updated with an ellipsis ",(0,o.kt)("inlineCode",{parentName:"p"},"...")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// User Interface Logic\n\n// New function name!\nfunction hideResultsAndError() {\n  // New line of code to hide the error message.\n  document.getElementById("error-message").setAttribute("class", "hidden");\n  document.getElementById("swings").setAttribute("class", "hidden");\n  document.getElementById("coaster").setAttribute("class", "hidden");\n  document.getElementById("tower").setAttribute("class", "hidden");\n  document.getElementById("sorry").setAttribute("class", "hidden");\n}\n\nwindow.onload = function() {\n  document.querySelector("form").onsubmit = function(event) {\n    // updated to use new function name!\n    hideResultsAndError();\n    ...\n  };\n};\n\n')),(0,o.kt)("p",null,"Now we're ready to add code to handle the error if a user inputs nothing and submits the form. We'll do this with a new ",(0,o.kt)("inlineCode",{parentName:"p"},"if...else")," statement. Let's now just look at the code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onsubmit")," event handler, and pay close attention to the comments."),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n  // Note: we\'re only looking at the onsubmit event handler now!\n  document.querySelector("form").onsubmit = function(event) {\n    hideResultsAndError();\n    event.preventDefault();\n    const age = parseInt(document.querySelector("input#age").value);\n    const height = parseInt(document.querySelector("input#height").value);\n\n    if (age && height) {\n      // Our original if statement starts here!\n     if (age >= 12 && height >= 60) {\n        document.getElementById("swings").removeAttribute("class");\n        document.getElementById("coaster").removeAttribute("class");\n        document.getElementById("tower").removeAttribute("class");\n      } else if (age >= 12 || height >= 48) {\n        document.getElementById("swings").removeAttribute("class");\n        document.getElementById("coaster").removeAttribute("class");\n      } else if (age >= 6) {\n        document.getElementById("swings").removeAttribute("class");\n      } else {\n        document.getElementById("sorry").removeAttribute("class");\n      }\n      // Our original if statement ends here!\n    } else {\n      document.getElementById("error-message").removeAttribute("class");\n    }\n  };\n...\n')),(0,o.kt)("p",null,"We've wrapped our original ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement in a new ",(0,o.kt)("inlineCode",{parentName:"p"},"if...else"),". Here's another look at the new ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements we've just added, but separated out from the code around it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (age && height) {\n  // check if user can ride the rides\n  // by sending age and height through another if statement\n} else {\n  // print error message\n  // tell user to input age and height correctly\n}\n")),(0,o.kt)("p",null,"Does the condition ",(0,o.kt)("inlineCode",{parentName:"p"},"if (age && height)")," strike you as a little funny? Before now, all of the conditions for our ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements have evaluated to booleans. This time, we're looking at two variables that are numbers. "),(0,o.kt)("p",null,"If the user doesn't input a value, we'll get an empty string. When we run ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt()")," on an empty string, we get ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN")," \u2014 not a number. Neither ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN")," nor an empty string is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". So what's going on here?"),(0,o.kt)("p",null,"What's happening here is that JavaScript has concepts called ",(0,o.kt)("strong",{parentName:"p"},"truthy")," and ",(0,o.kt)("strong",{parentName:"p"},"falsy"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Falsy values")," include the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," as well as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"empty strings"),(0,o.kt)("li",{parentName:"ul"},"the number ",(0,o.kt)("inlineCode",{parentName:"li"},"0")),(0,o.kt)("li",{parentName:"ul"},"the number ",(0,o.kt)("inlineCode",{parentName:"li"},"NaN")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"undefined")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"null"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If JavaScript sees any of these as a branching condition, it will treat them as false. Everything else is truthy.")," Truthy values include numbers and strings that have a value. "),(0,o.kt)("p",null,"Looking again at ",(0,o.kt)("inlineCode",{parentName:"p"},"if (age && height)"),", this is asking, do the variables ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," both have a value greater than 0? If not, then we need to display an error message asking that the user input the correct information. If so, then ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," are considered truthy in JavaScript and the code in the block (within the curly brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"{ }"),") following that condition will run. "),(0,o.kt)("h3",{id:"truthy-and-falsy-are-caused-by-data-type-coercion"},"Truthy and Falsy Are Caused By Data Type Coercion"),(0,o.kt)("p",null,"Truthy and falsy values exist because of the data type coercion, that is the implicit forced conversion JavaScript automatically performs. When we put expressions into our ",(0,o.kt)("inlineCode",{parentName:"p"},"if (expression)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"else if (expression)")," statements, these need to evaluate to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". When the expression we put in is something that's not a typical comparison like ",(0,o.kt)("inlineCode",{parentName:"p"},"2 > 1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},'typeof "phrase" === "string"'),", but instead something like an empty string, JavaScript uses data type coercion to evaluate the expression as a boolean. "),(0,o.kt)("p",null,"Let's review another example of passing in a variable set to an empty string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let myVar = "";\nif (myVar) {\n  // This code will run if JavaScript implictly converts myVar to the boolean true.\n  // This conversion will only happen if myVar is NOT an empty string and has some value.\n  // myVar will then be considered a "truthy" value.\n} else {\n  // This code will run if JavaScript implictly converts myVar to the boolean false.\n  // This conversion will only happen if myVar is an empty string, \n  // or any other falsy value like null or undefined.\n  // myVar will then be considered a "falsy" value.\n}\n')),(0,o.kt)("p",null,"In the above example, JavaScript implicitly converts ",(0,o.kt)("inlineCode",{parentName:"p"},"myVar")," into one of two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The boolean ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", if ",(0,o.kt)("inlineCode",{parentName:"li"},"myVar")," is an empty string."),(0,o.kt)("li",{parentName:"ul"},"The boolean ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", if ",(0,o.kt)("inlineCode",{parentName:"li"},"myVar")," has any value inside of the string.")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"myVar"),' is set to an empty string, JavaScript will convert this "falsy" value into the boolean ',(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"an-alternative-using-the-logical-not--operator"},"An Alternative: Using the Logical Not ",(0,o.kt)("inlineCode",{parentName:"h3"},"!")," Operator"),(0,o.kt)("p",null,"Let's discuss another operator you should know about. If you want to determine whether something is not true, you can use the logical ",(0,o.kt)("strong",{parentName:"p"},"not")," ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," operator. Let's rewrite our error handling ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements to use the logical not operator:"),(0,o.kt)("div",{class:"filename"},"js/scripts.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// with the logical not operator, we check for whether\n// age or height do NOT exist, and if they don\'t exist, \n// then we display the error message\nif (!age || !height) {\n  document.getElementById("error-message").removeAttribute("class");\n// in all other cases, we run our code to see what ride a user can go on\n} else {\n  if (age >= 12 && height >= 60) {\n    document.getElementById("swings").removeAttribute("class");\n    document.getElementById("coaster").removeAttribute("class");\n    document.getElementById("tower").removeAttribute("class");\n  } else if (age >= 12 || height >= 48) {\n    document.getElementById("swings").removeAttribute("class");\n    document.getElementById("coaster").removeAttribute("class");\n  } else if (age >= 6) {\n    document.getElementById("swings").removeAttribute("class");\n  } else {\n    document.getElementById("sorry").removeAttribute("class");\n  }\n}\n')),(0,o.kt)("p",null,"Like the comments describe, in our first ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement, we're checking if age or height do NOT exist: ",(0,o.kt)("inlineCode",{parentName:"p"},"(!age || !height)"),". If either variable is ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", meaning they do not exist and they are considered falsy, then our code will show the error message. Otherwise, our code will execute the else statement with the nested branching to see what rides the user can go on."),(0,o.kt)("p",null,"We have switched to the logical or ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," operator because we want to show our error message if one or the other form field is left blank. Or, in other words if ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," do not exist and are falsy."),(0,o.kt)("h3",{id:"next-steps-and-completed-code"},"Next Steps and Completed Code"),(0,o.kt)("p",null,"With error handling in place, what else can we do with our website? It's always helpful to think of additional polish we can add, or more cases we can handle in our branching. For example, we could:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a button that clears form values. "),(0,o.kt)("li",{parentName:"ul"},"Refactor our code to handle unlikely cases. For example, if we enter an age of ",(0,o.kt)("inlineCode",{parentName:"li"},"3")," and a height of ",(0,o.kt)("inlineCode",{parentName:"li"},"60"),", we'll be told that we can ride the roller coaster and swings. However, you must be at least 6 years old to ride any ride at the park! While it is unlikely that there will be a 3 year old person who is 5 feet tall (60 inches), this is a possible case that our form should handle. How would you update the ",(0,o.kt)("inlineCode",{parentName:"li"},"if")," statement to handle this case?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To see the completed code for this project, visit the cheat sheet.")))}c.isMDXComponent=!0}}]);