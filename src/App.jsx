import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Skills Page*/}
        <Route path="/skills" element={<Skills />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
