import React from 'react'
import Image from 'next/image'
import { homeRightAsideData } from './menu-data'
import Link from 'next/link'

const HomeRightAside = () => {
  return (
    <aside className='h-full p-3 overflow-hidden hover:overflow-auto scrollbar-custom transition-all duration-300'>
      <div className='font-semibold '>
        <div className='flex items-center gap-3 px-1 py-3'>
          <span className='inline-block size-9 bg-blue-900 rounded-full'></span>
        <p>Muhammad Ahmad</p>
        </div>
        <div className='space-y-1'>
          {homeRightAsideData.map((item, index) => (
            <ul key={index} className='flex items-center p-2 hover:bg-gray-300 cursor-pointer rounded-lg'>
              <li className='flex justify-center items-center gap-3'>
                <Image src={item.icon} alt={item.title} height={32} width={32} className='w-8 h-8 rounded-full' />
                <span>{item.title}</span>
              </li>
            </ul>
          ))}
        </div>
        <div className='text-sm text-gray-400 my-2 '>
          <Link className='hover:underline' href='https://free.facebook.com/privacy/policy/#'>Privacy . </Link>
          <Link className='hover:underline' href='https://web.facebook.com/policies_center/'>Terms . </Link>
          <Link className='hover:underline' href='https://web.facebook.com/business'>Advertising . </Link>
          <Link className='hover:underline' href='https://web.facebook.com/help/568137493302217'>Ad Choice . </Link>
          <Link className='hover:underline' href='https://web.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Cookies</Link>
        </div>
      </div>
    </aside>
  )
}

export default HomeRightAside
