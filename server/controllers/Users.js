import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

   
export const getutil = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','email','password','domaine']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Supputil = async(req, res) => {
    const {id} = req.body;
    if(!id)  return res.status(400).json({msg: " Champ obligatoire"});
   
    try {
     await Users.destroy({
                where: { id: id }  
        }).then
        res.json({msg: "suppresssion faite"});
    } catch (error) {
        console.log(error);
    }
}


export const Modifutil = async (req, res) => {
    const {email, password,domaine } = req.body;
  
    try {
        await Users.update({
          email:email,
          domaine:domaine,
          password:password,
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






export const Addutil = async(req, res) => {
   const {email, password,domaine } = req.body;
   if(!email)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!password)  return res.status(400).json({msg: " Champ obligatoire"});
   if(!domaine)  return res.status(400).json({msg: " Champ obligatoire"});
    
  /*  const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);*/
    
    try {
        await Users.create({
            email:email,
            password:password,
            domaine:domaine,
            
        });
 res.json({msg: "addision faite"});
    } catch (error) {
        console.log(error);
    }}
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','nom','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { nom,prenom,domaine, email, password, confPassword } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const lowercaseRegex = /(?=.*[a-z])/;
    const uppercaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;
    if(password !== confPassword) return res.status(400).json({msg: " Mot de passe  ne pas conforme"});
     if (!regex.test(email)) return res.status(400).json({msg: "Ce n est pas un format d email valide "});
      if (password.length < 4)  return res.status(400).json({msg:"Le mot de passe doit comporter plus de 4 caracteres"});
       if (password.length > 10) return res.status(400).json({msg: "Le mot de passe ne peut pas depasser plus de 10 caracteres"});
        if (!lowercaseRegex.test(password)) return res.status(400).json({msg:"une minuscule obligatoire !"});
         if (!uppercaseRegex.test(password)) return res.status(400).json({msg:"une majscule obligatoire !"});
          if (!numericRegex.test(password)) return res.status(400).json({msg:"un seul numero requis !"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            nom: nom,
            prenom:prenom,
            domaine:domaine,
            email: email,
            password: hashPassword
        });
        res.json({msg: "inscription faite"});
    } catch (error) {
        console.log(error);
    }
}
export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email,
              
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: " Verifier votre mot de passe "});
        const userId = user[0].id;
        const nom = user[0].nom;
        const prenom = user[0].prenom;
        const domaine = user[0].domaine;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, nom, email,domaine,prenom}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, nom, prenom,domaine,prenom}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
       
        res.status(404).json({msg:"Vous n'avez pas un compte"});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const nom = user[0].nom;
            const prenom = user[0].prenom;
            const domaine = user[0].domaine;
           
            const email = user[0].email;
            const accessToken = jwt.sign({userId, nom, prenom,domaine,email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}