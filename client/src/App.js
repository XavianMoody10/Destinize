import "./App.css";
import { Destinations } from "./features/Destinations/Destinations";
import { Header } from "./features/Header/Header";
import { Hero } from "./features/Hero/Hero";
import { Partnership } from "./features/Partnership/Partnership";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Partnership></Partnership>
      <Destinations></Destinations>
    </div>
  );
}

export default App;
