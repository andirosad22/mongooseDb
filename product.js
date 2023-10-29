const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db').then((result)=>{
    console.log('Connect to mongodb');
}).catch((err)=>{
    console.log(err);
});

const productSchema = mongoose.Schema({
    name:{
        type : String
    },
    price: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema);

const tshirt = new Product({name: 'T Shirt Raglan', price: 50000});

tshirt.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});