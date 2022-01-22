import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from '../src/components/Hero';
import Info from './components/Info';
import News from './components/News';
import ActivityPage from './page-components/ActivityPage';
import BreedsPage from './page-components/BreedsPage';
import InfoPage from './page-components/InfoPage';
import NewsPage from './page-components/NewsPage';
import Quiz from './page-components/Quiz';
import ErrorPage from './page-components/ErrorPage';

function App() {
  return (
    <>
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Hero />
                <Info />
                <News />
              </div>
            }
          />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
