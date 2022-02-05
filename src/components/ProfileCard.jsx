import React from 'react';
import profileImage from '../assets/hero-img.jpg';
function ProfileCard() {
  return (
    <div className="Profile-container w-fit  border-4 border-sky-500">
      <img className="h-40 w-44 object-contain" src={profileImage} alt="img" />
      <ProfileCardInfo />
    </div>
  );
}

const ProfileCardInfo = () => {
  return (
    <div className="info-container">
      <div className="breedName text-2xl ">{`Breed Name : German Shepard`}</div>
      <div className="origin text-2xl">{`Origin : Germany`}</div>
      <div className="height text-2xl">{`Height :55cm-60cm`}</div>
      <div className="weight text-2xl">{`Weight :55kg-60kg`}</div>
      <div className="coat text-2xl">{`Coat : Thick`}</div>
    </div>
  );
};

export default ProfileCard;
