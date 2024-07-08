require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS
    }
});

let mailOptions = {
    from: `"Ken" <${process.env.OUTLOOK_USER}>`, 
    to: process.env.Receiver, 
    subject: 'Hello from Node.js', 
    text: 'This is a test email sent from Node.js using Nodemailer.', // plain text body
    html: '<b>This is a test email sent from Node.js using Nodemailer.</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error.message);
    }
    console.log('Message sent: %s', info.messageId);
});
