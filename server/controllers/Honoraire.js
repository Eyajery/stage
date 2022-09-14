import Honoraire from "../models/Honorairemodel.js";
export const gethono = async(req, res) => {
    try {
        const honoraire = await Honoraire.findAll({
            attributes:['id','lbelle','lbelle_francais','montant']
        });
        res.json(honoraire);
    } catch (error) {
        console.log(error);
    }
}
export const Adhono = async(req, res) => {
    const { lbelle } = req.body;
    const { lbelle_francais} = req.body;
    const {montant}=req.body;
   if(!lbelle) { return res.status(400).json({msg: " Champ obligatoire"});}
   if(!lbelle_francais) { return res.status(400).json({msg: " Champ obligatoire"});}
   if(!montant) { return res.status(400).json({msg: " Champ obligatoire"});}
    try {
        await Honoraire.create({
            lbelle:lbelle,
            lbelle_francais:lbelle_francais,
            montant:montant,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Supphono = async(req, res) => {
    const {id} = req.body;
    try {
     await Honoraire.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Modifhono = async (req, res) => {
    const {id, lbelle,lbelle_francais,montant} = req.body;
    
   
    try {
        await Honoraire.update({
         id:id,
        lbelle:lbelle,
        lbelle_francais:lbelle_francais,
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