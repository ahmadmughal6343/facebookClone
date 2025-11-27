'use client'
import React, { useEffect, useState } from 'react';
import Asidebar from './asidebar';
import ProductCard, { ProductCardSkeleton } from './products';
import axios from 'axios';
import locations from '../../constant/location';
import { NoFound } from '../homepage/menu';
import { useSearchParams } from 'next/navigation';

const MarketMainComp = () => {
  const params = useSearchParams();
  const val = params.get("search");
  const [value, setValue] = useState('')
  const [products, setProducts] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setValue(val||'')
  }
    , [val])
  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/carts");
        const allProducts = res.data.carts.flatMap(cart => cart.products);
        setProducts(allProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    if (value?.trim() !== "") {
      const filtered = products.filter((product) =>
        product?.title?.toLowerCase()?.includes(value?.trim()?.toLowerCase())
      );
      setFilterProduct(filtered);

    } else {
      setFilterProduct(products);
    }
  }, [value, products]);


  return (
    <div className='size-full overflow-y-auto px-10 py-2 scrollbar-custom'>
      {filterProduct.length !== 0 ? <h2 className='font-bold text-2xl text-zinc-900 mb-3'>Today's picks</h2> : ''}
      <div className={'grid grid-cols-3 gap-5'}>
        {loading
          ? [1, 2, 3, 4, 5, 6]?.map((_, i) => <ProductCardSkeleton key={i} />)
          : filterProduct.length !== 0
            ? filterProduct.map((prod, i) => (
              <ProductCard
                key={i}
                image={prod.thumbnail}
                title={prod.title}
                price={prod.price}
                location={locations[i]}
              />
            ))
            : ''
        }
      </div>
      <div className='flex justify-center items-center h-[80vh]'>

        {
          filterProduct.length !== 0
            ? ''
            : <NoFound style={'flex flex-col justify-center items-center gap-2'} />
        }
      </div>
    </div>
  )
}

export default MarketMainComp;
