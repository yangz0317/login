import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:1
}
const mutations={
    incre(state,n){
        state.count+=n
    },
    decre(state,n){
        state.count-=n
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