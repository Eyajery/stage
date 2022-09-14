import Demandeur from "../models/Demandeur.js";
export const getdemandeur = async(req, res) => {
    try {
        const demandeur = await Demandeur.findAll({
            attributes:['id','nom','cin','adress','adress_designé','tel','fax','email']
        });
        res.json(demandeur);
    } catch (error) {
        console.log(error);
    }
}
export const Addemandeur= async(req, res) => {
    const { nom } = req.body;
   if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
   const { cin } = req.body;
   if(!cin)  return res.status(400).json({msg: " Champ obligatoire"});
   const { adress } = req.body;
   if(!adress)  return res.status(400).json({msg: " Champ obligatoire"});
   const { adress_designé } = req.body;
   if(!adress_designé)  return res.status(400).json({msg: " Champ obligatoire"});
   const { tel } = req.body;
   if(!tel)  return res.status(400).json({msg: " Champ obligatoire"});
   const { fax } = req.body;
   if(!fax)  return res.status(400).json({msg: " Champ obligatoire"});
   const { email} = req.body;
   if(!email)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Demandeur.create({
            nom:nom,
            cin:cin,
            adress:adress,
            adress_designé:adress_designé,
            tel:tel,
            fax:fax,
            email:email,
           

           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Suppdemandeur= async(req, res) => {
    const {nom} = req.body;
    try {
     await Demandeur.destroy({
                where: { nom: nom }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
