import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config() //PORT and URL 
