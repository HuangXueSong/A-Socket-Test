<template>
    <div class="register">
        <ul class="login">
            <li>
                <h1>注册</h1>
            </li>
           <li class="username mb_10 clearfix">
               <span>用户名：</span>
               <input type="text" v-model="username">
            </li> 
            <li class="password mb_10 clearfix">
               <span>密码：</span>
               <input type="password" v-model="password">
            </li> 
            <li class="btn clearfix">
                <div class="configBtn btn_s mr_10" @click="config">确定</div>
                <div class="cancalBtn btn_s mr_10" @click="cancal">取消</div>
                <div class="goRegister btn_s" @click="goLogin">去登陆</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'register',
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            goLogin:function(){
                this.$router.push('/')
            },
            config:function(){
                let data = 'username=' + this.username + '&password=' + this.password
                this.$axios.post('/api/register',data,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((res)=>{
                    console.log(res.data.result)
                    if(res.data.result.code === 100){
                        alert('注册成功')
                        this.$router.push('/')
                        this.username = ''
                        this.password = ''
                    }
                    if(res.data.result.code === 101){
                        alert(res.data.result.msg)
                    }
                })
            },
            cancal:function(){
                this.username = ''
                this.password = ''
            }
        }
    }
</script>
<style scoped>
    .login{
        width: 220px;
        margin: auto;
        padding-top: 100px;
    }
    .username input,.password input{
        width: 150x;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        float: left;
    }
    .username span,.password span{
        width: 70px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        float: left;
    }
    .btn{
        width:100%;
        text-align: center;
    }
    .configBtn,.cancalBtn,.goRegister{
        display: inline-block;
    }
</style>
