import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componenets/Navbar/NavBar';
import Home from './Componenets/Home/Home';
import AboutMe from './Componenets/About/AboutMe';
import Services from './Componenets/Services/Services';
import Skills from './Componenets/Skills/Skills';
import Projects from './Componenets/Projects/Projects';
import Contact from './Componenets/Contact/Contact';
import Footer from './Componenets/Footer/Footer';
import GoToTop from './Componenets/GoToTop/GoToTop';

function App() {
  return (
    <>
        <NavBar/>
        <Home />
        <AboutMe/>
        <Services/>
        <Skills/>
        <Projects/>
        <Contact/>
        <GoToTop/>
        <Footer/>

    </>
  );
}

export default App;
