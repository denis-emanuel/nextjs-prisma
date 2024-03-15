"use server";

import {
  emailOptionsForAdmin,
  emailOptionsForUser,
  sendEmail,
} from "@/lib/nodemailer";
import { z } from "zod";

export async function submitContact(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string(),
  });

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const data = schema.parse({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  let res;
  try {
    // send email to admin
    const adminOptions = emailOptionsForAdmin(email, name, phone, message);
    res = await sendEmail(adminOptions);

    // send email to user
    const userOptions = emailOptionsForUser(email, name);
    res = await sendEmail(userOptions);
  } catch (error) {
    res = error;
  }

  return res;
}
