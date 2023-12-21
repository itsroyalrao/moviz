function LaptopView() {
  return (
    <div className="bg-yellow-400 px-12 py-2 flex justify-between items-center text-black">
      <div className="font-bold text-3xl pb-1">Moviez</div>
      <div className="flex gap-7">
        <div className="font-bold text-xl cursor-pointer">Home</div>
        <div className="font-bold text-xl cursor-pointer">Movies</div>
        <div className="font-bold text-xl cursor-pointer">Tv Shows</div>
        <div className="font-bold text-xl cursor-pointer">Genre</div>
        <div className="font-bold text-xl cursor-pointer">Top Rated</div>
      </div>
      <div className="flex items-center gap-4">
        <i className="fas fa-search text-2xl cursor-pointer"></i>
        <i className="fas fa-user-circle text-4xl cursor-pointer"></i>
      </div>
    </div>
  );
}

export default LaptopView;
