import { Router } from "express";
import { deleteContactData, getClientsData, postContactData } from "../controller/contactController";
const router = Router();
router.get('/api/contact', getClientsData);
router.post('/api/contact', postContactData);
router.delete('/api/contact/:id', deleteContactData);
export default router;