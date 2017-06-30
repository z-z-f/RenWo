<template>
  <div class="nav1">
    <div class="banner">
      <img src="http://m.renwo.com/images/sc.jpg" alt="">
    </div>
    <div class="nav1-list">
      <h2>各种酒类</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">白酒</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">啤酒</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">葡萄酒</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">其他酒类</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>各种饮料</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">八宝粥</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">茶饮料</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">果蔬汁饮料</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">咖啡/奶茶</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">乳味饮料</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">碳酸饮料</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">饮用水</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">运动功能饮料</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav3',
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


