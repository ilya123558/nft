'use client'
import { TNftItem } from '@/src/shared/types/nftList';
import { Button } from '@/src/shared/ui/button/Button';
import Image from 'next/image';
import React from 'react';

export const NftItem: React.FC<TNftItem> = ({price, title, value}) => {
  return (
    <li className={`w-[295px] bg-primary p-[20px] flex flex-col items-center relative rounded-[20px] `}>
      <Image src={'/main/nft-list/nft-img.png'} alt='seller-item-img' width={255} height={255} className='mb-[25px]'/>
      <div className="w-full">
        <h4 className='text-[20px] font-bold mb-[20px]'>{title}</h4>
        <div className="flex items-center justify-between">
          <p className='text-secondary'>Цена</p>
          <p className='text-[20px] font-bold'>{value} Del</p>
        </div>
        <div className="flex justify-end">
          <p className='text-secondary'>{price}р</p>
        </div>
        <div className="w-full flex items-center mt-[24px]">
          <div className="w-full flex items-center ">
            <button className='m-[0px_27px_0px_13px]'>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04 20.42 3.63986 19.39 2.60986C18.36 1.57986 16.96 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04 1 3.63999 1.57986 2.60999 2.60986C1.57999 3.63986 1 5.04 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z" stroke="#EBEBDA" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 20.3301C7.55 20.3301 8 19.8901 8 19.3501C8 18.8101 7.55 18.3701 7 18.3701C6.45 18.3701 6 18.8101 6 19.3501C6 19.8901 6.45 20.3301 7 20.3301Z" stroke="#EBEBDA" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 20.3301C18.55 20.3301 19 19.8901 19 19.3501C19 18.8101 18.55 18.3701 18 18.3701C17.45 18.3701 17 18.8101 17 19.3501C17 19.8901 17.45 20.3301 18 20.3301Z" stroke="#EBEBDA" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.0498 0.779785H3.0498L5.70972 12.9502C5.80972 13.4002 6.05981 13.7901 6.42981 14.0801C6.78981 14.3601 7.23972 14.51 7.70972 14.5H17.4897C17.9397 14.5 18.3897 14.3401 18.7397 14.0601C19.0997 13.7901 19.3397 13.4 19.4397 12.96L21.0897 5.68018H4.11975" stroke="#EBEBDA" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Button onClick={() => {}}>Купить</Button>
        </div>
      </div>
    </li>
  );
};