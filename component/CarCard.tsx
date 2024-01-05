'use client';

import { CarpopertiesPorps } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { CustomButton } from '.';

interface Carpoperties {
  car: CarpopertiesPorps;
}

const CarCard = ({ car }: Carpoperties) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='car-card  group'>
      <div className='car_card__content'>
        <h2 className='car-card__content-title'>
          {car.make} {car.model}
        </h2>
      </div>
      <div className='relative w-full my-3 h-40 object-contain'>
        <Image
          src={'/hero.png'}
          alt='car'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative w-full  flex mt-2 w-ful justify-between'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src={'/steering-wheel.svg'}
              width={20}
              height={20}
              alt='steering'
            />
            <p className='text-[14px]'>
              {car.transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={'/tire.svg'} width={20} height={20} alt='tire' />
            <p className='car-card__icon-text'>{car.drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={'/gas.svg'} width={20} height={20} alt='gas' />
            <p className='car-card__icon-text'>{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
