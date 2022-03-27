import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

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
  const [bName, setBName] = useState([]);
  const [bImg, setBImg] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [height, setHeight] = useState('Not Available 🦄');
  const [weight, setWeight] = useState('Not Available');
  const [coat, setCoat] = useState([]);
  const [reference, setReference] = useState([]);

  useEffect(() => {
    const asyncCall = async () => {
      const options = {
        method: 'GET',
        url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
        headers: {
          'x-rapidapi-host': 'dog-breeds2.p.rapidapi.com',
          'x-rapidapi-key':
            '75bc0c04d9mshad42a5402de3ceap123ca2jsn0eba70fbcded',
        },
      };

      Axios.request(await options)
        .then((response) => {
          console.log(response.data);
          let randomData = Math.ceil(Math.random() * response.data.length);
          console.log(randomData);
          console.log(response.data.length);
          const random = response.data[randomData - 2];
          // const random =
          // response.data[Math.floor(Math.random() * response.data.length )];

          console.log(random.breed);
          setBName(random.breed);
          console.log(random.img);

          setBImg(random.img);
          console.log(random.origin);

          setOrigin(random.origin);
          if (setHeight == null || 'Not available 🦄  ') {
            setHeight('Not Available 🦄');
          } else {
            console.log(random.meta.height);
            setHeight(random.meta.height.dogs);
          }
          if (setWeight == null || 'Not available🦄') {
            setWeight('Not Available 🦄');
          } else {
            console.log(random.meta.weight);
            setWeight(random.meta.weight.dogs);
          }
          // console.log(random.meta.weight);
          // setWeight(random.meta.weight.dogs);

          setCoat(random.meta.coat);
          setReference(random.url);
          // console.log('err');
          // setBName(random);
          // console.log(response.data.map((breed, i) => breed));
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    asyncCall();
  }, []);

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
                <Hero
                  Name={bName}
                  Image={bImg}
                  Reference={reference}
                  Origin={origin}
                  Height={height}
                  Weight={weight}
                  Coat={coat}
                />
                <Info
                  Name={bName}
                  Image={bImg}
                  Origin={origin}
                  Height={height}
                  Weight={weight}
                  Coat={coat}
                />
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
