"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[65320],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7896),o=(a(2784),a(30876));const i={title:"\ud83d\udcd3 Code First Development and Migrations",id:"code-first-development-and-migrations",slug:"code-first-development-and-migrations",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0ba_code_first_development_and_migrations.md"},r=void 0,s={unversionedId:"c-and-net/many-to-many-relationships/code-first-development-and-migrations",id:"c-and-net/many-to-many-relationships/code-first-development-and-migrations",title:"\ud83d\udcd3 Code First Development and Migrations",description:"So far, we've manually created and updated our database using MySQL Workbench. However, this approach isn't very effective for a large production application where many developers are collaborating together. Let's say we have many different teams that are working on different features in an application and we're working on a team that makes changes to the database. How can we convey the changes to other teams working on the application? We'd need to give everyone exact instructions on the changes we made, which could get tedious fast, especially if we're making a lot of changes.",source:"@site/docs/c-and-net/12_many-to-many-relationships/0ba-code-first-development-and-migrations.md",sourceDirName:"c-and-net/12_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/code-first-development-and-migrations",permalink:"/c-and-net/many-to-many-relationships/code-first-development-and-migrations",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\ud83d\udcd3 Code First Development and Migrations",id:"code-first-development-and-migrations",slug:"code-first-development-and-migrations",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0ba_code_first_development_and_migrations.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Many-to-Many Relationship Review",permalink:"/c-and-net/many-to-many-relationships/many-to-many-relationship-review"},next:{title:"\ud83d\udcd3 Many-to-Many Relationships: Join Entities",permalink:"/c-and-net/many-to-many-relationships/many-to-many-relationships-join-entities"}},l={},d=[{value:"To Do List Refactor Plan",id:"to-do-list-refactor-plan",level:2},{value:"Database Migrations",id:"database-migrations",level:2},{value:"Installing Tools",id:"installing-tools",level:3},{value:"Creating a Migration",id:"creating-a-migration",level:3},{value:"The <code>Migrations</code> Directory",id:"the-migrations-directory",level:3},{value:"Updating the Database with the Migration",id:"updating-the-database-with-the-migration",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far, we've manually created and updated our database using MySQL Workbench. However, this approach isn't very effective for a large production application where many developers are collaborating together. Let's say we have many different teams that are working on different features in an application and we're working on a team that makes changes to the database. How can we convey the changes to other teams working on the application? We'd need to give everyone exact instructions on the changes we made, which could get tedious fast, especially if we're making a lot of changes."),(0,o.kt)("p",null,"It's very common for a database to change over time. In fact, in large projects, there may be hundreds or even thousands of changes to a database over the course of a project. It would be very tedious to make all those changes in MySQL Workbench or another database tool."),(0,o.kt)("p",null,"Fortunately, EF Core provides a solution for this. We can use ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli"},(0,o.kt)("strong",{parentName:"a"},"migrations"))," to create a new database or update an existing database based on our code. Migrations are a common feature of many frameworks, including Rails, which uses Active Record. So in this lesson, we're going to learn about database migrations, how to create them, and install the tools necessary for the job. The instructions in this lesson can be applied to any other project you create."),(0,o.kt)("h2",{id:"to-do-list-refactor-plan"},"To Do List Refactor Plan"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this lesson, we'll begin to refactor our To Do List app to use EF Core migrations. We'll build off of the To Do List app that we completed by the end of the last course section. You are welcome to continue building off your own project on a new branch or save your changes to a new repo. Or, you are welcome to use the main branch of the following repo as a ",(0,o.kt)("strong",{parentName:"p"},"starter project"),":"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/1_starter_project"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Starter GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship"))),(0,o.kt)("p",null,"Before proceeding, make sure to update the name of your database in ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," to reflect the new project we are building. In the lessons, we'll use the name ",(0,o.kt)("inlineCode",{parentName:"p"},"to_do_list_with_many_to_many"),", but you can pick whatever you prefer:"),(0,o.kt)("div",{class:"filename"},"ToDoList/appsettings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ConnectionStrings": {\n    "DefaultConnection": "Server=localhost;Port=3306;database=to_do_list_with_many_to_many;uid=root;pwd=epicodus;"\n  }\n}\n')),(0,o.kt)("h2",{id:"database-migrations"},"Database Migrations"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"migration")," is simply a file that describes an update to the database. When we use EF Core to develop and manage our database from our project's codebase, we define how our database should be structured using our project's models and the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," class. Part of this involves telling EF Core to create a migration. When a migration is created, EF Core reviews our project's models and creates a file that describes how our database should be structured based on our models. Each migration is a snapshot of how our database should be structured, and every time we make changes to our entities (our project's models like ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Category"),"), we need to make a new migration so that EF Core knows how to update our database."),(0,o.kt)("p",null,"A large project could have thousands of migrations. In order to recreate the database schema, a developer simply needs to run a command and all the migrations will run sequentially, updating the database to its current state. This can make our programs more flexible and significantly speed up the time it takes to make changes to our database."),(0,o.kt)("h3",{id:"installing-tools"},"Installing Tools"),(0,o.kt)("p",null,"For Entity Framework Core, we use a tool called ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet-ef")," to create migrations and update our database. We'll install this tool globally so that it is always available in all of our projects. Run the following command in your terminal now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet tool install --global dotnet-ef --version 6.0.0\n")),(0,o.kt)("p",null,"Optionally, you can read more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef")," tool ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/cli/dotnet"},"on the docs"),"."),(0,o.kt)("p",null,"In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet-ef"),", we also need to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore.Design")," package in our ASP.NET Core projects. Within the production directory of our To Do List app, run the following command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package Microsoft.EntityFrameworkCore.Design -v 6.0.0\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore.Design")," package adds tooling to our project so that EF Core can find our  DbContext (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs"),") during ",(0,o.kt)("strong",{parentName:"p"},"design time"),". According to the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli"},"official documentation"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Some of the EF Core Tools commands (for example, the Migrations commands) require a derived DbContext instance to be created at design time in order to gather details about the application's entity types and how they map to a database schema.")),(0,o.kt)("p",null,"We're familiar with the term ",(0,o.kt)("strong",{parentName:"p"},"run time"),", when we run our application with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet watch run"),"; but what exactly is ",(0,o.kt)("strong",{parentName:"p"},"design time"),"? It's the time when we are actually writing and designing our code. As noted in the quote above, we need to add tools for EF Core to access our DbContext at design time so that our migrations (the model of our database) can be created and applied (when we update the database with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef database update"),")."),(0,o.kt)("p",null,"Note that installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore.Design")," package is all we need to do in order to give EF Core access to our DbContext at design time. However, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"DesignTimeDbContextFactory")," class in our application with which we can configure additional design time services to run. We won't be doing this in our applications. To optionally learn more, visit the following Microsoft (MS) documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli"},"Design-time DbContext Creation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/ef/core/cli/services"},"Design-time Services"))),(0,o.kt)("p",null,"Next, let's look at how to create a database migration. We're not going to do this now, but instead in the next lesson, once all of the necessary setup is in place in our To Do List application. "),(0,o.kt)("h3",{id:"creating-a-migration"},"Creating a Migration"),(0,o.kt)("p",null,"Next, let's learn the command we need to run in order to create a migration. The following command should be run in the project's production directory. For our To Do List app, this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList")," project directory. Go ahead and run this command now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef migrations add Initial\n")),(0,o.kt)("p",null,"When we run the above command, a new migration will be created with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"Initial")," in a new folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrations"),". If this is the first migration in a project, EF Core will automatically generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrations")," folder in the root directory. Note that we can name our migration anything we want, but it's common for the first migration to contain the word ",(0,o.kt)("inlineCode",{parentName:"p"},"Initial")," or something like it. Also note that migration names should be in upper camel case. "),(0,o.kt)("p",null,"When naming subsequent migrations, start with a verb to describe the change that the migration will make to the database. The migration name can be used like a commit message in a version control system, like ",(0,o.kt)("inlineCode",{parentName:"p"},"AddItemsPriority")," if we wanted to add a priority property to our items table. So, the entire command would look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef migrations add AddItemsPriority\n")),(0,o.kt)("p",null,"When we create our migration, EF Core will automatically generate code for how the database should look based on the code that is in our models. Using migrations is often called using ",(0,o.kt)("strong",{parentName:"p"},"code first migrations")," because we will use our entity framework models in our project's code as the source of truth for our database. "),(0,o.kt)("p",null,"The alternative to migrations is using the database as the source of truth and scaffolding our code based on the database; this is called ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/managing-schemas/scaffolding/?tabs=dotnet-core-cli"},(0,o.kt)("strong",{parentName:"a"},"reverse engineering"))," and we won't be using this method in the course."),(0,o.kt)("h3",{id:"the-migrations-directory"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"Migrations")," Directory"),(0,o.kt)("p",null,"For each migration, EF Core will create three files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrations")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Timestamp]_Initial.cs\n[Timestamp]_Initial.Designer.cs\nMyContextModelSnapshot.cs\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"[Timestamp]")," will vary based on when the migration was created and ",(0,o.kt)("inlineCode",{parentName:"p"},"Initial")," will be different based on the name of the migration."),(0,o.kt)("p",null,"The second file is metadata that EF Core needs while the third file is a snapshot of the database for Entity. We won't touch these two files. "),(0,o.kt)("p",null,"The first file, though, can be edited. Here's an example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"[Timestamp]_Initial.cs")," migration file that we can edit (",(0,o.kt)("em",{parentName:"p"},"this is an example only"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore.Migrations;\n\nnamespace ToDoList.Migrations\n{\n    public partial class Initial : Migration\n    {\n        protected override void Up(MigrationBuilder migrationBuilder)\n        {\n            ...\n        }\n\n        protected override void Down(MigrationBuilder migrationBuilder)\n        {\n            ...\n        }\n    }\n}\n")),(0,o.kt)("p",null,"The migration contains two methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"Up")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Down"),". In an ideal world, EF Core will create a perfect scaffold of the migration for us based on our models. However, this isn't always the case. We can add further modifications to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Up")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Down")," method provides instructions for reversing the migration if we decide to revert to the previous migration."),(0,o.kt)("p",null,"We will generally rely on EF Core to take care of migration scaffolding for us, but it's important to be aware that these migrations can be fine-tuned further by modifying the migration file."),(0,o.kt)("h3",{id:"updating-the-database-with-the-migration"},"Updating the Database with the Migration"),(0,o.kt)("p",null,"Once we have verified that the migration looks correct and made any necessary changes, we'll run the following command to update our database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef database update\n")),(0,o.kt)("p",null,"Just like with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef migrations add [MigrationName]"),", we need to run the above command in the production directory of our project. Do so now in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList")," production directory. "),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef database update")," will automatically update our database to reflect the changes listed in our migrations. There is no longer any need for us to directly modify the database in MySQL Workbench! Go ahead and check MySQL Workbench now and look for the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"to_do_list_with_many_to_many")," database."),(0,o.kt)("p",null,"Remember that migrations provide a record of how our database changes. If we make unwanted changes to our database, we should always use a ",(0,o.kt)("strong",{parentName:"p"},"new")," migration (or several migrations) to reverse the changes. This helps ensure that our data is safe and that the log of our migrations match the code in our migration files. It also makes it easy to make changes to a database in a large project where many developers are collaborating. We can push our migrations to GitHub and then another developer can pull our updates and run the migrations with a single command."),(0,o.kt)("p",null,"There is one exception to the rule above: let's say that we made a mistake with our most recent migration and we haven't pushed the changes to GitHub. In this case, we can use the following command to revert the migration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet ef migrations remove\n")),(0,o.kt)("p",null,"Note that if you've already updated your database with the migration that you want to remove, you'll need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef database update")," after you remove the last migration with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef migrations remove"),"."),(0,o.kt)("p",null,"For more information on migrations in EF Core, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/ef/core/managing-schemas/migrations/"},"the official documentation"),"."),(0,o.kt)("p",null,"Up next, we'll learn how to create a many-to-many association."))}m.isMDXComponent=!0}}]);