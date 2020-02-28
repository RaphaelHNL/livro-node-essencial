//carrega o módulo net
var net = require('net');

//contador para testes
var count = 1;

//Listener do servidor TCP quando algum cliente conectar
var server = net.createServer(function (socket){
    //mensagem de log quando algum cliente conectar
    console.log("Cliente conectou do ip: " + socket.remoteAddress);
    //escreve a resposta e termina a conexão do cliente
    socket.end("Hello World TCP: " + (count++) + "\n");
});

//inicia o servidor
server.listen(3000, "localhost");
//mensagem ao iniciar o servidor
console.log("Servidor TCP iniciado...");