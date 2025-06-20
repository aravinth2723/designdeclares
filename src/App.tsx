import "./App.css";
import Hero from "./components/Hero/Hero";
import Breakdown from "./components/Breakdown/Breakdown";
import Donate from "./components/Donate/Donate";
import Emergency from "./components/Emergency/Emergency";
import Declare from "./components/Declare/Declare";
import Latest from "./components/Latest/Latest";
import Toolkit from "./components/Toolkit/Toolkit";
import Signatories from "./components/Signatories/Signatories";
import Supportes from "./components/Supporters/Supportes";
import Footer from "./components/Footer/Footer";

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
      <Signatories />
      <Supportes />
      <Footer />
    </>
  );
}

export default App;
