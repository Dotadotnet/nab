import React from 'react';

import Next from "@/components/icons/Next"
import Prev from "@/components/icons/Prev"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  totalPages = totalPages && totalPages > 0 ? totalPages : 1;

  // Function to generate page numbers with ellipsis
  const generatePageNumbers = () => {
    const delta = 2; // Number of pages to show around current page
    const range = [];
    const rangeWithDots = [];
    let l = null;

    // Generate range of pages to show
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    // Add first page
    rangeWithDots.push(1);

    // Add ellipsis after first page if needed
    if (range[0] > 2) {
      rangeWithDots.push('...');
    } else if (range[0] === 3) {
      rangeWithDots.push(2);
    }

    // Add range pages
    rangeWithDots.push(...range);

    // Add ellipsis before last page if needed
    if (range[range.length - 1] < totalPages - 1) {
      rangeWithDots.push('...');
    } else if (range[range.length - 1] === totalPages - 2) {
      rangeWithDots.push(totalPages - 1);
    }

    // Add last page if there's more than one page
    if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const pageNumbers = totalPages > 1 ? generatePageNumbers() : [1];

  return (
    <div className="flex justify-center mt-4 gap-x-2">
      <span
        className="custom-button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <Next className="h-6 w-6 transition-transform duration-300 transform group-hover:translate-x-1 group-focus:translate-x-1" />
      </span>

      {pageNumbers.map((page, index) => (
        page === '...' ? (
          <span
            key={`ellipsis-${index}`}
            className="custom-button w-11 h-11 flex items-center justify-center text-lg bg-gray-300 text-black"
          >
            ...
          </span>
        ) : (
          <span
            key={page}
            className={`custom-button w-11 h-11 flex items-center justify-center text-lg ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        )
      ))}
      
      <span
        className="custom-button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <Prev className="h-6 w-6 transition-transform duration-300 transform group-hover:-translate-x-1 group-focus:-translate-x-1" />
      </span>
    </div>
  );
};

export default Pagination;