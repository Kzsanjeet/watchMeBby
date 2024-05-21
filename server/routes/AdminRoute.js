//for all the routes for the admin
const {
    getUserData,
    deleteUser
} = require("../controllers/LoginRegister")

const express = require("express")
const adminRoute = express.Router()

adminRoute.route("/get-users").get(getUserData)
adminRoute.route("/delete-user/:id").delete(deleteUser)

module.exports = adminRoute