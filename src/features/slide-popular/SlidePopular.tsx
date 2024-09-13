import React from 'react';
import style from './SlidePopular.module.scss'
import Image from 'next/image';
import slideImg from '@/public/main/slider-popular/slide-img.png'
import { TSlidePopularItem } from '@/src/shared/types/slide-popular';

export const SlidePopular: React.FC<TSlidePopularItem> = ({title, maxValue, value}) => {
  return (
      <div className="relative overflow-hidden rounded-[15px]">
        <Image src={slideImg} alt='slide-img' width={295} height={300} quality={100} />
        <div className={"absolute top-0 left-0 right-0 bottom-0 flex items-end " + style.wrapper}>
          <div className="p-[0px_0px_22px_11px]">
            <h5 className="text-[20px] font-bold">{title}</h5>
            <p className='text-[20px] '>Статусы</p>
            <p className='text-[20px]'>В коллекции: {value} из {maxValue}</p>
          </div>
        </div>
      </div>
  );
};