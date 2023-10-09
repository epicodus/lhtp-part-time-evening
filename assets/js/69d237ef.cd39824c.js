"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16090],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(l,".").concat(c)]||d[c]||h[c]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7896),r=(n(2784),n(30876));const a={title:"\ud83d\udcd3 Debugging in JavaScript: Using debugger and Breakpoints",id:"debugging-in-javascript-using-debugger-and-breakpoints",slug:"debugging-in-javascript-using-debugger-and-breakpoints",hide_table_of_contents:!0,sidebar_position:30,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4g_debugging_with_debugger.md"},i=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers-part-2/debugging-in-javascript-using-debugger-and-breakpoints",id:"introduction-to-programming/javascript-and-web-browsers-part-2/debugging-in-javascript-using-debugger-and-breakpoints",title:"\ud83d\udcd3 Debugging in JavaScript: Using debugger and Breakpoints",description:"This is our fourth and final lesson on basic debugging with JavaScript. In this lesson, we'll use DevTools debugger to pinpoint and fix two new bugs in our Calculator JS.",source:"@site/docs/introduction-to-programming/4_javascript-and-web-browsers-part-2/4g-debugging-with-debugger.md",sourceDirName:"introduction-to-programming/4_javascript-and-web-browsers-part-2",slug:"/introduction-to-programming/javascript-and-web-browsers-part-2/debugging-in-javascript-using-debugger-and-breakpoints",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/debugging-in-javascript-using-debugger-and-breakpoints",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\ud83d\udcd3 Debugging in JavaScript: Using debugger and Breakpoints",id:"debugging-in-javascript-using-debugger-and-breakpoints",slug:"debugging-in-javascript-using-debugger-and-breakpoints",hide_table_of_contents:!0,sidebar_position:30,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4g_debugging_with_debugger.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Debugging in JavaScript: Pausing on Exceptions",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/debugging-in-javascript-pausing-on-exceptions"},next:{title:"\u270f\ufe0f Practice: Triangle Tracker",permalink:"/introduction-to-programming/javascript-and-web-browsers-part-2/practice-triangle-tracker"}},l={},u=[{value:"Project Setup",id:"project-setup",level:2},{value:"Using Breakpoints",id:"using-breakpoints",level:2},{value:"Tips for Using Breakpoints",id:"tips-for-using-breakpoints",level:3},{value:"Solving the Second Bug",id:"solving-the-second-bug",level:3},{value:"Using <code>debugger;</code>",id:"using-debugger",level:2},{value:"Summary",id:"summary",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is our fourth and final lesson on basic debugging with JavaScript. In this lesson, we'll use DevTools debugger to pinpoint and fix two new bugs in our Calculator JS."),(0,r.kt)("p",null,"Of the four debugging tools we're covering now, debugger is the most important tool to master. Pay close attention and make sure you understand the basics of using this tool. Don't worry \u2014 you will get plenty of practice with debugger. We recommend using this tool every time you are trying to solve an error in your code."),(0,r.kt)("p",null,"The debugger tool freezes execution of our code so that we can run our own experiments in the scope that the code is frozen in. Debugger is similar to pausing on exceptions in that we can see what variables evaluate to during mid-execution of a function. However, you don't need an exception to be thrown to use debugger to explore inside of a function. Debugger works really well with bugs that ",(0,r.kt)("em",{parentName:"p"},"don't")," throw errors in our code, like ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," values."),(0,r.kt)("p",null,"There are two ways to freeze our code using debugger \u2014 a great way and a not-so-great way. We'll start exploring the great way first, and we'll continue to use the same Calculator project when we learned about pausing on exceptions."),(0,r.kt)("p",null,"Remember that it's optional to code along with this lesson. The next lesson is a practice prompt to build a new project and try using these debugging tools. If you are coding along with this lesson, make sure to use the JS below, and the HTML from the previous lesson. "),(0,r.kt)("h2",{id:"project-setup"},"Project Setup"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Take note that we've introduced two new bugs!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Business Logic\nfunction add(num1, num2) {\n  return num1 + num2;\n}\n\nfunction subtract(num1, num2) {\n  return num1 - num2;\n}\n\nfunction multiply(num1, num2) {\n  return num1 * num2;\n}\n\nfunction divide(num1, num2) {\n  return num1 / num2;\n}\n\n// User Interface Logic\nfunction handleCalculation(event) {\n  event.preventDefault();\n  const number1 = parseInt(document.querySelector("input#input1").value);\n  const number2 = parseInt(document.querySelector("input#input2").value);\n  const operator = document.querySelector("input[name=\'operator\']:checked").vale;\n  \n  let result;\n  if (operator === "add") {\n    result = add(number1, number2);\n  } else if (operator === "subtract") {\n    result = subtract(number1, number2);\n  } else if (operator === "multiply") {\n    result = multiply(number1, number2);\n  } else if (operator === "divide") {\n    result = divide(number1, number2);\n  }\n\n  document.getElementById("output").inerText = result;\n}\n\nwindow.addEventListener("load", function() {\n  const form = document.getElementById("calculator")\n  form.addEventListener("submit", handleCalculation);\n});\n')),(0,r.kt)("h2",{id:"using-breakpoints"},"Using Breakpoints"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"With the Calculator project opened in the browser, let's submit our form. In our example, we've inputted the numbers 2 and 3, and selected to add them together. When we submit the form we get... well, nothing! No result and ",(0,r.kt)("em",{parentName:"p"},"no error!")," In this situation pausing on exceptions won't help us."),(0,r.kt)("p",null,"Let's start our debugging process by opening our DevTools and navigating to the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," tab. "),(0,r.kt)("p",null,"On the left of the Sources tab, we'll see our project's file tree. Open up the ",(0,r.kt)("inlineCode",{parentName:"p"},"js/")," directory and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," to open it in the window to the right. We can open up any file from our project in this way."),(0,r.kt)("p",null,"Check the GIF below, which walks through the whole process \u2014 including adding breakpoints, which we'll discuss further in a moment."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/breakpoints-stepping-through.gif",alt:"First make sure you've chosen the right file to add a breakpoint to, then add the breakpoint."})),(0,r.kt)("p",null,"In the GIF above, several things happen. After opening the Sources tab, we first ensure that we are looking at the correct file by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," in the left-hand window (the ",(0,r.kt)("em",{parentName:"p"},"Page")," tab within the ",(0,r.kt)("em",{parentName:"p"},"Sources")," tab). When we start creating projects with more JS files, it's especially useful to be able to switch between them in this window."),(0,r.kt)("p",null,"Next, we click on three lines in our code to create a blue arrow next to each line. This is a ",(0,r.kt)("strong",{parentName:"p"},"breakpoint"),", which means that our code will pause execution when it hits the line of code to the right of the blue arrow. In this case, our first debugging step is to make sure that we're properly getting the form values, so we're adding breakpoints next to lines 21, 22, and 23 to verify that we're correctly getting the values for the variables ",(0,r.kt)("inlineCode",{parentName:"p"},"number1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,r.kt)("p",null,"Then, we submit the form. Because we've added breakpoints, the familiar \"Paused in Debugger\" message and menu pops up. In the gif we use the right-pointing arrow that's rounded over a dot (in the blue circle in the gif) to call the next function. This moves us through each breakpoint and each line of code. As we click this arrow, we can see our code running, one line at a time. The orange box highlights how the debugger tracks the value of each variable  every time we click the arrow and run the next line of code. "),(0,r.kt)("p",null,"Notice that after we run line 23, the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," is still ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"! That's likely where the first issue is. If we double check line 23, we should be able to spot another typo in the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property, incorrectly written as ",(0,r.kt)("inlineCode",{parentName:"p"},"vale"),". This is our first bug!"),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," in the Sources tab to verify this. Check out the gif below that demonstrates this."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/breakpoints-fixing-error.gif",alt:"This gif shows how to edit the scripts.js in the Sources tab to try out different code to solve the first bug. Specifically, we change `vale` to `value`. Hovering over line 23 shows us the value returned from executing that code."})),(0,r.kt)("p",null,"When we first hover over ",(0,r.kt)("inlineCode",{parentName:"p"},"document.querySelector(\"input[name='operator']:checked\").vale;")," the DevTools debugger tells us that ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," is returned (highlighted by the green square). "),(0,r.kt)("p",null,"Then, when we update ",(0,r.kt)("inlineCode",{parentName:"p"},"vale")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and hover over ",(0,r.kt)("inlineCode",{parentName:"p"},"document.querySelector(\"input[name='operator']:checked\").value;")," again, the debugger tells us that ",(0,r.kt)("inlineCode",{parentName:"p"},'"add"')," is returned (highlighted by the orange square)."),(0,r.kt)("p",null,"Note that while the JavaScript files in the ",(0,r.kt)("em",{parentName:"p"},"Sources")," pane contain references to our source code, any changes we make in the ",(0,r.kt)("em",{parentName:"p"},"Sources")," pane won't actually change our code in VS Code. This is a good thing because we have a sandboxed environment where we can experiment with code in the browser without needing to worry about the integrity of our actual source code."),(0,r.kt)("h3",{id:"tips-for-using-breakpoints"},"Tips for Using Breakpoints"),(0,r.kt)("p",null,"We've solved our first bug, and we have one more to go. Before we move onto the next bug, let's review some tips for using breakpoints. "),(0,r.kt)("p",null,"First, it's important to note that refreshing your page or exiting from the DevTools won't remove your breakpoints. Instead, you need to remove them by clicking on them to toggle them off. "),(0,r.kt)("p",null,"Also, the breakpoint should always be added to the line right ",(0,r.kt)("em",{parentName:"p"},"after")," the line we actually want to evaluate. This is because we want to evaluate a line after it has run, not before \u2014 and the breakpoint will stop the code as soon as a line is reached (and before the code from that line is evaluated). "),(0,r.kt)("p",null,"With this in mind, an easier way to evaluate the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"number1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," would be to set a breakpoint for the line afterwards. Check out the gif below that demonstrates this. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/breakpoints-using-line-25.gif",alt:"This gif adds a breakpoint to line 25 `let result;`. In this case, using just one breakpoint lower in our scripts allows us to check all of the variables (`number1`, `number2`, and `operator`) from the code before it."})),(0,r.kt)("p",null,"As we can see in the gif, adding one breakpoint to line 25 (with ",(0,r.kt)("inlineCode",{parentName:"p"},"let result;"),") lets us immediately see the values of all of the variables ",(0,r.kt)("inlineCode",{parentName:"p"},"number1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," (highlighted by the red square) right after we submit the form. "),(0,r.kt)("p",null,"The last tip is that if there are multiple function calls on one line of code, we can optionally set a breakpoint for the additional function(s). Check out the gif below that demonstrates this. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/breakpoints-multiple-breakpoints-on-one-line.gif",alt:"This gif shows how to add multiple breakpoints on one line."})),(0,r.kt)("p",null,"This just gives you a finer grained control. There likely won't be a lot need for that extra fine grained control in the applications you build at Epicodus, but that depends how you are writing your code (for example, if you are chaining multiple method calls) and where the bug is that you are trying to locate! "),(0,r.kt)("h3",{id:"solving-the-second-bug"},"Solving the Second Bug"),(0,r.kt)("p",null,"We're ready to move onto the second bug. If you are coding along with this lesson and you haven't already fixed the first bug, do so now. "),(0,r.kt)("p",null,"Let's resubmit the form and see what's going on now. Well, turns out we're still experiencing the same behavior \u2014 nothing in the results and no error message. What could be going on? "),(0,r.kt)("p",null,"Let's continue with the breakpoint on ",(0,r.kt)("inlineCode",{parentName:"p"},"let result;")," on line 25 and see what happens as we step through each line of code. Watch the GIF below that demonstrates what happens, and pay attention to the values of the variables in scope as we step through each line of code. "),(0,r.kt)("p",null,"Note that in the GIF below, we don't see the usual grayed out webpage and \"Paused in debugger\" message, even though we are in fact paused in debugger and have a breakpoint on line 25. This just seems to be an occasional glitch with DevTools. If this happens to you in your own debugging process and it's throwing you off, the best thing to do is to refresh the page and submit the form again."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/breakpoints-stepping-through-second-error.gif",alt:"This GIF shows the process of stepping through our scripts, line by line, starting with line 25. As we click through our scripts, we can see how the different statements get processed and ultimately see the value of the `result` variable."})),(0,r.kt)("p",null,"When we first hit the breakpoint on line 25 ",(0,r.kt)("inlineCode",{parentName:"p"},"let result;"),", we can see that the three variables ",(0,r.kt)("inlineCode",{parentName:"p"},"number1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," are all defined. ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," is not defined, because we haven't worked our way through the if/else branching statements. "),(0,r.kt)("p",null,'Then, we move through our scripts one line at a time. In total, we click the button to "step over the next function call" five times:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With the first click, we are taken to line 26 ",(0,r.kt)("inlineCode",{parentName:"li"},'if (operator === "add") {'),", which evaluates to true. This means that on the second click to step through our code, we're taken immediately to line 27 ",(0,r.kt)("inlineCode",{parentName:"li"},"result = add(number1, number2);"),". Until we step through our code again, we won't know if that code works."),(0,r.kt)("li",{parentName:"ul"},"With the third click, we're taken all the way down to line 36 ",(0,r.kt)("inlineCode",{parentName:"li"},'document.getElementById("output").inerText = result;'),". Line 36 hasn't executed yet, but we can see that ",(0,r.kt)("inlineCode",{parentName:"li"},"result")," now has a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),", and the rest of the if/else branching statements were skipped. "),(0,r.kt)("li",{parentName:"ul"},"With the fourth and fifth clicks we move to line 37 and 38, completing the execution of all of our scripts. Since we're at the end of our scripts, this kicks us out of the debugger completely! You can tell when you are no longer paused in the debugger, because all of the markup in the ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts.js")," file (in the Sources tab) disappears, and so does the gray wash and debugger menu options on the webpage itself.")),(0,r.kt)("p",null,"Since all of our variables are defined and our if/else statement is working correctly, that points to an issue on line 36. A quick review of the line should reveal the bug in our code, but, let's try something else: taking this line of code and exploring it in the DevTools console. That's right, when actively in the debugger using breakpoints, we can call on and explore the variables in our scripts directly in the DevTools console."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/breakpoints-exploring-second-error-in-console.gif",alt:"This gif shows the process of solving the second bug. We first hover over variables in scripts.js when we're paused in the debugger. Then, we copy a line our scripts code and put it in the DevTools console to explore it more. In the DevTools console, we're able to spot the typo in the `innerText` property."})),(0,r.kt)("p",null,"As we can see from the gif, this bug is one of those tricky ones. A simple typo in the property name ",(0,r.kt)("inlineCode",{parentName:"p"},"inerText")," makes JavaScript think that you are creating a brand new property, instead of mistakenly trying to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"innerText")," property of the HTML element. We can see in the debugger that JavaScript properly sets the value of the incorrect ",(0,r.kt)("inlineCode",{parentName:"p"},"inerText")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),". We found that out by hovering over the variables and lines of code in ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js")," in the Sources tab. "),(0,r.kt)("p",null,"Then, we copied line 36 and pasted it directly in our DevTools console. Here, we can explore the variable values, and try out different solutions to solve our bug. ",(0,r.kt)("strong",{parentName:"p"},"This is a very powerful feature of debugger: we can experiment with the value of variables and run any code we want ",(0,r.kt)("em",{parentName:"strong"},"within")," any local scope in our application \u2014 as long as our breakpoint is paused within that scope.")),(0,r.kt)("p",null,"At the very end of the gif, we see that we are able to correct the typo and correctly display the result in our webpage! Now, we can take that fix and update our codebase accordingly in VS Code. "),(0,r.kt)("h2",{id:"using-debugger"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"debugger;")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The not-so-great way to use DevTools' debugger is to drop a ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," statement directly in our code where we want the code to stop. Not the code in the Source tab, but our code in VS Code! The image below shows a ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," statement added to line 26 of our scripts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/using-debugger-statement-in-code.png",alt:"This image shows a `debugger;` statement added to line 26 of our scripts.js file in VS Code."})),(0,r.kt)("p",null,"When we refresh our website, open DevTools to the Sources tab, and submit our form again, our DevTools will stop the execution of our code right when it hits the ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," statement and we'll be paused in debugger. Everything that we can do with breakpoints, we can also do via the ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," statement."),(0,r.kt)("p",null,"However, using ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," is a less convenient approach, because we'll need to manually add and remove the statement from our website's codebase. While we also manually add and remove breakpoints in the Sources tab, these are not permanently in our codebase. If you forget to remove a ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," statement from your codebase, it will freeze execution of your code whenever anyone uses it. As you can imagine, that would be a disaster for a production codebase. This is why ",(0,r.kt)("strong",{parentName:"p"},"you absolutely can't forget to remove the ",(0,r.kt)("inlineCode",{parentName:"strong"},"debugger;")," statement when you are done with it!")," "),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We've now fixed all of the bugs in our code. Woohoo! If you've been coding along with this lesson, make sure to actually make the updates in VS Code. Make sure to remove any ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger;")," statements that may be in your code as well. At this point, it should be clear how helpful breakpoints are for pausing our code mid-execution so that we can explore and debug."),(0,r.kt)("p",null,"Using breakpoints is hands down the most powerful of the debugging tools we've covered during this course section. However, all of the debugging tools are useful in their own way, and it's important that you get familiar with each of them. If you are a good debugger, you are well on your way to being a good coder."))}h.isMDXComponent=!0}}]);