const express = require("express");
const app = express();

const PORT = 4000; 

app.use(express.json());

app.use("/uploads", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => { 
    console.log(`Server is running on the port ${PORT}`);
});
