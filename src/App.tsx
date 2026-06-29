import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Coalition from "./components/Coalition";
import Redd from "./components/Redd";
import Impact from "./components/Impact";
import Partners from "./components/Partners";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * App is the page itself: a single-page institutional landing site.
 * Each child is one section, rendered top to bottom. The order here is the
 * order on the page — rearrange these lines to reorder sections.
 */
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
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
