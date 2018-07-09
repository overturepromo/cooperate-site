var nodemailer = require('nodemailer');
const auth = require('./config.json');

exports.contactEmail = (name, company, email, phone, message) => {
    var transporter = nodemailer.createTransport({
      host: 'mail.overturepromo.com',
      port: 25,
      secure: false,
      ignoreTLS: true
    });
    var mailOptions = {
      from: email,
      to: 'jacobg@overturepromo.com',
      subject: 'You have a new contact request',
      html: `<h4>name:</h4> ${name} <h4>company:</h4> ${company} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>message:</h4> ${message}` 
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };


  // host: 'mail.overturepromo.com',
  // port: 25,
  // secure: false,
  // ignoreTLS: true

  // service: 'gmail',
  // auth: {
  //   user: auth.USERNAME,
  //   pass: auth.PASSWORD
  // }