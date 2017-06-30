
<template>
<div class="online">
  <section class="st">
      <div class="cardnote"><div class="notes">在线充值记录</div></div>
      <div class="carddetail">
          <div class="cardno">卡号：5091396</div>
          <div class="cardvalue">卡内余额：0元</div>
          <div class="cardused">累计消费：0元</div>
      </div>
      <div class="cardrecharge">充值金额：
          <select id="selectValues">
              <option value="100" selected="selected">100元</option>
              <option value="200">200元</option>
              <option value="500">500元</option>
              <option value="1000">1000元</option>
          </select><a href="javascript:void(0)" onclick="recharge($('#selectValues').val());" class="btn btn-warning btn-recharge">立即充值</a>
      </div>
  </section>
	
</div>
</template>

<script>

export default {
  name: 'online',
  data () {
    return {

    }
  },
  created () {
  	
	
  	
  },
  mounted () {
  	
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
.cardnote {
    line-height: 30px;
    padding: 5px 10px;
}
.carddetail {
    line-height: 30px;
    padding: 0 10px;
}
.cardrecharge {
    line-height: 30px;
    padding: 0 10px;
}
select, button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
}
.btn {
    margin-left: 10px;
}
</style>
