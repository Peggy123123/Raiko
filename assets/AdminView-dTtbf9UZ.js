import{_ as i,c as l,a,b as e,w as o,F as d,r as n,o as _,d as c}from"./index-6yo97Gfc.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"peggy123",VITE_TEXT:"這是部署的環境",BASE_URL:"/vite-router/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:v,VITE_PATH:h}=f,p={data(){return{api:v,api_path:h}},methods:{checkUser(){this.$http.post(`${this.api}/api/user/check`).then(t=>{}).catch(t=>{console.log(t),alert("登入失敗，請重新登入"),this.$router.push("/login")})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkUser()}},u={class:"navbar navbar-expand-lg navbar-light bg-opacity fixed-top"},b={class:"container"},m=a("a",{class:"navbar-brand",href:"#"},"Logo",-1),g=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[a("span",{class:"navbar-toggler-icon"})],-1),k={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},x=a("div",{class:"offcanvas-header"},[a("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"Offcanvas"),a("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),V={class:"offcanvas-body"},T={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},$={class:"nav-item"},E={class:"nav-item"};function R(t,L,N,y,w,A){const s=n("RouterLink"),r=n("RouterView");return _(),l(d,null,[a("header",null,[a("nav",u,[a("div",b,[m,g,a("div",k,[x,a("div",V,[a("ul",T,[a("li",$,[e(s,{to:"adminproduct",class:"link"},{default:o(()=>[c("商品管理")]),_:1})]),a("li",E,[e(s,{to:"adminorder",class:"link"},{default:o(()=>[c("訂單管理")]),_:1})])])])])])])]),e(r)],64)}const U=i(p,[["render",R]]);export{U as default};
