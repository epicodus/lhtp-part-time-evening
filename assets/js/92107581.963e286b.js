"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[58857],{30876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=i,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7896),i=(a(2784),a(30876));const r={title:"Seeding the Database",id:"seeding-the-database",slug:"seeding-the-database",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0da_seeding_database.md"},o=void 0,l={unversionedId:"c-and-net/building-an-api/seeding-the-database",id:"c-and-net/building-an-api/seeding-the-database",title:"Seeding the Database",description:"In this lesson, we'll learn how to seed the database with data so that we can quickly and efficiently test our API without having to manually add data in MySQL Workbench or via POST requests.",source:"@site/docs/c-and-net/16_building-an-api/0da-seeding-database.md",sourceDirName:"c-and-net/16_building-an-api",slug:"/c-and-net/building-an-api/seeding-the-database",permalink:"/c-and-net/building-an-api/seeding-the-database",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Seeding the Database",id:"seeding-the-database",slug:"seeding-the-database",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0da_seeding_database.md"},sidebar:"c-and-net",previous:{title:"Adding a Model and Database",permalink:"/c-and-net/building-an-api/adding-a-model-and-database"},next:{title:"API: Create and Read",permalink:"/c-and-net/building-an-api/api-create-and-read"}},d={},s=[{value:"Seeding Data",id:"seeding-data",level:2},{value:"Create the Migration",id:"create-the-migration",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll learn how to seed the database with data so that we can quickly and efficiently test our API without having to manually add data in MySQL Workbench or via POST requests. "),(0,i.kt)("h2",{id:"seeding-data"},"Seeding Data"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Seeding a database is simply populating a database with data. The data can range from important and necessary authorization user roles to just dummy data."),(0,i.kt)("p",null,"In the case of the Cretaceous Park API, we'll seed the database with a handful of ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," entries so that we can test the endpoints we create in upcoming lessons."),(0,i.kt)("p",null,"In order to add the data, we'll make changes to our ",(0,i.kt)("inlineCode",{parentName:"p"},"CretaceousParkContext")," class: we'll override ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.data.entity.dbcontext.onmodelcreating?view=entity-framework-6.2.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"DbContext.OnModelCreating()")," method")," in order to have it add multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," objects to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," entity: "),(0,i.kt)("div",{class:"filename"},"Models/CretaceousParkContext.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.EntityFrameworkCore;\n\nnamespace CretaceousApi.Models\n{\n  public class CretaceousApiContext : DbContext\n  {\n    public DbSet<Animal> Animals { get; set; }\n\n    public CretaceousApiContext(DbContextOptions<CretaceousApiContext> options) : base(options)\n    {\n    }\n\n    protected override void OnModelCreating(ModelBuilder builder)\n    {\n      builder.Entity<Animal>()\n        .HasData(\n          new Animal { AnimalId = 1, Name = "Matilda", Species = "Woolly Mammoth", Age = 7 },\n          new Animal { AnimalId = 2, Name = "Rexie", Species = "Dinosaur", Age = 10 },\n          new Animal { AnimalId = 3, Name = "Matilda", Species = "Dinosaur", Age = 2 },\n          new Animal { AnimalId = 4, Name = "Pip", Species = "Shark", Age = 4 },\n          new Animal { AnimalId = 5, Name = "Bartholomew", Species = "Dinosaur", Age = 22 }\n        );\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Let's breakdown this new code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We declare the method as ",(0,i.kt)("inlineCode",{parentName:"p"},"protected override")," since we only want this method to be accessible to the class itself and we want to override the default method. Since the method doesn't return anything, we also specify ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," as the return value. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The method requires a parameter of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelBuilder")," that we will call ",(0,i.kt)("inlineCode",{parentName:"p"},"builder"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"builder"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity<Type>()")," method which returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityTypeBuilder")," object that allows us to configure the type we specify in the method call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We can then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"HasData()")," method of the returned ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityTypeBuilder")," and pass the method any manner of entries we'd like to use to seed the database. We'll add five initial ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," entries to our database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Notice that we include the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimalId")," property in each ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," object that we add to our database. This is the primary key of our ",(0,i.kt)("inlineCode",{parentName:"p"},"animals")," table and it is usually set by the database itself. Because we're including it with the seeded data, we need to be sure that there's no data existing in the database that could cause a conflict with the seeded data that we're adding. For example, an existing animal object with the primary key of 1 would conflict with the seeded animal object with an id of 1. We can avoid any errors by seeding data before we start building and testing our endpoints, or by truncating the table in the database, which will delete all data within it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, note that EF Core handles calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating()")," method during the process of creating the DbContext, so we don't need to worry about calling ",(0,i.kt)("inlineCode",{parentName:"p"},"OnModelCreating()")," anywhere, only redefining how it should work."))),(0,i.kt)("h3",{id:"create-the-migration"},"Create the Migration"),(0,i.kt)("p",null,"We can now create a new migration and update the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef migrations add SeedData\n$ dotnet ef database update\n")),(0,i.kt)("p",null,"We should now be able to see our 5 new ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," entries in the database!"),(0,i.kt)("p",null,"If you'd like to read more about Data Seeding, take a peek at the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/modeling/data-seeding"},"official documentation"),"."),(0,i.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,i.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/1_setup_and_seeding"},(0,i.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Cretaceous Park API: ",(0,i.kt)("inlineCode",{parentName:"a"},"1_setup_and_seeding")))))}u.isMDXComponent=!0}}]);