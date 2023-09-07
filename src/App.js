import "./App.css";
import { BrowserRouter as Router, Route,RouterProvider,createBrowserRouter, Outlet } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Roadmaps from "./Components/Roadmaps/Roadmaps";
import Engineering from './Components/Subjects/Engineering/Engineering';
import BusinessStudies from './Components/Subjects/BusinessStudies/BusinessStudies';
import Biology from './Components/Subjects/Biology/Biology';
import Languages from './Components/Subjects/Languages/Languages';
import Art from './Components/Subjects/Art/Art';
import Architecture from './Components/Subjects/Architecture/Architecture';
import Law from './Components/Subjects/Law/Law';
import InformationTechnology from './Components/Subjects/InformationTechnology/InformationTechnology';
import Rankings from "./Components/Rankings/Rankings";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Survey from "./Components/Survey/Survey";
import Navbar from "./Components/Navbar/Navbar";
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
        <Navbar/>
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
      },
      {
        path: "/engineering",
        element: <Engineering />,
      },
      {
        path: "/businessstudies",
        element: <BusinessStudies />,
      },
      {
        path: "/Biology",
        element: <Biology />,
      },
      {
        path: "/languages",
        element: <Languages />,
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/architecture",
        element: <Architecture />,
      },
      {
        path: "/law",
        element: <Law />,
      },
      {
        path: "/informationTechnology",
        element: <InformationTechnology />,
      },
      // {
      //   path: "https://www.sliit.lk/",
      //   element: "https://www.sliit.lk/",
      // },
      
    ]);
    return <RouterProvider router={router} />;
  
 
}

export default App;
