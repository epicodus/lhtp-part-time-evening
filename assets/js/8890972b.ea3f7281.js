"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60848],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7896),i=(r(2784),r(30876));const a={title:"Learning More About Git",id:"learning-more-about-git",slug:"learning-more-about-git",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},o=void 0,s={unversionedId:"intermediate-javascript/team-week/learning-more-about-git",id:"intermediate-javascript/team-week/learning-more-about-git",title:"Learning More About Git",description:"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear.",source:"@site/docs/intermediate-javascript/9_team-week/learning-more-about-git.md",sourceDirName:"intermediate-javascript/9_team-week",slug:"/intermediate-javascript/team-week/learning-more-about-git",permalink:"/intermediate-javascript/team-week/learning-more-about-git",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Learning More About Git",id:"learning-more-about-git",slug:"learning-more-about-git",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},sidebar:"intermediate-javascript",previous:{title:"Rewriting History with Git",permalink:"/intermediate-javascript/team-week/rewriting-history-with-git"},next:{title:"Practicing the Git Workflow",permalink:"/intermediate-javascript/team-week/practicing-the-git-workflow"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear."),(0,i.kt)("p",null,"Check out the site ",(0,i.kt)("a",{parentName:"p",href:"http://think-like-a-git.net/"},"Think Like (a) Git"),". The site is a comprehensive and fun overview of git by Sam Livingson-Gray, a Ruby developer based in Portland, Oregon."),(0,i.kt)("p",null,"We recommend reading through each of the sections (which are short, quick reads) starting from the beginning. Also, make sure you read the following sections, which may be particularly useful during team week:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/testing-out-merges.html"},"Testing Out Merges"),': This section illustrates several patterns for beginners to merge their code before they move on to "Black Belt Merging."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/rebase-from-the-ground-up.html"},"Rebase From the Ground Up"),": This section goes into more depth about how ",(0,i.kt)("inlineCode",{parentName:"li"},"git rebase")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"git cherrypick")," work. You may not use these commands much \u2014 yet \u2014 but they will be helpful long-term in your growth as a developer.")))}m.isMDXComponent=!0}}]);