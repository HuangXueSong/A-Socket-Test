var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res){
    // fs.readFile('./index.html',function(error,data){//若根目录有index.html，访问地址，将显示index.html
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.end(data,'utf-8');
    // });
}).listen(5001);//创建http服务

var io = require('socket.io').listen(server);


io.sockets.on('connection', (socket) => {
    console.log(socket.id + '链接成功');
    console.log(io.sockets.sockets)


    // 注册事件
    socket.on('emit_method',(val)=>{
      // console.log(val)
    })

    // 进行通讯时
    socket.on('message',(msg)=>{
      // console.log('socket',msg)

      // 接受到消息后执行向客户端发送消息
      socket.emit('customEmit','服务端收到了'+msg);   

      // 向所有用户发送消息
      io.sockets.send("老黄说" + msg);


    })

    // 关闭或刷新页面时断开当前连接
    socket.on('logout',(val)=>{
      io.disconnect()
    })
});

