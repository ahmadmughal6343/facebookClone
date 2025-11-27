import React from 'react'
import { stories } from '../../constant/dbstories'
import { useState } from 'react'

const Stories = () => {
    let [index, setindex] = useState(0);
    const forward = () => {
        setindex(prev => prev === stories.length - 1 ? 0 : prev + 1);
        // Scroll to next story
        const nextStory = document.getElementById(`story-${index === stories.length - 1 ? 0 : index + 1}`);
        nextStory?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    const previous = () => {
        setindex(prev => prev === 0 ? stories.length - 1 : prev - 1);
        // Scroll to previous story
        const prevStory = document.getElementById(`story-${index === 0 ? stories.length - 1 : index - 1}`);
        prevStory?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    return (
        <div className='relative w-[95%]'>
            <div className="flex gap-3 overflow-x-auto mb-4 hide-scrollbar">
                {stories.map((s, i) => {
                    return (
                        <iframe
                            key={s.id}
                            id={`story-${i}`}
                            src={s.url}
                            width={180}
                            height={270}
                            className='rounded-xl bg-white shrink-0 shadow-md'
                        />
                    )
                })}
            </div>
            <button onClick={forward} className='cursor-pointer bg-white size-11 rounded-full absolute top-[40%] right-0 text-gray-500 text-2xl font-bold flex justify-center items-center'>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
            </button>
            <button onClick={previous} className='cursor-pointer bg-white size-11 rounded-full absolute top-[40%] left-0 text-gray-500 text-2xl font-bold flex justify-center items-center'>
                <svg className='rotate-180' width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
            </button>
        </div>
    )
}

export default Stories