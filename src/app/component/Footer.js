import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image1 from './image/image1.png'
import image2 from './image/image2.png'
import image3 from './image/image3.png' 
import image18 from './image/image18.png';
import image19 from './image/image19.png';
import image4 from './image/image2.png';
import image5 from './image/image3.png';
import image10 from './image/image10.png';
import image20 from './image/image20.png';
import image21 from './image/image21.png';
import image13 from './image/image13.png';


const Footer = () => {
    return (
        <div className='bg-[#3DC0BD] relative overflow-hidden'>
            {/* <Image className='pointer-events-none animate-contrastEffect !z-[999] absolute top-[-15px] sm:top-[-30px] lg:top-[-60px] left-[50%] translate-x-[-50%] w-full select-none ' src={image10} alt="" /> */}
            <div className='w-full'><Image className='absolute top-[76px] left-0 w-full swimmingEffect pointer-events-none pb-[76px] select-none' src={image13} alt='swming'/>
            <div className="container mx-auto">
                <div className="">
                    <div className="container mx-auto pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] pb-[60px] sm:pb-[90px] md:pb-[120px] lg:pb-[150px] xl:pb-[170px] 2xl:pb-[189px]">
                        <div className="flex items-center flex-col sm:flex-row">
                            <div className="flex-1 px-[24px] sm:px-0">
                                <div className="flex ">
                                    <h2 className='footer-TOKENOMICS-h2 text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px]'>TOKENOMICS</h2>
                                    <Image src={image18} className='mt-[52px] w-[90px] sm:w-fit' alt=""/>
                                </div>
                                <div className='flex flex-col sm:flex-row gap-[16px] w-full'>
                                    <div className='bg-[#404547] py-[14px] sm:py-[16px] lg:py-[20px] 2xl:py-[24px] border border-[#000A0D] shadow-new-box-shadow pl-[38px] pr-[36px] rounded-[24px] w-full sm:w-[90%]'>
                                        <h2 className='Billion-Supply-header text-[32px] text-center sm:text-left'>1 Billion Supply</h2>
                                        <div className='border-b border-dashed sm:w-[85%] border-[#FCFEFF] mt-[16px]'></div>
                                        <h4 className='text-[17px] tokens—plenty-paragraph text-[#FCFEFF] mt-[12px]'>
                                        Limited to 1 billion tokens—<br/>plenty of bones to go around!
                                        </h4>
                                    </div>
                                    <div className='bg-[#404547] py-[14px] sm:py-[16px] lg:py-[20px] 2xl:py-[24px] border border-[#000A0D] shadow-new-box-shadow pl-[38px] pr-[36px] rounded-[24px] w-full'>
                                        <h2 className='Billion-Supply-header text-[32px] text-center'>Liquidity Locked</h2>
                                        <div className='border-b border-dashed w-[100%] border-[#FCFEFF] mt-[16px]'></div>
                                        <h4 className='text-[17px] tokens—plenty-paragraph text-[#FCFEFF] mt-[12px]'>
                                        Rest easy knowing liquidity is locked <br/> and secure.
                                        </h4>
                                    </div>
                                </div> 
                                <biv className='flex w-full gap-[16px] mt-[16px] flex-col sm:flex-row'>
                                    <a className='bg-[#6A3AB2] py-[14px] sm:py-[16px] lg:py-[20px] 2xl:py-[24px] border border-[#000A0D] shadow-new-box-shadow rounded-[24px] text w-full flex justify-center items-center Billion-Supply-header text-[22px] text-shadow-custom-shadow'>
                                        BUY $Froggo 
                                    </a>
                                    <a className='bg-[#6A3AB2] py-[14px] sm:py-[16px] lg:py-[20px] 2xl:py-[24px] border border-[#000A0D] shadow-new-box-shadow rounded-[24px] text w-full flex justify-center items-center Billion-Supply-header text-[22px] text-shadow-custom-shadow gap-[12.59px]'>
                                    <Image src={image5} className='' alt=""/> DEXTOOL
                                    </a>
                                    <a className='bg-[#6A3AB2] py-[14px] sm:py-[16px] lg:py-[20px] 2xl:py-[24px] border border-[#000A0D] shadow-new-box-shadow rounded-[24px] text w-full flex justify-center items-center Billion-Supply-header text-[22px] text-shadow-custom-shadow gap-[12.59px]'>
                                    <Image src={image4} className='' alt=""/> DEXSCREENER
                                    </a>
                                </biv>
                            </div>
                            <div className='flex-1 flex justify-center items-end px-[24px] sm:px-0'>
                                <Image className='mt-[130px] animate-contrastEffect pointer-events-none select-none animate-slowBounce' src={image19} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='container mx-auto'>
                        <div className='flex fotter-secend-area p-[20px] sm:p-[25px] md:p-[30px] lg:p-[37px] xl:p-[47px] 2xl:p-[53px] rounded-[20px] lg:rounded-[48px] gap-[50px] sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[55px] 2xl:gap-[60px] flex-col md:flex-row'>
                            <div className='backgroundtext rounded-[11px] lg:rounded-[24px] px-[20px] lg:px-[30px] xl:px-[40px] py-[25px] sm:py-[30px] md:py-[35px] lg:py-[44px] xl:py-[54px] 2xl:px-[40px]'>
                                <h2 className='Billion-Supply-header-1 text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]'>Disclaimer:</h2>
                                <div className='border-b border-dashed w-[40%] border-[#000A0D] mt-[22px] text-shadowiamge-1'></div>
                                <h4 className='!leading-[20px] sm:leading-auto text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] tokens—plenty-paragraph-1 text-[#000A0D] mt-[10px] sm:mt-[12px] md:pt-[14px] lg:mt-[16px] xl:mt-[18px]'>
                                $Froggo is a meme token and meant for hopping fun. We <br/> are not responsible for any financial losses—remember, even <br/> dogs sometimes lose their bones. DYOR
                                </h4>
                            </div>
                            <div className=''>
                                <h2 className='headding-12 text-[30px] sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[70px]'>JOIN THE COMMUNITY</h2>
                                <p className='paragraph-12 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] !leading-[30px] sm:leading-auto'>Join the community to connect with like-minded enthusiasts, share insights, and <br/> stay updated on the latest innovations. Be part of the future today!</p>
                                <div className='pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[40px] xl:pt-[50px] 2xl:pt-[60px]'>
                                    
                                    <ul className=' manu-sosul-area !gap-4'>
                                    <a className='BUY-Frogg-btn text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] py-[2px] sm:py-[12px] md:py-[14px] lg:py-[16px] xl:py-[18px] 2xl:py-[20px] px-[12px] sm:px-[24px] md:px-[28px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] rounded-[12px] lg:rounded-[24px] mr-[4px] lg:mr-[8px]'>BUY $Froggo </a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='all-rights-reserved text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] mt-[80px] sm:mt-[110px] md:mt-[140px] lg:mt-[170px] xl:mt-[200px] 2xl:mt-[230px] pb-[50px] sm:pb-[60px] lg:pb-[70px] xl:pb-[90px] 2xl:pb-[114px]'>© 2024 by $Froggo. All rights reserved!</p>
                    </div>
                </div>
            </div>
            </div>
            <Image className='pointer-events-none animate-contrastEffect  absolute bottom-[-10px] sm:bottom-[-20px] lg:bottom-[-42px] left-[50%] translate-x-[-50%] w-full select-none' src={image10} alt="" />
            <Image className='pointer-events-none animate-contrastEffect  absolute bottom-[10px] sm:bottom-[20px] lg:bottom-[42px] left-[50%] translate-x-[-50%] w-full select-none' src={image20} alt="" />
            <Image className='pointer-events-none animate-contrastEffect  absolute bottom-0 left-[50%] translate-x-[-50%] w-full select-none' src={image21} alt="" />
        </div>
    );
};

export default Footer;