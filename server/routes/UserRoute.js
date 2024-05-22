//all route for the user
const express = require("express")
const userRoute = express.Router()

const {
    getFeaturesMoviesDetail
} = require('../controllers/UserHomepage')



// get-category-movies
userRoute.route("/get-category-movies").get(getFeaturesMoviesDetail)



module.exports = userRoute