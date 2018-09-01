const path = require('path');
const express = require('express');
var cors = require('cors');
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;


const corsOptions = {
  origin: 'https://tastedive.com/',
  optionsSuccessStatus: 200
}
app.use(cors());
app.options('*', cors());

app.use(express.static(publicPath));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://musicrex.herokuapp.com/");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(port, () => {
  console.log("Server is up!");
});
