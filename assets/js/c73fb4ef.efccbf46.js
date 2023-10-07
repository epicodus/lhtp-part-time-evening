"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[62197],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const s={title:"Introduction to Hooks with the useState Hook",id:"introduction-to-hooks-with-the-usestate-hook",slug:"introduction-to-hooks-with-the-usestate-hook",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0b_intro_to_hooks_useState_hook.md"},r=void 0,i={unversionedId:"react/react-with-nosql/introduction-to-hooks-with-the-usestate-hook",id:"react/react-with-nosql/introduction-to-hooks-with-the-usestate-hook",title:"Introduction to Hooks with the useState Hook",description:"In this course section, we'll be leaving behind class components to focus on a purely functional approach to developing React components. To do this, we'll need to use special functions that are called hooks. As the React docs explain,",source:"@site/docs/react/8_react-with-nosql/0b-intro-to-hooks-useState-hook.md",sourceDirName:"react/8_react-with-nosql",slug:"/react/react-with-nosql/introduction-to-hooks-with-the-usestate-hook",permalink:"/react/react-with-nosql/introduction-to-hooks-with-the-usestate-hook",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Introduction to Hooks with the useState Hook",id:"introduction-to-hooks-with-the-usestate-hook",slug:"introduction-to-hooks-with-the-usestate-hook",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0b_intro_to_hooks_useState_hook.md"},sidebar:"react",previous:{title:"React with NoSQL Objectives",permalink:"/react/react-with-nosql/react-with-nosql-objectives"},next:{title:"Running Side Effects with the useEffect Hook",permalink:"/react/react-with-nosql/running-side-effects-with-the-useeffect-hook"}},l={},u=[{value:"The <code>useState</code> Hook",id:"the-usestate-hook",level:2},{value:"<code>useState</code> As Compared To <code>this.state</code>",id:"usestate-as-compared-to-thisstate",level:3},{value:"Multiple State Variables",id:"multiple-state-variables",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this course section, we'll be leaving behind class components to focus on a purely functional approach to developing React components. To do this, we'll need to use special functions that are called ",(0,a.kt)("strong",{parentName:"p"},"hooks"),". ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-overview.html"},"As the React docs")," explain,"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hooks are functions that let you \u201chook into\u201d React state and lifecycle features from function components. Hooks don\u2019t work inside classes \u2014 they let you use React without classes.")),(0,a.kt)("p",null,"Hooks were released in version 16.8 of React as a solution to many pain points for React developers. We can boil down these pain points into two main issues: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How can we use React state and lifecycle features in a function component without having to refactor it into a class component? "),(0,a.kt)("li",{parentName:"ol"},"Is there an easier way to ",(0,a.kt)("em",{parentName:"li"},"re"),"use stateful logic in multiple places? ")),(0,a.kt)("p",null,"The advent of hooks solved both of these issues. "),(0,a.kt)("p",null,"But before we get too much into the weeds of React's motivation to create hooks, let's introduce ourselves to the basics of hooks by learning how to use React's ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook. "),(0,a.kt)("p",null,"In this course section, we'll also learn about the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. Then, in the next course section, we'll learn how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useReducer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext")," hooks. "),(0,a.kt)("h2",{id:"the-usestate-hook"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"useState")," Hook"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll learn to use React's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook by looking at an example of a simple counter app. This example includes a button that increases the value of a counter, a button to show and hide, and a display of the counter's value. You do not need to code along with this lesson, though you are welcome to do so."),(0,a.kt)("p",null,"We'll start by creating a new app so we can implement ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),". Navigate to your desktop in your terminal, and input this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$ npx create-react-app intro-to-hooks\n")),(0,a.kt)("p",null,"Next, replace the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.js")," with the following code:"),(0,a.kt)("div",{class:"filename"},"src/App.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css';\nimport Counter from './Counter';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"We'll keep the styling with the class ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," that centers the content on the page. "),(0,a.kt)("p",null,"Next, create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter.js")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder with the following code:"),(0,a.kt)("div",{class:"filename"},"src/Counter.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState } from 'react';\n\nfunction Counter() {\n  return(\n    <React.Fragment>\n    </React.Fragment>\n  )\n}\n\nexport default Counter;\n")),(0,a.kt)("p",null,"Here we've set up a basic function component and we've imported the ",(0,a.kt)("inlineCode",{parentName:"p"},"{ useState }")," hook from react. Now we're ready to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," function."),(0,a.kt)("div",{class:"filename"},"src/Counter.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nfunction Counter() {\n  const [counter, setCounter] = useState(0);\n\n  return(\n    <React.Fragment>\n    </React.Fragment>\n  )\n}\n\n...\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook returns an array that we destructure into two variables. The first variable contains the state value, and the second variable is a function that we can use to set the state value. We could also rewrite ",(0,a.kt)("inlineCode",{parentName:"p"},"const [counter, setCounter] = useState(0);")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  const counterState = useState(0);\n  const counter = counterState[0];\n  const setCounter = counterState[1];\n")),(0,a.kt)("p",null,"However, that's not common practice."),(0,a.kt)("p",null,"As far as naming conventions, the first variable should be named after the state the variable represents. Since we're setting up a counter, we name our state ",(0,a.kt)("inlineCode",{parentName:"p"},"counter"),". The second variable should always start with ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," followed by the first variable, like we have with ",(0,a.kt)("inlineCode",{parentName:"p"},"setCounter"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook also takes an argument, which will set the state property's initial value. We can initialize this with a number, a boolean, a string, an object, or even ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". For our counter, we initialize ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," with the number 0."),(0,a.kt)("p",null,"Now we're ready to actually utilize this new functionality. We'll create a button to update the value of the counter \u2014 and we'll also display the value of the counter as well. "),(0,a.kt)("div",{class:"filename"},"src/Counter.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n\nfunction Counter() {\n  const [counter, setCounter] = useState(0);\n\n  return (\n    <React.Fragment>\n      <h1>{counter}</h1>\n      <button onClick={() => setCounter(counter + 1)}>Count!</button>\n    </React.Fragment>\n  );\n}\n\n...\n")),(0,a.kt)("p",null,"We can simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," using JSX, which will display that property's current value. We also create an ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," listener so that a user can click a button to trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"setCounter")," method. We need this to be a callback function so we can pass in an argument, otherwise it'll run on page load. This will replace the current value of ",(0,a.kt)("inlineCode",{parentName:"p"},"counter"),", overwriting its previous value."),(0,a.kt)("p",null,"With just a couple of lines, we have local state in a function component! Very cool!"),(0,a.kt)("h3",{id:"usestate-as-compared-to-thisstate"},(0,a.kt)("inlineCode",{parentName:"h3"},"useState")," As Compared To ",(0,a.kt)("inlineCode",{parentName:"h3"},"this.state")),(0,a.kt)("p",null,"Now, let's compare what our functional ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," component would look like as a class component. We won't add this to our ",(0,a.kt)("inlineCode",{parentName:"p"},"intro-to-hooks")," application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Counter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      counter: 0\n    };\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <h1>{this.state.counter}</h1>\n        <button onClick={() => this.setState({counter: this.state.counter + 1})}>Count!</button>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default Counter;\n")),(0,a.kt)("p",null,"As we can see, instead of storing ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," as a slice of state in our state object, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n")),(0,a.kt)("p",null,"We instead store state in a variable, as returned by our ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," function: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const [counter, setCounter] = useState(0);\n")),(0,a.kt)("p",null,"And instead of updating state with the ",(0,a.kt)("inlineCode",{parentName:"p"},"this.setState")," method, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => this.setState({counter: this.state.counter + 1})}>Count!</button>\n")),(0,a.kt)("p",null,"We instead use ",(0,a.kt)("inlineCode",{parentName:"p"},"setCounter"),", like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => setCounter(counter + 1)}>Count!</button>\n")),(0,a.kt)("h3",{id:"multiple-state-variables"},"Multiple State Variables"),(0,a.kt)("p",null,"Let's say we want to add another property to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," component's local state. We could approach that by doing the following:"),(0,a.kt)("div",{class:"filename"},"src/Counter.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\n...\nfunction Counter() {\n\n  const [bundle, setBundle] = useState({"hidden": false, "counter": 0});\n\n  return (\n    <React.Fragment>\n      {bundle.hidden ? <h1>Count Hidden</h1> : <h1>{bundle.counter}</h1>} \n\n      <button onClick={() => setBundle({...bundle, "counter": bundle.counter +1})}>Count!</button>\n      <button onClick={() => setBundle({...bundle, "hidden": !bundle.hidden})}>Hide/Show</button>\n    </React.Fragment>\n  );\n}\n\n...\n')),(0,a.kt)("p",null,"React's ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook accepts any data type as an argument, including objects. So just like in the above example, we could create as many properties as we like and call on them using dot notation. "),(0,a.kt)("p",null,"But while the above approach works, it isn't recommended. The React documentation instead recommends creating multiple instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," and calling on them as separate variables. Take a look at this approach instead:  "),(0,a.kt)("div",{class:"filename"},"src/Counter.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n...\nfunction Counter() {\n\n  const [counter, setCounter] = useState(0);\n  const [hidden, setHidden] = useState(false);\n\n  return (\n    <React.Fragment>\n      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}\n      <button onClick={() => setCounter(counter + 1)}>Count!</button>\n      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>\n    </React.Fragment>\n  );\n}\n\n...\n")),(0,a.kt)("p",null,"It's not only easier to read the state variable declarations, it's easier to use the state in our JSX, because each state variable has a separate name and updater function. This structure puts into practice the design principle called separation of concerns. "),(0,a.kt)("p",null,"That said, it may just make more sense in your application to combine two state slices into one object that is created and managed via ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),", just like we saw in this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const [bundle, setBundle] = useState({"hidden": false, "counter": 0});\n')),(0,a.kt)("p",null,"If you opt for this, just know that the ",(0,a.kt)("em",{parentName:"p"},"setState")," function (i.e.: ",(0,a.kt)("inlineCode",{parentName:"p"},"setBundle"),") replaces the previous state variable, instead of merging the new state with the old state as with the ",(0,a.kt)("inlineCode",{parentName:"p"},"this.setState")," method. That's why when we want to update the count within our ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle")," state, we need to include all values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setBundle")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<button onClick={() => setBundle({...bundle, "counter": bundle.counter +1})}>Count!</button>\n')),(0,a.kt)("p",null,"As we can see, we use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#description"},"spread syntax")," to copy over the object saved in ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle"),", and then specify that we want to update the ",(0,a.kt)("inlineCode",{parentName:"p"},'"counter"')," key."),(0,a.kt)("p",null,"In contrast, if the ",(0,a.kt)("em",{parentName:"p"},"Count!")," button only ran this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<button onClick={() => setBundle({"counter": bundle.counter +1})}>Count!</button>\n')),(0,a.kt)("p",null,"Then we'd have no more ",(0,a.kt)("inlineCode",{parentName:"p"},'"hidden"')," key and our application would break."),(0,a.kt)("p",null,"So, with this lesson we've learned how to use the very useful ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook, which means we can now use state in our function components. But what about our component lifecycle methods? What if I want to run a side effect when my component mounts or updates? In the next lesson, we'll learn about the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook which gives us the same ability to run side effects in function components as lifecycle methods let us do in class components. "),(0,a.kt)("p",null,"After that, we'll review best practices for using hooks. Then, we'll move onto updating our Help Queue application to use hooks."),(0,a.kt)("p",null,"If you'd like to learn more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook, check the official ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"React Docs on the ",(0,a.kt)("inlineCode",{parentName:"a"},"useState")," hook"),"."))}h.isMDXComponent=!0}}]);