"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[64899],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7896),o=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Constructing and Configuring an ASP.NET Core MVC Web App",id:"constructing-and-configuring-an-aspnet-core-mvc-web-app",slug:"constructing-and-configuring-an-aspnet-core-mvc-web-app",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_constructing_and_configuring_an_asp_net_core_mvc_project.md"},a=void 0,l={unversionedId:"c-and-net/basic-web-applications/constructing-and-configuring-an-aspnet-core-mvc-web-app",id:"c-and-net/basic-web-applications/constructing-and-configuring-an-aspnet-core-mvc-web-app",title:"\ud83d\udcd3 Constructing and Configuring an ASP.NET Core MVC Web App",description:"Now that we have a basic understanding of server-side frameworks and MVC, let's build our first ASP.NET Core MVC web application together.",source:"@site/docs/c-and-net/8_basic-web-applications/0h-constructing-and-configuring-an-asp-net-core-mvc-project.md",sourceDirName:"c-and-net/8_basic-web-applications",slug:"/c-and-net/basic-web-applications/constructing-and-configuring-an-aspnet-core-mvc-web-app",permalink:"/c-and-net/basic-web-applications/constructing-and-configuring-an-aspnet-core-mvc-web-app",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\ud83d\udcd3 Constructing and Configuring an ASP.NET Core MVC Web App",id:"constructing-and-configuring-an-aspnet-core-mvc-web-app",slug:"constructing-and-configuring-an-aspnet-core-mvc-web-app",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_constructing_and_configuring_an_asp_net_core_mvc_project.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 How the Web Works: MVC Pattern",permalink:"/c-and-net/basic-web-applications/how-the-web-works-mvc-pattern"},next:{title:"\ud83d\udcd3 Building and Running an ASP.NET Core MVC Web App",permalink:"/c-and-net/basic-web-applications/building-and-running-an-aspnet-core-mvc-web-app"}},s={},p=[{value:"Project Setup for Friend Letter",id:"project-setup-for-friend-letter",level:2},{value:"Maintaining Organized Projects with <code>.gitignore</code>",id:"maintaining-organized-projects-with-gitignore",level:3},{value:"Managing ASP.NET Core MVC Packages in a <code>.csproj</code>",id:"managing-aspnet-core-mvc-packages-in-a-csproj",level:3},{value:"Building and Hosting the Project with <code>Program.cs</code>",id:"building-and-hosting-the-project-with-programcs",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we have a basic understanding of server-side frameworks and MVC, let's build our first ASP.NET Core MVC web application together."),(0,o.kt)("p",null,"Over the next few lessons, we'll create a website called \"Friend Letter\" that displays a custom electronic postcard to our friends while we're on vacation. This lesson will focus on constructing and configuring the project directory. Upcoming lessons will explore individual elements of an ASP.NET Core MVC web application including views, controllers, and models."),(0,o.kt)("p",null,"You are welcome to code along with the following lessons or just read through them. We will provide a finished example project repo to use as a reference at the end of the walkthrough. Optionally, check out the finished repo now (linked below) to get a sense of the project we will create in this walkthrough. Just like with console apps, you can install packages, build, and run the project by running ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," in the same directory as the ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-friend-letter-csharp-net6"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Friend Letter"))),(0,o.kt)("h2",{id:"project-setup-for-friend-letter"},"Project Setup for Friend Letter"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's create a new project directory. This will have some similarities to the projects we created in the last section but with some new elements."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a parent directory named ",(0,o.kt)("inlineCode",{parentName:"li"},"FriendLetter.Solution"),"."),(0,o.kt)("li",{parentName:"ul"},"Within it, add one subdirectory called ",(0,o.kt)("inlineCode",{parentName:"li"},"FriendLetter"),". (We won't add testing in this first application, so we can focus solely on new MVC concepts)."),(0,o.kt)("li",{parentName:"ul"},"Create two files in the ",(0,o.kt)("inlineCode",{parentName:"li"},"FriendLetter.Solution/FriendLetter")," subdirectory:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FriendLetter.csproj")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Program.cs")))),(0,o.kt)("li",{parentName:"ul"},"Create three subdirectories within the ",(0,o.kt)("inlineCode",{parentName:"li"},"FriendLetter.Solution/FriendLetter/")," subdirectory:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Models/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Views/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Controllers/")))),(0,o.kt)("li",{parentName:"ul"},"In the parent ",(0,o.kt)("inlineCode",{parentName:"li"},"FriendLetter.Solution")," directory we'll also create a ",(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," file.")),(0,o.kt)("p",null,"The resulting structure should look like this:"),(0,o.kt)("pre",null,"FriendLetter.Solution/ \u251c\u2500\u2500 .gitignore \u2514\u2500\u2500 FriendLetter/ \u251c\u2500\u2500 Controllers/ \u251c\u2500\u2500 Models/ \u251c\u2500\u2500 Views/ \u251c\u2500\u2500 FriendLetter.csproj \u2514\u2500\u2500 Program.cs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that we'll use the above basic folder and file structure in all of our ASP.NET Core MVC applications.")," In this lesson, we'll cover the configurations for the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Friendletter.csproj"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," files. In upcoming lessons, we'll learn more about what goes in the models, views, and controllers folders."),(0,o.kt)("h3",{id:"maintaining-organized-projects-with-gitignore"},"Maintaining Organized Projects with ",(0,o.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file, we want to list the ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bin"),' folders, just like in the code snippet below. Doing so will tell Git to ignore any folders named "obj" or "bin" within the entire project.'),(0,o.kt)("div",{class:"filename"},"FriendLetter.Solution/.gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"obj\nbin\n")),(0,o.kt)("p",null,"Why ignore these two folders? Keep in mind that these two folders are auto-generated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dotnet restore")," installs the packages listed in our ",(0,o.kt)("inlineCode",{parentName:"li"},".csproj")," file, creating the ",(0,o.kt)("inlineCode",{parentName:"li"},"obj")," folder and its contents."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dotnet build")," creates the ",(0,o.kt)("inlineCode",{parentName:"li"},"bin")," folder and its contents, which includes the compiled code and resources that are ready to be executed with ",(0,o.kt)("inlineCode",{parentName:"li"},"dotnet run"),".")),(0,o.kt)("p",null,"Because we can install and build everything in our project with just a few commands, it's best practice to exclude the ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directories from our GitHub repositories. This ensures our repositories primarily contain code we've written, which helps keep our repos organized and easy to navigate."),(0,o.kt)("p",null,"When we or other developers want to retrieve and run the project from GitHub, we can simply clone the repo and run ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet restore")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet build")," in the production project's directory to recreate all necessary directories and files. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet build")," implicitly runs ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet restore"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," implicitly runs ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet build"),", so ultimately we just need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," to run the project."),(0,o.kt)("h3",{id:"managing-aspnet-core-mvc-packages-in-a-csproj"},"Managing ASP.NET Core MVC Packages in a ",(0,o.kt)("inlineCode",{parentName:"h3"},".csproj")),(0,o.kt)("p",null,"Next, we'll need to add a  ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file that includes packages for our new framework. This file is required in every ASP.NET Core MVC project. We'll add the following code:"),(0,o.kt)("div",{class:"filename"},"FriendLetter/FriendLetter.csproj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("p",null,'Keep in mind that "csproj" is short for "C# project". It is in this file that we list project-wide configurations and all of the files and resources we want included in a project. For example, we\'re listing the software development kit (SDK) we\'re using, ',(0,o.kt)("inlineCode",{parentName:"p"},'"Microsoft.NET.sdk.WEB"'),", along with the target framework ",(0,o.kt)("inlineCode",{parentName:"p"},"net6.0"),". "),(0,o.kt)("p",null,"Note that there's only one difference between the ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," that we'll use for ASP.NET Core MVC applications and the one we use for console apps. Previously, we used the general .NET SDK as denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},'<Project Sdk="Microsoft.NET.Sdk">'),". Now, we're building web apps with ASP.NET Core MVC so we're using the ASP.NET Core SDK as denoted by ",(0,o.kt)("inlineCode",{parentName:"p"},'<Project Sdk="Microsoft.NET.Sdk.Web">'),"."),(0,o.kt)("h3",{id:"building-and-hosting-the-project-with-programcs"},"Building and Hosting the Project with ",(0,o.kt)("inlineCode",{parentName:"h3"},"Program.cs")),(0,o.kt)("p",null,"Next, we'll add code to ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," that handles configuring, building, and serving our web application. This file is required in every ASP.NET Core MVC project. We'll first look at all of the new code, and then review what each line of code does, line by line. "),(0,o.kt)("p",null,"Note that there's no need to memorize the following code, as most of it is boilerplate that we won't update often. "),(0,o.kt)("p",null,"Here's the code we'll add to ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,o.kt)("div",{class:"filename"},"FriendLetter/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace FriendLetter\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      WebApplication app = builder.Build();\n\n      app.UseRouting();\n\n      app.MapControllerRoute(\n        name: "default",\n        pattern: "{controller=Home}/{action=Index}/{id?}"\n      );\n\n      app.Run();\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Let's start with the familiar. Just as before, ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," contains the entry point to our application: a ",(0,o.kt)("inlineCode",{parentName:"p"},"Program")," class with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method. The rest, however, is new!"),(0,o.kt)("p",null,"First note the two new ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," directives:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n")),(0,o.kt)("p",null,"Remember that ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," directives let us import a namespace into a file so that we can use the types that belong to that namespace. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.AspNetCore.Builder")," namespace lets us access tools to create and configure a web application host. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.Extensions.DependencyInjection")," namespace allows us to access tools to create services within our web app that get added to our web application via dependency injection. "),(0,o.kt)("p",null,"Note that it's not important to develop an understanding of exactly what these namespaces allow us to access. We also won't get too far into the specifics of how dependency injection (DI) works in bootstrapping an ASP.NET Core app (though we will cover DI more soon). What's important to note here is that the object types and methods listed within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method come from these two namespaces."),(0,o.kt)("p",null,"Next, let's look at the first line of code within ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()"),":"),(0,o.kt)("div",{class:"filename"},"FriendLetter/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n")),(0,o.kt)("p",null,"With the above code, we begin the process of creating a web application host. A ",(0,o.kt)("strong",{parentName:"p"},"host")," includes all of the application's resources and configurations needed to run as a web app in a browser. The first step in creating a host is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"builder")," object so that we can configure exactly how we want our web application host to be built."),(0,o.kt)("p",null,"The builder for the web app host comes configured with some defaults:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Uses a web server called ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-6.0"},"Kestrel"),"."),(0,o.kt)("li",{parentName:"ul"},"Loads configurations from the command line, ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json"),", and other sources. We'll use ",(0,o.kt)("inlineCode",{parentName:"li"},"appsettings.json"),' in the next course section to connect a MySQL database to our project. Typically these configurations (both defaults and custom configurations) contain sensitive information like keys or passwords, or specifications about what environment the project should start in (as in, "production" or "development").'),(0,o.kt)("li",{parentName:"ul"},"Sends logging output to the terminal console and debug providers.")),(0,o.kt)("p",null,"Next, let's see how we configure the host!"),(0,o.kt)("div",{class:"filename"},"FriendLetter/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllersWithViews();\n")),(0,o.kt)("p",null,"We customize our host ",(0,o.kt)("inlineCode",{parentName:"p"},"builder")," by enabling the Model-View-Controller (MVC) framework as a service. The services get added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"builder.Services")," property by invoking the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddControllersWithViews()")," method."),(0,o.kt)("p",null,"Something to note here is that services get added to our web application host through dependency injection. A ",(0,o.kt)("strong",{parentName:"p"},"dependency")," is simply a class that is used within another class. Or in other words, one class is dependent on the existence of another. Well, there are problems with setting up dependencies. ASP.NET Core recognizes these problems and provides a solution to them called ",(0,o.kt)("strong",{parentName:"p"},"dependency injection")," where the framework handles creating new dependencies and injecting them where they are needed throughout the web app."),(0,o.kt)("p",null,"While we can create custom dependencies and configure our host to inject those throughout our app, we'll primarily be using built-in services (that code in our app depends on) that ASP.NET Core handles injecting as needed. This means that the mechanism and workings of dependency injection will mostly be implicit and we won't get into the weed of understanding it. Microsoft has ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"excellent documentation on the topic")," if you wish to explore further."),(0,o.kt)("p",null,"In future course sections, we'll further customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"builder")," for our web app host. After we've finished configuring the builder, it's time to create the actual host. This is exactly what we do in the next line of code:"),(0,o.kt)("div",{class:"filename"},"FriendLetter/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllersWithViews();\n\nWebApplication app = builder.Build();\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"builder.Build()")," creates and returns our web app host, which we save in the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),". As we can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," is of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"WebApplication"),". "),(0,o.kt)("p",null,"So if we have our host, what's next? Well, it's time to configure it further, but this time using middleware to adjust how we handle requests made to our web app. When a user wants to view a page in our website, the user needs to make a ",(0,o.kt)("strong",{parentName:"p"},"request")," to the website host by entering a URL (like ",(0,o.kt)("em",{parentName:"p"},"localhost:5000"),") or clicking a link. With ASP.NET Core applications, we configure our host to handle requests in specific ways with middleware. Let's first take a look at the remaining code in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),", and then get into the details of what it all does and the technical terminology."),(0,o.kt)("div",{class:"filename"},"FriendLetter/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllersWithViews();\n\nWebApplication app = builder.Build();\n\napp.UseRouting();\n\napp.MapControllerRoute(\n  name: "default",\n  pattern: "{controller=Home}/{action=Index}/{id?}"\n);\n\napp.Run();\n')),(0,o.kt)("p",null,"With the first two method calls on ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),", we configure how we want our host to handle requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app.UseRouting();")," specifies that we want our host to match the website URL to routes that we create within our app. For example, if the URL is ",(0,o.kt)("em",{parentName:"li"},"localhost:5000/Home/Index, our host will know to match _Home/Index")," to a route that we coded in our project. This will make more sense once we start defining routes in controller files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app.MapControllerRoute(...);")," establishes a convention for our routes to follow. This convention is the default pattern that our routes will follow. In this case, we are saying that we want our URLs to first list the name of the controller, then the name of the action, and then the id of the current object, if any. Just like before, this will make more sense once we start defining routes in controller files.")),(0,o.kt)("p",null,"Finally, the last method called on ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," runs the host: ",(0,o.kt)("inlineCode",{parentName:"p"},"app.Run();"),". It's at this point that our web app is launched and we can navigate to our localhost in the browser!"),(0,o.kt)("p",null,"As noted previously, the methods called on ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," are called ",(0,o.kt)("strong",{parentName:"p"},"middleware"),", which means they receive and handle requests from a user to access a page within our website. Each middleware gets called in order and they can perform certain actions on the request. The biggest implication for us as ASP.NET Core developers is making sure that we place the middleware in the correct order. But don't worry about memorizing anything \u2014 there are ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0#middleware-order"},"cheat sheets and guides online")," that tell you exactly what order to put the middleware in. Anytime we add middleware during the program, we'll tell you exactly where to place it."),(0,o.kt)("p",null,"We don't need to worry about perfectly understanding how middleware function within ASP.NET Core apps, as that is a more advanced concept. However, if you want to dive in and learn more, the Microsoft docs has ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0"},"a very informative page on ASP.NET Core Middleware"),", including graphics!"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's review the key takeaways from this lesson. To set up and configure an ASP.NET Core MVC web app, you'll need the following files and folders:"),(0,o.kt)("pre",null,"ProjectName.Solution/ \u251c\u2500\u2500 .gitignore \u2514\u2500\u2500 ProjectName/ \u251c\u2500\u2500 Controllers/ \u251c\u2500\u2500 Models/ \u251c\u2500\u2500 Views/ \u251c\u2500\u2500 ProjectName.csproj \u2514\u2500\u2500 Program.cs"),(0,o.kt)("p",null,"Between our console apps and our new web apps built with ASP.NET Core Model-View-Controller (MVC), the biggest differences are the new folders called ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Views"),", as well as the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". We'll cover what goes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Views")," folders in upcoming lessons. As for ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),", keep in mind that the code therein does a few key things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Create and configure a web host builder. Configuring the builder includes adding services, among other things. A web app "host" includes all of the configurations and resources necessary to run our app in the browser.'),(0,o.kt)("li",{parentName:"ol"},"Create the web host by building our builder. We do this with the line ",(0,o.kt)("inlineCode",{parentName:"li"},"WebApplication app = builder.Build();"),"."),(0,o.kt)("li",{parentName:"ol"},"Further configure how our web host handles user requests. This includes setting up middleware that determines how to match a request to the routes we define in our code."),(0,o.kt)("li",{parentName:"ol"},"Run the web app host with ",(0,o.kt)("inlineCode",{parentName:"li"},"app.Run();"),". It's at this point that we can navigate to localhost in the browser and view our website.")),(0,o.kt)("p",null,"The last thing to note is reminder: don't worry about understanding how dependency injection and middleware work! Those are advanced concepts that you can learn about over time."),(0,o.kt)("p",null,"In the next lesson, we'll learn how to build and launch a basic ASP.NET Core MVC app. In later lessons, we'll revisit ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," and configure our web host further."))}u.isMDXComponent=!0}}]);