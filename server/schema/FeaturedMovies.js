// schema for FeaturedMovies / Trending / for you movies
const mongoose = require("mongoose")


const categoriesSchema = new mongoose.Schema({
    movie1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MoviesSchema"
    },
    movie2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MoviesSchema"
    },
    movie3:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MoviesSchema"
    },
    movie4:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MoviesSchema"
    },
    movie5:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MoviesSchema"
    },
    movieCategory:{
        type:String,
        enum:["Featured","Trending","ForYou"],
        required:true
    }

})

const Categories = mongoose.model("Categories",categoriesSchema)

module.exports = Categories
