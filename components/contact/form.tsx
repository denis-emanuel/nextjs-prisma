"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import Snackbar from "@mui/joy/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

import { submitContact } from "./action";
import { isSuccess } from "types/success";
import { FormButton } from "../form-button";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(submitContact, initialState);
  const [severity, setSeverity] = useState<"success" | "danger">("success");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isSuccess(state)) {
      setSeverity("success");
      setIsOpen(true);
    }

    if (state instanceof Error) {
      setSeverity("danger");
      setIsOpen(true);
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

        <FormButton
          type="submit"
          className="rounded-lg p-2 bg-primary text-white font-bold"
        >
          Trimite
        </FormButton>
      </form>

      <Snackbar
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        color={severity}
        variant="solid"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {severity === "success" ? (
          <span>Mesajul a fost trimis cu succes!</span>
        ) : (
          <span>A aparut o eroare!</span>
        )}
      </Snackbar>
    </div>
  );
}
