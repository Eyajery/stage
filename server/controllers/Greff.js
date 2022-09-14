import Greffier from "../models/Greffiermodel.js";


export const getGreffier = async(req, res) => {
    try {
        const greffier = await Greffier.findAll({
            attributes:['id','nom','prenom','adresse','cin','tel']
        });
        res.json(greffier);
    } catch (error) {
        console.log(error);
    }
}

export const Addgreffier = async(req, res) => {
    const { nom, prenom, adresse, cin,tel } = req.body;
   if(!nom)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!prenom) return res.status(400).json({msg: " Champ obligatoire"});
   if(!adresse) return res.status(400).json({msg: " Champ obligatoire"});
   if(!cin) return res.status(400).json({msg: " Champ obligatoire"});
   if(!tel) return res.status(400).json({msg: " Champ obligatoire"});

    try {
        await Greffier.create({
            nom: nom,
            prenom: prenom, adresse: adresse, cin:cin, tel:tel,
           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Suppgreffier = async(req, res) => {
    const {id} = req.body;
    try {
     await Greffier.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Modifgreffier = async (req, res) => {
    const { id,nom, prenom, adresse, cin,tel } = req.body;
    
    try {
        await Greffier.update({
            id:id,
            nom: nom,
            prenom: prenom, adresse: adresse, cin:cin, tel:tel,
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

