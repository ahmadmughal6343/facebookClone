'use client'
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import VideoCard from "./videocard";

function UpArrow({ onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                fixed right-5 top-2/5 z-10 border-2 border-zinc-300
                w-12 h-12 flex items-center justify-center
                rounded-full bg-neutral-700/60 backdrop-blur
                ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-neutral-600/60"}
                transition-all duration-200
            `}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

function DownArrow({ onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                fixed right-5 top-1/2 z-10 border-2 border-zinc-300
                w-12 h-12 flex items-center justify-center
                rounded-full bg-neutral-700/60 backdrop-blur
                ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-neutral-600/60"}
                transition-all duration-200
            `}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

function VerticalMode() {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

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
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        nextArrow: <DownArrow disabled={currentSlide === videos.length - 1} />,
        prevArrow: <UpArrow disabled={currentSlide === 0} />,
        ref: sliderRef,
    };
    function scrollVideos(e) {
        e.preventDefault();
        if (e.deltaY > 0 && currentSlide < videos.length - 1) {
            sliderRef.current.slickNext();
        } else if (e.deltaY < 0 && currentSlide > 0) {
            sliderRef.current.slickPrev();
        }
    };
    return (
        <section onWheel={scrollVideos} className="slider-container size-full flex justify-center items-center">
            <div className="mt-20">
                <Slider {...settings}>
                    {videos.map(video => (
                            <div key={video.id} className="flex justify-center items-center w-full">
                                <VideoCard url={video.url} />
                            </div>
                    ))}
                    {loading && (
                        <div className="flex justify-center items-center p-5">
                            <div className="loader relative top-0 left-[50%]"></div>
                        </div>
                    )}
                </Slider>
            </div>
        </section>
    );
}

export default VerticalMode;
