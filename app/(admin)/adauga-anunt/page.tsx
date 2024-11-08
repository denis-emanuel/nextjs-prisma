"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

import newPostSubmit from "./submit-form";
import { isSuccess } from "types/success";
import Snackbar from "@mui/joy/Snackbar";
import { TVA } from "types/constants/price";

export default function CreateUtilaj() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  const [severity, setSeverity] = useState<"success" | "danger">("success");
  const [apiMessage, setApiMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  async function handleSubmit(formData: FormData) {
    try {
      const response = await newPostSubmit(formData);
      if (isSuccess(response)) {
        setSeverity("success");
        formRef?.current?.reset();
        router.push("/utilaje");
      }
    } catch (error) {
      setSeverity("danger");
      setApiMessage((error as Error).message);
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
          <label htmlFor="title" className="text-sm font-medium">
            Titlu
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="p-1 rounded-lg border border-gray-400"
          />
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-medium">
              Pret (€)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="p-1 rounded-lg border border-gray-400"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tva" className="text-sm font-medium">
              TVA (19%) (€)
            </label>
            <input
              name="tva"
              id="tva"
              className="p-1 rounded-lg border border-gray-400 bg-gray-200"
              readOnly
              value={price * TVA ?? 0}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="total" className="text-sm font-medium">
              Total (€)
            </label>
            <input
              name="total"
              id="total"
              className="p-1 rounded-lg border border-gray-400 bg-gray-200"
              readOnly
              value={price * (1 + TVA) ?? 0}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="listingType" className="text-sm font-medium">
            Tip listare
          </label>
          <select
            name="listingType"
            id="listingType"
            className="p-2 rounded-lg border border-gray-400 bg-white"
            defaultValue="FOR_SALE"
          >
            <option value="FOR_SALE">vanzare</option>
            <option value="FOR_RENT">inchiriere</option>
          </select>
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
          <label htmlFor="description" className="text-sm font-medium">
            Descriere
          </label>
          <textarea
            contentEditable
            name="description"
            id="description"
            className="p-1 h-40 rounded-lg border border-gray-400"
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
        {severity === "success" && (
          <span>Anuntul a fost adaugat cu succes cu succes!</span>
        )}
        {severity === "danger" && (
          <div>
            <p>A aparut o eroare!</p>
            <p>{apiMessage}</p>
          </div>
        )}
      </Snackbar>
    </div>
  );
}
