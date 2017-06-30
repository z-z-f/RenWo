
<template>
<div class="assess">
	<section class="comment">
        <div class="m fix">
            <div class="mt comment-h">
                <ul class="tabs nav nav-tabs nav-tabs-4">
                    <li class="active"><a href="javascript:void(0)">全部购买咨询</a></li>
                    <li><a href="javascript:void(0)">商品咨询</a></li>
                    <li><a href="javascript:void(0)">库存及配送</a></li>
                    <li><a href="javascript:void(0)">支付问题</a></li>
                </ul>
            </div>
            <div class="note">
                <strong>温馨提示</strong>：包装商品可能因厂家更改产品包装、产地或者更换随机附件等没有任何提前通知，生鲜商品因产地、时令、批次各异，且每位咨询者购买情况、提问时间等不同，为此以下回复仅对提问者3天内有效，其他网友仅供参考！若由此给您带来不便请多多谅解，谢谢！
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
  name: 'consult',
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
		padding-top: 30px;
		font-size: 24px;
	}
	
}
.note {
  padding: 10px;
  font-size: 12px;
}
</style>
