import React from 'react';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './layout/Footer';

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Stacks />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;