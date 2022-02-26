import React, { useEffect, useState } from 'react';
// import heroimg from '../assets/hero-img.jpg';
import Axios from 'axios';
// import herobgimg from '../assets/hero-wave-png.png';
function Hero() {
  const [bName, setBName] = useState([]);
  const [bImg, setBImg] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [height, setHeight] = useState('Not Available');
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
          if (setHeight == null || 'Not available 🦄 ') {
            setHeight('Not Available 🦄');
          } else {
            console.log(random.meta.height);
            setHeight(random.meta.height.dogs);
          }
          if (setWeight == null || 'Not available') {
            setWeight('Not Available 🦄');
          } else {
            console.log(random.meta.weight);
            setWeight(random.meta.weight.dogs);
          }
          // console.log(random.meta.weight);
          // setWeight(random.meta.weight.dogs);

          setCoat(random.meta.coat);
          setReference(random.url);
          console.log('err');
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
    <div className="hero-breed ">
      <div className="hero-container bg-no-repeat bg-contain items-center  h-screen w-screen flex mt-4">
        <div
          className="hero-left-container  flex flex-col items-center  justify-center  h-2/3 w-2/3 p-4
      "
        >
          <div className="dod border-double border-4 border-sky-500 mb-4 font-semibold text-2xl py-2 px-4">
            Dog Of The Day
          </div>

          <img
            className=" h-2/3  w-2/3 grow object-scale-down"
            src={bImg}
            alt={'Not Available'}
          />

          <a
            href={reference}
            className="hero-img-name text-4xl mt-4 tracking-widest font-mono"
          >
            {bName}
          </a>
        </div>
        <div className="hero-right-container py-2  flex flex-col justify-center  grow  items-center   h-4/5 w-1/3">
          <div className="hero-information h-full flex flex-col gap-6 justify-center p-4">
            <div className="information font-mono font-medium text-4xl align-text-bottom place-self-center text-gray-900 bg-sky-400 px-2">
              Information
            </div>
            <div className="breedName text-2xl ">Breed Name :{bName}</div>
            <div className="origin text-2xl">Origin : {origin}</div>
            <div className="height text-2xl">Height :{height}</div>
            <div className="height text-2xl">Weight :{weight}</div>
            <div className="coat text-2xl">Coat : {coat}</div>
          </div>
        </div>
      </div>
      <BreedsSection />
    </div>
  );
}

const BreedsSection = () => {
  return (
    <div className="breedsSection   w-screen items-center ">
      <div className="BreedHeading  w-fit  font-mono font-bold text-4xl ml-8 ">
        Breeds
      </div>
      <div className="home-breed-container  text-2xl font-mono capitalize  h-28 gap-4 grid grid-cols-3 place-items-center items-center ">
        <div className="small  px-8 py-4 text-white bg-indigo-400">Small</div>
        <div className="medium  px-8 py-4 text-white bg-indigo-500">medium</div>
        <div className="large   px-8 py-4 text-white bg-indigo-700 ">Large</div>
      </div>
    </div>
  );
};

export default Hero;
