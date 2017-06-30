<template>
  <div class="search">
	<header class="top">
		<div class="nav-searchs" v-if="isShow">
        	<i class="iconfont icon-sousuo"></i>
			<input id="key" type="text" class="form-control" placeholder="请输入关键字" value="" @focus="fock">
        </div>
		<div class="nav-search" v-if="!isShow">
			<i class="iconfont icon-sousuo"></i>
			<input id="key" type="text" class="form-control" placeholder="请输入关键字" value="" @focus="fock" ref="ser">
        </div>
		<div class="search-ctrl" v-if="!isShow">
            <button class="btn" type="button" ref="btn">搜索</button>
        </div>
	</header>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
  	fock () {
  		this.isShow = false;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top {
	background: #efefef;
	margin: 0;
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	z-index: 101;
	max-width: 640px;
	min-width: 320px;
	.nav-search {
		width: 75%;
		position: relative;
		margin: 8px 6px;
		.iconfont {
			position: absolute;
			left: 10px;
			top: 8px;
		}
		.form-control {
			background: #fff;
		    color: #333;
		    padding-left: 30px;
			width: 100%;
			height: 34px;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
		}
	}
	.nav-searchs {
		width: 100%;
		position: relative;
		margin: 8px 10px;
		.iconfont {
			position: absolute;
			left: 10px;
			top: 8px;
		}
		.form-control {
			background: #fff;
		    color: #333;
		    padding-left: 30px;
			width: 100%;
			height: 34px;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
		}
	}
	.search-ctrl {
		width: 25%;
		.btn {
			margin-left: 10px;
			margin-top: 7px;
			background: blue;
			width: 50px;
			height: 35px;
			color: #fff;
			border-radius: 5px;
		}
	}
	
}
</style>
