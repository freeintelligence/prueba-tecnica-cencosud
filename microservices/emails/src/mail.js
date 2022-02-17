const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT == 465,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMail = async (toName, toEmail, subject, text, html) => {
  let result = await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
    to: `"${toName}" <${toEmail}>`,
    subject: subject,
    text: text,
    html: html,
  });

  return result;
}

module.exports = {
  transporter,
  sendMail,
}
