import Tirbunaux from "../models/Tirbunauxmodel.js";
export const gettrib = async(req, res) => {
    try {
        const tribunaux= await Tirbunaux.findAll({
            attributes:['id','lieux']
        });
        res.json(tribunaux);
    } catch (error) {
        console.log(error);
    }
}
export const Addtrib = async(req, res) => {
    const { lieux } = req.body;
   if(!lieux)  return res.status(400).json({msg: " Champ obligatoire"});

    try {
        await Tirbunaux.create({
            lieux: lieux,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Supptrib= async(req, res) => {
    const {id} = req.body;
    try {
     await Tirbunaux.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}


export const Modiftrib = async (req, res) => {
    const {lieux} = req.body;
   
    if(!lieux)  return res.status(400).json({msg: " Champ obligatoire"});
    
   
    try {
        await Tirbunaux.update({
 
         lieux:lieux,
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