import React from 'react';
import { Link } from 'react-router-dom';
function News() {
  return (
    <div className="news-container">
      <div className="news-text text-4xl capitalize font-mono font-semibold ml-8  flex justify-center  tracking-widest">
        News
      </div>
      <div className="news-grid grid grid-rows-fr  grid-cols-3 gap-4  place-items-center h-128 m-8">
        <div className="box1 col-span-2 h-full grow border-double border-4 border-sky-500 rounded-lg  shadow-lg shadow-cyan-500/50 ">
          <div className="flex  w-full items-center justify-center gap-2 h-full">
            <img
              className="object-cover rounded-xl  h-28 w-28"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="img"
            />

            <p className="mt text-gray-500 capitalize dark:text-gray-300 items-center h-28   w-3/4 overflow-scroll text-left scrollbar-hide  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugiat, aspernatur quisquam accusamus nisi sed
              consequuntur voluptas quod, cumque ullam amet sint! Pariatur
              reprehenderit, accusamus iusto error nesciunt laboriosam esse?
            </p>
          </div>
        </div>
        <div className="box2 bg-transparent"></div>
        <div className="box3 bg-transparent"></div>
        <div className="box1 col-span-2 h-full grow border-double border-4 border-sky-500 rounded-lg  shadow-lg shadow-indigo-500/50 ">
          <div className="flex  w-full items-center justify-center gap-2 h-full">
            <p className="mt text-gray-500 capitalize dark:text-gray-300 items-center h-28   w-3/4 overflow-scroll text-right scrollbar-hide  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugiat, aspernatur quisquam accusamus nisi sed
              consequuntur voluptas quod, cumque ullam amet sint! Pariatur
              reprehenderit, accusamus iusto error nesciunt laboriosam ?
            </p>
            <img
              className="object-cover rounded-xl  h-28 w-28"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="img"
            />
          </div>
        </div>
      </div>

      <Link
        to="/news"
        className="news-more flex justify-end  w-full font-mono text-2xl text-emerald-500 underline"
      >
        More...
      </Link>
    </div>
  );
}

export default News;
