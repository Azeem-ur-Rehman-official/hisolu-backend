import { Request, Response } from "express";
import * as contactModel from "../models/contactMode";
export const getClientsData = async (req:Request, res:Response) => {
  try {
    const clientsData = await contactModel.getAllData();
    res.json(clientsData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch patients" });
  }
};

export const postContactData = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, phone, service_interest, message } = req.body;

    // Validation
    if (!first_name || !last_name || !email || !message) {
      res.status(400).json({ error: "First name, last name, email, and message are required" });
      return;
    }

    const newContact = await contactModel.insertContact({
      first_name,
      last_name,
      email,
      phone,
      service_interest,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact information submitted successfully",
      data: newContact[0] || newContact,
    });
  } catch (err) {
    console.error("Error in postContactData controller:", err);
    res.status(500).json({ error: "Failed to submit contact information" });
  }
};
