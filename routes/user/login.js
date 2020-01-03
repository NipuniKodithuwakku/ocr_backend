const mongoose = require('mongoose');
const User = mongoose.model('users');


const login = (app)=> {
    app.get('/api/login/:email', async(req,res)=> {

        const email = req.params.email

        try {
            const user = await User.findOne({email});
            if(!user){
                return res.json({msg: 'No User Found'});
            }
 
            return res.json(user);
        } catch (err) {
            console.error(err.message)
        }
    })
}

module.exports = login;