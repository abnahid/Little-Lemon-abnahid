import React from "react";

const reviews = [
  {
    id: 1,
    name: "Ayesha Khan",
    rating: 5,
    text: "Amazing food and friendly staff! The lemon dessert was the highlight — light, tangy and perfect.",
  },
  {
    id: 2,
    name: "Omar Ali",
    rating: 4,
    text: "Great flavors and portion sizes. Service was quick and the ambience was cozy. Will visit again.",
  },
  {
    id: 3,
    name: "Fatima Noor",
    rating: 5,
    text: "Best Greek salad I've had outside Greece — fresh, crunchy and well seasoned. Highly recommend!",
  },
  {
    id: 4,
    name: "Khalid Raza",
    rating: 4,
    text: "Lovely place for a weekend meal. The bruschetta was excellent and the staff very attentive.",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="w-full bg-primary text-primary-foreground py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-secondary mb-8">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-lg p-5 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-700">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < r.rating ? "fill-current" : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.178L12 18.896l-7.336 3.88 1.402-8.178L.132 9.21l8.2-1.192z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    {r.name}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 flex-1">{r.text}</p>

              <div className="mt-4 text-sm text-gray-500">Verified diner</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
