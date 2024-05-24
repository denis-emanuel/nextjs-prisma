"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";

import newPostSubmit from "./submit-form";
import { isSuccess } from "types/success";
import Snackbar from "@mui/joy/Snackbar";

export default function CreateUtilaj() {
  const [severity, setSeverity] = useState<"success" | "danger">("success");
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { pending } = useFormStatus();
  async function handleSubmit(formData: FormData) {
    const response = await newPostSubmit(formData);

    if (isSuccess(response)) {
      setSeverity("success");
      formRef?.current?.reset();
    } else {
      setSeverity("danger");
    }
    setIsOpen(true);
  }

  return (
    <div className="container mx-auto mt-2 md:mt-5 p-3 md:pt-5 md:px-40">
      <h2 className="text-2xl mb-2 lg:text-3xl lg:mb-5">Anunt nou</h2>

      <form
        ref={formRef}
        action={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            Titlu
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-1 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            Pret (€)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="p-1 rounded-lg border border-gray-400"
          />
        </div>

        <div>
          <label
            htmlFor="files"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Imagini
          </label>
          <input
            type="file"
            name="files"
            id="files"
            multiple
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">
            Descriere
          </label>
          <textarea
            name="description"
            id="description"
            className="p-1 rounded-lg border border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="text-primary bg-gray-600 p-2 rounded-md md:w-1/5"
          aria-disabled={pending}
        >
          {pending ? <CircularProgress /> : "Adauga anunt"}
        </button>
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
          <span>Anuntul a fost adaugat cu succes cu succes!</span>
        ) : (
          <span>A aparut o eroare!</span>
        )}
      </Snackbar>
    </div>
  );
}
