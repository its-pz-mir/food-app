'use client'
// components/MyCarousel.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const Slider = () => {
    const items = [
        {
            index: 1,
            img: "/images/ava-1.jpg",
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora, quibusdam deleniti libero aliquid esse nisi, iste, cumque maxime iure eius? Minus, exercitationem tempora! Temporibus.',
            name: "Jhon Doe"
        },
        {
            index: 2,
            img: "/images/ava-2.jpg",
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora, quibusdam deleniti libero aliquid esse nisi, iste, cumque maxime iure eius? Minus, exercitationem tempora! Temporibus.',
            name: "Michal Marsh"
        },
        {
            index: 3,
            img: "/images/ava-3.jpg",
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora, quibusdam deleniti libero aliquid esse nisi, iste, cumque maxime iure eius? Minus, exercitationem tempora! Temporibus.',
            name: "Steven Crock"
        },
        // Add more slides as needed
    ];

    return (
        <AliceCarousel
            items={items.map((item) => (
                <div key={item.index} className='mx-10 cursor-default flex flex-col space-y-4 justify-center md:justify-start items-center md:items-start'>
                    <p className='text-center md:text-start'>{item.para}</p>
                    <div className='space-y-4 md:space-x-4 md:justify-center md:items-center flex flex-col justify-center items-center md:flex-row'>
                        <Image src={item.img} width={70} height={70} alt='Avatar 01' className='rounded-lg'></Image>
                        <h2 className='font-bold text-lg'>{item.name}</h2>
                    </div>
                </div>
            ))}
            autoPlay
            autoPlayInterval={3000}
            buttonsDisabled={true}
            dotsDisabled={false}
        />

    );
};

export default Slider;
