<template>
  <div class="home">
	<Search></Search>
	<section>
		<SlideImg></SlideImg>
		<navList></navList>
		<bannerList></bannerList>
		<productList></productList>
	</section>
  </div>
</template>

<script>
import Search from '@/components/search'
import SlideImg from './component/slideImg'
import navList from './component/navList'
import bannerList from './component/bannerList'
import productList from './component/productList'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
  	Search,
  	SlideImg,
  	navList,
  	bannerList,
  	productList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
	position: absolute;
	top: 50px;
	bottom: 45px;
	left: 0;
	right: 0;
	overflow-x: hidden;
	background: #eee;
	overflow-y: scroll;
}
</style>
