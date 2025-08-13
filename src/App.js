import { useState,useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    isLoaded ? (
        <div className='bg-[#FFFAFA] z-0'>
          <Header />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )
      :
      (
      <div className="flex justify-center items-center min-h-screen">
        <img src={require("./assets/loader.gif")} alt="loader" />
      </div>
    )
  );
}

export default App;
