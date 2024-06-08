import { createTransport } from 'nodemailer';

const mail = async (data,mailId)=>{
    var sendermail='baskaribe@gmail.com'
    let hotelregister = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
    auth: {
        user: sendermail,
        pass: 'plat vnko swvy zipz'
      }
    })
    let info = await hotelregister.sendMail({
        from:sendermail,
        to:mailId,
        subject: "verify Gmail Account", //subject line
        text: "Your OTP is : "+data,
        html: "Your OTP is :<b>"+data+"</b> <br> OTP (One-time password) validity will expire after 2 minutes", // html body
    })
}

export {mail}