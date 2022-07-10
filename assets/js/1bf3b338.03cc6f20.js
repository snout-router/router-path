"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[462],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,g=c["".concat(i,".").concat(h)]||c[h]||u[h]||s;return a?n.createElement(g,p(p({ref:t},l),{},{components:a})):n.createElement(g,p({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<s;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function p(e){let{children:t,hidden:a,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,p),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),s=a(6010),p=a(2389),o=a(7392),i=a(7094),m=a(2466);const l="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a;const{lazy:p,block:c,defaultValue:h,values:g,groupId:d,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===h?h:null!=(t=null!=h?h:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[x,T]=(0,r.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:A}=(0,m.o5)();if(null!=d){const e=N[d];null!=e&&e!==x&&k.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=P.indexOf(t),n=k[a].value;n!==x&&(A(t),T(n),null!=d&&w(d,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{var r;const t=P.indexOf(e.currentTarget)-1;a=null!=(r=P[t])?r:P[P.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",l)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},k.map((e=>{let{value:t,label:a,attributes:p}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>P.push(e),onKeyDown:S,onFocus:C,onClick:C},p,{className:(0,s.Z)("tabs__item",u,null==p?void 0:p.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,p.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},7007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),s=a(5162),p=a(5488);const o={id:"custom-parameters",title:"Custom parameters",sidebar_label:"Custom parameters"},i=void 0,m={unversionedId:"guides/custom-parameters",id:"guides/custom-parameters",title:"Custom parameters",description:"Out of the box, Snout Router Path only supports very basic string-based",source:"@site/../docs/guides/custom-parameters.mdx",sourceDirName:"guides",slug:"/guides/custom-parameters",permalink:"/router-path/guides/custom-parameters",draft:!1,editUrl:"https://github.com/snout-router/router-path/edit/main/website/../docs/guides/custom-parameters.mdx",tags:[],version:"current",frontMatter:{id:"custom-parameters",title:"Custom parameters",sidebar_label:"Custom parameters"},sidebar:"docs",previous:{title:"Path patterns",permalink:"/router-path/guides/path-patterns"},next:{title:"normalizeParam",permalink:"/router-path/api/normalizeParam"}},l={},u=[{value:"Matching and parsing",id:"matching-and-parsing",level:2},{value:"Parameter affixes",id:"parameter-affixes",level:3},{value:"Path separators",id:"path-separators",level:3},{value:"Path segments",id:"path-segments",level:3},{value:"Formatting",id:"formatting",level:2},{value:"Type safety",id:"type-safety",level:2},{value:"Type-safe parameter names",id:"type-safe-parameter-names",level:3}],c={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Out of the box, ",(0,r.kt)("strong",{parentName:"p"},"Snout Router Path")," only supports very basic string-based\nparameters that consume a single path segment. If you need more complicated\nbehavior, you can either bring in an additional dependency like\n",(0,r.kt)("a",{parentName:"p",href:"https://snout.dev/router-path-extras"},(0,r.kt)("inlineCode",{parentName:"a"},"@snout/router-path-extras")),", or you can implement your own custom parameters."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you've implemented custom parameters for ",(0,r.kt)("strong",{parentName:"p"},"Snout Router Path"),", we'd love to\nhear about it! At the time of writing, it's early days for this project. We will\nmost likely put together a list of custom parameter packages if/when they start\nappearing.")),(0,r.kt)("h2",{id:"matching-and-parsing"},"Matching and parsing"),(0,r.kt)("p",null,"When matching a path against a pattern, the individual parameters contribute to\ndeciding whether the overall path matches the pattern or not. The ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"exp")),"\nproperty of a route parameter is a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expression")," that is used to match a\n",(0,r.kt)("em",{parentName:"p"},"portion")," of the path. This expression ",(0,r.kt)("strong",{parentName:"p"},"must")," have exactly one\n",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group"),"."),(0,r.kt)("p",null,"When a path matches a pattern, the content captured by ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"exp")),"'s\n",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," gets passed to ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-parse"},(0,r.kt)("inlineCode",{parentName:"a"},"parse"))," for further parsing. ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-parse"},(0,r.kt)("inlineCode",{parentName:"a"},"parse"))," itself\nis not restricted to returning strings; it's possible to return any type of\nvalue you want. JavaScript will obviously not complain about the return type.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," will expect you to honor the type variables used in the specified\n",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,r.kt)("inlineCode",{parentName:"a"},"Param"))," type."),(0,r.kt)("p",null,"These features work together to make it possible to implement just about any\ntype of parameter you can imagine. As an example, consider parameters based on\nintegers instead of strings:"),(0,r.kt)(p.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Param, path } from "@snout/router-path";\n\nfunction int<Name extends string>(name: Name): Param<Name, number> {\n  return {\n    name,\n    exp: /(0|[1-9]\\d*)/, // `exp` allows integer strings only, no leading zeroes\n    format: (arg) => `${Math.floor(arg)}`,\n    parse: (match) => parseInt(match, 10),\n  };\n}\n\nconst user = path`/user/${int("id")}`;\n\nuser.test("/user/111"); // returns true\nuser.test("/user/011"); // returns false\nuser.test("/user/abc"); // returns false\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { path } from "@snout/router-path";\n\nfunction int(name) {\n  return {\n    name,\n    exp: /(0|[1-9]\\d*)/,\n    format: (arg) => `${Math.floor(arg)}`,\n    parse: (match) => parseInt(match, 10),\n  };\n}\n\nconst user = path`/user/${int("id")}`;\n\nuser.test("/user/111"); // returns true\nuser.test("/user/011"); // returns false\nuser.test("/user/abc"); // returns false\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before implementing your own custom parameters, be sure to check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://snout.dev/router-path-extras"},(0,r.kt)("inlineCode",{parentName:"a"},"@snout/router-path-extras"))," package, which has some commonly desired parameter\ntype implementations - including the integer parameters from the example above.")),(0,r.kt)("h3",{id:"parameter-affixes"},"Parameter affixes"),(0,r.kt)("p",null,"On a successful path match, only the ",(0,r.kt)("a",{parentName:"p",href:"https://javascript.info/regexp-groups"},"capturing group")," content from ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"exp")),"\nactually gets passed to ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-parse"},(0,r.kt)("inlineCode",{parentName:"a"},"parse")),". This means it's possible to consume prefixes\nand suffixes with ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"exp")),", without having to deal with them in ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-parse"},(0,r.kt)("inlineCode",{parentName:"a"},"parse"))," as\nwell:"),(0,r.kt)(p.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Param, path } from "@snout/router-path";\n\nfunction lang(): Param<"lang"> {\n  return {\n    name: "lang",\n    exp: /lang-([a-z]{2}-[A-Z]{2})/, // `exp` allows strings like "lang-en-US"\n    format: (arg) => `lang-${arg}`, // the prefix must be re-added when formatting\n    parse: (match) => match, // no need to strip the prefix when parsing\n  };\n}\n\nconst documents = path`/documents/${lang()}`;\n\ndocuments.match("/documents/lang-en-US"); // returns { lang: "en-US" }\ndocuments.match("/documents/lang-ko-KR"); // returns { lang: "ko-KR" }\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { path } from "@snout/router-path";\n\nfunction lang() {\n  return {\n    name: "lang",\n    exp: /lang-([a-z]{2}-[A-Z]{2})/,\n    format: (arg) => `lang-${arg}`,\n    parse: (match) => match, // no need to strip the prefix when parsing\n  };\n}\n\nconst documents = path`/documents/${lang()}`;\n\ndocuments.match("/documents/lang-en-US"); // returns { lang: "en-US" }\ndocuments.match("/documents/lang-ko-KR"); // returns { lang: "ko-KR" }\n')))),(0,r.kt)("p",null,"Note that you can also build affixes into path pattern segments, which is\nanother way to handle them. This is a simpler solution than implementing a\ncustom parameter in many cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'import { path } from "@snout/router-path";\n\nconst documents = path`/documents/lang-${"lang"}`;\n\ndocuments.match("/documents/lang-en-US"); // returns { lang: "en-US" }\ndocuments.match("/documents/lang-ko-KR"); // returns { lang: "ko-KR" }\n')),(0,r.kt)("h3",{id:"path-separators"},"Path separators"),(0,r.kt)("p",null,"Although it's common to use ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," as a separator for path segments, it's possible\nto use ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"exp"))," to implement paths that use other separators:"),(0,r.kt)(p.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Param, path } from "@snout/router-path";\n\nfunction dotted<Name extends string>(name: Name): Param<Name> {\n  return {\n    name,\n    exp: /([^.]+)/, // `exp` consumes everything up until the next `.`\n    format: (arg) => arg,\n    parse: (match) => match,\n  };\n}\n\nconst roles = path`user.${dotted("username")}.roles`;\n\nroles.match("user.piglet.roles"); // returns { username: "piglet" }\nroles.match("user.snouty.roles"); // returns { username: "snouty" }\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { path } from "@snout/router-path";\n\nfunction dotted(name) {\n  return {\n    name,\n    exp: /([^.]+)/,\n    format: (arg) => arg,\n    parse: (match) => match,\n  };\n}\n\nconst roles = path`user.${dotted("username")}.roles`;\n\nroles.match("user.piglet.roles"); // returns { username: "piglet" }\nroles.match("user.snouty.roles"); // returns { username: "snouty" }\n')))),(0,r.kt)("h3",{id:"path-segments"},"Path segments"),(0,r.kt)("p",null,"Parameters typically consume a single path segment, but this is actually\ndetermined by ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param#property-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"exp")),", which can be made to consume multiple path segments:"),(0,r.kt)(p.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Param, path } from "@snout/router-path";\n\nfunction anything<Name extends string>(name: Name): Param<Name> {\n  return {\n    name,\n    exp: /(.+)/,\n    format: (arg) => arg,\n    parse: (match) => match,\n  };\n}\n\nconst article = path`/article/${anything("etc")}`;\n\narticle.match("/article/10 Biggest Snouts"); // returns { etc: "10 Biggest Snouts" }\narticle.match("/article/sci-fi/space-pigs"); // returns { etc: "sci-fi/space-pigs" }\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { path } from "@snout/router-path";\n\nfunction anything(name) {\n  return {\n    name,\n    exp: /(.+)/,\n    format: (arg) => arg,\n    parse: (match) => match,\n  };\n}\n\nconst article = path`/article/${anything("etc")}`;\n\narticle.match("/article/10 Biggest Snouts"); // returns { etc: "10 Biggest Snouts" }\narticle.match("/article/sci-fi/space-pigs"); // returns { etc: "sci-fi/space-pigs" }\n')))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Implementing parameters that consume multiple path segments can get complicated\nvery quickly. If you really need this kind of behavior, perhaps try using query\nstring parameters instead of route parameters, or check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://snout.dev/router-path-extras"},(0,r.kt)("inlineCode",{parentName:"a"},"@snout/router-path-extras")),' package, which has some commonly desired parameter\ntype implementations - including "repeating" parameter types such as ',(0,r.kt)("inlineCode",{parentName:"p"},"any")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"some"),".")),(0,r.kt)("h2",{id:"formatting"},"Formatting"),(0,r.kt)("p",null,"When building a path from a pattern, the individual parameters contribute to\nbuilding the overall path by formatting the arguments they are passed. No matter\nwhat type of arguments a parameter accepts, it must always be able to format an\nargument into a string that makes up a ",(0,r.kt)("em",{parentName:"p"},"portion")," of a path."),(0,r.kt)("p",null,"For example, the integer-based parameters used as an example in the\n",(0,r.kt)("a",{parentName:"p",href:"#matching-and-parsing"},"Matching and Parsing")," section are also responsible for formatting the numbers\nthey are passed when building a path that uses them. They do so by implementing\nthe ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param##method-format"},(0,r.kt)("inlineCode",{parentName:"a"},"format"))," method:"),(0,r.kt)(p.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Param, path } from "@snout/router-path";\n\nfunction int<Name extends string>(name: Name): Param<Name, number> {\n  return {\n    name,\n    exp: /(0|[1-9]\\d*)/,\n    format: (arg) => `${Math.floor(arg)}`, // `format` formats a number as an integer string\n    parse: (match) => parseInt(match, 10),\n  };\n}\n\nconst user = path`/user/${int("id")}`;\n\nuser.build({ id: 111 }); // returns "/user/111"\nuser.build({ id: 222 }); // returns "/user/222"\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { path } from "@snout/router-path";\n\nfunction int(name) {\n  return {\n    name,\n    exp: /(0|[1-9]\\d*)/,\n    format: (arg) => `${Math.floor(arg)}`,\n    parse: (match) => parseInt(match, 10),\n  };\n}\n\nconst user = path`/user/${int("id")}`;\n\nuser.build({ id: 111 }); // returns "/user/111"\nuser.build({ id: 222 }); // returns "/user/222"\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'When implementing custom parameters, it\'s important that the two "halves" of the\nimplementation match up. In other words, a parameter should always be able to\nparse its own formatting.')),(0,r.kt)("h2",{id:"type-safety"},"Type safety"),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", you can take advantage of type checking in your\ncustom parameters by implementing the ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,r.kt)("inlineCode",{parentName:"a"},"Param"))," interface correctly. For\ninstance, using the integer parameters from previous examples, ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," can\nwarn us when we try to use a parameter that does not exist, or if we try to use\nan incorrect variable type with a parameter that does exist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'const user = path`/user/${int("id")}`;\n\n// TypeScript "knows" that a successful match will contain a number for "id":\n\nconst match = user.match("/user/111");\n\nif (match) {\n  console.log(match.id.toExponential()); // no error\n  console.log(match.id.toUpperCase()); // type error\n  console.log(match.nonexistent); // type error\n}\n\n// TypeScript "knows" that we need a number for "id" when building the path:\n\nuser.build({ id: 111 }); // no error\nuser.build({ id: "111" }); // type error\nuser.build({}); // type error\n')),(0,r.kt)("admonition",{title:"Try me!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgBQIZVSANHMqYAWcAvnAGZQQhwBEAAgM4B2EArjAPSXsCmUAtHkI0A3ACgxZVkwDGMYBCZxgTGAB4Acph5weADxg8mAEwZwGMKCoDmAPgAUTbQC44WkDwCUrtBhCbtHCZWEAAjPltEMTg4KB4YViglBGiYuCcPLFSY-TBXDnsABgAfAG0ARn4ATgBdAB1jACpPDiy08mgQfFd7dGtPOABeSIADABIEAFl8AgA6MgAbCGheqH7iEZwODjgRsk78EY6oLpgzVHSQ8Kg4VHOlFUNrPnNLG2zcdAYeHtOZAgGw0+UG+AElVPY-gQcOVCp42iRxMQJDJFBY4KxvjdBp9CCMOJi+BwJo97DRgMYaJ4NuIxNs4AAVACeYB4AGUZFYwPAaABrFgAdwYNDghHwt3MrBkMh4DAYUgWcChcAFwAWitRqlQKglwTCL32N3JlOcKLR8GVOMJUFmULJBKxHHKzqptOAZDgkPw-wGKRimoYEAWPFmS2sXpg-1mFNmMAgAFE9JAmEZ5KgFvZPJ4RHB6SxdFBKFBUgGgyGwxGozG4wBVMCsqAAYTuPEz2dzOxgLJ0fCLJbRZdDEHDUNmLBTemAFlT7fpXdZBb7yLpO2ZrI5XJ5-IgQpFYvgAp0KZ4xl1VwN0FoFJFAoIRjgoVYauMNlFd9xBFNYmts0fz-sSAUq4zrlCQs47PmvbQN+WK-k+CzGAByjGK4NAgSKxDgaK3aLtBP5-ghAGYTmc44VBUBAA"},"Try this example in the TypeScript Playground"))),(0,r.kt)("h3",{id:"type-safe-parameter-names"},"Type-safe parameter names"),(0,r.kt)("p",null,"You may have noticed by reading the examples in this guide, that ",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param"},(0,r.kt)("inlineCode",{parentName:"a"},"Param"))," has a\n",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param##type-variable-name"},(0,r.kt)("inlineCode",{parentName:"a"},"Name"))," type variable for the parameter name. This ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"},"literal type"),"\ncontains the name of the parameter, but in a way that ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"'s type system\nunderstands. This is a key part of how ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," can know about the\n",(0,r.kt)("em",{parentName:"p"},"existence")," of route parameters."),(0,r.kt)("p",null,"The best way to ensure that custom parameters have the correct\n",(0,r.kt)("a",{parentName:"p",href:"/router-path/api/type/Param##type-variable-name"},(0,r.kt)("inlineCode",{parentName:"a"},"Name"))," type associated with them, is to use a ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/generics.html"},"generic")," function to\ncreate them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'import { Param, path } from "@snout/router-path";\n\nfunction customParam<Name extends string>(name: Name): Param<Name> {\n  return {\n    name,\n    exp: /([^/]+)/,\n    format: (arg) => arg,\n    parse: (match) => match,\n  };\n}\n\nconst category = customParam("category");\nconst id = customParam("id");\n\nconst article = path`/article/${category}/${id}`;\n')),(0,r.kt)("p",null,"It's also possible to directly create one-off parameters with ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"},"literal type"),"\nnames in various ways using ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'import { Param, path } from "@snout/router-path";\n\n// explicit\nconst category: Param<"category"> = {\n  name: "category",\n  exp: /([^/]+)/,\n  format: (arg) => arg,\n  parse: (match) => match,\n};\n\n// implicit\nconst id = {\n  name: "id" as "id",\n  exp: /([^/]+)/,\n  format: (arg: string) => arg,\n  parse: (match: string) => match,\n};\n\nconst article = path`/article/${category}/${id}`;\n')))}h.isMDXComponent=!0}}]);