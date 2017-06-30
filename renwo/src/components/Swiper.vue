<template>
   <div class='swiper-container'>
      <div class='swiper-wrapper'>
         <div class='swiper-slide' v-for='item in swiperSlide'>
            <img :src="item.url" alt="">
         </div>
        
      </div>
      <div class="swiper-pagination"></div>
   </div>
</template>

<script>

import '@/static/css/swiper.css'
import '@/static/js/swiper.js'

export default {
  name: 'Swiper',
  props: {
    'swiperSlide': {
       'default': []
    },
    'zoom': {
      'default': false
    }
  },
  data () {
    return {
      swiperObj: ''
    }
  },
  mounted () {
    this.swiperObj = new Swiper(this.$el, {
      autoplay: true,
      speed: 2000,
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      zoom: this.zoom
    })
  },
  updated () {
    this.swiperObj.update()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.swiper-slide img {
  width: 100%;
}
/*.swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 3px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  width: 20px;
  height: 3px;
}*/
</style>
