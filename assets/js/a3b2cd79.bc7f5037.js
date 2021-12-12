"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[388],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},6396:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(7462),a=t(7294),o=t(2389),i=t(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),c=t(6010),p="tabItem_vU9c";function s(e){var r,t,n,o=e.lazy,i=e.block,s=e.defaultValue,m=e.values,f=e.groupId,d=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),b=(0,u.lx)(y,(function(e,r){return e.value===r.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(r=null!=s?s:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=v[0])?void 0:n.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),O=h.tabGroupChoices,P=h.setTabGroupChoices,w=(0,a.useState)(g),k=w[0],E=w[1],S=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=O[f];null!=x&&x!==k&&y.some((function(e){return e.value===x}))&&E(x)}var T=function(e){var r=e.currentTarget,t=S.indexOf(r),n=y[t].value;n!==k&&(N(r),E(n),null!=f&&P(f,n))},j=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;t=S[n]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;t=S[a]||S[S.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},d)},y.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:k===r?0:-1,"aria-selected":k===r,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":k===r}),key:r,ref:function(e){return S.push(e)},onKeyDown:j,onFocus:T,onClick:T},null!=t?t:r)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==k})}))))}function m(e){var r=(0,o.Z)();return a.createElement(s,(0,n.Z)({key:String(r)},e))}},4919:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=(t(8215),t(6396),["components"]),l={id:"ParamOrString",title:"ParamOrString",sidebar_label:"ParamOrString",hide_title:!0},u="ParamOrString",c={unversionedId:"api/type/ParamOrString",id:"api/type/ParamOrString",title:"ParamOrString",description:"A utility type for use when you need to be able to accept any valid [Param]",source:"@site/../docs/api/type/ParamOrString.mdx",sourceDirName:"api/type",slug:"/api/type/ParamOrString",permalink:"/router-path/api/type/ParamOrString",editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/ParamOrString.mdx",tags:[],version:"current",frontMatter:{id:"ParamOrString",title:"ParamOrString",sidebar_label:"ParamOrString",hide_title:!0},sidebar:"docs",previous:{title:"ParamName",permalink:"/router-path/api/type/ParamName"},next:{title:"PathPattern",permalink:"/router-path/api/type/PathPattern"}},p=[],s={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"paramorstring"},(0,o.kt)("inlineCode",{parentName:"h1"},"ParamOrString")),(0,o.kt)("p",null,"A utility type for use when you need to be able to accept any valid ",(0,o.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,o.kt)("inlineCode",{parentName:"a"},"Param")),"\ntype or a string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {ParamOrString} from '@snout/router-path'\n")),(0,o.kt)("p",null,"Functionally equivalent to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"Param<string, any> | string\n")))}m.isMDXComponent=!0}}]);