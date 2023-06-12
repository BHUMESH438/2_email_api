const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEtherial = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'hilda75@ethereal.email',
      pass: 'kFWUyzynu8sG7nBJY9'
    }
  });
  let info = await transporter.sendMail({
    from: '"bhumesh 👻" <bhumesh1719@gmail.com>', // sender address
    to: 'bhumeshchinnusamy@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<h1>Hello world?</h1>' // html body
  });
  res.json(info);
};
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'bhumesh1719@gmail.com', // Change to your recipient
    from: 'bhumeshchinnusamy@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
  const info = await sgMail.send(msg);
  res.json(info);
};
module.exports = sendEmail;
