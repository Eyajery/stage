import Collab from "../models/Collabmodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

   
export const getcollab = async(req, res) => {
    try {
        const collab = await Collab.findAll({
            attributes:['id','nom','cin','ville','rue','num','code_postale','activité','tel','fax','email','matricule','mode_reglement','part','type_reglement']
        });
        res.json(collab);
    } catch (error) {
        console.log(error);
    }
}

export const Suppcollab = async(req, res) => {
    const {id} = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
     await Collab.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}


export const Modifcollab = async (req, res) => {
    const {nom,cin,ville,rue,num,code_postale,activité,tel,fax,email,matricule,mode_reglement,part,type_reglement } = req.body;
    if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!cin)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!ville)  return res.status(400).json({msg: " Champ obligatoire"});
  
    try {
        await Collab.update({
            nom:nom,
            cin:cin,
            ville:ville,
            rue:rue,
            num:num,
            code_postale:code_postale,
            activité:activité,
            tel:tel,
            fax:fax, 
            email:email,
            matricule:matricule,
            mode_reglement:mode_reglement,
            part:part,
            type_reglement:type_reglement,
     },
     {where: {id: req.body.id} });
     return res.status(201).send({ 
        user: userDetails,
        status: 200
    });
    res.json({msg: "update faite"});
    } catch (error) {
        console.log(error);
    }
}






export const Addcollab = async(req, res) => {
    const {nom,cin,ville,rue,num,code_postale,activité,tel,fax,email,matricule,mode_reglement,part,type_reglement } = req.body;
   if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!cin)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!ville)  return res.status(400).json({msg: " Champ obligatoire"});
    
  /*  const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);*/
    
    try {
        await Collab.create({
            nom:nom,
            cin:cin,
            ville:ville,
            rue:rue,
            num:num,
            code_postale:code_postale,
            activité:activité,
            tel:tel,
            fax:fax, 
            email:email,
            matricule:matricule,
            mode_reglement:mode_reglement,
            part:part,
            type_reglement:type_reglement,
        });
 res.json({msg: "addision faite"});
    } catch (error) {
        console.log(error);
    }}





