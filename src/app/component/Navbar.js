"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import image1 from './image/image1.png'
import image2 from './image/image2.png'
import image3 from './image/image3.png' 
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className=''>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-[0]'>
                {/* {
                toggle? 
                    <LiaBarsSolid onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden'/>
                    :
                    <VscChromeClose onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden'/>
                } */}
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[26px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo uppercase'>$Froggo</h1>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="#home">home</Link>
                    <Link className='Link-manu-bar' href="#about">About</Link>
                    <Link className='Link-manu-bar' href="#Tokenomics">Tokenomics</Link>
                    <Link className='Link-manu-bar' href="#disclaimer">disclaimer</Link>
                </nav>

                
                <ul className=' manu-sosul-area'>
                    <li className='main-icon-li'>
                        <Link className='iconbg' href="/"><Image src={image1} className=' w-[10px] lg:w-[18px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li'>
                        <Link className='iconbg' href="/"><Image src={image2} className=' w-[10px] lg:w-[18px]' alt="Loading..." /></Link>
                    </li>
                    <li className='main-icon-li'>
                        <Link className='iconbg' href="/"><Image src={image3} className=' w-[10px] lg:w-[18px]' alt="Loading..." /></Link>
                    </li>
                </ul>
                
                
            </header>
        </div>
    );
};

export default Navbar;