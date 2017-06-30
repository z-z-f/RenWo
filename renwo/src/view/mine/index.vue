<template>
  <div class="mine">
	<div class="content">
        <section class="userinfo fix">
            <div class="pho">
                <div class="pho-img">
                    <img src="http://m.renwo.com/wap/images/huiyuan.jpg">
                </div>
            </div>
            <div class="info">
                <div class="field">{{tel}}</div>
                <div class="field">
                    会员积分：0</div>
                <div class="field">
                    账户余额：¥0.00</div>
            </div>
        </section>
        <section class="magnav fix">
            <div class="field">
                <router-link to="/Order.aspx">
                    <span><img src="http://m.renwo.com/wap/images/dingdan.png"></span><span>我的订单</span>
                </router-link>
            </div>
            <div class="field">
                <a href="#">
                    <span><img src="http://m.renwo.com/wap/images/shoucang.png"></span><span>我的收藏</span>
                </a>
            </div>
            <div class="field">
               <router-link to="/Address.aspx">
                    <span><img src="http://m.renwo.com/wap/images/dizhi.png"></span><span>地址管理</span>
               </router-link>
            </div>
        </section>
        <section class="menu">
            <div class="field">
            	<router-link to="/Default.aspx">返回首页</router-link>
            </div>
            <div class="field">
                <router-link to="/Cart.aspx">购物车</router-link>
            </div>
            <div class="field">
                <router-link to="/Manage.aspx">贴心卡管理</router-link>
            </div>
            <div class="field">
                <router-link to="/Online.aspx">在线充值</router-link>
            </div>
            <div class="field">
                <router-link to="/Consult.aspx">我的购物咨询</router-link>
            </div>
            <div class="field">
                <router-link to="/Assess.aspx">我的商品评价</router-link>
            </div>
            <div class="field">
                <router-link to="/Modify.user">修改个人资料</router-link>
            </div>
            <div class="field">
                <router-link to="/Pwd.aspx">修改密码</router-link>
            </div>
            <div class="field">
                <router-link to="/Safe.aspx">账户安全</router-link>
            </div>
            
            <div class="field">
                <router-link to="/Login.aspx">注销</router-link>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      tel: ''
    }
  },
  methods: {
    getUser () {
        this.tel = JSON.parse(localStorage.getItem("userRenwo")).userPhone;
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mine {
	background: #2E2E2E;;
	z-index: 10000;
	position: absolute;
	top: 0;
	bottom: -130px;
	left: 0;
	right: 0;
}
.userinfo {
	display: flex;
	padding: 10px;
	.info {
		flex: 1;
		padding-left: 10px;
		color: #fff;
		.field {
			padding: 5px 0;
		}
	}
}
.magnav {
    border: 1px solid #171717;
    display: flex;
    .field {
    	flex: 1;
    	padding: 10px 0;
    	text-align: center;
    	border-right: 1px solid #171717;
    	span {
    		display: block;
    		color: #fff;
    	}
    }
}
.menu .field {
    border-bottom: 1px solid #171717;
    color: #fff;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    a {
    	color: #fff;
    }
}
</style>
