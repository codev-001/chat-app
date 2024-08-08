import User from "../models/user.model.js";

export const getUserForSidebar = async(req,res)=>{


    try {
        
    const isLoggedInUsers=req.user._id;

    const filteredUsers=await User.find({_id:{$ne:isLoggedInUsers}}).select("-password")

    res.status(200).json(filteredUsers)

    } catch (error) {
        console.error('Error arised in UserController',error.message);
    res.status(400).json({error:"Internal Server Error"})        
    }
}