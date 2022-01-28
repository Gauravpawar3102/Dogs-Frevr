import React from 'react';

function NewsPage() {
  return (
    <div className="h-screen">
      <div className="news-text text-4xl capitalize font-mono font-semibold ml-8  flex justify-center my-4 tracking-widest ">
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
      <div className="news-grid grid grid-rows-fr  grid-cols-3 gap-4  place-items-center mb-4 h-full m-2">
        <div className="box1  col-span-3 h-3/4 w-4/5 grow   border-sky-500 rounded-lg  shadow-lg shadow-zinc-500/20 ">
          <div className="flex  w-full items-center justify-center gap-2 h-full">
            <img
              className="object-cover rounded-sm grow h-full w-32"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="img"
            />

            <p className="mt text-gray-500 capitalize dark:text-gray-300 items-center h-3/4  mr-4 w-3/4 overflow-scroll text-left scrollbar-hide  ">
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
