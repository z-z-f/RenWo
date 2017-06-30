<template>
  <div class="classify-main">
	   <div class="left">
        <router-link v-for="item in cNavList" :to="item.url" class="list" active-class="on">{{item.text}}</router-link>
     </div>
     <div class="right">
        <router-view></router-view>
     </div>

  </div>
</template>

<script>

export default {
  name: 'cmain',
  data () {
    return {
      cNavList: [
        {
          text: '生鲜食品',
          url: '/Menu.aspx/id=1'
        },
        {
          text: '休闲食品',
          url: '/Menu.aspx/id=2'
        },
        {
          text: '酒水饮料',
          url: '/Menu.aspx/id=3'
        },
        {
          text: '粮油副食',
          url: '/Menu.aspx/id=4'
        },
        {
          text: '日用百货',
          url: '/Menu.aspx/id=5'
        },
        {
          text: '冷冻食品',
          url: '/Menu.aspx/id=6'
        }
      ]
    }
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.classify-main {
  display: flex;
  position: absolute;
  width: 100%;
  left: 0;
  top: 50px;
  bottom: 50px;
  .left {
    width: 80px;
    border-right: 1px solid #999;
  }
  .right {
    overflow-y: auto;
    flex: 1;
  }
}
.left {
  .list {
    color: #666;
    line-height: 40px;
    display: block;
    text-align: center;
    background: #ccc;
    border-bottom: 1px solid #999;
  }
  .on {
    background: #fff;
    border-right: 1px solid #fff;
    width: 80px;
  }
}
</style>
