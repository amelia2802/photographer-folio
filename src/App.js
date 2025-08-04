import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div className='bg-[#FFFAFA] z-0'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
