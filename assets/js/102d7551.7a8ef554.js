"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70987],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Adding a Model and Database",id:"adding-a-model-and-database",slug:"adding-a-model-and-database",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_establish_models_and_database.md"},i=void 0,l={unversionedId:"c-and-net/building-an-api/adding-a-model-and-database",id:"c-and-net/building-an-api/adding-a-model-and-database",title:"\ud83d\udcd3 Adding a Model and Database",description:"Let's start work on our Cretaceous Park API. While the CLI scaffolded the basics for us, we'll still need to set up and configure our own database, controller, and models.",source:"@site/docs/c-and-net/16_building-an-api/0d-establish-models-and-database.md",sourceDirName:"c-and-net/16_building-an-api",slug:"/c-and-net/building-an-api/adding-a-model-and-database",permalink:"/c-and-net/building-an-api/adding-a-model-and-database",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udcd3 Adding a Model and Database",id:"adding-a-model-and-database",slug:"adding-a-model-and-database",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_establish_models_and_database.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Exploring the dotnet new Web API Template",permalink:"/c-and-net/building-an-api/exploring-the-dotnet-new-web-api-template"},next:{title:"\ud83d\udcd3 Seeding the Database",permalink:"/c-and-net/building-an-api/seeding-the-database"}},s={},d=[{value:"Database Setup Review",id:"database-setup-review",level:2},{value:"Adding Database and Entity Models",id:"adding-database-and-entity-models",level:2},{value:"Updating <code>Program.cs</code> to Use MySQL and the <code>CretaceousApiContext</code>",id:"updating-programcs-to-use-mysql-and-the-cretaceousapicontext",level:2},{value:"Create the Initial Migration",id:"create-the-initial-migration",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's start work on our Cretaceous Park API. While the CLI scaffolded the basics for us, we'll still need to set up and configure our own database, controller, and models."),(0,r.kt)("p",null,"The first thing we'll do is delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"WeatherForecastController.cs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WeatherForecast.cs")," model. We'll be replacing the boilerplate controller and model with our own. If you want to use those files as reference, you can always save them, or regenerate them in a new scaffolded web API project."),(0,r.kt)("h2",{id:"database-setup-review"},"Database Setup Review"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll add the necessary packages to our project for Entity Framework Core and migrations. Run the following commands in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CretaceousApi/")," project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package Microsoft.EntityFrameworkCore -v 6.0.0\n$ dotnet add package Pomelo.EntityFrameworkCore.MySql -v 6.0.0\n$ dotnet add package Microsoft.EntityFrameworkCore.Design -v 6.0.0\n")),(0,r.kt)("h2",{id:"adding-database-and-entity-models"},"Adding Database and Entity Models"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, let's create our models. First, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Models/")," directory. Then create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Models/Animal.cs")," and add the following code:"),(0,r.kt)("div",{class:"filename"},"Models/Animal.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace CretaceousApi.Models\n{\n  public class Animal\n  {\n    public int AnimalId { get; set; }\n    public string Name { get; set; }\n    public string Species { get; set; }\n    public int Age { get; set; }\n  }\n}\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," class will represent the creatures of the Cretaceous period. You are welcome to add other ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," class properties, if you like!"),(0,r.kt)("p",null,"Next, let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContext")," class in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"CretaceousApiContext.cs"),":"),(0,r.kt)("div",{class:"filename"},"Models/CretaceousApiContext.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\nnamespace CretaceousApi.Models\n{\n  public class CretaceousApiContext : DbContext\n  {\n    public DbSet<Animal> Animals { get; set; }\n\n    public CretaceousApiContext(DbContextOptions<CretaceousApiContext> options) : base(options)\n    {\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"updating-programcs-to-use-mysql-and-the-cretaceousapicontext"},"Updating ",(0,r.kt)("inlineCode",{parentName:"h2"},"Program.cs")," to Use MySQL and the ",(0,r.kt)("inlineCode",{parentName:"h2"},"CretaceousApiContext")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Next, we'll have to update ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," to add MySQL as our database service. "),(0,r.kt)("div",{class:"filename"},"CretaceousApi/Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using CretaceousApi.Models;\nusing Microsoft.EntityFrameworkCore;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllers();\n\nbuilder.Services.AddDbContext<CretaceousApiContext>(\n                  dbContextOptions => dbContextOptions\n                    .UseMySql(\n                      builder.Configuration["ConnectionStrings:DefaultConnection"], \n                      ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]\n                    )\n                  )\n                );\n\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\nvar app = builder.Build();\n\nif (app.Environment.IsDevelopment())\n{\n    app.UseSwagger();\n    app.UseSwaggerUI();\n}\nelse \n{\n  app.UseHttpsRedirection();\n}\n\napp.UseAuthorization();\n\napp.MapControllers();\n\napp.Run();\n')),(0,r.kt)("p",null,"We add our ",(0,r.kt)("inlineCode",{parentName:"p"},"CretaceousApiContext")," and MySQL database as a service in our application."),(0,r.kt)("p",null,"Next, we need to update ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," with our database connection string:"),(0,r.kt)("div",{class:"filename"},"CretaceousApi/appsettings.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  },\n  "AllowedHosts": "*",\n  "ConnectionStrings": {\n    "DefaultConnection": "Server=localhost;Port=3306;database=cretaceous_api;uid=[YOUR-USERNAME-HERE];pwd=[YOUR-PASSWORD-HERE];"\n  }\n}\n')),(0,r.kt)("p",null,"In the connection string, make sure to update the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pwd")," with your own username and password."),(0,r.kt)("h3",{id:"create-the-initial-migration"},"Create the Initial Migration"),(0,r.kt)("p",null,"Now we're ready to create our initial migration and update the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef migrations add Initial\n$ dotnet ef database update\n")),(0,r.kt)("p",null,"In the next lesson, we'll learn how to seed our database, and then we'll start writing custom API endpoints."))}u.isMDXComponent=!0}}]);