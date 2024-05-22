// all the controllers for user homepage
const Categories = require("../schema/FeaturedMovies.js")


// category (eg, Featured, Trending)
const getFeaturesMoviesDetail = async(req,res) =>{
    try {
        const category = req.query.category
        
        const getMovie = await Categories.findOne({movieCategory:category})
        .populate("movie1")
        .populate("movie2")
        .populate("movie3")
        .populate("movie4")
        .populate("movie5")
       
            if(!getMovie){
                return res.status(404).json({success:false,message:"Unable to get detials"})
            }else{
                return res.status(200).json({success:true,getMovie})
            }
          
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false,message:"error",error})
    }
}


module.exports = {
    getFeaturesMoviesDetail
}