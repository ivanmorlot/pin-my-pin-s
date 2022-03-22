const { MongoClient } = require("mongodb");

class Database {
    constructor(url){
      this.client = new MongoClient(url)
    }

    connect(dbname){
     return this.client
      .connect()
      .then(client => {
          this.closeConnection = client.close;
          this.db = client.db(dbname)
          return this
      }).catch(error => {
          throw error
      })
    }
    createSchema(name,opts){
        return this.db.createCollection(name, opts)
        .catch(e => {
            throw e
        })
    }
}

module.exports = Database;