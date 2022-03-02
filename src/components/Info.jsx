import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
function Info() {
  const [bName, setBName] = useState('German shepard');
  const [bImg, setbImg] = useState('img');
  const [origin, setOrigin] = useState('Germany');
  const [height, setHeight] = useState('55cm-60cm');
  const [weight, setWeight] = useState('56kg-65kg');

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

          setbImg(random.img);
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

          //  setCoat(random.meta.coat);
          //  setReference(random.url);
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
    <div className="info-container">
      <div className="infoText ml-8  text-4xl font-mono font-semibold">
        Know Your Dog
      </div>
      <div className="infoContainer flex  gap-8 p-4 justify-around">
        <Infocard />
        <Infocard />
        <Infocard />
      </div>

      <Link
        to="/"
        className="info-more flex justify-end  w-full font-mono text-2xl text-emerald-500 underline"
      >
        More.....
      </Link>
    </div>
  );
}
const Infocard = () => {
  const [bName, setBName] = useState('German shepard');
  const [bImg, setbImg] = useState('img');
  const [origin, setOrigin] = useState('Germany');
  const [height, setHeight] = useState('55cm-60cm');
  const [weight, setWeight] = useState('56kg-65kg');

  return (
    <>
      <div className="infoCard-container grow shadow-2xl  w-fit  ">
        <img
          className="info-img rounded-t-lg object-scale-down h-56 w-full"
          src={bImg}
          alt="Img"
        />
        <div className="infoCard-info flex flex-col items-center bg-red-200  capitalize gap-1 rounded-t-lg font-mono -translate-y-1 p-4">
          <div className="infoCard-name font-bold">{bName}</div>
          <div className="infoCard-origin">{origin}</div>
          <div className="infoCard-height">{height}</div>
          <div className="infoCard-weight">{weight}</div>
        </div>
      </div>
    </>
  );
};

export default Info;
