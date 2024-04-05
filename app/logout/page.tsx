"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        signOut();
        redirect("/");
      }}
      className="mx-auto rounded-lg bg-primary p-2 font-bold text-center"
    >
      LOGOUT
    </button>
  );
}
