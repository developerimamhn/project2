import React from 'react';
import Image from 'next/image';
import image18 from './image/image18.png';

const Footer = () => {
    return (
        <div className='bg-[#8B4EE7]'>
            <div className="container mx-auto">
                <div className="">
                    <div className="container mx-auto">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <div className="flex ">
                                    <h2 className='footer-TOKENOMICS-h2 text-[40px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>TOKENOMICS</h2>
                                    <Image src={image18} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;