<template>
  <div class="nav1">
    <div class="banner">
      <img src="http://m.renwo.com/images/sg.jpg" alt="">
    </div>
    <div class="nav1-list">
      <h2>饼干糕点</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">饼干</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">蛋糕</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">糕点</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">面包</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">派</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">萨琪玛</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>冲调食品</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">蜂蜜</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">固体饮料</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">咖啡茶叶</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">麦片餐糊</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>各种糖果</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">果冻</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">口香糖/润喉糖</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">奶糖</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">巧克力</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">水果糖</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>牛奶制品</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">加味奶</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">乳酸菌饮料</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">酸奶</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">原味奶</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>休闲小吃</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">常温熟食</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">干果炒货</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">果脯蜜饯</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">膨化食品</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">肉干肉脯</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav2',
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
