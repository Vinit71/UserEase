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

//fetch data (read)

export const fetchAll = async(req, res) =>{
    try {
        const userData = await User.find();
        if(!userData){
            return res.status(404).json("User not found")
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error)
    }
}
            //fetch One user by id
export const fetchOne = async(req, res) => {
    try {
        const userId = req.params.id;
        const userData = await User.findById(userId);
        if(!userData){
            return res.status(401).json("User not exist");
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update - based upon user's id
export const updateDetails = async(req, res) => {
    try {
        const userId = req.params.id;
        const userData = await User.findById(userId);
        if(!userData){
            return res.status(401).json("User not exist")
        }

        //updation part
        const updateData = await User.findByIdAndUpdate(userId, req.body, {new: true})
        res.status(200).json(updateData);
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete
export const removeUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const userExists = await User.findById(userId);
        if(!userExists){
            return res.status(404).json("User do not exists")
        }

        //Deletion part
        await User.findByIdAndDelete(userId)
        res.status(200).json("User removed successfully");
    } catch (error) {
        res.status(500).json(error)
    }
}

