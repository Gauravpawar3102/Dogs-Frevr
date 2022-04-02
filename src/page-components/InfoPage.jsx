import React, { Children } from 'react';
import { BiUpvote, BiHeart, BiMessageRounded } from 'react-icons/bi';

import ProfileCard from '../components/ProfileCard';
import '../assets/hero-img.jpg';
import { logRoles } from '@testing-library/react';
import { info } from 'autoprefixer';
function InfoPage({ data, children }) {
  return (
    <div className="h-full w-screen flex flex-wrap gap-4 p-4">
      {data.map((card) => {
        return (
          <div className="Profile-container w-fit ">
            <img
              className="h-52 w-full object-contain "
              src={card.img}
              alt="img"
            />
            <div className="info-container p-4">
              <div className="breedName text-l ">{`Breed Name :${card.breed}`}</div>
              <div className="origin text-l">{`Origin : ${card.origin}`}</div>
              <div className="height text-l">{`Height :${card.meta.height.dogs}`}</div>
              <div className="weight text-l">{`Weight :${card.meta.weight.dogs}`}</div>
              <div className="coat text-l">{`Coat : ${card.meta.coat}`}</div>
            </div>
            <div className="container h-8 text-2xl flex justify-around items-center bg-slate-300 w-full">
              <BiHeart />
              <BiMessageRounded />
              <BiUpvote />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InfoPage;
