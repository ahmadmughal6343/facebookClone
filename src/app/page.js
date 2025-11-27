
import React from 'react'
import HomeRightAside from '../components/homepage/home-right-aside'
import HomeFeed from '../components/homepage/home-feed'
import HomeLeftAside from '../components/homepage/home-left-aside'

const Home = () => {

  return (
    <main className='bg-gray-200 h-screen pt-14 grid grid-cols-[1fr_3fr_1fr]'>
      <HomeRightAside />
      <HomeFeed />
      <HomeLeftAside />
    </main>
  )
}

export default Home

