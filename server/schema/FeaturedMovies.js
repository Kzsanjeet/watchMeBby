// schema for FeaturedMovies / Trending / for you movies
const mongoose = require("mongoose")


const categoriesSchema = new mongoose.Schema({
    movie1:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies"
    },
    movie2:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies"
    },
    movie3:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies"
    },
    movie4:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies"
    },
    movie5:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies"
    },
    movieCategory:{
        type:String,
        enum:["Featured","Trending","ForYou"],
        required:true
    }

})

const Categories = mongoose.model("Categories",categoriesSchema)

module.exports = Categories
