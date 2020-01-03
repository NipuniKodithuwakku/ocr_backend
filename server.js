const express=require('express');
const app = express();
const fileUpload = require("express-fileupload");
const bodyParser = require ('body-parser');
const cors =require('cors');
const mongoose = require ('mongoose');
const PORT =4000;

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());


require('./models/User');


mongoose.connect('mongodb://127.0.0.1:27017/ocr',{useNewUrlParser:true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("Mongodb connection established successfully")

})

app.listen(PORT,function() {
    console.log("server is running on port:"+ PORT);
    
});



// GET
require('./routes/user/getUsers')(app);
require('./routes/user/login')(app);
// require('./routes/user/fileUpload')(app);


// POST
require('./routes/user/signUp')(app);

// PUT

// DELETE