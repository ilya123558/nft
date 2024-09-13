import { NftItem } from '@/src/features/nft-item/NftItem';
import { TNftList } from '@/src/shared/types/nftList';
import { Pagination } from '@/src/shared/ui/pagination/Pagination';
import React from 'react';

export const NftList = () => {
  const list: TNftList = [
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
    {title: 'Хомяк #2 - Акционный', value: 500, price: 1500},
  ]

  return (
    <div className='mt-[130px]'>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <p className=' text-[20px] text-[#EBEBDA]'>Категория: Статусы</p>
          <button className='p-[17px]'>
            <svg className={`rotate-[180deg]`} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7L7 1L1 7" stroke="#EBEBDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <button>
            <svg className='mr-[20px]' width="26" height="28" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.48 1H2.18994C1.52994 1 1 1.52994 1 2.18994V10.48C1 11.14 1.52994 11.6699 2.18994 11.6699H10.48C11.14 11.6699 11.6699 11.14 11.6699 10.48V2.18994C11.6699 1.52994 11.14 1 10.48 1Z" stroke="#949B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.48 14.3301H2.18994C1.52994 14.3301 1 14.86 1 15.52V23.8101C1 24.4701 1.52994 25 2.18994 25H10.48C11.14 25 11.6699 24.4701 11.6699 23.8101V15.52C11.6699 14.86 11.14 14.3301 10.48 14.3301Z" stroke="#949B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.8101 14.3301H15.52C14.86 14.3301 14.3301 14.86 14.3301 15.52V23.8101C14.3301 24.4701 14.86 25 15.52 25H23.8101C24.4701 25 25 24.4701 25 23.8101V15.52C25 14.86 24.4701 14.3301 23.8101 14.3301Z" stroke="#949B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.8101 1H15.52C14.86 1 14.3301 1.52994 14.3301 2.18994V10.48C14.3301 11.14 14.86 11.6699 15.52 11.6699H23.8101C24.4701 11.6699 25 11.14 25 10.48V2.18994C25 1.52994 24.4701 1 23.8101 1Z" stroke="#949B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <button>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6201 1H2.37988C1.61988 1 1 1.49986 1 2.10986V9.89014C1 10.5001 1.61988 11 2.37988 11H23.6201C24.3801 11 25 10.5001 25 9.89014V2.10986C25 1.49986 24.3801 1 23.6201 1Z" stroke="#85848A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.6201 15H2.37988C1.61988 15 1 15.4999 1 16.1099V23.8901C1 24.5001 1.61988 25 2.37988 25H23.6201C24.3801 25 25 24.5001 25 23.8901V16.1099C25 15.4999 24.3801 15 23.6201 15Z" stroke="#85848A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <ul className='mt-[40px] flex flex-wrap gap-[20px]'>
        {list.map((item, index) => (
          <NftItem key={index} {...item} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
};