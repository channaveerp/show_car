'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const CustomButton = (props: CustomButtonProps) => {
  const {
    title,
    handleClick,
    containerStyles,
    btnType,
    rightIcon,
    textStyles,
  } = props;
  return (
    <button
      disabled={false}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      rightIcon={rightIcon}
      type={btnType}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h6'>
          <Image src={rightIcon} alt='ririr' fill className='object-contain' />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
