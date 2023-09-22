import Contact from "./ components/contactMe/Contact";
import Footer from "./ components/footer/Footer";
import Intro from "./ components/introduction/Intro";
import NavBar from "./ components/navBar/NavBar";
import Skill from "./ components/skills/Skill";
import Works from "./ components/works/Works";
import Education from './ components/education/Education'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skill />
      <Works />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
