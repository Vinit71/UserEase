import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import route from "./routes/user.route.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config() //PORT and URL 


const PORT = process.env.PORT || 7000;
const URL = process.env.URL;

mongoose.connect(URL).then(()=>{
    console.log("DB CONNECTED!!");

    app.listen(PORT, ()=>{
        console.log(`server is running on PORT: ${PORT}`);
    })

}).catch(error => {
    console.log(error)
}
)

app.use("/api", route)