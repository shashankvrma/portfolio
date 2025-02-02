import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

function App() {
  return (
    <div classname="bg-[#0a192f]">
      <Header/>
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
