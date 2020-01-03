const express=require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors =require('cors');
const mongoose = require ('mongoose');
const PORT =4000;

app.use(cors());
app.use(bodyParser.json());


require('./models/User');


mongoose.connect('mongodb://127.0.0.1:27017/ocr',{useNewUrlParser:true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MOngodb connection established successfully")

})

app.listen(PORT,function() {
    console.log("server is running on port:"+ PORT);
    
});

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const app = express();
// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// // DB Config
// // const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
// const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
// app.listen(port, () => console.log(`Server up and running on port ${port} !`));



// GET
require('./routes/user/getUsers')(app);
require('./routes/user/getUser')(app);


// POST
require('./routes/user/addUser')(app);

// PUT

// DELETE