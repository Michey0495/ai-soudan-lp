import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Problems } from "./sections/Problems";
import { Services } from "./sections/Services";
import { Flow } from "./sections/Flow";
import { Retainer } from "./sections/Retainer";
import { Cases } from "./sections/Cases";
import { Pricing } from "./sections/Pricing";
import { Consultant } from "./sections/Consultant";
import { Faq } from "./sections/Faq";
import { Cta } from "./sections/Cta";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Flow />
        <Retainer />
        <Cases />
        <Pricing />
        <Consultant />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
