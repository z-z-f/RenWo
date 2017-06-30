
<template>
<div class="manage">
  <section class="st">
      <div class="cardnote"><div class="notes">贴心卡账单<a style="margin-left:10px;float:right" href="MyRecharge.aspx">在线充值</a></div></div>
      <div class="carddetail">
          <div class="cardno">卡号：<a id="linkCardNo" href="javascript:__doPostBack('linkCardNo','')">5091396</a></div>
          <div class="cardvalue">卡内余额：0元</div>
          <div class="cardused">累计消费：0元</div>
      <div class="cardpay"><button type="button" class="btn btn-promotion btn-warning btn-sm btn-cardpay" data-toggle="modal" data-target="#proModalCard">刷卡</button><div class="modal" id="proModalCard" tabindex="-1" role="dialog" aria-labelledby="proModalLabelCard"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h4 class="modal-title" id="proModalLabel">请刷卡</h4></div><div class="modal-body"><div class="cardbarcode"><img class="icon-loading"></div><div class="tip text-center">请调高手机屏幕亮度</div></div><div class="modal-footer"><button type="button" class="btn btn-success btn-refresh center-block">刷新</button><button type="button" class="btn btn-cancel btn-default center-block" data-dismiss="modal">关闭</button></div></div></div></div></div></div>
  </section>
</div>
</template>

<script>

export default {
  name: 'manage',
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
    position: relative;
}
.cardpay {
    position: absolute;
    right: 10px;
    top: 5px;
}
.cardpay .btn-cardpay {
    height: 80px;
    width: 80px;
    font-size: 18pt;
    font-weight: 600;
}
</style>
