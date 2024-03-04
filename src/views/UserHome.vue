<template>
  <!-- 主視覺 -->
  <section class="mt-5 pt-5 pb-30">
    <div class="banner sc1">
      <div class="d-flex align-items-center justify-content-center">
        <h2></h2>
      </div>
      <img class="sofa-bottom" src="https://i.imgur.com/bU1o7r4.png" alt="sofa-bottom">
      <img class="bed-bottom" src="https://i.imgur.com/lPdYMr1.png" alt="bed-bottom">
      <img class="sofa" src="https://i.imgur.com/XvrdvLz.png" alt="sofa">
      <img class="bed" src="https://i.imgur.com/77mgdol.png" alt="bed">
      <img class="primary-light-1" src="https://i.imgur.com/zhR0XMk.png" alt="light-1">
      <img class="primary-light-2" src="https://i.imgur.com/fhnBTI3.png" alt="light-2">
      <img class="yellow-1" src="https://i.imgur.com/wUBawXp.png" alt="yellow-1">
      <img class="yellow-2" src="https://i.imgur.com/Bx5Qdqr.png" alt="yellow-2">
      <img class="yellow-3" src="https://i.imgur.com/7yEoKrX.png" alt="yellow-3">
      <img class="yellow-light-1" src="https://i.imgur.com/nwyVDhc.png" alt="yellow-loght-1">
      <img class="yellow-light-2" src="https://i.imgur.com/7XoqMCZ.png" alt="yellow-loght-2">
      <img class="yellow-light-3" src="https://i.imgur.com/7XoqMCZ.png" alt="yellow-loght-3">
      </div>
      <div class="box"></div>
      <p class="text-center text-secondary p1">從這一刻開始</p>
      <div class="box"></div>
      <p class="text-center text-secondary p2">開啟懶洋洋模式吧</p>
      <div class="box"></div>

  </section>

  <!-- 第二段 選物分類 -->
  <section class="pb-30">
    <div class="container">
      <div class="text-center">
        <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary">選物分類</h3>
        <p class="text-secondary mb-20">週末到了...一覺睡到自然醒<br>來一場chill的週末吧</p>
      </div>

      <swiper

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
        <div class="circle" :class="{'swiper-active' : isActive}">
          <img width="30%" src="https://i.imgur.com/wYb3g5a.png" alt="家居小物" title="家居小物">
          <p class="mb-0 text-white bg-secondary p-1 mt-2 fs-10 rounded-pill">家居小物</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <div class="circle" :class="{'swiper-active' : isActive}">
          <img width="30%" src="https://i.imgur.com/PMepQfy.png" alt="療癒寢具" title="療癒寢具">
          <p class="mb-0 text-white bg-secondary p-1 mt-2 fs-10 rounded-pill">療癒寢具</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <div class="circle" :class="{'swiper-active' : isActive}">
          <img width="30%" src="https://i.imgur.com/QwEiPpw.png" alt="辦公小物" title="辦公小物">
          <p class="mb-0 text-white bg-secondary p-1 mt-2 fs-10 rounded-pill">辦公小物</p>
        </div></swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <div class="circle" :class="{'swiper-active' : isActive}">
          <img width="30%" src="https://i.imgur.com/wYb3g5a.png" alt="家居小物" title="家居小物">
          <p class="mb-0 text-white bg-secondary p-1 mt-2 fs-10 rounded-pill">家居小物</p>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </section>

  <!-- 第三段 熱銷排行  -->
  <section class="pb-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 text-center">
          <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary mb-10">熱銷排行</h3>
          <ul class="row list-unstyled align-items-center justify-content-center mb-0">
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class=" bg-primary rounded-5 d-flex justify-content-end p-3 position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">1</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0 fs-5">午睡抱枕</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/AKlrFWi.png" alt="午睡抱枕" title="午睡抱枕">
              </div>
            </li>
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class=" bg-primary rounded-5 d-flex justify-content-end p-3 position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">2</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0 fs-5">質感筆記本</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/K7eT4mx.png" alt="質感筆記本">
              </div>
            </li>
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class=" bg-primary rounded-5 d-flex justify-content-end p-3 position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">3</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0 fs-5">法蘭絨毯單人毯</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/K7eT4mx.png" alt="法蘭絨毯單人毯">
              </div>
            </li>
            <li class="mb-5 col-6 col-lg-12 rank-item">
              <div class="bg-primary rounded-5 d-flex justify-content-end p-3 position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-yellow-200 text-secondary px-4 py-3">4</span>
                <p class="align-self-center text-white fw-bold flex-grow-1 mb-0 fs-5">大容量玻璃杯</p>
                <img class="align-self-end rank-item-img" src="https://i.imgur.com/K7eT4mx.png" alt="大容量玻璃杯">
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-7 d-flex">
          <div class="bg-primary rounded-5 px-3 py-5 p-lg-8 align-self-center w-100">
            <div class="row">
              <div class="col-lg-8 d-flex flex-row flex-lg-column">
                <div class="d-flex justify-content-center">
                  <img class="rank-big-image img-fluid" src="https://i.imgur.com/39Q99ne.png" alt="午睡抱枕" title="午睡抱枕">
                </div>
                <div class="d-flex rank-sm-image-container mt-3 flex-column flex-lg-row">
                  <img class="rank-sm-image" src="https://i.imgur.com/iDqJrpC.png" alt="">
                <img class="rank-sm-image" src="https://i.imgur.com/oBSZoLw.png" alt="">
                <img class="rank-sm-image" src="https://i.imgur.com/4095OBk.png" alt="">
              </div>
                </div>
                <div class="col-lg-4">
                  <div class="d-flex flex-column text-white justify-content-between h-100 mt-4 mt-lg-0 ms-3 ms-lg-0">
                    <div>
                      <h4 class="h3">午睡抱枕</h4>
                      <p class="mb-4 mb-lg-0">一覺好眠白日夢滿滿</p>
                    </div>
                    <p class="mb-lg-0">枕芯到枕套<br>100%純手工台灣製作<br>面積/ 直徑45cm<br>厚度/ 約13cm<br>枕芯/ 450g</p>
                    <p class="mb-0 h4">NT$550</p>
                    <button type="button" class=" btn btn-secondary px-10 py-4  rounded-pill m-5 m-lg-0">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 第四段 品牌介紹 -->
  <section class="pb-30">
    <div class="container">
      <div class="text-center">
        <h3 class="border-bottom border-yellow-200 border-5 d-inline-block pb-3 text-secondary mb-15">關於休日
        </h3>
        <div class="d-flex justify-content-center">
          <img class="img-fluid" src="https://i.imgur.com/lowirph.png" alt="關於休日" title="關於休日">
        </div>
      </div>
    </div>
  </section>
  <!-- 第五段 圖文 -->
  <section class="pb-30">
    <div class="container">
      <div class="row gy-3">
        <div class="col-6 col-md-3">
          <img class="img-fluid" src="https://i.imgur.com/Iw7o8MU.png" alt="">
        </div>
        <div class="col-6 col-md-3">
          <img class="img-fluid" src="https://i.imgur.com/dw9gJwm.png" alt="">
        </div>
        <div class="col-6 col-md-3">
          <img class="img-fluid" src="https://i.imgur.com/R4Cn0hG.png" alt="">
        </div>
        <div class="col-6 col-md-3">
          <img class="img-fluid" src="https://i.imgur.com/7ATYbGT.png" alt="">
        </div>
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
      }
    },
    mounted(){
      gsap.from('h2', {
      scrollTrigger: {
        trigger: 'h2',
        markers: false,
        start: "top 300",
        end: "top 200",
        scrub: true
        // toggleActions:"restart none none reverse"
      },
      duration: .5,
      scale: 1.5,
      y:250,
      });

      gsap.to('.p1', {
      scrollTrigger: {
        trigger: '.p1',
        markers: false,
        start: "top 450",
        end: "top 150",
        scrub: true
        // toggleActions:"restart none none reverse"
      },
      duration: 2,
      opacity: 0,
      });

      gsap.to('.p2', {
      scrollTrigger: {
        trigger: '.p2',
        markers: false,
        start: "top 450",
        end: "top 150",
        scrub: true
        // toggleActions:"restart none none reverse"
      },
      duration: 1,
      opacity: 0,
      });
    }
  }
</script>

<style lang="scss">
@import '../assets/all.scss';

.sc1 {
  top: 15%;
  position: sticky;
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

.box{
  height: 300px;
}

h2 {
  background-image: url(https://i.imgur.com/uHsC0Ln.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  position: sticky;
  margin-bottom: 0;
  text-align: center;
  @include pad-down {
    width: 100px;
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
      @include background-position-left(45% , 20px ,230px) ;
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
    @include background-position-right(48%,15px,130px)
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
    @include background-position-left(38% , 50px ,270px) ;
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
    @include background-position-right(32%,25px,140px);
  }
  @include mobile-down {
    @include background-position-right(43%,10px,90px);
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
    @include background-position-left(25% , 60px , 150px);
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
    @include background-position-right(25% , 40px , 270px);
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
    @include background-position-left(23%,-40px,260px);
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
    @include background-position-right(12%,80px,60px);
  }
  @include mobile-down {
    @include background-position-right(20%,0,60px);
  }
  @include pad-up {
    @include background-position-right(10%,0px,60px);
  }
  @include desktop-up {
    @include background-position-right(10%,0px,60px);
  }
}

.yellow-3 {
  @extend %background-zindex10 ;
  @include pad-down {
    @include background-position-right(6% ,180px,420px);
  }
  @include mobile-down {
    @include background-position-right(8%,100px,330px);
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
    @include background-position-left(8%,130px,140px);
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
    @include background-position-left(10%,140px,370px);
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
    @include background-position-right(10%,100px,80px);
  }
  @include pad-up {
  @include background-position-right(6%,300px,150px);
  }
  @include desktop-up {
    @include background-position-right(6%,230px,30px);
  }
}

.circle {
  // background-color: $primary;
  background-image: url(https://i.imgur.com/39Q99ne.png);
  background-size: cover;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  opacity: .3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.swiper-active {
  transform: scale(1.5);
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
    max-width: 50px;
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

// @keyframes shape-1 {
//   0% { top:0% ;left: 0;}
//   50% { top:5%;left: 0; }
//   100% { top:0;left: 0;}
// }

// .shape1 {
//     position: relative;
//     position: absolute;
//     /* position: fixed; */
//     animation-name: shape-1;
//     animation-duration: 4s;
//     animation-timing-function: linear;
//     animation-iteration-count: infinite;
//     animation-fill-mode: both;
//     z-index: -20;
//     width: 50%;
//     scale: .8;
//   }


</style>