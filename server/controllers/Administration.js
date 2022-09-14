import Administration from "../models/Administrationmodel.js";


   
export const getadmi = async(req, res) => {
    try {
        const administration= await Administration.findAll({
            attributes:['id','nom','lundi','mardi','mercredi','jeudi','vendredi','samedi','idtrib']
        });
        res.json(administration);
    } catch (error) {
        console.log(error);
    }
}

export const Suppadmi = async(req, res) => {
    const {id} = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
     await Administration.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}


export const Modifadmi = async (req, res) => {
    const {nom,lundi,mardi,mercredi,jeudi,vendredi,samedi } = req.body;
    if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!lundi)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!mardi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!mercredi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!jeudi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!vendredi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!samedi)  return res.status(400).json({msg: " Champ obligatoire"});
    
    try {
        await Administration.update({
            nom:nom,
            lundi:lundi,
            mard:mardi,
            mercredi:mercredi,
            jeudi:jeudi,
            vendredi:vendredi,
            samedi:samedi,
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
export const Addadmi = async(req, res) => {
   const {nom,lundi,mardi,mercredi,jeudi,vendredi,samedi,idtrib} = req.body;
     if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!lundi)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!mardi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!mercredi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!jeudi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!vendredi)  return res.status(400).json({msg: " Champ obligatoire"});
    if(!samedi)  return res.status(400).json({msg: " Champ obligatoire"});
  
    try {
        await Administration.create({
    
            nom:nom,
            lundi:lundi,
            mardi:mardi,
            mercredi:mercredi,
            jeudi:jeudi,
            vendredi:vendredi,
            samedi:samedi,
            idtrib:idtrib,
            
        });
 res.json({msg: "addision faite"});
    } catch (error) {
        console.log(error);
    }}





