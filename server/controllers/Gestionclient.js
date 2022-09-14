import Gestion from "../models/Gestionclientmodel.js";
import pkg from "sequelize";
export const getGestion = async(req, res) => {
    try {
        const gestionclient = await Gestion.findAll({
            attributes:['id','raison','collaborateur','matricule','ville','rue','num','code_postale','activite','situation_fiscale','typeclient','adress','tel','fax','email']
        });
        res.json(gestionclient);
    } catch (error) {
        console.log(error);
    }
}
export const Adgestion = async(req, res) => {
    const { id } = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
    const { raison } = req.body;
   if(!raison)  return res.status(400).json({msg: " Champ obligatoire"});
   const { collaborateur } = req.body;
   if(!collaborateur)  return res.status(400).json({msg: " Champ obligatoire"});
   const { matricule } = req.body;
   if(!matricule)  return res.status(400).json({msg: " Champ obligatoire"});
   const { ville } = req.body;
   if(!ville)  return res.status(400).json({msg: " Champ obligatoire"});
   const { rue } = req.body;
   if(!rue)  return res.status(400).json({msg: " Champ obligatoire"});
   const { num } = req.body;
   if(!num)  return res.status(400).json({msg: " Champ obligatoire"});
   const { code_postale } = req.body;
   if(!code_postale)  return res.status(400).json({msg: " Champ obligatoire"});
   const { activite} = req.body;
   if(!activite)  return res.status(400).json({msg: " Champ obligatoire"});
   const { situation_fiscale} = req.body;
   if(!situation_fiscale)  return res.status(400).json({msg: " Champ obligatoire"});
   const { typeclient} = req.body;
   if(!typeclient)  return res.status(400).json({msg: " Champ obligatoire"});
   const { adress } = req.body;
   if(!adress)  return res.status(400).json({msg: " Champ obligatoire"});
   const { tel } = req.body;
   if(!tel)  return res.status(400).json({msg: " Champ obligatoire"});
   const { fax } = req.body;
   if(!fax)  return res.status(400).json({msg: " Champ obligatoire"});
   const { email } = req.body;
   if(!email)  return res.status(400).json({msg: " Champ obligatoire"});
    try {
        await Gestion.create({
            id:id,
            raison:raison,
            collaborateur:collaborateur,
            matricule:matricule,
            ville:ville,
            rue:rue,
            num:num,
            code_postale:code_postale,
            adress:adress,
            activite:activite,
            situation_fiscale:situation_fiscale,
            typeclient:typeclient,
            tel:tel,
            fax:fax,
            email:email,

           
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Suppgestion = async(req, res) => {
    const {id} = req.body;
    try {
     await Gestion.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}
export const search = async(req, res) =>{
    const { Op }=pkg;
    //const page = parseInt(req.query.page) || 0;
    //const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
   // const offset = limit * page;
    const totalRows = await Gestion.count({
        where:{
            [Op.or]: [{raison:{
                [Op.like]: '%'+search+'%'
            }}, 
            {matricule:{
                [Op.like]: '%'+search+'%'
            }},
            {collaborateur:{
                [Op.like]: '%'+search+'%'
            }},
            {id:{
                [Op.like]: '%'+search+'%'
            }},
            {ville:{
                [Op.like]: '%'+search+'%'
            }},
            {rue:{
                [Op.like]: '%'+search+'%'
            }},
            {num:{
                [Op.like]: '%'+search+'%'
            }},
            {code_postale:{
                [Op.like]: '%'+search+'%'
            }},
            {adress:{
                [Op.like]: '%'+search+'%'
            }} ,
            {tel:{
                [Op.like]: '%'+search+'%'
            }},
            {fax:{
                [Op.like]: '%'+search+'%'
            }},
            {email:{
                [Op.like]: '%'+search+'%'
            }}
        ]
            
        }
    }); 
   // const totalPage = Math.ceil(totalRows / limit);
    const result = await Gestion.findAll({
        where:{
            [Op.or]: [{raison:{
                [Op.like]: '%'+search+'%'
            }}, 
            {matricule:{
                [Op.like]: '%'+search+'%'
            }},
            {collaborateur:{
                [Op.like]: '%'+search+'%'
            }},
            {id:{
                [Op.like]: '%'+search+'%'
            }},
            {ville:{
                [Op.like]: '%'+search+'%'
            }},
            {rue:{
                [Op.like]: '%'+search+'%'
            }},
            {num:{
                [Op.like]: '%'+search+'%'
            }},
            {code_postale:{
                [Op.like]: '%'+search+'%'
            }},
            {adress:{
                [Op.like]: '%'+search+'%'
            }} ,
            {tel:{
                [Op.like]: '%'+search+'%'
            }},
            {fax:{
                [Op.like]: '%'+search+'%'
            }},
            {email:{
                [Op.like]: '%'+search+'%'
            }}
        ]
        },
       // offset: offset,
       // limit: limit,
        order:[
            ['id', 'DESC']
        ]
    });
    res.json({
        result: result,
      //  page: page,
       // limit: limit,
        totalRows: totalRows,
      //  totalPage: totalPage
    });
}
export const Modifgestion = async (req, res) => {
    const { id } = req.body;
 
     const { raison } = req.body;
    
    const { collaborateur } = req.body;
    
    const { matricule } = req.body;
    
    const { ville } = req.body;
   
    const { rue } = req.body;
    
    const { num } = req.body;
   
    const { code_postale } = req.body;
    
    const { activite} = req.body;
    
    const { situation_fiscale} = req.body;
   
    const { typeclient} = req.body;
    
    const { adress } = req.body;
 
    const { tel } = req.body;

    const { fax } = req.body;

    const { email } = req.body;

    try {
        await Gestion.update({
            id:id,
            raison:raison,
            collaborateur:collaborateur,
            matricule:matricule,
            ville:ville,
            rue:rue,
            num:num,
            code_postale:code_postale,
            adress:adress,
            activite:activite,
            situation_fiscale:situation_fiscale,
            typeclient:typeclient,
            tel:tel,
            fax:fax,
            email:email,

           
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