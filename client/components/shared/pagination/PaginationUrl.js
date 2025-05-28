"use client"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { usePathname } from 'next/navigation'
import { useState } from "react";


const Pagination = ({ total, scope }) => {
  const pathname = usePathname().split("/");
  const url = usePathname();

  var currentPage = 0;

  pathname.forEach(uri_scope => {
    if (parseInt(uri_scope)) {
      currentPage = parseInt(uri_scope)
    }
  });

  

  const totalPage = total ? Math.ceil(total / 10) : 1;
  const totalPages = totalPage && totalPage > 0 ? totalPage : 1;

  const pages = [...Array(totalPages).keys()].map((_, index) => index + 1);

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
  //  onPageChange(1) 
  return (
    <div className="flex justify-center  mt-4 gap-x-2">
      {
        currentPage !== totalPages ?
          <a
            href={url.replace(`/${currentPage}/`, `/${currentPage + 1}/`)}
            className="custom-button"
          >
            <MdNavigateNext className="h-6 w-6 transition-transform duration-300 transform group-hover:translate-x-1 group-focus:translate-x-1" />
          </a>
          : ''
      }


      {pages.map((page) => (
        <a
          key={page}
          href={url.replace(`/${currentPage}/`, `/${page}/`)}
          className={`custom-button w-11 h-11 flex items-center justify-center  text-lg ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          {page}
        </a>
      ))}
      {
        currentPage !== 1 ?
          <a
            href={url.replace(`/${currentPage}/`, `/${currentPage - 1}/`)}
            className="custom-button"
          >
            <GrFormPrevious className="h-6 w-6 transition-transform duration-300 transform group-hover:-translate-x-1 group-focus:-translate-x-1" />
          </a>
          : ''
      }

    </div>
  );
};

export default Pagination;
