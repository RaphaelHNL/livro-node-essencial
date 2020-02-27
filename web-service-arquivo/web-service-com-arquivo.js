// Carrega os módulos
var http = require('http');
var url = require('url');
var fs = require('fs');

// função para ler um arquivo e escrevê-lo na response
function readFile(response, file){
    // faz a leitura do arquivo de forma assíncrona
    fs.readFile(file, function(err, data){
        //quando ler, escreve na response o conteúdo do arquivo JSON
        response.end(data);
    });
}

// função de callback para o servidor HTTP
function callback(request, response){
    //cabeçalho (header) com o tipo da resposta + UTF-8 como charset
    response.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
    //faz o parser da URL separando o caminho (rota)
    var parts = url.parse(request.url);
    var path = parts.path;
    //verifica a rota
    if(path == '/carros/classicos'){
        //retorna o JSon dos carros classicos
        readFile(response, "carros_classicos.json");
    }else if(path == '/carros/esportivos'){
        readFile(response, "carros_esportivos.json");
    }else if(path == "/carros/luxo"){
        readFile(response, "carros_luxo.json");
    }else {
        response.end("Path não mapeado: " +path);
    }
}

//servidor HTTP
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);
//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");