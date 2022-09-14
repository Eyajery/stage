import Empdossier from "../models/Empdossiermodel.js";
export const getEmpdossier = async(req, res) => {
    try {
        const empdossier = await Empdossier.findAll({
            attributes:['id','nomdossier']
        });
        res.json(empdossier);
    } catch (error) {
        console.log(error);
    }
}
export const Addossier = async(req, res) => {
    const { nomdossier } = req.body;
   if(!nomdossier)  return res.status(400).json({msg: " Champ obligatoire"});
    try {
        await Empdossier.create({
            nomdossier: nomdossier,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Suppdossier = async(req, res) => {
    const {id} = req.body;
    try {
     await Empdossier.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}


export const Modifdossier = async (req, res) => {
    const { nomdossier} = req.body;
   
    if(!nomdossier)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Empdossier.update({
         
         nomdossier:nomdossier,
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