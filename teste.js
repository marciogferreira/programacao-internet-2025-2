import { createServer } from 'node:http'
import UsuariosModel from './src/models/UsuariosModel.js'
import ProdutoModel from './src/models/ProdutoModel.js'
const app = createServer(async (request, response) => {
    
    const { url } = request

    if(url == '/') {
        response.writeHead(200, {"Content-type": "text/plain"})    
        return response.end("API Versão 1.0.0")
    }

    if(url == '/usuarios') {
        const dados = await UsuariosModel.findAll()
        response.writeHead(200, {"Content-type": "application/json"})
        const dadosJson = JSON.stringify(dados)
        return response.end(dadosJson)
    }

    if (url == '/produtos') {
        const dados = await ProdutoModel.findAll();
        response.writeHead(200, { "Content-Type": "application/json" });
        const dadosJson = JSON.stringify(dados);
        return response.end(dadosJson);
    }

    response.writeHead(404, {"Content-type": "text/html"})
    response.end("<h1>Não Encontrado.</h1>")
    
})

app.listen(3000);