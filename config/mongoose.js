const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;













// const mongoose = require('mongoose');
// // mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
// mongoose.connect(process.env.MONGO_DB_URL);
// const db = mongoose.connection;

// db.once('open', function(){
//     console.log('database connected to the server successfully!');
// });

// module.exports = db;