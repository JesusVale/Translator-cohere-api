import {Request, Response, NextFunction} from 'express';
import { SUPPORTED_LANGUAGES } from '../constants.js';

export default function validarLenguaje(req:Request, res: Response, next: NextFunction){
    const {from, to} = req.query;

    const keys = Object.keys(SUPPORTED_LANGUAGES);
    if( typeof from === "string" && !keys.includes(from) && from !== "auto"){
        return res.status(406).json({
            error: "El Lenguaje From no es válido"
        })
    }
    if( typeof to === "string" && !keys.includes(to)){
        return res.status(406).json({
            error: "El Lenguaje to no es válido"
        })
    }

    next();
    
}