import Ad from "./components/Ad";
import Catagory from "./components/Catagory";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pizza from "./components/Pizza";
import ProductSection from "./components/ProductSection";
import Testimonials from "./components/Testimonials";
import Treat from "./components/Treat";

export default function Home() {
  return (
    <div className="bg-[#fcfcfc] overflow-x-hidden">
      <Header />
      <Hero />
      <Catagory />
      <Ad />
      <ProductSection />
      <Treat />
      <Pizza />
      <Testimonials />
      <Footer />
    </div>
  );
}
