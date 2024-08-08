import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoutes= async (req,res,next)=>{

    try {
        
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized : No token founded!"})
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({error:"Unauthorized : Token Invalid!"})
        }

        const user= await User.findById(decode.userId).select("-password"); 
        if (!user){
            res.status(404).json({error:"User not found"});
        }
       
        req.user=user 
        next()

    } catch (error) {
        
        console.log("Error in protectMiddleware :",error.message)
        res.status(500).json({error:"Internal Server Error!"})

    }

}

export default protectRoutes;