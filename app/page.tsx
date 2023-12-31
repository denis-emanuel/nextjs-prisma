import Link from "next/link";

// TODO check the comment
export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex space-x-3">
          <Link
            href="/protected"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
