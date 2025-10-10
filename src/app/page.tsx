import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
//import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/testimonial";
import Blog from "@/components/blog";
import Store from "@/components/store";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Services />
      <Projects />
      <Testimonials/>
      <Blog/>
      <Store/>
    </>
  );
}
