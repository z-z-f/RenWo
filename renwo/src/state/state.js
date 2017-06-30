/**
 * Created by ZZF on 2017/5/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations_types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //购物车列表
    cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],

    //当前购物车信息
    cartInfos: {
        total_price: 0,
        total_nums: 0
    },

    //当前菜品是否在购物车的状态。在则是对应的索引，不在则是-1
    curIndex: -1
  },
  mutations: {
  	    [types.CLEAR_LOCAL](state) {
        state.cartList.forEach(function(item) {
            item.num = 0;
        });
        state.cartList = [];
        localStorage.removeItem('vuex_cart');
    },
    [types.UPDATE_LOCAL](state) {
        localStorage.setItem('vuex_cart', JSON.stringify(state.cartList));
    },
    [types.UPDATE_CUR_SHOP_STATUS](state, {
        index = -1
    }) {
        state.curIndex = index;
    },
    [types.DELETE_DB](state,i) {
        state.cartList.splice(i,1);
    },
    [types.CREATE_DB](state, item) {
        state.cartList.push(item);
    },
    [types.ADD_DB](state, level) {
        // console.log('mu add id:' + state.curIndex);

        state.cartList[state.curIndex].level = parseInt(state.cartList[state.curIndex].level);
        state.cartList[state.curIndex].level = state.cartList[state.curIndex].level + level;
    },
    [types.REDUCE_DB](state) {
        // console.log('mu reduce');

        state.cartList[state.curIndex].level = parseInt(state.cartList[state.curIndex].level);
        state.cartList[state.curIndex].level--;

        // console.log(state.cartList[state.curIndex].num);
        if (state.cartList[state.curIndex].level == 0) {
            state.cartList.splice(state.curIndex, 1);
        }
    },
    [types.CHECK_DB](state, {
        id
    }) {
        // console.log('mu check id :' + id);
        // console.log(state.cartList);

        state.curIndex = -1;

        var list = state.cartList;
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    state.curIndex = i;
                    // console.log(state.curIndex)
                    break;
                }
            }
        }
    }
  },
  getters: {
  	 getInfos(state) {
        state.cartInfos.total_price = 0;
        state.cartInfos.total_nums = 0;
        var list = state.cartList;
        for (var i = 0; i < list.length; i++) {
            var price = list[i].memprice,
                num = list[i].level;

            state.cartInfos.total_price += price * num;
            state.cartInfos.total_nums += num;
        }
	        return state.cartInfos;
	    },
	    getCartList(state) {
	        return state.cartList;
	    }
},
	actions: {
		clear_local: ({
        commit
    }) => {
        commit(types.CLEAR_LOCAL);
    },
    update_local: ({
        commit
    }) => {
        commit(types.UPDATE_LOCAL);
    },
    update_cur_shop_status: ({
        commit
    }, obj) => {
        commit(types.UPDATE_CUR_SHOP_STATUS, obj);
    },
    delete_db: ({
        commit
    },{
    	i
    }) => {
        commit(types.DELETE_DB,i);
        commit(types.UPDATE_LOCAL);
    },
    create_db: ({
        commit
    }, {
        item
    }) => {
        commit(types.CREATE_DB, item);
        commit(types.UPDATE_LOCAL);
    },
    add_db: ({
        commit
    }, {
    	level
    }) => {
        commit(types.ADD_DB, level);
        commit(types.UPDATE_LOCAL);
    },
    reduce_db: ({
        commit
    }) => {
        commit(types.REDUCE_DB);
        commit(types.UPDATE_LOCAL);
    },
    check_db: ({
        commit
    }, obj) => {
        commit(types.CHECK_DB, obj);
    }
}
})
