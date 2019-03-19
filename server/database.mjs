import sqlite3 from 'sqlite3'
const exporter = new SqliteToJson({
  client: new sqlite3.Database('./database.db')
});

exporter.tables((err, tables) => {
  if (err) return console.log(err.message)
})

// Closing the database whenever its done querying
database.close(err => err ? console.error(err.message) : console.log('Database connection closed'))

export default database