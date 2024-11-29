import React from "react";
import Navbar from "./Navbar";
import HeroArea from "./HeroArea";
import image8 from './image/image8.png';
import image9 from './image/image9.png';
import image22 from './image/image22.png';
import Image from 'next/image';
import starts from './image/stars.png';
const Header = () => {

    return (
        <div className="headderbackground h-fit bg-[#3DC0BD] md:bg-transparent">
            <Image className='absolute top-[0] w-[100%] pointer-events-none select-none z-[-3]' src={image22} alt="" />

            <Navbar/>
            <HeroArea/>

            <Image className='animate-contrastEffect absolute right-[50px] top-[70px] w-[100px] sm:w-auto pointer-events-none select-none md:block hidden' src={image8} alt="" />
            <Image className='animate-contrastEffect absolute top-[30px] left-[50%] translate-x-[-50%] w-[90%]  pointer-events-none select-none  z-[-2]' src={starts} alt="" />
        </div>
    );
};

export default Header;