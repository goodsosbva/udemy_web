const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

    const userSchema = new Schema({
        username: String,
        age: Number
    })

    const tweetSchema = new Schema({
        text: String,
        likes: Number,
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    })

    const User = mongoose.model('User', userSchema)
    const Tweet = mongoose.model('Tweet', tweetSchema)

    // const makeTweets = async () => {
    //     // const user = new User({username: 'chickenfan', age: 61});
    //     const user = await User({ username: 'chickenfan'})
    //     const tweet2 = new Tweet({text: 'buck buck buck', likes: 7})
    //     tweet2.user = user;
    //     user.save();
    //     tweet2.save();
    // }

    // makeTweets();

    // const makeTweets = async () => {
    //     // const user = new User({username: 'chickenfan', age: 61});
    //     const user = await User({ username: 'chickenfan'})
    //     const tweet4 = new Tweet({text: 'tock tock tock', likes: 9})
    //     tweet4.user = user;
    //     user.save();
    //     tweet4.save();
    // }

    // makeTweets();

    const findTweet = async () => {
        // user은 항목이름에 해당한다.
        const t = await Tweet.find({}).populate('user')
        console.log(t)
    }

    findTweet();



