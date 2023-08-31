import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Work />
      <About />
      <Testimonial />
      <Contact />
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
