"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69017],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7896),a=(n(2784),n(30876));const r={title:"Showing Item Details with EF Core",id:"showing-item-details-with-ef-core",slug:"showing-item-details-with-ef-core",hide_table_of_contents:!0,sidebar_position:27,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1g_showing_item_detail.md"},o=void 0,l={unversionedId:"c-and-net/database-basics/showing-item-details-with-ef-core",id:"c-and-net/database-basics/showing-item-details-with-ef-core",title:"Showing Item Details with EF Core",description:"Our To Do List application currently has an option for users to click on an item's details. However, we haven't added that route or its corresponding view yet. Let's do that now.",source:"@site/docs/c-and-net/10_database-basics/1g-showing-item-detail.md",sourceDirName:"c-and-net/10_database-basics",slug:"/c-and-net/database-basics/showing-item-details-with-ef-core",permalink:"/c-and-net/database-basics/showing-item-details-with-ef-core",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"Showing Item Details with EF Core",id:"showing-item-details-with-ef-core",slug:"showing-item-details-with-ef-core",hide_table_of_contents:!0,sidebar_position:27,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1g_showing_item_detail.md"},sidebar:"c-and-net",previous:{title:"HTML Helper Methods, Lambda Expressions, and String Interpolation",permalink:"/c-and-net/database-basics/html-helper-methods-lambda-expressions-and-string-interpolation"},next:{title:"Further Exploration with Testing",permalink:"/c-and-net/database-basics/further-exploration-with-testing"}},s={},p=[{value:"Showing an <code>Item</code> Details",id:"showing-an-item-details",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our To Do List application currently has an option for users to click on an item's details. However, we haven't added that route or its corresponding view yet. Let's do that now."),(0,a.kt)("h2",{id:"showing-an-item-details"},"Showing an ",(0,a.kt)("inlineCode",{parentName:"h2"},"Item")," Details"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll start with the controller action, which will include some new code."),(0,a.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public ActionResult Details(int id)\n{\n    Item thisItem = _db.Items.FirstOrDefault(item => item.ItemId == id);\n    return View(thisItem);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Details")," method takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the entry we want to view as its sole parameter. Remember that this needs to match the property from the anonymous object we created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionLink()")," method with the code ",(0,a.kt)("inlineCode",{parentName:"p"},"new { id = item.ItemId }"),". Check the previous lesson for details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We pass in this ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as an argument to the LINQ method ",(0,a.kt)("inlineCode",{parentName:"p"},"FirstOrDefault()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This method once again uses a lambda. We can ultimately read this method as:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Start by looking at ",(0,a.kt)("inlineCode",{parentName:"li"},"_db.Items")," (our ",(0,a.kt)("inlineCode",{parentName:"li"},"items")," table)."),(0,a.kt)("li",{parentName:"ul"},"Then find any items where the ",(0,a.kt)("inlineCode",{parentName:"li"},"ItemId")," of an item is equal to the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," we've passed into this method.")))),(0,a.kt)("p",null,"Note that we could do the following and it would still work fine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Item thisItem = _db.Items.FirstOrDefault(thing => thing.ItemId == id);\n")),(0,a.kt)("p",null,"However, it makes sense for the name to clearly represent the dataset we are pulling from."),(0,a.kt)("p",null,"While the lambda syntax may still feel confusing, once again we don't need to have an in-depth understanding of lambdas in order to start using LINQ."),(0,a.kt)("p",null,"Now let's create the corresponding view."),(0,a.kt)("div",{class:"filename"},"Views/Items/Details.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h2>Item Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)<h3>\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We start with a model directive so the view can reference the model.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We use two new HTML helper methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayNameFor()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayFor()"),'. The former displays the property name while the latter displays the value of that property. For an item with a description of "Wash rhino," this will be rendered as ',(0,a.kt)("inlineCode",{parentName:"p"},'Description: "Wash rhino"')," in our HTML.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, we use another ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionLink()")," to render a link that will return the user to the index route."))),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the To Do List app should look like at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-3-to-do-list-with-ef-core-csharp-net6/tree/2_create_read_and_details_with_html_helpers"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List with EF Core: 2","_","create","_","read","_","and","_","details","_","with","_","html","_","helpers"))))}m.isMDXComponent=!0}}]);