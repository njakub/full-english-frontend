import Link from "next/link";
import { Menu } from "../components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Full English Finder
          </h1>
          <h2>Find yourself a proper Full English!</h2>
        </div>
      </main>
    </div>
  );
}
