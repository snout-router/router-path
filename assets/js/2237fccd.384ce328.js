"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),u=n(7392),i=n(7094),c=n(2466),p="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,f=e.defaultValue,d=e.values,y=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var P=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==P&&!h.some((function(e){return e.value===P})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+P+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),w=k.tabGroupChoices,O=k.setTabGroupChoices,E=(0,a.useState)(P),N=E[0],A=E[1],T=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var x=w[y];null!=x&&x!==N&&h.some((function(e){return e.value===x}))&&A(x)}var C=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==N&&(j(t),A(r),null!=y&&O(y,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function f(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},3470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=(n(5162),n(5488),["components"]),u={id:"AnyParam",title:"AnyParam",sidebar_label:"AnyParam",hide_title:!0},i="AnyParam",c={unversionedId:"api/type/AnyParam",id:"api/type/AnyParam",title:"AnyParam",description:"A utility type for use when you need to be able to accept any valid [Param]",source:"@site/../docs/api/type/AnyParam.mdx",sourceDirName:"api/type",slug:"/api/type/AnyParam",permalink:"/router-path/api/type/AnyParam",draft:!1,editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/AnyParam.mdx",tags:[],version:"current",frontMatter:{id:"AnyParam",title:"AnyParam",sidebar_label:"AnyParam",hide_title:!0},sidebar:"docs",previous:{title:"path",permalink:"/router-path/api/path"},next:{title:"NormalizeParam",permalink:"/router-path/api/type/NormalizeParam"}},p={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anyparam"},(0,o.kt)("inlineCode",{parentName:"h1"},"AnyParam")),(0,o.kt)("p",null,"A utility type for use when you need to be able to accept any valid ",(0,o.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,o.kt)("inlineCode",{parentName:"a"},"Param")),"\ntype."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import {AnyParam} from '@snout/router-path'\n")),(0,o.kt)("p",null,"Functionally equivalent to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"Param<string, any>\n")))}f.isMDXComponent=!0}}]);