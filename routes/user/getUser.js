const mongoose = require('mongoose');
const User = mongoose.model('users');


const getUser = (app)=> {
    app.get('/api/getUser/:email', async(req,res)=> {

        const email = req.params.email

        try {
            const user = await User.findOne({email});

            await User.De

            if(!user){
                return res.json({msg: 'No User Found'});
            }

            return res.json(user);
        } catch (err) {
            console.error(err.message)
        }
    })
}

module.exports = getUser;