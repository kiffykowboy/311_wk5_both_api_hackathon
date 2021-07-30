const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'fotohut.org',
        user: 'fotohut_ACAPub',
        password: 'lE%3o*y7mc2!wjbE86',
        database: 'fotohut_ACAHackathon'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;