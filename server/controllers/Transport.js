import Transport from "../models/Transportmodel.js";


/*export const getmontant = async(req, res) => {
    try {
        const transport = await Transport.findAll({
            attributes:['id','montant']
        });
        res.json(transport);
    } catch (error) {
        console.log(error);
    }
}
export const admontant = async(req, res) => {
    const { montant } = req.body;
   if(!montant) { return res.status(400).json({msg: " Champ obligatoire"});}
   
    try {
        await Transport.create({
           montant:montant,
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}*/

export const transportmontant= async(req, res) => {
    
    try {
        const transport = await Transport.findAll({
            attributes:['id','montant'],
            where: {id:1}
    
        });
        res.json(transport);
    } catch (error) {
        console.log(error);
    }
}
export const Modiftransport= async(req, res) => {
    const { montant } = req.body;
    if(!montant) { return res.status(400).json({msg: " Champ obligatoire"});}
   
    try {
        await Transport.update({
            montant:montant,
            
        },
        {where: {id:1} });
        
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}

export const Supptransport = async(req, res) => {
    try {
     await Transport.destroy({
                where: { id: 1 }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}

export const gettransport= async(req, res) => {
    try {
        const photo= await Photocopie.findAll({
            attributes:['id'],
           
        });
        res.json(photo);
    } catch (error) {
        console.log(error);
    }
}