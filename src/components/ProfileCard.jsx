import React from 'react';
// import profileImage from '../assets/hero-img.jpg';
import { BiUpvote, BiHeart, BiMessageRounded } from 'react-icons/bi';
function ProfileCard({ data }) {
  return (
    <div className="Profile-container w-fit ">
      <img className="h-52 w-full object-cover " src={data.img} alt="img" />
      <ProfileCardInfo />
      <ProfileIcons />
    </div>
  );
}
const ProfileCardInfo = ({ data }) => {
  return (
    <div className="info-container p-4">
      <div className="breedName text-l ">{`Breed Name :${data.breed}`}</div>
      <div className="origin text-l">{`Origin : ${data.origin}`}</div>
      <div className="height text-l">{`Height :55cm-60cm`}</div>
      <div className="weight text-l">{`Weight :55kg-60kg`}</div>
      <div className="coat text-l">{`Coat : Thick`}</div>
    </div>
  );
};

const ProfileIcons = () => {
  return (
    <div className="container h-8 text-2xl flex justify-around items-center bg-slate-300 w-full">
      <BiHeart />
      <BiMessageRounded />
      <BiUpvote />
    </div>
  );
};

export default ProfileCard;
