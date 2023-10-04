"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54329],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(2784);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=s,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7896),s=(n(2784),n(30876));const o={title:"Objects Within Objects Setup",id:"objects-within-objects-setup",slug:"objects-within-objects-setup",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3b_objects_within_objects_setup.md"},r=void 0,i={unversionedId:"c-and-net/basic-web-applications-part-2/objects-within-objects-setup",id:"c-and-net/basic-web-applications-part-2/objects-within-objects-setup",title:"Objects Within Objects Setup",description:"When we think about our own individual To Do Lists, there are usually different types of tasks on that list. For instance, there are to dos that we need to complete for Epicodus, like our C# homework. There are chores at home such as washing dishes or mowing the lawn. There are likely other miscellaneous tasks, too, such as writing someone a birthday card.",source:"@site/docs/c-and-net/9_basic-web-applications-part-2/3b-objects-within-objects-setup.md",sourceDirName:"c-and-net/9_basic-web-applications-part-2",slug:"/c-and-net/basic-web-applications-part-2/objects-within-objects-setup",permalink:"/c-and-net/basic-web-applications-part-2/objects-within-objects-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Objects Within Objects Setup",id:"objects-within-objects-setup",slug:"objects-within-objects-setup",hide_table_of_contents:!0,sidebar_position:2,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3b_objects_within_objects_setup.md"},sidebar:"c-and-net",previous:{title:"To Do List, Places You've Been, Packer Tracker, Tamagotchi",permalink:"/c-and-net/basic-web-applications-part-2/to-do-list-places-you've-been-packer-tracker-tamagotchi"},next:{title:"Saving Objects Within Other Objects",permalink:"/c-and-net/basic-web-applications-part-2/saving-objects-within-other-objects"}},l={},c=[{value:"Creating a Parent Class",id:"creating-a-parent-class",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When we think about our own individual To Do Lists, there are usually different types of tasks on that list. For instance, there are to dos that we need to complete for Epicodus, like our C# homework. There are chores at home such as washing dishes or mowing the lawn. There are likely other miscellaneous tasks, too, such as writing someone a birthday card."),(0,s.kt)("p",null,"Let's update our To Do List application to allow users to organize their tasks by type. Over the next several lessons, we'll create a ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," class. Each ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," object will represent and store different categories of To Do List ",(0,s.kt)("inlineCode",{parentName:"p"},"Item"),'s such as "Work", "Home", and "School." This setup is commonly referred to as ',(0,s.kt)("strong",{parentName:"p"},"objects within objects"),"."),(0,s.kt)("h2",{id:"creating-a-parent-class"},"Creating a Parent Class"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Let's start by creating a ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," class in a new ",(0,s.kt)("inlineCode",{parentName:"p"},"ToDoList/Models/Category.cs")," file. It will also need a corresponding test file at ",(0,s.kt)("inlineCode",{parentName:"p"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),". The updated project structure looks like this:"),(0,s.kt)("pre",null,"ToDoList.Solution \u251c\u2500\u2500 ToDoList \u2502\xa0\xa0 \u251c\u2500\u2500 Controllers \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 HomeController.cs \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ItemsController.cs \u2502\xa0\xa0 \u251c\u2500\u2500 Models \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Category.cs \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Item.cs \u2502\xa0\xa0 \u251c\u2500\u2500 Program.cs \u2502   \u251c\u2500\u2500 Properties \u2502   \u2502   \u2514\u2500\u2500 launchSettings.json \u2502\xa0\xa0 \u251c\u2500\u2500 ToDoList.csproj \u2502\xa0\xa0 \u2514\u2500\u2500 Views \u2502\xa0\xa0     \u251c\u2500\u2500 Home \u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 Index.cshtml \u2502\xa0\xa0     \u2514\u2500\u2500 Items \u2502\xa0\xa0         \u251c\u2500\u2500 DeleteAll.cshtml \u2502\xa0\xa0         \u251c\u2500\u2500 Index.cshtml \u2502\xa0\xa0         \u251c\u2500\u2500 New.cshtml \u2502\xa0\xa0         \u2514\u2500\u2500 Show.cshtml \u2514\u2500\u2500 ToDoList.Tests \u251c\u2500\u2500 ModelTests \u2502\xa0\xa0 \u251c\u2500\u2500 CategoryTests.cs \u2502\xa0\xa0 \u2514\u2500\u2500 ItemTests.cs \u2514\u2500\u2500 ToDoList.Tests.csproj"),(0,s.kt)("p",null,"In our new file, we'll do the following: declare a namespace and class, import the ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," library to use ",(0,s.kt)("inlineCode",{parentName:"p"},"List"),"s, and declare properties."),(0,s.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n  public class Category\n  {\n    private static List<Category> _instances = new List<Category> {};\n    public string Name { get; set; }\n    public int Id { get; }\n    public List<Item> Items { get; set; }\n  }\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," will contain a static ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," of all ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," objects, similar to the ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," property we're currently using in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," class.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Name")," will contain a name for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," of items.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Id")," will contain a unique ID number that will be assigned in the constructor, similar to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Id")," we implemented in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," class.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Items")," will contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," of all ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," objects that belong to that ",(0,s.kt)("inlineCode",{parentName:"p"},"Category"),". For instance, if we had a ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," with a ",(0,s.kt)("inlineCode",{parentName:"p"},"Name"),' of "chores," this list would contain a series of ',(0,s.kt)("inlineCode",{parentName:"p"},"Item")," objects with ",(0,s.kt)("inlineCode",{parentName:"p"},"Description"),'s like "mop the floor", "scrub the shower", or "do the dishes."')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Note that we're using an auto-implemented property with ",(0,s.kt)("inlineCode",{parentName:"p"},"Items")," and declaring the data type as a ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"Item"),"s."))),(0,s.kt)("p",null,"It's time to add a constructor. We'll start with a test first. Let's configure our new test file with standard boilerplate code:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ToDoList.Models;\nusing System.Collections.Generic;\nusing System;\n\nnamespace ToDoList.Tests\n{\n  [TestClass]\n  public class CategoryTests\n  {\n\n  }\n}\n")),(0,s.kt)("p",null,"Next, we'll add a test to confirm our constructor can successfully create ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," objects:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ToDoList.Models;\nusing System.Collections.Generic;\nusing System;\n\nnamespace ToDoList.Tests\n{\n  [TestClass]\n  public class CategoryTests\n  {\n\n    [TestMethod]\n    public void CategoryConstructor_CreatesInstanceOfCategory_Category()\n    {\n      Category newCategory = new Category("test category");\n      Assert.AreEqual(typeof(Category), newCategory.GetType());\n    }\n\n  }\n}\n')),(0,s.kt)("p",null,"Let's continue with our logic and add the constructor so that we run this test and see it pass:"),(0,s.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n  public class Category\n  {\n    private static List<Category> _instances = new List<Category> {};\n    public string Name { get; set; }\n    public int Id { get; }\n    public List<Item> Items { get; set; }\n\n    public Category(string categoryName)\n    {\n      Name = categoryName;\n      _instances.Add(this);\n      Id = _instances.Count;\n      Items = new List<Item>{};\n    }\n  }\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The constructor only accepts an argument for ",(0,s.kt)("inlineCode",{parentName:"p"},"categoryName"),", which is assigned to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Name")," property. All other properties are assigned automatically in the body of the constructor.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"We add each ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," to the static ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," list in the constructor when it's created.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"We assign an ",(0,s.kt)("inlineCode",{parentName:"p"},"Id")," number equal to the number of ",(0,s.kt)("inlineCode",{parentName:"p"},"Category"),"s in ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"We create a new empty ",(0,s.kt)("inlineCode",{parentName:"p"},"List")," to eventually contain ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," objects that belong to this ",(0,s.kt)("inlineCode",{parentName:"p"},"Category"),"."))),(0,s.kt)("p",null,"Next we'll add several methods and their corresponding tests. All of this should be review, so we'll go quickly."),(0,s.kt)("p",null,"First, let's test that a ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," can successfully retrieve its name. We'll add a test and watch it pass thanks to our constructor code:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void GetName_ReturnsName_String()\n  {\n    //Arrange\n    string name = "Test Category";\n    Category newCategory = new Category(name);\n\n    //Act\n    string result = newCategory.Name;\n\n    //Assert\n    Assert.AreEqual(name, result);\n  }\n\n...\n')),(0,s.kt)("p",null,"Next, we'll test that we can retrieve ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," IDs:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void GetId_ReturnsCategoryId_Int()\n  {\n    //Arrange\n    string name = "Test Category";\n    Category newCategory = new Category(name);\n\n    //Act\n    int result = newCategory.Id;\n\n    //Assert\n    Assert.AreEqual(1, result);\n  }\n\n...\n')),(0,s.kt)("p",null,"However, if we run our tests, they don't pass. We get a failure message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{style:{color:"red"}},"Error Message: Assert.AreEqual failed. Expected:<1>. Actual:<3>. Stack Trace: at ToDoList.Tests.CategoryTests.GetId_ReturnsCategoryId_Int() in ToDoList.Solution/ToDoList.Tests/ModelTests/CategoryTests.cs:line 44")),(0,s.kt)("p",null,"It says we expected to receive ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," but got an ID of ",(0,s.kt)("inlineCode",{parentName:"p"},"3")," instead. This is because we assign each ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Id")," by running ",(0,s.kt)("inlineCode",{parentName:"p"},"Id = _instances.Count;")," in the constructor. The third test is receiving a ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," with an ",(0,s.kt)("inlineCode",{parentName:"p"},"Id")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"3")," because sample ",(0,s.kt)("inlineCode",{parentName:"p"},"Category"),"s created in previous tests remain in the static ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," list."),(0,s.kt)("p",null,"We can fix this by disposing of all ",(0,s.kt)("inlineCode",{parentName:"p"},"Category"),"s between tests with a teardown method similar to the one we implemented in our ",(0,s.kt)("inlineCode",{parentName:"p"},"Triangle")," tests in the last course section. We'll update the top of our ",(0,s.kt)("inlineCode",{parentName:"p"},"CategoryTests")," class like this:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\nnamespace ToDoList.Tests\n{\n  [TestClass]\n  public class CategoryTests : IDisposable\n  {\n\n    public void Dispose()\n    {\n      Category.ClearAll();\n    }\n\n    ...\n  ...\n...\n")),(0,s.kt)("p",null,"Next, we'll define this ",(0,s.kt)("inlineCode",{parentName:"p"},"ClearAll()")," method:"),(0,s.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n  public static void ClearAll()\n  {\n    _instances.Clear();\n  }\n\n...\n")),(0,s.kt)("p",null,"After these changes, all tests should pass."),(0,s.kt)("p",null,"Moving on, we know we'll also need functionality to retrieve all ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," objects to display in our app. Let's add that next. We'll start with a test:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void GetAll_ReturnsAllCategoryObjects_CategoryList()\n  {\n    //Arrange\n    string name01 = "Work";\n    string name02 = "School";\n    Category newCategory1 = new Category(name01);\n    Category newCategory2 = new Category(name02);\n    List<Category> newList = new List<Category> { newCategory1, newCategory2 };\n\n    //Act\n    List<Category> result = Category.GetAll();\n\n    //Assert\n    CollectionAssert.AreEqual(newList, result);\n  }\n\n...\n')),(0,s.kt)("p",null,"Verify that it fails (it should throw a compiler error, since the method is not defined yet) and then add the static method to make it pass:"),(0,s.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public static List<Category> GetAll()\n    {\n      return _instances;\n    }\n\n...\n")),(0,s.kt)("p",null,"We also know we'll want a ",(0,s.kt)("inlineCode",{parentName:"p"},"Find()")," method to locate and display specific ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," objects. First, a test:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void Find_ReturnsCorrectCategory_Category()\n  {\n    //Arrange\n    string name01 = "Work";\n    string name02 = "School";\n    Category newCategory1 = new Category(name01);\n    Category newCategory2 = new Category(name02);\n\n    //Act\n    Category result = Category.Find(2);\n\n    //Assert\n    Assert.AreEqual(newCategory2, result);\n  }\n\n...\n')),(0,s.kt)("p",null,"Here's the logic to pass this test:"),(0,s.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public static Category Find(int searchId)\n    {\n      return _instances[searchId-1];\n    }\n\n...\n")),(0,s.kt)("p",null,"Notice this method is quite similar to our ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," class ",(0,s.kt)("inlineCode",{parentName:"p"},"Find()")," method. It accepts an ID as an argument and then locates the ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," in the static ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," array that matches."),(0,s.kt)("p",null,"After following along with all steps in this lesson, all of our tests will pass and the new ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," class will look like this:"),(0,s.kt)("div",{class:"filename"},"ToDoList/Models/Category.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n  public class Category\n  {\n    private static List<Category> _instances = new List<Category> {};\n    public string Name { get; set; }\n    public int Id { get; }\n    public List<Item> Items { get; set; }\n\n    public Category(string categoryName)\n    {\n      Name = categoryName;\n      _instances.Add(this);\n      Id = _instances.Count;\n      Items = new List<Item>{};\n    }\n\n    public static void ClearAll()\n    {\n      _instances.Clear();\n    }\n\n    public static List<Category> GetAll()\n    {\n      return _instances;\n    }\n\n    public static Category Find(int searchId)\n    {\n      return _instances[searchId-1];\n    }\n  }\n}\n")),(0,s.kt)("p",null,"The corresponding test file looks like this:"),(0,s.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/CategoryTests.cs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.VisualStudio.TestTools.UnitTesting;\nusing ToDoList.Models;\nusing System.Collections.Generic;\nusing System;\n\nnamespace ToDoList.Tests\n{\n  [TestClass]\n  public class CategoryTests : IDisposable\n  {\n\n    public void Dispose()\n    {\n      Category.ClearAll();\n    }\n\n    [TestMethod]\n    public void CategoryConstructor_CreatesInstanceOfCategory_Category()\n    {\n      Category newCategory = new Category("test category");\n      Assert.AreEqual(typeof(Category), newCategory.GetType());\n    }\n\n    [TestMethod]\n    public void GetName_ReturnsName_String()\n    {\n      //Arrange\n      string name = "Test Category";\n      Category newCategory = new Category(name);\n\n      //Act\n      string result = newCategory.Name;\n\n      //Assert\n      Assert.AreEqual(name, result);\n    }\n\n    [TestMethod]\n    public void GetId_ReturnsCategoryId_Int()\n    {\n      //Arrange\n      string name = "Test Category";\n      Category newCategory = new Category(name);\n\n      //Act\n      int result = newCategory.Id;\n\n      //Assert\n      Assert.AreEqual(1, result);\n    }\n\n    [TestMethod]\n    public void GetAll_ReturnsAllCategoryObjects_CategoryList()\n    {\n      //Arrange\n      string name01 = "Work";\n      string name02 = "School";\n      Category newCategory1 = new Category(name01);\n      Category newCategory2 = new Category(name02);\n      List<Category> newList = new List<Category> { newCategory1, newCategory2 };\n\n      //Act\n      List<Category> result = Category.GetAll();\n\n      //Assert\n      CollectionAssert.AreEqual(newList, result);\n    }\n\n    [TestMethod]\n    public void Find_ReturnsCorrectCategory_Category()\n    {\n      //Arrange\n      string name01 = "Work";\n      string name02 = "School";\n      Category newCategory1 = new Category(name01);\n      Category newCategory2 = new Category(name02);\n\n      //Act\n      Category result = Category.Find(2);\n\n      //Assert\n      Assert.AreEqual(newCategory2, result);\n    }\n  }\n}\n')),(0,s.kt)("p",null,"We've set up our new ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," class with basic functionality that's thoroughly tested. In the next lesson, we'll build it out further so we can save ",(0,s.kt)("inlineCode",{parentName:"p"},"Item")," objects within ",(0,s.kt)("inlineCode",{parentName:"p"},"Category")," objects."),(0,s.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,s.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/7_objects_within_objects_setup"},(0,s.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 7","_","objects","_","within","_","objects","_","setup"))))}d.isMDXComponent=!0}}]);