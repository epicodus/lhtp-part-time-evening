"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90980],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Customizing Entity Properties with Data Annotations",id:"customizing-entity-properties-with-data-annotations",slug:"customizing-entity-properties-with-data-annotations",hide_table_of_contents:!0,sidebar_position:14,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1c_customizing_entity_properties_with_data_annotations.md"},r=void 0,s={unversionedId:"c-and-net/many-to-many-relationships/customizing-entity-properties-with-data-annotations",id:"c-and-net/many-to-many-relationships/customizing-entity-properties-with-data-annotations",title:"\ud83d\udcd3 Customizing Entity Properties with Data Annotations",description:"At the end of the lesson on model validation with validation attributes, we added two validation attributes to our Item model: we made the Item.Description property [Required], and we set a [Range] between 1 and the integer's max value for the Item.CategoryId property.",source:"@site/docs/c-and-net/12_many-to-many-relationships/1c-customizing-entity-properties-with-data-annotations.md",sourceDirName:"c-and-net/12_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/customizing-entity-properties-with-data-annotations",permalink:"/c-and-net/many-to-many-relationships/customizing-entity-properties-with-data-annotations",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"\ud83d\udcd3 Customizing Entity Properties with Data Annotations",id:"customizing-entity-properties-with-data-annotations",slug:"customizing-entity-properties-with-data-annotations",hide_table_of_contents:!0,sidebar_position:14,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1c_customizing_entity_properties_with_data_annotations.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Model Validation with Validation Attributes",permalink:"/c-and-net/many-to-many-relationships/model-validation-with-validation-attributes"},next:{title:"\u270f\ufe0f Journal #11 Discussion",permalink:"/c-and-net/many-to-many-relationships/journal-11-discussion"}},l={},p=[{value:"How Entity Properties Are Configured in our Database",id:"how-entity-properties-are-configured-in-our-database",level:2},{value:"Seeing How an Entity Property Is Customized with Data Annotations",id:"seeing-how-an-entity-property-is-customized-with-data-annotations",level:2},{value:"Takeaways",id:"takeaways",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of the lesson on model validation with validation attributes, we added two validation attributes to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," model: we made the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," property ",(0,o.kt)("inlineCode",{parentName:"p"},"[Required]"),", and we set a ",(0,o.kt)("inlineCode",{parentName:"p"},"[Range]")," between 1 and the integer's max value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.CategoryId")," property. "),(0,o.kt)("p",null,"Well, in the process of adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"[Required]")," validation attribute to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," property, we were also specifying how ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," as an ",(0,o.kt)("strong",{parentName:"p"},"entity property")," should be configured in our database. That's right \u2014 ",(0,o.kt)("strong",{parentName:"p"},"data annotations can be used to configure our entities in code-first development with EF Core"),".   "),(0,o.kt)("p",null,"In the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," having the ",(0,o.kt)("inlineCode",{parentName:"p"},"[Required]")," data annotation, this now updates our entity property to be non-nullable. When a database column is non-nullable, it means it can't be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", or have no value. This means that each entry in that table must have a value for that column, because the values for that column can't be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"However, to make this change reflected in our database, we need to create a migration and then update our database. Let's walkthrough this whole process. We'll also pause to look at the migration we create to see how to can verify how data annotations change our entity properties. At the end of this lesson, we'll talk about the important takeaways."),(0,o.kt)("h2",{id:"how-entity-properties-are-configured-in-our-database"},"How Entity Properties Are Configured in our Database"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The first thing to understand about entity properties is that EF Core handles creating all of the default configurations based on the code within our models. And usually those default configurations are sufficient! For example, the default configurations for our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," entity property is for there to be a column called ",(0,o.kt)("inlineCode",{parentName:"p"},"Description")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"longtext")," that is ",(0,o.kt)("inlineCode",{parentName:"p"},"nullable")," added to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," table."),(0,o.kt)("p",null,"There are also specific default configurations for primary keys (like ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.ItemId"),") and foreign keys (like ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.CategoryId"),"). Again, these defaults are more than sufficient \u2014 they are set up in order for our code-first migrations to set up conventional tables and columns as well as relationships within our MySQL database.  "),(0,o.kt)("p",null,"When we add a data annotation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," property, we're creating a custom configuration for our entity property. We can do this as-needed. As we've already covered, adding ",(0,o.kt)("inlineCode",{parentName:"p"},"[Required]")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," entity property will cause it to be non-nullable. The next steps are to create a new migration and update the database, which we'll cover more about in a moment."),(0,o.kt)("div",{class:"filename"},"Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace ToDoList.Models\n{\n    public class Item\n    {\n        public int ItemId { get; set; }\n        [Required(ErrorMessage = "The item\'s description can\'t be empty!")]\n        public string Description { get; set; }\n        [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]\n        public int CategoryId { get; set; }\n        public Category Category { get; set; }\n        public List<ItemTag> JoinEntities { get;}\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[Required]")," data annotation is a part of ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"System.ComponentModel.DataAnnotations")," namespace"),". However, ",(0,o.kt)("strong",{parentName:"p"},"not all data annotations listed within the ",(0,o.kt)("inlineCode",{parentName:"strong"},"System.ComponentModel.DataAnnotations")," namespace apply to entity properties.")," For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"[Range]")," data annotation does not do anything to entity properties."),(0,o.kt)("p",null,"To see a complete list of different ways we can configure entity properties, review the MS Docs on ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/entity-properties?tabs=data-annotations%2Cwithout-nrt"},"entity properties"),". This documentation covers default configurations, as well as data annotations that are a part of ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.schema?view=net-6.0"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"System.ComponentModel.DataAnnotations.Schema")," namespace")," that are used with EF Core entities. "),(0,o.kt)("h2",{id:"seeing-how-an-entity-property-is-customized-with-data-annotations"},"Seeing How an Entity Property Is Customized with Data Annotations"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can see exactly how an entity property is customized with a data annotation by creating a new migration and reviewing the changes within. Remember that a ",(0,o.kt)("strong",{parentName:"p"},"migration")," is simply a file that describes an update to the database. Every time we change our entities in our code, we need to make a new migration that describes that change, which we can then use to update our database. "),(0,o.kt)("p",null,"Let's create a new migration now. In the production directory of our To Do List app, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet ef migrations add RequireItemDescription\n")),(0,o.kt)("p",null,"Keep in mind that the name of our migration should be descriptive! We could have also chosen a name like ",(0,o.kt)("inlineCode",{parentName:"p"},"MakeItemDescriptionNonNullable"),"."),(0,o.kt)("p",null,"Next, let's take a look at the new migration we created. Open the newly created migration file and take a look at the changes described within. It should be named something similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrations/20221222195805_RequireItemDescription.cs"),"."),(0,o.kt)("div",{class:"filename"},"Migrations/20221222195805_RequireItemDescription.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.EntityFrameworkCore.Migrations;\n\n#nullable disable\n\nnamespace ToDoList.Migrations\n{\n    public partial class RequireItemDescription : Migration\n    {\n        protected override void Up(MigrationBuilder migrationBuilder)\n        {\n            migrationBuilder.UpdateData(\n                table: "Items",\n                keyColumn: "Description",\n                keyValue: null,\n                column: "Description",\n                value: "");\n\n            migrationBuilder.AlterColumn<string>(\n                name: "Description",\n                table: "Items",\n                type: "longtext",\n                nullable: false,\n                oldClrType: typeof(string),\n                oldType: "longtext",\n                oldNullable: true)\n                .Annotation("MySql:CharSet", "utf8mb4")\n                .OldAnnotation("MySql:CharSet", "utf8mb4");\n        }\n\n        protected override void Down(MigrationBuilder migrationBuilder)\n        {\n            migrationBuilder.AlterColumn<string>(\n                name: "Description",\n                table: "Items",\n                type: "longtext",\n                nullable: true,\n                oldClrType: typeof(string),\n                oldType: "longtext")\n                .Annotation("MySql:CharSet", "utf8mb4")\n                .OldAnnotation("MySql:CharSet", "utf8mb4");\n        }\n    }\n}\n')),(0,o.kt)("p",null,"First, a refresher: the ",(0,o.kt)("inlineCode",{parentName:"p"},"Up()")," method describes how to update our database with the new change, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Down()")," method describes how to remove that change from our database. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Down()")," method would be used if we were to update our database with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef database update")," and then later remove the last migration with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet ef migrations remove"),". As needed, we can directly update the code within these migrations files, though you likely won't have a reason to in your projects."),(0,o.kt)("p",null,"If we take a closer look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Up()")," method, we can see the exact update we're making to our database: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("inlineCode",{parentName:"li"},"nullable: false"),", the ",(0,o.kt)("inlineCode",{parentName:"li"},"Description")," column within the ",(0,o.kt)("inlineCode",{parentName:"li"},"Items")," table is being updated to not allow ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," values."),(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("inlineCode",{parentName:"li"},"oldNullable: true"),", we can see the previous state for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Description")," column as accepting ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," values.")),(0,o.kt)("p",null,"The process of looking inside the migration file just verifies that the ",(0,o.kt)("inlineCode",{parentName:"p"},"[Required]")," validation attribute for ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.Description")," not only provided model validation in our apps, but also re-configured our entity property to be non-nullable. "),(0,o.kt)("p",null,"To complete the process of updating our entity property, we simply need to update our database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet ef database update\n")),(0,o.kt)("h2",{id:"takeaways"},"Takeaways"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The big takeaway of this lesson is that we need to be aware of how data annotations used for model validation can also change how our entity properties are configured. When this happens, we'll want to track the new configuration with a new migration and an update to our database."),(0,o.kt)("p",null,"There won't be many cases in which we'll want to directly configure our entity properties, though you are welcome to experiment more on your own. Generally, we'll end up configuring our entity properties because we want to add model validation to our project's models. "),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/5_model_validation"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 5","_","model","_","validation"))))}m.isMDXComponent=!0}}]);