"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="container mx-auto pt-5">
        <div className="flex items-center justify-center h-screen dark:bg-gray-800">
          <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
            You are already logged in
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-5">
      <div className="flex items-center justify-center h-screen dark:bg-gray-800">
        <button
          onClick={() => {
            signIn("google");
          }}
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          <Image
            className="w-6 h-6"
            width={0}
            height={0}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}
