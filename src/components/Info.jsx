import React from 'react';

import { Link } from 'react-router-dom';
function Info({ random1, random2, random3 }) {
  return (
    <div className="info-container ">
      <div className="infoText ml-8  text-4xl font-mono font-semibold">
        Know Your Dog
      </div>
      <div className="infoContainer flex  gap-8 p-4 justify-around overflow-x-scroll">
        <Infocard
          Name={random1.breed}
          Image={random1.img}
          Origin={random1.origin}
          // Height={random1.meta.height.dogs}
          // Weight={random1.meta.weight.dogs}
          // Coat={random1.meta.Coat}
        />
        <Infocard
          Name={random2.breed}
          Image={random2.img}
          Origin={random2.origin}
          // Height={random2.meta.height.dogs}
          // Weight={random2.meta.weight.dogs}
          // Coat={random2.meta.Coat}
        />
        <Infocard
          Name={random3.breed}
          Image={random3.img}
          Origin={random3.origin}
          // Height={random3.meta.height.dogs}
          // Weight={random3.meta.weight.dogs}
          // Coat={random3.meta.Coat}
        />
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
const Infocard = ({ Name, Image, Origin, Height, Weight }) => {
  return (
    <>
      <div className="infoCard-container grow shadow-2xl  w-fit  ">
        <img
          className="info-img rounded-t-lg object-scale-down h-56 w-full"
          src={Image}
          alt="Img"
        />
        <div className="infoCard-info flex flex-col items-center bg-red-200  capitalize gap-1 rounded-t-lg font-mono -translate-y-1 p-4">
          <div className="infoCard-name font-bold">{Name}</div>
          <div className="infoCard-origin">{Origin}</div>
          <div className="infoCard-height">{Height}</div>
          <div className="infoCard-weight">{Weight}</div>
        </div>
      </div>
    </>
  );
};

export default Info;
