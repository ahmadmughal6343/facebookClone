import React from 'react';

const ProductCard = ({ image, title, price, location }) => {
  return (
    <div className=''>
      <img
        className='border border-stone-300 bg-stone-50 rounded-lg w-full h-65'
        src={image}
        alt={title}
      />
      <div className='p-1'>
        <h4 className='font-medium text-lg'>{"USD "+price}</h4>
        <p className='text-base'>{title}</p>
      <p className='text-sm font-light'>{location + ", Pakistan"}</p>
      </div>
    </div>
  )
}

export default ProductCard


export const ProductCardSkeleton = () => {
  return (
    <div className='rounded-lg p-1 animate-pulse'>
      <div className='bg-stone-200 rounded-lg w-full h-64 mb-2'></div>
      <div className='space-y-2'>
        <div className='h-6 bg-stone-300 rounded w-1/3'></div>
        <div className='h-4 bg-stone-300 rounded w-2/3'></div>
        <div className='h-4 bg-stone-300 rounded w-1/2'></div>
      </div>
    </div>
  );
};

