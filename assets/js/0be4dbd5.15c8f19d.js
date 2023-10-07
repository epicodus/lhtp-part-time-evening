"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9463],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(2784);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=i,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},55608:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7896),i=(o(2784),o(30876));const r={title:"Further Exploration Opportunities with Identity",id:"further-exploration-opportunities-with-identity",slug:"further-exploration-opportunities-with-identity",hide_table_of_contents:!0,sidebar_position:14,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3c_further_exploration_opportunities_with_identity.md"},a=void 0,s={unversionedId:"c-and-net/authentication-with-identity/further-exploration-opportunities-with-identity",id:"c-and-net/authentication-with-identity/further-exploration-opportunities-with-identity",title:"Further Exploration Opportunities with Identity",description:"In this lesson we'll highlight some further exploration opportunities with ASP.NET Core authentication and authorization. There's actually quite a lot of authentication and authorization options to explore in the ASP.NET Core docs. That makes sense! Microsoft wants its ASP.NET Core applications and APIs to be able to work with all of the modern tools for securing websites.",source:"@site/docs/c-and-net/14_authentication-with-identity/3c-further-exploration-opportunities-with-identity.md",sourceDirName:"c-and-net/14_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/further-exploration-opportunities-with-identity",permalink:"/c-and-net/authentication-with-identity/further-exploration-opportunities-with-identity",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Further Exploration Opportunities with Identity",id:"further-exploration-opportunities-with-identity",slug:"further-exploration-opportunities-with-identity",hide_table_of_contents:!0,sidebar_position:14,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3c_further_exploration_opportunities_with_identity.md"},sidebar:"c-and-net",previous:{title:"Library Catalog, Recipe Box - Part 1",permalink:"/c-and-net/authentication-with-identity/library-catalog-recipe-box---part-1"},next:{title:"Journal #12 Discussion",permalink:"/c-and-net/authentication-with-identity/journal-12-discussion"}},l={},c=[{value:"Further Exploration Opportunities",id:"further-exploration-opportunities",level:2},{value:"Creating a User Profile",id:"creating-a-user-profile",level:3},{value:"Roles",id:"roles",level:3},{value:"Account Confirmation and Password Recovery",id:"account-confirmation-and-password-recovery",level:3},{value:"Configuring Identity",id:"configuring-identity",level:3},{value:"Securing Secrets",id:"securing-secrets",level:3},{value:"Explore Identity UI",id:"explore-identity-ui",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson we'll highlight some further exploration opportunities with ASP.NET Core authentication and authorization. There's actually quite a lot of authentication and authorization options to explore in the ASP.NET Core docs. That makes sense! Microsoft wants its ASP.NET Core applications and APIs to be able to work with all of the modern tools for securing websites. "),(0,i.kt)("p",null,"For example, the docs cover popular configurations like signing in with a Google, Twitter, or Facebook account, and how to add multi-factor authentication to your projects. Those are advanced topics that we won't be highlighting in the lists below. To get a sense of everything that ASP.NET Core has to offer for security, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-6.0"},'start perusing the "Security and Identity" docs'),"."),(0,i.kt)("p",null,"You are not expected to incorporate any further exploration for this section's independent project. However, if you are looking for a challenge, try incorporating them into your multi-day project."),(0,i.kt)("h2",{id:"further-exploration-opportunities"},"Further Exploration Opportunities"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There's a few important things to note about the guides on the MS Docs. "),(0,i.kt)("p",null,"The first is that a lot of examples use an ASP.NET Core Razor Page application. A Razor Page app is an alternative to building an MVC app. While a lot of code is similar, there's plenty that is dissimilar. To learn more about Razor Pages, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-6.0&tabs=visual-studio-code-code"},"check out this documentation"),". "),(0,i.kt)("p",null,"The second is that a lot of guides also have you scaffold projects using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet new")," project scaffolding tool. We'll practice with this tool when we learn how to make an API call in C# and when we build our own ASP.NET Core API in the next course section. Take note of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dotnet new webapp")," scaffolds a Razor Page web application. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dotnet new mvc")," scaffolds an MVC web application. ")),(0,i.kt)("p",null,"You can interchange ",(0,i.kt)("inlineCode",{parentName:"p"},"webapp")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"mvc")," when a guide directs you to scaffold an app. However, doing so may make following along with the guide a bit challenging, and it could possibly make some of the code not work as expected."),(0,i.kt)("p",null,"With those warnings, let's get into the further exploration opportunities."),(0,i.kt)("h3",{id:"creating-a-user-profile"},"Creating a User Profile"),(0,i.kt)("p",null,"This first further exploration opportunity is all about adding new properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class to create a more robust and interesting user profile. What exactly you have users enter will certainly depend on what your website offers. For example, it's probably not necessary to gather a user's date of birth for a site that sells products. However, on a social media site, users may want to add that information to their profiles. "),(0,i.kt)("p",null,"We already covered how to add properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class in the lesson ",(0,i.kt)("a",{parentName:"p",href:"https://new.learnhowtoprogram.com/c-and-net/authentication-with-identity/identity-setup-and-configuration"},"identity Setup and Configuration"),". If you want more information, check out this resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/customize-identity-model?view=aspnetcore-6.0#custom-user-data"},"An overview of adding custom user data.")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityUser"))," class that our ",(0,i.kt)("inlineCode",{parentName:"li"},"ApplicationUser")," extends functionality from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/add-user-data?view=aspnetcore-6.0&tabs=visual-studio-code"},"Guide on adding user data."))),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Now that our application has users, we might want to consider adding different roles. For example, a site can have some users that can view pages, registered users who can leave comments, moderators who can ban certain users for leaving too many spam comments, administrators, and so on."),(0,i.kt)("p",null,"We can add roles using Identity's tools for authentication. When we start deciding what a user can do based on their role, this is a part of authorization."),(0,i.kt)("p",null,"We've done some basic authorization with the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Authorize]")," attribute on a controller. However, this authorization is fairly limited. If a user is logged in, they will be able to access that controller. There are many use cases where we'll want more fine-grained control over authorization in our applications."),(0,i.kt)("p",null,"If you are interested in implementing roles, check out ",(0,i.kt)("a",{parentName:"p",href:"https://www.yogihosting.com/aspnet-core-identity-roles/"},"this tutorial from Yogi Hosting"),". The article covers how to create and manage roles, as well as how to authorize using roles. For more information on authorization with roles, check out the ASP.NET Core docs on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles?view=aspnetcore-6.0"},"role-based authorization"),". Note that the tutorial uses ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-6.0"},"tag helpers"),", which are tools we can use in our views that enable us to use our models to define HTML elements. They are different from HTML helper methods."),(0,i.kt)("p",null,'Yogi Hosting is an outside resource, but it is linked to directly from within the ASP.NET Core docs. You can find the original link called "How to work with Roles in ASP.NET Core Identity" in the "Next Steps" section of ',(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=visual-studio"},"this entry in the ASP.NET Core documentation"),"."),(0,i.kt)("h3",{id:"account-confirmation-and-password-recovery"},"Account Confirmation and Password Recovery"),(0,i.kt)("p",null,"Configuring an MVC app to have account confirmation and password recovery will be more challenging, but there's a great guide on how to do this on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/accconfirm?view=aspnetcore-6.0&tabs=visual-studio-code"},"the MS docs"),". Note that the guide uses a Razor Page application instead of an MVC. You may be able to translate the code described in the guide to an MVC app, and if not, you can explore how this works with a Razor Page app instead."),(0,i.kt)("h3",{id:"configuring-identity"},"Configuring Identity"),(0,i.kt)("p",null,"There are many ways to configure how identity should work from ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". For example, we can set an account lockout time from ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". To learn about this and other ways we can configure Identity, visit this article on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity-configuration?view=aspnetcore-6.0"},"Identity Configuration"),"."),(0,i.kt)("h3",{id:"securing-secrets"},"Securing Secrets"),(0,i.kt)("p",null,"If you have the time, it's worth looking into other ways to secure development secrets. The MS Docs has ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-6.0&tabs=windows"},"a helpful article on this topic")," that provides multiple options for managing secrets."),(0,i.kt)("h3",{id:"explore-identity-ui"},"Explore Identity UI"),(0,i.kt)("p",null,"Identity has its own UI that can be used instead of a custom UI like we built. To learn more about Identity UI, it's recommended to read first read through the docs on the ASP.NET Core ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-6.0"},"scaffolding tool ",(0,i.kt)("inlineCode",{parentName:"a"},"aspnet-codegenerator"))," to get a sense of how it works and how to troubleshoot issues."),(0,i.kt)("p",null,"Then, it will be helpful to work through the introductory guide in the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=netcore-cli"},"Introduction to Identity")," article that uses the scaffolding tool. Then check out the article ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/scaffold-identity?view=aspnetcore-6.0&tabs=netcore-cli"},"Scaffold Identity in ASP.NET Core projects")," to learn more about using Identity UI."))}h.isMDXComponent=!0}}]);