import React from 'react';
import image from '../assets/hero-img.jpg';
function Info() {
  return (
    <div className="info-container">
      <div className="infoText ml-8  text-4xl font-mono font-semibold">
        Know Your Dog
      </div>
      <div className="infoContainer flex p-4 justify-around">
        <Infocard />
        <Infocard />
        <Infocard />
      </div>
    </div>
  );
}
const Infocard = () => {
  return (
    <>
      <div className="infoCard-container  shadow-2xl  w-fit  ">
        <img
          className="info-img rounded-t-lg object-scale-down h-56 w-full"
          src={image}
          alt="Img"
        />
        <div className="infoCard-info flex flex-col  bg-red-200  capitalize gap-1 rounded-t-lg font-mono -translate-y-1 p-4">
          <div className="infoCard-name font-bold">{`German Shepard`}</div>
          <div className="infoCard-origin">{`Germany`}</div>
          <div className="infoCard-height">{`50Cm`}</div>
          <div className="infoCard-weight">{`40Kg`}</div>
        </div>
      </div>
    </>
  );
};

export default Info;
