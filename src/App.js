import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projectes from './components/Projectes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills/>
      <Projectes/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
