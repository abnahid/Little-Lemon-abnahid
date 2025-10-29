import React from "react";
import { Button } from "../ui/button";

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: "https://i.ibb.co/317GqZv/Bruchetta.png",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: "https://i.ibb.co/sm6MfcH/desert.jpg",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Maneu: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-22">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary font-karla">
          This Week Specials!
        </h2>

        <Button
          className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500 px-5 py-2"
          variant="default"
        >
          Online Menu
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <article
            key={r.id}
            className="bg-slate-50 rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={r.image}
              alt={r.title}
              className="w-full h-72 object-cover rounded-t-lg"
            />

            <div className="p-6 ">
              <div className="flex items-start justify-between">
                <h3 className="text-4xl  text-gray-800 font-markazi">
                  {r.title}
                </h3>
                <div className="text-orange-400 font-semibold text-[24px] font-karla">
                  Rs. {r.price}
                </div>
              </div>

              <p className="mt-4 text-[16px] text-gray-600 font-karla">
                {r.description}
              </p>

              <div className="mt-6 flex items-center justify-between font-karla text-[18px]">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 flex items-center"
                >
                  Order a Delivery{" "}
                  <span className="ml-2">
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.456 1.72713C14.456 0.8993 13.7058 0.221985 12.7889 0.221985H10.2881V1.72713H12.7889V3.72145L9.88793 6.99513H6.95367V3.23227H3.61928C1.77703 3.23227 0.284889 4.57938 0.284889 6.24256V8.50028H1.95208C1.95208 9.74955 3.06911 10.758 4.45288 10.758C5.83665 10.758 6.95367 9.74955 6.95367 8.50028H10.6882L14.456 4.24825V1.72713ZM4.45288 9.25285C3.9944 9.25285 3.61928 8.91419 3.61928 8.50028H5.28647C5.28647 8.91419 4.91136 9.25285 4.45288 9.25285Z"
                        fill="black"
                      ></path>
                      <path
                        d="M6.95367 0.974548H2.78568V2.47968H6.95367V0.974548Z"
                        fill="black"
                      ></path>
                      <path
                        d="M14.456 6.24255C13.0723 6.24255 11.9552 7.251 11.9552 8.50026C11.9552 9.74952 13.0723 10.758 14.456 10.758C15.8398 10.758 16.9568 9.74952 16.9568 8.50026C16.9568 7.251 15.8398 6.24255 14.456 6.24255ZM14.456 9.25283C13.9976 9.25283 13.6224 8.91417 13.6224 8.50026C13.6224 8.08635 13.9976 7.74769 14.456 7.74769C14.9145 7.74769 15.2896 8.08635 15.2896 8.50026C15.2896 8.91417 14.9145 9.25283 14.456 9.25283Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </a>
                <div className="hidden sm:block" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Maneu;
