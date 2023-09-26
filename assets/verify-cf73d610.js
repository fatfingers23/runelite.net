import{L as l}from"./layout-28bd1606.js";import{c as f,_ as b,aD as h,e,d as i,M as o,h as u,aE as p,aF as g,b as m,aG as y}from"./index-d1184385.js";import{p as v}from"./prepare-be1076f7.js";const w=["020004743a7e0bf6d257ef0833b9ed229204a0112e80a05adfed36d73d7c3d5e","07c658c06b48637409a27fa299dbb447ea2a047db46fa726ea208fda5b8e4cef","2cea36b447a507c793367111a6d891de6fa028440daba22aa24a504034816fbd","36da47090fa642a4ae9bdc28f7ba00fda16dbf363064c96a5132a3f00fe4685d","3e4d8ba370c6369962279d88de7371f9a285a5c1eeced2f3f0507acd8265850a","49ab6cb2e916b1dd62db1f52f1223bc47226a226abd7f1e3d0c9a34351eb23d0","7b6a27fcae09b79db920a402be8d8f69249257b2cc491fb1372b2852aaf67341","8715ddf633d4e4fe9f928cec84b20df1eedb630ef6e3b5d826039f3cbd9268a2","8865dd1b9c902e89a1906159ed097242a49786652dc5a0407d8316e4ef56369b","8edf21633c91a2a360cb3433f9322d3e3cd1fc2f198dc95f64d2e7ea8ff147e9","9041dcc4ebeb326e02744e10391e90fe96d7fb56c9824fa283ec55321cf22455","96bd4957980d4cebee1c5978ce301e5950a50a6dfb40f191d91bc61a6777cd20","a202dea75936f16e11507ec6a666fc86c8d4ac9dec971be5930c470cd090bf23","b590edee17e2a4236b5a179d35f5934ddf9c9075fb09e93a7408f63242394a5f","bf7d1894f90d849619aab940c8d639340c2e745c1411e55d7735ac31398bc384","d89a7d68467b30e0f1375250b7eb8e5e42b37994843f9b2ee6dcc1a53c829ca9","70ea6088a2d7caf1d7f56c4aedc3952b675299611fe09e86c8c1a084bef69554","77b0a566fda117fbb1a03b57dad7811cda575a1bf62e6de7cabb75767fa9453c","f5fd4882635bbe82bd11a83d75bc5ed89685a9fb640936a1ef012fe580b9bf4b","c424cb30ded96ae34ed817053accbd1757391f55c8ebd6000ad811cc0a74a428","833daa64c2e12a1e1e4b168b4f66cbeb0d77afe660ddef13dae0da8ab4d19629","68340acbbd876108bc93212714f869446acc73fe31508832dadd47f90bce8d1f","8e1be37fbdeb5c8ba3dee9e328fbc05d6fa4088e95473500f338ab622d170bb4","1e16248904a8b874a68adb6fae58bd1fa2f88355aca03cae258d710e26230ac1","971bbff3243ca4e49315d1ad7584da82aa1c5201f18bbc98d47b6ee3c745cc2a","532a634d4b08fcea87c7b95080da44690209145bda05c8f9471a568799ab69a6","5203a1dba0e980e7a48c5de41ec0182efd238de80e730a39675df4db511b6c5c","5db531079e2eab4621dfa37bacf65604dd418530a598306186e5ab0418047701","c74b0162e98d764dccca1ecc85fa731d8df2799907d07db6ded866b9ac9d2daf","43c93ee07307ead4e38e1f5245784162a6b2d1d917e80869b0ca1f5f5e36f7d6","b1b5913dbeff9711a891769a9fda8996030a451e6ddded213508803f6dee7a6d","537ebd020fc2ddfd600f5c7385a755439d9c06307a66077e8bcd718ce8031188","619baa366436904f7c5dd168c93aa05b56f5572f99719178c00e192bf6059ed1","2bbc5085062c821fdfbce8f6597283a292be05f8809ed6de5829999426af6b33"],d=Object.freeze({NONE:Symbol("NONE"),LAUNCHER:Symbol("LAUNCHER"),SHORTCUT:Symbol("SHORTCUT"),INVALID:Symbol("INVALID"),VALID:Symbol("VALID")}),s=c=>{c.preventDefault(),c.stopPropagation()};class L extends b{constructor(a){super(a),this.state={dragging:!1,fileName:null,fileState:d.NONE},this.reset=this.reset.bind(this),this.inputHandler=this.inputHandler.bind(this),this.dropHandler=this.dropHandler.bind(this),this.dragOver=this.dragOver.bind(this),this.dragLeave=this.dragLeave.bind(this),this.checkFile=this.checkFile.bind(this),this.fileHandler=this.fileHandler.bind(this)}checkFile(a){const t=this.state.fileName;let r=d.INVALID;t==null?r=d.NONE:t.match(/.*runelite.*\.lnk/i)?r=d.SHORTCUT:w.includes(a)?r=d.LAUNCHER:this.props.hashes[a]&&(r=d.VALID),this.setState({fileState:r})}reset(){this.setState({dragging:!1,fileName:null,fileState:d.NONE})}fileHandler(a){if(!a||a.length===0){this.reset();return}const t=a[0];this.setState({fileName:t.name});const r=new FileReader;r.onload=n=>h(n.target.result,this.checkFile),r.readAsArrayBuffer(t),window.scrollTo(0,0)}inputHandler(a){s(a),this.fileHandler(a.target.files)}dropHandler(a){this.dragLeave(a),this.fileHandler(a.dataTransfer.files)}dragOver(a){s(a),this.setState({dragging:!0})}dragLeave(a){s(a),this.setState({dragging:!1})}createInput(){return e(i,{children:[e("div",{class:"card-body",children:e("div",{class:`drag-drop-zone ${this.state.dragging?"dragging":""}`,onDrop:this.dropHandler,onDragOver:this.dragOver,onDragEnter:this.dragOver,onDragLeave:this.dragLeave,onDragEnd:this.dragLeave,children:e("p",{children:"Drag and drop your RuneLite setup file here or manually select file below"})})}),e("div",{class:"card-footer",children:e("div",{class:"input-group mb-1",children:e("div",{class:"custom-file",children:[e("input",{type:"file",class:"custom-file-input",id:"inputGroupFile",onChange:this.inputHandler,onClick:a=>a.target.value="",accept:".dmg,.jar,.exe,.AppImage"}),e("label",{class:"custom-file-label",for:"inputGroupFile",children:"Choose file"})]})})})]})}createMsg(a,t){return t===d.NONE?null:t===d.VALID?e(i,{children:[e("div",{class:"card-header bg-primary",children:e("button",{class:"btn btn-dark float-right",onClick:this.reset,children:e("i",{class:"fa fa-fw fa-times"})})}),e("div",{class:"card-body",children:e("p",{class:"text-center mt-5 mb-5",children:e("h3",{children:[e("i",{class:"fa fa-fw fa-check-circle text-success"})," ",e("b",{children:a})," is from"," ",e("a",{href:"https://runelite.net",children:"https://runelite.net"})]})})})]}):t===d.SHORTCUT?e(i,{children:[e("div",{class:"card-header bg-warning",children:e("button",{class:"btn btn-dark float-right",onClick:this.reset,children:e("i",{class:"fa fa-fw fa-times"})})}),e("div",{class:"card-body text-center",children:[e("p",{children:[e("b",{children:a})," is the desktop shortcut for RuneLite."]}),e("p",{children:"Please drag and drop the setup file that you downloaded."})]})]}):t===d.LAUNCHER?e(i,{children:[e("div",{class:"card-header bg-warning",children:e("button",{class:"btn btn-dark float-right",onClick:this.reset,children:e("i",{class:"fa fa-fw fa-times"})})}),e("div",{class:"card-body text-center",children:[e("p",{children:[e("b",{children:a})," is the launcher for RuneLite."]}),e("p",{children:"Please drag and drop the setup file that you downloaded."})]})]}):e(i,{children:[e("div",{class:"card-header bg-danger",children:e("button",{class:"btn btn-dark float-right",onClick:this.reset,children:e("i",{class:"fa fa-fw fa-times"})})}),e("div",{class:"card-body",children:[e("p",{class:"text-center mt-5 mb-5",children:e("h3",{children:[e("i",{class:"fa fa-fw fa-times-circle text-danger"})," ",e("b",{children:a})," ","is not from"," ",e("a",{href:"https://runelite.net",children:"https://runelite.net"})]})}),a.match(/.*runelite.*(dmg|jar|exe|appimage)/i)&&e(i,{children:[e("h5",{children:"You've downloaded a fake client, and your account has been compromised. Remove the fake as soon as possible to minimise further damage."}),e("p",{children:"The following actions should be performed from a secure computer or secure mobile device:"}),e("ul",{children:[e("li",{children:"Change your RuneScape password"}),e("li",{children:"Remove and re-add Authenticator to RuneScape"}),e("li",{children:"Change your RuneScape bank PIN"}),e("li",{children:"Change your email's password"}),e("li",{children:"Add 2FA to your email if you haven't got it enabled"}),e("li",{children:["Check for any linked accounts by accessing the"," ",e("a",{href:"https://www.runescape.com/account_settings",children:"account settings page"})]})]}),e("p",{children:"Some fake clients also install malware, only a fresh install of your operating system can guarantee the total removal of any unwanted software."}),e("p",{children:"You might also want to change any email password if you reused the same as your RuneScape account password."}),e("p",{children:["Once your computer is secure, you should download RuneLite from"," ",e("a",{href:"https://runelite.net",children:"https://runelite.net"}),"."]})]})]})]})}render(){return e(l,{children:[e(o,{title:`Verify RuneLite setup - ${u.title}`,description:"Verify your RuneLite setup files here"}),e("section",{id:"verify",class:"dark-card",children:e("div",{class:"content-section",children:[e("div",{class:"card mb-3",children:this.createMsg(this.state.fileName,this.state.fileState)}),e("div",{class:"card",children:this.createInput()})]})})]})}}const N=c=>({hashes:p(c),fileNames:g(c)}),H=c=>m({fetchHashes:y},c),k=async({fetchHashes:c})=>{await c()},A=f(N,H)(v(k)(L));export{A as default};