import User from '../models/user.model.js';
import brcypt from 'bcryptjs';

export const signup =async(req,res)=>{
    // console.log(req.body);
    const{ username ,email ,password } =req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        return  res.status(400).json({error:"All fields are required"})
    }

    const hashedPassword = await brcypt.hashSync(password,12);
    const newUser = new User({
        username :username.toLowerCase(),
        email,
        password:hashedPassword,   
    }); 

    try {
        await newUser.save();
        res.json('signup successfull')
    } catch (err) {
        res.status(500).json({error:   `Something went wrong ===>${err.message}`})
    }


   
}

