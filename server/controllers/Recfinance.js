import Recettefinance from "../models/Recfinancemodel.js";


export const getrecette = async(req, res) => {
    try {
        const recette = await Recettefinance.findAll({
            attributes:['id','lbelle','montant']
        });
        res.json(recette);
    } catch (error) {
        console.log(error);
    }
}
export const Adrecette = async(req, res) => {
    const { lbelle } = req.body;
    const {montant}=req.body;
   if(!lbelle) { return res.status(400).json({msg: " Champ obligatoire"});}
   if(!montant) { return res.status(400).json({msg: " Champ obligatoire"});}
    try {
        await Recettefinance.create({
            lbelle:lbelle,
            montant:montant,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Supprecette = async(req, res) => {
    const {id} = req.body;
    try {
     await Recettefinance.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Modifrecette = async (req, res) => {
    const {id, lbelle,montant} = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!lbelle)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!montant)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Recettefinance.update({
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