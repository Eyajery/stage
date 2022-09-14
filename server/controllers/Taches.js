import Taches from "../models/Tachemodel.js";
export const gettache = async(req, res) => {
    try {
        const tache = await Taches.findAll({
            attributes:['id','tache','date_critique','date_rappel','resolu','personne_chargé','greffier','course',
        'lieux', 'service', 'date_audience', 'date_echeance']
        });
        res.json(tache);
    } catch (error) {
        console.log(error);
    }
}
export const Addtache= async(req, res) => {
    const { tache } = req.body;
   if(!tache)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_critique } = req.body;
   if(!date_critique)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_rappel } = req.body;
   if(!date_rappel)  return res.status(400).json({msg: " Champ obligatoire"});
   const { resolu} = req.body;
   if(!resolu)  return res.status(400).json({msg: " Champ obligatoire"});
   const { personne_chargé } = req.body;
   if(!personne_chargé)  return res.status(400).json({msg: " Champ obligatoire"});
   const { greffier } = req.body;
   if(!greffier)  return res.status(400).json({msg: " Champ obligatoire"});
   const { course} = req.body;
  if(!course)  return res.status(400).json({msg: " Champ obligatoire"});
   const { lieux} = req.body;
   if(!lieux)  return res.status(400).json({msg: " Champ obligatoire"});
   const { service} = req.body;
   if(!service)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_audience} = req.body;
   if(!date_audience)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_echeance} = req.body;
   if(!date_echeance)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Taches.create({
            tache:tache,
            
            date_critique:date_critique,
            date_rappel:date_rappel,
            resolu:resolu,
            personne_chargé:personne_chargé,
            greffier:greffier,
            course:course,
            lieux:lieux,
            service:service,
            date_audience:date_audience,
            date_echeance:date_echeance
      
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}



export const Addtaches= async(req, res) => {
    const { tache ,id_dossier} = req.body;
   if(!tache)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_critique } = req.body;
 //  if(!date_critique)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_rappel } = req.body;
 //  if(!date_rappel)  return res.status(400).json({msg: " Champ obligatoire"});
   const { resolu} = req.body;
 //  if(!resolu)  return res.status(400).json({msg: " Champ obligatoire"});
   const { personne_chargé } = req.body;
 //  if(!personne_chargé)  return res.status(400).json({msg: " Champ obligatoire"});

  
   const { lieux} = req.body;
  // if(!lieux)  return res.status(400).json({msg: " Champ obligatoire"});
   const { service} = req.body;
  // if(!service)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_audience} = req.body;
 //  if(!date_audience)  return res.status(400).json({msg: " Champ obligatoire"});
   const { date_echeance} = req.body;
 //  if(!date_echeance)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
        await Taches.create({
            tache:tache,
            date_critique:date_critique,
            date_rappel:date_rappel,
            resolu:resolu,
            personne_chargé:personne_chargé,
            //greffier:greffier,
            //course:course,
            lieux:lieux,
            service:service,
            date_audience:date_audience,
            date_echeance:date_echeance,
            id_dossier:id_dossier,
      
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}







export const SuppTache= async(req, res) => {
    const {tache} = req.body;
    try {
     await Taches.destroy({
                where: { tache: tache }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}