var nodemailer = require('nodemailer');
var mail = require('nodemailer').mail;

  exports.contactEmail = (name, company, email, phone, message) => {
    var transporter = nodemailer.createTransport({
        host: 'mail.overturepromo.com',
        port: 587,
        secure: false,
        ignoreTLS: true
      });
    var mailOptions = {
      from: email,
      to: 'media@overturepromo.com, jacobg@overturepromo.com', //hr@overturepromo.com 
      subject: 'You have a new contact request',
      html: `<h4>name:</h4> ${name} <h4>company:</h4> ${company} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>message:</h4> ${message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

  exports.applyEmail = (position, first, last, email, phone, movies, coverLetter, resume) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        },
    });
    var mailOptions = {
      from: email,
      to: 'hr@overturepromo.com, jacobg@overturepromo.com',
      subject: `You have a new application for ${position}`,
      html: `<h4>First:</h4> ${first} 
             <h4>Last:</h4> ${last}
             <h4>Email:</h4> ${email} 
             <h4>Phone:</h4> ${phone} 
             <h4>Movies:</h4> ${movies}
             <h4>Cover Letter</h4> ${coverLetter} `,
      attachments: [{
        href: resume
      }]
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };


  // ORIGINALS!!

  // exports.contactEmail = (name, company, email, phone, message) => {
  //   var transporter = nodemailer.createTransport({
  //         service: 'gmail',
  //         secure: true,
  //         auth: {
  //           user: process.env.MAIL_USER,
  //           pass: process.env.MAIL_PASS
  //         },
  //     });
  //     var mailOptions = {
  //       from: email,
  //       to: 'media@overturepromo.com, jacobg@overturepromo.com', //hr@overturepromo.com 
  //       subject: 'You have a new contact request',
  //       html: `<h4>name:</h4> ${name} <h4>company:</h4> ${company} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>message:</h4> ${message}`,
  //     };
  //     transporter.sendMail(mailOptions, function (error, info) {
  //       if (error) {
  //         console.log('error is ' + error);
  //       } else {
  //         console.log('Email sent: ' + info.response);
  //       }
  //     });
  //   };

  // exports.applyEmail = (position, first, last, email, phone, movies, coverLetter, resume) => {
  //   var transporter = nodemailer.createTransport({
  //       service: 'gmail',
  //       secure: true,
  //       auth: {
  //         user: process.env.MAIL_USER,
  //         pass: process.env.MAIL_PASS
  //       },
  //   });
  //   var mailOptions = {
  //     from: email,
  //     to: 'jacobg@overturepromo.com', //hr@overturepromo.com
  //     subject: `You have a new application for ${position}`,
  //     html: `<h4>First:</h4> ${first} 
  //            <h4>Last:</h4> ${last}
  //            <h4>Email:</h4> ${email} 
  //            <h4>Phone:</h4> ${phone} 
  //            <h4>Movies:</h4> ${movies}
  //            <h4>Cover Letter</h4> ${coverLetter} `,
  //     attachments: [{
  //       href: resume
  //     }]
  //   };
  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log('error is ' + error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  // };

  // USING OVERTURES OUTLOOK

  // exports.contactEmail = (name, company, email, phone, message) => {
  // var transporter = nodemailer.createTransport({
  //     host: 'mail.overturepromo.com',
  //     port: 587,
  //     secure:false,
  //     ignoreTLS:true
  //   });
  //   var mailOptions = {
  //     from: email,
  //     to: 'jacobg@overturepromo.com', //hr@overturepromo.com 
  //     subject: 'You have a new contact request',
  //     html: `<h4>name:</h4> ${name} <h4>company:</h4> ${company} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>message:</h4> ${message}`,
  //   };
  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log('error is ' + error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  // };