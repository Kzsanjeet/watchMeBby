// add for movies add / edit / delete
const Movie = require("./MoviesSchema.js")


const addMovies = async(req,res)=>{
    try {
        const{movieName,IMDB_score,Released_year,Duration,Genre,cast,production,image} =req.body;

        const add = await Movie.create({
            movieName,
            IMDB_score,
            Released_year,
            Duration,
            Genre,
            cast,
            production,
            image
        })
        if(!add){
            return res.status(404).json({sucess:false,message:"Unable to add movie"})
        }else{
            return res.status(200).json({scuess:true,message:"Movie added sucessfully"})
        }
    } catch (error) {
        return res.status(400).json({scuess:false,message:"error",error})
    }
}

module.exports = addMovies