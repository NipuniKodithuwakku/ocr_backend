const mongoose = require('mongoose');
const User = mongoose.model('users');


const getUser = (app)=> {
    app.get('/api/getUsers', async(req,res)=> {
        try {
            const allUsers = await User.find();

            return res.json(allUsers);
        } catch (err) {
            console.error(err.message)
        }
    })
}

module.exports = getUser;