"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[481],{8222:function(e,n,t){t.r(n),t.d(n,{default:function(){return je}});var i=t(586),a=t(2791),r=t(8687);var s=t.p+"static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",c=t(184),o=function(){return(0,c.jsxs)("div",{className:"sidebar-logo-container",children:[(0,c.jsx)("img",{src:s,className:"sidebar-logo",alt:"logo"}),(0,c.jsx)("h1",{className:"sidebar-title",children:"React Admin"})]})},l=t(3433),u=t(5671),d=t(3144),h=t(9340),p=t(4062),f=t(7495),x=t(3504),j=t(9335),v=t(1413),g=t(6871);function m(e){return function(n){var t=(0,g.TH)(),i=(0,g.s0)(),a=(0,g.UO)();return(0,c.jsx)(e,(0,v.Z)((0,v.Z)({},n),{},{navigate:i,params:a,location:t}))}}var Z=t(9193);var C=t(3299);function k(e,n,t,i,a){return{key:n,icon:t,children:i,label:e,type:a}}var b=function(e){(0,h.Z)(t,e);var n=(0,p.Z)(t);function t(e){var i;return(0,u.Z)(this,t),(i=n.call(this,e)).rootSubmenuKeys=[],i.handleMenuSelect=function(e){var n=e.key,t=void 0===n?"/home":n,a=function(e,n,t){var i,a=[];for(a=a.concat(e);a.length;){var r=a.shift();r.children&&r.children.length>0&&(a=r.children.concat(a)),t===r[n]&&(i=r)}return i}(Z.ZP,"path",t);i.props.dispatch((0,C._U)(a))},i.state={menuTreeNode:[],selectedKeys:[],openKeys:[]},i}return(0,d.Z)(t,[{key:"getMenuNodes",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=this.props.location.pathname;return e.map((function(e){var a=e.path.startsWith("/")?e.path:"".concat(t,"/").concat(e.path);if(e.children&&!e.hiddenChild){i.includes(a)&&n.setState((function(e){return{openKeys:[].concat((0,l.Z)(e.openKeys),[a])}}));var r=n.getMenuNodes(e.children,a);return k(e.title,a,e.icon,r)}return k((0,c.jsx)(x.OL,{to:e.path,children:e.title}),a,e.icon)}))}},{key:"onOpenChange",value:function(e){var n=this.state.openKeys,t=e.find((function(e){return-1===n.indexOf(e)}));-1===this.rootSubmenuKeys.indexOf(t)?this.setState({openKeys:e}):this.setState({openKeys:t?[t]:[]})}},{key:"componentDidMount",value:function(){var e=this.getMenuNodes(Z.ZP);this.rootSubmenuKeys=Z.ZP.filter((function(e){return e.children})).map((function(e){return e.path})),this.setState({menuTreeNode:e}),this.handleMenuSelect({})}},{key:"render",value:function(){var e=this,n=this.props.location.pathname,t=this.state.openKeys;return(0,c.jsx)("div",{className:"sidebar-menu-container",children:(0,c.jsx)(j.$B,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,children:(0,c.jsx)(f.Z,{selectedKeys:[n],openKeys:t,onSelect:this.handleMenuSelect,onOpenChange:function(n){return e.onOpenChange(n)},mode:"inline",theme:"dark",items:this.state.menuTreeNode})})})}}]),t}(a.Component),y=(0,r.$j)((function(e){return e.user}))(m(b)),N=i.Z.Sider,T=function(e){var n=(0,r.v9)((function(e){return e.app.sidebarLogo})),t=(0,r.v9)((function(e){return e.app.sidebarCollapsed}));return(0,c.jsxs)(N,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"},children:[n?(0,c.jsx)(o,{}):null,(0,c.jsx)(y,{})]})},w=t(3801),S=t(2385),M=t(7734),O=t(1753),V=t(4202),H=t(8164),K=m((function(e){var n=e.location.pathname,t=function(e,n){var t=[];try{for(var i=function e(i){if(!1!==i.breadcrumb&&t.push(i),i.path===n)throw new Error("GOT IT!");if(i.children&&i.children.length>0){for(var a=0;a<i.children.length;a++)e(i.children[a]);t.pop()}else t.pop()},a=0;a<e.length;a++)i(e[a])}catch(r){return t}}(Z.ZP,n),i=t&&t[0];return i&&"\u9996\u9875"!==i.title.trim()&&(t=[{title:"\u9996\u9875",path:"/"}].concat(t)),(0,c.jsx)("div",{className:"Breadcrumb-container",children:(0,c.jsx)(H.Z,{children:t&&t.map((function(e){return"\u9996\u9875"===e.title?(0,c.jsx)(H.Z.Item,{children:(0,c.jsx)(x.rU,{to:e.path,children:e.title})},e.path):(0,c.jsx)(H.Z.Item,{children:e.title},e.path)}))})})})),L=t(9439),P=t(2124),E=t(419),I=t(5945),U=t(5962),z=t(6256),$=function(){if(!P.Z.isEnabled)return E.ZP.warning("you browser can not work"),!1;P.Z.toggle()},D=function(){var e=(0,a.useState)(!1),n=(0,L.Z)(e,2),t=n[0],i=n[1],r=function(){i(P.Z.isFullscreen)};(0,a.useEffect)((function(){return P.Z.isEnabled&&P.Z.on("change",r),function(){P.Z.isEnabled&&P.Z.off("change",r)}}),[]);var s=t?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f";return(0,c.jsx)("div",{className:"fullScreen-container",children:(0,c.jsx)(I.Z,{placement:"bottom",title:s,children:(0,c.jsx)("span",{title:s,onClick:$,children:t?(0,c.jsx)(U.Z,{}):(0,c.jsx)(z.Z,{})})})})},B=t(3621),W=t(5546),_=t(5041),A=(0,r.$j)((function(e){return e.app}))((function(e){var n=e.sidebarCollapsed,t=e.dispatch;return(0,c.jsx)("div",{className:"hamburger-container",onClick:function(){t((0,_.vl)())},children:n?(0,c.jsx)(B.Z,{}):(0,c.jsx)(W.Z,{})})})),R=t(2414),F=(0,r.$j)((function(e){return(0,v.Z)({},e.app)}))((function(e){var n=e.dispatch;return(0,c.jsx)("div",{className:"settings-container",children:(0,c.jsx)(I.Z,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e",children:(0,c.jsx)(R.Z,{onClick:function(){n((0,_.Ts)())}})})})})),q=t.p+"static/media/avatar.e7143313033a85749ef4.gif",G=i.Z.Header,X=function(){var e=(0,r.v9)((function(e){return(0,v.Z)((0,v.Z)({},e.app),e.user)})),n=(0,r.I0)(),t=e.token,i=e.avatar,a=e.showSettings,s=e.fixedHeader,o=e.sidebarCollapsed,l=[{label:(0,c.jsx)(x.rU,{to:"/",children:"\u9996\u9875"}),key:"dashboard"},{label:(0,c.jsx)("a",{target:"_blank",href:"https://gitee.com/sangtian152/react-antd-admin",rel:"noopener noreferrer",children:"\u9879\u76ee\u5730\u5740"}),key:"project"},{type:"divider"},{label:"\u6ce8\u9500",key:"logout"}],u=(0,c.jsx)(f.Z,{onClick:function(e){if("logout"===e.key)!function(e){w.Z.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){n((0,V.kS)(e))}})}(t)},items:l});return(0,c.jsxs)(c.Fragment,{children:[s?(0,c.jsx)(G,{}):null,(0,c.jsxs)(G,{style:s?o?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:s?"fix-header":"",children:[(0,c.jsx)(A,{}),(0,c.jsx)(K,{}),(0,c.jsxs)("div",{className:"right-menu",children:[(0,c.jsx)(D,{}),a?(0,c.jsx)(F,{}):null,(0,c.jsx)("div",{className:"dropdown-wrap",children:(0,c.jsx)(S.Z,{overlay:u,children:(0,c.jsxs)("div",{children:[(0,c.jsx)(M.C,{shape:"square",size:"medium",src:i||q}),(0,c.jsx)(O.Z,{})]})})})]})]})]})},Y=t(8885),J=t(6106),Q=t(914),ee=t(5581),ne=t(1333),te=t(785),ie=t(7309),ae=t(9150),re=t(3414),se=t(33),ce=t.n(se);function oe(e,n){var t=new(ce())(n.target,{text:function(){return e}});t.on("success",(function(){E.ZP.success("\u590d\u5236\u6210\u529f"),t.destroy()})),t.on("error",(function(){E.ZP.error("\u590d\u5236\u5931\u8d25"),t.destroy()})),t.onClick(n)}var le=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.app.settingPanelVisible})),t=(0,r.v9)((function(e){return e.app.sidebarLogo})),i=(0,r.v9)((function(e){return e.app.fixedHeader})),s=(0,r.v9)((function(e){return e.app.tagsView})),o=(0,a.useState)(t),l=(0,L.Z)(o,2),u=l[0],d=l[1],h=(0,a.useState)(i),p=(0,L.Z)(h,2),f=p[0],x=p[1],j=(0,a.useState)(s),v=(0,L.Z)(j,2),g=v[0],m=v[1];return(0,c.jsx)("div",{className:"rightSettings",children:(0,c.jsxs)(Y.Z,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:function(){e((0,_.Ts)())},visible:n,children:[(0,c.jsxs)(J.Z,{children:[(0,c.jsx)(Q.Z,{span:12,children:(0,c.jsx)("span",{children:"\u4fa7\u8fb9\u680f Logo"})}),(0,c.jsx)(Q.Z,{span:12,children:(0,c.jsx)(ee.Z,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:u,onChange:function(n){d(n),e((0,_.oz)({key:"sidebarLogo",value:n}))}})})]}),(0,c.jsx)(ne.Z,{dashed:!0}),(0,c.jsxs)(J.Z,{children:[(0,c.jsx)(Q.Z,{span:12,children:(0,c.jsx)("span",{children:"\u56fa\u5b9a Header"})}),(0,c.jsx)(Q.Z,{span:12,children:(0,c.jsx)(ee.Z,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:f,onChange:function(n){x(n),e((0,_.oz)({key:"fixedHeader",value:n}))}})})]}),(0,c.jsx)(ne.Z,{dashed:!0}),(0,c.jsxs)(J.Z,{children:[(0,c.jsx)(Q.Z,{span:12,children:(0,c.jsx)("span",{children:"\u5f00\u542f Tags-View"})}),(0,c.jsx)(Q.Z,{span:12,children:(0,c.jsx)(ee.Z,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:g,onChange:function(n){m(n),e((0,_.oz)({key:"tagsView",value:n}))}})})]}),(0,c.jsx)(ne.Z,{dashed:!0}),(0,c.jsx)(J.Z,{children:(0,c.jsxs)(Q.Z,{span:24,children:[(0,c.jsx)(te.Z,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,icon:(0,c.jsx)(ae.Z,{}),style:{marginBottom:"16px"}}),(0,c.jsx)(ie.Z,{style:{width:"100%"},icon:(0,c.jsx)(re.Z,{}),onClick:function(e){oe("\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(u,",\n      fixedHeader: ").concat(f,",\n      tagsView: ").concat(g,",\n    }\n    "),e)},children:"\u62f7\u8d1d\u914d\u7f6e"})]})})]})})},ue=t(7528),de=function(e){(0,h.Z)(t,e);var n=(0,p.Z)(t);function t(e){var i;return(0,u.Z)(this,t),(i=n.call(this,e)).tagListContainer=a.createRef(),i.contextMenuContainer=a.createRef(),i.handleClose=function(e){var n=i.props,t=n.location,a=n.navigate,r=n.deleteTag,s=n.taglist,c=e.path,o=t.pathname,l=s.length;c===o&&a(s[l-1].path),c===s[l-1].path&&o===s[l-1].path&&(l-2>0?a(s[l-2].path):2===l&&a(s[0].path)),r(e)},i.handleClick=function(e){i.props.navigate(e)},i.openContextMenu=function(e,n){n.preventDefault();var t=n.clientX,a=n.clientY;t>i.tagListContainer.current.clientWidth-105?i.setState({left:t-105+15,top:a,menuVisible:!0,currentTag:e}):i.setState({left:t,top:a,menuVisible:!0,currentTag:e})},i.handleClickOutside=function(e){var n=i.state.menuVisible;!(i.contextMenuContainer.current&&i.contextMenuContainer.current.contains(e.target))&&n&&i.closeContextMenu()},i.handleCloseAllTags=function(){i.props.emptyTaglist(),i.props.navigate("/dashboard"),i.closeContextMenu()},i.handleCloseOtherTags=function(){var e=i.state.currentTag,n=e.path;i.props.closeOtherTags(e),i.props.navigate(n),i.closeContextMenu()},console.log(e),i.state={left:0,top:0,menuVisible:!1},i}return(0,d.Z)(t,[{key:"closeContextMenu",value:function(){this.setState({menuVisible:!1})}},{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var e=this,n=this.state,t=n.left,i=n.top,a=n.menuVisible,r=this.props,s=r.taglist,o=r.location.pathname;return(0,c.jsxs)("div",{className:"tagsView-container",children:[(0,c.jsx)(j.$B,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,hideTracksWhenNotNeeded:!0,renderView:function(e){return(0,c.jsx)("div",(0,v.Z)((0,v.Z)({},e),{},{className:"scrollbar-container"}))},renderTrackVertical:function(e){return(0,c.jsx)("div",(0,v.Z)((0,v.Z)({},e),{},{className:"scrollbar-track-vertical"}))},children:(0,c.jsx)("ul",{className:"tags-wrap",ref:this.tagListContainer,children:s.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(ue.Z,{onClose:e.handleClose.bind(null,n),closable:!n.affix,color:o===n.path?"geekblue":"gold",onClick:e.handleClick.bind(null,n.path),onContextMenu:e.openContextMenu.bind(null,n),children:n.title})},n.path)}))})}),a?(0,c.jsxs)("ul",{className:"contextmenu",style:{left:"".concat(t,"px"),top:"".concat(i,"px")},ref:this.contextMenuContainer,children:[(0,c.jsx)("li",{onClick:this.handleCloseOtherTags,children:"\u5173\u95ed\u5176\u4ed6"}),(0,c.jsx)("li",{onClick:this.handleCloseAllTags,children:"\u5173\u95ed\u6240\u6709"})]}):null]})}}]),t}(a.Component),he=m((0,r.$j)((function(e){return e.tagsView}),{deleteTag:C.Pn,emptyTaglist:C.Uz,closeOtherTags:C.yv})(de)),pe=t(916),fe=function(){var e=(0,g.s0)(),n=(0,g.TH)(),t=(0,a.useState)(!1),i=(0,L.Z)(t,2),s=i[0],o=i[1],l=(0,r.v9)((function(e){return e.user.token}));return(0,a.useEffect)((function(){var t=(0,pe.U)(n.pathname);t&&t.auth&&!l?(o(!1),e("/login",{replace:!0})):(o(!0),t.redirect&&e(t.redirect,{replace:!0}))}),[n.pathname,l,e]),s?(0,c.jsx)(g.j3,{}):null},xe=i.Z.Content,je=function(){var e=(0,r.v9)((function(e){return e.app.tagsView}));return(0,c.jsxs)(i.Z,{className:"app-container",children:[(0,c.jsx)(T,{}),(0,c.jsxs)(i.Z,{className:"app-layout",children:[(0,c.jsx)(X,{className:"app-header"}),e?(0,c.jsx)(he,{}):null,(0,c.jsx)(xe,{className:"app-content",children:(0,c.jsx)(fe,{})}),(0,c.jsx)(le,{})]})]})}}}]);
//# sourceMappingURL=481.e0ed2d9e.chunk.js.map