"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import image4 from './image/image4.png';
import image5 from './image/image5.png';
import image6 from './image/image6.png';
import image7 from './image/image7.png';
import '../golobalscsstow.css';
import image8 from './image/image8.png';
import image9 from './image/image9.png';
import image11 from './image/image11.png';
import image10 from './image/image10.png';
import image23 from './image/image23.png';


const HeroArea = () => {
    const [text, setText] = useState("COPY");

    const handleChangeText = () => {
        setText("Copied!");

        // Set a timeout to revert the text back to "COPY" after 10 seconds
        setTimeout(() => {
            setText("COPY");
        }, 2000);
    };
    return (
        <div className='relative'>
            
            
            
            <div className="container mx-auto">
                <div className="flex justify-between items-end pt-[20px] sm:pt-[54px] lg:pt-[69px] pb-[60px] sm:pb-[70px] lg:pb-[100px] xl:pb-[120px] 2xl:pb-[141px]  sm:flex-row flex-col-reverse px-[24px] sm:px-[0]">
                    <div className="flex-1 pt-[100px] sm:pt-0">
                        <Image className='w-[90%] pointer-events-none select-none' src={image4} alt="" />
                    </div>
                    <div className="flex-1">
                        <h1 className='Froggo-headding text-[70px] sm:text-[65px] md:text-[80px] lg:text-[110px] xl:text-[130px] 2xl:text-[156px] uppercase'>$Froggo</h1>
                        <p className='bark-pragraph text-[16px] sm:text-[18px] lg:text-[20px] pb-[25] sm:pb-[28px] lg:pb-[32px] !text-[#FCFEFF]'>
                            Bark... Froggo’s digging deep! <br />
                            Ready to explore some treasures? <br />
                            <strong>Bark... Bark...  </strong>
                        </p>
                        <label htmlFor='copy' className='TOKEN-ADDRESS block mb-[25px]'>TOKEN ADDRESS:</label>

                        <div id='copy' className='flex justify-between items-center w-fit sm:w-full py-[8px] sm:py-[12px] pr-[12px] pl-[16px] rounded-xl md:rounded-2xl xl:rounded-3xl text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] relative z-50'><input type="text" className='w-full bg-transparent border-none placeholder:text-[#FCFEFF] relative z-50' placeholder='CJ8oT6dHzyHsXBq6JdhRHiRto3Le96pHyPchqfYdPxhN' /><button title={text} className='copy-styling-items py-[8px] sm:py-[10px] xl:py-[12px] 2xl:py-[14px] px-[14px] sm:px-[16px] xl:px-[22px] 2xl:px-[24px] rounded-lg sm:rounded-xl lg:rounded-[16px] ml-[32px] duration-300  text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] xl:leading-[22px] 2xl:leading-[28.6px] relative z-50' onClick={handleChangeText}>{text}</button></div> 
                        <div className="flex items-center pt-[52px] flex-col md:flex-row">
                            <div className="flex-1">
                            <Image className='pointer-events-none select-none' src={image5} alt="" />
                            </div>
                            <div className="relative flex-1">
                                <Image className=' absolute top-[-50px] left-0 w-full animate-contrastEffect pointer-events-none select-none' src={image7} alt="" />
                                <Image className='animate-contrastEffect pointer-events-none select-none' src={image6} alt="" />
                            </div>
                        </div>
                        
                    </div>
                    <Image className='pointer-events-none select-none absolute top-0 left-[50%] translate-x-[-50%] z-[-1]' src={image23} alt="" />
                    <Image className='pointer-events-none select-none animate-contrastEffect z-10 absolute bottom-[-10px] sm:bottom-[-20px] lg:bottom-[-42px] left-[50%] translate-x-[-50%] w-full ' src={image10} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default HeroArea;