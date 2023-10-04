"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[83778],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,f=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const o={title:"Tools for Email Management",id:"tools-for-email-management",slug:"tools-for-email-management",hide_table_of_contents:!0,sidebar_position:24,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/career-services-full-stack/blob/main/8_Tools_for_Email_Management.md",paginationNext:null},i=void 0,l={unversionedId:"react/react-with-apis/tools-for-email-management",id:"react/react-with-apis/tools-for-email-management",title:"Tools for Email Management",description:"Keeping track of your employment search emails can be challenging. Fortunately, there are some great tools to help with this. One great (and free) tool is Streak, which integrates with Gmail.",source:"@site/docs/react/10_react-with-apis/8-Tools-for-Email-Management.md",sourceDirName:"react/10_react-with-apis",slug:"/react/react-with-apis/tools-for-email-management",permalink:"/react/react-with-apis/tools-for-email-management",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Tools for Email Management",id:"tools-for-email-management",slug:"tools-for-email-management",hide_table_of_contents:!0,sidebar_position:24,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/career-services-full-stack/blob/main/8_Tools_for_Email_Management.md",paginationNext:null},sidebar:"react",previous:{title:"Expand Your Job Search Network Through Cold Emailing",permalink:"/react/react-with-apis/expand-your-job-search-network-through-cold-emailing"},next:{title:"React with API (Multi-Week Project)",permalink:"/react/react-with-apis-part-2/react-with-api-multi-week-project"}},s={},p=[{value:"Installing Streak",id:"installing-streak",level:3},{value:"Features in Streak",id:"features-in-streak",level:3},{value:"Email Tracking",id:"email-tracking",level:4},{value:"Email Snippets",id:"email-snippets",level:4},{value:"Other Email Configurations",id:"other-email-configurations",level:3},{value:"Default Signature",id:"default-signature",level:4},{value:"Vacation Responder",id:"vacation-responder",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Keeping track of your employment search emails can be challenging. Fortunately, there are some great tools to help with this. One great (and free) tool is Streak, which integrates with Gmail."),(0,r.kt)("h3",{id:"installing-streak"},"Installing Streak"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://www.streak.com/"},"streak.com")," and install the extension. It will redirect you to your Gmail account and request you sign in and grant permissions."),(0,r.kt)("p",null,"When Streak asks who will be using this extension, select the option ",(0,r.kt)("em",{parentName:"p"},"Just For Me"),". Streak may start you on a 14 day Pro Trial but we will only cover the features in the free Basic plan. Streak will also ask you to set up their Pipeline feature. We won't be covering how to use Pipelines in this lesson so go ahead and skip it or customize it how you prefer."),(0,r.kt)("h3",{id:"features-in-streak"},"Features in Streak"),(0,r.kt)("p",null,"Streak offers a lot of features to help you manage your emails. Below, we'll share the ones we feel are most helpful."),(0,r.kt)("h4",{id:"email-tracking"},"Email Tracking"),(0,r.kt)("p",null,"Streak has a feature to see how many times your email has been viewed. After sending a message, go to your ",(0,r.kt)("em",{parentName:"p"},"Sent")," box. Any emails you've sent after you added Streak will have a green eye to the right if they've been opened, along with a timer indicating when the email was last opened. If you click on the sent email, a column will appear to the right showing the total views."),(0,r.kt)("p",null,"This is a great way to measure how engaging your subject line reads. If you find your emails are not being opened, the issue may be the subject line is generic or too vague. There are no hard rules for how to write a subject line but being specific helps. Try out different approaches to a subject line and observe the results."),(0,r.kt)("h4",{id:"email-snippets"},"Email Snippets"),(0,r.kt)("p",null,"Snippets are a great way to avoid writing repetitive emails. Let's walk through how to use snippets with Streak by making one of our own."),(0,r.kt)("p",null,"In Gmail, click on ",(0,r.kt)("em",{parentName:"p"},"Compose")," to start a new email draft. Let's write a message that we could use to let someone know our availability for a phone call or meeting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi!\n\nThanks for reaching out to me. I would love to chat more with you. My best available times are Mon-Thurs sometime between 10am-3pm. My number is [XXX-XXX-XXXX]. Looking forward to hearing from you!\n")),(0,r.kt)("p",null,"You don't have to provide a subject line if a snippet is meant as a common reply. "),(0,r.kt)("p",null,"To save your snippet, click on the ",(0,r.kt)("em",{parentName:"p"},"Streak")," icon in the bottom right of the toolbar in the email draft. Click on the middle paper icon for snippets and then ",(0,r.kt)("em",{parentName:"p"},"Create snippet from draft"),". Give your snippet a name and a shortcut code. Click ",(0,r.kt)("em",{parentName:"p"},"Create")," when done."),(0,r.kt)("p",null,"There are two ways to use your newly created snippet."),(0,r.kt)("p",null,"The first way is to start a new email draft and click on the same snippet icon where you originally created your snippet. You'll now see your snippet has been added to the popup menu which you can now click on to autofill your email."),(0,r.kt)("p",null,"The second way is to open up your Gmail settings by clicking on the cog icon in the upper right near your profile pic. Click on the Streak ",(0,r.kt)("em",{parentName:"p"},"Settings")," tab. Under ",(0,r.kt)("em",{parentName:"p"},"Snippet Settings"),", enable Snippet autocomplete. Now when you start a new email draft, you can type in your snippet shortcut code to autofill."),(0,r.kt)("h3",{id:"other-email-configurations"},"Other Email Configurations"),(0,r.kt)("h4",{id:"default-signature"},"Default Signature"),(0,r.kt)("p",null,"Most email providers offer a default signature option so your signature with your contact information will appear in every email. You can normally find this option in the settings panel in your email account."),(0,r.kt)("h4",{id:"vacation-responder"},"Vacation Responder"),(0,r.kt)("p",null,"If you are going to be away for a while, set up an automatic response for all incoming emails. This setting can normally be found in the settings panel in your email account."))}m.isMDXComponent=!0}}]);