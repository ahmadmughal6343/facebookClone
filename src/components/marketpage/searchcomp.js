'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from 'next/navigation';

const SearchComp = () => {
    const router = useRouter()
    const params = useSearchParams();
    const value = params.get("search");
    const [color, setColor] = useState(false);
    const [focused, setFocused] = useState(false);
    const [search, setSearch] = useState(value || '');
    let [recent, setRecent] = useState([]);
    const [del, setDel] = useState(false)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (search.trim() !== "") {
            params.set("search", search);
        } else {
            params.delete("search");
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    }, [search]);




    function searches(e) {
        if (e.key === 'Enter' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            recent.unshift(search);
            localStorage.setItem("recentActivity", JSON.stringify(recent));
        }
    }
    useEffect(() => {
        const getdata = () => {
            let storeData = localStorage.getItem("recentActivity");
            return JSON.parse(storeData) ?? [];
        };
        setRecent(getdata());
    }, []);
    const deleteItem = (e) => {
        setDel(!del);
        e.parentElement.remove();
        let siblingText = e.previousElementSibling.innerText;
        recent = recent.filter(curr => {
            return curr !== siblingText;
        })
        localStorage.setItem('recentActivity', JSON.stringify(recent));
    }

    return (
        <div className={`space-y-5 p-3 ${focused ? "shadow-xl" : "shadow-none"} transition-all duration-200 rounded-md`}>
            <div onClick={() => setFocused(false)} className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Marketplace</h1>
                <span className={`size-8 rounded-full ${color ? 'bg-[#c6cbff]' : 'bg-gray-300'} grid place-content-center`} onClick={() => { setColor(!color) }}>
                    <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth={0} /><g strokeLinecap="round" strokeLinejoin="round" />
                        <g><path fill={color ? '#231ffa' : '#000000'} d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" /> </g>
                    </svg>
                </span>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='flex items-center gap-2 bg-gray-100 w-full rounded-full px-3 py-1.5 mx-auto'
            >
                <Image src="/search.svg" alt="Search" height={14} width={16} />
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => searches(e)}
                    type="text"
                    value={search}
                    placeholder='What do you want to buy?'
                    className='bg-transparent outline-none flex-2 w-full'
                    onFocus={() => setFocused(true)}
                />
            </form>
            <AnimatePresence>
                {focused && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                    >
                        {
                            recent.length === 0
                                ? <p className='text-center text-gray-500 '>No recent search</p>
                                : recent.map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex justify-between items-center'
                                    >
                                        <p>{item}</p>
                                        <p
                                            onClick={(e) => deleteItem(e.target)}
                                            className='text-2xl cursor-pointer rotate-45'
                                        >
                                            +
                                        </p>
                                    </div>
                                ))
                        }
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SearchComp;