<template>
  <div class="nav1">
    <div class="banner">
      <img src="http://m.renwo.com/images/sg.jpg" alt="">
    </div>
    <div class="nav1-list">
      <h2>冰棍雪糕</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">单只装</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">家庭装</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">冷饮批发</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>冷冻肉类</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">冷冻牛羊肉</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">冷冻禽肉</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">冷冻水产品</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>冷冻主食</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">冷冻包点</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">冷冻方便餐</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">水饺、汤圆</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav6',
  data () {
    return {
     
    }
  },
  components: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  img {
    width: 100%;
  }
}
.nav1-list {
  padding: 10px 2px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom:none;
  }
    
  h2 {
    color: #009900;
    font-size: 14px;
    padding-left: 3px;
  }
  p {
    padding-left: 10px;
    padding-top: 10px;
    a {
      color: #000000;
      font-size: 12px;
      padding: 2px;
      display: inline-block;
    }
  }
}
</style>
