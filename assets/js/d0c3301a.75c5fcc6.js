"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9778],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const i={title:"Creating a Template Repository",id:"creating-a-template-repository",slug:"creating-a-template-repository",hide_table_of_contents:!0,sidebar_position:5,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2f_working_with_templates.md"},o=void 0,l={unversionedId:"intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/creating-a-template-repository",id:"intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/creating-a-template-repository",title:"Creating a Template Repository",description:"When we create projects using an environment (with multiple packages managed by npm, and webpack to bundle our source code), we'll often start with the exact same files. It can be tedious to build all of these files from scratch, especially when we're building new projects every day.",source:"@site/docs/intermediate-javascript/6_test-driven-development-and-environments-with-javascript-part-2/2f-working-with-templates.md",sourceDirName:"intermediate-javascript/6_test-driven-development-and-environments-with-javascript-part-2",slug:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/creating-a-template-repository",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/creating-a-template-repository",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Creating a Template Repository",id:"creating-a-template-repository",slug:"creating-a-template-repository",hide_table_of_contents:!0,sidebar_position:5,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/2f_working_with_templates.md"},sidebar:"intermediate-javascript",previous:{title:"Working with Multiple Files",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/working-with-multiple-files"},next:{title:"Weekday Calculator, Haiku Creator, RPG (Week-Long Project) - Part 2",permalink:"/intermediate-javascript/test-driven-development-and-environments-with-javascript-part-2/weekday-calculator-haiku-creator-rpg-week-long-project---part-2"}},s={},p=[{value:"Using GitHub Template Repositories",id:"using-github-template-repositories",level:2},{value:"Creating a Template from Shape Tracker",id:"creating-a-template-from-shape-tracker",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When we create projects using an environment (with multiple packages managed by npm, and webpack to bundle our source code), we'll often start with the exact same files. It can be tedious to build all of these files from scratch, especially when we're building new projects every day."),(0,r.kt)("p",null,"Fortunately, we can create template repositories in GitHub which we can reuse (and modify) for future projects. In this lesson, we'll learn how to create a template repository in GitHub as well as how to use the template for other repositories."),(0,r.kt)("h2",{id:"using-github-template-repositories"},"Using GitHub Template Repositories"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, we need to create a repository that includes all the files we want. We'll keep this example simple. It will include just a README. On your computer, go ahead and create a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"template-repo")," which includes the following ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"# (Application Name)\n\n#### (Brief Description of Application)\n\n#### By (Your Name Here)\n\n## Technologies Used\n\n* _List all_\n* _the major technologies_\n* _you used in your project_\n* _here_\n\n## Description\n\n## Setup/Installation Requirements\n\n* _This is a great place_\n* _to list setup instructions_\n* _in a simple_\n* _easy-to-understand_\n* _format_\n\n## Known Bugs\n\n* _Any known issues_\n* _should go here_\n\n## License\n")),(0,r.kt)("p",null,"As we can see, this README contains headers for all of the items that are required in the READMEs for projects we create at Epicodus."),(0,r.kt)("p",null,"The next step is to commit the code, create a GitHub repo, and push your local code to the remote repo. Once that's finished, go to the repository in GitHub and click on ",(0,r.kt)("em",{parentName:"p"},"Settings"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/template-repo-in-settings.png",alt:'Click the checkbox marked "Template Repository" to make the repository a template.'})),(0,r.kt)("p",null,"As the image above shows, once you click on ",(0,r.kt)("em",{parentName:"p"},"Settings"),", you can click the checkbox marked ",(0,r.kt)("em",{parentName:"p"},"Template repository"),". A little green checkmark will pop up by the box, which means that GitHub has auto-saved the update."),(0,r.kt)("p",null,"After checking the box, navigate back to the main page of the repository. You'll see it has a ",(0,r.kt)("em",{parentName:"p"},"Template")," label by the name of the repository:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/template-label.png",alt:"The template label has been added by the name of the repo."})),(0,r.kt)("p",null,"If there's not a ",(0,r.kt)("em",{parentName:"p"},"Template")," label, you'll need to go back to the ",(0,r.kt)("em",{parentName:"p"},"Settings")," and make sure you checked the box."),(0,r.kt)("p",null,"You'll also see that the repository now has a green ",(0,r.kt)("em",{parentName:"p"},"Use This Template")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/TDD-2020/use-this-template-button.png",alt:'There\'s a green "Use This Template" button by the commits in the repository now.'})),(0,r.kt)("p",null,"If we want to create a new repository using this template, we just need to click the ",(0,r.kt)("em",{parentName:"p"},"Use This Template")," button. We'll be taken to a page for creating a new repository. It looks almost exactly the same as the new repository page we've been using so far. The only difference is that we are now creating the repository from a template. We can create the repository as usual, but this time once the repository is created, all of the files from the template will be included in the new repository. Finally, we can clone the repository to our desktop and modify it as needed, changing the README or any other files it already has such as configuration or code files."),(0,r.kt)("h3",{id:"creating-a-template-from-shape-tracker"},"Creating a Template from Shape Tracker"),(0,r.kt)("p",null,"Using a template repository is especially helpful for projects that include boilerplate environments such as the ones we've been building in this section. We can easily create a template repository that includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file, a webpack configuration, and any other configuration files such as what we might need for Babel or ESLint."),(0,r.kt)("p",null,"Now that you've created a template repo for a README, the next step is to create a template for a project that uses webpack. We'll be using a very similar JavaScript environment in the next section so you'll be able to reuse this template then, too."),(0,r.kt)("p",null,"You can base your template off of the Shape Tracker repo (linked below) or a project you created in this course section. If you decide to use the Shape Tracker project repo, make sure to use the branch titled ",(0,r.kt)("inlineCode",{parentName:"p"},"3_multiple_business_logic_files")," as your point of reference. As needed, review the lesson on ",(0,r.kt)("a",{parentName:"p",href:"/intermediate-javascript/object-oriented-javascript/accessing-code-from-different-branches"},"accessing code from different branches"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-5-shape-tracker/tree/3_multiple_business_logic_files"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for Shape Tracker"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Your template repo should have the following files copied over from your reference project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".eslintrc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack.config.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".babelrc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/index.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/css/styles.css")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/index.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"README.md"))),(0,r.kt)("p",null,"You can also include directories such as ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src/js"),", though you'll need a file in any directory for Git to be able to track it. "),(0,r.kt)("p",null,"You can also optionally include boilerplate code such as the structure for Jest tests."),(0,r.kt)("p",null,"When you create your template repository, take the time to add thorough installation/setup instructions to your README. This should include information on how to run the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installing all packages with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm install"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Building the project using webpack with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run build"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starting a development server with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run start"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Linting JS files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run lint"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running tests with Jest using ",(0,r.kt)("inlineCode",{parentName:"p"},"$ npm run test")),(0,r.kt)("p",{parentName:"li"},"Also, make sure you update the ",(0,r.kt)("em",{parentName:"p"},"Technologies Used")," section of your README, too! There's been a host of new tech that we've used in our projects in this course section."))),(0,r.kt)("p",null,"Template repositories can make it much easier to get started on a project. To really utilize a template repository effectively, you need to get it right. That's why it's worth taking a little extra time to put together a great template README now. If the README in the template repository is mediocre, chances are it will lead to mediocre READMEs in other projects, too, and a lot of additional work to get those READMEs in shape later down the road."),(0,r.kt)("p",null,"You aren't required to use template repositories for your independent projects but you may do so if you wish. We recommend updating your template repositories regularly and also creating new ones for different kinds of projects. For instance, you'd have different templates for React projects than you would for a vanilla JavaScript project."),(0,r.kt)("p",null,"One final recommendation \u2014 while we do recommend getting specific about details such as installation steps, you don't want to make your templates so specific that they aren't reusable. If you find yourself regularly deleting content from repositories that have been built from a template, that's a sign that the content in the template isn't serving its purpose; you want to minimize the amount of boilerplate you need to add from scratch, but you also want to avoid having to delete a lot of boilerplate, too."),(0,r.kt)("p",null,"For more information on creating template repositories and reusing them, see the following GitHub documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-template-repository"},"Creating a template repository"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"},"Creating a repository from a template")))))}u.isMDXComponent=!0}}]);