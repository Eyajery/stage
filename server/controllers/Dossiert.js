import Dossiert from "../models/Dossiermodalt.js";
import Dossier from "../models/Dossiermodal.js";

   
export const getdossiert = async(req, res) => {
    try {
        const dossiert = await Dossiert.findAll({
            attributes:['id','num_affaire','emplacement','client','tel','mission','adversaire','reste','cin','email','adress']
        });
        res.json(dossiert);
    } catch (error) {
        console.log(error);
    }
}




export const Adddossiert= async(req, res) => {
   const {id,num_affaire,emplacement,client,tel,mission,adversaire,reste,cin,adress,email} = req.body;
  
    try {
        await Dossiert.create({
            id:id,
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
        })
    } catch (error) {
        console.log(error);
        
    }}