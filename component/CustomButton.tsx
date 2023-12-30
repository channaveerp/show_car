'use client';
import { CustomButtonProps } from '@/types';
import React from 'react';

const CustomButton = (props: CustomButtonProps) => {
  const { title, handleClick, containerStyles, btnType } = props;
  return (
    <button
      disabled={false}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      type={btnType}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
