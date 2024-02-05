<template>
    <section class="container mt-5 pt-5">
        <div class="banner sc1">
          <!-- <h2 class="mt-5 pt-5">我是首頁</h2> -->
          <div class="d-flex ">
            <h1 class="h3">休日製作所</h1>
          </div>
          <div class="bg">
          <img src="../assets/image/Vector 1.svg" class="shape1" alt="">
          <img src="../assets/image/Vector 2.svg" class="shape2" alt="">
          <img src="../assets/image/Vector 3.svg" class="shape3" alt="">
        </div>
      </div>
      <p class="text-center p1">從這一刻開始</p>
      <div class="box"></div>
      <p class="text-center p2">開啟懶洋洋模式吧</p>
      <div class="box"></div>
      <div class="box"></div>
  </section>

      <section>
        <div class="box"></div>
        <p class="text-center">我是第二段</p> 
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </section>
</template>


<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  export default{
    data() {
      return {
        
      }
    },
    mounted(){
      gsap.from('h1', {
      scrollTrigger: {
        trigger: 'h1',
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



<style>

.sc1 {
  top: 15%;
  position: sticky;
}

.banner {
    height: 600px;
    max-width: 100%;
}

.box{
  height: 300px;
}


h1 {
  position: sticky;
  top: 10%;
  left: 44.5%;
}

@keyframes shape-1 {
  0% { top:0% ;left: 0;}
  50% { top:5%;left: 0; }
  100% { top:0;left: 0;}
}

@keyframes shape-2 {
  0% { top:30% ;left: 55%;}
  50% { top:33%;left: 55%; }
  100% { top:30%;left: 55%;}
}

@keyframes shape-3 {
  0% { top:60% ;left: 30%;}
  50% { top:56%;left: 30%; }
  100% { top:60%;left: 30%;}
}


.shape1 {
    position: relative;
    position: absolute;
    /* position: fixed; */
    animation-name: shape-1;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
    z-index: -20;
    width: 50%;
    scale: .8;
  }

.shape2 {
    position: relative;
    position: absolute;
    /* position: fixed; */
    animation-name: shape-2;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
    z-index: -30;
    width: 40%;
    scale: .8;

}

.shape3 {
    position: relative;
    position: absolute;
    /* position: fixed; */
    top: 450px;
    left: 300px;
    animation-name: shape-3;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; 
    animation-fill-mode: both; 
    z-index: -40;
    width: 30%;
    scale: .8;
}

</style>