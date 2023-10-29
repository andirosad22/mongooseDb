const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db').then((result)=>{
    console.log('Connect to mongodb');
}).catch((err)=>{
    console.log(err);
});

const productSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    brand:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required : true,
        min: 0
    },
    color:{
        type: String,
        required: true
    },
    size:[{
        type: String,
        required: true,
        maxLength: 150 
    }],
    conditio: {
        type: String,
        enum: ['baru', 'bekas'],
        default : 'baru'
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    avaibility:{
        online: {
            type: Boolean,
            required: true
        },
        offline: {
            type: Boolean,
            required: true
        }
    }
})

const Product = mongoose.model('Product', productSchema);

const tshirt = new Product({name: 'T Shirt Raglan', price: 50000});

tshirt.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});