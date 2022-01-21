import './App.css';
import Navbar from './components/Navbar';
import Hero from '../src/components/Hero';
import Info from './components/Info';
import News from './components/News';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Info />
      <News />
    </div>
  );
}

export default App;
