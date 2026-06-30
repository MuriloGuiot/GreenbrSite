import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Coalition from "./components/Coalition";
import Redd from "./components/Redd";
import Impact from "./components/Impact";
import ClimateContext from "./components/ClimateContext";
import Partners from "./components/Partners";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Coalition />
        <Redd />
        <Impact />
        <ClimateContext />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
