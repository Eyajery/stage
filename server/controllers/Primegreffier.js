import Primegreffier from "../models/PrimeGreffmodel.js";


export const getPrimegreffier = async(req, res) => {
    try {
        const primegreffier = await Primegreffier.findAll({
            attributes:['id','libelle','montant','impot','mensuelle']
        });
        res.json(primegreffier);
    } catch (error) {
        console.log(error);
    }
}

export const Addprimegreffier = async(req, res) => {
    const { libelle, montant, impot, mensuelle } = req.body;
   if(!libelle)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!montant) return res.status(400).json({msg: " Champ obligatoire"});
   if(!impot) return res.status(400).json({msg: " Champ obligatoire"});
   if(!mensuelle) return res.status(400).json({msg: " Champ obligatoire"});
 

    try {
        await Primegreffier.create({
            libelle: libelle,
            montant: montant, impot: impot, mensuelle:mensuelle,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Suppprimegreffier = async(req, res) => {
    const {id} = req.body;
    try {
     await Primegreffier.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Modifprimegreffier = async (req, res) => {
    const { id,libelle, montant, impot, mensuelle } = req.body;
    
    try {
        await Primegreffier.update({
            id:id,
            libelle: libelle,
            montant: montant, impot: impot, mensuelle:mensuelle,
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

