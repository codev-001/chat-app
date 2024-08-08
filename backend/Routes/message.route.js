import express from "express";
import {getMessages, sendMessages} from "../Controllers/message.controller.js";
import protectRoutes from "../middleware/protectRoutes.js";

const router = express.Router()

router.get('/:id',protectRoutes,getMessages)
router.post('/send/:id',protectRoutes,sendMessages)



export default router;