import React from 'react';
import heroimg from '../src/assets/hero-img.jpg';
function Hero() {
  return (
    <div className="hero-container h-screen w-screen flex mt-4">
      <div
        className="hero-left-container flex flex-col items-center  justify-center h-2/3 w-2/3 p-4
      "
      >
        <div className="dod border-double border-4 border-sky-500 mb-4 font-semibold text-2xl py-2 px-4">
          Dog Of The Day
        </div>

        <img
          className=" h-2/3  w-2/3 grow object-scale-down"
          src={heroimg}
          alt="img"
        />

        <div className="hero-img-name text-4xl mt-4 tracking-widest font-mono">
          German Shepard
        </div>
      </div>
      <div className="hero-right-container bg-purple-400 flex flex-col justify-center grow  items-center h-2/3 w-1/3">
        <div className="hero-information h-full flex flex-col gap-6 justify-center">
          <div className="information font-mono text-4xl align-text-bottom place-self-center">
            Information
          </div>
          <div className="breedName text-2xl">{`Breed Name : German Shepard`}</div>
          <div className="origin text-xl">{`Origin : Germany`}</div>
          <div className="height text-xl">{`Height :55cm-60cm`}</div>
          <div className="weight text-xl">{`Weight :55kg-60kg`}</div>
          <div className="coat text-xl">{`Coat : Thick`}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
