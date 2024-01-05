'use client';
import { CustomSearchManufatcurerProps } from '@/types';
import React, { useState } from 'react';

const SearchManufacturer = (props: CustomSearchManufatcurerProps) => {
  const { manufacturer, setManufacturer } = props;
  const [query, setQuery] = useState('');
  console.log('manufacturer', manufacturer);

  const handleSearch = (query: string) => {
    const data = [
      'result1',
      'resultbcbcv2',
      'resultfsdfsdf3',
      'resulnbcvnbvnvt4',
    ].filter((resultes) =>
      resultes.toLowerCase().includes(query.toLowerCase())
    );
    setManufacturer(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search for car manufacturer here'
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchManufacturer;
