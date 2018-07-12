const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const fn = require("./functions.js");


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;



//Upload Storage function
let newFilename = ''
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});
const upload = multer({
  storage
});



//api calls
app.post('/contact', (req, res) => {
  fn.contactEmail(req.body.name, req.body.company, req.body.email, req.body.phone, req.body.message)
})

app.post('/apply', upload.single('selectedFile'), (req, res) => {
  console.log(req.body)
  res.send()
  fn.applyEmail(req.body.position, req.body.first, req.body.last, req.body.email, req.body.phone, req.body.movies, req.body.coverLetter, newFilename)
})




//react routing
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));