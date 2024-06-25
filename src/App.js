import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Componenets/Navbar/NavBar';
import Footer from './Componenets/Footer/Footer';
import GoToTop from './Componenets/GoToTop/GoToTop';
import "./App.css"
import PrivacyPolicy from './Componenets/Footer/PrivacyPolicy/PrivacyPolicy';
import AllSubComponents from './Componenets/Global/Animation/Main/AllSubComponents';
import TermsOfServices from './Componenets/Footer/TermsOfServices/TermsOfServices';

// import Reveal from './Componenets/Global/Reveal';


function App() {

  return (
    <>
    <BrowserRouter>
        {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<NavBar/>}>
        <Route index element={<AllSubComponents/>}/>
        <Route path="/privacypolicy" element={  <PrivacyPolicy/>}/>
        <Route path="/termsofservices" element={  <TermsOfServices/>}/>
          </Route>
      </Routes>
      <GoToTop/>
      <Footer/> 
    </BrowserRouter>

    </>
  );
}

export default App;
