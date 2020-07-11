const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.👍')
  } else {
    console.log('Error in DB connection:👎 ' + err.message)
    process.exit(1)
  }
});
