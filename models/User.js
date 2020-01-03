const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a schema
const UserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
});


module.exports = mongoose.model("users",UserSchema)

// //create  a model
// const User = mongoose.model('user',UserSchema);

// // Export the model
// module.export = User;