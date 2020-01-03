const mongoose = require('mongoose');
const User = mongoose.model('users')

const addUser = (app)=> {
    app.post('/api/addUser', async(req,res)=>{
        try {
        const {email,password} = req.body;

        const newUser = new User({
            email,password
        })

        await newUser.save()
        return res.json({msg: "User Added"})

    } catch (err) {
        console.error(err.message)
    }
    })
}

module.exports = addUser;