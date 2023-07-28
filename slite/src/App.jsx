import "./App.css";
import Hero from "./components/Hero";
import Ideas from "./components/Ideas";
import Knowledge from "./components/Knowledge";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import Prices from "./components/Prices";
import Team from "./components/Team";
import Template from "./components/Template";

function App() {
  return (
    <main className=" bg-black">
      <Nav />
      <Hero />
      <Partners />
      <Knowledge />
      <Template />
      <Ideas />
      <Prices />

      {/* <Team /> */}
    </main>
  );
}

export default App;
