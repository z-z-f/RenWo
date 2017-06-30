<template>
<div class="box">
	<div class="product">
	   <dl v-for="item in itemList">
    		<router-link :to="{name:'hDetail',params:{id:item.id,item:item}}">
	            <dt>
	                <img :src="item.img" alt="">
	                <div class="item-memprice" style=""><span>￥{{item.memprice}}</span></div>
	            </dt>
	            <dd>
	                <div class="title">
	                    <span class="food">{{item.name}}</span>
	                    <span class="norm">{{item.normtext}}</span>
	                </div>
	                <div class="price">
	                    <span class="sprice">￥{{item.price}}/斤</span>
	                </div>
	            </dd>
    		</router-link>
        <div class="buy">
            <div class="btn-buy">
                <a href="javascript:void(0)" @click="add(item)">加入购物车<b></b></a>
            </div>
        </div>
    </dl>
	</div>
</div>
</template>

<script>

export default {
  name: 'List',
  data () {
    return {
      itemList: []
    }
  },
  components: {
  	
  },
  methods: {
  	getData () {
  		var id = this.$route.params.id;
		this.$http.get("/getPro").then(function(res){
	        this.itemList = res.body.content.itemlist;
	  	})
  	},
  	add (item) {

        var id = item.id;
        var level = item.level;
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
       

        console.log(this.$store.state.cartList);
    }
  },
  created () {
  	this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #eee;
}
.sort {
	display: flex;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	background: #fff;
	.sort-nav {
		flex: 1;
		border-right: 1px solid #ccc;
		&:last-child {
			border-right: none;
		}
	}
}
.product {
	display: flex;
	flex-wrap: wrap;
	padding-left: 3px;
	padding-right: 5px;
	dl {
		width: 48%;
		background: #fff;
		margin-left: 5px;
		margin-bottom: 8px;
		dt {
			border-bottom: 1px solid #eee;
			position: relative;
			img {
				width: 100%;
			}
			.item-memprice {
				background: transparent url(http://m.renwo.com/wap/images/icon_memprice.png) no-repeat scroll 0 0 / 56px 56px;
			    right: 2px;
			    position: absolute;
			    bottom: 2px;
			    width: 56px;
			    height: 56px;
			    display: block;
			    span {
			    	color: #ff0000;
				    font-size: 12pt;
				    font-weight: 600;
				    text-align: center;
				    width: 56px;
				    line-height: 50px;
				    display: block;
			    }
			}
		}
		dd {
			padding-top: 3px;
			.title {
				position: relative;
			}
			.norm {
				position: absolute;
				right: 5px;
				font-size: 14px;
			}
			.food {
				color: #000;
				font-size: 12px;
				padding-left: 5px;
			}
			.price {
				padding: 5px 0 5px 5px;
				font-size: 14px;
			}
			
		}
        .buy {
            background: #d9534f;
            padding-top: 3px;
            padding-bottom: 3px;
            border-radius: 3px;
            text-align: center;
            a {
                color: #fff;
                font-size: 12px;
            }
            
        }
	}
}

</style>
