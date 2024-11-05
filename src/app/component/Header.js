import React from "react";
import Navbar from "./Navbar";
import HeroArea from "./HeroArea";
import image8 from './image/image8.png';
import image9 from './image/image9.png';
import Image from 'next/image';
const Header = () => {

    return (
        <div className="bg-[#8B4EE7]">
            <Navbar/>
            <HeroArea/>
            <Image className='hidden sm:block animate-contrastEffect absolute top-[100px] 2xl:top-[16px] left-[16px] w-[100px] sm:w-auto' src={image8} alt="" />
            <Image className='animate-contrastEffect absolute top-[11px] left-[0px] w-[70%]' src={image9} alt="" />
        </div>
    );
};

export default Header;