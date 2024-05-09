// this is route for the authentication (login / register) for both user and admin
const{registerAdmin, registerUser,loginAdmin} = require("./LoginRegister")
const {addMovies,getMovie,delMovie,editMovie} = require("./movies.js")
const express = require("express")
const router = express.Router()

//this part for registration and login
router.route("/register-admin").post(registerAdmin)
router.route("/register-user").post(registerUser)
router.route("/login-admin").post(loginAdmin)
router.route("/login-user").post(loginUser)

//this is for CRUD in admin panel
router.route("/get-movie").get(getMovie)
router.route("/del-movie").delete(delMovie)
router.route("/edit-movie").patch(editMovie)

//for imgage upload
// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  // Init upload
  const upload = multer({ storage });
  
  // Route to add a pet
  router.post('/add-movie/', upload.single('image'), addMovies); 