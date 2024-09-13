'use client'
import React, { useState } from 'react';

export const Pagination = () => {
  const maxPage = 5
  const [activePage, setActivePage] = useState(1)

  const prevPageHandle = () => {
    if(activePage === 1) {
      return
    }

    setActivePage(activePage - 1)
  }

  const nextPageHandle = () => {
    if(activePage === maxPage) {
      return
    }

    setActivePage(activePage + 1)
  }

  return (
    <div className='mt-[45px] w-full flex justify-center items-center text-[20px]'>
      <div className="flex items-center justify-center">
        <button className="flex items-center" onClick={prevPageHandle} disabled={activePage === 1}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 8H1" stroke={activePage === 1 ? "#85848A" : "#EBEBDA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 15L1 8L8 1" stroke={activePage === 1 ? "#85848A" : "#EBEBDA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className={`ml-[13px] mt-[1px] ${activePage === 1 ? "text-secondary" : ""}`}>Назад</div>
        </button>

        <div className="m-[0px_32px] flex mt-[3px]">
          {Array(maxPage).fill(null).map((_, index) => (
            <button key={index} className={`m-[0px_6px] ${(index + 1 === activePage) ? 'text-yellow' : '' }`} onClick={() => setActivePage(index + 1)}>{index + 1}</button>
          ))}
        </div>

        <button className="flex items-center" onClick={nextPageHandle} disabled={activePage === maxPage}>
          <div className={`mr-[13px] mt-[1px] ${activePage === maxPage ? "text-secondary" : ""}`}>Дальше</div>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H31" stroke={activePage === maxPage ? "#85848A" : "#EBEBDA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 1L31 8L24 15" stroke={activePage === maxPage ? "#85848A" : "#EBEBDA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};