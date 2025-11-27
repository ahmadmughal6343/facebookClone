'use client';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import VerticalMode from './slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReelsPage() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  const fetchVideos = async () => {
    if (loading || nextPageToken === null) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/videoFeed?pageToken=${nextPageToken}`);
      const data = await res.json();

      setVideos(prev => [...prev, ...data.videos]);
      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 200) {
        fetchVideos();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [nextPageToken, loading]);

  return (
    <main className='h-screen w-screen bg-neutral-950 text-white'>
        <VerticalMode />
        <div className='grid place-content-center bg-white fixed bottom-3 right-3 size-14 rounded-full cursor-pointer'>
          <img 
          className='size-10'
          src={'./postIcon.png'} alt='message'/>
        </div>
    </main>
  );
}