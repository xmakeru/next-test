(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4779:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(7276),r(4366),r(9372),r(4864);var s=r(3191),n=r(8716),l=r(7922),a=r.n(l),i=r(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7276)),"/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,4366)),"/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,9372)),"/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,4864)),"/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/not-found.js"]}],c=["/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/page.js"],u="/page",x={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1336:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},9708:(e,t,r)=>{Promise.resolve().then(r.bind(r,6618))},4037:(e,t,r)=>{Promise.resolve().then(r.bind(r,8976))},5303:()=>{},8976:(e,t,r)=>{"use strict";let s,n,l;r.d(t,{default:()=>z});var a=r(326),i=r(269),o=r(3584),d=r(7577),c=r(6767),u=r(5189),x=r(2146),h=r(9611),m=r(3810),p=r(8151),f=r(7543);function b({onFocus:e}){let t;let[r,s]=(0,d.useState)(!0),n=(t=(0,d.useRef)(!1),(0,x.e)(()=>(t.current=!0,()=>{t.current=!1}),[]),t);return r?d.createElement(f._,{as:"button",type:"button",features:f.x.Focusable,onFocus:t=>{t.preventDefault();let r,l=50;r=requestAnimationFrame(function t(){if(l--<=0){r&&cancelAnimationFrame(r);return}if(e()){if(cancelAnimationFrame(r),!n.current)return;s(!1);return}r=requestAnimationFrame(t)})}}):null}var v=r(6711),g=r(2613),j=r(9453),w=r(1844),y=r(1270);let N=d.createContext(null);function P({children:e}){let t=d.useRef({groups:new Map,get(e,t){var r;let s=this.groups.get(e);s||(s=new Map,this.groups.set(e,s));let n=null!=(r=s.get(t))?r:0;return s.set(t,n+1),[Array.from(s.keys()).indexOf(t),function(){let e=s.get(t);e>1?s.set(t,e-1):s.delete(t)}]}});return d.createElement(N.Provider,{value:t},e)}function k(e){let t=d.useContext(N);if(!t)throw Error("You must wrap your component in a <StableCollection>");let r=function(){var e,t,r;let s=null!=(r=null==(t=null==(e=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?r:null;if(!s)return Symbol();let n=[],l=s;for(;l;)n.push(l.index),l=l.return;return"$."+n.join(".")}(),[s,n]=t.current.get(e,r);return d.useEffect(()=>n,[]),s}var T=r(847),E=((s=E||{})[s.Forwards=0]="Forwards",s[s.Backwards=1]="Backwards",s),I=((n=I||{})[n.Less=-1]="Less",n[n.Equal=0]="Equal",n[n.Greater=1]="Greater",n),S=((l=S||{})[l.SetSelectedIndex=0]="SetSelectedIndex",l[l.RegisterTab=1]="RegisterTab",l[l.UnregisterTab=2]="UnregisterTab",l[l.RegisterPanel=3]="RegisterPanel",l[l.UnregisterPanel=4]="UnregisterPanel",l);let R={0(e,t){var r;let s=(0,v.z2)(e.tabs,e=>e.current),n=(0,v.z2)(e.panels,e=>e.current),l=s.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),a={...e,tabs:s,panels:n};if(t.index<0||t.index>s.length-1){let r=(0,g.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,g.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===l.length)return a;let n=(0,g.E)(r,{0:()=>s.indexOf(l[0]),1:()=>s.indexOf(l[l.length-1])});return{...a,selectedIndex:-1===n?e.selectedIndex:n}}let i=s.slice(0,t.index),o=[...s.slice(t.index),...i].find(e=>l.includes(e));if(!o)return a;let d=null!=(r=s.indexOf(o))?r:e.selectedIndex;return -1===d&&(d=e.selectedIndex),{...a,selectedIndex:d}},1(e,t){if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],s=(0,v.z2)([...e.tabs,t.tab],e=>e.current),n=e.selectedIndex;return e.info.current.isControlled||-1===(n=s.indexOf(r))&&(n=e.selectedIndex),{...e,tabs:s,selectedIndex:n}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,v.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},A=(0,d.createContext)(null);function O(e){let t=(0,d.useContext)(A);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}A.displayName="TabsDataContext";let _=(0,d.createContext)(null);function C(e){let t=(0,d.useContext)(_);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}function D(e,t){return(0,g.E)(t.type,R,e,t)}_.displayName="TabsActionsContext";let F=y.VN.RenderStrategy|y.VN.Static,M=Object.assign((0,y.yV)(function(e,t){var r,s;let n=(0,d.useId)(),{id:l=`headlessui-tabs-tab-${n}`,disabled:a=!1,autoFocus:h=!1,...f}=e,{orientation:b,activation:N,selectedIndex:P,tabs:E,panels:I}=O("Tab"),S=C("Tab"),R=O("Tab"),A=(0,d.useRef)(null),_=(0,p.T)(A,t);(0,x.e)(()=>S.registerTab(A),[S,A]);let D=k("tabs"),F=E.indexOf(A);-1===F&&(F=D);let M=F===P,L=(0,u.z)(e=>{var t;let r=e();if(r===v.fE.Success&&"auto"===N){let e=null==(t=(0,w.r)(A))?void 0:t.activeElement,r=R.tabs.findIndex(t=>t.current===e);-1!==r&&S.change(r)}return r}),U=(0,u.z)(e=>{let t=E.map(e=>e.current).filter(Boolean);if(e.key===T.R.Space||e.key===T.R.Enter){e.preventDefault(),e.stopPropagation(),S.change(F);return}switch(e.key){case T.R.Home:case T.R.PageUp:return e.preventDefault(),e.stopPropagation(),L(()=>(0,v.jA)(t,v.TO.First));case T.R.End:case T.R.PageDown:return e.preventDefault(),e.stopPropagation(),L(()=>(0,v.jA)(t,v.TO.Last))}if(L(()=>(0,g.E)(b,{vertical:()=>e.key===T.R.ArrowUp?(0,v.jA)(t,v.TO.Previous|v.TO.WrapAround):e.key===T.R.ArrowDown?(0,v.jA)(t,v.TO.Next|v.TO.WrapAround):v.fE.Error,horizontal:()=>e.key===T.R.ArrowLeft?(0,v.jA)(t,v.TO.Previous|v.TO.WrapAround):e.key===T.R.ArrowRight?(0,v.jA)(t,v.TO.Next|v.TO.WrapAround):v.fE.Error}))===v.fE.Success)return e.preventDefault()}),q=(0,d.useRef)(!1),z=(0,u.z)(()=>{var e;q.current||(q.current=!0,null==(e=A.current)||e.focus({preventScroll:!0}),S.change(F),(0,j.Y)(()=>{q.current=!1}))}),G=(0,u.z)(e=>{e.preventDefault()}),{isFocusVisible:J,focusProps:V}=(0,i.F)({autoFocus:h}),{isHovered:B,hoverProps:Y}=(0,o.X)({isDisabled:a}),{pressed:W,pressProps:Z}=(0,c.x)({disabled:a}),$=(0,d.useMemo)(()=>({selected:M,hover:B,active:W,focus:J,autofocus:h,disabled:a}),[M,B,J,W,h,a]),H=(0,y.dG)({ref:_,onKeyDown:U,onMouseDown:G,onClick:z,id:l,role:"tab",type:(0,m.f)(e,A),"aria-controls":null==(s=null==(r=I[F])?void 0:r.current)?void 0:s.id,"aria-selected":M,tabIndex:M?0:-1,disabled:a||void 0,autoFocus:h},V,Y,Z);return(0,y.sY)({ourProps:H,theirProps:f,slot:$,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,y.yV)(function(e,t){let{defaultIndex:r=0,vertical:s=!1,manual:n=!1,onChange:l,selectedIndex:a=null,...i}=e,o=s?"vertical":"horizontal",c=n?"manual":"auto",m=null!==a,f=(0,h.E)({isControlled:m}),g=(0,p.T)(t),[j,w]=(0,d.useReducer)(D,{info:f,selectedIndex:null!=a?a:r,tabs:[],panels:[]}),N=(0,d.useMemo)(()=>({selectedIndex:j.selectedIndex}),[j.selectedIndex]),k=(0,h.E)(l||(()=>{})),T=(0,h.E)(j.tabs),E=(0,d.useMemo)(()=>({orientation:o,activation:c,...j}),[o,c,j]),I=(0,u.z)(e=>(w({type:1,tab:e}),()=>w({type:2,tab:e}))),S=(0,u.z)(e=>(w({type:3,panel:e}),()=>w({type:4,panel:e}))),R=(0,u.z)(e=>{O.current!==e&&k.current(e),m||w({type:0,index:e})}),O=(0,h.E)(m?e.selectedIndex:j.selectedIndex),C=(0,d.useMemo)(()=>({registerTab:I,registerPanel:S,change:R}),[]);return(0,x.e)(()=>{w({type:0,index:null!=a?a:r})},[a]),(0,x.e)(()=>{if(void 0===O.current||j.tabs.length<=0)return;let e=(0,v.z2)(j.tabs,e=>e.current);e.some((e,t)=>j.tabs[t]!==e)&&R(e.indexOf(j.tabs[O.current]))}),d.createElement(P,null,d.createElement(_.Provider,{value:C},d.createElement(A.Provider,{value:E},E.tabs.length<=0&&d.createElement(b,{onFocus:()=>{var e,t;for(let r of T.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,y.sY)({ourProps:{ref:g},theirProps:i,slot:N,defaultTag:"div",name:"Tabs"}))))}),List:(0,y.yV)(function(e,t){let{orientation:r,selectedIndex:s}=O("Tab.List"),n=(0,p.T)(t),l=(0,d.useMemo)(()=>({selectedIndex:s}),[s]);return(0,y.sY)({ourProps:{ref:n,role:"tablist","aria-orientation":r},theirProps:e,slot:l,defaultTag:"div",name:"Tabs.List"})}),Panels:(0,y.yV)(function(e,t){let{selectedIndex:r}=O("Tab.Panels"),s=(0,p.T)(t),n=(0,d.useMemo)(()=>({selectedIndex:r}),[r]);return(0,y.sY)({ourProps:{ref:s},theirProps:e,slot:n,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,y.yV)(function(e,t){var r,s,n,l;let a=(0,d.useId)(),{id:o=`headlessui-tabs-panel-${a}`,tabIndex:c=0,...u}=e,{selectedIndex:h,tabs:m,panels:b}=O("Tab.Panel"),v=C("Tab.Panel"),g=(0,d.useRef)(null),j=(0,p.T)(g,t);(0,x.e)(()=>v.registerPanel(g),[v,g]);let w=k("panels"),N=b.indexOf(g);-1===N&&(N=w);let P=N===h,{isFocusVisible:T,focusProps:E}=(0,i.F)(),I=(0,d.useMemo)(()=>({selected:P,focus:T}),[P,T]),S=(0,y.dG)({ref:j,id:o,role:"tabpanel","aria-labelledby":null==(s=null==(r=m[N])?void 0:r.current)?void 0:s.id,tabIndex:P?c:-1},E);return P||null!=(n=u.unmount)&&!n||null!=(l=u.static)&&l?(0,y.sY)({ourProps:S,theirProps:u,slot:I,defaultTag:"div",features:F,visible:P,name:"Tabs.Panel"}):d.createElement(f._,{as:"span","aria-hidden":"true",...S})})});var L=r(434);let U=d.forwardRef(function({title:e,titleId:t,...r},s){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}),q=d.forwardRef(function({title:e,titleId:t,...r},s){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?d.createElement("title",{id:t},e):null,d.createElement("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"}))});function z(){return a.jsx(a.Fragment,{children:a.jsx("div",{variants:{hidden:{opacity:0},show:{opacity:1}},initial:"hidden",animate:"show",className:"mx-6",children:(0,a.jsxs)(M.Group,{manual:!0,children:[(0,a.jsxs)(M.List,{className:"flex items-center gap-2 justify-between mx-2 my-2 sm:mx-6 sm:my-4",children:[a.jsx(M,{className:"rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300",children:(0,a.jsxs)("div",{className:"inline-flex items-center",children:[a.jsx("h2",{className:"tracking-widest text-xl",children:"Easy"}),a.jsx(q,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"}),a.jsx(U,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"}),a.jsx(U,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"})]})}),a.jsx(M,{className:"rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300",children:(0,a.jsxs)("div",{className:"inline-flex items-center",children:[a.jsx("h2",{className:"tracking-widest text-xl",children:"Medium"}),a.jsx(q,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"}),a.jsx(q,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"}),a.jsx(U,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"})]})}),a.jsx(M,{className:"rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white  hover:bg-indigo-300",children:(0,a.jsxs)("div",{className:"inline-flex items-center",children:[a.jsx("h2",{className:"tracking-widest text-xl",children:"Hard"}),a.jsx(q,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"}),a.jsx(q,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"}),a.jsx(q,{className:"h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block"})]})})]}),(0,a.jsxs)(M.Panels,{children:[a.jsx(M.Panel,{children:(0,a.jsxs)("div",{className:" flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3",children:[(0,a.jsxs)(L.default,{href:"easy/task",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2",children:"TaskToDoList"})}),a.jsx("p",{children:"Список задач"})]}),(0,a.jsxs)(L.default,{href:"easy/counter",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2",children:"Counter"})}),a.jsx("p",{children:"Счетчик"})]}),(0,a.jsxs)(L.default,{href:"easy/calculator",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2",children:"Calculator"})}),a.jsx("p",{children:"Калькулятор"})]}),(0,a.jsxs)(L.default,{href:"easy/image-slider",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2",children:"ImageSlider"})}),a.jsx("p",{children:"Слайдер картинок"})]})]})}),a.jsx(M.Panel,{children:(0,a.jsxs)("div",{className:" flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3",children:[(0,a.jsxs)(L.default,{href:"medium/test-animation",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2",children:"TestAnimation"})}),a.jsx("p",{children:"Тестовая анимация"})]}),(0,a.jsxs)(L.default,{href:"",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2"})}),a.jsx("p",{})]}),(0,a.jsxs)(L.default,{href:"",className:"bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full",children:[a.jsx("div",{className:"bg-blue-200 w-full flex justify-center rounded-t-md",children:a.jsx("h2",{className:"p-2"})}),a.jsx("p",{})]})]})}),a.jsx(M.Panel,{children:a.jsx("h3",{children:"Content3"})})]})]})})})}},6618:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(326),n=r(1566),l=r(193);function a(){return s.jsx(s.Fragment,{children:(0,s.jsxs)(n.J2,{className:"relative",children:[(0,s.jsxs)(n.J2.Button,{children:[s.jsx("span",{className:"sr-only",children:"Open menu"}),s.jsx(l.Z,{className:"h-10 w-10 text-black-500 transition ui-open:rotate-180"})]}),s.jsx(n.J2.Panel,{className:"absolute z-10 bg-white w-screen shadow-md",children:s.jsx("div",{className:"bg-color-yellow-100",children:(0,s.jsxs)("ul",{children:[s.jsx("li",{children:"1"}),s.jsx("li",{children:"22"}),s.jsx("li",{children:"333"}),s.jsx("li",{children:"4444"})]})})})]})})}var i=r(6439),o=r(434);function d(){return s.jsx(s.Fragment,{children:s.jsx("header",{className:"bg-indigo-300 border-b-2 border-indigo-400 shadow-lg p-2",children:(0,s.jsxs)("nav",{className:"flex justify-between items-center w-[92%] m-auto",children:[s.jsx("div",{children:s.jsx(o.default,{href:"/",children:(0,s.jsxs)("svg",{xmlns:"https://www.w3.org/2000/org",viewBox:"0 0 24 24",className:"w-12",children:[s.jsx("path",{d:"M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"}),s.jsx("path",{d:"M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"}),s.jsx("path",{d:"M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"})]})})}),s.jsx("div",{children:(0,s.jsxs)("ul",{className:"hidden sm:flex items-center gap-[4vw]",children:[s.jsx("li",{className:"hover:text-gray-500 cursor-pointer",children:"1"}),s.jsx("li",{className:"hover:text-gray-500 cursor-pointer",children:"22"}),s.jsx("li",{className:"hover:text-gray-500 cursor-pointer",children:"333"}),s.jsx("li",{className:"hover:text-gray-500 cursor-pointer",children:"4444"})]})}),s.jsx("div",{className:"flex grow items-center justify-end sm:hidden",children:s.jsx(a,{})}),s.jsx("div",{className:"hidden sm:block",children:s.jsx(i.E.button,{className:"bg-fuchsia-300 text-slate-100 px-5 py-2 rounded-3xl border-2 border-fuchsia-500",whileTap:{scale:.9},whileHover:{scale:1.1,backgroundColor:"rgb(217 70 239)",color:"black"},transition:{bounceDamping:10,bounceStiffness:600},children:"sign In"})})]})})})}},4366:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>u});var s=r(9510),n=r(7248),l=r.n(n);r(5023);var a=r(8570);let i=(0,a.createProxy)(String.raw`/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/components/header.js`),{__esModule:o,$$typeof:d}=i;i.default;let c=(0,a.createProxy)(String.raw`/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/components/header.js#default`),u={title:"test",description:"test-project"};function x({children:e}){return s.jsx(s.Fragment,{children:s.jsx("html",{lang:"en",children:s.jsx("body",{className:"bg-indigo-200",children:(0,s.jsxs)("div",{className:l().className,children:[s.jsx(c,{}),s.jsx("main",{className:"h-screen",children:e}),s.jsx("footer",{children:s.jsx("div",{className:"flex justify-center items-center h-16",children:s.jsx("p",{children:"Footer"})})})]})})})})}},9372:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(9510);function n(){return s.jsx("div",{children:"loading..."})}},4864:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(9510);function n(){return s.jsx("div",{children:"not-found"})}},7276:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(9510),n=r(8570);let l=(0,n.createProxy)(String.raw`/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/components/MainContent.js`),{__esModule:a,$$typeof:i}=l;l.default;let o=(0,n.createProxy)(String.raw`/Users/alenasubbotina/Desktop/NextJS/next-test/src/app/components/MainContent.js#default`);function d(){return s.jsx(o,{})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[325],()=>r(4779));module.exports=s})();