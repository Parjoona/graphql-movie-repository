import sqlite3 from 'sqlite3'

sqlite3.verbose()
let database = new sqlite3.Database('./database.db')

database.close(err => err ? console.error(err.message) : console.log('Database connection closed'))

export default database