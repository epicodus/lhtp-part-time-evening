"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[41051],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 ES6 Arrow Notation",id:"es6-arrow-notation",slug:"es6-arrow-notation",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2d_arrow_functions.md"},r=void 0,s={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/es6-arrow-notation",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/es6-arrow-notation",title:"\ud83d\udcd3 ES6 Arrow Notation",description:"Arrow functions are one of the most popular and useful new features in ES6. In fact, we've already been using arrow functions with Jest. Now it's time to delve more deeply into why they are useful and how we can use them in our code. There are a few reasons why arrow functions are so popular. We'll be focusing primarily on one of these reasons: arrow functions change the way this is bound inside of a nested function.",source:"@site/docs/intermediate-javascript/6_test-driven-development-and-environments-with-javascript-part-2/2d-arrow-functions.md",sourceDirName:"intermediate-javascript/6_test-driven-development-and-environments-with-javascript-part-2",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/es6-arrow-notation",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/es6-arrow-notation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udcd3 ES6 Arrow Notation",id:"es6-arrow-notation",slug:"es6-arrow-notation",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2d_arrow_functions.md"},sidebar:"intermediate-javascript",previous:{title:"\u270f\ufe0f Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 1",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/weekday-calculator-haiku-creator-rpg-week-long-project---part-1"},next:{title:"\ud83d\udcd3 ES6 Template Literals",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/es6-template-literals"}},l={},p=[{value:"Arrow Functions and <code>this</code>",id:"arrow-functions-and-this",level:2},{value:"When to Use Arrow Functions",id:"when-to-use-arrow-functions",level:3},{value:"More Arrow Function Examples",id:"more-arrow-function-examples",level:3},{value:"Unnamed Functions",id:"unnamed-functions",level:4},{value:"Named Functions",id:"named-functions",level:4},{value:"Syntactic Sugar for Arrow Notation",id:"syntactic-sugar-for-arrow-notation",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Arrow functions are one of the most popular and useful new features in ES6. In fact, we've already been using arrow functions with Jest. Now it's time to delve more deeply into why they are useful and how we can use them in our code. There are a few reasons why arrow functions are so popular. We'll be focusing primarily on one of these reasons: arrow functions change the way ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is bound inside of a nested function."),(0,o.kt)("h2",{id:"arrow-functions-and-this"},"Arrow Functions and ",(0,o.kt)("inlineCode",{parentName:"h2"},"this")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," changes based on where we are calling it in our code, but it always represents the object inside of which our code is executing. ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," can be a very confusing topic in JavaScript, especially for beginners, and it's not always clear what ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is bound to \u2014 meaning, what object ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," actually represents. You may have dealt with this issue in Introduction to Programming; it's very common (and frustrating) for new developers to try to use ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", only to find that it's ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"The best way to simplify ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is to think of it within the context of object-oriented programming. Specifically, we should probably only use ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," if we're calling a function on a specific object."),(0,o.kt)("p",null,"In fact, this is what we commonly do inside of classes. (If classes still feel like a weird new concept, you can also think of this as being similar to what we've done with prototype methods in the past.)"),(0,o.kt)("p",null,"Let's look at some code that isn't going to work as expected. The reason, as you might guess, is related to ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),". Go ahead and put the following code in the DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Box {\n\n  constructor() {\n    this.stuff = [];\n  }\n\n  addJunk(array) {\n    console.log(this);\n    array.forEach(function(thing) {\n      this.stuff.push(thing);\n    });\n  }\n}\n")),(0,o.kt)("p",null,"In this example, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," class. It has one property: ",(0,o.kt)("inlineCode",{parentName:"p"},"this.stuff"),", an empty array."),(0,o.kt)("p",null,"Next, we have a prototype method ",(0,o.kt)("inlineCode",{parentName:"p"},"Box.prototype.addJunk(array)"),", but written using ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," syntax. It seems like a straightforward method \u2014 we pass in an array and then for each element in the array, we push that element into ",(0,o.kt)("inlineCode",{parentName:"p"},"this.stuff"),", the property of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," object."),(0,o.kt)("p",null,"Well, if we try it in the console, we'll see that ",(0,o.kt)("inlineCode",{parentName:"p"},"Box.prototype.addJunk(array)")," doesn't work correctly. Add this code in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> let box = new Box();\n> box.addJunk(["broken pencils", "busted rubber bands", "checkers pieces"]);\n')),(0,o.kt)("p",null,"We'll get the following ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Box\xa0{stuff: Array(0)}\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," message confirms that ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is set to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," object, which before the loop to add the new Junk has nothing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stuff")," property. This is what we expect to see."),(0,o.kt)("p",null,"However, we'll also get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught TypeError: Cannot read property 'stuff' of undefined\n")),(0,o.kt)("p",null,"What just happened? When our code tried to read ",(0,o.kt)("inlineCode",{parentName:"p"},"this.stuff")," inside the loop, it threw an error because ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"And why would that happen? We just used a ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(this);")," to verify that ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is exactly what we thought it was, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," object."),(0,o.kt)("p",null,"However, we used ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(this)")," ",(0,o.kt)("em",{parentName:"p"},"outside")," of the loop. This is a weird thing about JavaScript. We entered a loop and ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," lost its scope. What gives? Well, in JavaScript, every time a function is created, so too is a new scope. So, it's not that we've entered a loop that's causing ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to be undefined, it's because we're calling ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," within the callback function (with the new scope!) that we pass into ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),". The problem with the scope of the callback function is that it's not tied to any object, so ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," ends up being ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,"To reiterate this and see the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," in the context of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," object, we've added commentary and a few additional ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," statements that describe what ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," represents at every level of our script. You can read through the following commentary, or copy and paste the following code into your DevTools console to try it out. The last message you'll see is the same as before: a TypeError about ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," being ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \'this\' is set to JavaScript global object, which\n// is the window object when run in the browser\nconsole.log("this at the top level of our script", this);\n\nclass Box {\n\n  constructor() {\n    // \'this\' is the Box object\n    console.log("this in the constructor", this);\n    this.stuff = [];\n  }\n\n  addJunk(array) {\n    // \'this\' is the Box object\n    console.log("this in addJunk method", this);\n\n    array.forEach(function(thing) {\n      // \'this\' is undefined, because \n      // the callback function does not belong to \n      // any object type\n      console.log("this in addJunk\'s forEach loop callback", this);\n      this.stuff.push(thing);\n    });\n  }\n}\nconst newBox = new Box();\nnewBox.addJunk(["broken pencils", "busted rubber bands", "checkers pieces"]);\n')),(0,o.kt)("p",null,"Well, this is not ideal at all. We want ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to represent our ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," object within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," callback function!"),(0,o.kt)("p",null,"Traditionally (before arrow notation came along, that is), JavaScript developers dealt with the issue by manually binding ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to the object they wanted it to represent. There are several ways to bind ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", but here's the easiest approach:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"addJunk(array) {\n  let that = this;\n  array.forEach(function(thing) {\n    that.stuff.push(thing);\n  });\n}\n")),(0,o.kt)("p",null,"We declare a variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"that")," inside our function and set it to the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),". The inner function has access to ",(0,o.kt)("inlineCode",{parentName:"p"},"that"),", which is just a reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", and so we can push stuff into the box. This works because the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"that")," won't change until we tell it to, whereas the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," always depends on where it is scoped (where in our code it's being called from)."),(0,o.kt)("p",null,"This approach is a hack, though, and JavaScript's default behavior really isn't great. Do we really want to use the above hack any time there's a callback function inside of an object's method?"),(0,o.kt)("p",null,"Fortunately, we can fix this problem by using arrow notation. With arrow notation we can create an ",(0,o.kt)("strong",{parentName:"p"},"arrow function expression"),", which is also commonly called an ",(0,o.kt)("strong",{parentName:"p"},"arrow function"),". Arrow functions do not perform any binding of ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", which means that ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is set to the scope that the arrow function was defined in. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"Box.prototype.addJunk()")," method, this means that inside of an arrow function, ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," will remain unchanged and still set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," object.  "),(0,o.kt)("p",null,"Let's update ",(0,o.kt)("inlineCode",{parentName:"p"},"Box.prototype.addJunk()")," to use an arrow function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"addJunk(array) {\n  // The arrow function is defined in the scope of \n  // the Box.prototype.addJunk() method, which \n  // belongs to the Box object.\n  array.forEach((thing) => {\n    // The arrow function's own scope is anywhere\n    // inside of the arrow function.\n    // 'this' is not bound to the arrow function's own scope, but \n    // instead to the scope in which the arrow function was defined,\n    // the Box object.\n    this.stuff.push(thing);\n  });\n}\n")),(0,o.kt)("p",null,"And this is the arrow function, separated out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(thing) => {\n  this.stuff.push(thing);\n}\n")),(0,o.kt)("p",null,"What we've done here is taken away the ",(0,o.kt)("inlineCode",{parentName:"p"},"function()")," and replaced it with ",(0,o.kt)("inlineCode",{parentName:"p"},"() =>"),". Parameters still go inside the parentheses as needed."),(0,o.kt)("h3",{id:"when-to-use-arrow-functions"},"When to Use Arrow Functions"),(0,o.kt)("p",null,"So when should we use arrow notation instead of the notation we've used in the past? Well, it's becoming increasingly common to use arrow notation regardless of whether you're concerned about binding ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," or not. That's because arrow syntax is more concise and because its behavior is predictable and helps ensure that our code works how we'd expect it to."),(0,o.kt)("p",null,"However, ",(0,o.kt)("strong",{parentName:"p"},"you should never use arrow notation to define an object's method or an object's constructor function.")," Using arrow functions in any other application, or inside of an object's method is acceptable. To review a list of all differences between other functions and arrow functions, visit ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"the MDN documentation"),"."),(0,o.kt)("h3",{id:"more-arrow-function-examples"},"More Arrow Function Examples"),(0,o.kt)("p",null,"So how exactly does this syntax look in situations other than with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),"?"),(0,o.kt)("p",null,"Here are some examples:"),(0,o.kt)("h4",{id:"unnamed-functions"},"Unnamed Functions"),(0,o.kt)("p",null,"Here's an unnamed function without arrow notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function (name) {\n  return "hi " + name;\n}\n')),(0,o.kt)("p",null,"Here's the same function with arrow notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(name) => {\n  return "hi " + name;\n}\n')),(0,o.kt)("h4",{id:"named-functions"},"Named Functions"),(0,o.kt)("p",null,"How about for a named function? This is how we've done it so far:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function greeting(name) {\n  return "hi " + name;\n}\n')),(0,o.kt)("p",null,"To do this with arrow notation, we need to save the function in a variable like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const greeting = (name) => {\n  return "hi " + name;\n};\n')),(0,o.kt)("p",null,"This may look pretty strange at first, but it will become more familiar over time, and we will revisit arrow functions in React."),(0,o.kt)("p",null,"You can continue to use function declarations or function expressions instead of arrow function expressions. However, the one case where you must use an arrow function is when you need the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to not change when a new scope is created by a function inside of an object's method. "),(0,o.kt)("p",null,"And again, you should not use arrow functions to create constructors or object methods."),(0,o.kt)("h3",{id:"syntactic-sugar-for-arrow-notation"},"Syntactic Sugar for Arrow Notation"),(0,o.kt)("p",null,"It's also possible to use arrow notation to make our code even more concise, though it will look even more abstract as a result. Specifically, if the body of the function is a single line, we can omit both the brackets ",(0,o.kt)("em",{parentName:"p"},"and")," the return keyword. Let's take a look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const greeting = name => "hi " + name;\n')),(0,o.kt)("p",null,"We can even omit the parentheses around the example above as long as there's just one parameter. "),(0,o.kt)("p",null,"While this is very concise, it can be harder to read and understand, especially for new developers, so don't use this syntax unless you feel very comfortable with it. In fact, there are a few gotchas with this syntax."),(0,o.kt)("p",null,"If the function has two arguments, you can't omit the parentheses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const greeting = (greeting, name) => greeting + " " + name;\n')),(0,o.kt)("p",null,"And if the code is multi-line, you can't omit the brackets ",(0,o.kt)("em",{parentName:"p"},"or")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," keyword:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const greeting = (greeting, name) => {\n  const uppercasedGreeting = greeting.toUpperCase();  \n  const uppercasedName = name.toUpperCase();\n  return uppercasedGreeting + " " + uppercasedName;\n};\n')),(0,o.kt)("p",null,"This is a contrived example because we could easily reduce this function to one line. The point is that as soon as we have multiple lines in the body of a function using arrow notation, we need to use brackets and the ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," keyword."),(0,o.kt)("p",null,"For more information on arrow notation, see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"Arrow function expressions in the Mozilla documentation"),"."),(0,o.kt)("p",null,"You will see arrow notation a lot in documentation and in JavaScript libraries, like Jest \u2014 and the longer you code in JavaScript, the more likely you are to use it regularly. We recommend getting familiar with arrow notation and using it regularly once you are comfortable with it."))}d.isMDXComponent=!0}}]);