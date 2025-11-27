'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { Store, Bell, Inbox, Shield, Handbag, ReceiptIcon, ChevronRight, Plus } from "lucide-react";

const MarketComp = () => {
    const router = useRouter();

    return (
        <>
            <MarketPages icon={<Store size={20} />} path={"/marketplace"} text={"Browse all"} />
            <MarketPages icon={<Bell size={20} />} path={"/marketplace/notifications"} text={"Notifications"} />
            <MarketPages icon={<Inbox size={20} />} path={"/marketplace/inbox"} text={"Inbox"} />
            <MarketPages icon={<Shield size={20} />} path={"/marketplace/status"} text={"Marketplace access"} />
            <div className='flex justify-between items-center hover:bg-stone-100 rounded-lg'>
                <MarketPages icon={<Handbag size={20} />} path={"/marketplace/you"} text={"Buying"} />
                <ChevronRight size={22} color='gray' />
            </div>
            <div className='flex justify-between items-center hover:bg-stone-100 rounded-lg'>
                <MarketPages icon={<ReceiptIcon size={20} />} path={"/marketplace/you/selling"} text={"Selling"} />
                <ChevronRight size={22} color='gray' />
            </div>
            <div
                className='flex justify-center items-center bg-blue-50 text-blue-500 py-2 m-1 rounded-lg cursor-pointer'
                onClick={() => router.push('/marketplace/create')}
            >
                <Plus size={20} />
                Create new list
            </div>
        </>
    )
}

export default MarketComp;

const MarketPages = ({ icon, path, text }) => {

    const pathName = usePathname();
    const router = useRouter();
    function navigate(p) {
        router.push(p)
    }

    return (
        <div
            className={`flex items-center gap-3 p-2 ${pathName === path ? 'bg-blue-50' : 'hover:bg-stone-100'} transition-all duration-250 rounded-lg cursor-pointer`}
            onClick={() => navigate(path)}
        >
            <span className={`${pathName === path ? 'text-white' : 'text-black'} size-8 ${pathName === path ? 'bg-blue-500' : 'bg-zinc-300'} rounded-full grid place-content-center`}>
                {icon}
            </span>
            <p>{text}</p>
        </div>
    )
}