<template>
  <div class="nav1">
    <div class="banner">
      <img src="http://m.renwo.com/images/sc.jpg" alt="">
    </div>
    <div class="nav1-list">
      <h2>个人清洁</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">定型水/焗油</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">护发素</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">洗发水</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">牙膏/漱口水</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">牙刷</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>护肤用品</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">脸部护理</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">沐浴露</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">洗手液</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">香皂</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>家居清洁</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">厨房清洁</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">灭蚊虫用品</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">洗衣用品</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">衣物护理</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">浴厕清洁</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>家居用品</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">清洁用品</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">五金工具</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">一次性用品</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>生活用纸</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">餐巾纸</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">护垫</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">面巾纸</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">湿纸巾</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">卫生巾</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">卫生纸</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>文体用品</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">文具办公用品</router-link>
        <router-link :to="{name:'nDetail',params:{id:14}}">娱乐游戏</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>小百货</h2>
      <p>
        <router-link :to="{name:'nDetail',params:{id:14}}">电池</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav5',
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
