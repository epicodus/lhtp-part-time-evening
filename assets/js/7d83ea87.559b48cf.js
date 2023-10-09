"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2996],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||f[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={title:"\ud83d\udcd3 Recursion",id:"recursion",slug:"recursion",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ga_recursion.md"},o=void 0,l={unversionedId:"react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/recursion",id:"react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/recursion",title:"\ud83d\udcd3 Recursion",description:"One common and powerful functional programming technique is called recursion. Recursion is simply a function that calls itself. In this lesson, we will talk about how we can use recursion instead of loops such as forEach or for. Knowing how to write a recursive function is an extremely important part of coding. It is also a common whiteboard question in a technical interview. Even if you aren't asked to write a recursive function in a technical interview, you can solve a problem that involves using a loop both with a traditional loop and recursively \u2014 a great way to show potential employers that you know your stuff!",source:"@site/docs/react/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0ga-recursion.md",sourceDirName:"react/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/recursion",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/recursion",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\ud83d\udcd3 Recursion",id:"recursion",slug:"recursion",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ga_recursion.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Map, Reduce and Filter",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/map-reduce-and-filter"},next:{title:"\ud83d\udcd3 Capstone Timeline, Deadlines, and Brainstorming Homework",permalink:"/react/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/capstone-timeline-deadlines-and-brainstorming-homework"}},s={},c=[{value:"Writing a Recursive Function",id:"writing-a-recursive-function",level:2},{value:"Tail Call Optimization",id:"tail-call-optimization",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One common and powerful functional programming technique is called ",(0,i.kt)("strong",{parentName:"p"},"recursion"),". Recursion is simply a function that calls itself. In this lesson, we will talk about how we can use recursion instead of loops such as ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),". Knowing how to write a recursive function is an extremely important part of coding. It is also a common whiteboard question in a technical interview. Even if you aren't asked to write a recursive function in a technical interview, you can solve a problem that involves using a loop both with a traditional loop ",(0,i.kt)("em",{parentName:"p"},"and")," recursively \u2014 a great way to show potential employers that you know your stuff!"),(0,i.kt)("h2",{id:"writing-a-recursive-function"},"Writing a Recursive Function"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's start by looking at a very simple example of a recursive function. This function will increment a counter 3 times. We could easily do this with a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let counter = 0\nfor (let i = 0; i < 3 ; i++ ) {\n  counter += 1\n}\n")),(0,i.kt)("p",null,"Once this loop is complete, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("p",null,"Now let's solve this same problem recursively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const incrementCounter = (counter) => {\n  if (counter >= 3) {\n    return counter;\n  } else {\n    console.log(counter);\n    return incrementCounter(counter + 1);\n  }\n}\n\nincrementCounter(0);\n")),(0,i.kt)("p",null,"Our recursive function includes two conditionals. The first includes what is called the ",(0,i.kt)("strong",{parentName:"p"},"base case"),". This is the final condition where our function will stop calling itself. If we don't have a base case, a recursive function will call itself forever."),(0,i.kt)("p",null,"The second conditional includes the recursion itself. Each time this conditional is reached, the function will call itself. The argument we pass in is ",(0,i.kt)("inlineCode",{parentName:"p"},"counter + 1")," because we want the new value of the counter to be incremented by one."),(0,i.kt)("p",null,"We've also added a ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," so you can see the incrementing value in the console. Now, if you put this recursive function in the terminal, you'll see each value logged when you call ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementCounter(0);"),"."),(0,i.kt)("p",null,"However, be careful! Recursive functions should always include one more thing: a ",(0,i.kt)("strong",{parentName:"p"},"termination case"),". This case determines what the function should do if something goes wrong. For instance, if we were to pass a string into this function as it's currently written, the function will create an infinite loop because the function will just concatenate another ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to the string each time it's called."),(0,i.kt)("p",null,"Let's add a termination condition now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const incrementCounter = (counter) => {\n  // This is the termination condition.\n  if (isNaN(counter)) {\n    return;\n  }\n  if (counter >= 3) {\n    return counter;\n  } else {\n    console.log(counter);\n    return incrementCounter(counter + 1);\n  }\n}\n")),(0,i.kt)("p",null,"As we can see, we added a conditional to see if ",(0,i.kt)("inlineCode",{parentName:"p"},"counter")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),". "),(0,i.kt)("p",null,"To recap, there are three main parts to a recursive function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base case"),": The final condition of a successfully called recursive function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Termination case"),": A conditional that's called if something goes wrong. This prevents an infinite loop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recursion"),": This part of the function is where the magic happens and the function calls itself.")),(0,i.kt)("p",null,"There's another very important aspect of recursive functions that can be difficult to understand at first. Each time we call ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementCounter()")," again, we are still in the process of calling the previous function. When we are calling the functon for the third time, both the first and second function call are still in process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"incrementCounter() {\n  // This call will complete last.\n  return incrementCounter() {\n    // This call will complete second.\n    return incrementCounter() {\n      // This call will complete first.\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Note the order that the functions above will be called in. This is because all functions in process go on the JavaScript stack. The stack is a place where all the actions that need to be completed are stored. The JS stack works on the principle of ",(0,i.kt)("strong",{parentName:"p"},"LIFO"),', which means "last in, first out." This is why the innermost function in the example above will complete first while the outermost function will complete last.'),(0,i.kt)("p",null,"Let's look at another implementation of a recursive function. In the process, the concept of LIFO should become clearer. We'll create a function that recursively does the same thing as ",(0,i.kt)("inlineCode",{parentName:"p"},"reverse()"),". When we input a word into our function, it will be returned to us backwards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const recurseReverse = (string) => {\n  if (string === "") {\n    return "";\n  } else {\n    return recurseReverse(string.substring(1)) + string[0];\n  }\n}\n')),(0,i.kt)("p",null,"In the example above, our ",(0,i.kt)("inlineCode",{parentName:"p"},"recurseReverse()")," function takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," as an argument. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),", it will return ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),". This is our base case. Otherwise, it will call ",(0,i.kt)("inlineCode",{parentName:"p"},"recurseReverse()")," again. We will pass ",(0,i.kt)("inlineCode",{parentName:"p"},"string.substring(1)) + string[0]")," into our function. In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"substring()")," method will return all characters in the string except for the first (denoted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," passed in as an argument)."),(0,i.kt)("p",null,"Let's see what will happen if we call ",(0,i.kt)("inlineCode",{parentName:"p"},'recurseReverse("fern")'),"."),(0,i.kt)("p",null,"We call our function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'string = "fern"\n')),(0,i.kt)("p",null,"We reach our return statement and call ",(0,i.kt)("inlineCode",{parentName:"p"},"recurseReverse()")," again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'recurseReverse("ern") + "f";\n')),(0,i.kt)("p",null,"This is ",(0,i.kt)("strong",{parentName:"p"},"not")," the same as returning ",(0,i.kt)("inlineCode",{parentName:"p"},'"ern" + "f"'),", so don't get tripped up here. Also, remember that we still haven't completed any of our functions calls yet \u2014 we are still recursively calling the function and adding a letter to the end each time."),(0,i.kt)("p",null,"We call it yet again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'recurseReverse("rn") + "e";\n')),(0,i.kt)("p",null,"The third time through, we get this result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'recurseReverse("n") + "r";\n')),(0,i.kt)("p",null,"The next time, we will get the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'recurseReverse("") + "n";\n')),(0,i.kt)("p",null,"This alerts our function to stop recursing and to return the string ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,i.kt)("p",null,"We now have multiple nested function calls. Our innermost function call will return first, followed by the second-innermost function call, and so on until we reach the outermost function call. Each function is returning a letter or an empty string like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'recurseReverse() {\n  return "f";\n  recurseReverse() {\n    return "e";\n    recurseReverse() {\n      return "r";\n      recurseReverse() {\n        return "n";\n        recurseReverse() {\n          return "";\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,'Because the JavaScript stack is "last in, first out," the letters will be concatenated in this order:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'"" + "n" + "r" + "e" + "f"\n')),(0,i.kt)("p",null,"Because we reached our base case (an empty string), our function stops calling itself and returns an empty string. If we didn't have that base case, our function would keep calling itself until the maximum callstack is exceeded."),(0,i.kt)("p",null,'In short, "fern" is spelled backwards.'),(0,i.kt)("h3",{id:"tail-call-optimization"},"Tail Call Optimization"),(0,i.kt)("p",null,"If you accidentally create an infinite loop, you'll get the following error: ",(0,i.kt)("inlineCode",{parentName:"p"},"Maximum call stack size exceeded"),". This is because there is a limit to how large the stack can be."),(0,i.kt)("p",null,"The way JavaScript handles the call stack is a problem when it comes to using recursive functions. This is because the stack keeps getting bigger and bigger until the base case is reached. For more complex equations, the stack will get too big and we'll get an error. Even if the stack doesn't get big enough to throw an error, a recursive function will still be less performant for this reason."),(0,i.kt)("p",null,"Functional languages deal with this issue by using what is called ",(0,i.kt)("strong",{parentName:"p"},"tail call optimization"),". With tail call optimization, the return value of a function is computed instead of allocating the entire function to the stack. This saves memory and makes recursive functions much more efficient. ES6 adds functionality for tail call optimization, but unfortunately it doesn't work with browsers \u2014 and it's not clear if browsers will ever add support for this. Node, on the other hand, can utilize tail call optimization."),(0,i.kt)("p",null,"There is an alternative that is beyond the scope of this lesson \u2014 writing what is called a ",(0,i.kt)("strong",{parentName:"p"},"trampoline function"),". A trampoline function wraps a recursive function in a loop and breaks it down so each function isn't heaped on the stack."),(0,i.kt)("p",null,"At this point, we are ready to start writing our own recursive functions. The principle of LIFO should also be clear. Writing recursive functions is hard at first \u2014 keep practicing! When you need to iterate in your applications during this course section, try using recursion in addition to the usual suspects such as ",(0,i.kt)("inlineCode",{parentName:"p"},"map()"),"."))}f.isMDXComponent=!0}}]);