(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,n,t){e.exports=t(506)},254:function(e,n){},256:function(e,n){},272:function(e,n){},274:function(e,n){},438:function(e,n){},503:function(e,n,t){},506:function(e,n,t){"use strict";t.r(n);var a=t(6),i=t.n(a),r=t(233),s=t.n(r),o=t(509),c=t(53),l=t(54),u=t(56),m=t(55),d=t(57),p=t(74),h="https://s3.amazonaws.com/onename/avatar-placeholder.png",g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(m.a)(n).call(this,e))).state={person:{name:function(){return"Anonymous"},avatarUrl:function(){return h}}},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.handleSignOut,t=e.userSession,a=this.state.person;return t.isSignInPending()?null:i.a.createElement("div",{className:"panel-welcome",id:"section-2"},i.a.createElement("div",{className:"avatar-section"},i.a.createElement("img",{src:a.avatarUrl()?a.avatarUrl():h,className:"img-rounded avatar",id:"avatar-image",alt:""})),i.a.createElement("h1",null,"Hello, ",i.a.createElement("span",{id:"heading-name"},a.name()?a.name():"Nameless Person"),"!"),i.a.createElement("p",{className:"lead"},i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signout-button",onClick:n.bind(this)},"Logout")))}},{key:"componentWillMount",value:function(){var e=this.props.userSession;this.setState({person:new p.Person(e.loadUserData().profile)})}}]),n}(a.Component),b=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleSignIn;return i.a.createElement("div",{className:"panel-landing",id:"section-1"},i.a.createElement("h1",{className:"landing-heading"},"Hello, Blockstack!"),i.a.createElement("p",{className:"lead"},i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"signin-button",onClick:e.bind(this)},"Sign In with Blockstack")))}}]),n}(a.Component),f=new p.AppConfig,v=new p.UserSession({appConfig:f}),S=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"handleSignIn",value:function(e){e.preventDefault(),v.redirectToSignIn()}},{key:"handleSignOut",value:function(e){e.preventDefault(),v.signUserOut(window.location.origin)}},{key:"render",value:function(){return i.a.createElement("div",{className:"site-wrapper"},i.a.createElement("div",{className:"site-wrapper-inner"},v.isUserSignedIn()?i.a.createElement(g,{userSession:v,handleSignOut:this.handleSignOut}):i.a.createElement(b,{userSession:v,handleSignIn:this.handleSignIn})))}},{key:"componentDidMount",value:function(){var e=this;v.isSignInPending()&&v.handlePendingSignIn().then(function(n){window.history.replaceState({},document.title,"/"),e.setState({userData:n})})}}]),n}(a.Component);t(502),t(503);s.a.render(i.a.createElement(o.a,null,i.a.createElement(S,null)),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.2e66aeab.chunk.js.map