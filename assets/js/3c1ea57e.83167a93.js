"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[459],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),o=n(6010),u=n(2389),i=n(7392),l=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,u=e.lazy,d=e.block,f=e.defaultValue,m=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),O=k.tabGroupChoices,x=k.setTabGroupChoices,T=(0,a.useState)(w),E=T[0],N=T[1],P=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=O[h];null!=C&&C!==E&&g.some((function(e){return e.value===C}))&&N(C)}var D=function(e){var t=e.currentTarget,n=P.indexOf(t),r=g[n].value;r!==E&&(j(t),N(r),null!=h&&x(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var o,u=P.indexOf(e.currentTarget)-1;n=null!=(o=P[u])?o:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:D,onClick:D},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function f(e){var t=(0,u.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=(n(5162),n(5488),["components"]),i={id:"index",title:"Guide index",sidebar_label:"Index"},l=void 0,s={unversionedId:"guides/index",id:"guides/index",title:"Guide index",description:"The Guides section provides guidance on the best ways to put the features of",source:"@site/../docs/guides/index.mdx",sourceDirName:"guides",slug:"/guides/",permalink:"/router-path/guides/",draft:!1,editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/guides/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Guide index",sidebar_label:"Index"},sidebar:"docs",next:{title:"Getting started",permalink:"/router-path/guides/getting-started"}},c={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Path patterns",id:"path-patterns",level:2},{value:"Custom parameters",id:"custom-parameters",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Guides")," section provides guidance on the best ways to put the features of\n",(0,o.kt)("strong",{parentName:"p"},"Snout Router Path")," to use in your applications."),(0,o.kt)("h2",{id:"getting-started"},(0,o.kt)("a",{parentName:"h2",href:"/router-path/guides/getting-started"},"Getting started")),(0,o.kt)("p",null,"Completely new to ",(0,o.kt)("strong",{parentName:"p"},"Snout Router Path")," and want to get up and running as quick\nas possible? This guide is for you. It covers installation, as well as creating\nand using your first path pattern."),(0,o.kt)("h2",{id:"path-patterns"},(0,o.kt)("a",{parentName:"h2",href:"/router-path/guides/path-patterns"},"Path patterns")),(0,o.kt)("p",null,"Path patterns are the main focus of ",(0,o.kt)("strong",{parentName:"p"},"Snout Router Path"),", and the part you're\nmost likely to use frequently. This guide covers how to create them, how to\nmatch paths against them, and how to build paths from them."),(0,o.kt)("h2",{id:"custom-parameters"},(0,o.kt)("a",{parentName:"h2",href:"/router-path/guides/custom-parameters"},"Custom parameters")),(0,o.kt)("p",null,"This guide covers how to implement your own custom parameters. Custom parameters\nallow you to make powerful additions to the core behavior of\n",(0,o.kt)("strong",{parentName:"p"},"Snout Router Path"),"."))}f.isMDXComponent=!0}}]);