import{_ as u,c,b as n,d as t,F as r,z as p,A as m,t as o,w as g,r as i,o as d,g as f}from"./index-vWHc9fQX.js";var b={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:x,VITE_PATH:y}=b,v={data(){return{orderId:"",user:{},productsData:[],total:0,isLoading:!0}},methods:{showUserData(){const l=`${x}/api/${y}/order/${this.orderId}`;this.$http.get(l).then(a=>{this.user=a.data.order.user,this.productsData=a.data.order.products,this.total=a.data.order.total}).catch(a=>{alert(a.response.data.message)}).finally(()=>{this.isLoading=!1})}},mounted(){this.orderId=localStorage.getItem("orderId"),this.showUserData()}},L={class:"container my-35"},V=t("h2",{class:"h4 text-center mb-10"},"已付款完成！",-1),E={class:"row justify-content-center"},T={class:"col-lg-5"},w=t("h2",{class:"h5 mb-3"},"購買商品",-1),D={class:"table align-middle table-light p-5"},I=t("thead",null,[t("tr",null,[t("th",{class:"thead-text"},"商品"),t("th",{class:"text-center thead-text"},"數量"),t("th",{class:"text-end thead-text"},"小計")])],-1),k={height:"100"},U=["src","alt"],R={class:"text-center"},S={class:"text-end fs-14"},N={class:"col-lg-5"},A=t("h2",{class:"h5 mb-3"},"顧客資料",-1),B={class:"table table-light mb-10 mb-md-5 table-borderless"},P={class:"fs-14"},C=t("th",{class:"fw-normal",width:"100"},"姓名",-1),q={class:"fs-14"},F=t("td",null,"Email",-1),H={class:"fs-14"},O=t("td",null,"收件人手機",-1),j={class:"fs-14"},z=t("td",null,"收件人地址",-1),M=t("tr",{class:"fs-14"},[t("td",null,"付款狀態"),t("td",{class:"text-success"},"付款完成")],-1),X={class:"text-end"};function $(l,a,G,J,s,K){const _=i("VueLoading"),h=i("router-Link");return d(),c(r,null,[n(_,{active:s.isLoading},null,8,["active"]),t("div",L,[V,t("div",E,[t("div",T,[w,t("table",D,[I,t("tbody",null,[s.productsData?(d(!0),c(r,{key:0},p(s.productsData,e=>(d(),c("tr",{key:e.id},[t("td",k,[t("img",{src:e.product.imageUrl,alt:e.product.title,width:"50",class:"rounded-2 me-5"},null,8,U),t("span",null,o(e.product.title),1)]),t("td",R,o(e.qty),1),t("td",S,"NT."+o((e.product.price*e.qty).toLocaleString()),1)]))),128)):m("",!0)])])]),t("div",N,[A,t("table",B,[t("tbody",null,[t("tr",P,[C,t("td",null,o(s.user.name),1)]),t("tr",q,[F,t("td",null,o(s.user.email),1)]),t("tr",H,[O,t("td",null,o(s.user.tel),1)]),t("tr",j,[z,t("td",null,o(s.user.address),1)]),M])]),t("div",X,[n(h,{type:"button",class:"btn btn-primary w-50 text-white",to:"/"},{default:g(()=>[f("返回首頁")]),_:1})])])])])],64)}const W=u(v,[["render",$]]);export{W as default};