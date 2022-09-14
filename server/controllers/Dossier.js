import Collab from "../models/CollabModel.js";
import Dossier from "../models/Dossiermodal.js";
import pkg from "sequelize";

   
export const getdossier = async(req, res) => {
    try {
        const dossier = await Dossier.findAll({
            attributes:['id','num_affaire','emplacement','client','tel','mission','adversaire','reste','cin','email','adress']
        });
        res.json(dossier);
    } catch (error) {
        console.log(error);
    }
}
export const Modifddossier = async (req, res) => {
    const {emplacement } = req.body;
    if(!emplacement)  return res.status(400).json({msg: " Champ obligatoire"});
    try {
        await Dossier.update({
          emplacement:emplacement,
          
     },
     {where: {id: req.body.id} });
    res.json({msg: "update faite"});
    } catch (error) {
        console.log(error);
    }
}    

export const Modiftachedossier = async (req, res) => {
    const {mission } = req.body;
   // if(!emplacement)  return res.status(400).json({msg: " Champ obligatoire"});
    try {
        await Dossier.update({
          mission:mission,
          
     },
     {where: {id: req.body.id} });
    res.json({msg: "update faite"});
    } catch (error) {
        console.log(error);
    }
}  





export const Adddossier= async(req, res) => {
   const {num_affaire,emplacement,client,tel,mission,adversaire,reste,cin,adress,email} = req.body;
 if(!num_affaire)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!emplacement)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!client)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!tel)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!mission)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!adversaire)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!reste)  return res.status(400).json({msg: " Champ obligatoire"});
    
  
    
    try {
        await Dossier.create({
           cin:cin,
           adress:adress,
           email:email,
            num_affaire:num_affaire,
            emplacement:emplacement,
            client:client,
            tel:tel,
            mission:mission,
            adversaire:adversaire,
            reste:reste,        
        });
 res.json({msg: "addision faite"});
    } catch (error) {
        console.log(error);
    }}

export const searchdossier = async(req, res) =>{
        const { Op }=pkg;
        const search = req.query.search_query || "";
        const totalRows = await Dossier.count({
            where:{
                [Op.or]: [{num_affaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {emplacement:{
                    [Op.like]: '%'+search+'%'
                }},
                {client:{
                    [Op.like]: '%'+search+'%'
                }},
                {tel:{
                    [Op.like]: '%'+search+'%'
                }},
                {mission:{
                    [Op.like]: '%'+search+'%'
                }},
                {adversaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {reste:{
                    [Op.like]: '%'+search+'%'
                }}]
            }
        }); 
        const result = await Dossier.findAll({
            where:{
                [Op.or]: [{num_affaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {emplacement:{
                    [Op.like]: '%'+search+'%'
                }},
                {client:{
                    [Op.like]: '%'+search+'%'
                }},
                {tel:{
                    [Op.like]: '%'+search+'%'
                }},
                {mission:{
                    [Op.like]: '%'+search+'%'
                }},
                {adversaire:{
                    [Op.like]: '%'+search+'%'
                }},
                {reste:{
                    [Op.like]: '%'+search+'%'
                }}]
            },
            order:[
                ['id', 'DESC']
            ]
        });
        res.json({
            result: result,
            totalRows: totalRows,
        });
    }
    export const Modifdossier = async (req, res) => {
        const {num_affaire,emplacement,client,tel,mission,adversaire,reste} = req.body;
    
        try {
            await Dossier.update({
               
            num_affaire:num_affaire,
            emplacement:emplacement,
            client:client,
            tel:tel,
            mission:mission,
            adversaire:adversaire,
            reste:reste,       
    
               
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
    export const Supdossier = async(req, res) => {
        const {id} = req.body;
       
        try {
         await Dossier.destroy({
                    where: { id: id }  
            }).then
            res.json({msg: "suppresssion faite"});
        } catch (error) {
            console.log(error);
        }
    }