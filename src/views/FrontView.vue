<template>
  <UserNavbarLayout />
  <RouterView />
  <span class="back-to-top" @click="backTop">Back  To Top</span>
  <footer class="bg-primary pt-15 pb-5">
    <div class="container">
      <div class="mb-5"><a href="https://www.instagram.com/raiko_yasumi/" target="_blank"><i class="bi bi-instagram text-white h3 me-5"></i></a></div>
        <div class="text-white pb-5">
          <span class="mb-3 fs-5 border-top py-5 d-inline-block border-2">聯絡我們</span>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="bi bi-telephone-fill me-3"></i><a class="text-white" href="tel:+886-78-885-145">0978-885-145</a></li>
            <li class="mb-2"><i class="bi bi-envelope-fill me-3"></i><a class="text-white" href="mailTo:raikoraiko@gmail.com">raikoraiko@gmail.com</a></li>
            <li class="mb-2"><i class="bi bi-cursor-fill me-3"></i>週一至週五 AM9:00~PM6:00</li>
          </ul>
        </div>
      <div class="text-center border-top py-5">
        <p class=" mb-0 text-white flex-grow-1">本網站不提供商業用途</p>
      </div>
    </div>
  </footer>
</template>

<script>
import UserNavbarLayout from '@/components/UserNavbarLayout.vue'

export default {
  components:{
    UserNavbarLayout
  },
  methods:{
    backTop(){
      document.body.scrollTop=0 //safari
      document.documentElement.scrollTop=0 //chrome
    }
  }
}
</script>


<style lang="scss">
@import '../assets/all.scss';

  @keyframes back-to-top {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .back-to-top {
    cursor: pointer;
    position: relative;
    position: fixed;
    bottom: 10%;
    right: 3%;
    writing-mode: vertical-lr ; //直式書寫
    border-left: 1px solid $secondary;
    padding-left: 4px;
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: $yellow-200;
      content: '';
      animation-name: back-to-top;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
</style>