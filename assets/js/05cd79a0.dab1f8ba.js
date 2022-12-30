"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||p;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const p="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(p,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7462),n=a(7294),p=a(6010),i=a(2389),o=a(7392),l=a(7094),s=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:c,className:h}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[b,P]=(0,n.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=c){const e=v[c];null!=e&&e!==b&&g.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,a=C.indexOf(t),r=g[a].value;r!==b&&(x(t),P(r),null!=c&&N(c,String(r)))},w=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,p.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},h)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>C.push(e),onKeyDown:w,onClick:T},i,{className:(0,p.Z)("tabs__item",u,i?.className,{"tabs__item--active":b===t})}),a??t)}))),t?(0,n.cloneElement)(f.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function c(e){const t=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},4765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));a(5162),a(5488);const p={id:"Param",title:"Param",sidebar_label:"Param",hide_title:!0},i="Param",o={unversionedId:"api/type/Param",id:"api/type/Param",title:"Param",description:"The Param interface can be used to implement [custom route parameters].",source:"@site/../docs/api/type/Param.mdx",sourceDirName:"api/type",slug:"/api/type/Param",permalink:"/router-path/api/type/Param",draft:!1,editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/api/type/Param.mdx",tags:[],version:"current",frontMatter:{id:"Param",title:"Param",sidebar_label:"Param",hide_title:!0},sidebar:"docs",previous:{title:"NormalizeParam",permalink:"/router-path/api/type/NormalizeParam"},next:{title:"ParamArg",permalink:"/router-path/api/type/ParamArg"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>name</code>",id:"property-name",level:3},{value:"<code>exp</code>",id:"property-exp",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>format</code>",id:"method-format",level:3},{value:"Parameters",id:"method-format-parameters",level:4},{value:"Return value",id:"method-format-return-value",level:4},{value:"<code>parse</code>",id:"method-parse",level:3},{value:"Parameters",id:"method-parse-parameters",level:4},{value:"Return value",id:"method-parse-return-value",level:4},{value:"Type variables",id:"type-variables",level:2},{value:"<code>Name</code>",id:"type-variable-name",level:3},{value:"<code>Arg</code>",id:"type-variable-arg",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"param"},(0,n.kt)("inlineCode",{parentName:"h1"},"Param")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Param")," interface can be used to implement ",(0,n.kt)("a",{parentName:"p",href:"/router-path/guides/custom-parameters"},"custom route parameters"),"."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"property-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"name")),(0,n.kt)("p",null,"The name of the parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"readonly name: Name\n")),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safe-parameter-names"},"Type-safe parameter names")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.kt)("h3",{id:"property-exp"},(0,n.kt)("inlineCode",{parentName:"h3"},"exp")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expression")," used to determine whether a segment (or segments) of a\npath match the parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"readonly exp: RegExp\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The expression ",(0,n.kt)("strong",{parentName:"p"},"must")," have exactly one ",(0,n.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group"),".")),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#matching-and-parsing"},"Matching and parsing")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"method-format"},(0,n.kt)("inlineCode",{parentName:"h3"},"format")),(0,n.kt)("p",null,"Format an argument for use in a path."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function format(arg: Arg): string;\n")),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#formatting"},"Formatting")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.kt)("h4",{id:"method-format-parameters"},"Parameters"),(0,n.kt)("p",null,"Accepts a single argument - the value to format. The value must have a type\nmatching the ",(0,n.kt)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.kt)("inlineCode",{parentName:"a"},"Arg"))," type variable."),(0,n.kt)("h4",{id:"method-format-return-value"},"Return value"),(0,n.kt)("p",null,"A formatted string representing the supplied value."),(0,n.kt)("p",null,"The strings produced by ",(0,n.kt)("inlineCode",{parentName:"p"},"format")," should match ",(0,n.kt)("a",{parentName:"p",href:"#property-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"exp")),", and the resulting\n",(0,n.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content should be able to be parsed by ",(0,n.kt)("a",{parentName:"p",href:"#method-parse"},(0,n.kt)("inlineCode",{parentName:"a"},"parse")),"."),(0,n.kt)("h3",{id:"method-parse"},(0,n.kt)("inlineCode",{parentName:"h3"},"parse")),(0,n.kt)("p",null,"Parse a successful match against ",(0,n.kt)("a",{parentName:"p",href:"#property-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"exp")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"function parse(match: string): Arg;\n")),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#matching-and-parsing"},"Matching and parsing")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.kt)("h4",{id:"method-parse-parameters"},"Parameters"),(0,n.kt)("p",null,"Accepts a single argument - the ",(0,n.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content of a successful match\nagainst ",(0,n.kt)("a",{parentName:"p",href:"#property-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"exp")),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"parse")," should be capable of parsing ",(0,n.kt)("em",{parentName:"p"},"any")," ",(0,n.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content that can\noccur in a successful match of ",(0,n.kt)("a",{parentName:"p",href:"#property-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"exp"))," against the strings that are produced by\n",(0,n.kt)("a",{parentName:"p",href:"#method-format"},(0,n.kt)("inlineCode",{parentName:"a"},"format")),"."),(0,n.kt)("h4",{id:"method-parse-return-value"},"Return value"),(0,n.kt)("p",null,"The parsed value of the parameter. The value must have a type matching the\n",(0,n.kt)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.kt)("inlineCode",{parentName:"a"},"Arg"))," type variable."),(0,n.kt)("h2",{id:"type-variables"},"Type variables"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Param")," type is a ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"generic")," type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Param<Name extends string, Arg = string>\n")),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safety"},"Type safety")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.kt)("h3",{id:"type-variable-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"Name")),(0,n.kt)("p",null,"The parameter's ",(0,n.kt)("a",{parentName:"p",href:"#property-name"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," as a ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"},"literal type"),"."),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safe-parameter-names"},"Type-safe parameter names")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))),(0,n.kt)("h3",{id:"type-variable-arg"},(0,n.kt)("inlineCode",{parentName:"h3"},"Arg")),(0,n.kt)("p",null,"The type of argument the parameter accepts."),(0,n.kt)("p",null,"Leaving off the ",(0,n.kt)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.kt)("inlineCode",{parentName:"a"},"Arg"))," type variable creates a ",(0,n.kt)("inlineCode",{parentName:"p"},"Param")," where the ",(0,n.kt)("a",{parentName:"p",href:"#type-variable-arg"},(0,n.kt)("inlineCode",{parentName:"a"},"Arg"))," type\nis ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", meaning that the following types are equivalent:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'import { Param } from "@snout/router-path";\n\ntype ParamB = Param<"param-name">;\ntype ParamA = Param<"param-name", string>;\n')),(0,n.kt)("admonition",{title:"See also",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters#type-safety"},"Type safety")," in the ",(0,n.kt)("a",{parentName:"li",href:"/router-path/guides/custom-parameters"},"Custom parameters")," guide"))))}u.isMDXComponent=!0}}]);