// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
function Hero(props) {
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
            src={props.Image}
            alt={'Not Available'}
          />

          <a
            href={props.Reference}
            className="hero-img-name text-4xl mt-4 tracking-widest font-mono"
          >
            {props.Name}
          </a>
        </div>
        <div className="hero-right-container py-2  flex flex-col justify-center  grow  items-center   h-4/5 w-1/3">
          <div className="hero-information h-full flex flex-col gap-6 justify-center p-4">
            <div className="information font-mono font-medium text-4xl align-text-bottom place-self-center text-gray-900 bg-sky-400 px-2">
              Information
            </div>
            <div className="breedName text-2xl ">Breed Name :{props.Name}</div>
            <div className="origin text-2xl">Origin : {props.Origin}</div>
            <div className="height text-2xl">Height :{props.Height}</div>
            <div className="height text-2xl">Weight :{props.Weight}</div>
            <div className="coat text-2xl">Coat : {props.Coat}</div>
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
