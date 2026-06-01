import { Request, Response } from "express";
import sql from "../config/dbConnection";

// get all data of contact
export const getAllData = async () => {
  const res = await sql`SELECT * FROM contact_us ORDER BY created_at DESC`;
  return res;
};

export interface ContactInput {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

// insert contact data
export const insertContact = async (contact: ContactInput) => {
  const { first_name, last_name, email, phone, service_interest, message } = contact;
  const res = await sql`
    INSERT INTO contact_us (
      first_name,
      last_name,
      email,
      phone,
      service_interest,
      message
    )
    VALUES (
      ${first_name},
      ${last_name},
      ${email},
      ${phone},
      ${service_interest},
      ${message}
    )
    RETURNING *
  `;
  return res;
};

// deletedata of contact
export const deleteData = async (id:number) => {
  const res = await sql`DELETE FROM contact_us WHERE id = ${id} RETURNING *`;
  return res;
};