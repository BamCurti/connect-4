const { MongoClient } = require('mongodb');

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
let url = `mongodb+srv://${user}:${password}@cluster0.1hy5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
url = 'mongodb+srv://curti:6669@cluster0.1hy5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const DB = {
    dbInstance: null,
    connect: () => {
        console.log(url);
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
                if(err) reject(err);
                console.error(err);
                this.dbInstance = client.db('connect4');
                resolve(client);
            });
        });
    },
    collection: name => this.dbInstance.collection(name),
}

module.exports = DB;