import './App.css';
// import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Landing />
      <Skills />
      {/* <Experience /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
