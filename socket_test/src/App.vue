<template>
  <div id="app">
    <input type="text" v-model="msg">
    <div class="btn" @click="SendToALll">发给所有人</div>
    <div class="btn" @click="SendToOne">发给佳慧</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:'',
      info:{
        name:'黄雪松',
        id:'666'
      }
    }
  },
  sockets:{
    connect: function(){
      // 连接成功回调
      // alert('连接成功')
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    SendToALll: function(val){
      this.$socket.send(this.msg,this.info)
    },
    SendToOne:function(val){
      this.$socket.emit('sayto',this.info,this.msg)


      
    }
  },

}
</script>

<style scoped>
  input{
    margin-bottom: 20px;
  }
  .btn{
    width: 150px;
    height: 50px;
    border:1px solid #000;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    margin-bottom: 10px;
  }
</style>
