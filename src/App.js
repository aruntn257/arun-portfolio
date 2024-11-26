import './App.css';
import Header from './components/header.js';
import Hero from './components/hero.js';
import About from './components/About.js';
import Resume from './components/resume.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
