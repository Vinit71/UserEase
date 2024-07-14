import {Router} from "express"
import { create, fetchAll, fetchOne, removeUser, updateDetails } from "../controller/userControler.js";

const route = Router();

//route for create user
route.post("/create", create)
route.get("/fetchAll", fetchAll)
route.get("/fetchOne/:id", fetchOne)    //based upon user's id
route.put("/updateDetails/:id", updateDetails)  //based upon user's id
route.delete("/deleteUser/:id", removeUser) //based upon user's id
export default route;