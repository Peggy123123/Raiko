import{_ as d,c as u,b as c,a as e,u as n,w as p,F as _,r,o as m,d as h}from"./index-qXln98fC.js";var g={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/Raiko/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:V}=g,D={data(){return{productData:{},isLoading:!0,fallPage:!1}},mounted(){const o=this.$route.params.id,a=`${f}/api/${V}/product/${o}`;this.isLoading=!0,this.$http.get(a).then(s=>{this.productData=s.data.product}).catch(s=>{alert(s.response.message)}).finally(()=>{this.isLoading=!1})}},E={class:"container"},T={class:"mt-5 pt-5"},v=["src","alt"],L={class:"mt-3"};function x(o,a,s,R,t,k){const i=r("VueLoading"),l=r("router-link");return m(),u(_,null,[c(i,{active:t.isLoading},null,8,["active"]),e("div",E,[e("div",T,[e("h2",null,n(t.productData.title),1),e("img",{src:t.productData.imageUrl,alt:t.productData.title,class:"image mt3"},null,8,v),e("p",L,n(t.productData.content),1),c(l,{to:"/productslist",class:"mt-3"},{default:p(()=>[h("返回")]),_:1})])])],64)}const P=d(D,[["render",x]]);export{P as default};