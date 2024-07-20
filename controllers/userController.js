const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

async function registerUser(req, res){
    newEmail = req.body.email ;
    try {
        const userExists = await User.findOne({email : newEmail});
        if(userExists){
            res.status(400).json({message : 'User already exists'})  
        }else{
            const user = new User(req.body);
            await user.save();
            res.status(201).json({message : 'Registration successful',task: User})
        }
         
    } catch (error) {
        res.status(500).send(error);
    }
}
 
async function loginUser(req,res){
    try {
        newEmail = req.body.email;
        password = req.body.password;
        const user = await User.findOne({email : newEmail})
        // console.log(user)

        if (!user){
              res.status(400).send({ error : 'Invalid login credentials'});
        } 
        isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).send({error : 'Password Incorrcet'});
        }
            const token = jwt.sign({_id : user._id},'prajwal',{expiresIn : '1h'});
            res.status(200).send({acessToken : token,task : user});
        
    } catch (error) {
        res.status(500).send(error);   
    }
}




module.exports = {
    registerUser,
    loginUser
}