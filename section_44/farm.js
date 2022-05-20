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


const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     {name: 'khs dol', price: 7.77, season: 'Summer'},
//     {name: 'goddes melon', price: 5.55, season: 'Fall'},
//     {name: 'hana yuk', price: 2.22, season: 'Winter'},
// ])


const makeFarm = async () => {
    const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'})
    const melon = await Product.findOne({name:'khs dol'});
    farm.products.push(melon)
    // console.log(farm)
    await farm.save()
}

const addProduct = async () => {
    const farm = await Farm.findOne({name: 'Full Belly Farms'})
    const watermelon = await Product.findOne({name:'khs dol'});
    farm.products.push(watermelon)
    // console.log(farm)
    await farm.save()
}


Farm.findOne({name: 'Full Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm))

