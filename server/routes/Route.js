
// routes requies for both user and admin.
const express = require("express")
const routeForBoth = express.Router()

const {
     getSpecificMovie
} = require("../controllers/movies")

const {
    getFeaturesMoviesDetail
} = require('../controllers/UserHomepage')


routeForBoth.route("/get-specific-movie/:id").get(getSpecificMovie)
routeForBoth.route("/get-category-movies").get(getFeaturesMoviesDetail)

module.exports = routeForBoth