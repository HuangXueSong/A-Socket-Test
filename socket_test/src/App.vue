<template>
  <div id="app">
    <input type="text" v-model="msg">
    <div class="btn" @click="clickButton">点我发送</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:''
    }
  },
  sockets:{
    connect: function(){
      // 与socket连接成功的回调
      console.log('连接成功')
    },
    customEmit: function(val){
      console.log(val)
    }
  },
  methods: {
    clickButton: function(val){
      // this.$socket.emit('emit_method', this.msg);
      this.$socket.send(this.msg)
    }
  }
}
</script>

<style>
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
  }
</style>
