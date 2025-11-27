"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Video, Store, Users, Gamepad2 } from "lucide-react";
import HeaderLeft from "./header-left";
import Image from "next/image";
import Menu from "./homepage/menu";
import { useState } from "react";

const navItems = [
    { href: "/", icon: Home },
    { href: "/reel", icon: Video },
    { href: "/marketplace", icon: Store },
    { href: "/groups", icon: Users },
    { href: "/gaming", icon: Gamepad2 },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [color, setColor] = useState(false);
    const [menuColor, setMenuColor] = useState(false);
    const pathname = usePathname();
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setColor(!color);
        setMenuColor(!menuColor);
    };

    return (
        <header className="flex items-center justify-between bg-white border-b border-gray-200 px-4 h-14 fixed top-0 left-0 right-0 z-50">
            <HeaderLeft />
            {/* Center: Navigation icons */}
            <nav className="flex space-x-8">
                {navItems.map(({ href, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center justify-center w-20 h-12 rounded-md transition-colors ${isActive
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <Icon size={24} />
                        </Link>
                    );
                })}
            </nav>


            <div className="flex items-center space-x-3">
                <div>
                    <div onClick={handleMenuClick} className={`size-10 ${color ? 'bg-blue-100' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>
                        {menuColor ? <Image src="/menu-gridblue.svg" alt="Menu" width={25} height={25} /> : <Image src="/menu-grid.svg" alt="Menu" width={25} height={25} />}
                    </div>
                    {isMenuOpen ? <Menu /> : ''}
                </div>
                <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <Image src="/messenger.png" alt="Message" width={25} height={25} />
                </div>
                <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <Image src="/bell.png" alt="Notification" width={25} height={25} />
                </div>
                <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center"></div>
            </div>
        </header>
    );
}

