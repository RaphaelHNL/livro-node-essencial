// carrega os módulos
var http = require('http');
var url = require('url');

//função callback para o servidor HTTP
var callback = function (request, response) {
    // cabeçalho (header) com o tipo da resposta + UTF-8 como charset
    response.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });
    //faz o parser da URL separando o caminho (rota)
    var parts = url.parse(request.url);


    //verifica a rota
    if (parts.path == '/') {
        response.end("Site na raiz.");
    } else if (parts.path == '/carros') {
        response.end("Você digitou a rota /carros.");
    } else {
        response.end("Rota inválida: " + parts.path);
    }
}

//cria um servidor HTTP que vai responder "Hello World" para todas as requisições
var server = http.createServer(callback);
// porta que o servidor vai escutar
server.listen(3000);
//mensagem ao iniciar o servidor
console.log("servidor iniciado em http://localhost:3000/");