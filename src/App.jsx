import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import HomeMenu from "./Components/HomeMenu/HomeMenu";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";
import HighLights from "./Components/HighLights/HighLights";
import Achievers from "./Components/Achievers/Achievers";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <>
        <div className="app">
          <div className="appGlass">
            <SideBar />
            <Routes>
              <Route path="/" element={<HomeMenu title="Welcome" />} />
              {/* <Route path="/about" element={<About title="About" />} /> */}
              <Route path="/courses" element={<Courses title="Courses" />} />
              <Route
                path="/highlights"
                element={<HighLights title="HighLights" />}
              />
              <Route
                path="/achievers"
                element={<Achievers title="Achievers" />}
              />
              <Route path="/contact" element={<Contact title="Contact" />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
