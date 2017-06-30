<template>
  <div class="h-detail">
  	<Search></Search>
	<Swiper :swiper-slide="imgUrl"></Swiper>
	<section class="pinfo">
		<div class="title">
            <div class="name">
                {{name}}
            </div>
        	<span class="norm" v-if="norm">({{norm}})</span>
    	</div>
    	<ul class="summary">
            <li class="price">
                <span class="label">商 城 价：</span>
                <div class="field">￥{{price}}/{{unit}}</div>
            </li>
            <li class="proprice" style="display:none">
                <span class="label">促 销 价：</span>
                <div class="field"></div>
            </li>
            <li class="memprice" style="">
                <span class="label">会 员 价：</span>
                <div class="field">￥{{memprice}}/{{unit}}</div>
            </li>
            <li class="review">
                <span class="label">评　　价：</span>
                <div class="field"><span class="star star4"></span><a href="javascript:void(0)" onclick="$('#tab-review').trigger('click');" title="查看评论" style="">(已有<em>3</em>人评价)</a></div>
            </li>
            <li class="brand">
                <span class="label">品　　牌：</span>
                <div class="field"></div>
            </li>
            <li class="com">
                <span class="label">供 应 商：</span>
                <div class="field"></div>
            </li>
            <li class="sales" style="">
                <span class="label">已 售 出：</span>
                <div class="field">{{amtordquantity}}斤</div>
            </li>
            <li class="stock" style="display:none">
                <span class="label">配 送 至：</span>
                <div class="field">
                    <select name="select" id="item_send_s">
                        <option>北京 大兴区</option>
                        <option>北京 昌平区</option>
                    </select>
                    <span id="item_send_u" style="display: none">此地区尚未开通</span>
                </div>
            </li>
        </ul>
	</section>
	<div class="shop-car" v-for="item in item">
		<div class="left">
			<span @click="prev(item.level)">-</span>
			<span ref="count">{{item.level}} <!-- {{count}} --></span>
			<span @click="next(item.level)">+</span>
		</div>
		<div class="right" @click="addShop(item)">
			加入购物车
		</div>
	</div>
  </div>
</template>

<script>
import Search from '@/components/search'
import Swiper from '@/components/Swiper'
export default {
  name: 'hDetail',
  data () {
    return {
      imgUrl: [],
      name: '',
      norm: '',
      price: '',
      memprice: '',
      unit: '',
      amtordquantity: '',
      item: [],
      count: 0
    }
  },
  components: {
  	Search,
 	Swiper
  },
  created () {
  	var id = this.$route.params.id;
    this.item.push(JSON.parse(this.$route.params.item));
  	this.$http.get("/api?at=getpitem&m=1&id="+id).then(res => {
      var data = res.body.content;
      this.imgUrl.push({url:data.shareimg});
      this.name = data.sharetext.slice(data.sharetext.indexOf("：")+1,data.sharetext.indexOf("，"));
      this.norm = data.normtext;
      this.price = data.price;
      this.memprice = data.memprice;
      this.unit = data.unit
      this.amtordquantity = data.amtordquantity;
    },res => {
      console.info('调用失败');
    });
  },
  methods: {
  	prev (i) {
  		i--;
      if(i<1){
        i = 1;
        return;
      }
      this.item[0].level = i;
  	},
  	next (i) {
      i++;
      this.item[0].level = i;
  	},
    addShop (item) {
      var id = item.id;
      var level = item.level;
      // console.log(level)
      // console.log(id)
      this.$store.dispatch('check_db', {
          id
      });

      if (this.$store.state.curIndex != -1) {
        this.$store.dispatch('add_db',{
          level
        });
      }else{
        this.$store.dispatch('create_db', {
          item
        });
      }

      alert("添加成功");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop-car {
	bottom: 0;
    height: 46px;
    position: fixed;
    width: 100%;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    .left {
    	margin-left: 10px;
		span {
			display: inline-block;
			height: 35px;
			line-height: 35px;
			text-align: center;
			width: 30px;
			background: #eee;
			margin-left: -5px;
			&:nth-of-type(2){
				width: 50px;
				background: #ddd;
			}
		}
    }
    .right {
		margin-right: 10px;
		background-color: #B10000;
	    border-radius: 5px;
	    color: #FFFFFF;
	    display: block;
	    height: 36px;
	    width: 120px;
      line-height: 40px;
	    text-align: center;
    }
}
.pinfo {
	margin-bottom: 55px;
	border-top: 1px solid #ccc;
	padding-left: 15px;
	padding-right: 15px;
	.title {
		display: flex;
    	justify-content: space-between;
    	line-height: 35px;
    	.name {
    		font-size: 14px;
		    color: #666666; 
    	}
    	.norm {
    		color: #666;
    	}
    }
    .summary {
    	.label {
    		display: inline-block;
		    font-family: simsun;
		    text-align: right;
		    font-size: 14px;
		    color: #333;
		    font-weight: bold;
    	}
    	.field {
    		display: inline-block;
		    font-size: 12px;
		    color: #666;
		}
	    .star4 {
		    background: url(http://m.renwo.com/Wap/images/stars.png) no-repeat 0px -42px;
		}
		.star {
		    display: inline-block;
		    height: 14px;
		    width: 75px;
		}
		.memprice .field {
		    font-weight: bold;
		    font-size: 16px;
		    color: #F00;
		}
		a {
			color: #428bca;
		}
	}
}
</style>
