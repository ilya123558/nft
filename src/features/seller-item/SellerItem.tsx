'use client'
import { TSellerItem } from '@/src/shared/types/seller';
import { Button } from '@/src/shared/ui/button/Button';
import { Rating } from '@/src/shared/ui/rating/Rating';
import Image from 'next/image';
import React from 'react';

export const SellerItem: React.FC<TSellerItem> = ({withTick, rating}) => {

  return (
    <li className={`w-[295px] bg-primary p-[20px] flex flex-col items-center relative ${withTick ? 'rounded-[20px_0px_20px_20px]' : 'rounded-[20px]'}`}>
      {withTick && (
        <div className='absolute top-[13px] right-[13px]'>
          <Image src={'/main/seller-list/tick.svg'} alt='tick' width={33} height={33} />
        </div>
      )}
      <Image src={'/main/seller-list/seller-item-img.svg'} alt='seller-item-img' width={255} height={220} className='mb-[20px]'/>
      <h4 className='text-[20px] font-bold mb-[12px]'>MAKAROVSKY</h4>
      <Rating rating={rating} />
      <Button onClick={() => {}}>Открыть</Button>
    </li>
  );
};