
<template>
<div class="pwd">
	<form>
	  <div class="form-group">
	    <label for="cur">当前密码</label>
	    <input type="email" class="form-control" id="cur" placeholder="Email">
	  </div>
	  <div class="form-group">
	    <label for="upd">新密码</label>
	    <input type="password" class="form-control" id="upd" placeholder="Password">
	  </div>
	  <div class="form-group">
	    <label for="cer">确认新密码</label>
	    <input type="password" class="form-control" id="cer" placeholder="Password">
	  </div>
	  <!-- Indicates a successful or positive action -->
		<button type="button" class="btn btn-success">保存</button>
	</form>

	
</div>
</template>

<script>

export default {
  name: 'Pwd',
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
.pwd {
	padding: 15px;
}
label {
	font-size: 12px;
}
.btn {
	width: 100%;
}
</style>
