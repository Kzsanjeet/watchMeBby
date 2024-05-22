const express = require("express");
const app = express();
const router = require('./routes/authenticationRoute')
const adminRoute = require('./routes/AdminRoute')
const userRoute = require('./routes/UserRoute')
const routeForBoth = require('./routes/Route')
const cors = require("cors");
const connectDb = require("./ConnectDB");
require("dotenv").config();

connectDb(); 

const PORT = 4000;


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());

//routes
app.use("/", router); 
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/both", routeForBoth);

app.use("/uploads", express.static('uploads'));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
