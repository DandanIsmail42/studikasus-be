const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbUser} = require('../app/config');

const database = 
        process.env.MONGO_URI || `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?authSource=admin`;



mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const db = mongoose.connection;

// mongodb+srv://dandan:<password>@be.d2u423b.mongodb.net/?retryWrites=true&w=majority

module.exports = db;