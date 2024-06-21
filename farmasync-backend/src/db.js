const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'farmasync-db.cd2cayuu2t39.us-east-1.rds.amazonaws.com', // substitua pelo endpoint correto
    user: 'admin',              // nome de usuário mestre
    password: 'ninfa2590',   // sua senha
    database: 'farmasync-db'       // nome do banco de dados
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
