'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cart from './Cart';
import { GiBeachBag } from "react-icons/gi";
import { LuUser, LuMenuSquare } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";
import axios from 'axios';

const Header = () => {

    // Api  https://foodapp-backend-production.up.railway.app/api/user

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://foodapp-backend-production.up.railway.app/api/user');
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    })

    const pathname = usePathname();
    const nav_links = [
        {
            display: "Home",
            path: "/"
        },
        {
            display: "Foods",
            path: "/Foods"
        },
        {
            display: "Cart",
            path: "/Cart"
        },
        {
            display: "Contact",
            path: "/contact"
        }
    ]

    const menuRef = useRef(null);
    const closeIconRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);

    }

    return (
        <div className='relative'>
            <div className="flex justify-between items-center p-2 md:px-20 lg:px-40 relative">
                <div className="logo flex flex-col justify-center items-center">
                    <Image src={'/images/res-logo.png'} width={50} height={50} alt='Logo'></Image>
                    <span className='text-sm font-bold'>Tasty Treat</span>
                </div>
                <div className={`${isMenuOpen ? 'links' : 'hidden'} md:block`} ref={menuRef}>
                    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 items-center absolute md:static right-0 h-screen md:h-auto z-50 top-0 bg-white md:bg-transparent shadow-xl md:shadow-none overflow-y-auto">
                        {
                            nav_links.map((item, index) => (
                                <div key={index} className='px-10 md:px-4 w-full relative'>
                                    <Link href={item.path} className={`block md:text-lg hover:text-red-500 w-full py-2 px-4 ${pathname === item.path ? 'text-red-500' : ''}`} onClick={closeMenu}>
                                        {item.display}
                                    </Link>
                                </div>
                            ))
                        }
                        <div className="close" ref={closeIconRef} onClick={toggleMenu}>
                            <FaRegWindowClose className='text-2xl md:hidden absolute top-1 cursor-pointer right-1' />
                        </div>
                    </div>
                </div>
                <div className="icons flex justify-center items-center space-x-4 md:space-x-8">
                    <div className="cart flex justify-center items-center relative" onClick={toggleCart}>
                        <GiBeachBag className='text-2xl md:text-3xl cursor-pointer' />
                        <span className='bg-red-400 rounded-full text-center text-[11px] px-1 text-white absolute -right-2 -top-1'>2</span>
                    </div>
                    <Link href={"/login"}>
                        <div className="user" >
                            <LuUser className='text-2xl md:text-3xl cursor-pointer' />
                        </div>
                    </Link>
                    <div className="cart">
                        <LuMenuSquare className='text-2xl cursor-pointer md:hidden' onClick={toggleMenu} />
                    </div>
                </div>
            </div>
            <div className='absolute top-0 right-0'>
                {isCartOpen && <Cart toggleCart={toggleCart} />}
            </div>
        </div>
    )
}

export default Header
