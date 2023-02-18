import NavbarContainer from "./components/NavbarContainer";
import "./Styles/App/App.css"
import AboutContainer from "./components/AboutContainer";
import IntroContainer from "./components/IntroContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import ContactContainer from "./components/ContactContainer";
import FooterContainer from "./components/FooterContainer";

export default function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <IntroContainer />
      <AboutContainer />
      <ProjectsContainer />
      <ContactContainer />
      <FooterContainer />
    </div>
  );
}