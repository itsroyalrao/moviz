import { useState } from "react";

function MobileView() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="bg-yellow-400 px-12 py-2 flex justify-between items-center text-black text-3xl">
        <div className="font-bold pb-1">Moviez</div>
        <i className="fas fa-bars" onClick={() => setClicked(!clicked)}></i>
      </div>
      {clicked && (
        <>
          <div className="flex flex-col items-center gap-7">
            <div className="font-bold text-2xl cursor-pointer">Home</div>
            <div className="font-bold text-2xl cursor-pointer">Movies</div>
            <div className="font-bold text-2xl cursor-pointer">Tv Shows</div>
            <div className="font-bold text-2xl cursor-pointer">Genre</div>
            <div className="font-bold text-2xl cursor-pointer">Top Rated</div>
          </div>
          <div className="flex items-center gap-4">
            <i className="fas fa-search text-2xl cursor-pointer"></i>
            <i className="fas fa-user-circle text-4xl text-red-700 cursor-pointer"></i>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileView;
