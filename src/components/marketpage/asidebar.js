'use client'
import React from 'react'
import SearchComp from './searchcomp'
import MarketComp from './marketcomp'
import { usePathname } from 'next/navigation'

const Asidebar = () => {
    const pathName = usePathname()
    return (
        <aside className={`size-full bg-white shadow-lg overflow-y-auto`}>
            <SearchComp />
            <div className='p-3'>
                <div className='font-medium'>
                    <MarketComp />
                </div>
                <hr className='border border-gray-200 my-2' />
                <div>

                </div>
            </div>
        </aside>
    )
}

export default Asidebar
