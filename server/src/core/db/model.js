const db = require('./index');
const boom = require('@hapi/boom')
const { ObjectId } = require('mongodb');

class Model {
    collection; //the API which will bring to us the objects
    name; //The name of the collection.

    constructor(name) {
        this.collection = db.collection(name);
        this.name = name;
    }

    getAll() {
        /** 
         * @name getAll
         * @description Returns the list of all the elements in the collection as a promise.
         * @returns {Array} The list of all the elements in the collection.
        */
        return new Promise((resolve, reject) => {
            this.collection.find().toArray((err, res) => {
                if(err) reject(err);
<<<<<<< HEAD
                resolve(results);
=======
                resolve(res);
>>>>>>> server
            })
        })
    }

    get(id) {
        /**
         * @name get
         * @description Returns a promise which gets an element from the MongoDB. If there is a problem, or was not found, rejects a boom problem.
         * @param {string} id The id of the element.
         * @returns Promise<Any>
         */
        return new Promise((resolve, reject) => {
            this.collection.findOne(
                {
                    _id: ObjectId(id)
                }
            ).then(result => {
                if(!result) reject(boom.notFound(`${this.name} not found.`));
                resolve(result);
            }).catch(err => reject(boom.internal()));
        })
    }

    create(doc) {
        /**
         * @name create
         * @description returns a promise which creates an element into the Mongo DB. If there is a problem, rejects a boom problem.
         * @param {Object} doc The document to upload.
         * @returns Promise<Any>
         *  */
        return new Promise((resolve, reject) => {
            this.collection.insertOne(doc, (err, result) => {
                if(err) reject(err);
                resolve(result);
            })
        })
    }

    update(id, doc) {
        /**
         * @name update
         * @description returns a promise which modify an existing document from the Mongo DB. If there is a problem, or it can't be find the document, rejects a boom problem.
         * @param {String} id The id of the document.
         * @param {Object} doc The document to upload.
         * @returns Promise<Any>
         */

        return new Promise((resolve, reject) => {
            const criteria = {
                _id : ObjectId(id),
            };

<<<<<<< HEAD
            this.collection.update(criteria, doc, (err, result) => {
=======
            const update = {
                $set: doc
            }

            this.collection.updateOne(criteria, update, (err, result) => {
                if(err) reject(boom.notFound(`${this.name} ${id} not found`));
                resolve(result);
            })
        })
    }

    delete(id) {
        /**
         * @name delete
         * @description returns a promise which deletes an existing document from the database. If there is a problem, or it doesn't exist, rejects a boom problem.
         * @param {string} id The id of the document to delete.
         * @returns Promise<Any>
         */
        return new Promise((resolve, reject) => {
            const query = {
                _id: ObjectId(id)
            }
            this.collection.deleteOne(query, (err, result) => {
>>>>>>> server
                if(err) reject(boom.notFound(`${this.name} ${id} not found`));
                resolve(result);
            })
        })
    }

    delete(id) {
        /**
         * @name delete
         * @description returns a promise which deletes an existing document from the database. If there is a problem, or it doesn't exist, rejects a boom problem.
         * @param {string} id The id of the document to delete.
         * @returns Promise<Any>
         */
        return new Promise((resolve, reject) => {
            const query = {
                _id: ObjectId(id)
            }
            this.collection.deleteOne(query, (err, result) => {
                if(err) reject(boom.notFound(`${this.name} ${id} not found`));
                resolve(result);
            })
        })
    }
}

module.exports = Model;