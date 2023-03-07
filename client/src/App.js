import "./App.css";
import { Attractions } from "./features/Attractions/Attractions";
import { Blog } from "./features/Blog/Blog";
import { Destinations } from "./features/Destinations/Destinations";
import { Header } from "./features/Header/Header";
import { Hero } from "./features/Hero/Hero";
import { Partnership } from "./features/Partnership/Partnership";
import { Reservation } from "./features/Reservation/Reservation";

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
    </div>
  );
}

export default App;
