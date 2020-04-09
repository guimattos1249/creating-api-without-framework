var http = require('http');

http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        switch (req.url) {
            case '/':
                res.write('<h2>Bem vindo a home page</h2>');
                break;
            case '/user': 
                res.write('<h2>Seja bem vindo a página de usuários</h2>');
                break;
            default:
                res.write('<h2>Página não encontrada!</h2>');
                break;
        }
        res.end();
    }
).listen(3000);

console.log('Servidor iniciado.');