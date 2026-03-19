const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let songs = [];

app.get("/", (req,res)=>{
res.send("RockVault API Running 🤘");
});

app.get("/songs", (req,res)=>{
res.json(songs);
});

app.post("/add-song",(req,res)=>{
songs.push(req.body);
res.send("Song Added");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
console.log("Server Running on port " + PORT);
});
