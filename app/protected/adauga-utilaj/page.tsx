"use client";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import uploadImage from "@/app/actions/upload-image";

const initialState = {
  file: "",
};

export default function CreateUtilaj() {
  // const session = getServerSession();
  // if (!session || !session.user) {
  //   redirect("/");
  // }
  const { pending } = useFormStatus();
  const [formState, formAction] = useFormState(uploadImage, initialState);

  return (
    <div className="container mx-auto pt-5">
      {/* <span>sal {session.user?.email}</span> */}

      <form action={formAction}>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            if (e.target.files) {
              console.log(e.target.files[0]);
              console.log(e.target.files[0].type.startsWith("image/"));
            }
          }}
        />
        <hr />
        <button type="submit">upload</button>
      </form>
    </div>
  );
}
