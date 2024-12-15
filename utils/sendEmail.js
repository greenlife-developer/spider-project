const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587, // 465
      auth: {
        user: "apikey", 
        pass: process.env.SENDGRID_API_KEY,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const options = {
      from: sent_from,
      to: send_to,
      replyTo: reply_to,
      subject: subject,
      html: message,
    };

    const info = await transporter.sendMail(options);
    console.log(`Email sent: ${info.response}`);
  } catch (err) {
    console.error(`Error sending email: ${err.message}`);
    throw new Error(`Error sending email: ${err.message}`);
  }
};

async function sendEmailWithAttachment(subject, message, send_to, sent_from, reply_to, attachments) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465,
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const options = {
      from: sent_from,
      to: send_to,
      replyTo: reply_to,
      subject: subject,
      html: message,
      attachments: attachments,
    };

    const info = await transporter.sendMail(options);
    console.log(`Email sent: ${info.response}`);
  } catch (err) {
    console.error(`Error sending email: ${err.message}`);
    throw new Error(`Error sending email: ${err.message}`);
  }
};

module.exports = { sendEmail, sendEmailWithAttachment };
