"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29023],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const o={title:"Objects Within Objects Interface Part 1",id:"objects-within-objects-interface-part-1",slug:"objects-within-objects-interface-part-1",hide_table_of_contents:!0,sidebar_position:4,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3d_objects_within_objects_interface_part_one.md"},r=void 0,l={unversionedId:"c-and-net/basic-web-applications-part-2/objects-within-objects-interface-part-1",id:"c-and-net/basic-web-applications-part-2/objects-within-objects-interface-part-1",title:"Objects Within Objects Interface Part 1",description:"In the last two lessons, we updated our back end logic to support Category objects. All To Do List Items will now belong to a parent Category, allowing our users to better organize their tasks. As we've discussed, this setup is referred to as objects within objects.",source:"@site/docs/c-and-net/9_basic-web-applications-part-2/3d-objects-within-objects-interface-part-one.md",sourceDirName:"c-and-net/9_basic-web-applications-part-2",slug:"/c-and-net/basic-web-applications-part-2/objects-within-objects-interface-part-1",permalink:"/c-and-net/basic-web-applications-part-2/objects-within-objects-interface-part-1",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Objects Within Objects Interface Part 1",id:"objects-within-objects-interface-part-1",slug:"objects-within-objects-interface-part-1",hide_table_of_contents:!0,sidebar_position:4,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3d_objects_within_objects_interface_part_one.md"},sidebar:"c-and-net",previous:{title:"Saving Objects Within Other Objects",permalink:"/c-and-net/basic-web-applications-part-2/saving-objects-within-other-objects"},next:{title:"Objects Within Objects Interface Part 2",permalink:"/c-and-net/basic-web-applications-part-2/objects-within-objects-interface-part-2"}},s={},p=[{value:"Integrating <code>Category</code>s into the MVC Front End",id:"integrating-categorys-into-the-mvc-front-end",level:2},{value:"Index Route",id:"index-route",level:3},{value:"New Route",id:"new-route",level:3},{value:"Create Route",id:"create-route",level:3},{value:"Show Route",id:"show-route",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last two lessons, we updated our back end logic to support ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," objects. All To Do List ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s will now belong to a parent ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),", allowing our users to better organize their tasks. As we've discussed, this setup is referred to as ",(0,i.kt)("strong",{parentName:"p"},"objects within objects"),"."),(0,i.kt)("p",null,"With our back end logic now in place, we can begin to integrate new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," functionality into our MVC user interface. The next two lessons will walk through updating our MVC application to work with our new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s."),(0,i.kt)("h2",{id:"integrating-categorys-into-the-mvc-front-end"},"Integrating ",(0,i.kt)("inlineCode",{parentName:"h2"},"Category"),"s into the MVC Front End"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"First, we need a page to display all ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s. We'll add a ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController")," to manage areas of our app that work with ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," objects. We'll start by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController.cs")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList/Controllers")," directory. Within it, we'll add standard controller setup:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\nusing System;\nusing Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class CategoriesController : Controller\n  {\n\n  }\n}\n")),(0,i.kt)("h3",{id:"index-route"},"Index Route"),(0,i.kt)("p",null,"Next, let's define our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"-related routes. Just like ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," routes, these will adhere to RESTful conventions."),(0,i.kt)("p",null,"First, we'll create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," route to display all ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System;\nusing Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class CategoriesController : Controller\n  {\n\n    [HttpGet("/categories")]\n    public ActionResult Index()\n    {\n      List<Category> allCategories = Category.GetAll();\n      return View(allCategories);\n    }\n\n  }\n}\n')),(0,i.kt)("p",null,"Next, we'll add the corresponding view in a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Views")," subdirectory at ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList/Views/Categories"),". We'll call the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.cshtml"),":"),(0,i.kt)("div",{class:"filename"},"ToDoList/Views/Categories/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    @using ToDoList.Models;\n\n    <h1>Categories</h1>\n\n    @if (@Model.Count == 0)\n    {\n      <h3>No categories have been added yet!</h3>\n    } \n\n    @foreach (Category category in Model)\n    {\n      <h3><a href=\'/categories/@category.Id\'>@category.Name</a></h3>\n    }\n\n    <p><a href=\'/\'>Back home</a></p>\n  </body>\n</html>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If no ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s exist in the model data, we display a message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s do exist, we loop through them and display their names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<h3>")," displaying their name is also a link to the path ",(0,i.kt)("inlineCode",{parentName:"p"},"'/categories/@category.Id'"),". This will navigate to a detail page for specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s. We'll create this soon."))),(0,i.kt)("h3",{id:"new-route"},"New Route"),(0,i.kt)("p",null,"Let's also ensure users can create new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s with a form. We'll add a ",(0,i.kt)("inlineCode",{parentName:"p"},"New()")," route:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpGet("/categories/new")]\n  public ActionResult New()\n  {\n    return View();\n  }\n\n...\n')),(0,i.kt)("p",null,"Here's the corresponding view. Notice this all follows RESTful convention:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Views/Categories/New.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    <h1>Add a category</h1>\n    <p>Add a category here:</p>\n\n    <form action="/categories" method="post">\n      <label for="categoryName">Category name</label>\n      <input id="categoryName" name="categoryName" type="text">\n      <button type="submit">Add</button>\n    </form>\n\n    <p><a href="/">Back home</a></p>\n    <p><a href="/categories">Back to categories.</a></p>\n  </body>\n</html>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The form's ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"post"'),". That means submitting this form will create and send an HTTP POST request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," attribute is ",(0,i.kt)("inlineCode",{parentName:"p"},'"/categories"'),". That means the path included with our POST request will be ",(0,i.kt)("inlineCode",{parentName:"p"},'"/categories"'),"."))),(0,i.kt)("h3",{id:"create-route"},"Create Route"),(0,i.kt)("p",null,"To process submissions from this form, we'll need a route that handles POST requests with ",(0,i.kt)("inlineCode",{parentName:"p"},'"/categories"')," paths. We'll call it ",(0,i.kt)("inlineCode",{parentName:"p"},"Create()")," in order to follow RESTful conventions."),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpPost("/categories")]\n  public ActionResult Create(string categoryName)\n  {\n    Category newCategory = new Category(categoryName);\n    return RedirectToAction("Index");\n  }\n\n...\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We specify this route handles POST requests with a ",(0,i.kt)("inlineCode",{parentName:"p"},'"/categories"')," path by using the ",(0,i.kt)("inlineCode",{parentName:"p"},'[HttpPost("/categories")]')," route decorator. This both matches our form and RESTful routing conventions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The route accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"categoryName")," argument. This refers to the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"categoryName")," form field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"New.cshtml")," view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Within the route, we create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," with this name and then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"RedirectToAction"),' method with "Index" passed in as the argument to send the user back to the Index route.'))),(0,i.kt)("h3",{id:"show-route"},"Show Route"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," index view, we added links to each ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," name:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Views/Categories/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n\n@foreach (Category category in Model)\n{\n  <h3><a href='/categories/@category.Id'>@category.Name</a></h3>\n}\n\n...\n")),(0,i.kt)("p",null,"This is so a user can click an individual ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," from the list of all categories and navigate to a detail page displaying its information, including a list of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s associated with it. Let's create this detail page."),(0,i.kt)("p",null,"Following RESTful routing convention, the route will be named ",(0,i.kt)("inlineCode",{parentName:"p"},"Show()"),":"),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpGet("/categories/{id}")]\n  public ActionResult Show(int id)\n  {\n    Dictionary<string, object> model = new Dictionary<string, object>();\n    Category selectedCategory = Category.Find(id);\n    List<Item> categoryItems = selectedCategory.Items;\n    model.Add("category", selectedCategory);\n    model.Add("items", categoryItems);\n    return View(model);\n  }\n\n...\n')),(0,i.kt)("p",null,"We're doing something new here. Because this page will display both a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," ",(0,i.kt)("em",{parentName:"p"},"and")," all ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," objects saved within that ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),", we must pass two types of objects to the view. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"View()")," can only accept one model argument. To work around this, we do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," because a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," can hold multiple key-value pairs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add both the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and its associated ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s to this ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary"),". These will be stored with the keys ",(0,i.kt)("inlineCode",{parentName:"p"},'"category"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"items"'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary"),", which is named ",(0,i.kt)("inlineCode",{parentName:"p"},"model"),", will be passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"View()"),"."))),(0,i.kt)("p",null,"Let's make this route's view next:"),(0,i.kt)("div",{class:"filename"},"ToDoList/Views/Categories/Show.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    @using ToDoList.Models;\n\n    <h3>Here are all the items in this category:</h3>\n\n    <ol>\n    @foreach (Item item in @Model["items"])\n    {\n      <li><a href=\'/categories/@Model["category"].Id/items/@item.Id\'>@item.Description</a></li>\n    }\n    </ol>\n\n    <p><a href=\'/categories/@Model["category"].Id/items/new\'>Add a new item</a></p>\n    <p><a href=\'/categories\'>Return to category list</a></p>\n    <p><a href=\'/\'>Return to Main Page</a></p>\n  </body>\n</html>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We loop through all ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," in the model. We passed the view a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," containing key-value pairs, so we access ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s with ",(0,i.kt)("inlineCode",{parentName:"p"},'@Model["items"]')," square bracket notation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", we display its description in a ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We've also made each ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," a link to the path ",(0,i.kt)("inlineCode",{parentName:"p"},"'/categories/@Model[\"category\"].Id/items/@item.Id'"),". This will be the item's detail view. We already have an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," detail page associated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show()")," route on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController"),", but it's not at this super long path! Don't worry, this is intentional. We'll discuss what's up in the next lesson."))),(0,i.kt)("p",null,"At this point, we can build and run our application and see our new pages in the browser. We can even create new ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," objects with our form. However, some functionality like the ",(0,i.kt)("em",{parentName:"p"},"Add a new item")," link on the Category detail page does not yet work yet. We'll complete this in the next lesson and also discuss how objects within other objects affect RESTful convention."))}m.isMDXComponent=!0}}]);