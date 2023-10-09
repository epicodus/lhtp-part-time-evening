"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98240],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Separation of Concerns in Text Analyzer: boldPassage() UI Function",id:"separation-of-concerns-in-text-analyzer-boldpassage-ui-function",slug:"separation-of-concerns-in-text-analyzer-boldpassage-ui-function",hide_table_of_contents:!0,sidebar_position:29,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2h_separation_of_logic_part_3_adding_ui_function.md"},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping/separation-of-concerns-in-text-analyzer-boldpassage-ui-function",id:"introduction-to-programming/arrays-and-looping/separation-of-concerns-in-text-analyzer-boldpassage-ui-function",title:"\ud83d\udcd3 Separation of Concerns in Text Analyzer: boldPassage() UI Function",description:"We now have a very basic application where our business and user interface logic are completely separate. Our business logic is tested with pseudocode tests. Our user interface doesn't include any business logic. Instead, whenever the UI logic needs to interact with business logic, it calls one of the functions in our business logic.",source:"@site/docs/introduction-to-programming/5_arrays-and-looping/2h-separation-of-logic-part-3-adding-ui-function.md",sourceDirName:"introduction-to-programming/5_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/separation-of-concerns-in-text-analyzer-boldpassage-ui-function",permalink:"/introduction-to-programming/arrays-and-looping/separation-of-concerns-in-text-analyzer-boldpassage-ui-function",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"\ud83d\udcd3 Separation of Concerns in Text Analyzer: boldPassage() UI Function",id:"separation-of-concerns-in-text-analyzer-boldpassage-ui-function",slug:"separation-of-concerns-in-text-analyzer-boldpassage-ui-function",hide_table_of_contents:!0,sidebar_position:29,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2h_separation_of_logic_part_3_adding_ui_function.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Separation of Logic: Fixing a Bug in Text Analyzer",permalink:"/introduction-to-programming/arrays-and-looping/separation-of-logic-fixing-a-bug-in-text-analyzer"},next:{title:"\ud83d\udcd3 DRYing Code and Completing the Text Analyzer UI",permalink:"/introduction-to-programming/arrays-and-looping/drying-code-and-completing-the-text-analyzer-ui"}},s={},p=[{value:"UI Logic, Business Logic, and Separation of Concerns with <code>boldPassage()</code>",id:"ui-logic-business-logic-and-separation-of-concerns-with-boldpassage",level:2},{value:"Adding the <code>boldPassage()</code> UI Function",id:"adding-the-boldpassage-ui-function",level:2},{value:"The First Test",id:"the-first-test",level:3},{value:"The Second Test",id:"the-second-test",level:3},{value:"The Third Test",id:"the-third-test",level:3},{value:"The Fourth Test",id:"the-fourth-test",level:3},{value:"Fixing a Small Bug by Using the <code>index</code> Parameter in <code>Array.prototype.forEach()</code> Callback",id:"fixing-a-small-bug-by-using-the-index-parameter-in-arrayprototypeforeach-callback",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We now have a very basic application where our business and user interface logic are completely separate. Our business logic is tested with pseudocode tests. Our user interface doesn't include any business logic. Instead, whenever the UI logic needs to interact with business logic, it calls one of the functions in our business logic."),(0,a.kt)("p",null,"However, it's not always easy to tell if logic should be UI or business logic. So let's muddy the water a bit and look at an example where separation of logic may not be entirely clear. "),(0,a.kt)("h2",{id:"ui-logic-business-logic-and-separation-of-concerns-with-boldpassage"},"UI Logic, Business Logic, and Separation of Concerns with ",(0,a.kt)("inlineCode",{parentName:"h2"},"boldPassage()")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We're going to add another function to our application called ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()"),'. This function will return a string with bolded word matches. For instance, let\'s say we want to find matches of the word "world" in the string "Hello world! It truly is a wonderful day \u2014 and a wonderful world!"'),(0,a.kt)("p",null,"Our string will look like this in the UI:"),(0,a.kt)("p",null,'"Hello ',(0,a.kt)("strong",{parentName:"p"},"world"),"! It truly is a wonderful day \u2014 and a wonderful ",(0,a.kt)("strong",{parentName:"p"},"world"),'!"'),(0,a.kt)("p",null,"First off, is this business logic or user interface logic?"),(0,a.kt)("p",null,"The answer should be pretty obvious. It returns a formatted string to the user, therefore it's user interface logic. But just because it's user interface logic doesn't mean we should just throw the new code into the event listener for the ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),"'s load event. We can still extract user interface logic into functions which will make our code much cleaner. Also, just because a function should be user interface logic doesn't mean it needs to directly alter the DOM."),(0,a.kt)("p",null,"This is very important to reiterate because it would be really easy to just update our ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," to do this with the bare minimum amount of code. Here's what it might look like. ",(0,a.kt)("strong",{parentName:"p"},"We do not want to actually do this. It is just an example.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Do not do this. It works but it does not separate logic!\n\nfunction numberOfOccurrencesInText(word, text) {\n  if (word.trim().length === 0) {\n    return 0;\n  }\n  let para = document.createElement("p");\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n      const bold = document.createElement("strong");\n      bold.append(element);\n      para.append(bold, " ");\n    } else {\n      para.append(element, " ");\n    }\n  });\n  document.querySelector("div#bolded-passage").append(para);\n  return wordCount;\n}\n')),(0,a.kt)("p",null,"In this example, we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"para")," variable that's set to a new paragraph element. Then when we loop through the ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray"),", we don't just count the number of occurrences of a specific word. We also create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"<strong>")," element and add the matching word as its text. On every iteration of our loop, we add to the paragraph, appending words (represented by ",(0,a.kt)("inlineCode",{parentName:"p"},"element"),") and a space between each word. Finally, when the loop ends, we add the paragraph element to the end of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," that contains all of our HTML."),(0,a.kt)("p",null,"Again, it should be obvious why this is bad. This function is just supposed to do one thing \u2014 count the number of occurrences of a word in a text. Sure, it may seem convenient to use the loop and conditional we already have to construct formatted HTML elements for the DOM. And it may seem particularly tempting because we can potentially solve the problem with ",(0,a.kt)("em",{parentName:"p"},"less")," code if we do this. But if we do so, we won't be able to reuse the function elsewhere. If the HTML changes, the function will break. It's also harder to read and reason about what this function does \u2014 and it's just plain ugly."),(0,a.kt)("p",null,"And no, you can't escape the problem by returning the HTML paragraph element (with the bolded matching words) with the word count, like this (returning an array with both values): ",(0,a.kt)("inlineCode",{parentName:"p"},"return [wordCount, para];"),". While our function would no longer directly interact with the DOM, it would still be doing formatting work intended for the user interface. "),(0,a.kt)("p",null,"In other words, we're combining two separate functionality goals (counting matching words and formatting text) into one function, which isn't great. This interferes with a very important programming design pattern: separation of concerns. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Separation of concerns")," dictates that each function should only focus on one thing and not know about anything else in the application. In this context, a ",(0,a.kt)("strong",{parentName:"p"},"concern")," is a responsibility. So when we apply separation of concerns to our code, we're separating the functionality of our webpage into multiple different functions, each of which has a single responsibility."),(0,a.kt)("p",null,"In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),", it should take two strings, determine how many times a specific substring occurs in that string, and then return the count. It shouldn't do anything else. This means that formatting text is not the 'concern' of ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),"."),(0,a.kt)("h2",{id:"adding-the-boldpassage-ui-function"},"Adding the ",(0,a.kt)("inlineCode",{parentName:"h2"},"boldPassage()")," UI Function"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"So let's do this the right way. We'll create a function that handles the UI logic for bolding a passage. ",(0,a.kt)("strong",{parentName:"p"},"We can even use TDD to test it, though keep in mind that TDD is generally used for business logic, ",(0,a.kt)("em",{parentName:"strong"},"not")," UI logic. (There are other ways to test UI logic such as end to end tests.) You will not be expected to write tests for your UI logic on your independent project.")," However, we are going to walk through the process of using TDD for this function because it can still help us break down the problem into smaller parts and it will help us separate our code better."),(0,a.kt)("h3",{id:"the-first-test"},"The First Test"),(0,a.kt)("p",null,"Let's start with a test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Describe: boldPassage()\n\nTest: "It should return null if no word or text is entered."\nCode:\nconst text = "";\nconst word = "";\nboldPassage(word, text);\nExpected Output: null\n')),(0,a.kt)("p",null,"We're starting out by handling the case when no word or text is inputted. We don't have to start here, but it's as good as any starting place because it's small and specific. When using TDD, it is common that you'll find multiple good starting places or next steps. So don't get hung up on choosing the right starting place or next step. Instead, make sure that whatever functionality you choose to create next, that it's small and specific."),(0,a.kt)("p",null,"So, with this test, we state that if either ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," is an empty string, then we'll simply return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". Why ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"? Well, we could choose any falsy value here. In our form submission event handler function, we'll use this return value to determine whether or not we should update the DOM. If there's no paragraph element, we don't want to update the DOM. We'll add code for this when we complete the UI logic in the next lesson. "),(0,a.kt)("p",null,"Now let's get the test passing:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n}\n")),(0,a.kt)("h3",{id:"the-second-test"},"The Second Test"),(0,a.kt)("p",null,"Next, let's write the second test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Test: "It should return a non-matching word in a p tag."\nCode:\nconst word = "hello";\nconst text = "yo";\nboldPassage(word, text);\nExpected Output: <p>yo</p>\n')),(0,a.kt)("p",null,"Our function will just return a paragraph element with the text inside of it. No need to interact with the DOM at all! We'll keep it very simple. Both parameters are one word and the strings don't match."),(0,a.kt)("p",null,"Now let's get the test passing:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n  const p = document.createElement("p");\n  p.append(text);\n  return p;\n}\n')),(0,a.kt)("p",null,"As we can see, if the word is not a match, it shouldn't be bolded. Therefore we should just return the paragraph element with the text appended inside. The test will pass."),(0,a.kt)("h3",{id:"the-third-test"},"The Third Test"),(0,a.kt)("p",null,"Onto the third test!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Test: "It should return a matching word in a strong tag."\nCode:\nconst word = "hello";\nconst text = "hello";\nboldPassage(word, text);\nExpected Output: <p><strong>hello</strong></p>\n')),(0,a.kt)("p",null,"Now the one-word strings arguments match, which means they should be bolded. Here's the updated code:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n  const p = document.createElement("p");\n  if (word === text) {\n    const bold = document.createElement("strong");\n    bold.append(text);\n    p.append(bold);\n  } else {\n    p.append(text);\n  }\n  return p;\n}\n')),(0,a.kt)("p",null,"This will get our test passing and will still be compliant with our first test."),(0,a.kt)("h3",{id:"the-fourth-test"},"The Fourth Test"),(0,a.kt)("p",null,"Now let's move onto the fourth test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Test: "It should wrap words that match in strong tags but not words that don\'t."\nCode:\nconst word = "hello";\nconst text = "hello there";\nboldPassage(word, text);\nExpected Output: <p><strong>hello</strong> there</p>\n')),(0,a.kt)("p",null,"Now let's update our code to get the test passing. We are ready for a loop now. The function will change considerably but the conditional we've already written will still play an instrumental part in our code."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n  const p = document.createElement("p");\n  let textArray = text.split(" ");\n  textArray.forEach(function(element) {\n    if (word === element) {\n      const bold = document.createElement("strong");\n      bold.append(element);\n      p.append(bold);\n    } else {\n      p.append(element);\n    }\n    p.append(" ");\n  });\n  return p;\n}\n')),(0,a.kt)("p",null,"There is still one more thing we need to fix to get this test passing, but first let's go over the changes we've made."),(0,a.kt)("p",null,"First, we create an empty paragraph element. We will append words to this string with our loop."),(0,a.kt)("p",null,"We take our split array and then loop through it. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," match, we should bold the word and append it to the paragraph element. That means we do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (word === element) {\n  const bold = document.createElement("strong");\n  bold.append(element);\n  p.append(bold);\n}\n')),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," don't match, we just append the ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," without strong tags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"else {\n  p.append(element);\n}\n")),(0,a.kt)("p",null,"Then, after we've appended the ",(0,a.kt)("inlineCode",{parentName:"p"},"element"),", we add a space with ",(0,a.kt)("inlineCode",{parentName:"p"},'p.append(" ");')," regardless of whether the element was a match. This is because when we split our string based on spaces, we also removed those spaces. So now we need to add them back in."),(0,a.kt)("p",null,"At the very end of the function and after the loop has completed, we return the ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," paragraph element."),(0,a.kt)("h3",{id:"fixing-a-small-bug-by-using-the-index-parameter-in-arrayprototypeforeach-callback"},"Fixing a Small Bug by Using the ",(0,a.kt)("inlineCode",{parentName:"h3"},"index")," Parameter in ",(0,a.kt)("inlineCode",{parentName:"h3"},"Array.prototype.forEach()")," Callback"),(0,a.kt)("p",null,"If we try this test out in the DevTools console, we will see that something is not quite right:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> function boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n  const p = document.createElement("p");\n  let textArray = text.split(" ");\n  textArray.forEach(function(element) {\n    if (word === element) {\n      const bold = document.createElement("strong");\n      bold.append(element);\n      p.append(bold);\n    } else {\n      p.append(element);\n    }\n    p.append(" ");\n  });\n  return p;\n}\n> const p = boldPassage("hello", "hello there");\n> p.innerText;\n"hello there "\n')),(0,a.kt)("p",null,"Our method adds an extra space at the end. What's the problem with this whitespace? You may or may not remember, but HTML actually ignores the whitespace in our HTML. So this whitespace at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},'"hello there "')," doesn't affect our HTML at all. "),(0,a.kt)("p",null,"However, the DOM \u2014 the object model of our HTML \u2014 does track this whitespace as a separate node in the DOM's tree. Let's do a quick review. A tree is a hierarchical data structure in computer programming, and that's what the DOM is \u2014 a tree. Trees are made up of nodes that are organized hierarchically. There's a parent node that has children nodes, which may have sibling nodes, and so forth. This is very similar to a family tree. "),(0,a.kt)("p",null,"All that aside, the main issue is that the DOM tracks this whitespace in order to make sure that it is presenting our code as it is actually written. If you want to dive a bit deeper into this whitespace issue, check out ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace#html_largely_ignores_whitespace"},"this article on MDN that explains it"),". (We'll also be reviewing the DOM when we learn about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," object to explore DOM nodes.) "),(0,a.kt)("p",null,"So, ideally, we'll make sure that we're only including necessary whitespace in the HTML we add to the DOM. How can we fix this?"),(0,a.kt)("p",null,"Well, this is a great opportunity to cover an important feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," that we haven't discussed in detail yet: we can add an optional parameter to the callback we pass into the forEach loop, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const string = "I like cats!";\n> string.split(" ").forEach(function(element, index) {\n  console.log(element, index);\n});\n')),(0,a.kt)("p",null,"Try the above code in the DevTools console and the following will be logged:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"I 0\nlike 1\ncats! 2\n")),(0,a.kt)("p",null,"So we can get both the element ",(0,a.kt)("em",{parentName:"p"},"and")," the current index position of the element in the array. This is a very useful piece of information! As you keep working with loops, you'll find that you often need the index to solve a problem. Let's use this additional info to fix our function now:"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function boldPassage(word, text) {\n  if ((text.trim().length === 0) || (word.trim().length === 0)) {\n    return null;\n  }\n  const p = document.createElement("p");\n  let textArray = text.split(" ");\n  textArray.forEach(function(element, index) {\n    if (word === element) {\n      const bold = document.createElement("strong");\n      bold.append(element);\n      p.append(bold);\n    } else {\n      p.append(element);\n    }\n    if (index !== (textArray.length - 1)) {\n      p.append(" ");\n    }\n  });\n  return p;\n}\n')),(0,a.kt)("p",null,"We simply add ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," as the second parameter in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," loop. ",(0,a.kt)("strong",{parentName:"p"},"Note that the index ",(0,a.kt)("em",{parentName:"strong"},"must")," be the second parameter. The first parameter is ",(0,a.kt)("em",{parentName:"strong"},"always")," the current element we are looping through.")," We don't have to call the parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," \u2014 but at least for ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),", that's generally going to be the best name for this parameter because it describes exactly what it is."),(0,a.kt)("p",null,"Then we add a new conditional at the end of the loop that uses the new ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (index !== (textArray.length - 1)) {\n  p.append(" ");\n}\n')),(0,a.kt)("p",null,"If the current ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," does not match the index location of the end of the array (represented by ",(0,a.kt)("inlineCode",{parentName:"p"},"textArray.length - 1"),"), then we append a space. Otherwise, we don't add one."),(0,a.kt)("p",null,"So now our ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," user interface function is working correctly. All done, right? Well, no. This function has the same problem that our ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()")," function initially had. We need to account for differences in case, punctuation, and so on. "),(0,a.kt)("p",null,"So we should just write some more tests and complete that functionality, don't you think? Not so fast! In the next lesson, we are going to discuss another essential programming concept called DRY, which is an acronym for ",(0,a.kt)("em",{parentName:"p"},"Don't Repeat Yourself"),". We'll also complete our UI logic by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"boldPassage()")," function and printing the results in our webpage."))}u.isMDXComponent=!0}}]);