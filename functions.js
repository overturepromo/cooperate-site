var nodemailer = require('nodemailer');
var mail = require('nodemailer').mail;

  exports.contactEmail = (name, company, email, phone, message) => {
    var transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: true,
          auth: {
            type: 'OAuth2',
            user: process.env.OAUTH_USER,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENTSECRET,
            refreshToken: process.env.OAUTH_REFRESHTOKEN,
            accessToken: process.env.OAUTH_ACCESSTOKEN,
          },
      });
    var mailOptions = {
      from: email,
      to: 'media@overturepromo.com', //hr@overturepromo.com 
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
          type: 'OAuth2',
          user: process.env.OAUTH_USER,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENTSECRET,
          refreshToken: process.env.OAUTH_REFRESHTOKEN,
          accessToken: process.env.OAUTH_ACCESSTOKEN,
        },
    });
    var mailOptions = {
      from: email,
      to: 'christinan@overturepromo.com, jacobg@overturepromo.com, glendaD@overturepromo.com',
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

  exports.quoteEmail = (sku, first, last, email, phone, date ) => {
    var transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: true,
          auth: {
            type: 'OAuth2',
            user: process.env.OAUTH_USER,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENTSECRET,
            refreshToken: process.env.OAUTH_REFRESHTOKEN,
            accessToken: process.env.OAUTH_ACCESSTOKEN,
          },
      });
    var mailOptions = {
      from: email,
      to: 'jacobg@overturepromo.com', //media@overturepromo.com 
      subject: `You have a new quote request for ${sku}`,
      html: `<h4>Sku</h4> ${sku} <h4>first:</h4> ${first} <h4>last:</h4> ${last} <h4>email:</h4> ${email} <h4>phone:</h4> ${phone} <h4>need by date:</h4> ${date}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('error is ' + error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };
