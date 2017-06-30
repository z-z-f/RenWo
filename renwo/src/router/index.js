import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 主路由
import Index from '@/index'

import Home from '@/view/home'
import hDetail from '@/view/home/detail'
import nDetail from '@/view/home/detail/list'

import Classify from '@/view/Classify'
import nav1 from '@/view/Classify/children/nav1'
import nav2 from '@/view/Classify/children/nav2'
import nav3 from '@/view/Classify/children/nav3'
import nav4 from '@/view/Classify/children/nav4'
import nav5 from '@/view/Classify/children/nav5'
import nav6 from '@/view/Classify/children/nav6'


import Shop from '@/view/shop'


import Mine from '@/view/mine'
import Modify from '@/view/mine/children/modify'
import Safe from '@/view/mine/children/safe'
import Pwd from '@/view/mine/children/pwd'
import Assess from '@/view/mine/children/assess'
import Consult from '@/view/mine/children/consult'
import Online from '@/view/mine/children/online'
import Manage from '@/view/mine/children/Manage'
import Order from '@/view/mine/children/order'
import Address from '@/view/mine/children/address'

import Login from '@/view/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Default.aspx',
      name: 'Index',
      component: Index,
      children: [
      	{
      	  path: '/Default.aspx',
      	  name: 'Home',
          component: Home
      	},
      	{
      	  path: '/Menu.aspx',
          redirect: '/Menu.aspx/id=1',
      	  name: 'Classify',
          component: Classify,
          children: [
            {
              path: 'id=1',
              name: 'nav1',
              component: nav1
            },
            {
              path: 'id=2',
              name: 'nav2',
              component: nav2
            },
            {
              path: 'id=3',
              name: 'nav3',
              component: nav3
            },
            {
              path: 'id=4',
              name: 'nav4',
              component: nav4
            },
            {
              path: 'id=5',
              name: 'nav5',
              component: nav5
            },
            {
              path: 'id=6',
              name: 'nav6',
              component: nav6
            }
          ]
      	},
      	{
      	  path: '/Cart.aspx',
      	  name: 'Shop',
          component: Shop
      	},
      	{
      	  path: '/Mine.aspx',
      	  name: 'Mine',
          component: Mine,
          beforeEnter: (to,from,next) => {
            var user = window.localStorage["userRenwo"];
            if(!user){
              next({path:'/Login.aspx',query:{"to":to.name}});
            }else{
              next();
            }

          }
      	}
      ]
    },
    {
      path: '/Login.aspx',
      name: 'Login',
      component: Login
    },
    {
      path: '/hDetail/:id/:item',
      name: 'hDetail',
      component:  hDetail
    },
    {
      path: '/List.aspx/:id',
      name: 'nDetail',
      component:  nDetail
    },
    {
      path: '/Modify.user',
      name: 'Modify',
      component:  Modify
    },
    {
      path: '/Safe.aspx',
      name: 'Safe',
      component:  Safe
    },
    {
      path: '/Pwd.aspx',
      name: 'Pwd',
      component:  Pwd
    },
    {
      path: '/Assess.aspx',
      name: 'Assess',
      component: Assess
    },
    {
      path: '/Consult.aspx',
      name: 'Consult',
      component: Consult
    },
    {
      path: '/Online.aspx',
      name: 'Online',
      component: Online
    },
    {
      path: '/Manage.aspx',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/Order.aspx',
      name: 'Order',
      component: Order
    },
    {
      path: '/Address.aspx',
      name: 'Address',
      component: Address
    }
  ]
})
