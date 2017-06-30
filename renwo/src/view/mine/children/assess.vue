
<template>
<div class="assess">
	<section class="comment">
        <div class="m fix">
            <div class="mt comment-h">
                <ul class="tabs nav nav-tabs nav-tabs-4">
                    <li class="active"><a href="javascript:void(0)">全部<em>(0)</em></a></li>
                    <li><a href="javascript:void(0)">好评<em>(0)</em></a></li>
                    <li><a href="javascript:void(0)">中评<em>(0)</em></a></li>
                    <li><a href="javascript:void(0)">差评<em>(0)</em></a></li>
                </ul>
            </div>
            <div class="mc comment-c">
                <div class="comment-list"><div class="mc"><div class="review-none">暂无评论</div></div></div>
                <div class="comment-list" style="display:none"></div>
                <div class="comment-list" style="display:none"></div>
                <div class="comment-list" style="display:none"></div>
            </div>
        </div>
    </section>
	
</div>
</template>

<script>

export default {
  name: 'Assess',
  data () {
    return {

    }
  },
  created () {
  	
	
  	
  },
  mounted () {
  	$(".tabs").on("click","li",function(){
  		$(this).addClass("active").siblings().removeClass("active");
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabs {
	display: flex;
	font-size: 12px;
	li {
		flex: 1;
	}
}
.mc {
	text-align: center;
	.comment-list {
		padding-top: 50px;
		font-size: 24px;
	}
	
}
</style>
