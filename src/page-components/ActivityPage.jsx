import React from 'react';
import image from '../assets/progress.bmp';

function ActivityPage() {
  return (
    <div className="flex h-screen justify-center mt-16">
      <img className="h-1/2" src={image} alt="work in progress" />
    </div>
  );
}

export default ActivityPage;
