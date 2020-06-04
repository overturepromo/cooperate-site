const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const fn = require("./functions.js");
const knox = require('knox');
const awsS3Url = "https://s3.amazonaws.com/overtures-resumes/";
const fs = require('fs');
var enforce = require('express-sslify');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(enforce.HTTPS({ trustProtoHeader: true }));

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

//amazon s3 bucket storage
const client = knox.createClient({
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET,
  bucket: 'overtures-resumes'
});




//api calls
app.post('/contact', (req, res) => {
  res.send();
  fn.contactEmail(req.body.name, req.body.company, req.body.email, req.body.phone, req.body.message)
    //Right here we will want to be able to send an email to me of what the actual error was via nodmailer with my email
})

app.post('/apply', upload.single('selectedFile'), (req, res) => {
  const s3Request = client.put(req.file.filename, {
    'Content-Type': req.file.mimetype,
    'Content-Length': req.file.size,
    'x-amz-acl': 'public-read'
  });
  const amazonFile = awsS3Url + req.file.filename
  const readStream = fs.createReadStream(req.file.path);
  readStream.pipe(s3Request);
  res.send()
  fn.applyEmail(req.body.position, req.body.first, req.body.last, req.body.email, req.body.phone, req.body.movies, req.body.coverLetter, amazonFile)
})

app.post('/quote', (req, res) => {
  res.send();
  fn.quoteEmail(req.body.sku, req.body.first, req.body.last, req.body.email, req.body.phone, req.body.date, req.body.quantity)
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