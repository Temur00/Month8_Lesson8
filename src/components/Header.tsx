import { Logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-100 static">
        <div className="container mx-auto flex justify-between px-6 py-2 text-gray-600 ">
          <p>UZB</p>
          <div className=" gap-3  hidden lg:flex text-sm font-normal">
            <Link href="#">Namoz vaqti</Link>
            <p>|</p>
            <Link href="#">alif shopda soting!</Link>
            <Link href="#">Bizga yozing</Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-white fixed left-0 right-0 h-[75px] py-4">
        <div className="container mx-auto w-[112px] h-[31.75px] flex">
          <Image src={Logo} alt="Logo" />
          <button className="py-2 duration-200 px-3 h-[43px] w-52 rounded-lg flex  items-center justify-center gap-2 relative font-medium bg-yellow-500">
            <div className=" bg-black w-6 h-1 block -mt-4">
              <span className="block  h-1 bg-black"></span>
              <span className="block mt-1 h-1 bg-black"></span>
              <span className="block mt-1  h-1 bg-black"></span>
            </div>
            <span className="hidden lg:block w-32">Tovarlar katalogi</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
