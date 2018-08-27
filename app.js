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
    console.log('链接成功');

    // 注册事件
    socket.on('emit_method',(val)=>{
      console.log(val)
    })

    socket.on('message',(msg)=>{
      console.log('socket',msg)
    })
});
io.sockets.on('message', (msg) => {
  console.log('io',msg);
});