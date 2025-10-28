import React from "react";

const About: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
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
          <div className="w-48 h-48 bg-gray-200 rounded-md shadow-sm flex items-center justify-center">
            <svg
              width="70%"
              height="70%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-40"
            >
              <rect width="100" height="100" fill="#e5e7eb" />
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="#9ca3af"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="#9ca3af"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="w-48 h-48 bg-gray-300 rounded-md shadow-sm absolute right-0 top-0 transform translate-x-8 -translate-y-6">
            <svg
              width="70%"
              height="70%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-40"
            >
              <rect width="100" height="100" fill="#e5e7eb" />
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="#9ca3af"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="#9ca3af"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="w-40 h-40 bg-gray-100 rounded-md shadow-sm absolute left-0 bottom-0 transform -translate-x-6 translate-y-8">
            <svg
              width="70%"
              height="70%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-40"
            >
              <rect width="100" height="100" fill="#e5e7eb" />
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="#9ca3af"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="#9ca3af"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
