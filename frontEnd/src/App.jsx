import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import "./MediaQuery.css";
import SocialIcons from "./Components/SocialIcons";
import FooterCorse from "./Components/FooterCourse";
import About from "./Components/About";
import Branch from "./Components/Branch";
import Contact from "./Components/Contact";
import Diploma from "./Components/Course/Diploma";
import Verification from "./Components/Verification";
import Discription from "./Components/Course/Discription";
import ComputerLanguage from "./Components/Course/ComputerLanguage";
import GraphicsDesign from "./Components/Course/GraphicsDesign";
import WebDevelopment from "./Components/Course/WebDevelopment";
import NielitCourse from "./Components/Course/NielitCourse";
import ComputerRepairing from "./Components/Course/ComputeeRepairing";
import Admin from "./Components/Admin";
import AdmissionForm from "./Components/AdmissionForm";
import Footer from "./Components/Footer";
import { UniversalContext } from "./context/universal";
import { adminContext } from "./context/admin"
function App() {
  const [confermModal, setConfermModal] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [allStudent, setAllStudent] = useState([]);
  return (
    <>
      <UniversalContext.Provider value={{ confermModal, setConfermModal, adminLogin, setAdminLogin }}>
        <Header />
        <SocialIcons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AdmissionForm" element={<AdmissionForm />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/course/Discription" element={<Discription />} />
          <Route path="/course/Diploma" element={<Diploma />} />
          <Route path="/course/ComputerLanguage" element={<ComputerLanguage />} />
          <Route path="/course/GraphicsDesign" element={<GraphicsDesign />} />
          <Route path="/course/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/course/ComputerRepairing" element={<ComputerRepairing />} />
          <Route path="/course/NielitCourse" element={<NielitCourse />} />
          <Route path="/admin" element={<adminContext.Provider value={{setAllStudent,allStudent}}><Admin/></adminContext.Provider>} />
        </Routes>
        <ToastContainer />
      </UniversalContext.Provider>
      <FooterCorse />
      <Footer />
    </>
  );
}
export default App;
