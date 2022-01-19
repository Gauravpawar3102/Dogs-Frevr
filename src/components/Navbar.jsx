import React from 'react';

function Navbar() {
  return (
    <div className="navbar-container text-white  flex flex-row justify-between h-20  items-center w-screen p-4 bg-cyan-400 shadow-xl shadow-cyan-500/50">
      <div className="left-container text-black text-2xl  ml-8 font-mono flex grow justify-start font-bold  ">
        Dogs-Forever
      </div>
      <div className="right-container grow">
        <div className="menu ">
          <ul className="list flex  justify-evenly text-xl">
            <li>Home</li>
            <li>Breeds</li>
            <li>Activity</li>
            <li>Info</li>
            <li>News</li>
            <li>Quiz</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
