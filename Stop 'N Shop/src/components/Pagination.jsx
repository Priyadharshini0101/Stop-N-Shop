import React from "react";

function Pagination({ postsPerPage, length, handlePagination, currentPage }) {
  const paginationNumbers = [];
  const count = Math.ceil(length / postsPerPage);

  for (let i = 1; i <= count; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="flex py-[25px]">
      <div className="flex w-max border  justify-center">
        {paginationNumbers.map((pageNumber, index) => (
          <button
            key={pageNumber}
            className={` h-[48px] w-[48px] xs:w-[24px] xs:h-[24px] border-black-900_68 border  ${
              currentPage === pageNumber
                ? `bg-black-900_0c  `
                : `hover:bg-black-900_26`
            }`}
            onClick={() => handlePagination(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
