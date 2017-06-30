<template>
  <div class="nav1">
    <div class="banner">
      <img src="http://m.renwo.com/images/sg.jpg" alt="">
    </div>
    <div class="nav1-list">
      <h2>方便食品</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">方便粉丝</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">方便面</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">方便粥饭</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>副食调料</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">酱菜</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">调味酱</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">调味料</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">调味油汁</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>罐头食品</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">肉制品罐头</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">蔬菜罐头</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">水产罐头</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">水果罐头</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>粮油米面</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">包装面条</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">米</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">面</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">油</router-link>
         <router-link :to="{name:'nDetail',params:{id:14}}">杂粮</router-link>
      </p>
    </div>
    <div class="nav1-list">
      <h2>南北干货</h2>
      <p>
         <router-link :to="{name:'nDetail',params:{id:14}}">干货</router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav4',
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
