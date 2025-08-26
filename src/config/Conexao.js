import postgres from "postgres";
// const postgres = require('postgres');

const Conexao = postgres({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'ads',
    password: '123456'
})

// module.exports = Conexao
export default Conexao;