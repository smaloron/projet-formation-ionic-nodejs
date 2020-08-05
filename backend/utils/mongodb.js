// Importation du client MongoDB
const Mongo = require('mongodb');

const URL = 'mongodb://localhost:27017';

let mongoConnection;

// Méthode de connexion au serveur
const getConnection = async () => {
    if(! mongoConnection){
        mongoConnection = await new Mongo.MongoClient(URL,  { useUnifiedTopology: true }).connect( );
    }

    return mongoConnection;
};

// Sélection de la BD et de la collection
const getCollection = async (database, collection) => {
    const cn = await getConnection();
    return cn.db(database).collection(collection);
};

module.exports = {
    getConnection,
    getCollection
};
