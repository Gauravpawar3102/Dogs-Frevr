import image from '../assets/hero-img.jpg';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
function Info() {
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
        More...
      </Link>
    </div>
  );
}
const Infocard = () => {
  const [bName, setBName] = useState('German shepard');
  const [origin, setOrigin] = useState('Germany');
  const [height, setHeight] = useState('55cm-60cm');
  const [weight, setWeight] = useState('56kg-65kg');
  return (
    <>
      <div className="infoCard-container grow shadow-2xl  w-fit  ">
        <img
          className="info-img rounded-t-lg object-scale-down h-56 w-full"
          src={image}
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
