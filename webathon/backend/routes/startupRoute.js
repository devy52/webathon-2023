import { Router } from "express";
import { createStartup, deleteStartupById, getAllStartups, getStartupById, updateStartupById } from "../controllers/startup.js";


const StartupRouter = Router();
StartupRouter.post('/',createStartup);
StartupRouter.get('/',getAllStartups);
StartupRouter.get('/:id',getStartupById);
StartupRouter.put('/:id',updateStartupById);
StartupRouter.delete('/:id',deleteStartupById);


export default StartupRouter