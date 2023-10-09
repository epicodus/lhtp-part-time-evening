"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14020],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const r={title:"\u270f\ufe0f Practice: Pig Latin - Part 2",id:"practice-pig-latin---part-2",slug:"practice-pig-latin---part-2",hide_table_of_contents:!0,sidebar_position:10,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3g_classwork_practice_pig_latin_2.md"},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping-part-2/practice-pig-latin---part-2",id:"introduction-to-programming/arrays-and-looping-part-2/practice-pig-latin---part-2",title:"\u270f\ufe0f Practice: Pig Latin - Part 2",description:"Goal: Focus on breaking your project down into small pieces of functionality, and tackling them one at a time with TDD. Also, as our projects grow in size, continue to practice good organization by keeping business logic and user interface logic distinctly separate.",source:"@site/docs/introduction-to-programming/6_arrays-and-looping-part-2/3g-classwork-practice-pig-latin-2.md",sourceDirName:"introduction-to-programming/6_arrays-and-looping-part-2",slug:"/introduction-to-programming/arrays-and-looping-part-2/practice-pig-latin---part-2",permalink:"/introduction-to-programming/arrays-and-looping-part-2/practice-pig-latin---part-2",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u270f\ufe0f Practice: Pig Latin - Part 2",id:"practice-pig-latin---part-2",slug:"practice-pig-latin---part-2",hide_table_of_contents:!0,sidebar_position:10,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3g_classwork_practice_pig_latin_2.md"},sidebar:"introduction-to-programming",previous:{title:"\u270f\ufe0f Practice: Pig Latin - Part 1",permalink:"/introduction-to-programming/arrays-and-looping-part-2/practice-pig-latin---part-1"},next:{title:"\ud83d\udcd3 Further Exploration: Introduction to Regular Expressions",permalink:"/introduction-to-programming/arrays-and-looping-part-2/further-exploration-introduction-to-regular-expressions"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Pig Latin",id:"pig-latin",level:3},{value:"How Pig Latin Works",id:"how-pig-latin-works",level:4},{value:"Start by Getting Organized",id:"start-by-getting-organized",level:4},{value:"Use TDD to Write your Code",id:"use-tdd-to-write-your-code",level:4},{value:"Helpful Hints",id:"helpful-hints",level:4},{value:"Further Exploration with Pig Latin: Refactor with Regular Expressions",id:"further-exploration-with-pig-latin-refactor-with-regular-expressions",level:3},{value:"Further Exploration with Bases",id:"further-exploration-with-bases",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),": Focus on breaking your project down into small pieces of functionality, and tackling them one at a time with TDD. Also, as our projects grow in size, continue to practice good organization by keeping business logic and user interface logic distinctly separate."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's say we have an application that counts the number of vowels in a string. This application has tests detailing each piece of functionality it must exhibit. However, they're out of order! Reorder the following list of tests from the ",(0,a.kt)("em",{parentName:"p"},"simplest possible")," functionality to the ",(0,a.kt)("em",{parentName:"p"},"most complex")," functionality with your partner. Consult with other pairs if necessary. "),(0,a.kt)("p",null,"As you work through this warm up, keep in mind that there could be multiple starting points for the ",(0,a.kt)("em",{parentName:"p"},"simplest possible piece of functionality"),". There could also be multiple next best steps. Don't get hung up on being right and instead discuss the reasons why you think certain pieces of functionality are more simple than others. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Describe: vowelCounter();\n\nTest: "It recognizes vowels in a multiple word sentence regardless of capitalization."\nCode: vowelCounter("CATS CATERED THE EVENT");\nExpected Output: 7\n\nTest: "It recognizes a single vowel in a word with multiple characters."\nCode: vowelCounter("cat");\nExpected Output: 1\n\nTest: "It recognizes a single vowel."\nCode: vowelCounter("a");\nExpected Output: 1\n\nTest: "It recognizes multiple vowels in a single word."\nCode: vowelCounter("cater");\nExpected Output: 2\n\nTest: "It recognizes a single vowel regardless of case."\nCode: vowelCounter("A");\nExpected Output: 1\n\nTest: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."\nCode: vowelCounter("CaTS CATEReD ThE EveNT");\nExpected Output: 7\n\nTest: "It ignores non-alphabetical characters since they can\'t be vowels."\nCode: vowelCounter("*&$92%");\nExpected Output: 0\n\nTest: "It recognizes vowels in a multiple-word sentence."\nCode: vowelCounter("cats catered the event");\nExpected Output: 7\n')),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Start by completing the Pig Latin project. If you have additional time, then move on to complete either of the further exploration projects."),(0,a.kt)("h3",{id:"pig-latin"},"Pig Latin"),(0,a.kt)("p",null,"Write a Pig Latin translator or should we say an ",(0,a.kt)("em",{parentName:"p"},'"igPay atinLay anslatorTray"'),"?  ",(0,a.kt)("strong",{parentName:"p"},"Read all instructions carefully before beginning.")," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Also note that it's normal to not complete this project. Remember that our goal is always understanding, and not the completion of a project. As long as you practice breaking this project down into small pieces of functionality and tackling them one at a time with TDD, your work on this project is a success!")),(0,a.kt)("h4",{id:"how-pig-latin-works"},"How Pig Latin Works"),(0,a.kt)("p",null,"Pig Latin is a language game that involves adding imaginary endings to real English words. In this prompt, you'll create an application that turns words into Pig Latin."),(0,a.kt)("p",null,"Here are the rules of Pig Latin:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don\'t treat "y" as a vowel. ',(0,a.kt)("strong",{parentName:"p"},"Examples:"),' "away" becomes "awayway" and "okay" becomes "okayway."')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". ',(0,a.kt)("strong",{parentName:"p"},"Examples:"),' "code" becomes "odecay" and "move" becomes "ovemay."')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'If the first consonants include "qu", move the "q" ',(0,a.kt)("em",{parentName:"p"},"and"),' the "u." Don\'t forget about words like "squeal" where "qu" doesn\'t come first! ',(0,a.kt)("strong",{parentName:"p"},"Examples:"),' "quick" becomes "ickquay" while "squeal" becomes "quealsay."'))),(0,a.kt)("h4",{id:"start-by-getting-organized"},"Start by Getting Organized"),(0,a.kt)("p",null,"We'll use TDD to create the Pig Latin functionality. With TDD, we typically work with one piece of functionality at a time, writing a test and the corresponding code, and then running the test to verify that our code works as expected. With this project, we'll take a different approach by first brainstorming all of the functionality our Pig Latin project needs, and making a list of that functionality in the form of tests ordered by simplest to most complex. Then, we'll start in on the TDD process."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make a list of tests detailing the functionality that your program will have. Start with the simplest possible piece of functionality, and slowly move up in complexity. We will get you started with a potential first test. Note that there is no one right way to start or to build up your logic \u2014 just focus on starting small and gradually work your way up.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Describe: pigLatin()\n\nTest: "It will add \'way\' to the end of words that begin with a vowel."\nCode: pigLatin("a");\nExpected Output: "away"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After you write all of your tests, ",(0,a.kt)("strong",{parentName:"p"},"have at least one other pair check your tests before you begin coding.")," Ensure that every possible functionality is represented by a test, and that they are ordered from simplest to most complex.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Place your tests in your project's README."))),(0,a.kt)("h4",{id:"use-tdd-to-write-your-code"},"Use TDD to Write your Code"),(0,a.kt)("p",null,"Now you're ready to start writing (and passing tests). Here's the process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Starting with the first test you wrote for the simplest possible piece of functionality, write the smallest amount of code needed to get the test passing.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test the code in the DevTools console.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the test is passing, commit your code."))),(0,a.kt)("p",null,"Repeat the cycle above for ",(0,a.kt)("em",{parentName:"p"},"each")," test. Do not move onto the next test until the previous one passes. "),(0,a.kt)("p",null,"Once you've completed your business logic, feel free to add a user interface so you can run your application in the browser. ",(0,a.kt)("strong",{parentName:"p"},"Do not add a UI until after you've written and tested all business logic.")),(0,a.kt)("h4",{id:"helpful-hints"},"Helpful Hints"),(0,a.kt)("p",null,'When you get to consonants, don\'t try to solve it all at once. Instead, start with an example of a word that only has one consonant. Next, try a word with two consonants. Finally, work your way up to a word with three consonants. After you\'ve written passing tests for this code, tackle the exceptions to the rule like "qu" and "y". Then, when your application can successfully translate single words, work on translating entire sentences.'),(0,a.kt)("p",null,"Here are a few methods that you may want to consider for solving this problem. Note that there are plenty of other ways to solve this problem, too!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"},(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.slice()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"},(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.includes()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"},(0,a.kt)("inlineCode",{parentName:"a"},"String.prototype.indexOf()")))),(0,a.kt)("p",null,"Take a look at this and other documentation to gather the tools you'll need before you try to fulfill your specs."),(0,a.kt)("h3",{id:"further-exploration-with-pig-latin-refactor-with-regular-expressions"},"Further Exploration with Pig Latin: Refactor with Regular Expressions"),(0,a.kt)("p",null,"We haven't covered regular expressions yet because we want you to primarily focus on looping. But if you want to try out regular expressions and you are comfortable with looping, now is your chance to refactor Pig Latin using regular expressions as described in the lesson ",(0,a.kt)("a",{parentName:"p",href:"/introduction-to-programming/arrays-and-looping-part-2/further-exploration-introduction-to-regular-expressions"},"Further Exploration: Introduction to Regular Expressions"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Once again, do not worry about using regex if you are still trying to understand loops. You do ",(0,a.kt)("em",{parentName:"p"},"not")," need to use regex on any code reviews!"),(0,a.kt)("h3",{id:"further-exploration-with-bases"},"Further Exploration with Bases"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Binary"),":  Write a method to convert numbers from binary to decimal. The input should be a string, and the output an integer. Decimal is the normal system we use for counting. We start at 0, increment until we reach 9, and then reset back to 0 and add another number to the left. In binary, we also start at zero, but we only increment until we reach 1. Then we reset back to zero and add another number to the left. ",(0,a.kt)("strong",{parentName:"p"},"Write specs, implement the smallest possible piece of functionality, and don't move onto the next test until the previous test is passing.")),(0,a.kt)("p",null,"Here are some example of numbers in decimal and binary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Decimal  Binary\n  0        0\n  1        1\n  2       10\n  3       11\n  4      100\n...      ...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trinary"),":  You get where I'm going, right?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hexadecimal"),": Here's what happens after 9..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Decimal  Hexadecimal\n...      ...\n 9        9\n10        a\n11        b\n12        c\n13        d\n14        e\n15        f\n16       10\n17       11\n...     ...\n")),(0,a.kt)("p",null,"If you get this far, write a method that takes two arguments: the number to be evaluated and the base you would like it to be evaluated in."),(0,a.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Are there tests for each piece of functionality?"),(0,a.kt)("li",{parentName:"ul"},"Are all tests passing?"),(0,a.kt)("li",{parentName:"ul"},"If business and user interface logic well-separated?"),(0,a.kt)("li",{parentName:"ul"},"Does the application work as expected?")))}d.isMDXComponent=!0}}]);