"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42043],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Create and Update with a One-To-Many Relationship",id:"create-and-update-with-a-one-to-many-relationship",slug:"create-and-update-with-a-one-to-many-relationship",hide_table_of_contents:!0,sidebar_position:36,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2l_create_update_one_to_many.md"},r=void 0,l={unversionedId:"c-and-net/database-basics/create-and-update-with-a-one-to-many-relationship",id:"c-and-net/database-basics/create-and-update-with-a-one-to-many-relationship",title:"\ud83d\udcd3 Create and Update with a One-To-Many Relationship",description:"Now it's time to update the rest of our application so that our users can actually associate a Category with an Item. We'll also make two other valuable updates: we'll list the Category that an Item belongs to on its details page, and we'll make an update to our CREATE action to prevent unhandled database errors.",source:"@site/docs/c-and-net/10_database-basics/2l-create-update-one-to-many.md",sourceDirName:"c-and-net/10_database-basics",slug:"/c-and-net/database-basics/create-and-update-with-a-one-to-many-relationship",permalink:"/c-and-net/database-basics/create-and-update-with-a-one-to-many-relationship",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{title:"\ud83d\udcd3 Create and Update with a One-To-Many Relationship",id:"create-and-update-with-a-one-to-many-relationship",slug:"create-and-update-with-a-one-to-many-relationship",hide_table_of_contents:!0,sidebar_position:36,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2l_create_update_one_to_many.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Using ViewBag",permalink:"/c-and-net/database-basics/using-viewbag"},next:{title:"\ud83d\udcd3 Inclusive Terminology: Using a Main Branch",permalink:"/c-and-net/database-basics/inclusive-terminology-using-a-main-branch"}},s={},p=[{value:"Using ViewBag for <code>Category</code> Data in the <code>ItemsController</code>",id:"using-viewbag-for-category-data-in-the-itemscontroller",level:2},{value:"Updating <code>Item</code> Create and Edit Views",id:"updating-item-create-and-edit-views",level:3},{value:"Listing the <code>Category</code> on the <code>Item</code> Details Page",id:"listing-the-category-on-the-item-details-page",level:3},{value:"Preventing Database Errors",id:"preventing-database-errors",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now it's time to update the rest of our application so that our users can actually associate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),". We'll also make two other valuable updates: we'll list the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," that an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," belongs to on its details page, and we'll make an update to our CREATE action to prevent unhandled database errors."),(0,o.kt)("h2",{id:"using-viewbag-for-category-data-in-the-itemscontroller"},"Using ViewBag for ",(0,o.kt)("inlineCode",{parentName:"h2"},"Category")," Data in the ",(0,o.kt)("inlineCode",{parentName:"h2"},"ItemsController")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's now use ViewBag to get ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," data into our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," Views. We will be updating our example To Do List project with the following changes. In this example, we'll access ViewBag data from an HTML helper, and the syntax in the View will look different than what we've seen so far."),(0,o.kt)("p",null,"We will need ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," data in two of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," routes, so let's update those two methods in ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController")," so that they use ViewBag. Here are the two methods we need to update:"),(0,o.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc.Rendering;\n\n...\n\npublic ActionResult Create()\n{\n  ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");\n  return View();\n}\n\n...\n\npublic ActionResult Edit(int id)\n{\n  Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n  ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");\n  return View(thisItem);\n}\n\n...\n')),(0,o.kt)("p",null,"First we add the necessary using directive so that we have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList"),". Now note that both methods have the following lines added to them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");\n')),(0,o.kt)("p",null,"When we create and edit our items, we want them to belong to categories that already exist. We do this by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewBag.CategoryId")," property  in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," GET actions, and assigning it as a new ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList")," object."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList")," will provide a list of the data needed to create an html ",(0,o.kt)("inlineCode",{parentName:"p"},"<select>")," list of all the categories from our database. The displayed text of each ",(0,o.kt)("inlineCode",{parentName:"p"},"<option>")," will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"Name")," property, and the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<option>")," will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryId"),".  That way, a user can select an ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," from the dropdown to associate with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," we are creating or editing."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList")," takes multiple arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first argument represents the data that will populate our SelectList's ",(0,o.kt)("inlineCode",{parentName:"li"},"<option>")," elements: a list of categories from our database."),(0,o.kt)("li",{parentName:"ul"},"The second argument is the value of the every ",(0,o.kt)("inlineCode",{parentName:"li"},"<option>")," element: the ",(0,o.kt)("inlineCode",{parentName:"li"},"Category"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"CategoryId"),"."),(0,o.kt)("li",{parentName:"ul"},"The third argument is the displayed text of every ",(0,o.kt)("inlineCode",{parentName:"li"},"<option>")," element: the name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Category"),". ")),(0,o.kt)("h3",{id:"updating-item-create-and-edit-views"},"Updating ",(0,o.kt)("inlineCode",{parentName:"h3"},"Item")," Create and Edit Views"),(0,o.kt)("p",null,"Next, let's update the corresponding views:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Create.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h4>Add a new item</h4>\n\n@using (Html.BeginForm())\n{\n  @Html.LabelFor(model => model.Description)\n  @Html.TextBoxFor(model => model.Description)\n\n  @Html.LabelFor(model => model.Category)\n  @Html.DropDownList("CategoryId")\n\n  <input type="submit" value="Add new item" class="btn btn-primary" />\n}\n<p>@Html.ActionLink("Show all items", "Index")</p>\n')),(0,o.kt)("div",{class:"filename"},"Views/Items/Edit.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h2>Edit</h2>\n\n<h4>Edit this item: @Html.DisplayFor(model => model.Description)</h4>\n\n@using (Html.BeginForm())\n{\n  @Html.HiddenFor(model => model.ItemId)\n\n  @Html.LabelFor(model => model.Description)\n  @Html.EditorFor(model => model.Description)\n\n  @Html.LabelFor(model => model.Category)\n  @Html.DropDownList("CategoryId")\n\n  <input type="submit" value="Save" />\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,o.kt)("p",null,"Note that we've added the following two lines to both views:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'@Html.LabelFor(model => model.Category)\n@Html.DropDownList("CategoryId")\n')),(0,o.kt)("p",null,"We use an HTML helper method called ",(0,o.kt)("inlineCode",{parentName:"p"},"DropDownList()"),", we give ",(0,o.kt)("inlineCode",{parentName:"p"},"DropDownList()")," the string name of a ViewBag property of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList"),". Since we saved our SelectList as ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewBag.CategoryId"),", we give ",(0,o.kt)("inlineCode",{parentName:"p"},"DropDownList()")," the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"CategoryId"'),". This helper method will create an html dropdown select list out of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList")," object."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryId")," may seem like a bad name for a ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectList")," object, but the reason we chose that name is because that will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<select>")," tag created. You can check this in your browser DevTools Inspector and see ",(0,o.kt)("inlineCode",{parentName:"p"},'<select id="CategoryId" name="CategoryId">'),". We could use a different name like ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewBag.CategoryList")," and you'd get ",(0,o.kt)("inlineCode",{parentName:"p"},'<select id="CategoryList" name="CategoryList">'),". The problem with that is when we submit our form it will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute to know what property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," object to assign a value, so it will try to create an Item with a ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryList")," property, which will not work."),(0,o.kt)("h3",{id:"listing-the-category-on-the-item-details-page"},"Listing the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Category")," on the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Item")," Details Page"),(0,o.kt)("p",null,"Next, let's list the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," on the details page for an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),". First, we'll update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," action in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController")," to grab include the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," when it gets the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," from the database:"),(0,o.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public ActionResult Details(int id)\n    {\n      Item thisItem = _db.Items\n                          .Include(item => item.Category)\n                          .FirstOrDefault(item => item.ItemId == id);\n      return View(thisItem);\n    }\n\n...\n")),(0,o.kt)("p",null,"Then, we'll update the corresponding view to display the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," name:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Details.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h2>Item Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)<h3>\n<h3>@Html.DisplayNameFor(model => model.Category): @Html.DisplayFor(model => model.Category.Name)<h3>\n\n<p>@Html.ActionLink("Edit Item", "Edit", new { id = Model.ItemId })</p>\n<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,o.kt)("h3",{id:"preventing-database-errors"},"Preventing Database Errors"),(0,o.kt)("p",null,"Users will see an unhandled error in the browser when they try to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," without there being a ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," they can associate the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," with. That's because our database expects each ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," to have a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryId"),", and without it, our application breaks. That means we need to update our application to prevent this from happening. There's quite a few ways we can do this, and we'll implement a basic solution for this issue now. In the next course section, we'll learn how to solve this issue with a different tool."),(0,o.kt)("p",null,"Our basic solution is to add an instruction for the user to read to let them know they need to add a Category before they create an Item. Then, in the controller, we'll check to see if a ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," has been added, and if not, redirect back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," page. "),(0,o.kt)("p",null,"Let's start with the instruction to the user. In ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Items/Create.cshtml"),", add the following code right before the ",(0,o.kt)("inlineCode",{parentName:"p"},"<h4>")," tag and above the form:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Create.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<p><strong>NOTE:</strong> You need to have at least one category before you can add an item!</p>\n<p>Go to @Html.ActionLink("this page", "Create", "Categories") to create a category.</p>\n\n...\n')),(0,o.kt)("p",null,"Next, let's update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," POST action within the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," to check whether a Category has been selected for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),". "),(0,o.kt)("p",null,"Here's the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," POST action:"),(0,o.kt)("div",{class:"filename"},"Views/ItemsController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpPost]\n    public ActionResult Create(Item item)\n    {\n      if (item.CategoryId == 0)\n      {\n        return RedirectToAction("Create");\n      }\n      _db.Items.Add(item);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,o.kt)("p",null,"We've added a new ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement that checks the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryId"),". By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryId")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if no Category is selected in the form. So, we can check if ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryId")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", and if so, redirect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," GET action and view. "),(0,o.kt)("p",null,"Again, this is just solution to our issue here. In the next section, we'll learn about validating models through ",(0,o.kt)("strong",{parentName:"p"},"validation attributes")," that we can add to our model's properties. We'll get into that soon!"),(0,o.kt)("p",null,"At this point, we've successfully set up a one-to-many relationship. We've also added very basic protection to our application to not create an item unless there's a category that it can be associated with. We can run our application and make an association between an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," via a dropdown."),(0,o.kt)("p",null,"For further information on using Entity, check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/modeling/relationships"},"Microsoft's documentation on Entity Framework Core"),"."),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view the ",(0,o.kt)("strong",{parentName:"p"},"finished project")," for the walkthrough of creating a To Do List app that uses EF Core to communicate with a MySQL database. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/4_one_to_many_relationship"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with EF Core: 4","_","one","_","to","_","many","_","relationship"))))}c.isMDXComponent=!0}}]);