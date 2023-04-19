import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-around w-full p-20 bg-white text-black">
      <Link href={"/Fetch"}>Fetch</Link>
      <Link href={"/LoadingSayfasi"}>LoadingSayfasi</Link>
      <Link href={"/MyImages"}>Images</Link>
      <Link href={"/CookiesExample"}>CookiesExample</Link>
    </div>
  );
}
