import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:1,
    user: window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem('token')
}
const mutations={
    incre(state,n){
        state.count+=n
    },
    decre(state,n){
        state.count-=n
    },
    //将token保存到sessionStorage里，token表示登陆状态
    SET_TOKEN: (state, data) => {
        state.token = data
        window.sessionStorage.setItem('token', data) 
    },
    //获取用户名
    GET_USER: (state, data) => {
        // 把用户名存起来
        state.user = data
        window.sessionStorage.setItem('user', data)
    },
    //登出
    LOGOUT: (state) => {
        // 登出的时候要清除token
        state.token = null
        state.user = null
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('user')
    }
}
const getters={
    count(state){
        return state.count+10 
    }
}
const actions={
    addAction(context,n){
        context.commit('incre',n)
    },
    reduceAction(context,n){
        context.commit('decre',n)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})