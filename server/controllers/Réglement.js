import Réglement from "../models/Réglementmodel.js";
export const getreglement = async(req, res) => {
    try {
        const réglement = await Réglement.findAll({
            attributes:['id','montant','type','baré','operation','banque','echeance']
        });
        res.json(réglement);
    } catch (error) {
        console.log(error);
    }
}
export const Adreglement= async(req, res) => {
    const { montant } = req.body;
   if(!montant)  return res.status(400).json({msg: " Champ obligatoire"});
   const { type} = req.body;
   if(!type)  return res.status(400).json({msg: " Champ obligatoire"});
   const { baré } = req.body;
   if(!baré)  return res.status(400).json({msg: " Champ obligatoire"});
   const { operation } = req.body;
   if(!operation)  return res.status(400).json({msg: " Champ obligatoire"});
   const { banque } = req.body;
   if(!banque)  return res.status(400).json({msg: " Champ obligatoire"});
   const { echeance } = req.body;
   if(!echeance)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Réglement.create({
           montant:montant,
           type:type,
           baré:baré,
           operation:operation,
           banque:banque,
           echeance:echeance,

           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Suppreglement= async(req, res) => {
    const {montant} = req.body;
    try {
     await Réglement.destroy({
                where: { montant: montant}  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
