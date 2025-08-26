import Conexao from "../config/Conexao.js";

const ProdutoModel = {
    findAll: async () => {
        const dados = await Conexao`SELECT * FROM produtos`;
        return dados;
    },
    findById: async (id) => {
        const dado = await Conexao`SELECT * FROM produtos WHERE id = ${id}`;
        return dado;
    },
    create: async ({ nome, descricao, preco, estoque, ativo }) => {
        const resultado = await Conexao`
            INSERT INTO produtos (nome, descricao, preco, estoque, ativo)
            VALUES (${nome}, ${descricao}, ${preco}, ${estoque}, ${ativo})
            RETURNING *;
        `;
        return resultado;
    },
    update: async ({ nome, descricao, preco, estoque, ativo }, id) => {
        const resultado = await Conexao`
            UPDATE produtos
            SET nome = ${nome}, descricao = ${descricao}, preco = ${preco}, 
                estoque = ${estoque}, ativo = ${ativo}
            WHERE id = ${id}
            RETURNING *;
        `;
        return resultado;
    },
    delete: async (id) => {
        const resultado = await Conexao`
            DELETE FROM produtos WHERE id = ${id} RETURNING *;
        `;
        return resultado;
    }
};

export default ProdutoModel;
