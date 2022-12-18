let nodemailer = require('nodemailer')
export default function handler(req, res) {
    console.log(req.body)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'sam.rawatjee@gmail.com',
      pass: 'dpnzexzuocloxetk',
    },
    secure: true,
  });
  const mailData = {
    from: 'sam.rawatjee@gmail.com',
    to: 'rohitrawatop@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div>`
   }
   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
    
    res.status(200).json({ success:true })
  }