var nodemailer = require('nodemailer');

exports.contactEmail = (name, company, email, phone, message) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'overturepromotions@gmail.com',
        pass: 'X13Bilxzs'
      }
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


  // service: 'gmail',
  // auth: {
  //   user: auth.USERNAME,
  //   pass: auth.PASSWORD
  // }

  // host: 'mail.overturepromo.com',
  // port: 25,
  // secure: false,
  // ignoreTLS: true