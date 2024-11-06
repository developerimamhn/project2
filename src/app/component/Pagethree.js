import React from 'react';
import Image from 'next/image';
import image10 from './image/image10.png';


const Pagethree = () => {
    return (
        <div className='bg-[#FBE287] relative z-0'>
                        <Image className='pointer-events-none animate-contrastEffect !z-[999] absolute top-[-10px] sm:top-[-20px] lg:top-[-42px] left-[50%] translate-x-[-50%] w-full select-none ' src={image10} alt="" />
                        <Image className='pointer-events-none animate-contrastEffect !z-[999] absolute bottom-[-10px] sm:bottom-[-20px] lg:bottom-[-42px] left-[50%] translate-x-[-50%] w-full select-none ' src={image10} alt="" />
            <div className="container mx-auto py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100] xl:pt-[120px] 2xl:pt-[158px]">
                <h1 className='Froggo-headding-2 text-[40px] sm:text-[44px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] uppercase pb-[30px] sm:pb-[40px] md:pb-[50px] xl:pb-[60px] text-center'>About froggo</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                    <div className="sectiononegetime px-[20px] sm:px-[22px] md:px-[24px] lg:px-[26px] xl:px-[28px] 2xl:px-[30.5px] rounded-[18px] lg:rounded-[24px] pt-[34px] md:pt-[44px] xl:pt-[54px] pb-[16px] md:pb-[18px] xl:pb-[22.5px]">
                        <div className=""></div>
                        <p className='we-recommend-using'>We recommend using a secure wallet like Phantom , or any reliable Solana wallet. Don’t worry, Pepe and Froggo got your back.</p>
                    </div>
                    <div className="">a</div>
                    <div className="">a</div>
                    <div className="">a</div>
                </div>
            </div>
        </div>
    );
};

export default Pagethree;