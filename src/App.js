import React from 'react';
import './App.css';
import Navbar from '../src/layout/Navbar';
import Jumbotron from '../src/layout/Jumbotron';
import Service from './layout/Service';
import About from './layout/About';
import Features from './layout/Features';
import Team from './layout/Team';
import Testimonial from './layout/Testimonial';
import Call from './layout/Call';
import Contact from './layout/Contact';
import Footer from './layout/Footer';
import Linked from './layout/Linked';
import './assets/css/bootstrap.min.css';
import './assets/fonts/line-icons.css';
import './assets/fonts/line-icons.css';
import './assets/css/owl.theme.css';
import './assets/css/animate.css';
import './assets/css/responsive.css';
import './assets/ReactPageScroller';

function App() {
  return (
    <div className="App">
      <header id="header-wrap">
        <Navbar />
      </header>
      <Jumbotron />
      <Service />
      <About />
      <Features />
      <Team />
      <Testimonial />
      <Call />
      <Contact />
      <Footer />
      <Linked />
    </div>
  );
}

export default App;
