import Typedossier from "../models/Typedossiermodel.js";


export const gettypedossier = async(req, res) => {
    try {
        const typedossier = await Typedossier.findAll({
            attributes:['id','nomdossier']
        });
        res.json(typedossier);
    } catch (error) {
        console.log(error);
    }
}
export const Adtypedossier = async(req, res) => {
    const { nomdossier } = req.body;
   if(!nomdossier)  return res.status(400).json({msg: " Champ obligatoire"});
    try {
        await Typedossier.create({
            nomdossier: nomdossier,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Supptypedossier= async(req, res) => {
    const {id} = req.body;
    try {
     await Typedossier.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Modiftypedossier = async (req, res) => {
    const {id, nomdossier} = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!nomdossier)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Typedossier.update({
         id:id,
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