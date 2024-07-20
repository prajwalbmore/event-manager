const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name : {type : String},
    email : {type : String, required : true},
    password : {type : String, required : true}
});


//hash
userSchema.pre('save',async function(next){
    const user = this;
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model("User",userSchema);
module.exports = User;


// {
//     "name" : "user1",
//     "email" :"user1@gmail.com",
//     "password" : "user1"
// }