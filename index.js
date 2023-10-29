const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db').then((result)=>{
    console.log('Connect to mongodb');
}).catch((err)=>{
    console.log(err);
});

const movieSchema = new mongoose.Schema({
    title: String,
    genre : String,
    director : String,
    year: Number,
    rating: Number
});
const Movie = mongoose.model('Movie', movieSchema);
Movie.insertMany([
    {
        "title": "Black Panther",
        "genre": "Action",
        "director": "Ryan Coogler",
        "year": 2017,
        "rating": 9.0
    },
    {
        "title": "Black Panther",
        "genre": "Action",
        "director": "Ryan Coogler",
        "year": 2020,
        "rating": 8.3
    },
    {
        "title": "Black Panther",
        "genre": "Action",
        "director": "Ryan Coogler",
        "year": 2019,
        "rating": 6.3
    },
    {
        "title": "Black Panther",
        "genre": "Action",
        "director": "Ryan Coogler",
        "year": 2017,
        "rating": 9.3
    }
]).then((result)=>{
    console.log('it works');
    // console.log(result);
}).catch((err)=>{
    console.log(err);
});

// find movie berdasarkan tahun 
// Movie.find({year: {$gt:2019}}).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });

// find by id
// Movie.findOne({_id:"6538a8c2ffc09259171fd20a"}).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });



// movie.save();
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));