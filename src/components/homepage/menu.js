'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createItems, menu } from './menu-data'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [menuList, setMenuList] = useState(menu)

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setMenuList(menu)
      return
    }

    const filteredMenu = menu.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })).filter(section => section.items.length > 0)

    setMenuList(filteredMenu)
  }, [searchTerm])

  const nothingFound = searchTerm && menuList.length === 0

  return (
    <div className=' flex flex-col fixed top-13 right-10 z-50 w-[39em] h-[32em] bg-gray-100 rounded-xl shadow-xl'>
      <h2 className='text-2xl font-bold px-5 py-3'>Menu</h2>
      <div className='grid grid-cols-[23.5em_12em] gap-4 px-3 overflow-y-scroll scrollbar-custom pb-4'>

        <div>

          <div className='min-h-110 h-fit bg-white rounded-xl border border-gray-200'>
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='flex items-center gap-3 bg-gray-100 w-[90%] rounded-full px-5 py-1.5 mx-auto my-5'
              >
                <Image src="/search.svg" alt="Search" height={14} width={16} />
                <input
                  type="text"
                  placeholder='Search Menu'
                  className='bg-transparent outline-none flex-2 w-full'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>

              <div className='p-3'>
                {nothingFound ? (
                  <NoFound style={'flex flex-col justify-center items-center gap-2'}/>
                ) : (
                  menuList.map((section, index) => (
                    <Category key={index} head={section.heading} data={section.items} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='h-fit bg-white rounded-xl border border-gray-200 p-2'>
          <h2 className='font-bold text-xl p-2'>Create</h2>
          <div className='space-y-2'>
            {createItems?.map(item => (
              <div
                key={item.title}
                className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl cursor-pointer'
              >
                <div className='bg-gray-300 rounded-full p-2 grid place-items-center'>
                  <Image src={item.icon} alt={item.title} height={24} width={24} />
                </div>
                <h4 className='font-medium'>{item.title}</h4>
              </div>
            ))}

            {searchTerm &&
              createItems.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
              ).length === 0 && (
                <p className='text-center text-gray-500 py-4 text-sm'>Not found</p>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Category = ({ head, data }) => {
  if (data.length === 0) return null
  return (
    <div>
      <h3 className='text-lg font-semibold px-2'>{head}</h3>
      {data.map(item => (
        <div key={item.title} className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl cursor-pointer'>
          <Image src={item.icon} alt={item.title} height={33} width={33} />
          <div>
            <h4 className='font-semibold'>{item.title}</h4>
            <p className='text-sm text-gray-500'>{item.description}</p>
          </div>
        </div>
      ))}
      <hr className='my-2 border-gray-400' />
    </div>
  )
}

export const NoFound = ({style}) => {
  return (
    <div className={style}>
      <Image src="/no-found.png" alt="No found" height={140} width={140} />
      <h3 className='text-2xl font-bold text-gray-500'>We didn't find anything</h3>
      <p className='text-center text-gray-500'>Try different keywords or make sure that everything is spelt correctly.</p>
    </div>
  )
}

export default Menu
