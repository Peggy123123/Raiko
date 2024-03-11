import{T as g}from"./bootstrap.esm-l9cKv-78.js";import{_ as w,c as n,b as u,d as t,F as r,z as p,t as i,e as x,g as _,w as C,r as h,o as l}from"./index-vWHc9fQX.js";var D={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:b}=D,T={data(){return{productData:{},addCartQty:1,picture:"",isLoading:!0,fallPage:!1}},methods:{getData(){const a=this.$route.params.id,e=`${m}/api/${b}/product/${a}`;this.isLoading=!0,this.$http.get(e).then(c=>{this.productData=c.data.product,this.picture=this.productData.imageUrl,console.log(this.productData)}).catch(c=>{alert(c.response.message)}).finally(()=>{this.isLoading=!1})},addCart(){const a=`${m}/api/${b}/cart`;this.isLoading=!0,this.$http.post(a,{data:{product_id:this.productData.id,qty:this.addCartQty}}).then(e=>{console.log(e.data),this.showToast(),this.addCartQty=1}).catch(e=>{alert(e.response.data.message)}).finally(()=>{this.isLoading=!1})},initToast(){let a=document.getElementById("liveToast");this.toastInstance=new g(a)},showToast(){this.toastInstance.show()}},mounted(){this.getData(),this.initToast()}},k={class:"container py-30 py-md-35"},L={class:"row"},E={class:"col-md-6"},U={class:"d-flex justify-content-center"},V=["src","alt"],I={class:"d-flex flex-column d-md-none align-items-center"},Q=["src"],j=["src","onClick"],R={class:"col-md-4"},B={class:"d-flex flex-column justify-content-between h-100 mt-10 mt-md-0"},N={class:"mb-3"},P={class:"text-decoration-line-through"},S={class:"mb-0 text-primary fw-bold h4"},A={class:"input-group mb-3 pad-width-change"},z=["disabled"],F=t("i",{class:"bi bi-dash"},null,-1),H=[F],M={class:"form-control text-center text-secondary"},O={class:"btn btn-primary text-white",type:"button"},q={class:"row d-none d-md-block"},X={class:"col-md-6"},G={class:"text-center"},J=["src"],K=["src","onClick"],W=t("ul",{class:"nav nav-tabs justify-content-center",id:"myTab",role:"tablist"},[t("li",{class:"nav-item nav-item-width",role:"presentation"},[t("button",{class:"nav-link active w-100 text-secondary",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#productIformation",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"商品資訊")]),t("li",{class:"nav-item w-50",role:"presentation"},[t("button",{class:"nav-link w-100 text-secondary",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#detail",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"注意事項")])],-1),Y={class:"tab-content",id:"myTabContent"},Z={class:"tab-pane fade show active",id:"productIformation",role:"tabpanel","aria-labelledby":"home-tab"},$={class:"container my-20"},tt=t("h3",{class:"h5 fw-bold"},"商品介紹",-1),st=t("div",{class:"tab-pane fade",id:"detail",role:"tabpanel","aria-labelledby":"profile-tab"},[t("div",{class:"container my-20"},[t("div",{class:"row justify-content-center"},[t("div",{class:"col-md-5 fs-14"},[t("h3",{class:"h5 fw-bold"},"下單注意事項"),t("p",{class:"mb-0"},"請在下單前仔細閱讀商品頁面上的資訊，包括商品規格、尺寸、顏色等，確保您所選擇的商品符合您的需求。"),t("p",null," 請在購物車頁面或結帳頁面查看預計的配送時間，以便合理安排接收商品的時間。")]),t("div",{class:"col-md-5 fs-14"},[t("h3",{class:"h5 fw-bold"},"商品保存"),t("p",{class:"mb-0"},"請將商品存放在建議的適當溫度環境中，以確保商品質量。請避免將商品長時間暴露在陽光直射下，以免影響商品的色澤和質地。"),t("p",null," 避免商品存放在潮濕的環境中，特別是對於紙質商品，潮濕容易影響商品的質感。")])])])],-1),et={class:"toast-style position-fixed end-0 p-3 border-0 d-flex justify-content-end",style:{"z-index":"11"}},ot={id:"liveToast",class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},at={class:"toast-body d-flex justify-content-between"},it=t("p",{class:"mb-0 fw-bold d-flex align-items-center"},"已加入購物車！",-1),nt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);function lt(a,e,c,ct,s,d){const f=h("VueLoading"),v=h("router-link");return l(),n(r,null,[u(f,{active:s.isLoading},null,8,["active"]),t("div",k,[t("div",L,[t("div",E,[t("div",U,[t("img",{src:s.picture,alt:s.productData.title,class:"ing-fluid w-75 rounded-3"},null,8,V),t("div",I,[t("img",{src:s.productData.imageUrl,alt:"主圖1",class:"w-75 mb-2 rounded-3",onClick:e[0]||(e[0]=o=>s.picture=s.productData.imageUrl),style:{cursor:"pointer"}},null,8,Q),(l(!0),n(r,null,p(s.productData.imagesUrl,o=>(l(),n("img",{key:o,src:o,alt:"",class:"w-75 mb-2 rounded-3",onClick:y=>s.picture=o,style:{cursor:"pointer"}},null,8,j))),128))])])]),t("div",R,[t("div",B,[t("div",null,[t("h2",N,i(s.productData.title),1),t("p",null,i(s.productData.content),1),t("div",null,[t("small",P,"NT. "+i(s.productData.origin_price),1),t("p",S,"NT. "+i(s.productData.price),1)])]),t("div",null,[t("div",A,[t("button",{class:"btn btn-primary text-white",type:"button",disabled:s.addCartQty===1,onClick:e[1]||(e[1]=o=>s.addCartQty-=1)},H,8,z),t("span",M,i(s.addCartQty),1),t("button",O,[t("i",{class:"bi bi-plus",onClick:e[2]||(e[2]=o=>s.addCartQty++)})])]),t("button",{type:"button",class:"btn pad-width-change button-primary btn-primary text-white mt-5",onClick:e[3]||(e[3]=x((...o)=>d.addCart&&d.addCart(...o),["stop"]))},"加入購物車")])])])]),t("div",q,[t("div",X,[t("div",G,[t("img",{src:s.productData.imageUrl,alt:"主圖1",class:"product-image-width me-2 mt-3 rounded-3",onClick:e[4]||(e[4]=o=>s.picture=s.productData.imageUrl),style:{cursor:"pointer"}},null,8,J),(l(!0),n(r,null,p(s.productData.imagesUrl,o=>(l(),n("img",{key:o,src:o,alt:"主圖",class:"product-image-width me-2 mt-3 rounded-3",onClick:y=>s.picture=o,style:{cursor:"pointer"}},null,8,K))),128))])])])]),W,t("div",Y,[t("div",Z,[t("div",$,[tt,_(" "+i(s.productData.description),1)])]),st]),t("div",et,[t("div",ot,[t("div",at,[it,u(v,{type:"button",class:"btn bg-primary fs-12",to:"/cart"},{default:C(()=>[_("查看購物車")]),_:1}),nt])])])],64)}const ut=w(T,[["render",lt]]);export{ut as default};