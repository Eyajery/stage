import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

/*app.post("/sendmail",  async (req, res) => {
	let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user:'avocata953@gmail.com', // TODO: your gmail account 
            pass:'fxhdbjgdegpaxcbm' // TODO: your gmail password
        }
    });
    let mailOptions = {
        from:'avocata953@gmail.com', // TODO: email sender
        to:'aya.eljary@ensi-uma.tn', // TODO: email receiver
        subject:'Nodemailer - Test',
        text: 'Wooohooo it works!!',
      attachments: [
            { filename: 'File.html', path: '../client/src/components/File.html' } // TODO: replace it with your own image
        ]
    };
	transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console. log('Error occurs');
        }
        return console. log('Email sent!!!');
    });
})*/

app.listen(5000, ()=> console.log('Server running at port 5000'));