"use server";

import {
  emailOptionsForAdmin,
  emailOptionsForUser,
  sendEmail,
} from "@/lib/nodemailer";
import { ValidationResponse } from "types/validation";
import { formatValidationError } from "utils/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "numele lipseste" }),
  email: z.string().email("email-ul este invalid"),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "mesajul lipseste" }),
});

export async function submitContact(
  prevState: any,
  formData: FormData
): Promise<ValidationResponse> {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  try {
    schema.parse({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });

    // send email to admin
    const adminOptions = emailOptionsForAdmin(email, name, phone, message);
    const resAdmin = await sendEmail(adminOptions);
    if (resAdmin instanceof Error) {
      return {
        success: false,
        message:
          "Email-ul nu a putut fi trimis. Va rugam incercati mai tarziu.",
      };
    }

    // send email to user
    const userOptions = emailOptionsForUser(email, name);
    const resUser = await sendEmail(userOptions);
    if (resUser instanceof Error) {
      return {
        success: false,
        message:
          "Email-ul nu a putut fi trimis. Va rugam incercati mai tarziu.",
      };
    }
  } catch (error: Error | z.ZodError | any) {
    return {
      success: false,
      message: formatValidationError(error),
    };
  }

  return {
    success: true,
    message: "Email-ul a fost trimis cu succes.",
  };
}
