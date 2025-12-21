import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
// import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      {/* <Offer /> */}
      <About />
      <Contact />
      <Footer />
    </>
  );
}
