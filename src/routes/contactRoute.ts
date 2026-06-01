import { Router } from "express";
import { getClientsData, postContactData } from "../controller/contactController";
const router = Router();
router.get('/api/contact', getClientsData);
router.post('/api/contact', postContactData);
export default router;