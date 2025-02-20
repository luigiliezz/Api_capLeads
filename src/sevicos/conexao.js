import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'mary',
    password: '12345',
    database: 'L'
});

export default pool;