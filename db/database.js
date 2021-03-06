const { MongoClient, ObjectId } = require("mongodb");

class Database {
    constructor(url) {
      this.client = new MongoClient(url);
    }

    connect(dbname) {
      return this.client
        .connect()
        .then(client => {
          this.closeConnection = client.close;
          this.db = client.db(dbname);
          return this;
        })
        .catch(error => {
          throw error;
        });
    }

    async collectionExist(name) {
      return this.db
        .listCollections({ name })
        .next();
    }

    async createSchema(name,opts) {
      const isExist = await this.collectionExist(name);

      if(!isExist) {
        return this.db
          .createCollection(name, opts)
          .catch(e => {
            throw e;
          });
      }

      return true;
    }

    async getAll(collectionName) {
      return this.db
        .collection(collectionName)
        .find({})
        .toArray();
    }

    async get(collectionName, id) {
      return this.db
        .collection(collectionName)
        .find({ _id: new ObjectId(id) })
        .toArray();
    }

    async insertMany(collectionName, datas = []) {
      return this.db
        .collection(collectionName)
        .insertMany(datas)
        .catch(e => {
          throw e;
        });
    }

    async update(nameCollection, id, dataToUpdate = {}) {
        // const mongoId = new ObjectId(id)
        return this.db
          .collection(nameCollection)
          .updateOne({ _id: new ObjectId(id) }, { $set: dataToUpdate })
          .catch(e => {
            throw e;
          });
    }

   async delete(nameCollection, id) {
      return this.db
        .collection(nameCollection)
        .deleteMany({ _id: new ObjectId(id) })
        .catch(e => {
          throw e;
        });
   }
}

module.exports = Database;