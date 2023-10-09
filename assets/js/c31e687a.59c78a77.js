"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29002],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),o=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Composition",id:"composition",slug:"composition",hide_table_of_contents:!0,sidebar_position:26,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0k_composition.md"},i=void 0,s={unversionedId:"react/functional-programming-with-javascript/composition",id:"react/functional-programming-with-javascript/composition",title:"\ud83d\udcd3 Composition",description:"Functional programming favors composition, not inheritance. In fact, composition is an extremely important computer science concept and it is commonly applied in object-oriented programming as well.",source:"@site/docs/react/2_functional-programming-with-javascript/0k-composition.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/composition",permalink:"/react/functional-programming-with-javascript/composition",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"\ud83d\udcd3 Composition",id:"composition",slug:"composition",hide_table_of_contents:!0,sidebar_position:26,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0k_composition.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Spread Operator",permalink:"/react/functional-programming-with-javascript/spread-operator"},next:{title:"\ud83d\udcd3 State",permalink:"/react/functional-programming-with-javascript/state"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Functional programming favors ",(0,o.kt)("strong",{parentName:"p"},"composition"),", not inheritance. In fact, composition is an extremely important computer science concept and it is commonly applied in object-oriented programming as well."),(0,o.kt)("p",null,"With composition, we ",(0,o.kt)("strong",{parentName:"p"},"compose")," the functionality of more complex objects. Instead of focusing on what an object ",(0,o.kt)("em",{parentName:"p"},"is"),", we focus on what an object can ",(0,o.kt)("em",{parentName:"p"},"do"),"."),(0,o.kt)("p",null,"To take a functional approach, we'll bypass classes altogether. We'll create a modular ",(0,o.kt)("inlineCode",{parentName:"p"},"eat()")," function which we can include in objects that need it. There is no need to store that ",(0,o.kt)("inlineCode",{parentName:"p"},"eat()")," function in a class. As a result, the method will be loosely coupled, more flexible and easier to reuse."),(0,o.kt)("p",null,"Let's create a method that will allow any kind of animal to eat:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const canEat = function(creature) {\n  const obj = {\n    eat: function(food) {\n      return `The ${creature} eats the ${food}.`\n    }\n  }\n  return obj;\n}\n")),(0,o.kt)("p",null,"Here we are creating a function literal that returns an object. The object itself has a single property called ",(0,o.kt)("inlineCode",{parentName:"p"},"eat")," which stores a function. Note that the function stored inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"eat"),' property is a closure because it "closes over" variables from both the inner and outer function. Because of that, the inner function will have access to the value of ',(0,o.kt)("inlineCode",{parentName:"p"},"creature")," from the outer function even after the outer function has been called and completed."),(0,o.kt)("p",null,"Let's give a cat the ability to eat:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const cat = canEat("cat");\n')),(0,o.kt)("p",null,"We create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," variable which will store the object returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},'canEat("cat")')," function. Now the argument ",(0,o.kt)("inlineCode",{parentName:"p"},'"cat"')," will be stored inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"eat")," function."),(0,o.kt)("p",null,"Our cat variable is now an object that has the following property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  eat: function(food) {\n        return `The cat eats the ${food}.`\n      }\n}\n")),(0,o.kt)("p",null,"Now our cat can eat food:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"> cat.eat(\"salmon\");\n'The cat eats the salmon.'\n")),(0,o.kt)("p",null,"In the example above, our code doesn't care ",(0,o.kt)("em",{parentName:"p"},"what")," the object is. It's focused on what the object can ",(0,o.kt)("em",{parentName:"p"},"do"),", which is eat."),(0,o.kt)("p",null,"We can easily use this functionality with a fish now \u2014 no need to inherit from a restrictive class like ",(0,o.kt)("inlineCode",{parentName:"p"},"Mammal"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'> const salmon = canEat("salmon");\n> salmon.eat("insects")\n\'The salmon eats the insects.\'\n')),(0,o.kt)("p",null,"What if we want to add more functionality to our cat? For instance, we should give animals the ability to sleep, too. "),(0,o.kt)("p",null,"It might be tempting to refactor our function like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const canDoThings = function(creature) {\n  const obj = {\n    eat: function(food) {\n      return `The ${creature} eats the ${food}.`\n    },\n    sleep: function() {\n      return `The ${creature} sleeps.`\n    }\n  }\n  return obj;\n}\n")),(0,o.kt)("p",null,"In the example above, we add an additional property that provides sleep functionality. This will work as expected \u2014 but be careful! Our function just became less modular and reusable. What if we wanted to add a strange new alien species that never sleeps? Or a robot that never sleeps but needs to eat fuel? The function above is no longer very flexible for odd use cases. And while these use cases may seem odd, it's very important to keep our functions small, modular and reusable. As our applications grow in size, we can't necessarily predict how they will change. The best we can do is keep our code flexible and open-ended."),(0,o.kt)("p",null,"Instead, we'll have two separate methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const canEat = function(creature) {\n  const obj = {\n    eat: function(food) {\n      return `The ${creature} eats the ${food}.`\n    }\n  }\n  return obj;\n}\n\nconst canSleep = function(creature) {\n  const obj = {\n    sleep: function() {\n      return `The ${creature} sleeps.`\n    }\n  }\n  return obj;\n}\n")),(0,o.kt)("p",null,"Now that we have two methods, how can we assign them both to a single cat object? Well, let's start by making a ",(0,o.kt)("strong",{parentName:"p"},"function factory")," for creatures. We can use this to assign both of these methods to ",(0,o.kt)("em",{parentName:"p"},"any")," creature that needs to eat and sleep."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const sleepingEatingCreature = function(name) {\n  let state = {\n    name\n  }\n\n  return { ...state, ...canEat(state), ...canSleep(state) };\n}\n")),(0,o.kt)("p",null,"In the example above, we create a function literal that contains a variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". We can think of state as being a \"snapshot\" of the creature's properties and functions. While we could call this variable something else, state is a commonly used term and one that we'll see frequently in React. This variable only has one property: the name of the creature (in our case, it will be a cat). We could also add additional properties here if needed."),(0,o.kt)("p",null,"Note that we are also using ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),". This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," of the object will be modified. But isn't this a big no-no in functional programming? It is, and the technique above can more accurately be called ",(0,o.kt)("strong",{parentName:"p"},"object composition")," because we are combining elements of composition with object creation. We will discuss state further in the next lesson."),(0,o.kt)("p",null,"Next, we use the spread operator to merge the three objects together. Remember that both the ",(0,o.kt)("inlineCode",{parentName:"p"},"canEat()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canSleep()")," functions return objects. Using these techniques, we can merge any number of objects, which also means that we can compose as many pieces of additional functionality as we need. Note that we could also use ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," here instead of the spread operator."),(0,o.kt)("p",null,"We will need to make a small update to our other methods because we are passing in entire objects to both the ",(0,o.kt)("inlineCode",{parentName:"p"},"canEat()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canSleep()")," methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const canEat = function(creature) {\n  const obj = {\n    eat: function(food) {\n      return `The ${creature.name} eats the ${food}.` // Small update\n    }\n  }\n  return obj;\n}\n\nconst canSleep = function(creature) {\n  const obj = {\n    sleep: function() {\n      return `The ${creature.name} sleeps.` // Small update\n    }\n  }\n  return obj;\n}\n")),(0,o.kt)("p",null,"We need to specify the property of the object, not the object itself."),(0,o.kt)("p",null,"Now we can create any kind of sleeping and eating creature. Our application has no opinions on what kind of creature can do these things because we aren't using inheritance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const platypus = sleepingEatingCreature("platypus");\n')),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"platypus")," object should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"platypus {\n  name: 'platypus', \n  eat: function(food) {\n    return `The ${creature.name} eats the ${food}.`\n  }, \n  sleep: function() {\n    return `The ${creature.name} sleeps.`\n  }\n}\n")),(0,o.kt)("p",null,"A platypus can eat and sleep just like other mammals. However, if we need to add a modular method so a platypus can lay eggs, that would be easy to do. We could also reuse that method for birds and any other creatures that lay eggs. We can't do that with classical inheritance!"),(0,o.kt)("p",null,"One further thing: we can refactor our code to use arrow notation. We've omitted arrow notation up to this point because it makes the code appear even more abstract. Here's how our new functions look with arrow notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const canEat = (creature) => ({\n  eat: (food) => {\n    return `The ${creature.name} eats the ${food}.`\n  }\n});\n\nconst canSleep = (creature) => ({\n  sleep: () => {\n    return `The ${creature.name} sleeps.`\n  }\n});\n\nconst sleepingEatingCreature = (name) => {\n  let creature = {\n    name\n  }\n\n  return { ...creature, ...canEat(creature), ...canSleep(creature) };\n};\n")),(0,o.kt)("p",null,"Note that when we use arrow notation with a function that returns a single object, we don't need to add a return statement. Instead, we can take advantage of the ",(0,o.kt)("strong",{parentName:"p"},"implicit return"),", which is when we can omit a return statement in a function. This cleans up our code further but it does make it a bit more abstract and unfamiliar. While it's important to be able to use and read arrow notation, for now it's fine to use the syntax that feels most comfortable."),(0,o.kt)("p",null,"In this lesson, we learned how to use composition to make fully functioning objects out of smaller functions. These smaller functions determine what an object can ",(0,o.kt)("em",{parentName:"p"},"do"),", not what an object ",(0,o.kt)("em",{parentName:"p"},"is"),". With a handful of functions, we could create creatures from the far reaches of the animal kingdom, from glow worms to playpuses to whales. We could also pick and use which functions are necessary for each object, whether that's ",(0,o.kt)("inlineCode",{parentName:"p"},"swim()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"layEggs()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fly()"),", or something else."))}m.isMDXComponent=!0}}]);