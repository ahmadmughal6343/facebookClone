'use client'
import React, { useState, useEffect } from 'react'
import Contact from './contact';

const HomeLeftAside = () => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                const products = data.carts[0]?.products || [];
                setAds(products.slice(0, 2)); // Only show first 2 products
            })
            .catch(err => console.error('Fetch error:', err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className='p-4'>Loading ads...</div>;

    return (
        <aside className='p-3 overflow-auto scrollbar-custom transition-all duration-300'>
            <div>
                <div className='space-y-3'>
                    <h4 className='font-bold mb-3 text-lg text-gray-500'>Sponsored Ads</h4>
                    {ads.map((ad) => (
                        <div key={ad.id} className='flex items-center gap-3'>
                            <img
                                src={ad.thumbnail}
                                alt={ad.title}
                                className='size-30 object-cover rounded bg-white'
                            />
                            <p className='font-semibold'>{ad.title}</p>
                        </div>
                    ))}
                </div>
                <hr className='border-gray-400 my-2'/>
                <Contact/>
            </div>
        </aside>
    )
}

export default HomeLeftAside