'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlidePopular } from '@/src/features/slide-popular/SlidePopular';
import { TSlidePopularList } from '@/src/shared/types/slide-popular';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export const SliderPopular = () => {
  const list: TSlidePopularList = [
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
    {title: 'MAKAROVSKY', value: 50, maxValue: 60},
  ]

  return (
    <div className='relative'>
      <div className='text-[40px] font-bold mt-[120px] mb-[40px]'>Популярные</div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-custom-next',
          prevEl: '.swiper-button-custom-prev',
        }}
        modules={[Navigation]}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <SlidePopular {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='absolute w-full top-[232px] flex justify-between items-center z-50 '>
        <button className='ml-[-20px] transition-all active:scale-[0.8] swiper-button-custom-prev'>
          <Image src={'/main/slider-popular/left-arrow.svg'} width={30} height={33} alt='left-arrow'/>
        </button>
        <button className='mr-[-20px] transition-all active:scale-[0.8] swiper-button-custom-next'>
          <Image src={'/main/slider-popular/right-arrow.svg'} width={30} height={33} alt='right-arrow'/>
        </button>
      </div>

    </div>
  );
};