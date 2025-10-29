import React from "react";
import { Button } from "../ui/button";

const Banner: React.FC = () => {
  return (
    <section className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          {/* Left: text */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary font-karla">
              Little Lemon
            </h1>
            <p className="mt-3 text-xl font-karla">Chicago</p>

            <p className="mt-6 max-w-xl text-2xl text-primary-foreground/90 font-markazi">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8">
              <Button
                className="rounded-full bg-yellow-400 text-primary hover:bg-yellow-500 px-5  text-xl py-5.5 font-bold font-karla"
                variant="default"
              >
                Reserve a Table
              </Button>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
            <img
              src="/images/restauranfood.webp"
              alt="Restaurant"
              className="object-cover w-full h-full  rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
