"use client"
import React from 'react'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from 'next/image';
import Stories from './stories'
import Like from './like'

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);
  const loader = useRef(null);
  const [showModel, setShowModel] = useState(false)
  async function fetchPosts() {
    const res = await axios.get("/api/feed");
    setPosts((prev) => [...prev, ...res.data]);
  }

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchPosts();
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="overflow-auto py-5 px-15 hide-scrollbar">
      <div className='flex flex-col items-center'>
        <div className='w-[95%] bg-white mb-5 p-3 rounded-xl'>
          <div className='flex items-center gap-3'>
            <Image
              className='rounded-full'
              src="/profilePic.jpg" alt="Profile" height={40} width={40}
            />
            <input onClick={() => setShowModel(true)} className='flex-1 h-10 bg-gray-200 rounded-full p-3 focus:outline-none cursor-pointer' placeholder="What's on your mind?" />
            <div onClick={() => setShowModel(false)} className={`${showModel ? 'block' : 'hidden'} w-screen h-screen bg-[rgba(173,173,173,0.8)] grid justify-center items-center absolute inset-0 z-50`}>
              <div className='w-[45em] h-[30em] bg-white rounded-xl px-5 py-2'>
                <div className='flex items-center '>
                  <h4 className='flex-1 text-center font-bold text-xl'>Create Post</h4>
                  <span onClick={() => setShowModel(false)} className=' text-3xl text-gray-600 font-semibold cursor-pointer'>&times;</span>
                </div>
                <hr className='border-gray-200 my-1' />
              </div>
            </div>
          </div>
          <hr className='border-gray-200 my-2' />
          <div className='flex justify-around items-center p-3'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image
                src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png"
                alt="live" height={25} width={25}
              />
              <span className='font-medium text-gray-600'>Live video</span>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image
                src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                alt="photos" height={25} width={25}
              />
              <span className='font-medium text-gray-600'>Photos/video</span>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <Image
                src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png"
                alt="feel" height={25} width={25}
              />
              <span className='font-medium text-gray-600'>Feeling/activity</span>
            </div>
          </div>
        </div>
        <Stories />
        {posts.map((p) => (
          <div key={p.id} className="bg-white w-[95%] rounded-xl  shadow p-4 mb-4 cursor-pointer">
            <div className='flex justify-between'>
              <div className="flex items-center mb-2">
                <img
                  src={`https://picsum.photos/seed/${p.user}/40`}
                  className="size-10 rounded-full mr-2"
                />
                <p className="font-semibold">{p.user}</p>
              </div>
              <div className='flex justify-center items-center gap-5 text-gray-500'>
                <span><svg className='rotate-90' width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g strokeWidth={0} /><g strokeLinecap="round" strokeLinejoin="round" /><g > <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /> </g></svg></span>
                <span><svg width="30" height="30" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth={0} /><g strokeLinecap="round" strokeLinejoin="round" /><g > <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="currentColor" /> </g></svg></span>
              </div>
            </div>
            <p className="mb-2">{p.text}</p>
            <img src={p.image} className="w-full h-[23em] rounded-lg" />
            <div className='pt-3'>
              <div className='text-gray-500 flex justify-between items-center' >
                <Like />
                <p className='cursor-pointer flex justify-center items-center gap-1 w-37 h-8 hover:bg-gray-200 rounded-md'>
                  <Image src='./comment.svg' alt='comment' height={20} width={20} />
                  <span>Comment</span>
                </p>
                <p className='cursor-pointer flex justify-center items-center gap-1 w-37 h-8 hover:bg-gray-200 rounded-md'>
                  <Image src='./share.svg' alt='comment' height={22} width={22} />
                  <span>Share</span>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={loader} className="h-10" />
      </div>
    </section>
  )
}

export default HomeFeed
