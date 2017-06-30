<template>
  <div class="shop">
  	<Search></Search>
  	<section class="shop-card">
  		<div class="shop-list">
  			<div class="selAll">
  			<input type="checkbox" id="all" @click="selectAll" :checked="flag" ref="all">
  			<label for="all">全选</label>
  		</div>
  	</div>
	<div class="cart-order" v-for="(item,index) in pro">
		<div class="tit">
			<span>会员优惠</span>
			<span class="status">【已优惠{{(item.price-item.memprice).toFixed(2)}}元】</span>
		</div>
		<div class="sum">小计：<span class="amtadd">{{(item.level*item.memprice).toFixed(2)}}</span>元<del class="amtsum">{{(item.level*item.price).toFixed(2)}}</del></div>
		<div class="cart-itemlist">
			<div class="input">
				<input type="checkbox" ref="every" @click="eve(index)">
			</div>
			<div class="fields">
				<div class="pimg">
					<label for="chk45603645">
						<img :src="item.img" alt="">
					</label>
				</div>
				<div class="text">
					<div class="name">
						<a href="http://m.renwo.com/Item_18298.aspx">{{item.name}}</a>
                    <span></span>
            	</div>
            	<div class="price">
            		<span>单价：￥{{item.memprice}}/份</span>
            		<s>{{item.price}}</s>
            	</div>
            	<div class="promotion">
            		<button>促销优惠</button>
            	</div>
            	<div class="shipmenttime">
                    配送：<span class="">预订</span>
                </div>
                <div class="money">
                    金额：￥<span class="amtadd">{{(item.level*item.memprice).toFixed(2)}}</span><del class="amtsum">{{(item.level*item.price).toFixed(2)}}</del>
                </div>
				</div>
				
			</div>
			<div class="quantity fix">
            <div class="field">
                <button class="decrement" type="button" @click="dec(index)">-</button>
                <input class="quantity-text" type="text" name="num" v-model="item.level">
                <button class="increment" type="button" @click="inc(index)">+</button>
            </div>
            <div class="remove"><button class="btn" type="button" @click="remove(index)">删除</button></div>
            <span class="status" style="display:none"></span>
        </div>
		</div>
	</div>


  		<div class="cart-total">
        <div>总重量(公斤)：<span id="Cart1_labWeightTotal">{{(cartInfos.total_nums).toFixed(2)}}</span></div>
        <div>总金额(元)：<span id="Cart1_labAmtTotal">{{(cartInfos.total_price).toFixed(2)}}</span></div>
    	</div>
    	<div class="cart-button fix">
	        <span class="checkout-message" style="display:none"></span>
	        <router-link to="/Default.aspx">
	        <span class="button-back"><button class="btn" type="button">继续订购</button></span>
	        </router-link>
	       
	        <!-- <router-link to="/Modify.user"> -->
	        <span class="button-checkout" @click="cer"><button class="btn" type="button">确认结算</button></span>
	        <!-- </router-link> -->
	    </div>
  	</section>
  </div>
</template>

<script>
import Search from '@/components/search'
export default {
  name: 'shop',
  data () {
    return {
      flag: false,
      totalPrice: 0,
      animatenum:0,
      pro: []
    }
  },
  components: {
  	Search
  },
  created () {
  	this.getData();
  	
  },
  computed:{
	    //计算总金额
	 cartInfos() {
	    return this.$store.getters.getInfos;
	 }
  },
  methods: {
  	getData () {
  		this.pro = this.$store.state.cartList;
  	},
  	selectAll (i) {
  		if(this.flag == false) {
  			this.flag = true;
  			for(var i =0;i<this.$refs.every.length;i++){
  				this.$refs.every[i].checked = this.flag;
  			}
  			
  		}else {
  			this.flag = false;
  			for(var i =0;i<this.$refs.every.length;i++){
  				this.$refs.every[i].checked = this.flag;
  			}
  		}
  	},
  	dec (i) {
  		this.$refs.every[i].checked = true;
		this.val = this.pro[i].level--;
		if(this.pro[i].level<1){
			this.pro[i].level = 1;
			return false;
		}
		this.$store.dispatch('update_local');
  	},
  	inc (i) {
  		this.$refs.every[i].checked = true;
  		this.val = this.pro[i].level++;
  		this.$store.dispatch('update_local');
  	},
  	eve (i) {
  		if(!this.$refs.every[i].checked){
  			this.flag = false;
  		}
  	},
  	remove (i) {
  		if(confirm("确定删除吗")){
  			this.$store.dispatch('delete_db',{
  				i
  			}); 
  		}
  	},
  	cer () {
  		if(this.pro.length>0){
  			location.href = "http://localhost:8080/#/Modify.user"
  		}else{
  			alert("购物车不能为空")
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop {
	.shop-list {
		margin-top: 10px;
		background: #fff;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.shop-card {
		background: #eee;
		z-index: 10000;

		
		position: absolute;
		left: 0;
		top: 45px;
		right: 0;
		bottom: 0;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom: 40px;
		overflow-y: auto;
	}
	.cart-itemlist {
		position: relative;
		.input input {
			position: absolute;
			top: 35px;
		}
		.fields {
			padding-left: 20px;
			display: flex;
			.pimg img {
				width: 100px;
				height: 100px;
			}
			.text{
				flex: 1;
				padding-left: 10px;
				.name a {
					color: #428bca;
				}
				.promotion button {
					color: #ffffff;
				    background-color: #428bca;
				    border-color: #357ebd;
				    display: block;
				    border: 1px solid transparent;
				    width: 60px;
				    height: 25px;
				    border-radius: 5px;
				}
			}
		}
		.quantity {
			margin-top: 3px;
			display: flex;
			justify-content: space-between;
			.field {
				margin-left: 10px;
			    border: 1px solid #E3E3E3;
			    display: inline-block;
			    height: 36px;
			    letter-spacing: 0;
			    line-height: 36px;
			    overflow: hidden;
			    vertical-align: middle;
			    float: left;
			    .decrement {
			    	float: left;
			    	text-align: center;
				    border: 0 none;
				    display: inline-block;
				    font-size: 24px;
				    font-style: normal;
				    font-weight: bold;
				    height: 100%;
				    width: 32px;
				    color: #000;
				}
				.quantity-text {
					float: left;
					text-align: center;
				    border: 0 none;
				    border-radius: 0;
				    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) inset;
				    font-weight: bold;
				    height: 100%;
				    width: 60px;
				}
				.increment {
					float: left;
					text-align: center;
				    border: 0 none;
				    display: inline-block;
				    font-size: 24px;
				    font-style: normal;
				    font-weight: bold;
				    height: 100%;
				    width: 32px;
				    color: #000;
				}
			}
			.remove {
				.btn {
					background-color: #0000B1;
				    border: 0 none;
				    border-radius: 5px;
				    color: #FFFFFF;
				    display: block;
				    height: 32px;
				    width: 80px;
				    margin: 4px;
				}
			    padding-right:10px;
			}
		}
	}
	.cart-order {
		margin-top: 10px;
		background: #fff;
		.tit {
			font-size: 12px;
		    height: 30px;
		    line-height: 30px;
		    text-align: center;
		    background-color: #dbeefd;
		    border-bottom: 1px #CCC solid;
			.status {
				color: red;
			}
		}
		.sum {
		    font-size: 16px;
		    font-weight: bold;
		    padding-right: 10px;
		    text-align: right;
		    width: 280px;
		    amtadd {
			    color: #333;
			}
			.amtsum {
			    color: #666;
			    font-size: 10pt;
			    line-height: 30px;
			    padding-left: 5px;
			}		
		}
	}
	.cart-total {
		margin: 10px 0;
		background: #fff;
    	font-size: 14pt;
    	div {
    		line-height: 24px;
    		padding: 5px 10px;
    		span {
    			float: right;
    			width: 120px;
    			text-align: right;
    		}
    	}
	}
	.cart-button {
	    bottom: 0;
	    height: 48px;
	    position: fixed;
	    width: 100%;
	    padding: 5px;
	    background-color: rgba(0, 0, 0, 0.5);
	    display: flex;
	    justify-content: space-between;
	    padding-left: 10px;
	    padding-right: 10px;
	}
	.button-checkout {
		.btn {
		    border: 0 none;
		    border-radius: 5px;
		    color: #FFFFFF;
		    height: 36px;
		    width: 120px;
		    font-size: 12px;
		    background-color: #00B100;
		    margin-right: 20px;
		}
	}
	.button-back {
		.btn {
		    border: 0 none;
		    border-radius: 5px;
		    color: #FFFFFF;
		    height: 36px;
		    width: 120px;
		    font-size: 12px;
		    background-color: #B10000; 
		}
	}
	
}
</style>
