import React from 'react';

function NewsPage() {
  return (
    <div className="h-screen">
      <div className="news-text text-4xl capitalize font-mono font-semibold ml-8  flex justify-center  tracking-widest ">
        News
      </div>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

const NewsCard = () => {
  return (
    <div className="  ">
      <div className="news-grid grid grid-rows-fr  grid-cols-3 gap-4  place-items-center  h-full m-8">
        <div className="box1 col-span-3 h-full grow border-double border-4 border-sky-500 rounded-lg  shadow-lg shadow-cyan-500/50 ">
          <div className="flex  w-full items-center justify-center gap-2 h-full">
            <img
              className="object-cover rounded-sm ml-4 grow h-4/5 w-32"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="img"
            />

            <p className="mt text-gray-500 capitalize dark:text-gray-300 items-center h-3/4   w-3/4 overflow-scroll text-left scrollbar-hide  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugiat, aspernatur quisquam accusamus nisi sed
              consequuntur voluptas quod, cumque ullam amet sint! Pariatur
              reprehenderit, accusamus iusto error nesciunt laboriosam esse?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
