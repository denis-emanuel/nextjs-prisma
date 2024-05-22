"use client";

import { useFormState, useFormStatus } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";

import uploadImage from "@/app/actions/upload-image";
import { useState } from "react";

const initialState = {
  file: "",
};

export default function CreateUtilaj() {
  const { pending } = useFormStatus();
  const [formState, formAction] = useFormState(uploadImage, initialState);

  return (
    <div className="container mx-auto mt-2 md:mt-5 p-3 md:p-5">
      <h2 className="text-2xl mb-2 lg:text-3xl lg:mb-5">Anunt nou</h2>

      <form action={formAction} className="flex flex-col space-y-4">
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
            htmlFor="file"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Imagini
          </label>
          <input
            type="file"
            name="file"
            id="file"
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
        >
          {pending ? <CircularProgress /> : "Adauga anunt"}
        </button>
      </form>
    </div>
  );
}
