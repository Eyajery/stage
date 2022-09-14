import Timbre from "../models/Timbremodel.js";
export const gettimbre = async(req, res) => {
    try {
        const timbre = await Timbre.findAll({
            attributes:['id','lbelle','montant']
        });
        res.json(timbre);
    } catch (error) {
        console.log(error);
    }
}
export const Adtimbre = async(req, res) => {
    const { lbelle } = req.body;
    const {montant}=req.body;
   if(!lbelle) { return res.status(400).json({msg: " Champ obligatoire"});}
   if(!montant) { return res.status(400).json({msg: " Champ obligatoire"});}
    try {
        await Timbre.create({
            lbelle:lbelle,
            montant:montant,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Supptimbre = async(req, res) => {
    const {id} = req.body;
    try {
     await Timbre.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Modiftimbre = async (req, res) => {
    const {id, lbelle,montant} = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!lbelle)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!montant)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Timbre.update({
         id:id,
        lbelle:lbelle,
        montant:montant,
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