
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cohere from "cohere-ai";
import routerTranslate from "../routes/translate.js";

export default class Server{
    app: express.Application
    port: string
    paths: Record<string, string>
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths={
            translate: "/api/translate"
        }
        this.initCohere();
        this.middlewares();
        this.routes();
        this.listen();
    }

    initCohere(){
        cohere.init(process.env.API_KEY_COHERE);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.paths.translate, routerTranslate);
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log("El servidor esta activo en el puerto", this.port);
        })
    }
}