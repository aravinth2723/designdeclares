import "./App.css";
import Hero from "./components/Hero/Hero";
import Breakdown from "./components/Breakdown/Breakdown";
import Donate from "./components/Donate/Donate";
import Emergency from "./components/Emergency/Emergency";
import Declare from "./components/Declare/Declare";
import Latest from "./components/Latest/Latest";
import Toolkit from "./components/Toolkit/Toolkit";

function App() {
  return (
    <>
      <Hero />
      <Breakdown />
      <Donate />
      <Emergency />
      <Declare />
      <Latest />
      <Toolkit />
    </>
  );
}

export default App;
