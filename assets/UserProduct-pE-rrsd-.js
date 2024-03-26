import{T as w}from"./bootstrap.esm-l9cKv-78.js";import{_ as x,a as C,c as n,b as u,w as p,d as t,F as c,z as _,t as i,f as D,e as h,r as m,o as l}from"./index-Yfs5rdVQ.js";import{u as T}from"./userCartStore-6sRPPnjl.js";import{_ as k}from"./icon-t1Ce2sCx.js";var L={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:f}=L,E={data(){return{productData:{},addCartQty:1,picture:"",isLoading:!0,fallPage:!1}},computed:{...C(T,["showCart"])},methods:{getData(){const a=this.$route.params.id,e=`${b}/api/${f}/product/${a}`;this.isLoading=!0,this.$http.get(e).then(r=>{this.productData=r.data.product,this.picture=this.productData.imageUrl}).catch(r=>{alert(r.response.message)}).finally(()=>{this.isLoading=!1})},addCart(){const a=`${b}/api/${f}/cart`;this.isLoading=!0,this.$http.post(a,{data:{product_id:this.productData.id,qty:this.addCartQty}}).then(()=>{this.showToast(),this.addCartQty=1,this.showCart()}).catch(e=>{alert(e.response.data.message)}).finally(()=>{this.isLoading=!1})},initToast(){let a=document.getElementById("liveToast");this.toastInstance=new w(a)},showToast(){this.toastInstance.show()}},mounted(){this.getData(),this.initToast()}},U=t("div",{class:"loading-img-bg"},[t("img",{class:"loading-img",src:k,alt:""})],-1),V={class:"container py-30 py-md-35"},I={class:"row"},Q={class:"col-md-6"},j={class:"d-flex justify-content-center"},R=["src","alt"],B={class:"d-flex flex-column d-md-none align-items-center"},N=["src"],P=["src","onClick"],S={class:"col-md-4"},A={class:"d-flex flex-column justify-content-between h-100 mt-10 mt-md-0"},z={class:"mb-3"},F={class:"text-decoration-line-through"},H={class:"mb-0 text-primary fw-bold h4"},M={class:"input-group mb-3 pad-width-change"},O=["disabled"],q=t("i",{class:"bi bi-dash"},null,-1),X=[q],G={class:"form-control text-center text-secondary"},J={class:"btn btn-primary text-white",type:"button"},K={class:"row d-none d-md-block"},W={class:"col-md-6"},Y={class:"text-center"},Z=["src"],$=["src","onClick"],tt=t("ul",{class:"nav nav-tabs justify-content-center",id:"myTab",role:"tablist"},[t("li",{class:"nav-item nav-item-width",role:"presentation"},[t("button",{class:"nav-link active w-100 text-secondary",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#productIformation",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"商品資訊")]),t("li",{class:"nav-item w-50",role:"presentation"},[t("button",{class:"nav-link w-100 text-secondary",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#detail",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"注意事項")])],-1),st={class:"tab-content",id:"myTabContent"},et={class:"tab-pane fade show active",id:"productIformation",role:"tabpanel","aria-labelledby":"home-tab"},ot={class:"container my-20"},at=t("h3",{class:"h5 fw-bold"},"商品介紹",-1),it=t("div",{class:"tab-pane fade",id:"detail",role:"tabpanel","aria-labelledby":"profile-tab"},[t("div",{class:"container my-20"},[t("div",{class:"row justify-content-center"},[t("div",{class:"col-md-5 fs-14"},[t("h3",{class:"h5 fw-bold"},"下單注意事項"),t("p",{class:"mb-0"},"請在下單前仔細閱讀商品頁面上的資訊，包括商品規格、尺寸、顏色等，確保您所選擇的商品符合您的需求。"),t("p",null," 請在購物車頁面或結帳頁面查看預計的配送時間，以便合理安排接收商品的時間。")]),t("div",{class:"col-md-5 fs-14"},[t("h3",{class:"h5 fw-bold"},"商品保存"),t("p",{class:"mb-0"},"請將商品存放在建議的適當溫度環境中，以確保商品質量。請避免將商品長時間暴露在陽光直射下，以免影響商品的色澤和質地。"),t("p",null," 避免商品存放在潮濕的環境中，特別是對於紙質商品，潮濕容易影響商品的質感。")])])])],-1),nt={class:"toast-style position-fixed end-0 p-3 border-0 d-flex justify-content-end",style:{"z-index":"11"}},lt={id:"liveToast",class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true"},rt={class:"toast-body d-flex justify-content-between"},ct=t("p",{class:"mb-0 fw-bold d-flex align-items-center"},"已加入購物車！",-1),dt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);function ut(a,e,r,pt,s,d){const g=m("VueLoading"),v=m("router-link");return l(),n(c,null,[u(g,{active:s.isLoading},{default:p(()=>[U]),_:1},8,["active"]),t("div",V,[t("div",I,[t("div",Q,[t("div",j,[t("img",{src:s.picture,alt:s.productData.title,class:"ing-fluid w-75 rounded-3"},null,8,R),t("div",B,[t("img",{src:s.productData.imageUrl,alt:"主圖1",class:"w-75 mb-2 rounded-3",onClick:e[0]||(e[0]=o=>s.picture=s.productData.imageUrl),style:{cursor:"pointer"}},null,8,N),(l(!0),n(c,null,_(s.productData.imagesUrl,o=>(l(),n("img",{key:o,src:o,alt:"",class:"w-75 mb-2 rounded-3",onClick:y=>s.picture=o,style:{cursor:"pointer"}},null,8,P))),128))])])]),t("div",S,[t("div",A,[t("div",null,[t("h2",z,i(s.productData.title),1),t("p",null,i(s.productData.content),1),t("div",null,[t("small",F,"NT. "+i(s.productData.origin_price),1),t("p",H,"NT. "+i(s.productData.price),1)])]),t("div",null,[t("div",M,[t("button",{class:"btn btn-primary text-white",type:"button",disabled:s.addCartQty===1,onClick:e[1]||(e[1]=o=>s.addCartQty-=1)},X,8,O),t("span",G,i(s.addCartQty),1),t("button",J,[t("i",{class:"bi bi-plus",onClick:e[2]||(e[2]=o=>s.addCartQty++)})])]),t("button",{type:"button",class:"addcart-btn-hover pad-width-change mt-5",onClick:e[3]||(e[3]=D((...o)=>d.addCart&&d.addCart(...o),["stop"]))},"加入購物車")])])])]),t("div",K,[t("div",W,[t("div",Y,[t("img",{src:s.productData.imageUrl,alt:"主圖1",class:"product-image-width me-2 mt-3 rounded-3 img-hover",onClick:e[4]||(e[4]=o=>s.picture=s.productData.imageUrl),style:{cursor:"pointer"}},null,8,Z),(l(!0),n(c,null,_(s.productData.imagesUrl,o=>(l(),n("img",{key:o,src:o,alt:"主圖",class:"product-image-width me-2 mt-3 rounded-3 img-hover",onClick:y=>s.picture=o,style:{cursor:"pointer"}},null,8,$))),128))])])])]),tt,t("div",st,[t("div",et,[t("div",ot,[at,h(" "+i(s.productData.description),1)])]),it]),t("div",nt,[t("div",lt,[t("div",rt,[ct,u(v,{type:"button",class:"btn bg-primary fs-12",to:"/cart"},{default:p(()=>[h("查看購物車")]),_:1}),dt])])])],64)}const ft=x(E,[["render",ut]]);export{ft as default};