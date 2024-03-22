import{m as y,a as x,_ as b,o as h,c as v,b as i,w as d,d as s,e as C,t as w,n as u,f as l,F as f,r as n,g as S}from"./index-6U3yGEg3.js";import{u as g}from"./userCartStore-XJTLA4lS.js";import{_ as V}from"./icon-t1Ce2sCx.js";const F={data(){return{menu:!1}},computed:{...y(g,["cartData"])},methods:{...x(g,["showCart"]),goPage(o){this.menu=!this.menu,o==="首頁"?this.$router.push("/"):o==="商品一覽"?this.$router.push("/productslist"):o==="購物車"?this.$router.push("/cart"):o==="登入後台"&&this.$router.push("/login")}},mounted(){this.showCart()}},A=s("div",{class:"loading-img-bg"},[s("img",{class:"loading-img",src:V,alt:""})],-1),z={class:"navbar navbar-light bg-opacity fixed-top pt-5"},D={class:"container-fluid"},L=s("h1",null,"休日製作所",-1),B={class:"d-flex align-items-center"},E={class:"cart-btn-hover px-3 py-2 rounded-circle position-relative"},W=s("i",{class:"bi bi-cart"},null,-1),I={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"},X=s("span",{class:"visually-hidden"},"cart",-1),q={class:"d-flex"},R={class:"menu-icon-container"},Y=s("span",{class:"d-none d-md-inline ms-5"},"MENU",-1),M={class:"text-white row justify-content-center mt-20"},T={class:"navbar-nav col-6 col-sm-5 col-md-4 d-flex justify-content-center pe-0"},j={class:"user-nav-item"},U={class:"user-nav-item"},H={class:"user-nav-item"},N={class:"user-nav-item"},G=s("div",{class:"d-none d-md-block col-12 col-sm-5 col-md-4 d-flex justify-content-center"},[s("div",{class:"text-center pt-25"},[s("img",{class:"menu-image",src:"https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711102829585.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SGhaMWNFzIjpAwN%2FRpBWpXFBahhcWXGxRfMIS%2FHh6mAospKr7msjkF5Ot7PzVHqeoQPeXTrkDk8PC5ee7H9pA3pli2m%2FqJlpxotjLsdb1CebOIdMaJC7nRSs1gUTPUByUo%2FlsqwEF0XotaUsJevYg7nHGAYuRPYMCrcqdXx3Fb4ARtP27KhNwxITvnDvb4%2FgRtDbT60M5XO4LfwzdSu7k5g6FZd4QD7sjO%2FnM4yxDK5LT%2FVExBEKSSv0QhC%2BAAiq%2FrhfKHNJO2wP6shXmuZnfhuul5z%2BF00Kp2cLRbzav6bmuGFsujWSXFSeHhytAACf5HJrsvz%2BipXPQg0TP5ZvIA%3D%3D",alt:"image"})])],-1),P=s("div",{class:"background"},[s("img",{class:"logo-bottom logo-bottom-lg",src:"https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711102966785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dG7BS7DqGff6CSyJAAm4%2FByEOqGJL1Hz4b6zyLuwDMnIYZSc9Sy3sRcDIUSgxV2V25b7Cbxi2SkBicoaKgfy2EaYpWZB%2FZCXkDdHqqaQeKeOeDAWiafHkzY5rur02WIp%2FUopXOpxWEgR7h3T0VUV3Lgn1F7LCdwd8Tj%2BMpXXgndVAwMzMAsmkvkIiWPxSFTCakqjYxvDNnxXB65qSOcbkG6uW78WIkzay%2BXCwhCsl16YUuEjl6wdZYbEdVW2%2FANmptU9fVCxeVRHVjCvA5reiYVSefE3NMyR0Lph40z7tsJhjIohEwLfCkWi9qZrzY2qbR0cLJ4uRKgImXQgnHbCSw%3D%3D",alt:"logo-bottom"}),s("img",{class:"logo-bottom logo-bottom-md",src:"https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711102966785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dG7BS7DqGff6CSyJAAm4%2FByEOqGJL1Hz4b6zyLuwDMnIYZSc9Sy3sRcDIUSgxV2V25b7Cbxi2SkBicoaKgfy2EaYpWZB%2FZCXkDdHqqaQeKeOeDAWiafHkzY5rur02WIp%2FUopXOpxWEgR7h3T0VUV3Lgn1F7LCdwd8Tj%2BMpXXgndVAwMzMAsmkvkIiWPxSFTCakqjYxvDNnxXB65qSOcbkG6uW78WIkzay%2BXCwhCsl16YUuEjl6wdZYbEdVW2%2FANmptU9fVCxeVRHVjCvA5reiYVSefE3NMyR0Lph40z7tsJhjIohEwLfCkWi9qZrzY2qbR0cLJ4uRKgImXQgnHbCSw%3D%3D",alt:"logo-bottom"}),s("img",{class:"logo-bottom logo-bottom-sm",src:"https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711102966785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dG7BS7DqGff6CSyJAAm4%2FByEOqGJL1Hz4b6zyLuwDMnIYZSc9Sy3sRcDIUSgxV2V25b7Cbxi2SkBicoaKgfy2EaYpWZB%2FZCXkDdHqqaQeKeOeDAWiafHkzY5rur02WIp%2FUopXOpxWEgR7h3T0VUV3Lgn1F7LCdwd8Tj%2BMpXXgndVAwMzMAsmkvkIiWPxSFTCakqjYxvDNnxXB65qSOcbkG6uW78WIkzay%2BXCwhCsl16YUuEjl6wdZYbEdVW2%2FANmptU9fVCxeVRHVjCvA5reiYVSefE3NMyR0Lph40z7tsJhjIohEwLfCkWi9qZrzY2qbR0cLJ4uRKgImXQgnHbCSw%3D%3D",alt:"logo-bottom"})],-1);function Z(o,e,k,_,a,t){const r=n("VueLoading"),p=n("RouterLink"),m=n("router-link");return h(),v(f,null,[i(r,{active:o.isLoading},{default:d(()=>[A]),_:1},8,["active"]),s("header",null,[s("nav",z,[s("div",D,[i(p,{class:"navbar-brand",to:"/"},{default:d(()=>[L]),_:1}),s("div",B,[i(m,{class:"me-2 me-md-5",type:"button",to:"/cart"},{default:d(()=>[s("span",E,[W,s("span",I,[C(w(o.cartData.length)+" ",1),X])])]),_:1}),s("button",{onClick:e[0]||(e[0]=c=>a.menu=!a.menu),class:"menu-btn cart-btn-hover btn btn-secondary py-2 px-4 rounded-pill",type:"button"},[s("div",q,[s("div",R,[s("span",{class:u(["menu-icon",{"menu-icon-close":a.menu}])},null,2),s("span",{class:u(["menu-icon",{"menu-icon-close":a.menu}])},null,2)]),Y])])]),s("div",{class:u(["w-100 bg-secondary menu-hide",{"menu-show":a.menu}])},[s("div",M,[s("ul",T,[s("li",j,[s("a",{href:"#",class:"link","aria-current":"page",onClick:e[1]||(e[1]=l(c=>t.goPage("首頁"),["prevent"]))},"首頁")]),s("li",U,[s("a",{href:"#",class:"link",onClick:e[2]||(e[2]=l(c=>t.goPage("商品一覽"),["prevent"]))},"商品一覽")]),s("li",H,[s("a",{href:"#",class:"link",onClick:e[3]||(e[3]=l(c=>t.goPage("購物車"),["prevent"]))},"購物車")]),s("li",N,[s("a",{href:"#",class:"link",onClick:e[4]||(e[4]=l(c=>t.goPage("登入後台"),["prevent"]))},"登入後台")])]),G])],2)]),P])])],64)}const J=b(F,[["render",Z]]),O={components:{UserNavbarLayout:J},methods:{backTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},K=S('<footer class="bg-primary pt-15 pb-5"><div class="container"><div class="mb-5"><a href="https://www.instagram.com/raiko_yasumi/" target="_blank"><i class="bi bi-instagram text-white h3 me-5"></i></a></div><div class="text-white pb-5"><span class="mb-3 fs-5 border-top py-5 d-inline-block border-2">聯絡我們</span><ul class="list-unstyled"><li class="mb-2"><i class="bi bi-telephone-fill me-3"></i><a class="text-white" href="tel:+886-78-885-145">0978-885-145</a></li><li class="mb-2"><i class="bi bi-envelope-fill me-3"></i><a class="text-white" href="mailTo:raikoraiko@gmail.com">raikoraiko@gmail.com</a></li><li class="mb-2"><i class="bi bi-cursor-fill me-3"></i>週一至週五 AM9:00~PM6:00</li></ul></div><div class="text-center border-top py-5"><p class="mb-0 text-white flex-grow-1">本網站不提供商業用途</p></div></div></footer>',1);function Q(o,e,k,_,a,t){const r=n("UserNavbarLayout"),p=n("RouterView");return h(),v(f,null,[i(r),i(p),s("span",{class:"back-to-top",onClick:e[0]||(e[0]=(...m)=>t.backTop&&t.backTop(...m))},"Back To Top"),K],64)}const os=b(O,[["render",Q]]);export{os as default};