const mongoose = require('mongoose');
const User = mongoose.model('users')

const signUp = (app)=> {
    app.post('/api/signUp', async(req,res)=>{
        try {
        const {firstName,lastName,email,password} = req.body;
    //check if there a user with the same email
    const foundUser = await User.findOne({email});
    if (foundUser) {
        return res.status(403).json({error : 'Email is already exists'});
        
    }
    //create a new user
        const newUser = new User({
            firstName,lastName,email,password
        })

        await newUser.save()
        return res.json({msg: "User Added"})

    } catch (err) {
        console.error(err.message)
    }
    })
}

module.exports = signUp;