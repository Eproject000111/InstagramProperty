const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  console.log('kkkkk')
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/location", (req,res)=>{
  const { latitude, longitude } = req.body;
  console.log("Location Received:");
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log('New Date:', new Date())
  console.log(`Google Maps: https://maps.google.com/?q=${latitude},${longitude}`);
  res.send("OK");
});

app.listen(3000, ()=>console.log("Server running on port 3000"));