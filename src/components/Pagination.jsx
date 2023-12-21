import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function Pagination({ pageNumber, setPageNumber, totalPage }) {
  const [clicked, setClicked] = useState(1);

  const allPages = [];
  for (let i = pageNumber; i < totalPage && i < pageNumber + 20; i++) {
    allPages.push(i);
  }

  return (
    <div className="flex justify-center">
      <div className="w-[80%] flex items-center gap-4 bg-yellow-400 text-black px-4 text-2xl rounded">
        <div className="flex truncate overflow-hidden">
          {allPages.map((page) => (
            <div key={page}>
              <Link
                className={`flex px-5 py-3 hover:bg-[#121212] hover:text-white ${
                  clicked === page ? "bg-[#121212] text-white" : ""
                }`}
                onClick={() => {
                  setClicked(page);
                  setPageNumber(page);
                }}
              >
                {page}
              </Link>
            </div>
          ))}
        </div>

        <div className="">.....</div>
        <div className="">{totalPage}</div>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
  totalPage: PropTypes.number,
};

export default Pagination;
