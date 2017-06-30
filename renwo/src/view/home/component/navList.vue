<template>
	<nav class="homenav">
	    <ul class="row">
	        <li>
	        	<router-link :to="{name:'nDetail',params:{id:1}}">
	           <!--  <a href="List.aspx?p=1" title="生鲜蔬果"> -->
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_sxsg.png" alt=""></span>
	                <span class="text">生鲜蔬果</span>
	            <!-- </a> -->
	            </router-link>
	        </li>
	        <li>
	            <router-link :to="{name:'nDetail',params:{id:2}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_xxsp.png" alt=""></span>
	                <span class="text">休闲食品</span>
	            </router-link>
	        </li>

	        <li>
	            <router-link :to="{name:'nDetail',params:{id:3}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_jsyl.png" alt=""></span>
	                <span class="text">酒水饮料</span>
	           </router-link>
	        </li>
	        <li>
	           	<router-link :to="{name:'nDetail',params:{id:4}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_lyfs.png" alt=""></span>
	                <span class="text">粮油副食</span>
	            </router-link>
	        </li>
	    </ul>
	    <ul class="row">
	        <li>
	        	<router-link :to="{name:'nDetail',params:{id:9}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_rybh.png" alt=""></span>
	                <span class="text">日用百货</span>
	           </router-link>
	        </li>
	        <li>
	        	<router-link :to="{name:'nDetail',params:{id:14}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_ldsp.png" alt=""></span>
	                <span class="text">冷冻食品</span>
	            </router-link>
	        </li>
	        <li>
	            <router-link :to="{name:'nDetail',params:{id:15}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_dpg.png" alt=""></span>
	                <span class="text">半成品菜</span>
	            </router-link>
	        </li>
	        <li>
	            <router-link :to="{name:'nDetail',params:{id:16}}">
	                <span class="line"><img src="http://m.renwo.com/wap/images/icon_ztc.png" alt=""></span>
	                <span class="text">半小时送</span>
	            </router-link>
	        </li>
	    </ul>
	</nav>
</template>

<script>

export default {
  name: 'navList',
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
.homenav {
	padding-top: 10px;
	padding-bottom: 10px;
	background: #fff;
	.row {
		display: flex;
		li {
			flex: 1;
			text-align: center;
			.line {
				display: block;
				width: 45px;
				margin: 5px auto;
				img {
					width: 100%;
				}
			}
			.text {
				font-size: 14px;
			}
		}
	}
}
</style>
