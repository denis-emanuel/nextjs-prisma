import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Paper } from "@mui/material";

import formatPrice from "utils/format-price";
import { isUserAdmin } from "@/app/actions/user";
import { getPosts } from "@/app/actions/posts";

import styles from "./style.module.css";
import { TVA } from "types/constants/price";

export const metadata: Metadata = {
  title: "Utilaje de vanzare",
  description: "Utilaje de vanzare",
  keywords: ["utilaje", "vanzare", "agricole", "constructii", "masinarii"],
};

export default async function Utilaje() {
  const posts = await getPosts();
  const isAdmin = await isUserAdmin();

  return (
    <div className="w-full min-h-screen pt-2 pb-6 md:pb-14 px-4 md:px-24">
      <div className="flex flex-row justify-between my-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-gray-800 mb-3 lg:mb-5">
          Utilaje disponibile
        </h1>
        {isAdmin && (
          <Link href="/adauga-anunt">
            <button className="ml-5 md:absolute md:right-24 md:top-5 md:mt-12 md:mr-0 md:left-auto md:w-auto rounded-lg bg-primary p-2 font-bold text-center">
              ADAUGA
            </button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full">
        {posts.map((post) => (
          <div key={post.id} className="relative overflow-hidden">
            <Link href={`/utilaje/${post.id}`}>
              <div
                className={`${styles.ribbon} ${
                  post.sold === true
                    ? "bg-red-500"
                    : post.listingType === "FOR_SALE"
                    ? "bg-green-500"
                    : "bg-blue-500"
                } rounded-l-lg`}
              >
                {post.sold === true
                  ? "Vandut"
                  : post.listingType === "FOR_SALE"
                  ? "De vanzare"
                  : "De inchiriat"}
              </div>
              <Paper className="border-l-4 border-orange-300">
                <div
                  className="relative w-full h-0"
                  style={{ paddingTop: "100%" }}
                >
                  <Image
                    src={post?.images[0]?.url ?? "/no-image.jpg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tr-lg"
                  />
                </div>
                <div className="p-2 lg:p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {post.title}
                  </h3>

                  <p className="text-green-600 text-2xl">
                    {formatPrice(post.price)}&euro;
                  </p>
                  <p
                    className={`text-green-800 text-md ${
                      (post.listingType !== "FOR_SALE" || post.sold) &&
                      "text-transparent"
                    }`}
                  >
                    <span>{formatPrice(post.price * TVA, 2)}&euro;</span>{" "}
                    <span>TVA</span>
                  </p>

                  <div className="mt-2 italic text-gray-500 text-sm">
                    <div className="tracking-tight">
                      Data postarii:{" "}
                      {post.createdAt.toLocaleDateString("ro-RO")}
                    </div>
                    <div className="tracking-tight">
                      Ultima actualizare:{" "}
                      {post.updatedAt.toLocaleDateString("ro-RO")}
                    </div>
                  </div>
                </div>
              </Paper>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
