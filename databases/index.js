const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');

const database = 
        process.env.MONGO_URI || `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;



mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const db = mongoose.connection;

// mongodb+srv://dandan:<password>@be.d2u423b.mongodb.net/?retryWrites=true&w=majority

module.exports = db;