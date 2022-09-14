import Adversaire from "../models/Advermodel.js";
export const getadversaire = async(req, res) => {
    try {
        const adversaire = await Adversaire.findAll({
            attributes:['id','nom','registre','adresse','adresse_designé','avocat','adresse_avocat']
        });
        res.json(adversaire);
    } catch (error) {
        console.log(error);
    }
}
export const Addadversaire= async(req, res) => {
    const { nom } = req.body;
   if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
   const { registre } = req.body;
   if(!registre)  return res.status(400).json({msg: " Champ obligatoire"});
   const { adresse } = req.body;
   if(!adresse)  return res.status(400).json({msg: " Champ obligatoire"});
   const { adresse_designé } = req.body;
   if(!adresse_designé)  return res.status(400).json({msg: " Champ obligatoire"});
   const { avocat } = req.body;
   if(!avocat)  return res.status(400).json({msg: " Champ obligatoire"});
   const { adresse_avocat } = req.body;
   if(!adresse_avocat)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Adversaire.create({
            nom:nom,
            registre: registre,
            adresse:adresse,
            adresse_designé:adresse_designé,
            avocat:avocat,
            adresse_avocat:adresse_avocat 
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Suppadversaire= async(req, res) => {
    const {nom} = req.body;
    try {
     await Adversaire.destroy({
                where: { nom: nom }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
