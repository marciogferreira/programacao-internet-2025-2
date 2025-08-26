import Conexao from "../config/Conexao.js";

const UsuarioModel = {
    findAll: async () => {
        const dados = await Conexao`SELECT * FROM usuarios`;
        return dados;
    },
    findById: async (id) => {
        const dado = await Conexao`SELECT * FROM usuarios WHERE id = ${id}`;
        return dado;
    },
    create: async (dados) => {
        const resultados = await Conexao`INSERT INTO usuarios(nome, login, senha, ativo) VALUES(
            ${nome}, ${login}, ${senha}, ${ativo}
        )`;
        return resultados
    },
    update: (dados, id) => {

    },
    delete: async (id) => {
        const dado = await Conexao`DELETE  FROM usuarios WHERE id = ${id}`;
        return dado;
    }
}

export default UsuarioModel