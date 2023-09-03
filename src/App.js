import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Survey from "./Components/Survey/Survey";

function App() {
  return (
    <div className="App">
      <Home />
      <Survey />
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
