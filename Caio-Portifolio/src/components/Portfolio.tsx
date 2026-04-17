import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Stacks from './Stacks';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

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