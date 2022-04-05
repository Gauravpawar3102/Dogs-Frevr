import React from 'react';
import { BiUpvote, BiMessageRounded } from 'react-icons/bi';
import { BsSuitHeartFill } from 'react-icons/bs';

// import ProfileCard from '../components/ProfileCard';
// import '../assets/hero-img.jpg';
// import { logRoles } from '@testing-library/react';
// import { info } from 'autoprefixer';
function InfoPage({ data }) {
  return (
    <div className="body-section bg-slate-100 ">
      <div className="h-full w-screen flex justify-center flex-wrap gap-8 p-8 ">
        {data.map((card) => {
          return (
            <div className="Profile-container p-4 border-2 border-y-black w-fit rounded-md grow  ">
              <img
                className="h-52 w-full object-contain "
                src={card.img}
                alt="img"
              />
              <div className="info-container p-4  ">
                <div className="breedName text-lg b ">{`Breed Name :${card.breed}`}</div>
                <div className="origin text-lg">{`Origin : ${card.origin}`}</div>
                <div className="height text-lg ">{`Height :${card.meta.height.dogs}`}</div>
                <div className="weight text-lg">{`Weight :${card.meta.weight.dogs}`}</div>
                <div className="coat text-lg">{`Coat : ${card.meta.coat}`}</div>
              </div>
              <div className="container h-8 text-2xl flex justify-around items-center  bg-white w-full ea">
                <BsSuitHeartFill className="heart text-black  hover:text-orange-600 hover:scale-125 transition-all  duration-300 ease-in  " />
                <BiMessageRounded className="comment text-black  hover:text-cyan-600 hover:scale-125 transition-all  duration-300 ease-in  " />
                <BiUpvote className="upvote text-black  hover:text-green-700 hover:scale-125 transition-all  duration-300 ease-in  " />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfoPage;
