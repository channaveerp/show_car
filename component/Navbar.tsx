'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 my-4'>
      <nav className='flex items-center justify-between max-w[1440px] sm:px-16 px-6'>
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            alt='afaf'
            width={110}
            height={110}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title='SignIn'
          containerStyles={
            'text-primary-blue rounded-full bg-white min-w[130px'
          }
        />
      </nav>
    </header>
  );
};

export default Navbar;
