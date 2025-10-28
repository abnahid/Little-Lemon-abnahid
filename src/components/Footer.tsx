import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-primary-foreground bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="w-28 h-28 rounded-md bg-white/10 flex items-center justify-center">
            <img src="/images/footer.png" alt="" />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-sm">
                  📍
                </span>
                <span>Little Hills, Hyderabad.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-sm">
                  📞
                </span>
                <span>(+91) XXXXX84223</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-sm">
                  ✉️
                </span>
                <span>contact@littlelemon.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              CONNECT WITH US
            </h4>
            <div className="flex items-center gap-3 text-white/90">
              {/* placeholders for icons */}
              <a
                href="#"
                aria-label="facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                f
              </a>
              <a
                href="#"
                aria-label="twitter"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                t
              </a>
              <a
                href="#"
                aria-label="instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                ig
              </a>
              <a
                href="#"
                aria-label="youtube"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                yt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
