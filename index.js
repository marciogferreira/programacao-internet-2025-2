import postgres from "postgres";
const Conexao = postgres({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'ads',
    password: '123456'
})
async function listarUsuarios() {
    const resultados = await Conexao`SELECT * FROM usuarios`;
    console.log(resultados)
}
async function adicionarUsuarios(nome, login, senha, ativo) {
    const resultados = await Conexao`INSERT INTO usuarios(nome, login, senha, ativo) VALUES(
        ${nome}, ${login}, ${senha}, ${ativo}
    )`;
    console.log(resultados)
}

async function editarUsuarios(id, nome, login, senha, ativo) {
    const resultados = await Conexao`
        UPDATE usuarios 
        SET nome = ${nome}, login = ${login}, senha =  ${senha}, ativo = ${ativo}
        WHERE id = ${id}
    )`;
    console.log(resultados)
}
// listarUsuarios();
// adicionarUsuarios('Monica', 'monica', '123', 1)
editarUsuarios(1, 'Marcio', 'marcio', '123123123', 1)