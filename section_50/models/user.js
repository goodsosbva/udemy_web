const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
})

userSchema.statics.findAndValidate = async function(username, password) {
    const foundUser = await this.findOne({username})
    const isValid = await bcrypt.compare(password, foundUser.password)
    return isValid? foundUser: false;
}

// 미들웨어를 이용해서 몽구스에게 알아서 해시하게 하는 것
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12)
    next();
})

module.exports = mongoose.model('User', userSchema)