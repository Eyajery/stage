import Archive from "../models/Archivemodel.js";
   
export const Archiver = async(req, res) => {     
    const {emplacement } = req.body;
    if(!emplacement)  return res.status(400).json({msg: " Champ obligatoire"});
     try {
         await Archive.create({
             emplacement:emplacement,                   
         });
  res.json({msg: "Bien archiver"});
     } catch (error) {
         console.log(error);
     }}