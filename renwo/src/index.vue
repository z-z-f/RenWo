<template>
  <div class="primary">
    <router-view></router-view>
    <div class="toolbar">
      <div class="toolbar-wrapper">
        <router-link v-for="item in footList" :to="item.url" :title="item.text" class="toolbar-tab" active-class="active"><i :class="item.icon"></i>{{item.text}}</router-link>
      </div>
    <!-- <div class="toolbar-wrapper container-fluid">
        <ul class="row">
            <li class="col-xs-3 col-sm-3 col-md-3 active">
                <a href="Default.aspx" title="首页">
                    <span class="line"><i class="home"></i></span>
                    <span class="text">首页</span>
                </a>
            </li>
            <li class="col-xs-3 col-sm-3 col-md-3">
                <a href="Menu.aspx" title="分类">
                    <span class="line"><i class="menu"></i></span>
                    <span class="text">分类</span>
                </a>
            </li>
            <li class="col-xs-3 col-sm-3 col-md-3">
                <a href="Cart.aspx" title="购物车">
                    <span class="line"><i id="cartinfo" class="cart"><span>0</span></i></span>
                    <span class="text">购物车</span>
                </a>
            </li>
            <li class="col-xs-3 col-sm-3 col-md-3">
                <a id="myhome" href="Login.aspx?Url=http%3a%2f%2fm.renwo.com%2fMyHome.aspx" title="我的">
                    <span class="line"><i class="my"></i></span>
                    <span class="text">我的</span>
                </a>
            </li>
        </ul>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary',
  data () {
    return {
      footList: [
        {
          text: "首页",
          icon: "iconfont icon-shouye",
          url: "/Default.aspx"
        },
         {
          text: "分类",
          icon: "iconfont icon-fenlei",
          url: "/Menu.aspx"
        },
         {
          text: "购物车",
          icon: "iconfont icon-gouwuche",
          url: "/Cart.aspx"
        },
         {
          text: "我的",
          icon: "iconfont icon-wode",
          url: "/Mine.aspx"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.toolbar {
    height: 45px;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    max-width: 640px;
    min-width: 320px;
    background: rgba(200, 200, 200, 0.5);
    padding: 2px 0 0 0;
    .toolbar-wrapper {
      display: flex;
      .toolbar-tab {
        flex: 1;
        font-size: 14px;
      }
      .iconfont {
        display: block;
        padding-top: 3px;
      }
      .active {
        color: red;
      }
    }
}
</style>
