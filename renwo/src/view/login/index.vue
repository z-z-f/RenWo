<template>
  <div class="login">
	<nav>
	    <ul class="nav nav-tabs-4">
	        <li class=""><a href="Menu.aspx" title="分类">分类</a></li>
	        <li class=""><a href="Default.aspx" title="首页">首页</a></li>
	        <li class=""><a href="CDefault.aspx" title="搭配购">搭配购</a></li>
	        <li class=""><a href="Week.aspx" title="周套餐">周套餐</a></li>
	    </ul>
	</nav>
	<section class="loginContent">
		<h3>登录到任我在线商城</h3>
		<div class="loginLabel">
            <a href="javascript:void(0)" @click="send">使用短信密码登录</a>
            <!-- <input type="hidden" name="hidLoginType" id="hidLoginType" value="0"> -->
        </div>
        <div class="fields loginAccount">
	        <div class="field username">
	            <div class="bg-layer">
	            	<i class="iconfont icon-yonghuming"></i>
	                <input name="txtAccount" type="text" id="txtAccount" title="请输入用户名或手机号" placeholder="用户名/手机号" v-model="phone">
	            </div>
	        </div>
	        <div class="field pwd">
	            <div class="bg-layer">
	            	<i class="iconfont icon-mima"></i>
	                <input name="txtPwd" type="password" id="txtPwd" placeholder="密码" v-model="rand">
	            </div>
	        </div>
	        <div class="field" style="display:none"></div>
	        <div class="field">
	        	<input type="submit" name="btnLogin" value="登 录" id="btnLogin" class="submit-btn" @click="sub">
	        </div>
	        <div class="field fix">
	        	<label for="chkRem">记住账号</label>
	        	<input id="chkRem" type="checkbox" name="chkRem">
	        	<span class="reg-findpwd">
	        		<a href="Reg.aspx" title="免费注册">免费注册</a>
	        		<a href="Passport/PasswordFind.aspx" title="点击找回密码">忘记密码</a>
	        	</span>
	        </div>
	    </div>
	</section>
	 <div v-if="!phone" class="please">
      {{msg}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      phone: '',
      msg: '',
      sen: 10,
      flag: true,
      rand: '',
      url: 'javascript:void(0)',
      col: ''
    }
  },
  components: {
    
  },
  methods: {
  	sub () {
  		if(!this.phone){
        	this.msg = '请输入手机号码'
      	}else{
      		if(this.rand){
	          var userData = {
	            userPhone: this.phone
	          }
	          var url = this.$route.query.to;
	          console.log(url);
	          window.localStorage.setItem("userRenwo",JSON.stringify(userData));
	          if(url==undefined) {
	            this.$router.push({name:"Mine"});
	          }
	          this.$router.push({name:url});
	        }
      	}	
  	},
  	send () {
      if(this.phone){
        this.flag = false;
        var reg = /^1[34578]\d{9}$/;
        var n = 5;
        var that = this;
        var arr = [];
        for(var i=0;i<4;i++){
          var random = Math.floor(Math.random()*10);
          arr.push(random)
        }
        if(reg.test(this.phone)) {
          this.col = "coll";
          var timer = setInterval(function(){
            that.sen--;
            that.rand = arr.join("");
            if(that.sen<=0){
              clearInterval(timer);
              that.flag = true;
            }
          },1000)

        }else{
          alert('请输入正确的手机号码');
          this.flag = true;
          this.rand = "";
          return false;
        }
      }else{
        this.msg = '请输入手机号码'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
	display: flex;
	padding-top: 10px;
	padding-bottom: 10px;
	li {
		flex: 1;
		text-align: center;
		a {
			border-right: 1px solid #ccc;
			display: block;
		    color: #333;
		}
	}
}
.loginContent {
	h3 {
		text-align: center;
    	line-height: 40px;
	}
    .fields {
	    margin: 0 20px;
	}
	.fix {
		label {
			float: left;
		}
		.reg-findpwd {
			float: right;
			a {
				color: #428bca;
			}
			
		}
		
	}
	.field {
		margin-top: 10px;
		position: relative;
		.bg-layer {
			input {
				width: 100%;
				height: 35px;
				padding-left: 40px;
				box-sizing: border-box;
				border-color: #BBBBBB #DDDDDD #DDDDDD;
				border-right: 1px solid #DDDDDD; 
				border-style: solid;
	    		border-width: 1px;
			}
		}
		
		.iconfont {
			position: absolute;
			top: 10px;
			left: 10px;
		}
		.submit-btn {
			background: none repeat scroll 0 0 #FF4400;
		    border: 0 none;
		    color: #FFFFFF;
		    display: inline-block;
		    font-size: 24px;
		    font-weight: 700;
		    height: 44px;
		    line-height: 44px;
		    min-width: 100%;
		    padding: 0;
		    text-align: center;
		    text-decoration: none;
		    text-shadow: 0 -1px 0 #441307;
		}
	}
}
.loginLabel {
    padding-right: 20px;
    text-align: right;
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 12pt;
    color: #666;
    a {
    	color: #428bca;
    }
}
.please {
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #000;
  border-radius: 10px;
  margin: 100px auto;
}
</style>
