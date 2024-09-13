import { SellerItem } from '@/src/features/seller-item/SellerItem';
import { TSellerList } from '@/src/shared/types/seller';
import { Pagination } from '@/src/shared/ui/pagination/Pagination';
import React from 'react';

export const SellerList = () => {
  const list: TSellerList = [
    {rating: 2.35, withTick: true},
    {rating: 2.35, withTick: false},
    {rating: 2.35, withTick: false},
    {rating: 2.35, withTick: true},
    {rating: 2.35, withTick: true},
    {rating: 2.35, withTick: false},
    {rating: 2.35, withTick: false},
    {rating: 2.35, withTick: true}
  ]

  return (
    <div className="">
      <div className='flex items-center justify-between mt-[100px]'>
        <div className='text-[40px] font-bold'>Продавцы</div>
        <button className='bg-[#bdcf01] px-[30px] py-[7px] text-[#000] rounded-[10px]'>
          Посмотреть всё
        </button>
      </div>
      <ul className='mt-[40px] flex flex-wrap gap-[20px]'>
        {list.map((item, index) => (
          <SellerItem key={index} {...item} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
};