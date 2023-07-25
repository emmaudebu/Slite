import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partners from "./components/Partners";

function App() {
  return (
    <main className=" bg-black">
      <Nav />
      <Hero />
      <Partners />
    </main>
  );
}

export default App;
