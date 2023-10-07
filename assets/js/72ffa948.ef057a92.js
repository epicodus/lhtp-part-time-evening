"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2490],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7896),i=(a(2784),a(30876));const o={title:"Using ViewBag",id:"using-viewbag",slug:"using-viewbag",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2k_using_viewbag.md"},r=void 0,l={unversionedId:"c-and-net/database-basics/using-viewbag",id:"c-and-net/database-basics/using-viewbag",title:"Using ViewBag",description:"Before updating the rest of our application so that our users can actually associate a Category with an Item, let's learn about a place to store data called a ViewBag.",source:"@site/docs/c-and-net/10_database-basics/2k-using-viewbag.md",sourceDirName:"c-and-net/10_database-basics",slug:"/c-and-net/database-basics/using-viewbag",permalink:"/c-and-net/database-basics/using-viewbag",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Using ViewBag",id:"using-viewbag",slug:"using-viewbag",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2k_using_viewbag.md"},sidebar:"c-and-net",previous:{title:"Establishing a One-To-Many Relationship with Navigation Properties",permalink:"/c-and-net/database-basics/establishing-a-one-to-many-relationship-with-navigation-properties"},next:{title:"Create and Update with a One-To-Many Relationship",permalink:"/c-and-net/database-basics/create-and-update-with-a-one-to-many-relationship"}},s={},p=[{value:"ViewBag Syntax",id:"viewbag-syntax",level:2},{value:"Using ViewBag to Add Custom Titles to Webpages",id:"using-viewbag-to-add-custom-titles-to-webpages",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before updating the rest of our application so that our users can actually associate a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", let's learn about a place to store data called a ",(0,i.kt)("strong",{parentName:"p"},"ViewBag"),"."),(0,i.kt)("h2",{id:"viewbag-syntax"},"ViewBag Syntax"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We already know how to send a model to our views, but sometimes we need additional data that isn't a part of our model. We can store that data in a ViewBag."),(0,i.kt)("p",null,"A ViewBag is a way to send temporary data from a controller to a view. Every MVC Razor view has a ViewBag. We can declare a property of the ViewBag in a route and it will be available to us in the view. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public ActionResult Index()\n{\n  ViewBag.MyFavoriteColor = "green";\n  return View();\n}\n')),(0,i.kt)("p",null,"This will assign the string ",(0,i.kt)("inlineCode",{parentName:"p"},'"green"')," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFavoriteColor")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewBag"),". We don't have to instantiate the ViewBag or create a new class. It's simply made available to the view."),(0,i.kt)("p",null,"To reference the ViewBag data in the view, we can use this expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"<p>I like the color @ViewBag.MyFavoriteColor.</p>\n")),(0,i.kt)("p",null,"The user would see the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I like the color green.\n")),(0,i.kt)("h2",{id:"using-viewbag-to-add-custom-titles-to-webpages"},"Using ViewBag to Add Custom Titles to Webpages"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can use ViewBag to add custom titles to our webpages. We'll learn how to do this now, but you don't have to include this functionality in your projects or on any independent project. "),(0,i.kt)("p",null,"Check out this code from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," route of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController"),":"),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public ActionResult Index()\n{\n  List<Item> model = _db.Items.Include(item => item.Category).ToList(); \n  ViewBag.PageTitle = "View All Items";\n  return View(model);\n}\n')),(0,i.kt)("p",null,"We've added a new line: ",(0,i.kt)("inlineCode",{parentName:"p"},'ViewBag.PageTitle = "View All Items";'),". By creating a property of the ViewBag called ",(0,i.kt)("inlineCode",{parentName:"p"},"PageTitle"),", we can then access it in our ",(0,i.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file to set the value of the HTML element ",(0,i.kt)("inlineCode",{parentName:"p"},"<title>"),". See the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," below:"),(0,i.kt)("div",{class:"filename"},"Views/Shared/_Layout.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n  <head>\n    ...\n    <title>@ViewBag.PageTitle</title>\n    ...\n  </head>\n  ...  \n</html>\n")),(0,i.kt)("p",null,"Now when I navigate to the Item's ",(0,i.kt)("inlineCode",{parentName:"p"},"Index"),' view, the title of the webpage will be "View All Items". '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Take note"),", if you do this for one page, you should do it for all pages. If there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"PageTitle")," property or value, the title will default to the current URL. For example, if we're on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index")," View of the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeController"),", the title would state ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:5001"),"."))}d.isMDXComponent=!0}}]);