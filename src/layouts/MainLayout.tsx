import Footer from "@/components/Footer";
import Navbar from "@/components/Nevbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
