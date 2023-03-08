import "./App.css";
import { Attractions } from "./features/Attractions/Attractions";
import { Blog } from "./features/Blog/Blog";
import { Destinations } from "./features/Destinations/Destinations";
import { FAQ } from "./features/FAQ/FAQ";
import { Footer } from "./features/Footer/Footer";
import { Header } from "./features/Header/Header";
import { Hero } from "./features/Hero/Hero";
import { Partnership } from "./features/Partnership/Partnership";
import { Reservation } from "./features/Reservation/Reservation";
import { Service } from "./features/Service/Service";
import { Testimonial } from "./features/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Partnership></Partnership>
      <Destinations></Destinations>
      <Reservation></Reservation>
      <Attractions></Attractions>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
}

export default App;
