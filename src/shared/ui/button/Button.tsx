'use client'
import React, { PropsWithChildren } from 'react';

interface IProps {
  onClick: () => void
}

export const Button: React.FC<PropsWithChildren<IProps>> = ({children, onClick}) => {
  return (
    <button onClick={onClick} className='w-full flex items-center justify-center transition-all active:scale-95 p-[10px] border-[1px] rounded-[15px] border-yellow text-[22px]'>
      {children}
    </button>
  );
};