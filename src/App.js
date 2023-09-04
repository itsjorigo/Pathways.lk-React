import "./App.css";
import Home from "./Components/Home/Home";
import Roadmaps from "./Components/Roadmaps/Roadmaps";
import Rankings from "./Components/Rankings/Rankings";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Survey from "./Components/Survey/Survey";

function App() {
  return (
    <div className="App">
      <Home />
      <Survey />
      <Roadmaps />
      <Rankings />
      <AboutUs />
      <Contact />
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
