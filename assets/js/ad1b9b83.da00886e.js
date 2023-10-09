"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89189],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,g=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Creating a User Interface for a Console App",id:"creating-a-user-interface-for-a-console-app",slug:"creating-a-user-interface-for-a-console-app",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_console_app_user_interface.md"},o=void 0,l={unversionedId:"c-and-net/basic-console-apps/creating-a-user-interface-for-a-console-app",id:"c-and-net/basic-console-apps/creating-a-user-interface-for-a-console-app",title:"\ud83d\udcd3 Creating a User Interface for a Console App",description:"All of the user interface logic we've written in Program.cs so far has been to practice the business logic we created in Triangle.cs, and not to create an interactive console application that a user can run and interact with through text commands. Well, we're now at a point where we've fully developed our business logic and it is time to fully develop our UI logic.",source:"@site/docs/c-and-net/4_basic-console-apps/0j-console-app-user-interface.md",sourceDirName:"c-and-net/4_basic-console-apps",slug:"/c-and-net/basic-console-apps/creating-a-user-interface-for-a-console-app",permalink:"/c-and-net/basic-console-apps/creating-a-user-interface-for-a-console-app",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\ud83d\udcd3 Creating a User Interface for a Console App",id:"creating-a-user-interface-for-a-console-app",slug:"creating-a-user-interface-for-a-console-app",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_console_app_user_interface.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Static Class Members",permalink:"/c-and-net/basic-console-apps/static-class-members"},next:{title:"\ud83d\udcd3 Simplifying Business Logic with Properties",permalink:"/c-and-net/basic-console-apps/simplifying-business-logic-with-properties"}},s={},p=[{value:"Plan for the Shape Tracker UI",id:"plan-for-the-shape-tracker-ui",level:2},{value:"Creating the Shape Tracker UI",id:"creating-the-shape-tracker-ui",level:2},{value:"A Greeting",id:"a-greeting",level:3},{value:"Creating Triangles",id:"creating-triangles",level:3},{value:"Creating a New UI Method for Edit Functionality",id:"creating-a-new-ui-method-for-edit-functionality",level:3},{value:"Building Out Edit Functionality",id:"building-out-edit-functionality",level:3},{value:"Checking the Type of the Triangle",id:"checking-the-type-of-the-triangle",level:3},{value:"Looping to the Beginning and Saying Goodbye",id:"looping-to-the-beginning-and-saying-goodbye",level:3},{value:"What Else?",id:"what-else",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All of the user interface logic we've written in ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," so far has been to practice the business logic we created in ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.cs"),", and not to create an interactive console application that a user can run and interact with through text commands. Well, we're now at a point where we've fully developed our business logic and it is time to fully develop our UI logic. "),(0,i.kt)("p",null,"In the process of creating our UI logic, we'll learn how to break up our UI logic into reusable methods and how to create a flow in our program through branching. We'll also apply a lot of C# basics we practiced with in the previous pre-work section. The concepts and tools we learn in this lesson can be applied to any project you create."),(0,i.kt)("h2",{id:"plan-for-the-shape-tracker-ui"},"Plan for the Shape Tracker UI"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The UI we create for our Shape Tracker app depends on what functionality we have in our business logic models. The Shape Tracker app is meant to provide helpful functions to users to calculate interesting properties of shapes, like calculating the type of triangle or the area of a rectangle. "),(0,i.kt)("p",null,"Right now, we have one ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," class with a handful of functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating triangles based on three values for sides."),(0,i.kt)("li",{parentName:"ul"},"Editing the sides of each triangle."),(0,i.kt)("li",{parentName:"ul"},"Seeing all triangles ever created."),(0,i.kt)("li",{parentName:"ul"},"Clearing all triangles ever created. ")),(0,i.kt)("p",null,"This list gives us a clear idea of the UI that we need to create for our users to be able to use all triangle functionality. "),(0,i.kt)("p",null,"Other than triangle functionality, we'll want our users to be greeted when they start the program, and to be able to exit the program. That adds two more items to our list of UI to create. Here's our final to-do list:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Greet users at program start."),(0,i.kt)("li",{parentName:"ul"},"Create triangles based on three values for sides."),(0,i.kt)("li",{parentName:"ul"},"Edit the sides of each triangle."),(0,i.kt)("li",{parentName:"ul"},"See all triangles ever created."),(0,i.kt)("li",{parentName:"ul"},"Clear all triangles ever created. "),(0,i.kt)("li",{parentName:"ul"},"End the program.")),(0,i.kt)("p",null,"Here's one word of caution before we get started. ",(0,i.kt)("strong",{parentName:"p"},"You don't have to follow the process outlined in this lesson when you create your own UIs.")," Creating a UI can be more subjective and there's many ways that we can set up application flow. Experimenting is good. Also, it's a helpful practice to put yourself in the shoes of the user \u2014 what would they want or expect? Otherwise, having a game plan is always helpful to guide your work. "),(0,i.kt)("h2",{id:"creating-the-shape-tracker-ui"},"Creating the Shape Tracker UI"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"First things first, let's clear the code that's already in our UI. We'll remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"using System.Collections.Generic;")," directive, and keep the others as-is. ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," should now look like this:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      \n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"a-greeting"},"A Greeting"),(0,i.kt)("p",null,"Next, let's create a greeting:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");\n      Console.WriteLine("Welcome to the Shape Tracker app!");\n      Console.WriteLine("We\'ll calculate what type of triangle you have based off of the lengths of the triangle\'s 3 sides.");\n    }\n  }\n}\n')),(0,i.kt)("p",null,"So far so good!"),(0,i.kt)("h3",{id:"creating-triangles"},"Creating Triangles"),(0,i.kt)("p",null,"Next, let's add the ability for users to create a triangle:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");\n      Console.WriteLine("Welcome to the Shape Tracker app!");\n      Console.WriteLine("We\'ll calculate what type of triangle you have based off of the lengths of the triangle\'s 3 sides.");\n      Console.WriteLine("Please enter a number:");\n      string stringNumber1 = Console.ReadLine();  \n      Console.WriteLine("Enter another number:");\n      string stringNumber2 = Console.ReadLine();  \n      Console.WriteLine("Enter a third number:");\n      string stringNumber3 = Console.ReadLine();  \n      int length1 = int.Parse(stringNumber1);  \n      int length2 = int.Parse(stringNumber2);  \n      int length3 = int.Parse(stringNumber3);  \n      Triangle tri = new Triangle(length1, length2, length3);\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Notice that we have a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," statements to instructor our user on what information we want and to prompt them to enter the information into the terminal. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'Console.WriteLine("Please enter a number:");'),"."),(0,i.kt)("p",null,"Also notice that every time we ask the user to input information into the terminal we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Console.ReadLine()")," to gather that information. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"string stringNumber1 = Console.ReadLine();"),"."),(0,i.kt)("p",null,"We make a point to ",(0,i.kt)("strong",{parentName:"p"},"avoid a common data type error")," by parsing the user input into integers. That's what we're doing with code like ",(0,i.kt)("inlineCode",{parentName:"p"},"int length1 = int.Parse(stringNumber1);"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Console.ReadLine()")," method always returns a string, so if we want to work with any other data type like an integer or bool, we need to intentionally parse the string into the data type that we want."),(0,i.kt)("p",null,"If we do NOT parse the string into an int in the above code, we'll get a compiler error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{style:{color:"red"}},"/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/Program.cs(23,35): error CS1503: Argument 1: cannot convert from 'string' to 'int' [/Users/staff/Desktop/ShapeTracker.Solution/ShapeTracker/ShapeTracker.csproj]")),(0,i.kt)("p",null,"Finally, in the last line of new code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method, we actually create a new triangle object with the user's inputted numbers. "),(0,i.kt)("p",null,"If we run our program now, we'll be prompted for three numbers, and then the program will automatically ends. That's typical behavior for console apps \u2014 if there's nothing else to run, the program will simply end."),(0,i.kt)("h3",{id:"creating-a-new-ui-method-for-edit-functionality"},"Creating a New UI Method for Edit Functionality"),(0,i.kt)("p",null,"At this point, we've done two things: greeted our user and created a triangle based off of their input. The next thing we'll tackle is letting users edit the triangle they just created. But should we keep expanding our ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method with more code? No, it's time to add a new UI method."),(0,i.kt)("p",null,"Any new method we create in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Program")," class (that contains our UI logic) should be static. We don't want to have to create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program")," class in order to call the method. "),(0,i.kt)("p",null,"Let's start by creating the basics of our method and calling it. Here's how we'll update ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      Console.WriteLine("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");\n      Console.WriteLine("Welcome to the Shape Tracker app!");\n      Console.WriteLine("We\'ll calculate what type of triangle you have based off of the lengths of the triangle\'s 3 sides.");\n      Console.WriteLine("Please enter a number:");\n      string stringNumber1 = Console.ReadLine();  \n      Console.WriteLine("Enter another number:");\n      string stringNumber2 = Console.ReadLine();  \n      Console.WriteLine("Enter a third number:");\n      string stringNumber3 = Console.ReadLine();  \n      int length1 = int.Parse(stringNumber1);  \n      int length2 = int.Parse(stringNumber2);  \n      int length3 = int.Parse(stringNumber3);  \n      Triangle tri = new Triangle(length1, length2, length3);\n      // new method call below!\n      ConfirmOrEditTriangle(tri);\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      // code to confirm or edit our triangle will go here.\n    }\n  }\n}\n')),(0,i.kt)("p",null,"We've added a new method called ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()"),". Notice that this method is ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", as it won't return anything (we'll see why soon). This method also has one parameter called ",(0,i.kt)("inlineCode",{parentName:"p"},"tri"),", so we need to pass in a triangle object when we call this method. "),(0,i.kt)("p",null,"We're already calling our new method in the above code. Look for the new line at the bottom of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," method: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"ConfirmOrEditTriangle(tri);\n")),(0,i.kt)("p",null,"We're passing in the triangle object ",(0,i.kt)("inlineCode",{parentName:"p"},"tri")," that we just created in ",(0,i.kt)("inlineCode",{parentName:"p"},"Main()")," to the new method ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()"),". This allows us to use and manipulate the same data, even though our logic is separated into multiple methods. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Take note that it's required for UI methods to be static"),", but the return type and whether or not we have parameters should be whatever makes sense for our application's needs. Our UI methods need to be static so that we don't have to create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program")," class before calling any of them. Instead, as a static method, we can call on the method directly, anywhere within our class. "),(0,i.kt)("p",null,"Note that we can omit the class name when calling a static member within the class it belongs to. For example, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle(tri)")," (without the class name) is the same as calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.ConfirmOrEditTriangle(tri)")," (with the class name). "),(0,i.kt)("h3",{id:"building-out-edit-functionality"},"Building Out Edit Functionality"),(0,i.kt)("p",null,"Let's continue building out our edit functionality. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," method, we're going to do a couple of things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display the values for each triangle's side and ask the user if they inputted the correct values, and gather their response."),(0,i.kt)("li",{parentName:"ul"},"We'll evaluate the user's response:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the triangle's sides are correct, we'll move on to checking the type of the triangle."),(0,i.kt)("li",{parentName:"ul"},"If the triangle's sides are incorrect, we'll gather new values for the triangle's side, and then start the confirmation process all over.")))),(0,i.kt)("p",null,"Let's start just with prompting the user to confirm their triangle's sides:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ... // omitted code\n      ConfirmOrEditTriangle(tri);\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      Console.WriteLine("Please confirm that you entered in your triangle correctly:");\n      Console.WriteLine($"Side 1 has a length of {tri.GetSide1()}.");\n      Console.WriteLine($"Side 2 has a length of {tri.GetSide2()}.");\n      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");\n      Console.WriteLine("Is that correct? Enter \'yes\' to proceed, or \'no\' to re-enter the triangle\'s sides");\n      string userInput = Console.ReadLine();  \n    }\n  }\n}\n')),(0,i.kt)("p",null,'Notice that we ask the user to input specifically "yes" or "no" into the terminal. We could have put anything in here (like "1" or "2", or "y" or "n"), but when we ask the user to enter in one of a selection of choices, we can then use those selections to create branching logic. '),(0,i.kt)("p",null,"In this case, if ",(0,i.kt)("inlineCode",{parentName:"p"},"userInput")," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},'"yes"'),", then we'll move on to checking the triangle's type. If ",(0,i.kt)("inlineCode",{parentName:"p"},"userInput")," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},'"no"'),", then we'll edit the triangle again."),(0,i.kt)("p",null,"Let's add the branching:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ... // omitted code\n      ConfirmOrEditTriangle(tri);\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      Console.WriteLine("Please confirm that you entered in your triangle correctly:");\n      Console.WriteLine($"Side 1 has a length of {tri.GetSide1()}.");\n      Console.WriteLine($"Side 2 has a length of {tri.GetSide2()}.");\n      Console.WriteLine($"Side 3 has a length of {tri.GetSide3()}.");\n      Console.WriteLine("Is that correct? Enter \'yes\' to proceed, or \'no\' to re-enter the triangle\'s sides");\n      string userInput = Console.ReadLine();  \n      if (userInput == "yes")\n      {\n        // We have not created the CheckTriangleType() UI method yet.\n        CheckTriangleType(tri);\n      }\n      else\n      {\n        Console.WriteLine("Let\'s fix your triangle. Please enter the 3 sides again!");\n        Console.WriteLine("Please enter a number:");\n        string stringNumber1 = Console.ReadLine();  \n        Console.WriteLine("Enter another number:");\n        string stringNumber2 = Console.ReadLine();  \n        Console.WriteLine("Enter a third number:");\n        string stringNumber3 = Console.ReadLine();  \n        tri.SetSide1(int.Parse(stringNumber1));  \n        tri.SetSide2(int.Parse(stringNumber2));  \n        tri.SetSide3(int.Parse(stringNumber3)); \n        ConfirmOrEditTriangle(tri);\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement, we check if ",(0,i.kt)("inlineCode",{parentName:"p"},'userInput == "yes"'),", and if so, then we call ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType(tri)")," to check the type of the triangle (ie: isosceles). "),(0,i.kt)("p",null,"Note that we haven't created the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," method yet! While we could add the code here to check the type of the triangle, we wouldn't be practicing good ",(0,i.kt)("strong",{parentName:"p"},"separation of concerns"),". Since edit functionality is different from triangle type checking functionality, it's best to separate them into different methods. For now we'll leave ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType(tri)")," as a placeholder method call for a new UI method that we'll create momentarily. "),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),' statement evaluates to false, that means the user input "no", and the ',(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement is run. Notice that the user could input literally anything other than ",(0,i.kt)("inlineCode",{parentName:"p"},'"yes"')," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement will run. You can use this to your advantage... or it could lead to unexpected bugs, so be careful!"),(0,i.kt)("p",null,"One important piece to notice in the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement is the looping we set up: at the very end of the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement, after we gather new triangle values, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," again. With this code in place, it means that we'll be prompted again and again to confirm that our triangle's sides are correct until they actually are! In other words, the only way to leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()"),' method is to verify that the triangle is correct by entering "yes".'),(0,i.kt)("p",null,"In any case, keep in mind that you can create a loop by calling on the same method you are declaring within its own definition (eg: calling ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," definition). "),(0,i.kt)("p",null,"Next, let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," method."),(0,i.kt)("h3",{id:"checking-the-type-of-the-triangle"},"Checking the Type of the Triangle"),(0,i.kt)("p",null,"Let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," method next. Note that we're already calling this method from within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," method and passing in our triangle instance ",(0,i.kt)("inlineCode",{parentName:"p"},"tri"),"."),(0,i.kt)("p",null,"Here's how we'll update ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ... // omitted code\n      ConfirmOrEditTriangle(tri);\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      ... // omitted code\n      \n      if (userInput == "yes")\n      {\n        CheckTriangleType(tri);\n      }\n      else\n      {\n        ... // omitted code\n        ConfirmOrEditTriangle(tri);\n      }\n    }  \n\n    static void CheckTriangleType(Triangle tri)\n    {\n      string result = tri.CheckType();\n      Console.WriteLine("-----------------------------------------");\n      Console.WriteLine("Your result is: " + result + ".");\n      Console.WriteLine("-----------------------------------------");\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Like other UI methods, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," method is static so that we can call it on the class and not an instance. This is important for the method to work as expected. "),(0,i.kt)("p",null,"Otherwise the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," returns nothing and accepts a triangle object as an argument. This is just like the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmOrEditTriangle()")," method."),(0,i.kt)("p",null,"Any what do we do in the method body? We call on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle.CheckType()")," instance method to determine the type of triangle. We store the return value in a variable and then print it to the terminal. The dashes ",(0,i.kt)("inlineCode",{parentName:"p"},"------")," that we print to the terminal simply create a visual separation to highlight the result. You can use whatever sort of text to create visual separations."),(0,i.kt)("h3",{id:"looping-to-the-beginning-and-saying-goodbye"},"Looping to the Beginning and Saying Goodbye"),(0,i.kt)("p",null,"So, what's next? We still need to add functionality to display all triangles as well as clear all triangles. It would also be nice to give our users the ability to continually create and check the type of new triangles until they decide they are done. "),(0,i.kt)("p",null,"So how do we do this? Well, right now our application's flow ends in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," UI method, so if we're going to add in any additional functionality, we need to start there. We can prompt the user to consider what they want to do next, and give them a selection. For now, let's offer the user to create a new triangle or to exit the program. "),(0,i.kt)("p",null,"Here's how we'll update the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckTriangleType()")," method:"),(0,i.kt)("p",null,"Here's how we'll update ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing ShapeTracker.Models;\n\nnamespace ShapeTracker\n{\n  class Program\n  {\n    static void Main()\n    {\n      ... // omitted code\n    }\n\n    static void ConfirmOrEditTriangle(Triangle tri)\n    {\n      ... // omitted code\n    }  \n\n    static void CheckTriangleType(Triangle tri)\n    {\n      string result = tri.CheckType();\n      Console.WriteLine("-----------------------------------------");\n      Console.WriteLine("Your result is: " + result + ".");\n      Console.WriteLine("-----------------------------------------");\n      Console.WriteLine("What\'s next?");\n      Console.WriteLine("Would you like to check a new triangle (new)?");\n      Console.WriteLine("Please enter \'new\' to check the type of a new triangle. To exit, enter any key.");\n      string userResponse = Console.ReadLine(); \n      if (userResponse == "new" || userResponse == "New")\n      {\n        Main();\n      }\n      else\n      {\n        Console.WriteLine("Goodbye!");\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Much of the code is self-explanatory. Let's work through the new code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," statement, we're using the logical OR ",(0,i.kt)("inlineCode",{parentName:"li"},"||"),' to expand the possible allowed answers, which helps to manage errors in user input. In this case even though we\'re asking for the user to input "new", they might accidentally input "New" with a capitalized first letter. '),(0,i.kt)("li",{parentName:"ul"},"While .NET uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"Main()")," method internally as the entry point to our application, we can also call this method wherever in our UI logic to loop back to the start of our program. That's what we do in the first ",(0,i.kt)("inlineCode",{parentName:"li"},"if")," statement.")),(0,i.kt)("h2",{id:"what-else"},"What Else?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"And with that we've put together a solid console app for our Shape Tracker project! We already noted earlier that our app still doesn't have UI for some of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Triangle")," business logic: printing all triangles or giving the user the option to clear all triangles \u2014 that will be your task in the first classwork of this course."),(0,i.kt)("p",null,"Other than completing the UI, there are other improvement opportunities that we can consider: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Refactoring.")," When we refactor our code, we're rewriting it to improve its maintainability, reusability or scalability. An easy way to identify opportunities for refactoring is to look for repeated code that can be put into a method. For example, in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Main()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfirmOrEditTriangle()")," methods, we repeat code to gather user input for the triangle's sides which we could potentially turn into a method that we can reuse where needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Error handling."),' We can improve our application\'s error handling for user input. We could add validation for users entering numbers for the sides and not something else. We could also add error handling for when a user does not enter in one of our requested selections (like "yes" or "no").'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Improve navigation.")," We can improve our program's navigation by adding more options to end the program or navigate back to the start of the program. As the complexity of your application grows, there will be more choices as far as how you can set up navigation in your app.")),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/prework-shape-tracker-csharp-net6/tree/5_console_user_interface"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Shape Tracker: ",(0,i.kt)("inlineCode",{parentName:"a"},"5_console_user_interface")))))}d.isMDXComponent=!0}}]);