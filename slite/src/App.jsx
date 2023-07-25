import "./App.css";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import Template from "./components/Template";

function App() {
  return (
    <main className=" bg-black">
      <Nav />
      <Hero />
      <Partners />
      <Knowledge />
      <Template />
    </main>
  );
}

export default App;
