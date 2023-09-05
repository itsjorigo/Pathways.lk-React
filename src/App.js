import "./App.css";
import { BrowserRouter as Router, Route,RouterProvider,createBrowserRouter, Outlet } from 'react-router-dom';
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

{/* <Home />
        <Survey />
        <Roadmaps />
        <Rankings />
        <AboutUs />
        <Form/>
        <Footer />
        <Engineering />  */}

function App() {
   
  const Layout = () => {
    return (
      <div className="App">
        <Home />
        <Survey />
        <Roadmaps />
        <Rankings />
        <AboutUs />
        <Form/>
        <Footer />
        {/* <Outlet/>  */}
      
          
       
         
    
      </div>
    );
  };

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
      //   children: [
      //     {
      //       path: "/",
      //       // element: <Home />,
      //     },
      //     {
      //       path: "/products",
      //       element:   <Engineering /> ,
      //     },
      //     {
      //       path: "/users",
      //       // element: <Users />,
      //     },
      //   ],
      },
      {
        path: "/engineering",
        element: <Engineering />,
      },
      
    ]);
    return <RouterProvider router={router} />;
  
 
}

export default App;
