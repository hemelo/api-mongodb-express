const http = require("http")
const port = 3000;

const rotas = {
    '/': 'First Commit',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Server started in http://localhost:${port}`)
})