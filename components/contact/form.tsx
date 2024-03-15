"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "./action";
import { useEffect, useState } from "react";
import { isSuccess } from "types/success";
import { Alert, Snackbar } from "@mui/material";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(submitContact, initialState);
  const [severity, setSeverity] = useState<undefined | "success" | "error">();

  useEffect(() => {
    if (isSuccess(state)) {
      setSeverity("success");
    }

    if (state instanceof Error) {
      setSeverity("error");
    }
  }, [state, pending]);

  return (
    <div className="w-full lg:w-2/5 p-5">
      <h2 className="text-2xl mb-2 lg:text-3xl lg:mb-5">Formular de contact</h2>

      <form className="flex flex-col space-y-4" action={formAction}>
        <div className="flex flex-col">
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            placeholder="Numele tau"
            id="name"
            name="name"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="exemplu@mail.com"
            id="email"
            name="email"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            placeholder="07xx xxx xxx"
            id="phone"
            name="phone"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            name="message"
            className="p-2 rounded-lg border border-gray-400"
          />
        </div>

        {severity && (
          <Alert severity={severity} variant="filled" className="mt-2">
            {severity === "success"
              ? "Mesajul a fost trimis cu succes!"
              : "A aparut o eroare!"}
          </Alert>
        )}

        <button
          type="submit"
          className="rounded-lg p-2 bg-primary text-white font-bold"
          aria-disabled={pending}
        >
          Trimite
        </button>
      </form>
    </div>
  );
}
