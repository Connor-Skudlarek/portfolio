import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Skills />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default App;
