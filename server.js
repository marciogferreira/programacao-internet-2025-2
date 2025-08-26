import express from 'express';
import UsuarioModel from './src/models/UsuariosModel.js';
const app = express()


app.get('/', (request, response) => {
    response.send("Hello Express")
})

app.get('/usuarios', async (request, response) => {
    const dados = await UsuarioModel.findAll();
    response.json(dados)
})

app.listen(3000, () => {
    console.log("Servidor executando...")
})