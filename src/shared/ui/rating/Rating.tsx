import Image from 'next/image';
import React from 'react';

interface IProps {
  rating: number
}

export const Rating: React.FC<IProps> = ({rating}) => {

  return (
    <div className="mb-[20px]">
      <div className="flex items-center">
        {Array(5).fill(null).map((_, index) => (
          <Image 
            key={index} 
            src={(index + 1 <= Math.floor(rating)) ? '/main/seller-list/star-full.svg' : '/main/seller-list/star.svg'} 
            alt='star' 
            width={(index + 1 <= Math.floor(rating)) ? 20 : 18} 
            height={ (index + 1 <= Math.floor(rating)) ? 20 : 18} 
            className={'mr-[8px] ' + ((index + 1 <= Math.floor(rating)) ? 'mt-[1px]' : '') }
          />
        ))}
        <p className='text-secondary text-[17px] mb-[-3px]'>{rating}</p>
      </div>
    </div>
  );
};