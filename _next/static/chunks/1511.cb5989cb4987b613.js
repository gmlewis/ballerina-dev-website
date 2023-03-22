(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1511],{861:function(e,a,n){"use strict";n.d(a,{FT:function(){return s}});var o=n(7294),r=n(5893);const t=["as","disabled"];function s({tagName:e,disabled:a,href:n,target:o,rel:r,onClick:t,tabIndex:s=0,type:c}){e||(e=null!=n||null!=o||null!=r?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:a},l];const i=o=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&o.preventDefault(),a?o.stopPropagation():null==t||t(o)};return"a"===e&&(n||(n="#"),a&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:a?void 0:s,href:n,target:"a"===e?o:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:i,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),i(e))}},l]}const c=o.forwardRef(((e,a)=>{let{as:n,disabled:o}=e,c=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);const[l,{tagName:i}]=s(Object.assign({tagName:n,disabled:o},c));return(0,r.jsx)(i,Object.assign({},c,l,{ref:a}))}));c.displayName="Button",a.ZP=c},9075:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return b}});var o=n(5893),r=n(7294),t=n(9126),s=n(682),c=n(8819),l=n(6957),i=n(1058),d=n(4051),u=n.n(d);function v(e,a,n,o,r,t,s){try{var c=e[t](s),l=c.value}catch(i){return void n(i)}c.done?a(l):Promise.resolve(l).then(o,r)}function f(e){return function(){var a=this,n=arguments;return new Promise((function(o,r){var t=e.apply(a,n);function s(e){v(t,o,r,s,c,"next",e)}function c(e){v(t,o,r,s,c,"throw",e)}s(void 0)}))}}function h(){return r.useEffect((function(){function e(){return(e=f(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:docsearch({container:".algolia-search-cont",appId:"8LWM72S9RU",apiKey:"bb7db1982548a3e7d094cde7e8dd7100",indexName:"ballerina_pre",searchParameters:{hitsPerPage:1e3}});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"algolia-search-cont",children:(0,o.jsxs)("div",{className:"algolia-search-wrap form-control",children:[(0,o.jsx)("span",{className:"glyphicon glyphicon-search search-icon","aria-hidden":"true"}),(0,o.jsx)("input",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",placeholder:"Search...",role:"textbox",spellCheck:"false",type:"text",defaultValue:"",className:"algolia-search-box",id:"algolia-search-box"})]})})})}var p=n(5640),m=n(9060),_=n.n(m),b=function(e){var a=e.launcher;return n.g.location.pathname.indexOf("learn")>0&&(a+="-learn"),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.Z,{className:"home"===a?"".concat(_()[a]," navbar-dark"):_()[a],expand:"lg",sticky:"top",children:(0,o.jsxs)(s.Z,{fluid:!0,className:"home"===a?_().toggleFloat:null,children:["home"!==a?(0,o.jsx)(t.Z.Brand,{href:"".concat(p.O,"/"),className:_().logo,children:(0,o.jsx)(i.Z,{src:"".concat(p.O,"/images/ballerina-logo.svg"),height:28,width:150,alt:"Ballerina Logo"})}):null,(0,o.jsx)(t.Z.Toggle,{"aria-controls":"navbarScroll"}),(0,o.jsxs)(t.Z.Collapse,{id:"navbarScroll",className:_().navItems,children:[(0,o.jsxs)(c.Z,{className:"".concat(_().topNav," ms-auto my-2 my-lg-0"),navbarScroll:!0,children:[(0,o.jsx)(c.Z.Link,{className:"downloads"===a?"".concat(_().active," ").concat(_().navItem):"".concat(_().navItem),href:"".concat(p.O,"/downloads"),children:"Download"}),(0,o.jsxs)(l.Z,{title:"Use cases",id:_().navbarScrollingDropdown,className:"usecases"===a?"".concat(_().active):null,children:[(0,o.jsx)(l.Z.Item,{href:"".concat(p.O,"/usecases/integration"),className:_().dropDownItem,children:"Integration"}),(0,o.jsx)(l.Z.Item,{href:"".concat(p.O,"/usecases/ai"),className:_().dropDownItem,children:"AI"})]}),(0,o.jsx)(c.Z.Link,{className:_().navItem,href:"https://play.ballerina.io/",target:"_blank",rel:"noreferrer",children:"Playground"}),(0,o.jsx)(c.Z.Link,{className:"docs-learn"===a?"".concat(_().active," ").concat(_().navItem):"".concat(_().navItem),href:"".concat(p.O,"/learn"),children:"Learn"}),(0,o.jsx)(c.Z.Link,{className:_().navItem,href:"https://central.ballerina.io/",target:"_blank",rel:"noreferrer",children:"Central"}),(0,o.jsx)(c.Z.Link,{className:"community"===a?"".concat(_().active," ").concat(_().navItem):"".concat(_().navItem),href:"".concat(p.O,"/community"),children:"Community"}),(0,o.jsx)(c.Z.Link,{className:_().navItem,href:"https://blog.ballerina.io/",target:"_blank",rel:"noreferrer",children:"Blog"}),"docs-learn"===a?(0,o.jsxs)(l.Z,{title:"Swan Lake",id:_().navbarScrollingDropdown,children:[(0,o.jsx)(l.Z.Item,{href:"".concat(p.O,"/learn/"),className:_().dropDownItem,children:"Swan Lake"}),(0,o.jsx)(l.Z.Item,{href:"".concat(p.O,"/1.2/learn/"),className:_().dropDownItem,children:"v1.2"})]}):null]}),(0,o.jsx)(h,{})]})]})})})}},9060:function(e){e.exports={navbar:"TopNav_navbar__SJ78B",home:"TopNav_home__uZ6Dl",docs:"TopNav_docs__ZwmCb",downloads:"TopNav_downloads__B11H3",other:"TopNav_other__FEtcU","docs-learn":"TopNav_docs-learn__T6ij6",usecases:"TopNav_usecases__U9WMf",community:"TopNav_community__7NkTx",brokenLink:"TopNav_brokenLink__0WTZb","brokenLink-learn":"TopNav_brokenLink-learn__PfGZg",rn:"TopNav_rn__UDldu",logo:"TopNav_logo__jMnQY",navItems:"TopNav_navItems__JW0kZ",topNav:"TopNav_topNav__Zzb38",navItem:"TopNav_navItem__Hr5i7",navbarScrollingDropdown:"TopNav_navbarScrollingDropdown__PUDvQ",active:"TopNav_active__ASxj2",toggleFloat:"TopNav_toggleFloat__uwpG2",searchButton:"TopNav_searchButton__PZ4rQ",searchButtonContainer:"TopNav_searchButtonContainer__xgSI5",searchButtonIcon:"TopNav_searchButtonIcon__kOUN9","DocSearch-Button-Placeholder":"TopNav_DocSearch-Button-Placeholder__4LlUg",searchButtonKeys:"TopNav_searchButtonKeys__NUK31",hackathonBanner:"TopNav_hackathonBanner__qr5r0",dropDownItem:"TopNav_dropDownItem__hc5yc"}},5005:function(e,a,n){"use strict";var o=n(4184),r=n.n(o),t=n(7294),s=n(861),c=n(6792),l=n(5893);const i=t.forwardRef((({as:e,bsPrefix:a,variant:n,size:o,active:t,className:i,...d},u)=>{const v=(0,c.vE)(a,"btn"),[f,{tagName:h}]=(0,s.FT)({tagName:e,...d}),p=h;return(0,l.jsx)(p,{...f,...d,ref:u,className:r()(i,v,t&&"active",n&&`${v}-${n}`,o&&`${v}-${o}`,d.href&&d.disabled&&"disabled")})}));i.displayName="Button",i.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=i},4819:function(e,a,n){"use strict";const o=n(7294).createContext(null);o.displayName="NavbarContext",a.Z=o},4077:function(e,a,n){"use strict";n.d(a,{Z:function(){return O}});var o=n(4184),r=n.n(o),t=n(8146),s=n(7294),c=n(5288),l=n(1068),i=n(6611),d=(0,i.Z)("offcanvas-body"),u=n(5257),v=n(3825),f=n(2785),h=n(6792),p=n(5893);const m={[u.d0]:"show",[u.cn]:"show"},_=s.forwardRef((({bsPrefix:e,className:a,children:n,...o},t)=>(e=(0,h.vE)(e,"offcanvas"),(0,p.jsx)(f.Z,{ref:t,addEndListener:v.Z,...o,childRef:n.ref,children:(o,t)=>s.cloneElement(n,{...t,className:r()(a,n.props.className,(o===u.d0||o===u.Ix)&&`${e}-toggling`,m[o])})}))));_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},_.displayName="OffcanvasToggling";var b=_,N=n(6467),g=n(4819),x=n(6695);const k=s.forwardRef((({bsPrefix:e,className:a,...n},o)=>(e=(0,h.vE)(e,"offcanvas-header"),(0,p.jsx)(x.Z,{ref:o,...n,className:r()(a,e)}))));k.displayName="OffcanvasHeader",k.defaultProps={closeLabel:"Close",closeButton:!1};var y=k;const w=(0,n(9602).Z)("h5");var j=(0,i.Z)("offcanvas-title",{Component:w}),Z=n(9673);function T(e){return(0,p.jsx)(b,{...e})}function I(e){return(0,p.jsx)(l.Z,{...e})}const E=s.forwardRef((({bsPrefix:e,className:a,children:n,"aria-labelledby":o,placement:l,show:i,backdrop:d,keyboard:u,scroll:v,onEscapeKeyDown:f,onShow:m,onHide:_,container:b,autoFocus:x,enforceFocus:k,restoreFocus:y,restoreFocusOptions:w,onEntered:j,onExit:E,onExiting:O,onEnter:B,onEntering:C,onExited:D,backdropClassName:P,manager:F,...L},S)=>{const U=(0,s.useRef)();e=(0,h.vE)(e,"offcanvas");const{onToggle:R}=(0,s.useContext)(g.Z)||{},$=(0,t.Z)((()=>{null==R||R(),null==_||_()})),H=(0,s.useMemo)((()=>({onHide:$})),[$]);const K=(0,s.useCallback)((a=>(0,p.jsx)("div",{...a,className:r()(`${e}-backdrop`,P)})),[P,e]);return(0,p.jsx)(N.Z.Provider,{value:H,children:(0,p.jsx)(c.Z,{show:i,ref:S,backdrop:d,container:b,keyboard:u,autoFocus:x,enforceFocus:k&&!v,restoreFocus:y,restoreFocusOptions:w,onEscapeKeyDown:f,onShow:m,onHide:$,onEnter:(e,...a)=>{e&&(e.style.visibility="visible"),null==B||B(e,...a)},onEntering:C,onEntered:j,onExit:E,onExiting:O,onExited:(e,...a)=>{e&&(e.style.visibility=""),null==D||D(...a)},manager:F||(v?(U.current||(U.current=new Z.Z({handleContainerOverflow:!1})),U.current):(0,Z.t)()),transition:T,backdropTransition:I,renderBackdrop:K,renderDialog:t=>(0,p.jsx)("div",{role:"dialog",...t,...L,className:r()(a,e,`${e}-${l}`),"aria-labelledby":o,children:n})})})}));E.displayName="Offcanvas",E.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var O=Object.assign(E,{Body:d,Header:y,Title:j})}}]);