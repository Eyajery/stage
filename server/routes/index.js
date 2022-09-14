import express from "express";
import { getUsers, Register, Login ,Addutil,getutil,Supputil,Modifutil,Logout} from "../controllers/Users.js";
import {getparamgeneral,  Modifparamg, Suppparamg, getId} from '../controllers/Paramgeneral.js';
import {getGreffier, Addgreffier, Suppgreffier,Modifgreffier} from '../controllers/Greff.js';
import { getEmpdossier,Addossier,Suppdossier,Modifdossier } from "../controllers/Empdossier.js";
import { gettypedossier,Adtypedossier,Supptypedossier,Modiftypedossier } from "../controllers/Typedossier.js";
import { gettimbre,Adtimbre,Supptimbre,Modiftimbre} from "../controllers/Timbre.js";
import { getrecette,Adrecette, Supprecette,Modifrecette } from "../controllers/Recfinance.js";
import { getphoto,Modifphoto,Suppphoto,photocopie } from "../controllers/Photocopie.js";
import { getGestion,Adgestion ,Suppgestion, search, Modifgestion} from "../controllers/Gestionclient.js";
import { Addcollab, getcollab, Modifcollab, Suppcollab } from "../controllers/Collaborateur.js";
import {  Modiftransport, transportmontant, Supptransport, gettransport} from "../controllers/Transport.js";
import { Addprimegreffier, getPrimegreffier, Modifprimegreffier, Suppprimegreffier, } from "../controllers/Primegreffier.js";
import { Addtrib, gettrib, Modiftrib, Supptrib } from "../controllers/Tribunaux.js";
import { Adhono, gethono, Modifhono, Supphono } from "../controllers/Honoraire.js";
import { Addadmi, getadmi, Modifadmi, Suppadmi } from "../controllers/Administration.js";

import { Addadversaire, getadversaire, Suppadversaire } from "../controllers/Adversaire.js";
import { getdossier ,Adddossier, searchdossier, Supdossier, Modiftachedossier, Modifddossier} from "../controllers/Dossier.js"
import { Addemandeur, getdemandeur, Suppdemandeur } from "../controllers/Demandeur.js";
import { Adreglement, getreglement, Suppreglement} from "../controllers/Réglement.js";
import { Addtache, Addtaches, gettache, SuppTache } from "../controllers/Taches.js";
import { Archiver } from "../controllers/Archive.js";
import { Addfacture, getFacture, Modifemail, sendMail,upload } from "../controllers/Facture.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { Adddossiert, getdossiert } from "../controllers/Dossiert.js";

const router = express.Router();
//users
router.get('/users', verifyToken,getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/getutil',getutil);
router.post('/addutil', Addutil);
router.post('/supputil', Supputil);
router.post('/modifutil', Modifutil);

//empdossier

router.get('/empdossier',getEmpdossier);
router.post('/addossier', Addossier);
router.post('/supdossier', Suppdossier);
router.post('/modifdossier', Modifdossier);
//typedossier
router.get('/typedossier',gettypedossier);
router.post('/adtypedossier', Adtypedossier);
router.post('/suptypedossier', Supptypedossier);
router.post('/modiftypedossier', Modiftypedossier);
//timbre
router.get('/timbre',gettimbre);
router.post('/adtimbre', Adtimbre);
router.post('/suptimbre', Supptimbre);
router.post('/modiftimbre', Modiftimbre);
//recette
router.get('/recette',getrecette);
router.post('/adrecette', Adrecette);
router.post('/suprecette', Supprecette);
router.post('/modifrecette', Modifrecette);
//photo
router.get('/photocopie',photocopie);
router.post('/adphoto', Modifphoto);
router.post('/suppparamg', Suppphoto);
router.get('/getphoto',getphoto);
//gestion
router.get('/gestion',getGestion);
router.post('/adgestion', Adgestion);
router.post('/supgestion', Suppgestion);
router.post('/modifgestion',Modifgestion);
router.get('/search', search);
//parametres générales
router.get('/paramgeneral',getparamgeneral);
router.post('/addparamg', Modifparamg);
router.post('/suppparamg', Suppparamg);
router.get('/getid',getId);
//Greffier
router.get('/greffier', getGreffier);
router.post('/addgreffier', Addgreffier);
router.post('/suppgreffier', Suppgreffier);
router.post('/modifgreffier', Modifgreffier);
//collab
router.get('/getcollab',getcollab);
router.post('/addcollab', Addcollab);
router.post('/suppcollab', Suppcollab);
router.post('/modifcollab', Modifcollab);
//transport
router.get('/transport',transportmontant);
router.post('/adtransport',Modiftransport);
router.post('/supptransport', Supptransport);
router.get('/gettransport',gettransport);
//prime greffier
router.get('/primegreff', getPrimegreffier);
router.post('/addprimegreff', Addprimegreffier);
router.post('/suppprimegreff', Suppprimegreffier);
router.post('/modifprimegreff', Modifprimegreffier);
//trib
router.get('/gettrib', gettrib);
router.post('/adtrib', Addtrib);
router.post('/suptrib', Supptrib);
router.post('/modiftrib', Modiftrib);
//honoraire
router.get('/gethono', gethono);
router.post('/adhono', Adhono);
router.post('/suphono', Supphono);
router.post('/modifhono', Modifhono);
//administration
router.get('/getadmi', getadmi);
router.post('/addadmi', Addadmi);
router.post('/suppadmi', Suppadmi);
router.post('/modifadmi', Modifadmi);
//demandeur
router.get('/demandeur', getdemandeur);
router.post('/addemandeur', Addemandeur);
router.post('/suppdemandeur', Suppdemandeur);
//réglement
router.get('/getreglement', getreglement);
router.post('/adreglement', Adreglement);
router.post('/suppreglement', Suppreglement);
//Adversaire
router.get('/adversaire', getadversaire);
router.post('/addadversaire', Addadversaire);
router.post('/suppadversaire', Suppadversaire);
//Recherche Dossier
router.get('/getdossier',getdossier);
router.post('/adddossier',Adddossier);
router.get('/searchdossier', searchdossier);
router.post('/modifddossier', Modifddossier);
router.post('/suppdossier', Supdossier);
router.post('/modiftachedossier',Modiftachedossier);
//Recherche Dossiert
router.get('/getdossiert',getdossiert);
router.post('/adddossiert',Adddossiert);

//Taches
router.get('/taches',gettache );
router.post('/addtache', Addtache);
router.post('/addtaches', Addtaches);
router.post('/supptache', SuppTache);
//Archiver dossier
router.post('/archive',Archiver);
//facture
router.get('/facture',getFacture);
router.post('/addfacture', Addfacture);
router.post('/sendmail',upload.single('myfile'),sendMail);
//email
router.post('/modifemail', Modifemail);
export default router;