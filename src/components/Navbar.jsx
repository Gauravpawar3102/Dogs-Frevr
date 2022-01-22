import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar-container text-white  flex flex-row justify-between h-20  items-center w-screen p-4 bg-cyan-400 shadow-xl shadow-cyan-500/50">
      <Link
        to="/"
        className="left-container text-black text-2xl  ml-8 font-mono flex grow justify-start font-bold  "
      >
        Dogs-Forever
      </Link>
      <div className="right-container grow">
        <div className="menu ">
          <ul className="list flex  justify-evenly text-xl">
            <Link to="/">Home</Link>
            <Link to="/breeds">Breeds</Link>
            <Link to="/activity">Activity</Link>
            <Link to="/info">Info</Link>
            <Link to="/news">News</Link>
            <Link to="/quiz">Quiz</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
