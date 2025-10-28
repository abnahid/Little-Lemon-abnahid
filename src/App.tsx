import Footer from "./components/Footer";
import About from "./components/Home/about";
import Banner from "./components/Home/Banner";
import Maneu from "./components/Home/maneu";
import Testimonial from "./components/Home/testimonial";
import Nevbar from "./components/Nevbar";

function App() {
  return (
    <>
      <Nevbar />
      <Banner />
      <Maneu />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
