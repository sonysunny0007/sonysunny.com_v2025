import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
//import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
