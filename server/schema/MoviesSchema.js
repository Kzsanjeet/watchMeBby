//this schema is used to add movies to the database
const mongoose = require("mongoose");

const addMovieSchema = new mongoose.Schema({
    movieName: {
         type: String,
          required: true 
        },
    IMDB_score: { 
        type: Number,
         required: true 
        },
    Released_year: { 
        type: Date, 
        required: true 
    },
    Duration: { 
        type: Number, 
        required: true
     }, 
    Genre: { 
        type: String, 
        required: true 
    },
    Cast: { 
        type: String, 
        required: true 
    },
    Production: { 
        type: String,
         required: true 
        }, 
    image:{
        type:String,
        required:true
        },
    type:{
        type:String,
        enum:["Movie","TV-Show","Series"],
        required:true
    },
    like:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{timestamps:true}
);

const Movies = mongoose.model("Movies", addMovieSchema); 

module.exports = Movies;
