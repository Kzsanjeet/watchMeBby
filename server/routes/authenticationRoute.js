// this is route for the authentication (login / register) for both user and admin
const{
  registerAdmin,
  registerUser,
  loginAdmin,
  loginUser
} = require("../controllers/LoginRegister")
const {
  addMovies,
  getMovie,
  delMovie,
  editMovie
} = require("../controllers/movies")
const express = require("express")
const router = express.Router()
const multer = require('multer')

//for imgage upload
// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Assuming 'uploads' folder is in the root directory of your application
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


// Init upload
const upload = multer({ storage });

// Route to add a pet
router.post('/add-movie', upload.single('image'), addMovies); 


//this part for registration and login
router.route("/register-admin").post(registerAdmin)
router.route("/register-user").post(registerUser)
router.route("/login-admin").post(loginAdmin)
router.route("/login-user").post(loginUser)

//this is for CRUD in admin panel
router.route("/get-movie").get(getMovie)
router.route("/del-movie").delete(delMovie)
router.route("/edit-movie").patch(editMovie)



module.exports = router 