import {Router} from "express"
import { create } from "../controller/userControler.js";

const route = Router();

//route for create user
route.post("/create", create)

export default route;