"use client"

import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Carousel from "./components/Carousel";
import Link from "next/link";

export default function Home() {
  return (
      <>
      {/* Hero section */}
        <Hero />

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-6 lg:px-8 my-10">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <div className="w-40 h-40 rounded-full bg-gray-100 border border-gray-400 m-auto flex">
              <Image
                src="/Images/engine.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-24 m-auto"
              /></div>
            <p className="text-lg font-semibold mt-3">
              Engine Parts
            </p>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <div className="w-40 h-40 rounded-full bg-gray-100 border border-gray-400 m-auto flex">
              <Image
                src="/Images/gear-stick.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-24 m-auto"
              />
            </div>
            <p className="text-lg font-semibold mt-3">
              Transmission
            </p>
          </div>
          <div className="w-1/2 md:w-1/3 mt-10 md:mt-0 lg:w-1/4 text-center">
            <div className="w-40 h-40 rounded-full bg-gray-100 border border-gray-400 m-auto flex">
              <Image
                src="/Images/battery.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-24 m-auto"
              /></div>
            <p className="text-lg font-semibold mt-3">
              Electrical
            </p>
          </div>
          <div className="w-1/2 md:w-1/3 mt-10 lg:mt-0 lg:w-1/4 text-center">
            <div className="w-40 h-40 rounded-full bg-gray-100 border border-gray-400 m-auto flex">
              <Image
                src="/Images/shock-absorber.png"
                alt=""
                width={100}
                height={100}
                className="w-24 h-24 m-auto"
              /></div>
            <p className="text-lg font-semibold mt-3">
              Suspension
            </p>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
          <h1 className="text-2xl mb-10">Featured products</h1>
          <Carousel />
        </div>

        {/* Customer Testimonials */}
        <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
          <h1 className="text-2xl">Customer Testimonials</h1>
          <Testimonials />
        </div>

        {/* Why chooses us */}
        <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
          <h1 className="text-2xl mb-10">Why Choose Us?</h1>
          <div className="w-full bg-gray-300 lg:h-72 rounded-3xl flex flex-wrap">
            <div className="w-full md:w-1/3 ">
              <Image
                src="/Images/cluster_1-removebg-preview.png"
                alt=""
                width={1000}
                height={1000}
                className="w-96 m-auto mt-5"
              />
            </div>
            <div className="w-full md:w-2/3 flex p-5 lg:p-0">
              <div className="m-auto">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-700 text-center lg:text-left">
                    Reliable Truck Parts, Refurbished to Perfection!
                  </h1>
                  <p>

                  </p>
                  <Link href="/products" className="">
                      <div className="bg-black text-white py-3 mt-10 rounded-md w-56 hover:bg-gray-500 duration-500 m-auto md:flex text-center ">
                          <p className="m-auto">Browse Parts</p>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals or Latest Additions */}
        <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
          <h1 className="text-2xl mb-10">New Arrivals?</h1>
          <Carousel />
        </div>
      </>
  );
}
