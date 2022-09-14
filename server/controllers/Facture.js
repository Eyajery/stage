import Facture from "../models/Facturemodel.js";
import nodemailer from "nodemailer";
import multer from 'multer';
import Email from "../models/Email.js";
var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'avocata953@gmail.com',            
      pass:'fxhdbjgdegpaxcbm'
    }
  });
 export const upload = multer({
    storage: multer.memoryStorage()
  });
export const getFacture = async(req, res) => {
    try {
        const facture = await Facture.findAll({
            attributes:['id','num_facture','emailavocat','emailclient']
        });
        res.json(facture);
    } catch (error) {
        console.log(error);
    }
}
export const Addfacture = async(req, res) => {
    const { num_facture,emailavocat,emailclient } = req.body;
  
    try {
        await Facture.create({
          num_facture:num_facture,
          emailavocat:emailavocat,
          emailclient:emailclient,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Modifemail= async(req, res) => {
  const { emailavocat,emailclient } = req.body;
  try {
      await Email.update({
        
         emailclient:emailclient,
         emailavocat:emailavocat,
      },
      {where: {id:1} });
     
      res.json({msg: "inscription faite"});
  }
   catch (error) {
      console.log(error);
  }
}

export const sendMail = async (req,res)=> {    
  const email= await Email.findAll({
    where:{
        id:1,
      
    }
});
    var mail = {
      from: "avocata953@gmail.com",
      to:email[0].emailclient,
      subject: "Sending Email using Node.js",
      text: "Voici votre facture!",
      attachments: [{
        filename: req.file.originalname,
        content: req.file.buffer
      }]

    };
     
    sender.sendMail(mail, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully: "
                     + info.response);
                     res.json({msg: "Email sent successfully: "
                     + info.response});
      }
    });
}
