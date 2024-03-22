<template>
  <VueLoading :active="isLoading">
    <div class="loading-img-bg">
      <img class="loading-img" src="@/assets/image/icon.png" alt="">
    </div>
  </VueLoading>
  <!-- 主視覺 -->
  <section class="mt-5 pt-5 pb-30">
    <div class="banner sc1">
      <div class="d-flex align-items-center justify-content-center">
        <h2 class="title"></h2>
      </div>
      <img class="sofa-bottom" src="https://i.imgur.com/bU1o7r4.png" alt="sofa-bottom">
      <img class="bed-bottom" src="https://i.imgur.com/lPdYMr1.png" alt="bed-bottom">
      <img class="sofa" src="https://i.imgur.com/XvrdvLz.png" alt="sofa">
      <img class="bed" src="https://i.imgur.com/77mgdol.png" alt="bed">
      <img class="primary-light-1 bg-move-2" src="https://i.imgur.com/zhR0XMk.png" alt="light-1">
      <img class="primary-light-2 bg-move-2" src="https://i.imgur.com/fhnBTI3.png" alt="light-2">
      <img class="yellow-1 bg-move-2" src="https://i.imgur.com/wUBawXp.png" alt="yellow-1">
      <img class="yellow-2 bg-move-2" src="https://i.imgur.com/Bx5Qdqr.png" alt="yellow-2">
      <img class="yellow-3 bg-move-1" src="https://i.imgur.com/7yEoKrX.png" alt="yellow-3">
      <img class="yellow-light-1 bg-move-1" src="https://i.imgur.com/nwyVDhc.png" alt="yellow-loght-1">
      <img class="yellow-light-2 bg-move-2" src="https://i.imgur.com/7XoqMCZ.png" alt="yellow-loght-2">
      <img class="yellow-light-3 bg-move-1" src="https://i.imgur.com/7XoqMCZ.png" alt="yellow-loght-3">
    </div>
    <div class="text-center sticky-30 pb-35 pb-md-100">
      <p class="text-secondary p1 ">從這一刻開始</p>
    </div>
       <div class="text-center sticky-35 pb-25 pb-md-90">
        <p class="text-center text-secondary p2">開啟週末慵懶模式吧！</p>
      </div>
      <div class="text-center sticky-50 pb-60 d-none d-md-block">
        <router-link type="button" class="btn btn-primary text-white px-10 py-5 rounded-pill fw-bold bn-btn" to="productslist">開始選物<i class="bi bi-arrow-right ms-3 shop-arrow"></i></router-link>
      </div>

  </section>

  <!-- 第二段 選物分類 -->
  <section class="pb-20 pb-lg-30">
    <div class="container">
      <div class="text-center" data-aos="fade-up">
        <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary">選物分類</h3>
        <p class="text-secondary mb-md-10">週末到了...一覺睡到自然醒<br>來一場chill的週末</p>
      </div>

      <swiper
      data-aos="fade-up"
      :loop="true"
      :navigation="true"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :centeredSlides="true"
      :grabCursor="true"
      :breakpoints="{ '992': { slidesPerView: 3, spaceBetween: 50, },'1': { slidesPerView: 1, spaceBetween: 50, } }"
    >
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=家居小物">
          <div class="classification-container classification-1" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://i.imgur.com/wYb3g5a.png" alt="家居小物" title="家居小物">
            <p class="classification-text rounded-pill">家居小物</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=療癒寢具">
          <div class="classification-container classification-2" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://i.imgur.com/I7ZGx0r.png" alt="療癒寢具" title="療癒寢具">
            <p class="classification-text rounded-pill">療癒寢具</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=辦公小物">
          <div class="classification-container classification-3" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://i.imgur.com/qHjTB06.png" alt="辦公小物" title="辦公小物">
            <p class="classification-text rounded-pill">辦公小物</p>
          </div>
        </router-link>
      </swiper-slide>
        <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=療癒寢具">
          <div class="classification-container classification-2" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://i.imgur.com/I7ZGx0r.png" alt="療癒寢具" title="療癒寢具">
            <p class="classification-text rounded-pill">療癒寢具</p>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
    </div>
  </section>

  <!-- 第三段 熱銷排行  -->
  <section class="pb-20 pb-lg-30" id="rankSection">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 text-center" data-aos="fade-up">
          <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary">熱銷排行</h3>
          <p class="mb-15 mb-md-10">懶得動腦時...<br>就選這個吧！</p>
          <ul class="row list-unstyled align-items-center justify-content-center mb-0">
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class="bg-primary rounded-5 d-flex justify-content-end p-3 position-relative" :class="{'opacity-25' : tempProduct.title !== '午睡抱枕'}" @click="rankItem('午睡抱枕')" style="cursor: pointer;">
                <span class="position-absolute rank-icon translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">1</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0">午睡抱枕</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/AKlrFWi.png" alt="午睡抱枕" title="午睡抱枕">
              </div>
            </li>
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class=" bg-primary rounded-5 d-flex justify-content-end p-3 position-relative" :class="{'opacity-25' : tempProduct.title !== '質感綁帶日記本'}" @click="rankItem('質感綁帶日記本')" style="cursor: pointer;">
                <span class="position-absolute rank-icon translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">2</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0">綁帶日記本</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/LNGE2Bd.png" alt="質感綁帶日記本">
              </div>
            </li>
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class=" bg-primary rounded-5 d-flex justify-content-end p-3 position-relative" :class="{'opacity-25' : tempProduct.title !== '法蘭絨單人毯'}" @click="rankItem('法蘭絨單人毯')" style="cursor: pointer;">
                <span class="position-absolute rank-icon translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">3</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0">法蘭絨毯</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/JeuoxfL.png" alt="法蘭絨毯單人毯">
              </div>
            </li>
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class="bg-primary rounded-5 d-flex justify-content-end p-3 position-relative" :class="{'opacity-25' : tempProduct.title !== '超薄高球杯'}" @click="rankItem('超薄高球杯')" style="cursor: pointer;">
                <span class="position-absolute rank-icon translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">4</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0">玻璃杯</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/a1suTG4.png" alt="大容量玻璃杯">
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-7 d-flex" data-aos="fade-up">
          <div class="bg-primary rounded-5 px-3 py-5 p-lg-8 align-self-center w-100">
            <div class="row">
              <div class="col-lg-8 d-flex flex-row flex-lg-column">
                <div class="d-flex justify-content-center">
                  <img class="rank-big-image img-fluid" :src="bigImage" alt="午睡抱枕" title="午睡抱枕">
                </div>
                <div class="d-flex rank-sm-image-container mt-3 flex-column flex-lg-row">
                  <img class="rank-sm-image" :src="tempProduct.imageUrl" alt="tempProduct.imageUrl" @click="bigImage = tempProduct.imageUrl" style="cursor: pointer;">
                  <template v-for="item in tempProduct.imagesUrl" :key="item" >
                    <img class="rank-sm-image img-hover" :src="item" :alt="item" @click="bigImage = item" style="cursor: pointer;">
                  </template>
              </div>
                </div>
                <div class="col-lg-4">
                  <div class="d-flex flex-column text-white h-100 mt-4 mt-lg-0 ms-3 ms-lg-0 pb-lg-30 justify-content-evenly">
                    <div>
                      <h4 class="h3 fw-bold mb-5">{{ tempProduct.title }}</h4>
                      <small class="mb-4 mb-lg-0 mb-5">{{tempProduct.content}}</small>
                    </div>
                    <p class="mb-0 h4 fw-bold mb-5">NT${{tempProduct.origin_price}}</p>
                    <router-link :to="`productslist/${tempProduct.id}`" class="cart-btn-hover btn btn-secondary px-10 py-4  rounded-pill m-5 m-lg-0">查看商品</router-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 第四段 品牌介紹 -->
  <section class="pb-20 pb-lg-30">
    <div class="container">
      <div class="text-center" data-aos="fade-up">
        <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary">關於休日
        </h3>
        <p class="text-secondary mb-15">Raiko休日製作所，以療癒為概念<br>慰勞週間忙碌的自己<br>選一件可以忘掉上班煩惱的小物<br>開啟週末慵懶模式！</p>
        <div class="d-flex justify-content-center position-relative mx-auto" data-aos="fade-up">
          <img class="about-img" src="https://i.imgur.com/lowirph.png" alt="關於休日" title="關於休日">
        </div>
      </div>
    </div>
  </section>
  <!-- 第五段 圖文 -->
  <section class="pb-20 pb-lg-30">
    <div class="container">
      <div class="text-center">
        <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary mb-15" data-aos="fade-up">休日語錄
        </h3>
        <div class="row gy-5 mb-2" data-aos="fade-up">
          <div class="card-container col-6 col-md-3">
            <div class="card-outer">
              <div class="card-1">
                <img class="img-fluid" src="https://i.imgur.com/Iw7o8MU.png" alt="">
              </div>
              <div class="card-2">
                <img class="img-fluid" src="https://i.imgur.com/W0gk6ob.png" alt="">
              </div>
            </div>
          </div>
          <div class="card-container col-6 col-md-3">
            <div class="card-outer">
              <div class="card-1">
                <img class="img-fluid" src="https://i.imgur.com/dw9gJwm.png" alt="">
              </div>
              <div class="card-2"><img class="img-fluid" src="https://i.imgur.com/jwlKTy0.png" alt=""> </div>
            </div>
          </div>
          <div class="card-container col-6 col-md-3">
            <div class="card-outer ">
              <div class="card-1">
                <img class="img-fluid" src="https://i.imgur.com/R4Cn0hG.png" alt="">
              </div>
              <div class="card-2"><img class="img-fluid" src="https://i.imgur.com/egmbavz.png" alt=""></div>
            </div>
          </div>
          <div class="card-container col-6 col-md-3">
            <div class="card-outer ">
              <div class="card-1">
                <img class="img-fluid" src="https://i.imgur.com/7ATYbGT.png" alt="">
              </div>
              <div class="card-2"><img class="img-fluid" src="https://i.imgur.com/SEAEusl.png" alt=""></div>
            </div>
          </div>
        </div>
        <p class="text-end text-secondary mt-10" data-aos="fade-up">To be continued...</p>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import "swiper/css/navigation"

  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  import AOS from 'aos'
  import 'aos/dist/aos.css'

  const { VITE_URL , VITE_PATH } = import.meta.env

  export default{
    components:{
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
    data() {
      return {
        data:[],
        tempProduct:{},
        bigImage:'https://i.imgur.com/OE6lA20.jpg',
        active:false, //熱銷排行按鈕
        isLoading:true,
        fullPage:false
      }
    },
    methods: {
      getData(){
        const api = `${VITE_URL}/api/${VITE_PATH}/products/all`
        this.isLoading = true

        this.$http.get(api)
        .then(res=>{
            this.data = res.data.products
            this.tempProduct = this.data[0]
            this.filterProducts()
        })
        .catch(err=>{
            alert(err.response.data.message)
        })
        .finally(()=>{
            this.isLoading = false
        })
      },
      filterProducts(){ //篩選出熱銷排行商品(固定)
        let rankItem = ["-NnEpJllzVL7UzQgnLuu","-NooJ_KE6rZS9UevJYU4","-NopKNHWtnjaPd65kiTB","-NpIFvPKAut75_MDj8nC"]

        let filterdproducts =  this.data.filter(item=>{
          return rankItem.includes(item.id)
        })

        this.data = filterdproducts
      },
      rankItem(product){ //點擊出現商品資訊
        let rankItem = this.data.filter(item=>{
          return item.title === product
        })
        this.tempProduct = rankItem[0]
        this.bigImage = this.tempProduct.imageUrl
      },
    },
    mounted(){
      AOS.init({
        delay: 50,
        offset: 150,
        duration: 1000,
        easing: 'ease',
        once: false,
        }
      );

      this.getData()

      gsap.from('h2', {
      scrollTrigger: {
        trigger: 'h2',
        markers: false,
        start: "top 250",
        end: "top 200",
        scrub: 1
        // toggleActions:"restart none none reverse"
      },
      duration: 1,
      scale: 1.5,
      y:250,
      });

      gsap.from('.p1', {
      scrollTrigger: {
        trigger: '.p1',
        markers: false,
        start: "top 400",
        end: "top 400",
        scrub: 2,
        // toggleActions:"restart none none reverse"
      },
      delay:1,
      duration: 1,
      opacity: 0,
      y:100,
      });

      gsap.from('.p2', {
      scrollTrigger: {
        trigger: '.p2',
        markers: false,
        start: "top 500",
        end: "top 400",
        scrub: 1,
      },
      duration: 1,
      opacity: 0,
      y:20,
      });

      gsap.from('.bn-btn', {
      scrollTrigger: {
        trigger: '.bn-btn',
        markers: false,
        start: "top 500",
        end: "top 400",
        scrub: 1,
      },
      duration: 1,
      opacity: 0,
      y:20,
      });

      gsap.to('.bg-move-1', {
      duration: 1.5,
      y:20,
      repeat:-1,
      yoyo:true,
      rotate:-10,
      });

      gsap.to('.bg-move-2', {
      duration: 1.5,
      y:-20,
      repeat:-1,
      yoyo:true,
      rotate:10,
      });

      ScrollTrigger.matchMedia({
      "(max-width: 767px)": () => {
        gsap.to('.sofa', {
          scrollTrigger: {
            trigger: '.sofa',
            markers: false,
            start: "bottom 350",
            end: "+=20",
            scrub: 2,
          },
          duration: 1,
          y:50,
          rotate: 3
          });
        gsap.to('.sofa-bottom', {
          scrollTrigger: {
            trigger: '.sofa',
            markers: false,
            start: "bottom 350",
            end: "+=20",
            scrub: 3,
          },
          duration: 1,
          y:50,
          rotate: 3
          });

        gsap.to('.bed', {
        scrollTrigger: {
          trigger: '.bed',
          markers: false,
          start: "bottom 100",
          end: "+=20",
          scrub: 2,
        },
        duration: 1,
        y:-80,
        rotate: 0
        });
        gsap.to('.bed-bottom', {
        scrollTrigger: {
          trigger: '.bed',
          markers: false,
          start: "bottom 100",
          end: "+=20",
          scrub: 3,
        },
        duration: 1,
        y:-80,
        rotate: 0
        });
      },
      "(min-width:768px)":()=>{
        gsap.to('.sofa', {
      scrollTrigger: {
        trigger: '.sofa',
        markers: false,
        start: "bottom -600",
        end: "+=100",
        scrub: 2,
      },
      duration: 3,
      x:150,
      y:200,
      rotate: 30
      });

      gsap.to('.sofa-bottom', {
      scrollTrigger: {
        trigger: '.sofa',
        markers: false,
        start: "bottom -600",
        end: "+=100",
        scrub: 3,
      },
      duration: 3,
      x:150,
      y:200,
      rotate: 30
      });
      gsap.to('.bed', {
      scrollTrigger: {
        trigger: '.bed',
        markers: false,
        start: "bottom -650",
        end: "+=100",
        scrub: 2,
      },
      duration: 3,
      x:-50,
      y:-100,
      rotate: -20
      });

      gsap.to('.bed-bottom', {
      scrollTrigger: {
        trigger: '.bed',
        markers: false,
        start: "bottom -650",
        end: "+=100",
        scrub: 3,
      },
      duration: 3,
      x:-50,
      y:-100,
      rotate: -20,
      });
      }
    });
    }
  }
</script>



<style lang="scss">
@import '../assets/all.scss';

@keyframes shop-arrow {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX( 50%);
  }
  100% {
    transform: translateX(100%);
  }
}

.shop-arrow::before {
  animation-name:shop-arrow ;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  }

//主視覺 文字動畫
.sc1 {
  top: 15%;
  position: sticky;
  // margin-bottom: 80px;
}
.sticky-30 {
  position:sticky;
  top:50%;
  @include pad-up {
    top:30%;
  }
}
.sticky-35 {
  position:sticky;
  top:55%;
  @include pad-up {
    top:35%;
  }
}
.sticky-50 {
  position:sticky;
  top:65%;
  @include pad-up {
    top:50%;
  }
}
.p1 , .p2 , .bn-btn {
  opacity: 1;
}


.banner {
  @include pad-down {
    padding-bottom: 320px;
  };
  @include pad-up {
    padding-bottom: 380px;
  }
  @include desktop-up {
    padding-bottom: 460px;
  };
    max-width: 100%;
}

.title {
  background-image: url(https://i.imgur.com/uHsC0Ln.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  position: sticky;
  margin-bottom: 0;
  text-align: center;
  @include pad-down {
    width: 130px;
  };
  @include pad-up {
    width: 150px;
  }
  @include desktop-up {
    width: 200px;
  };
}

//背景圖塊
  .sofa-bottom {
    @extend %background-zindex10 ;
    @include pad-down {
      @include background-position-left(38% , 50px ,220px) ;
    }
    @include mobile-down {
      @include background-position-left(60% , 20px ,250px) ;
    }
    @include pad-up {
      @include background-position-left(32% , 30px ,160px) ;
    }
    @include desktop-up {
      @include background-position-left(30% , 110px ,130px) ;
    }
  }

.bed-bottom {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-right(38%,30px,140px)
  }
  @include mobile-down {
    @include background-position-right(60%,10px,60px)
  }
  @include pad-up {
    @include background-position-right(32%,30px,110px)
  }
  @include desktop-up {
    @include background-position-right(30%,80px,130px)
  }
}

.sofa {
  @extend %background-zindex5 ;
  @include pad-down {
    @include background-position-left(30% , 80px ,260px) ;
  }
  @include mobile-down {
    @include background-position-left(50% , 50px ,300px) ;
  }
  @include pad-up {
    @include background-position-left(22% , 100px ,220px) ;
  }
  @include desktop-up {
    @include background-position-left(23% , 170px , 200px);
  }
}

.bed{
  @extend %background-zindex5 ;
  @include pad-down {
    @include background-position-right(32%,35px,140px);
  }
  @include mobile-down {
    @include background-position-right(50%,20px,40px);
  }
  @include pad-up {
    @include background-position-right(25%,80px,100px);
  }
  @include desktop-up {
    @include background-position-right(25%,120px,120px);
  }
}

.primary-light-1 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-left(25% , 120px , 80px);
  }
  @include mobile-down {
    @include background-position-left(25% , 20px , 160px);
  }
  @include pad-up {
    @include background-position-left(20% , 200px , 70px);
  }
  @include desktop-up {
    @include background-position-left(15% , 400px , 70px);
  }
}

.primary-light-2 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-right(20% , 100px , 330px);
  }
  @include mobile-down {
    @include background-position-right(25% , 20px , 270px);
  }
  @include pad-up {
    @include background-position-right(15% , 100px,300px);
  }
  @include desktop-up {
    @include background-position-right(12%,450px,350px);
  }
}

.yellow-1 {
  @include pad-down {
    @include background-position-left(18%,-40px,260px);
  }
  @include mobile-down {
    @include background-position-left(23%,-40px,300px);
  }
  @include pad-up {
    @include background-position-left(18%,-110px,200px);
  }
  @include desktop-up {
    @include background-position-left(20%,-110px,150px);
  }
  @extend %background-zindex10 ;
}

.yellow-2 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-right(12%,100px,60px);
  }
  @include mobile-down {
    @include background-position-right(20%,20,380px);
  }
  @include pad-up {
    @include background-position-right(10%,20px,60px);
  }
  @include desktop-up {
    @include background-position-right(10%,20px,60px);
  }
}

.yellow-3 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-right(6% ,180px,420px);
  }
  @include mobile-down {
    @include background-position-right(8%,80px,330px);
  }
  @include pad-up {
    @include background-position-right(6% ,50px,400px);
  }
  @include desktop-up {
    @include background-position-right( 8% ,300px,430px);
  }
}

.yellow-light-1 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-left(8%,230px,60px);
  }
  @include mobile-down {
    @include background-position-left(8%,90px,160px);
  }
  @include pad-up {
    @include background-position-left(5%,350px,50px);
  }
  @include desktop-up {
    @include background-position-left(5%,530px,20px);
  }
}

.yellow-light-2 {
  @include pad-down {
    @include background-position-left(15%,160px,450px);
  }
  @include mobile-down {
    @include background-position-left(30%,-20px,30px);
  }
  @include pad-up {
    @include background-position-left(10%,200px,450px);
  }
  @include desktop-up {
    @include background-position-left(6%,300px,500px);
  }
  @extend %background-zindex10 ;
}

.yellow-light-3 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-right(6%,230px,170px);
  }
  @include mobile-down {
    @include background-position-right(15%,10px,-20px);
  }
  @include pad-up {
  @include background-position-right(6%,300px,150px);
  }
  @include desktop-up {
    @include background-position-right(6%,230px,30px);
  }
}

@keyframes move {
  0% {
    top: 0;
  }
  50% {
    top:2%
  }
  100% {
    top: 0;
  }
}

.move {
  animation-name: move;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.classification-container {
  background-size: cover;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  opacity: .3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-bottom: 5%;
}

.classification-1 {
  background-image: url(https://i.imgur.com/5SwETcr.png);
}

.classification-2 {
  background-image: url(https://i.imgur.com/lsvEV6F.png);
}

.classification-3 {
  background-image: url(https://i.imgur.com/aczBxfn.pngn);
}

.classification-4 {
  background-image: url(https://i.imgur.com/39Q99ne.png);
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  @include desktop-up {
    height: 400px;
  }
  @include pad-down {
    height: 250px;
  }
}

.swiper-active {
  @include desktop-up {
    transform: scale(1.5);
  }
  opacity: 1;
  transition: all .5s;
}

.swiper-button-next , .swiper-button-prev {
  color:$secondary;
}

.rank-big-image {
  @include mobile-down {
    border-radius: 40px;
  }
  @include pad-down {
    border-radius: 60px;
  }
  @include pad-up {
    border-radius: 80px;
  }
  border: 5px solid white;

  object-fit: cover;
  @include pad-up {
    max-width: 70%;
  }
  @include desktop-up {
    max-width: 100%;
  }
}

.rank-sm-image-container {
  @include pad-down {
    justify-content: start;
  }
  @include pad-up {
    justify-content: start;
  }
  @include desktop-up {
    justify-content: center;
  }
}

.rank-sm-image {
  @include pad-down {
    margin-left: 16px;
    margin-bottom: 8px;
  }
  @include mobile-down {
    margin-left: 8px;
    margin-bottom: 8px;
  }
  @include pad-up {
    margin-left: 16px;
    margin-bottom: 8px;
  }
  @include desktop-up {
    margin-left: 0;
    margin-right: 10px;
  }
  max-width: 80px;
  border-radius: 16px;
}

.rank-item {
  @include desktop-up {
    width: 75%;
  }
}

.rank-item-img {
    @include pad-up {
    width: 80px;
    }
    @include pad-down {
      width: 50px;
    }
  }

.about-img {
  max-width: 60%;
  height: auto;

  @include desktop-up {
    max-width: 40%;
  }
}

.classification-text {
  margin-bottom: 0;
  margin-top: 8px;
  color: white;
  background: $secondary;
  padding: 8px;
  font-size: 14px;
  @include desktop-up {
    font-size: 10px;
  }
}

.card-container {
    @include pad-down {
    margin-bottom: 240px;
  }
  @include mobile-down {
    margin-bottom: 170px;
  }
  @include pad-up {
    margin-bottom:120px ;
  }
  @include desktop-up {
    margin-bottom: 280px;
  }
  &:hover .card-outer {
    transform: perspective(500px) rotateY(180deg);
  }
}

.card-outer{
  position: relative;
  transition: all 1s ease-in-out;
  transform-style:preserve-3d ;

  @mixin cardstyle{
position: absolute;
left: 0;
top: 0;
backface-visibility:hidden;
}

  .card-1{
    @include cardstyle;
    z-index: 1;  /*   //正面index要設高一點 */
}
  .card-2{
  @include cardstyle;
  transform: rotateY(180deg);
  }
}
//熱銷排行icon位置
 .rank-icon {
  top: 0;
  left: 95%;
 }

</style>