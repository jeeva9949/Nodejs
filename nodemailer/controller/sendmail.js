// const nodemailer = require("nodemailer");

// const sendMail = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();
//   let transporter = await nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "cayla72@ethereal.email",
//       pass: "2FExdWsX3mkGxbzF9B",
//     },
//   });
//   let info = await transporter.sendMail({
//     from: '"Vinod Thapa 👻" <thapa@gmail.com>', // sender address
//     to: "iam@gmail.com", // list of receivers
//     subject: "Hello Thapa", // Subject line
//     text: "Hello YT Thapa", // plain text body
//     html: "<b>Hello YT Thapa</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   res.json(info);
// };

// module.exports = sendMail;


const nodemailer = require("nodemailer")
const sendMail = async(req,res) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "elvie.wolf52@ethereal.email",
      pass: "dDMskMgjfzCd3pPvsd",
    },
  });
  let info = await transporter.sendMail({
    from: 'jeeevananda 👻" <jeeva@gmail.com>', // sender address
    to: "nandha@gmail.com", // list of receivers
    subject: "Hello nandha", // Subject line
    text: "testing email nandha ", // plain text body
    html: "<b>Hello nandha how are you</b>", // html body
  });
  res.json(info)
}
module.exports = sendMail