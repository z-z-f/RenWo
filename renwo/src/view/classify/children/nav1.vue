<template>
  <div class="nav1">
    <div class="banner">
      <img src="http://m.renwo.com/images/sc.jpg" alt="">
    </div>
    <div class="nav1-list">
      <h2>蔬菜水果</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">平价蔬菜</router-link>
       <router-link :to="{name:'nDetail',params:{id:14}}">有机蔬菜</router-link>
       <router-link :to="{name:'nDetail',params:{id:14}}">国产水果</router-link>
       <router-link :to="{name:'nDetail',params:{id:14}}">进口水果</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>精品肉类</h2>
      <p>
       <router-link :to="{name:'nDetail',params:{id:14}}">牛羊肉</router-link>
       <router-link :to="{name:'nDetail',params:{id:14}}">猪肉</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>禽蛋类</h2>
      <p>
       <router-link :to="{name:'nDetail',params:{id:14}}">蛋类</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>海鲜水产</h2>
      <p>
       <router-link :to="{name:'nDetail',params:{id:14}}">鱼类</router-link>
       <router-link :to="{name:'nDetail',params:{id:14}}">虾类</router-link>
       <router-link :to="{name:'nDetail',params:{id:14}}">其他水产</router-link>
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
      <h2>熟食制品</h2>
      <p>
       <router-link :to="{name:'nDetail',params:{id:14}}">肉类熟食</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>主食面点</h2>
      <p>
       <router-link :to="{name:'nDetail',params:{id:14}}">现制主食</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav1',
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
