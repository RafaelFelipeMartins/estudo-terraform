/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
//         host: 'localhost', 
//         port: Number(5432),
//         user: 'postgres',
//         password: 'postgres',
//         database: 'app_db', 

module.exports = {
  development: {
    client: 'postgresql', // ou 'mysql2', 'sqlite3', dependendo do seu banco
    connection: {
      host: 'localhost',
      port: 5432,         // porta padrão do postgres (mude se o seu for outro)
      user: 'postgres',
      password: 'postgres',
      database: 'app_db',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations', // Onde suas migrations vão ficar
      extension: 'ts', // Garante que ele vai gerar/ler arquivos em TypeScript
      loadExtensions: ['.ts']
    }
  }
};