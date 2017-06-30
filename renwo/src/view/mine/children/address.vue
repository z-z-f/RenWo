<template>
<div class="address">
	<div class="main">
	    <div class="content-inner">
	        <div class="addrnote st"><div class="notes">您可以在下方维护您的收货地址</div><div class="btn-new"><a href="javascript:void(0)">添加新地址</a></div></div>
	        <div class="addrlist st"><div class="addrlist-inner"><ul></ul></div></div>
	    <div class="modal fade addr-dialog st" tabindex="-1" role="dialog" name="mbox" style="display: none;"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> <h4 class="modal-title"></h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default btn-block" data-dismiss="modal">关闭</button><button type="button" class="btn btn-default hide" data-dismiss="modal">取消</button><button type="button" class="btn btn-primary hide">确定</button></div></div></div></div></div>
	    
	</div>
</div>
</template>

<script>

export default {
  name: 'address',
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
.addrnote {
    height: 40px;
    line-height: 30px;
    padding: 5px 10px;
}
.st {
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 10px;
}
.notes {
    font-size: 12pt;
    float: left;
}
.addrnote .btn-new {
    float: right;
    a {
	    display: inline-block;
	    font-size: 14px;
	    font-weight: bold;
	    height: 28px;
	    line-height: 28px;
	    margin: 0 10px 0 0;
	    padding: 0 14px;
	    vertical-align: middle;
	    background-color: #ECECEC;
	    background-image: linear-gradient(to top, #ECECEC 0px, #FDFDFD 100%);
	    border: 1px solid #BCBCBC;
	    border-radius: 3px;
	    text-decoration: none;
	}
}
</style>
