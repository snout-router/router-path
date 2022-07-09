"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),i=r(7392),p=r(7094),u=r(2466);const s="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,r;const{lazy:l,block:c,defaultValue:d,values:f,groupId:y,className:g}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const A=null===d?d:null!=(t=null!=d?d:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?t:b[0].props.value;if(null!==A&&!h.some((e=>e.value===A)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:P}=(0,p.U)(),[k,O]=(0,n.useState)(A),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=y){const e=w[y];null!=e&&e!==k&&h.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,r=N.indexOf(t),a=h[r].value;a!==k&&(E(t),O(a),null!=y&&P(y,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;r=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var n;const t=N.indexOf(e.currentTarget)-1;r=null!=(n=N[t])?n:N[N.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},g)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function d(e){const t=(0,l.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},7476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(5162),r(5488);const o={id:"ParamArg",title:"ParamArg",sidebar_label:"ParamArg",hide_title:!0},l="ParamArg",i={unversionedId:"api/type/ParamArg",id:"api/type/ParamArg",title:"ParamArg",description:"Extract the [Arg] type variable from a [Param] type.",source:"@site/../docs/api/type/ParamArg.mdx",sourceDirName:"api/type",slug:"/api/type/ParamArg",permalink:"/router-path/api/type/ParamArg",draft:!1,editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/ParamArg.mdx",tags:[],version:"current",frontMatter:{id:"ParamArg",title:"ParamArg",sidebar_label:"ParamArg",hide_title:!0},sidebar:"docs",previous:{title:"Param",permalink:"/router-path/api/type/Param"},next:{title:"ParamName",permalink:"/router-path/api/type/ParamName"}},p={},u=[],s={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"paramarg"},(0,n.kt)("inlineCode",{parentName:"h1"},"ParamArg")),(0,n.kt)("p",null,"Extract the ",(0,n.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#type-variable-arg"},(0,n.kt)("inlineCode",{parentName:"a"},"Arg"))," type variable from a ",(0,n.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,n.kt)("inlineCode",{parentName:"a"},"Param"))," type."),(0,n.kt)("p",null,"This utility type is useful for implementing ",(0,n.kt)("a",{parentName:"p",href:"/router-path/guides/custom-parameters"},"custom parameters")," whose type is\nin some way based on the type of another parameter. An example is the ",(0,n.kt)("inlineCode",{parentName:"p"},"optional"),"\nparameters implemented by ",(0,n.kt)("a",{parentName:"p",href:"https://snout.dev/router-path-extras"},(0,n.kt)("inlineCode",{parentName:"a"},"@snout/router-path-extras")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'import { Param, ParamArg } from "@snout/router-path";\n\ntype ParamA = Param<"a", string | number>; // a parameter type using an Arg union type\ntype Arg = ParamArg<ParamA>; // the extracted Arg type is string | number\n')),(0,n.kt)("admonition",{title:"Try me!",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbwAoEMopAGjq9ICCUA5gL5wBmUEIcA5AAIDOAdhAK4wD0VHAplAFowKGAAtaAKAkwAnmF440GfHAC8ivAB5aKWtkYwowZkTgAfOMzYgARvwB8cTpzgo4wvLxj84s+XDZGY1MUZjhCUzZmYAgwv15pOQUItQ1lYk1cZUc4XLz8-OdfUQVeAA9DFABjbwATcOJfJLhgRjgDIxNzS2s7KCA"},"Try this example in the TypeScript Playground"))))}m.isMDXComponent=!0}}]);