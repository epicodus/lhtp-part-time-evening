"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[63729],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Further Exploration: Creating a Custom React Environment",id:"further-exploration-creating-a-custom-react-environment",slug:"further-exploration-creating-a-custom-react-environment",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_further_exploration_creating_our_own_react_environment.md"},i=void 0,c={unversionedId:"react/react-with-apis-part-2/further-exploration-creating-a-custom-react-environment",id:"react/react-with-apis-part-2/further-exploration-creating-a-custom-react-environment",title:"\ud83d\udcd3 Further Exploration: Creating a Custom React Environment",description:"We've used create-react-app to build React applications because it's easy to get started and we can bypass the additional work of setting up our own webpack configuration. create-react-app comes with a lot of tools right out of the box and we can always add additional libraries as needed.",source:"@site/docs/react/11_react-with-apis-part-2/2a-further-exploration-creating-our-own-react-environment.md",sourceDirName:"react/11_react-with-apis-part-2",slug:"/react/react-with-apis-part-2/further-exploration-creating-a-custom-react-environment",permalink:"/react/react-with-apis-part-2/further-exploration-creating-a-custom-react-environment",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udcd3 Further Exploration: Creating a Custom React Environment",id:"further-exploration-creating-a-custom-react-environment",slug:"further-exploration-creating-a-custom-react-environment",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2a_further_exploration_creating_our_own_react_environment.md"},sidebar:"react",previous:{title:"\u270f\ufe0f React with API (Multi-Week Project)",permalink:"/react/react-with-apis-part-2/react-with-api-multi-week-project"},next:{title:"\ud83d\udcd3 Further Exploration: Data Visualization",permalink:"/react/react-with-apis-part-2/further-exploration-data-visualization"}},l={},s=[{value:"Building an Environment from Scratch",id:"building-an-environment-from-scratch",level:3},{value:"Ejecting from create-react-app",id:"ejecting-from-create-react-app",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've used create-react-app to build React applications because it's easy to get started and we can bypass the additional work of setting up our own webpack configuration. create-react-app comes with a lot of tools right out of the box and we can always add additional libraries as needed."),(0,r.kt)("p",null,"However, create-react-app has its drawbacks. As developers, we have less control over our environment. The inner workings of our environment remain opaque."),(0,r.kt)("p",null,"We have two options if we want to customize our environment ourselves:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can build a webpack environment from scratch and build our React application manually."),(0,r.kt)("li",{parentName:"ul"},"We can take an application built with create-react-app (either a new one or one we've already been working on) and run the ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run eject")," command, then configure it further.")),(0,r.kt)("h3",{id:"building-an-environment-from-scratch"},"Building an Environment from Scratch"),(0,r.kt)("p",null,"In general, developers want to avoid spending too much time building out an environment \u2014 instead, we'd rather be coding. However, there are plenty of valid reasons to have our own custom React environment. Many React developers prefer not to use create-react-app, which is difficult to customize. In this case, the best approach is to do something similar to what we did in Intermediate JavaScript \u2014 create a basic webpack environment and then reuse it for our projects, adding libraries only when they're required. "),(0,r.kt)("p",null,"At a minimum, a custom environment will need React, a basic webpack configuration, and Babel, including Babel presets for JSX. At that point, you can then build out your configuration to use other plug-ins and loaders as needed. The process isn't much different from the webpack set up we've done in the past (other than needing to use specific Babel presets to transpile JSX to vanilla JavaScript)."),(0,r.kt)("p",null,"There are many tutorials online for creating a React environment from scratch. However, you already have the tools to set up a custom environment from Intermediate JavaScript. If you want to build your own environment, you can follow along with lessons from ",(0,r.kt)("a",{parentName:"p",href:"/intermediate-javascript/test-driven-development-and-environments-with-javascript/introduction-to-webpack"},"Intermediate JavaScript")," \u2014 or find a tutorial online specific to webpack environments with React. You can also eject a create-react-app application to get a sense of what libraries you may or may not need."),(0,r.kt)("p",null,"at the very least, you'll need the following ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-react"},"Babel preset")," to transpile JSX code."),(0,r.kt)("h3",{id:"ejecting-from-create-react-app"},"Ejecting from create-react-app"),(0,r.kt)("p",null,"We learned about the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run eject")," command during the React Fundamentals course section. If you haven't had the chance yet, now would be a good time to eject an application made with create-react-app to see what's going on under the hood. This is a great opportunity to get a better sense of the tools at our disposal."),(0,r.kt)("p",null,"There are several situations where it's useful to use ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run eject"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Right after a project is built with create-react-app \u2014 and with the intention of learning more about what create-react-app offers"),(0,r.kt)("li",{parentName:"ul"},"At a point in a project's development where we have no choice but to eject in order to build our project further")),(0,r.kt)("p",null,"In general, it's not a good idea to eject an application because there's no going back. In the first use case listed above, we have nothing to lose \u2014 we're just trying to learn more about create-react-app and different external libraries."),(0,r.kt)("p",null,"In the second use case, we've reached a point of no return and we simply can't use create-react-app anymore. Even then, we should carefully consider whether there's a smaller tweak that we can use so we don't need to eject."),(0,r.kt)("p",null,"If you plan to build your own custom environment using webpack, we don't recommend building a new application with create-react-app and then immediately altering it. You'll still end up with all the bloat from create-react-app \u2014 and fewer benefits of streamlining your own environment. Instead, consider building your environment from scratch while using an ejected create-react-app application as a reference point. You'll have a sense of which libraries to use and which versions work best together."),(0,r.kt)("p",null,"Once you have a bare bones development environment that correctly transpiles JSX, includes a development server, and other features you might consider necessary (such as linting), either start a new repo or a new branch for more custom configurations. Eventually, you'll end up with one and possibly more configurations tailor-made to specific use cases."),(0,r.kt)("p",null,"There's a final option that combines a custom environment with create-react-app. We can fork ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts")," and create our own custom configuration. This option is a bit more advanced so we won't cover it in detail here \u2014 but there are numerous tutorials online that describe how to do it."),(0,r.kt)("p",null,"Even if you plan to continue using create-react-app, we recommend tinkering with a custom environment. Many workplaces will have custom environments. If you have a better understanding of creating this kind of environment for React now, it'll be one less thing to potentially overwhelm you at an internship or new job."))}d.isMDXComponent=!0}}]);