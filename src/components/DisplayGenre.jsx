import { Link } from "react-router-dom";

function DisplayGenre() {
  const tmdbGenres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center ps-4 py-2 bg-zinc-800">
      <div className="grid grid-cols-4 gap-4">
        {tmdbGenres.map((genre) => (
          <div key={genre.id}>
            <Link to={`/genre/${genre.name}`} className="hover:text-yellow-400">
              {" "}
              {genre.name}{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayGenre;
