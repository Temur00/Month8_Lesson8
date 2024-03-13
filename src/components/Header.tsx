"use client";
import { Basket, Heart, Logo, SearchIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <div className="flex md:block ">
      <div className="bg-slate-100  ">
        <div className="container mx-auto flex justify-between px-6 py-2 text-gray-600 ">
          <p>UZB</p>
          <div className=" gap-3  hidden lg:flex text-sm font-normal">
            <Link href="#" className="active:text-yellow-300">
              Namoz vaqti
            </Link>
            <p>|</p>
            <Link href="#" className="active:text-yellow-300">
              alif shopda soting!
            </Link>
            <Link href="https://t.me/Temur_vibes">Bizga yozing</Link>
          </div>
        </div>
        <div></div>
      </div>
      <div
        className={`bg-white flex sticky left-0 right-0 top-0 h-[75px]  py-4 ${
          !top && `bg-white shadow-lg`
        } z-10`}
      >
        <div className="md:container md:mx-auto px-4 flex items-center justify-between   gap-2 ">
          <Link href={"/"}>
            {" "}
            <Image src={Logo} alt="Logo" width={112} height={32} />
          </Link>
          <button className="py-2  ml-1 mr-1 duration-200 px-3 h-[43px] lg:w-52 rounded-lg flex  items-center justify-center gap-2 relative font-medium bg-yellow-300">
            <div className=" bg-black w-6 h-1 block -mt-4">
              <span className="block  h-1 bg-black"></span>
              <span className="block mt-1 h-1 bg-black"></span>
              <span className="block mt-1  h-1 bg-black"></span>
            </div>
            <span className="hidden lg:block w-32">Tovarlar katalogi</span>
          </button>
          <div>
            <form className="flex items-center relative  bg-yellow-300 h-[43px] rounded-md  xl:w-[545px]">
              <div className="w-64 md:w-72 lg:w-80 outline-none  xl:w-[500px]">
                <input
                  type="search"
                  className="w-full ml-[2px] outline-none pl-4 pr-2 text-sm flex items-center rounded-s-lg border-yellow-300 placeholder:text-gray-600   h-[40px]"
                  placeholder="Tovarlarni izlash"
                />
              </div>
              <button type="submit" className="ml-2 mr-2 ">
                <Image src={SearchIcon} alt="searchicon" className="w-6 h-6" />
              </button>
            </form>
          </div>
          <div className="group h-[43px] gap-1 items-center flex flex-col cursor-pointer ">
            <Image src={Basket} alt="basketIco" className="w-5 h-5 " />
            <p className="text-[12px] group-hover:text-yellow-300 duration-200">
              Savat
            </p>
          </div>
          <div className="group h-[43px] gap-1 items-center flex-col cursor-pointer hidden md:flex ">
            <Image src={Heart} alt="basketIco" className="w-5 h-5 " />
            <p className="text-[12px] group-hover:text-yellow-300 duration-200">
              Saralanganlar
            </p>
          </div>
          <button className="border-yellow-300 border-2 w-[63px] h-[42px] rounded-lg  text-sm hover:bg-yellow-100 ease-in duration-300">
            Kirish
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
