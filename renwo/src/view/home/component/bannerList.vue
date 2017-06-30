<template>
  <div class="banner">
    <div class="banner-top">
      <a href="">
        <img src="http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201702101513190269.jpg" alt="">
      </a>
    </div>
    <div class="banner-bottom">
      <div class="left">
        <a href="">
          <img src="http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201512031634360366.jpg" alt="">
        </a>
      </div>
      <div class="right">
        <a href="">
          <img src="http://www.r114.com.cn/Media/ImagesWebShopAD/AD_201512031634430666.jpg" alt="">
        </a>
      </div>
    </div>
	   
  </div>
</template>

<script>

export default {
  name: 'bannerList',
  data () {
    return {
  
    }
  },
  components: {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  padding: 5px;
  img {
    width: 100%;
  }
  .banner-bottom {
    display: flex;
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
}
</style>
