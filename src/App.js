import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Roadmaps from "./Components/Roadmaps/Roadmaps";
import Engineering from './Components/Engineering/Engineering';
import BusinessStudies from './Components/BusinessStudies/BusinessStudies';
import Medicine from './Components/Medicine/Medicine';
import Languages from './Components/Languages/Languages';
import Art from './Components/Art/Art';
import Architecture from './Components/Architecture/Architecture';
import Law from './Components/Law/Law';
import InformationTechnology from './Components/InformationTechnology/InformationTechnology';
import Rankings from "./Components/Rankings/Rankings";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Survey from "./Components/Survey/Survey";
// import GridPage from "./Components/Engineering/Engineering";

function App() {
  return (
    // <Router>
      <div className="App">
        
          {/* <Route exact path="/" component={Home} />
          <Route path="/Roadmaps" component={Roadmaps} />
          <Route path="/Engineering" component={Engineering} />
          <Route path="/BusinessStudies" component={BusinessStudies} />
          <Route path="/Medicine" component={Medicine} />
          <Route path="/Languages" component={Languages} />
          <Route path="/Art" component={Art} />
          <Route path="/Architecture" component={Architecture} />
          <Route path="/Law" component={Law} />
          <Route path="/InformationTechnology" component={InformationTechnology} /> */}
        
        <Home />
        <Survey />
        <Roadmaps />
        <Rankings />
        <AboutUs />
        <Form/>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
