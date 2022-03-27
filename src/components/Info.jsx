import React from 'react';

import { Link } from 'react-router-dom';
function Info({ Name, Image, Origin, Height, Weight, Coat }) {
  return (
    <div className="info-container">
      <div className="infoText ml-8  text-4xl font-mono font-semibold">
        Know Your Dog
      </div>
      <div className="infoContainer flex  gap-8 p-4 justify-around">
        <Infocard
          Name={Name}
          Image={Image}
          Origin={Origin}
          Height={Height}
          Weight={Weight}
          Coat={Coat}
        />
        <Infocard
          Name={Name}
          Image={Image}
          Origin={Origin}
          Height={Height}
          Weight={Weight}
          Coat={Coat}
        />
        <Infocard
          Name={Name}
          Image={Image}
          Origin={Origin}
          Height={Height}
          Weight={Weight}
          Coat={Coat}
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
