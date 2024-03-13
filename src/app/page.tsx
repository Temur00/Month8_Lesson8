"use client";
import {
  HeroCarouselFifth,
  HeroCarouselFirst,
  HeroCarouselFourth,
  HeroCarouselSecond,
  HeroCarouselThird,
} from "@/assets/images";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slide={true} slideInterval={3000}>
          <Link href="#">
            <Image
              className="w-full h-full object-cover"
              src={HeroCarouselFirst}
              alt="HeroCarouselFirst"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-full h-full object-cover"
              src={HeroCarouselSecond}
              alt="HeroCarouselFirst"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-full h-full object-cover"
              src={HeroCarouselThird}
              alt="HeroCarouselFirst"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-full h-full object-cover"
              src={HeroCarouselFourth}
              alt="HeroCarouselFirst"
            />
          </Link>
          <Link href="#">
            <Image
              className="w-full h-full object-cover"
              src={HeroCarouselFifth}
              alt="HeroCarouselFirst"
            />
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
