const http = require("http");

const port = 8080;

const server = http.createServer((request, response) => {
    console.log("Servidor Creado")
    response.end("Hola Mundo");
});
server.listen(port, () => console.log("http Funcionando"));