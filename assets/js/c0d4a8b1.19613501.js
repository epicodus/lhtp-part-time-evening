"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[81670],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const o={title:"Learning More About Git",id:"learning-more-about-git",slug:"learning-more-about-git",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},a=void 0,l={unversionedId:"c-and-net/team-week/learning-more-about-git",id:"c-and-net/team-week/learning-more-about-git",title:"Learning More About Git",description:"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear.",source:"@site/docs/c-and-net/18_team-week/learning-more-about-git.md",sourceDirName:"c-and-net/18_team-week",slug:"/c-and-net/team-week/learning-more-about-git",permalink:"/c-and-net/team-week/learning-more-about-git",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Learning More About Git",id:"learning-more-about-git",slug:"learning-more-about-git",hide_table_of_contents:!0,sidebar_position:6,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},sidebar:"c-and-net",previous:{title:"Rewriting History with Git",permalink:"/c-and-net/team-week/rewriting-history-with-git"},next:{title:"Practicing the Git Workflow",permalink:"/c-and-net/team-week/practicing-the-git-workflow"}},s={},c=[],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear."),(0,i.kt)("p",null,"Check out the site ",(0,i.kt)("a",{parentName:"p",href:"http://think-like-a-git.net/"},"Think Like (a) Git"),". The site is a comprehensive and fun overview of git by Sam Livingson-Gray, a Ruby developer based in Portland, Oregon."),(0,i.kt)("p",null,"We recommend reading through each of the sections (which are short, quick reads) starting from the beginning. Also, make sure you read the following sections, which may be particularly useful during team week:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/testing-out-merges.html"},"Testing Out Merges"),': This section illustrates several patterns for beginners to merge their code before they move on to "Black Belt Merging."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/rebase-from-the-ground-up.html"},"Rebase From the Ground Up"),": This section goes into more depth about how ",(0,i.kt)("inlineCode",{parentName:"li"},"git rebase")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"git cherrypick")," work. You may not use these commands much \u2014 yet \u2014 but they will be helpful long-term in your growth as a developer.")))}g.isMDXComponent=!0}}]);