import Navbar from "./components/Navbar";
import "./Styles/App/App.css"
import FirstContainer from "./components/FirstContainer";
import SecondContainer from "./components/SecondContainer";
import ThirdContainer from "./components/ThirdContainer";
import ForthContainer from "./components/ForthContainer";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <ForthContainer />
      <Footer />
    </div>
  );
}