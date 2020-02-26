//carrega o módulo HTTP
var http = require('http');
//cria um servidor http que vai responder "hello World" para todas as requisições
/*var server = http.createServer(function(request, response){
    // define o cabeçalho (header) com o tipo da resposta
    response.writeHead(200, {"Content-type": "text/plain"});
    // mensagem de retorno
    response.end("Hello World Node!\n");
});
// porta que o servidor vai escutar
server.listen(3000);
// mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");*/


//iniciando o servidor usando uma var de callback
// função de callback para o servidor HTTP
var callback = function(request, response){
    response.writeHead(200, {"Content-type": "text/plain"});
    response.end("Hello World Node 2!\n");

};

//servidor http
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);
// mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");