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
      <img class="sofa-bottom" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103281520.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pef1VX1s3Q7SwX%2FHX7udVxPGWcnf2SbSbJscW55GDOhAEavWnk75S2KwwR%2FPJTG6eUwHW2erbj5pezVmwtqHk83KezxV2rjUSQ9zR7aJOHXY5FitArzzlHpW5y49DxKB5fEBtMvi3MdCmWUZRgCWCnRJNE4l7D3nYkVMAd1B0eovheD8HAmRb3hmUQsr77nC0wm68YR8j7nA3rj4TCCF3%2FGPQpdIWDJu0Rvdm2idL%2BbgPdaLmanmof1WZrS4NOj2XatM41yIUkvgvgWXmlof4hDKIwAbVqlDbhcfGL41TRTt3ZBkcg57q%2Fmv7c5t1vWoTGkyPxNdOfpeQ43rMcaTFA%3D%3D" alt="sofa-bottom">
      <img class="bed-bottom" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103301102.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oBuH4syb%2Fgq6V4eGz6M3L%2BOlrE5pQ0Xd4ADXPq695mI6tH4gFmU87iztWYSw5a5TzkyKLGIDgTDGnw1l5d2f6C52arYvnZOBzT5M3M1KLNCeveVlYxVMuyPlcuEKc2X7%2BJxE81yhAHqsPsURrm7rtze4oktqUOuMqzok%2FHebRtMu2CHALHoIWDn3yAgeCfKis4u1BimYm0069%2FBVN8YXqHzaausugZmxf6bdruZ3CDPWXFiSLrpRCq2h13ZC2LsABgS0Y5OV5suTxK%2FGDDcZEBwFUl0vWrninMvj%2FghHtaPd1DAutUz5Ch1MpOTrvWYxisaYhOnnle489snNd7%2FhUw%3D%3D" alt="bed-bottom">
      <img class="sofa" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103218445.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lVHs2IjaxBPfNW8z76UzprM5eJ7C8gYT69t0pSa%2BSElrDUrucILgNW%2Bv9ataDniIGGw1awmihAtLRwHx3jNglZuE5gs04GLCmjn3uGNO2k24rG%2BbcM3CLog9Vcyc09tkPPaB8IZwOXXPh%2FQh6EjzzMVyQ8z%2Fun0LhLy5XBbCD6QB6cIaCdWxfaAeOexpcdyffmYbYg5vb4LyxABXW%2B7AwWGkYMwiDaIuW68axpMoGf6o7FVtY2dLhhKufjjs%2BkfuG8RTj5ivg2RBGSQ6Yvq9ADfPYXgX4kwG59J4Yf1s63HTrAr41o9HVllj9ERPn06RYSWXfyFtYv%2FXCRlmtMnLig%3D%3D" alt="sofa">
      <img class="bed" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103253052.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HvHWY%2FHvtbU9PoF50i6FR%2Bl%2BS%2FHAvxYAU5nT31ipOet%2FNhBw43fmgujwKIWNmVbQOd%2Fue0GIS1N0mP2LOIeR7x%2FRuzMhpgjt5xUPcRlArI%2Bjmu1dXsd2qjvToY%2F7%2FHnpYCFyHo37lZsSxgiVKaoRnRh%2FyGETSD4lu8zwFQ5P74ecOznTp3AUjpKpB6QQtQl%2FMYEVqtwuRsqKIUUwIt3AfEIe5ELYD97GFdaGk6%2FQgwni%2BQj1X0lcUrm7l4QDrmpj3f9qq0Cwc%2BTZ2g7ieLJXsvrtvQ3rJlcagMVnjfEaUOeULQOeEglv2pYjdfT%2FuuvD74i9O41fc5DPwb31fxQgaQ%3D%3D" alt="bed">
      <img class="primary-light-1 bg-move-2" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103351429.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Q6qaa%2FI%2Boi4Je3QafOVGkakRLoJY5NR8%2Boj6Z1bYInk1%2BYqZLAoTZrAKVOsMC%2Ft%2BdS6NIWayKfZmVgOfI2ZJZMzsxX%2BHv23YPdxb9Z56vOmtoCevnt91EC3gVZekn1bqtTwG0qGfthThgJYs9lGybEis%2FyZt%2BtNS1uzjlRh%2Fwi4ZdMhfIq733bDk5kMR4WW6VD9ZVDcdhc5wDoBdtxsVBOR1uMFdETY4sjJlniVwl7b6M2IDSY%2FJPJ77UgxSZB46XLrENfGdOpX9t8JrStVIYZXcdWS2qS1pUBga%2B16LGluewguBBhAiMXj83Yi0FPPUmm7lFqL23YUNWUr8ZMfUug%3D%3D" alt="light-1">
      <img class="primary-light-2 bg-move-2" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103399229.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=p8rGy9pYpTvMk9pmjjXPoA0ifzGXYCHcCu3oDvNBupn45axzhJ5KCVq5zFshxM4LgCtnBINj9AsNbpXX%2BYT2su0E4jNEwb9ezRnu%2Bna6YqGhkHB6ZoUbKciOu6%2FGgi%2BAuYQNN8Wc9SqUdNcQPeuy5JtYOEaK3c9ZcpvwiPKVHPTWNAGBofujfnkTzaBYimvVoyQrsAkFnxcn47MUlyP9pHjjl3VG7Pv4p%2FzDSaq%2FPjxG1dIDW9nCJIny73R6fm5PqsMl0KzoDpJ3moLXIG%2BAZYYottvc%2FL0Ba86oQs%2FOWEx0wOr%2FR1ZQG1hoxSH3%2F07eNaoGHEaTyLNSB0JoWgXxxg%3D%3D" alt="light-2">
      <img class="yellow-1 bg-move-2" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103430536.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GgMR8Ob0WvLOozkq%2BKFpqhCEuY6RF8Xvz1g1AaEiznk81KQmkwPD8pJwPRSQrGneYYmHQGaVVveaIqBwPxLKICAY24NblLPFwkZ5VehiheWbPXZSw284s3gUlsP5jbNVku%2BJZPaTUFrCoC9FKdCaiEQ6IpXFo8w%2BXI6Vq4cOyNnlbHiVQN3Y8Hc5q%2FdNPidrtZpYYvuBMLdJDYBlDwXvhabbt5i%2FPCoLSL1R8WsHD9UNbggEM1lHAXyv3FAmbuZVz5NAcJDvuQtgfZvAczx7ijwTPyOAGJyE%2BGL95FBfzmagRohDKkdWhM%2FwxhrzySOyTVn79YotyglyCViGeHAYWA%3D%3D" alt="yellow-1">
      <img class="yellow-2 bg-move-2" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103454570.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HVEt99r8AtDfpwRfMDnOqIEsZUkRF5J3VerHmmDcNh9IUl1rdSXSxotePwwQ%2FYSRqwR%2Ft2rdOoqr2GhKokU8ecX6mP6YWq%2FCR2a8a1R7VeGr4YZ93ovDbWnMpWqZ581rw7LUDt%2FLJrc38TIlVBtlx2MoYoet7oSmFGdCkBknWa0C2HwTWmg0C1GoommUWbq%2FfihJo5mEFIsBCxsyVZyg6YTf3USZefcFe49lRJhmaLoySCdu9CnFLj6lJSQ%2BsdoE1ITSlSSEX89LOhWgKP%2F5WSnEdgssP8Mg1drxFWNeLsPHvOpOYy12TmZgzzb3tsj9hTkRFTAXnaWYfFR40OsTSQ%3D%3D" alt="yellow-2">
      <img class="yellow-3 bg-move-1" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103497942.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Q4Q3S%2B%2B%2B7XcClAwTDO6sPZgvViVjt6IeiXOUek%2FtBAA2UZnGIubW3g5ST5AGfLKaZTZnj1x%2F%2FlcSzPdpME3HVYKOVhpo7xVOgl%2FxfzwesFvJ4r8qXyQFYD%2FxZVSB0sZM%2FlB%2FGKnm3UjdkYYNju55Ve9%2FpZayS%2B3gOTtUBNc8c18y6bDCYrK3i%2BZo4%2Ff0kNQme7m40QjPjhZzfeabPADXGLu8OM%2BNiwA4ODeU%2BCXl4%2FPP0vckyN75jE%2FRDjH2yoC8y3AAoqduKgAxysld4I0NVUlRyuJF4smacqCyhvuR7EjOQ3XLiKzMIz2ZfTPzxa8NTo4t48lZXu2XVFOGAbNAnw%3D%3D" alt="yellow-3">
      <img class="yellow-light-1 bg-move-1" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103524790.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Kro9LOgL9VaZOKlMpAeTEE6ktq4%2Fewtr%2FHRILZ0G%2BgUNdzEZj32EuY38gfHWJqXbczCqOK54aIfVfbKSY9wrRIbtXmoPcArevyqr0TPPfhFIaQuSDYM4wgkBGjqeQxhNh4Nhj3GuTEGEng31bDqmpYBbuVMc4QZVfmeoR231F%2Bpjxg%2BhuB3qB4Z%2Fa9c3PEngoyT0iML5MufoW7rJH7IWI3iWWXAxKauP3myMg9JMWeQzRDMcn6cjNu6bFC%2F3lwpCaXs1hfvvsXcBHuKDwwDWIFD%2Bcuo1N7WPbk5H2YUnWJ97A8vIAKaOfJbGtCh7pmxJwmrzwMzOwVN61pmRhMmrEA%3D%3D" alt="yellow-loght-1">
      <img class="yellow-light-2 bg-move-2" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103567679.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HUgjsojjzCIQfTJJakVK858aEzXVZ3ZzGUfqhiHOL6furwo7ixxJyXcvsyCCmp17aMQXho4pR8rcW%2FTg6Qts78SJJRbi0SZNNFun39MNbI2NnjOTOoawTaqRCJLQrVHdwYydvShVQmzu4QfSG2%2FAaAmMAIFX70Ke%2BKgwfPB8zS5bNU2WsRB54hPU1S1fQ8rNoZvB29Tn47iFsnLr5dxAXddX194IIBpXUuw20ra25Jse9L5saMK2%2B%2FDveZImJGFy8YwKj3bFTnHRqhfn%2B9bEgOkcW7SFGC1gl2G%2Bkf6Wu0xkYKCGTGWEEQOdWxzg0bryGNo49Tzbhcw5c1%2F9q8w5IA%3D%3D" alt="yellow-loght-2">
      <img class="yellow-light-3 bg-move-1" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103594072.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VE%2FscClZ3ZNw4SRsHK3JTK28Jn1RxcYUX6yOWiSZ8EByoMz1cubXkq5jxH2%2BVAwP5imN4X%2BX%2FykV2Ul3LS%2FaIRAOIQBY%2Br38HEnh%2FcwOHXJJdpMr0L8cJmoezG0u7qpXN3s2qUrducdPYEp7%2FLY%2FZtILfLX%2FykGv%2FuBgKf6OEQN9poLwb5LsgNcJV%2B2LWQwbGOiI3YYq8Oa0dr5nsQxJAaKH1iccx8D87q1jLKDZvuSIh66TA78QzzIK7O8phwW2UPTWjDPOVeN6JJylQHkqaM8m0SdzSK4U2l2iWIQPIrZ%2B3eoN%2F3eYqAsDLdBktA3F2g%2FG0FnVvKRAhhekIeA8%2Bg%3D%3D" alt="yellow-light-3">
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
            <img width="20%" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103744024.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BUvFGIcD1A8cQ%2FeG19%2BewImcxotP2KXEkrvYDpIQpojYrOFwCOhfIVwlAZz9xE%2BJRayTHeL9jGjE%2BdX9IOxGhXWzpyIufxIOm1mZvAF5Gp1cHsumgC5XJYvzyPKQ8gTFvzhMuqSOcMMpHVvaYgXKfCO1Fjnw9kEsP1DysWvB1dCL11DYVExEfjTmiirHxx3AiNu5KpIk6BDRQX1W5pR8vYVyTEEtB8DFbUHVBiTM5jt6001FqB74FZcvEGPDdQovtl65Xr2GBLTtGcXf8eVhm96xggVHoL5WKC6ZoOjAu9dikeaiTV21cWHvyGxsSgbjVLpmLgKJbxoZLw32W5mjEA%3D%3D" alt="家居小物" title="家居小物">
            <p class="classification-text rounded-pill">家居小物</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=療癒寢具">
          <div class="classification-container classification-2" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103772403.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Zk3hArkvqwr1lpklFOZ1EmJyNyn7eYsJlUJj5hCZH1zGJIw7OfkufCX5Vmutf%2FFDZyCNerlezjeNWMSt%2FVZM9t4gpf5yV1sKiaXNrbdcF04vQFNtLjublZUVgrJQ64MiivIJnNF%2BBLMZkvHE6touHepdONlikee%2FzHvpA7L2psUxJ9zkVi0Qzk11LxPyV%2BX0QXy%2BXJAlRTEiNz4iqYpitEHb2wDTFXYmK5Kg%2BayatDPzoAwWtSypzICbx5WDymmVUsQmRO1WNsqUQQGD93xuAf5mNr9RHAzEvxDoTNIYPrw%2FmAGTYoRbxXV9dHXPz%2F6ZINiB2K3tKEMvBh%2BBT1sQCQ%3D%3D" alt="療癒寢具" title="療癒寢具">
            <p class="classification-text rounded-pill">療癒寢具</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=辦公小物">
          <div class="classification-container classification-3" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103791217.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jfOEW%2Bzuy7ziHbsJ4w4Qnx6STAd9h1vhobqFoULMDrd2NAG9xG8rbDtHFYK6ucnz8TPc%2Fb%2FK7McHbGlveAKGAGFGUKu%2Fqg156baSUhxtIfZv43Ryz4mRkzlBdXmV4uOSdRpr07DCDlrec%2FtpUcOidTqzaMxF%2F2wMWd0H7pv4DkWT5O%2Ft5x%2BHjZ1eX3GqTtkP2PbJk52pCMxYknWFUJrsrAOG8FDMHNBfhes0I75bEWgnOaGM3wjSkshFU1MechLYJVwmnvILTKjdG6YnK%2Bz9ObOgpJ7pgIj2EJNqzLTqgxNppv6N5TcwabitDLV%2BDg0iqbkgMZkbQ1aanAEMzyr6Qg%3D%3D" alt="辦公小物" title="辦公小物">
            <p class="classification-text rounded-pill">辦公小物</p>
          </div>
        </router-link>
      </swiper-slide>
        <swiper-slide class="swiper-slide" v-slot="{ isActive }">
        <router-link to="productslist?category=療癒寢具">
          <div class="classification-container classification-2" :class="{'swiper-active' : isActive}">
            <img width="20%" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103772403.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Zk3hArkvqwr1lpklFOZ1EmJyNyn7eYsJlUJj5hCZH1zGJIw7OfkufCX5Vmutf%2FFDZyCNerlezjeNWMSt%2FVZM9t4gpf5yV1sKiaXNrbdcF04vQFNtLjublZUVgrJQ64MiivIJnNF%2BBLMZkvHE6touHepdONlikee%2FzHvpA7L2psUxJ9zkVi0Qzk11LxPyV%2BX0QXy%2BXJAlRTEiNz4iqYpitEHb2wDTFXYmK5Kg%2BayatDPzoAwWtSypzICbx5WDymmVUsQmRO1WNsqUQQGD93xuAf5mNr9RHAzEvxDoTNIYPrw%2FmAGTYoRbxXV9dHXPz%2F6ZINiB2K3tKEMvBh%2BBT1sQCQ%3D%3D" alt="療癒寢具" title="療癒寢具">
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
          <img class="about-img" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711102829585.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SGhaMWNFzIjpAwN%2FRpBWpXFBahhcWXGxRfMIS%2FHh6mAospKr7msjkF5Ot7PzVHqeoQPeXTrkDk8PC5ee7H9pA3pli2m%2FqJlpxotjLsdb1CebOIdMaJC7nRSs1gUTPUByUo%2FlsqwEF0XotaUsJevYg7nHGAYuRPYMCrcqdXx3Fb4ARtP27KhNwxITvnDvb4%2FgRtDbT60M5XO4LfwzdSu7k5g6FZd4QD7sjO%2FnM4yxDK5LT%2FVExBEKSSv0QhC%2BAAiq%2FrhfKHNJO2wP6shXmuZnfhuul5z%2BF00Kp2cLRbzav6bmuGFsujWSXFSeHhytAACf5HJrsvz%2BipXPQg0TP5ZvIA%3D%3D" alt="關於休日" title="關於休日">
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
                <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104274999.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=j4OhQ4LK0KOS%2BjbTqrcO3gOmPvXU2THqS2%2F%2FKT5XYHElzXFBjMsCSe0uaHyJyVTuqEuodZb6jHoIBpnOq6X1xT0%2F5SIKTEeGTaigvPGkQbPYhlPPocIILO%2FOSZWULT%2F%2FFdy%2FOA5%2Fi1ciHF0D6ZaMWa9ANwzLjON3ciW0I6d%2FeIHNT4iTGDTgv9H7zvXwp8MPgt8l3i2MfHHZ9vmiJ4UHTAL5SOJORtrN%2B6y5ZMPuXkXRa7ceMc8Lr00IdxVz08X5Nmb1a%2FqGdiuxIE9%2BFo8xzHPDnBEdJsaSAtN5eNlzwJafsyd2kKmrJmeja1VmB%2F1U%2BuwmphhtJzXRaGMdcv4SfA%3D%3D" alt="post1">
              </div>
              <div class="card-2">
                <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104355526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Yyw2AvoBew7li2MlRkhji80WR7%2Fo1WAtdVCzWg0vPjUaT5M354U5wHFoMjRADALjc7uxbkFG%2BDZF%2BcIaimKWX3csW91OHN%2BbLsMedqS%2B%2F1FD8W9TaFqwexPvjLsTI4gRO4gMa94y6BgEoD8WSKB5OdnAdwS%2BByLKVLFBjd40nbYCGe0ltWvWrrwQXyf1C5ijZ%2BVOd%2BlDBtaxQniJ107bG05CDYWPpMsGODMBAtGMmmT%2BCr6IB3K%2FNDV33q7m68pyvz18oSDEH2BhAMoyEWeqNDiwE8%2Be%2FIYmGejJTmK16ATaEUUmHPgQwytbCrIb3z%2FfUQwxKIJ3tJoQLECcd4xIHA%3D%3D" alt="post1">
              </div>
            </div>
          </div>
          <div class="card-container col-6 col-md-3">
            <div class="card-outer">
              <div class="card-1">
                <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104401401.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CdjUySP0QE8U0I7hZzuU%2FEJI0K%2FvcktQPMqGe%2BK69PB7OZLSX6zzGfo7bJElgzd3eDc8DF3lLrJQx6uoRaCA3wDITO16fCCdA6c%2FZdhVZPK0kzqTEk4buxW1rOM5DInmKsECPXqU3zgJLdtrilOpKZ8ImtdI1VN9YUcKS0Ndsihw2A98aj5jsNGukby7wJC87%2B0x%2BdwESuQ7rqkYYHGIEBv4OpC4eQUfBnA%2Bo%2B0f0DMlUxcu0g9sF%2B7KME6emvG08ol0nApXUEiH0DzgYR7QqYVrrSimfWnPeyAXdG1t5Nhyb9dhIAY5eYcQAM901ULrSu6vqTEo5vL%2FbTK2WRTvtg%3D%3D" alt="post2">
              </div>
              <div class="card-2"><img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104419974.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E97OyuO54JwZKB6berhQkigAqzSuk9cleo400PWFNJNN1R87rqckVqYJ2TNLt1NE5N8C4UMQieJkej2zY78IETyDeUFvEYuJ761qjvI5taCRxD30CWn98wu6bn3wdtPQis1iooc96cz8y7ZbSgQaWDKLgoyc7DY6JJ%2F2Yo36Ea2YmYcwDs9CVsyodePaFym6ACogO4nlq%2FaAStYoknrjTUG3OpQgdynuqUmmcaD66qbNl3HoWM%2BLb5IyhzUr1G80%2BWJHhFu1qDcTmnhdVf%2BTZ8PjSnk8ttmqyF018sa3ydQ9nvMaA9JetH6smtWUQpysynLwtMJ1p3hBZ%2Fs4aMgtJg%3D%3D" alt="post2"> </div>
            </div>
          </div>
          <div class="card-container col-6 col-md-3">
            <div class="card-outer ">
              <div class="card-1">
                <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104663133.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U0QGlzRmwvpMqdj9K44IFzSR274GNgyLH0R7pJFFxNBqCWSnv%2FCl6r10GG7EUVGH8NeCzWx7jviiInJGQGgh6mHUHTyjd8AHMTISzyE20ShHTqcL%2BKleWG6DUz1vinutvy5Iz2q2tL%2BNaHCymfPLRHQJIKJe%2B%2BP8f5JUy7vTUpG8OhvbgvMA4oxu%2FmqIbB97T9qZS%2Fv83jOGRI8uId2TdFvYQGZfJTVKJVVkrFgBZyw3czRZkQNPmgPxhZwa4%2Bw884X%2BENvp7kHK01sx27gMLPkkcyiYp0Om1LEhispAcJqUq92DsTj5VpZ%2BZ1bK5CLMKZmw3UjarHjovyNNgjh63g%3D%3D" alt="post3">
              </div>
              <div class="card-2"><img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104542101.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YE7zk%2Be%2FENsQrLvLG1UMId2ufxuOgu2CdMpeFMoizrMUE5IIJGM5aOuaJxTu59nJnVAB7QSzzTrcSSG0Y0%2FiI%2Bm%2F0XXBjaPqwd28yKnH1dPVu3MIUmudIc0mTCyrQHtvA8LMwNfci0bCs3bS5txD7M1q9n4HhpQL4DSzo1GWmYLOPvl30YtqGonlmyhg6kiDVzSNihLn4Hyqb3CVal2Nsd3WY9srB5HTZwDpHh%2BM1aOLUhRHsrFWQBue6z8Ft2okxUqU0N3gusuakTWBS%2FCu4Ftj5t%2F4iKrVESBKmaoQgp%2B5Wr%2B5DXyMhtCHBSFLseTAyEx8MgqCWInmuGsTO35kUg%3D%3D" alt="post3">
              </div>
            </div>
          </div>
          <div class="card-container col-6 col-md-3">
            <div class="card-outer ">
              <div class="card-1">
                <img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104599091.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mwEJUqR7Bv7NntSDr7aoP8Pd6skvYm%2FYhWvYUbVKsBgS94GTK1PWv0p09OhGTSkSs3rCcOkOBxdDbZ08D%2Fs3JqZrJsBkd%2Bhd6XyAuFQSWo6eW%2By8g7EQtvdEZZYeILGYBMnUVoFNwGzwAZMnZZXkJxwMN8WYYc0y8PV1wP1fPk1jopgpCip%2BTXNz6hPSKR%2BmyoWjlSurPpZtDS%2FDpiNm8kGMNOm422rYyrKD55a33ETsqz9Zm5Djcm4XrWg6hDaIaLlAOkhamLEoBwA8%2BIjuQVMUIx6EVak6tTyMo3NR3WqTy5mldI3ScbN5yJQ6Fc%2Bl44BXQkCVPsme%2BCqC%2FnHPtA%3D%3D" alt="post4">
              </div>
              <div class="card-2"><img class="img-fluid" src="https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711104609254.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iXN3ico5Y1XX9xp4prPWeXhSjx9ZjH80mHpj8mRP7DNcpoedcKdu3A7a1m5rv4jZpmus0SeFnTOpgdDvTnejCwEj0HIbSW7fDGK6LzOS3JXOU1PzF3VjKoMKLXOekdCJh26PrSyaRGjKRd9QCviWKVzzF5USkw2C3wNPXF8pR7JFD4VAG9e6fwnnwqnvBWDHlEdAciI8JkyKkdz5A3zMPQiD34PDM3ocUzhP%2BfgdQaoHnQJkujlft8%2FPKrDWlupqYBBST8YGFWmIAjNr0onA4a3CDUIrFYvkYw3hXlTLCNIOUhmrxEbvDGkMFzItDZjaQ8ZWKpsLqofGjr%2FUWsqAsw%3D%3D" alt="post4"></div>
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
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103854177.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ljj1mkH1jcQQfhnTfbb4oZGpJkt8K1QyN%2Bubtc2BRAjC%2F6%2Bvx6Bq3yEAmlkOKuv2v%2BCGG9kNeC2ePM54mJWD%2BXCEqU6QsU7NXOzZN0d0ACqS%2F012mD8xf3qrLfhnfqgGcHUc7jr2lrhgd3rD%2FoMu2GuNV56IgPypjUNwYf3sG3aZp6btTNB5WQuzLW5CUjv4qRVakUQxD6xycbWovwBxZsusWzr7fcp50HUopbmz83EpAqVCqL%2FnWrd3%2FY2T0IKusDMGzC0Ii%2Bw8wT6YVXmS5nVZNDA1L2gn4T9wpf10inCUswZZt5HEUHq9XOtErOcjwLpkhYh2BSzBf7xbDRWI0g%3D%3D);
}

.classification-2 {
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103875446.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kgd08YQjrw1rAWwGElVh7zC4h8JJyeC4r1UZ7y19o3JiEvA%2Bxs4whf2YiWZMzwHty%2B28K2edfgOEAGwH%2Bev2q%2Fq%2BRBCixxFNMbVgmduB68hBoaI%2BBGsU%2BX42ype0hbbmH0sxKe0EtQ7V%2FxsMQFQvTwVdodwyo%2Ba4h7TxjxHNMwrLhSu3y54cUrl1siB9Li3WlBGAnsqYSCO8YlOZdIimM5R8hm5TiG8AMnUJZhs3npW%2F1yJe04oX%2FdPbVPMF4OsCEzpaow7k99bsfS9NxfhR8MmYAUMjY97sGaoo%2BEnYp0iDlqyCn0sZoNew7tIS4%2FjIr%2BDl5u2LgohSDhSIHdpKBg%3D%3D);
}

.classification-3 {
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103901798.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cRCu%2B4pMrGr8z7Sx2SDwKeMpHABI%2Bq7wDDISnzbxWfOmnKyAUCISdWjWSnIQgvX37evBiRP1L3L0t3fDDCkFoVASP0F4OPRwkC80IAZhsh7tS4hOgUupnpfAyGovCyeCru4bPt3ZfUxD0%2F2wfbSr%2FdcLgmOrYxTvWLtl7WSfPuchhV5cPIw%2FqFPtuEeuleOSOuYKfdqdVm5AtRFcHXyLE09DpdUy7HE5y8r1NybuOwNpRc8yjuE4B6RPPiwCIJWvNSNYAyKByglaKIBwaF7drD8%2BjpO3ts%2BCmS0G6ICHiZCUZUyMnD9v4%2BeBfP13lroRIlPPA1y6AQrJSBi8LVGp2Q%3D%3D);
}

.classification-4 {
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/peggy123/1711103875446.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kgd08YQjrw1rAWwGElVh7zC4h8JJyeC4r1UZ7y19o3JiEvA%2Bxs4whf2YiWZMzwHty%2B28K2edfgOEAGwH%2Bev2q%2Fq%2BRBCixxFNMbVgmduB68hBoaI%2BBGsU%2BX42ype0hbbmH0sxKe0EtQ7V%2FxsMQFQvTwVdodwyo%2Ba4h7TxjxHNMwrLhSu3y54cUrl1siB9Li3WlBGAnsqYSCO8YlOZdIimM5R8hm5TiG8AMnUJZhs3npW%2F1yJe04oX%2FdPbVPMF4OsCEzpaow7k99bsfS9NxfhR8MmYAUMjY97sGaoo%2BEnYp0iDlqyCn0sZoNew7tIS4%2FjIr%2BDl5u2LgohSDhSIHdpKBg%3D%3D);
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