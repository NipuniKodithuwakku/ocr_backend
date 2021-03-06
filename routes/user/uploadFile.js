 const express=require('express');
 const fileUpload = require ('express-fileupload');

 const fileUpload = (app)=> {
     app.post('/upload',(req,res)=>{
         if (req.files === null) {
             return res.status(400).json({msg:"No file uploaded"});
             
         }
         const file = req.files.file;
         file.mv(`${_dirname}/client/public/uploads/${file.name}`,err=>{
             if (err) {
                 console.error(err);
                 return res.status(500).send(err);
             }
             res.json({filename:file.name,filePath:`/uploads/${file.name}`});
            
         });
     });
 }

 module.exports=fileUpload