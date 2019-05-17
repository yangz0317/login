<template>
    <div class="box">
        <h2>信息修改</h2>
            <div class="input_box">
                <label>账号:</label>
                <input type="text" placeholder="请输入账号" class="username">
            </div>
            <div class="input_box">
                <label>密码:</label>
                <input type="password" placeholder="请输入密码" class="psw">
            </div>
            <div class="input_box">
                <label>性别:</label>
                <input type="radio" name="sex" value="Male" checked>Male
                <input type="radio" name="sex" value="female">Female
            </div>
            <div class="input_box">
                <label>生日:</label>
                <input type="date" name="bday">
            </div>
            <div class="input_box">
                <label>爱好:</label>
                <input type="checkbox" name="hobby" value="run" checked>跑步
                <input type="checkbox" name="hobby" value="football">足球
                <input type="checkbox" name="hobby" value="basketball">篮球
            </div>
          <input type="button" value="保存" >
          
    </div>
</template>
export default {
    name: 'login',
    data(){
        return {
            
            } 
    },
    methods:{

    }
}
</script>
<style>
.box{
    width: 500px;
    height: 400px;
    border: 1px solid #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
h2{
    margin-top: 50px;
}
.input_box{
    margin-bottom: 20px;
}
</style>