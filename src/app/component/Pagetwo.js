import React from 'react';
import image12 from './image/image12.png';
import image13 from './image/image13.png';
import Image from 'next/image';
import styles from './SwimmingAnimation.module.css';

const Pagetwo = () => {
    return (
        <div className="bg-[#6A3AB2] relative py-[76px] overflow-hidden">
            <Image className='absolute top-[76px] left-0 w-full z-0 swimmingEffect' src={image13} alt='swming'/>
            <main className='container mx-auto'>
                <div className="flex justify-center items-center py-[73px]">
                    <div className="flex-1">
                        <h1 className='Froggo-headding-2 text-[40px] sm:text-[44px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] uppercase'>About froggo</h1>
                        <p className='bark-pragraph text-[14px] md:text-[18px] lg:text-[20px] pb-[25] sm:pb-[28px] lg:pb-[32px] lg:pr-[19%]'>
                        It all started when Pepe’s best friend, Froggo the Dog, got bored of sitting by the swamp. Froggo wanted to have more fun, so he joined Pepe in the world of memes! Together, they created $Froggo, a token full of excitement and play. <br /><br />

                        $Froggo is a mix of Pepe’s chill vibe and Froggo’s happy energy, spreading joy, and wagging tails across the blockchain. Jump in with $Froggo and be part of the fun because the treasure is just a bark away!
                        </p>
                    </div>
                    <div className="flex-1">
                        <div  className={styles.swimmingImage}>
                            <Image src={image12} className='animate-contrastEffect w-[80%] animate-slowBounce' alt='swming'/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagetwo;