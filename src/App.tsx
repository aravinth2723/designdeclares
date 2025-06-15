import "./App.css";
import Hero from "./components/Hero/Hero";
import Breakdown from "./components/Breakdown/Breakdown";
import Donate from "./components/Donate/Donate";
import Emergency from "./components/Emergency/Emergency";
import Latest from "./components/Latest/Latest";

function App() {
  return (
    <>
      <Hero />
      <Breakdown />
      <Donate />
      <Emergency />
      <Latest />
    </>
  );
}

export default App;
