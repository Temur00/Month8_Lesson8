import {
  Facebook,
  FooterYandex,
  Instagram,
  Ok,
  Telegram,
  Tiktok,
} from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto  mt-4">
        <div className="flex flex-wrap gap-5 justify-between py-[40px]">
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-500 text-sm">Hujjatlar</p>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Sotish uchun umumiy shartlar
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Ofertalar arxivi
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Nizom
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Guvohnoma
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-500 text-sm">Servis</p>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Muddatli to'lov islomda
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              alif shopda soting!
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Qaytarish
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-500 text-sm">Tovarlar katalogi</p>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Smartfonlar va telefonlar
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Gadjetlar
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Smartfonlar uchun aksessuarlar
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Tegishli tovarlar
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              Soat va aksessuarlar
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-500 text-sm">
              Biz ijtimoiy axborot vositalarida
            </p>

            <div className="flex gap-3">
              <Link
                className="hover:scale-110 ease-in duration-200"
                href={"https://www.instagram.com/alifshop.uz/"}
              >
                <Image src={Instagram} alt="insta" />
              </Link>
              <Link
                className="hover:scale-110 ease-in duration-200"
                href={"https://www.facebook.com/alifshopuz"}
              >
                <Image src={Facebook} alt="insta" />
              </Link>
              <Link
                className="hover:scale-110 ease-in duration-200"
                href={"https://t.me/alifshopuz"}
              >
                <Image src={Telegram} alt="insta" />
              </Link>
              <Link
                className="hover:scale-110 ease-in duration-200"
                href={
                  "https://ok.ru/group/57984282525871?utm_source=ins&utm_medium=page&utm_campaign=odnoklassniki"
                }
              >
                <Image src={Ok} alt="insta" />
              </Link>
              <Link
                className="hover:scale-110 ease-in duration-200"
                href={"https://www.tiktok.com/@alifshop.uz"}
              >
                <Image src={Tiktok} alt="insta" />
              </Link>
            </div>
            <p className="text-gray-500 text-sm">Axborot xizmati</p>
            <Link
              className="hover:text-yellow-300 duration-200  text-white"
              href={"https://t.me/alifazobot"}
            >
              @alifshop_uz
            </Link>
            <Link
              className="hover:text-yellow-300 duration-200 text-white"
              href={"#"}
            >
              +998 555 12 12 12
            </Link>
          </div>
        </div>
        <hr className="text-gray-800" />
        <div className="flex flex-col gap-4 md:flex-row md:justify-between py-10">
          <p className="text-gray-500">2024 © alifshop.uz</p>
          <Link
            href={
              "https://webmaster.yandex.ru/siteinfo/?site=https://alifshop.uz"
            }
          >
            <Image className="rounded-lg" src={FooterYandex} alt="img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
