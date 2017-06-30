<template>
<div class="safe">
	<div class="main">
            
            <div class="st">
                <div class="accountlist">
                    <div class="item">
                        <span class="field">安全手机</span>
                        <span class="ctrl">
                        	<router-link to="/Login.aspx" class="btn btn-warning">变更号码</router-link>
                        </span>
                        <span class="detail">安全手机</span>
                    </div>
                    <div class="item">
                        <span class="field">微信账号</span>
                        <span class="ctrl">
                            <span id="labWX">未绑定</span>
                            
                        </span>
                        <span class="detail">微信账号</span>
                    </div>
                    <div class="item">
                        <span class="field">贴心卡</span>
                        <span class="ctrl">
                            <span id="labCard">已绑定</span>
                            
                        </span>
                        <span class="detail">贴心卡</span>
                    </div>
                </div>
            </div>
            
        </div>
        <footer class="bottom">
		    <div class="text link-v">
		        <a>手机版</a> | <a>电脑版</a>
		    </div>
		    <div class="text">客服热线：010-61718191</div>
		    
		</footer>
</div>
</template>

<script>

export default {
  name: 'safe',
  data () {
    return {
      
    }
  },
  components: {
  	
  },
  methods: {
  
  },
  created () {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.st {
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 10px;
}
.accountlist {
    color: #666;
    font-size: 12px;
    padding: 5px;
    background-color: #fbfbfb;
    .item {
	    display: block;
	    clear: both;
	    margin: 5px 0;
	    padding: 5px;
	    height: 40px;
	    line-height: 30px;
	    background-color: #fff;
	    .field {
		    float: left;
		    display: block;
		    width: 80px;
		    height: 30px;
		    font-weight: 600;
		    color: #666;
		}
		.ctrl {
		    float: right;
		    display: block;
		    width: 80px;
		    height: 30px;
		}
		.detail {
		    display: block;
		    height: 30px;
		    color: #999;
		    text-align: center;
		    width: 100%;
		}
	}
}
.bottom {
    background-color: #FFFFFF;
    text-align: center;
    clear: both;
    padding: 10px;
}

</style>
