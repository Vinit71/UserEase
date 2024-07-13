import User from "../models/user.model.js"

//create User
export const create = async(req, res)=> {

    try {
        const userData = new User(req.body);
        if(!userData){
            return res.status(400).json("User's data not found");
        }
    
        const saveData = await userData.save()
        res.status(200).json(saveData);
    } catch (error) {
        res.status(500).json(error);
    }
}


