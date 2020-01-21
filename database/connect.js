const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);