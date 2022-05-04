module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: "./db.sqlite"
        },
        migrations: {
          directory: __dirname + '/database/sqlite3/migrations'
        },
        seeds: {
          directory: __dirname + '/database/sqlite3/migrations'
        }
      }
};