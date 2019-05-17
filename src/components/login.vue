<template>
    <div class="box">
        <h2>用户登录</h2>
        <form name="login" id="login">
            <div class="input_box">
                <label>账号:</label>
                <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="input_box">
                <label>密码:</label>
                <input type="password" placeholder="请输入密码" v-model="psw">
            </div>
            <div class="error" v-show="err_flag">{{err_tip}}</div>
          <input type="button" value="立即登录" @click="login()">
          <router-link to="/register"><input type="button" value="立即注册" class="blueBtn"></router-link>         
        </form>        
    </div>
</template>
<script>
import axios from '../request/http.js'
export default {
    name: 'login',
    data(){
        return {
            username:'',
            psw:'',
            err_tip:'账号密码不能为空',
            err_flag:false,
            } 
    },
    methods:{
        login(){
            if(this.username==''||this.psw==''){
                this.err_flag=true;
            }else{
                axios.post('https://www.easy-mock.com/mock/5c9b892c654f582502058b00/example/login',{
                userName:this.username,
                userPsw:this.psw
            }).then((response)=>{
                console.log(response.data);
                this.$store.commit('SET_TOKEN',response.data.data[0].token)
                if (this.$store.state.token) {
                    this.$router.push('/admin')
                } else {
                    this.$router.replace('/login');
                }
            })  
            }         
        }
    }
}
</script>
<style>
.box{
    width: 400px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
h2{
    margin-top: 50px;
}
.error{
    color: red;
    margin: 10px;
}
.input_box{
    margin-bottom: 20px;
}
</style>

