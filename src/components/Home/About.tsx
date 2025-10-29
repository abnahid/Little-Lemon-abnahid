import React from "react";

const About: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: headings and paragraphs */}
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary">
            Little Lemon
          </h1>
          <h2 className="mt-2 text-lg text-secondary">Chicago</h2>

          <div className="mt-6 text-sm text-gray-700 space-y-4 max-w-lg">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>

        {/* Right: stacked image placeholders */}
        <div className="relative flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
          <div className="bg-gray-200 rounded-md shadow-sm flex items-center justify-center left-0 -bottom-10 transform translate-y-20 -translate-x-35 z-10">
            <img
              src="/images/restaurant chef B-min.webp"
              alt=""
              className=" w-[272px] h-[338px] object-cover object-left-center"
            />
          </div>

          <div className="bg-gray-300 rounded-md shadow-sm absolute ">
            <img
              src="/images/Mario and Adrian b-min.webp"
              alt=""
              className=" w-[272px] h-[338px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
