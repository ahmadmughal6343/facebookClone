import React from 'react';
import ReelsPage from '../../components/videospage/reels-page';

const VideosPage = () => {
  return (
    <>
      <ReelsPage/>
    </>
  )
}

export default VideosPage;


export function generateMetadata({params}){
  return{
    title: "Web Facebook | Reels",
  description: "Watch and share short, entertaining videos on Web Facebook Reels. Explore trending content from friends and creators.",
  }
}