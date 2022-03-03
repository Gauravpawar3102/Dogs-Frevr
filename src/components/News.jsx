import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function News() {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://daily-dog-news.p.rapidapi.com/news/ap',
      headers: {
        'x-rapidapi-host': 'daily-dog-news.p.rapidapi.com',
        'x-rapidapi-key': '75bc0c04d9mshad42a5402de3ceap123ca2jsn0eba70fbcded',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    return () => {};
  }, []);

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
              src={nImg}
              alt="img"
            />

            <p className="mt text-gray-500 capitalize dark:text-gray-300 items-center h-28   w-3/4 overflow-scroll text-left scrollbar-hide  ">
              {newstext}
            </p>
          </div>
        </div>
        <div className="box2 bg-transparent"></div>
        <div className="box3 bg-transparent"></div>
        <div className="box1 col-span-2 h-full grow border-double border-4 border-sky-500 rounded-lg  shadow-lg shadow-indigo-500/50 ">
          <div className="flex  w-full items-center justify-center gap-2 h-full">
            <p className="mt text-gray-500 capitalize dark:text-gray-300 items-center h-28   w-3/4 overflow-scroll text-right scrollbar-hide  ">
              {newstext}
            </p>
            <img
              className="object-cover rounded-xl  h-28 w-28"
              src={nImg}
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
