import { useState } from "react";

function MobileView() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="bg-yellow-300 px-4 py-2 flex justify-between items-center text-black text-2xl sticky top-0">
        <div className="font-bold">Moviez</div>
        <i
          className={`fas fa-bars ${
            clicked && "transform transition-transform rotate-90"
          }`}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
      {clicked && (
        <>
          <div className="px-4 py-2 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-user"></i>
                <div className="text-xl">Profile</div>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-home"></i>
                <div className="text-xl">Home</div>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-film"></i>
                <div className="text-xl">Movies</div>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-tv"></i>
                <div className="text-xl">Tv Shows</div>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-bars-staggered"></i>
                <div className="text-xl">Genre</div>
              </div>
              <div className="flex items-center gap-2 font-bold cursor-pointer">
                <i className="fas fa-bolt"></i>
                <div className="text-xl">Top Rated</div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="w-full flex items-center p-1">
        <input
          type="text"
          className="w-full px-3 py-[6px] text-black rounded-s focus:outline-none"
          placeholder="Search..."
        />
        <i className="fas fa-search text-2xl text-black bg-yellow-400 px-2 py-[2px] rounded-e cursor-pointer"></i>
      </div>
    </div>
  );
}

export default MobileView;
