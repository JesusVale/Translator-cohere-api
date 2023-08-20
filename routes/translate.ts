import {Router} from "express";
import { getTranslation } from "../controllers/translate.js";
import validarLenguaje from "../middlewares/validate-language.js";

const router = Router();


router.get("", [
    validarLenguaje
], getTranslation);

export default router;