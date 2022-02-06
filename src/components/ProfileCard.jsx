import React from 'react';
import profileImage from '../assets/hero-img.jpg';
function ProfileCard() {
  return (
    <div className="Profile-container w-fit  border-4 border-sky-500">
      <img className="h-52 w-full object-cover " src={profileImage} alt="img" />
      <ProfileCardInfo />
    </div>
  );
}

const ProfileCardInfo = () => {
  return (
    <div className="info-container p-4">
      <div className="breedName text-l ">{`Breed Name : German Shepard`}</div>
      <div className="origin text-l">{`Origin : Germany`}</div>
      <div className="height text-l">{`Height :55cm-60cm`}</div>
      <div className="weight text-l">{`Weight :55kg-60kg`}</div>
      <div className="coat text-l">{`Coat : Thick`}</div>
    </div>
  );
};

const profileIcons = () => {
  return <div className="container"></div>;
};

export default ProfileCard;
