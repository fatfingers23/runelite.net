import{c as t,_ as r,e,M as c,h as a,b as l,W as h}from"./index-d1184385.js";import{L as d}from"./layout-28bd1606.js";class u extends r{componentDidMount(){this.props.sessionId&&this.props.username&&this.props.setSession({uuid:this.props.sessionId,username:this.props.username})}render({sessionId:n,username:s}){const i=s&&n?e("p",{children:["You have successfully logged in as ",e("b",{children:s}),". You can now either close this window or navigate to your"," ",e("a",{href:"/account/home",children:"account page"}),"."]}):e("p",{children:["You have successfully logged into RuneLite. Your profiles have been synced to the client, if you have any. If you want to use one of these profiles now, switch to the profile by double clicking the profile in the profiles panel.",e("br",{}),e("br",{}),"You may now close this window."]});return e(d,{children:[e(c,{title:`Successfully logged in - ${a.title}`}),e("section",{id:"logged-in",children:e("div",{class:"content-section",children:[e("h1",{class:"page-header",children:"Congratulations!"}),i]})})]})}}const p=o=>l({setSession:h},o),m=t(o=>o,p)(u);export{m as default};