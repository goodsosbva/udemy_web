const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {   
            _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Kahane'
    })
    u.address.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'Englerand'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push(
        {
            street: '99 3rd St.',
            city: 'usa',
            state: 'ny',
            country: 'usa'
        }
    )
    const res = await user.save()
    console.log(res);
}


makeUser();
addAddress('62739e156ef8a5cfa23f47d7');