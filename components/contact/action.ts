"use server";

import { sendEmail } from "@/lib/nodemailer";
import { z } from "zod";

export async function submitContact(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string(),
  });

  const data = schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });
  console.log("🚀 ~ data:", data);

  try {
    sendEmail();
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }

  return {};
}
