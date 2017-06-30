<template>
  <div class="slideImg">
	<Swiper :swiper-slide="imgList"></Swiper>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
export default {
  name: 'slideImg',
  data () {
    return {
      imgList: [
      	{
      		url: 'http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201705180942200977.jpg'
      	},
      	{
      		url: 'http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201702102205240954.jpg'
      	},
      	{
      		url: 'http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201609050947120406.jpg'
      	},
      	{
      		url: 'http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201609050953280721.jpg'
      	}
      ]
    }
  },
  components: {
  	Swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
