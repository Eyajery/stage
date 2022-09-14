import Paramgeneral from "../models/Paramgeneral.js";
export const getparamgeneral = async(req, res) => {
    const {last_id}= req.body;
    try {
        const paramg = await Paramgeneral.findAll({
            attributes:['id','timbrefiscale','tva'],
            where: {id:1}
    
        });
        res.json(paramg);
    } catch (error) {
        console.log(error);
    }
}
/*export const Addparamg = async(req, res) => {
    const { timbrefiscale } = req.body;
    const { tva } = req.body;
   if(!timbrefiscale) { return res.status(400).json({msg: " Champ obligatoire"});}
   if(!tva) { return res.status(400).json({msg: " Champ obligatoire"});}

    try {
        await Paramgeneral.create({
           timbrefiscale,
            tva
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}*/
export const Modifparamg= async(req, res) => {
    const { timbrefiscale,tva } = req.body;
    if(!timbrefiscale) { return res.status(400).json({msg: " Champ obligatoire"});}
    if(!tva) { return res.status(400).json({msg: " Champ obligatoire"});}
    try {
        await Paramgeneral.update({
            timbrefiscale:timbrefiscale,
            tva:tva,
        },
        {where: {id:1} });
        
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Suppparamg = async(req, res) => {
    try {
     await Paramgeneral.destroy({
                where: { id: 1 }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}

export const getId = async(req, res) => {
    try {
        const paramg = await Paramgeneral.findAll({
            attributes:['id'],
           
        });
        res.json(paramg);
    } catch (error) {
        console.log(error);
    }
}