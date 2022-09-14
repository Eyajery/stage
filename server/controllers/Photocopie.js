import Photocopie from "../models/Photocopie.js";
export const photocopie = async(req, res) => {
    
    try {
        const photo = await Photocopie.findAll({
            attributes:['id','prixphoto'],
            where: {id:1}
    
        });
        res.json(photo);
    } catch (error) {
        console.log(error);
    }
}
export const Modifphoto= async(req, res) => {
    const { prixphoto } = req.body;
    if(!prixphoto) { return res.status(400).json({msg: " Champ obligatoire"});}
   
    try {
        await Photocopie.update({
            prixphoto:prixphoto,
            
        },
        {where: {id:1} });
        
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Suppphoto = async(req, res) => {
    try {
     await Photocopie.destroy({
                where: { id: 1 }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}

export const getphoto = async(req, res) => {
    try {
        const photo= await Photocopie.findAll({
            attributes:['id'],
           
        });
        res.json(photo);
    } catch (error) {
        console.log(error);
    }
}