// Mongoose import
const mongoose = require('mongoose');

// Mongoose connection to database
mongoose.connect('mongodb://localhost/examdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false //error message for UpdateDB function
})
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Something went wrong with DB connection"));