'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const Like = () => {
    const [like, setLike]=useState(false);
    return (
        <p onClick={() => setLike(!like)} className='cursor-pointer flex items-center justify-center gap-1 h-8 w-37 hover:bg-gray-200 rounded-md'>
            <Image src={`${like ? './like-blue.svg' : './like.svg'}`} alt='like' height={20} width={20} />
            <span className={`${like ? 'text-blue-700' : 'text-gray-500'}`}>Like</span>
        </p>
    )
}

export default Like
