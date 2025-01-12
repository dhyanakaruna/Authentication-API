const { Pool } = require('pg');
module.exports = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'securden',
    port: 5432,
});
