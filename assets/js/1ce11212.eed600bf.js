"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6805],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Using Forms with MVC",id:"using-forms-with-mvc",slug:"using-forms-with-mvc",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0o_using_forms_with_mvc.md"},o=void 0,l={unversionedId:"c-and-net/basic-web-applications/using-forms-with-mvc",id:"c-and-net/basic-web-applications/using-forms-with-mvc",title:"\ud83d\udcd3 Using Forms with MVC",description:"In this lesson, we'll learn how to add forms to our virtual postcard application so anyone can create a custom postcard for their friends.",source:"@site/docs/c-and-net/8_basic-web-applications/0o-using-forms-with-mvc.md",sourceDirName:"c-and-net/8_basic-web-applications",slug:"/c-and-net/basic-web-applications/using-forms-with-mvc",permalink:"/c-and-net/basic-web-applications/using-forms-with-mvc",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"\ud83d\udcd3 Using Forms with MVC",id:"using-forms-with-mvc",slug:"using-forms-with-mvc",hide_table_of_contents:!0,sidebar_position:15,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0o_using_forms_with_mvc.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Dynamic Views with Razor Markup Syntax",permalink:"/c-and-net/basic-web-applications/dynamic-views-with-razor-markup-syntax"},next:{title:"\ud83d\udcd3 Debugging Views and Configuring a Development Environment with launchSettings.json",permalink:"/c-and-net/basic-web-applications/debugging-views-and-configuring-a-development-environment-with-launchsettingsjson"}},s={},p=[{value:"Integrating Forms",id:"integrating-forms",level:2},{value:"Adding a New Route",id:"adding-a-new-route",level:3},{value:"Creating a Form View",id:"creating-a-form-view",level:3},{value:"Dynamically Rendering Form Data",id:"dynamically-rendering-form-data",level:2},{value:"Route",id:"route",level:3},{value:"View",id:"view",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll learn how to add forms to our virtual postcard application so anyone can create a custom postcard for their friends."),(0,r.kt)("h2",{id:"integrating-forms"},"Integrating Forms"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"adding-a-new-route"},"Adding a New Route"),(0,r.kt)("p",null,"First, we'll add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Form()")," route to contain our form:"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing FriendLetter.Models;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    ...\n\n    [Route("/form")]\n    public ActionResult Form() { return View(); }\n\n  }\n}\n')),(0,r.kt)("p",null,"When we navigate to ",(0,r.kt)("em",{parentName:"p"},"localhost:5000/form"),", the code in this route will execute."),(0,r.kt)("h3",{id:"creating-a-form-view"},"Creating a Form View"),(0,r.kt)("p",null,"In our ",(0,r.kt)("inlineCode",{parentName:"p"},"Views/Home")," directory, we'll create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Form.cshtml")," and add the following:"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Views/Home/Form.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Create a Custom Postcard!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n    <meta charset=\'utf-8\'>\n  </head>\n  <body>\n    <h1>Fill in your name and your friend\'s name to create your custom postcard!</h1>\n    <form action="/postcard" method="post">\n     <label for="sender">Sender\'s Name</label>\n     <input id="sender" name="sender" type="text">\n     <label for="recipient">Recipient\'s Name</label>\n     <input id="recipient" name="recipient" type="text">\n     <button type="submit">Go!</button>\n    </form>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"This form looks fairly similar to ones we've worked with in the past but there are some key differences."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," tag includes ",(0,r.kt)("inlineCode",{parentName:"p"},'action="/postcard"'),". This tells ASP.NET Core MVC ",(0,r.kt)("em",{parentName:"p"},"where")," to submit the data provided through this form. ",(0,r.kt)("strong",{parentName:"p"},"This attribute must be set to the path of another route in our controller.")," That means if we use a route decorator, it will be set to the path we've specified in the decorator. We'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},'"/postcard"')," route soon.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," for each piece of info the form collects. ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),"s must have 3 attributes: ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," can be anything as long as it's unique on this page. Generally, the value will be the same for both ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," tag has many different possible values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute. Examples include dates, colors, and numbers. This one is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"text"'),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," tag provides the text to display next to the input box. It takes one attribute called ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),", which should match the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute of the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," tag. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," tag with attribute ",(0,r.kt)("inlineCode",{parentName:"p"},'id="recipient"')," should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"<label>")," tag with the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},'for="recipient"'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," tag creates the button that submits the form. ",(0,r.kt)("strong",{parentName:"p"},"It has one attribute called ",(0,r.kt)("inlineCode",{parentName:"strong"},"type"),". This attribute must be set to ",(0,r.kt)("inlineCode",{parentName:"strong"},'"submit"'),".")," Otherwise, the form won't work correctly."))),(0,r.kt)("p",null,"Note that we haven't created the route that the new form will send it's data to. Let's do that next."),(0,r.kt)("h2",{id:"dynamically-rendering-form-data"},"Dynamically Rendering Form Data"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now that we have a form to submit data, we need to add a route that gathers the data, and a new view that displays the data. "),(0,r.kt)("h3",{id:"route"},"Route"),(0,r.kt)("p",null,"Let's first add the code to retrieve the user's form input. We'll call this new route ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard()"),". We need to make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard()")," route has a ",(0,r.kt)("inlineCode",{parentName:"p"},"/postcard")," route decorator to handle this, because ",(0,r.kt)("strong",{parentName:"p"},"the route's path must match the form's ",(0,r.kt)("inlineCode",{parentName:"strong"},"action")," attribute"),". When they match, ASP.NET Core will automatically execute the code in this route when the form is submitted."),(0,r.kt)("p",null,"Our new route will look like this:"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n[Route("/postcard")]\npublic ActionResult Postcard(string recipient, string sender)\n{\n  LetterVariable myLetterVariable = new LetterVariable();\n  myLetterVariable.Recipient = recipient;\n  myLetterVariable.Sender = sender;\n  return View(myLetterVariable);\n}\n\n...\n')),(0,r.kt)("p",null,"Here we create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard()")," route. This time, the route's method takes arguments: a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," for both ",(0,r.kt)("inlineCode",{parentName:"p"},"recipient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sender"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because we told our ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Form.cshtml")," to have an ",(0,r.kt)("inlineCode",{parentName:"p"},'action="/postcard"'),", the route matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"/postcard")," path is automatically invoked. That's our ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard()")," route.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our form has two ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),"s, one with a ",(0,r.kt)("inlineCode",{parentName:"p"},'name="sender"')," attribute and another with a ",(0,r.kt)("inlineCode",{parentName:"p"},'name="recipient"')," attribute. These are the parameters we pass into the route method.  ",(0,r.kt)("strong",{parentName:"p"},"Note: the name of the parameters must match the value of the ",(0,r.kt)("inlineCode",{parentName:"strong"},"name")," attribute on the form inputs. This must be an exact match or it will not work."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This route can automatically access those values via the parameters we pass into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard()")," route method."))),(0,r.kt)("p",null,"Next, let's create the view that will display the form data in a postcard."),(0,r.kt)("h3",{id:"view"},"View"),(0,r.kt)("p",null,"Since the route name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard()"),", we need to create a view called ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard.cshtml"),". The new view will look like our previous friend letter in ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter.cshtml"),", but this one will insert custom names gathered from our form. "),(0,r.kt)("p",null,"We'll add the following code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Postcard.cshtml"),":"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Views/Home/Postcard.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>A Postcard For You!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n    <meta charset=\'utf-8\'>\n  </head>\n  <body>\n    <h1>Hello From Afar</h1>\n    <p>Dear @Model.Recipient,</p>\n    <p>How are you? I hope that you are having a nice weekend. I\'m vacationing in the Iceland while I learn programming!</p>\n    <p>@Model.Recipient, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>\n    <p>But I like programming a lot, so I\'ve got that going for me.</p>\n    <p>Looking forward to seeing you soon. I\'ll bring you back a souvenir.</p>\n    <p>Cheers,</p>\n    <p>Travel Enthusiast @Model.Sender</p>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"If we launch the application and visit ",(0,r.kt)("em",{parentName:"p"},"localhost:5000/form"),", we'll see our form! If we fill it out and submit it, we'll automatically be taken to our letter at ",(0,r.kt)("em",{parentName:"p"},"localhost:5000/postcard")," with custom sender and recipient names from our form."),(0,r.kt)("p",null,'That\'s the end of this walkthrough on creating a basic web application with ASP.NET Core MVC. Click the link below to check out the finished example project for the "Friend Letter" project.'),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-friend-letter-csharp-net6"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Friend Letter"))))}d.isMDXComponent=!0}}]);