import{p as T}from"./PaginationMode-qdDJYZUy.js";import{M as U,T as V}from"./bootstrap.esm-l9cKv-78.js";import{_ as k,o as n,c as a,a as t,j as r,v as u,i as b,F as w,f as $,k as y,l as C,d as L,t as p,b as P,r as v}from"./index-jwpOaIqC.js";var E={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:D,VITE_PATH:R}=E,A={data(){return{productsModal:null,editProduct:{},isLoading:!0,fallPage:!1}},props:["tempItem","updateProduct"],watch:{tempItem(){this.editProduct=this.tempItem}},methods:{openModel(l){this.productsModal.show(),l==="new"?this.$refs.title.textContent="新增商品":this.$refs.title.textContent="編輯商品"},closeModel(){this.productsModal.hide()},updateProduct(){this.$emit("update-Product"),console.log(this.editProduct)},uploadFile(){this.isLoading=!0;const l=document.getElementById("upload"),e=new FormData;e.append("file-to-upload",l.files[0]);const d=`${D}/api/${R}/admin/upload`;this.$http.post(d,e).then(h=>{this.editProduct.imageUrl=h.data.imageUrl}).catch(h=>{alert(h.response.data.message)}).finally(()=>{this.isLoading=!1})}},mounted(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,this.productsModal=new U(this.$refs.productsModal,{backdrop:"static",keyboard:!1}),this.editProduct=this.tempItem}},N={ref:"productsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},S={class:"modal-dialog modal-xl"},B={class:"modal-content border-0"},F={class:"modal-header bg-dark text-white"},H={id:"productModalLabel",class:"modal-title"},O={ref:"title"},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},j={class:"row"},q={class:"col-sm-4"},G={class:"mb-2"},J=t("h6",null,"主圖",-1),K={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),W={class:"mb-3"},Y=t("label",{for:"upload",class:"form-label"},"或 上傳圖片",-1),Z=["src","alt"],tt=t("h6",null,"多圖新增",-1),et={key:0},ot=["src","alt"],st=["onUpdate:modelValue"],lt={key:0},dt={key:1},it={class:"col-sm-8"},nt={class:"mb-3"},at=t("label",{for:"title",class:"form-label"},"標題",-1),ct={class:"row"},rt={class:"mb-3 col-md-6"},ut=t("label",{for:"category",class:"form-label"},"分類",-1),pt={class:"mb-3 col-md-6"},ht=t("label",{for:"price",class:"form-label"},"單位",-1),mt={class:"row"},_t={class:"mb-3 col-md-6"},bt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),gt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"售價",-1),Pt=t("hr",null,null,-1),vt={class:"mb-3"},yt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Mt={class:"mb-3"},wt=t("label",{for:"content",class:"form-label"},"說明內容",-1),kt={class:"mb-3"},Ut={class:"form-check"},$t=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),xt={class:"modal-footer"},It=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Tt(l,e,d,h,o,i){return n(),a("div",N,[t("div",S,[t("div",B,[t("div",F,[t("h5",H,[t("span",O,"新增產品",512)]),z]),t("div",X,[t("div",j,[t("div",q,[t("div",G,[J,t("div",K,[Q,r(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=s=>o.editProduct.imageUrl=s)},null,512),[[u,o.editProduct.imageUrl]])]),t("div",W,[Y,t("input",{type:"file",id:"upload",class:"form-control",onChange:e[1]||(e[1]=(...s)=>i.uploadFile&&i.uploadFile(...s))},null,32)]),o.editProduct.imageUrl?(n(),a("img",{key:0,src:o.editProduct.imageUrl,alt:o.editProduct.title,width:"150",class:"mb-2"},null,8,Z)):b("",!0)]),tt,Array.isArray(o.editProduct.imagesUrl)?(n(),a("div",et,[(n(!0),a(w,null,$(o.editProduct.imagesUrl,(s,_)=>(n(),a("div",{key:_,class:"mb-3"},[s?(n(),a("img",{key:0,src:s,alt:s,width:"150",class:"mb-2"},null,8,ot)):b("",!0),r(t("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":M=>o.editProduct.imagesUrl[_]=M,placeholder:"請輸入圖片連結"},null,8,st),[[u,o.editProduct.imagesUrl[_]]])]))),128)),t("div",null,[!o.editProduct.imagesUrl.length||o.editProduct.imagesUrl[o.editProduct.imagesUrl.length-1]?(n(),a("div",lt,[t("button",{class:"btn btn-outline-success btn-sm d-block w-100",onClick:e[2]||(e[2]=y(s=>o.editProduct.imagesUrl.push(""),["prevent"]))}," 新增圖片 ")])):b("",!0),o.editProduct.imagesUrl.length&&!o.editProduct.imagesUrl[o.editProduct.imagesUrl.length-1]?(n(),a("div",dt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=y(s=>o.editProduct.imagesUrl.pop(),["prevent"]))}," 刪除圖片 ")])):b("",!0)])])):b("",!0)]),t("div",it,[t("div",nt,[at,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=s=>o.editProduct.title=s)},null,512),[[u,o.editProduct.title]])]),t("div",ct,[t("div",rt,[ut,r(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=s=>o.editProduct.category=s)},null,512),[[u,o.editProduct.category]])]),t("div",pt,[ht,r(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=s=>o.editProduct.unit=s)},null,512),[[u,o.editProduct.unit]])])]),t("div",mt,[t("div",_t,[bt,r(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=s=>o.editProduct.origin_price=s)},null,512),[[u,o.editProduct.origin_price,void 0,{number:!0}]])]),t("div",gt,[ft,r(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=s=>o.editProduct.price=s)},null,512),[[u,o.editProduct.price,void 0,{number:!0}]])])]),Pt,t("div",vt,[yt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=s=>o.editProduct.description=s)},`
             `,512),[[u,o.editProduct.description]])]),t("div",Mt,[wt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=s=>o.editProduct.content=s)},`
             `,512),[[u,o.editProduct.content]])]),t("div",kt,[t("div",Ut,[r(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=s=>o.editProduct.is_enabled=s)},null,512),[[C,o.editProduct.is_enabled]]),$t])])])])]),t("div",xt,[It,t("button",{type:"button",class:"btn btn-success",onClick:e[12]||(e[12]=y((...s)=>i.updateProduct&&i.updateProduct(...s),["prevent"]))}," 確認 ")])])])],512)}const Vt=k(A,[["render",Tt]]),Ct={data(){return{deleteProductsModel:null}},methods:{openModel(){this.deleteProductsModel.show()},closeModel(){this.deleteProductsModel.hide()}},props:["tempItem","deleteProduct"],mounted(){this.deleteProductsModel=new U(this.$refs.delProductModal,{keyboard:!1})}},Lt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Et={class:"modal-dialog modal-dialog-centered"},Dt={class:"modal-content border-0"},Rt=t("div",{class:"modal-header"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),At={class:"modal-body"},Nt={class:"text-danger"},St={class:"modal-footer"},Bt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ft(l,e,d,h,o,i){return n(),a("div",Lt,[t("div",Et,[t("div",Dt,[Rt,t("div",At,[L(" 是否刪除 "),t("strong",Nt,p(d.tempItem.title)+" (刪除後將無法恢復)",1)]),t("div",St,[Bt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=y((...s)=>d.deleteProduct&&d.deleteProduct(...s),["prevent"]))}," 確認刪除 ")])])])],512)}const Ht=k(Ct,[["render",Ft]]);var Ot={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:f}=Ot;let m=null;const zt={components:{updateProductModel:Vt,deleteProductsModel:Ht,pagination:T},data(){return{data:[],tempItem:{},isNew:!1,currentPage:1,perPage:10,totalPage:"",toastTitle:"",toastContent:"",isLoading:!0,fallPage:!1}},methods:{getData(l=1){const e=`${g}/api/${f}/admin/products?page=${l}`;this.isLoading=!0,this.$http.get(e).then(d=>{this.data=d.data.products,this.totalPage=d.data.pagination.total_pages}).catch(d=>{alert(d.response.data.message)}).finally(()=>{this.isLoading=!1})},openModel(l,e){l==="new"?(this.isNew=!0,this.tempItem={imagesUrl:[]},this.$refs.pModel.openModel(l)):l==="edit"?(this.isNew=!1,this.tempItem={...e},this.tempItem.imagesUrl||(this.tempItem.imagesUrl=[]),this.$refs.pModel.openModel(l)):l==="delete"&&(this.isNew=!1,this.tempItem={...e},this.$refs.dModel.openModel())},updateProduct(){let l=`${g}/api/${f}/admin/product/${this.tempItem.id}`,e="put";this.toastTitle="更新商品",this.toastContent="商品已更新成功",this.isLoading=!0,this.isNew&&(l=`${g}/api/${f}/admin/product`,e="post",this.isLoading=!0,this.toastTitle="新增商品",this.toastContent="商品已新增成功"),this.$http[e](l,{data:this.tempItem}).then(d=>{this.getData(),this.$refs.pModel.closeModel(),m.show()}).catch(d=>{this.toastContent=d.response.data.message,m.show()}).finally(()=>{this.isLoading=!1})},deleteProduct(){this.isLoading=!0,this.$http.delete(`${g}/api/${f}/admin/product/${this.tempItem.id}`).then(l=>{this.getData(),this.$refs.dModel.closeModel(),this.toastTitle="刪除商品",this.toastContent="商品已刪除成功",m.show()}).catch(l=>{this.toastContent=l.data.message,m.show()}).finally(()=>{this.isLoading=!1})},swichPage(l){const e=`${g}/api/${f}/admin/products?page=${l}`;this.isLoading=!0,this.$http.get(e).then(d=>{this.data=d.data.products,this.currentPage=l}).catch(d=>{alert(d.response.data.message)}).finally(()=>{this.isLoading=!1})},toastClose(){m.hide()}},mounted(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,m=new V(document.getElementById("toast")),this.getData()}},Xt={class:"container"},jt=t("h2",{class:"py-8 mb-0"},"商品管理",-1),qt={class:"row"},Gt={class:"text-end mb-2"},Jt={class:"table mt-4 align-middle text-center table-striped"},Kt=t("thead",null,[t("tr",{class:"table-dark"},[t("th",{scope:"col",width:"120"}," 分類 "),t("th",{scope:"col",width:"250"},"產品"),t("th",{scope:"col",width:"120"}," 原價 "),t("th",{scope:"col",width:"120"}," 售價 "),t("th",{scope:"col",width:"100"}," 狀態 "),t("th",{scope:"col",width:"100"}),t("th",{scope:"col",width:"100"})])],-1),Qt={class:"bg-secondary p-3 text-white rounded-pill"},Wt={class:"text-start"},Yt=["src","alt"],Zt={class:"fw-bold"},te={class:"fw-bold"},ee={key:0,class:"text-success fw-bold"},oe={key:1,class:"text-secondary"},se=["onClick"],le=t("i",{class:"bi bi-pencil me-2"},null,-1),de=t("span",null,"編輯",-1),ie=[le,de],ne=["onClick"],ae=t("i",{class:"bi bi-x-lg"},null,-1),ce=[ae],re={id:"toast",class:"toast hide toast-container position-fixed toast-placement",role:"alert","aria-live":"assertive","aria-atomic":"true"},ue={class:"toast-header mb-0"},pe={class:"me-auto"},he={class:"toast-body"};function me(l,e,d,h,o,i){const s=v("VueLoading"),_=v("pagination"),M=v("update-Product-Model"),x=v("delete-Products-Model");return n(),a(w,null,[P(s,{active:o.isLoading},null,8,["active"]),t("div",Xt,[jt,t("div",qt,[t("div",Gt,[t("button",{class:"btn btn-dark fw-bold",onClick:e[0]||(e[0]=c=>i.openModel("new"))}," 建立新產品 ")]),t("table",Jt,[Kt,t("tbody",null,[(n(!0),a(w,null,$(o.data,c=>(n(),a("tr",{key:c.id},[t("td",null,[t("span",Qt,p(c.category),1)]),t("td",Wt,[t("img",{src:c.imageUrl,alt:c.title,width:"100",class:"me-3 rounded"},null,8,Yt),t("span",Zt,p(c.title),1)]),t("td",null,p(c.origin_price)+"元",1),t("td",te,p(c.price)+"元",1),t("td",null,[c.is_enabled?(n(),a("span",ee,"已啟用")):(n(),a("span",oe,"未啟用"))]),t("td",null,[t("button",{type:"button",class:"btn btn-dark btn-sm",onClick:I=>i.openModel("edit",c)},ie,8,se)]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:I=>i.openModel("delete",c)},ce,8,ne)])]))),128))])])])]),P(_,{"total-Page":o.totalPage,"current-Page":o.currentPage,onSwichPage:i.swichPage,class:"my-15"},null,8,["total-Page","current-Page","onSwichPage"]),P(M,{"temp-Item":o.tempItem,"update-Product":i.updateProduct,onUpdateProduct:i.updateProduct,ref:"pModel"},null,8,["temp-Item","update-Product","onUpdateProduct"]),P(x,{"temp-Item":o.tempItem,"delete-Product":i.deleteProduct,ref:"dModel"},null,8,["temp-Item","delete-Product"]),t("div",re,[t("div",ue,[t("strong",pe,p(o.toastTitle),1),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:e[1]||(e[1]=(...c)=>i.toastClose&&i.toastClose(...c))})]),t("div",he,p(o.toastContent),1)])],64)}const fe=k(zt,[["render",me]]);export{fe as default};
