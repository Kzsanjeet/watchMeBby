// add for movies add / edit / delete
const Movie = require("../schema/MoviesSchema.js")
const categories = require("../schema/FeaturedMovies.js");
const { create } = require("../schema/Admin.js");





const addMovies = async(req,res)=>{
    try {
        const{movieName,IMDB_score,Released_year,Duration,Genre,Cast,Production,type} =req.body;
        const imagePath = req.file.path;
        // console.log(movieName,IMDB_score,Released_year,Duration,Genre,Cast,Production, imagePath)

        const add = await Movie.create({
            movieName,
            IMDB_score,
            Released_year,
            Duration,
            Genre,
            Cast,
            Production,
            type,
            image:imagePath
        })
        if(!add){
            return res.status(404).json({success:false,message:"Unable to add movie"})
        }else{
            return res.status(200).json({success:true,message:"Movie added sucessfully"})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"error",error})
    }
}

const getMovie = async(req,res)=>{
    try {
        const movies = await Movie.find({}).sort({createdAt:-1})
        if(!movies){
            return res.status(404).json({success:false,message:"Unable to get the movies"})
        }else{
            return res.status(200).json({success:true, movies})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"error",error})
    }
}
const getSpecificMovie = async (req,res)=>{
    try {
        const movieId = req.params.id;
        const getSpecific = await Movie.findById({_id:movieId})
        if(!getSpecific){
            return res.status(404).json({success:false,message:"Unable to get the specific movie"})
        }else{
            return res.status(200).json({success:true,getSpecific})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"error",error})
    }
}



const delMovie = async(req,res)=>{
    try {
        const{movieId} = req.params;
        
        const del = await Movie.findByIdAndDelete({_id:movieId})
        if(!del){
            return res.status(404).json({success:false,message:"Unable to delete movie"})
        }else{
            return res.status(200).json({success:true,message:"Deleted sucessfully"})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"error",error})
    }
}

const editMovie = async(req,res)=>{
    try {
        const{movieName,IMDB_score,Released_year,Duration,Genre,Cast,Production, type} = req.body;
        const imagePath = req.file.path;
        const movieId = req.params.id

        console.log(movieName,IMDB_score,Released_year,Duration,Genre,Cast,Production, type, imagePath)
        console.log(movieId)

        const update = await Movie.findByIdAndUpdate({_id:movieId},{
            movieName,
            IMDB_score,
            Released_year,
            Duration,
            Genre,
            Cast,
            Production,
            type,
            image:imagePath
        }
        )
        if(!update){
            return res.status(404).json({success:false,message:"Unable to update movie"})
        }else{
            return res.status(200).json({success:true,message:"Edited sucessfuly"})
        }
    } catch (error) {
        // console.log(error)
        return res.status(400).json({success:false,message:"error",error})
    }
}

const getCategories = async(req,res)=>{
    try {
        const{category} = req.body;

        const get = await categories.find({category}).populate("Movie")
        if(!get){
            return res.status(404).json({success:false,message:"Unable to get the categories"})
        }else{
            return res.status(200).json({success:true, get})
        }
    } catch (error) {
        return res.status(400).json({success:false,message:"error",error})
    }
}



//add movies  (5 moives id, category)

const addFeaturedMovie = async(req,res)=>{
    try {
        const{movie1,movie2,movie3,movie4,movie5,category} = req.body;

        if(!movie1 || !movie2 || !movie3 || !movie4 || !movie5 || !category){
            return res.status(404).json({success:false,message:"All fields are required"})
        }

        const checkStatus = await categories.findOne({movieCategory:category})

        if(checkStatus){
            const update = await categories.findOneAndUpdate({movieCategory:category},{
                movie1,
                movie2,
                movie3,
                movie4,
                movie5
            
            })
            if(!update){
                return res.status(404).json({success:false,message:"Unable to updated the featured movies"})
            }else{
                return res.status(200).json({success:true,message:"Added successfully"})
            }
        }else{
            const addFeatured = await categories.create({
                movie1,
                movie2,
                movie3,
                movie4,
                movie5,
                movieCategory:category
            })
            if(!addFeatured){
                return res.status(404).json({success:false,message:"Unable to add to featured"})
            }else{
                return res.status(200).json({success:true,message:"created sucessfully"})
            }
        }
        
    } catch (error) {
        return res.status(404).json({success:false,message:"error",error})
    }
}



module.exports = {
    addMovies,
    getMovie,
    delMovie,
    editMovie,
    getCategories,
    addFeaturedMovie,
    getSpecificMovie
}