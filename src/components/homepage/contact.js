'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Contact = () => {
    const [contact, setContact] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                const person = data?.users || [];
                setContact(person);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setError('Failed to fetch data');
            })
            .finally(() => setLoader(false));
    }, []);

    if (loader) { return <div>Loading...</div>; }
    if (error) { return <div>Error: failed to fetch data. {error}</div>; }

    return (
        <div>
            <div className='flex justify-between items-center my-2'>
                <h4 className='font-bold mb-3 text-lg text-gray-500'>Contact</h4>
                <div className='text-gray-600 flex items-center gap-5'>
                    <span><svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_152)"> <rect width={24} height={24} fill="none" /> <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeLinejoin="round" /> <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="currentColor" /> </g> <defs> <clipPath id="clip0_15_152"> <rect width={24} height={24} fill="white" /> </clipPath> </defs> </g></svg></span>
                    <span><svg className='rotate-90' width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g strokeWidth={0} /><g strokeLinecap="round" strokeLinejoin="round" /><g > <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" /> </g></svg></span>
                </div>
            </div>
            {contact.map((person) => (
                    <div key={person.id} className='flex items-center gap-5 mb-3'>
                        <Image src={person.image} alt={person.firstName} width={43} height={43}
                            className='rounded-full border border-blue-600 bg-white'
                        />
                        <p className='font-medium'>{person.firstName} {person.lastName}</p>
                    </div>
            ))}
        </div>
    )
}

export default Contact