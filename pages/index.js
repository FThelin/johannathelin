import Meta from "../components/Meta";
import Main from "../components/Main";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";
import Prices from "../components/Prices";
import Hello from "../components/Hello";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Meta />
      <Main />
      <Intro />
      <Prices />
      <About />
      <Contact />
      <Hello />
      <Footer />
    </>
  );
}
