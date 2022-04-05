import React from 'react';

function NewsPage({ data }) {
  return (
    <div className="h-screen">
      <div className="news-text text-4xl capitalize font-mono font-semibold ml-8  flex justify-center my-4 tracking-widest ">
        Latest News
      </div>
      {data.map((dataa, index) => {
        return (
          <div className=" news-container-page ">
            <div className="news-grid grid grid-rows-fr  grid-cols-3 gap-4   place-items-center mb-4 h-full m-2">
              <div className="box1  col-span-3 h-auto w-4/5 grow   border-sky-500 rounded-lg  shadow-lg shadow-zinc-500/20 ">
                <a href={dataa.url} target="_blank" rel="noopener noreferrer">
                  <p
                    className="mt text-gray-600 capitalize dark:text-gray-300 items-center h-full  w-full overflow-scroll text-left p-8 scrollbar-hide  font-bold border-collapse hover:text-gray-900 hover:underline"
                    key={index}
                  >
                    {dataa.title}
                  </p>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// const NewsCard = () => {
//   return (

//   );
// };

export default NewsPage;
