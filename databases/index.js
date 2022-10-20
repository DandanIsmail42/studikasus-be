const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser} = require('../app/config');

const database = async () => {
      
await mongoose.connect(
 process.env.MONGO_URI || `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
);
}

// mongodb+srv://dandan:<password>@be.d2u423b.mongodb.net/?retryWrites=true&w=majority

module.exports = database;