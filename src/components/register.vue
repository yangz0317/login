<template>
    <div class="box">
        <h2>用户注册</h2>
            <div class="input_box">
                <label>账号:</label>
                <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="input_box">
                <label>密码:</label>
                <input type="password" placeholder="请输入密码" v-model="psw">
            </div>
            <div class="input_box">
                <label>姓名:</label>
                <input type="password" placeholder="请输入姓名" v-model="name">
            </div>
            <div class="error" v-show="err_flag">{{err_tip}}</div>
          <input type="button" value="保存" @click="register()">
          <router-link to="/admin">login</router-link>
    </div>
</template>
<script>
import axios from '../request/http.js'
export default {
    name: 'register',
    data(){
        return {
            username:'',
            psw:'',
            name:'',
            err_tip:'账号密码姓名不能为空',
            err_flag:false
        } 
    },
    methods:{
       register(){
           if(this.username==''||this.psw==''||this.name==''){
                this.err_flag=true
            }
           axios.post('https://www.easy-mock.com/mock/5c9b892c654f582502058b00/example/register',{
                userName:this.username,
                userPsw:this.psw,
                name:this.name
           }).then((response)=>{
                var res = response.data,
                    len = res.data.length,
                    userNameArr= [],
                    passWordArr= [],
                    ses= window.sessionStorage;
                for(var i=0; i<len; i++){
                    userNameArr.push(res.data[i].userName);
                    passWordArr.push(res.data[i].userPsw);
                }
                // console.log(userNameArr, passWordArr);
                if(userNameArr.indexOf(this.username) !== -1){
                    alert('账号已存在！');
                }else{
                    this.$router.push('/update');
                }
           })
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