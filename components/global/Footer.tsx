import Link from "next/link";
import Image from "next/image";
import FooterMenu from "@/components/nav/FooterMenu";
import logo from "@/public/logo-transparent.png";

export default function Footer() {
  return (
    <div className="w-full py-12 bg-primary">
      <div className="container flex flex-col gap-12 items-center justify-between text-white md:flex-row">
        <FooterMenu className="md:order-3" />
        <div className="flex flex-col items-center md:order-1">
          <Link href="/" className="p-2">RPG maker</Link>
          <p>2025</p>
        </div>
        <div className="flex flex-col items-center md:order-2">
          <Image
            src={logo}
            alt="logo Yuunity"
            width={489}
            height={467}
            fetchPriority="high"
            className="w-[50px] h-full pb-2"
          />
          <p>developed by <span className="font-bold">Yuunity</span></p>
          <div className="flex text-sm text-black">
            <Link href="https://github.com/yujinishioka" className="py-1 px-2 hover:text-blue-300">Github</Link>
            <Link href="https://www.linkedin.com/in/yuji-nishioka/" className="py-1 px-2 hover:text-blue-300">LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
