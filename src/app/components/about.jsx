'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const About = () => {
    const {t, i18n} = useTranslation();
    return (
        <section id="about" className='overflow-hidden flex flex-col p-28 gap-12 max-lg:p-8   '>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('about')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('about')}</h1>
            }
            <div className='flex flex-col max-lg:flex-col gap-16  items-center  lg:items-center '>
                {/* <motion.div 
                initial = {{
                    x : -100,
                    y : 0,
                    // scale : 0.8,
                    opacity : 0,
                }}
                whileInView = {{
                    x : 0,
                    y : 0,
                    // scale : 1,
                    opacity : 1,
                    transition : {duration : 1}
                }}
                className={'w-2/3 max-lg:w-full text-blackColor font-medium text-md  leading-[30px] border-mainGreen px-4 h-fit '+ (i18n.language == "ar" ? "border-r-[3px]": "border-l-[3px]")}>
                {t('about_desc')}
                </motion.div> */}
                <img src='/un.jpg' className='h-[400px] rounded-xl'  alt="" />
                <div className='flex flex-row  max-md:flex-col  max-sm:w-full gap-3 max-md:gap-6 items-start justify-center '>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-start gap-3 w-full  max-md:flex-col h-[260px] max-md:h-[200px] px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        {/* <img src='/mission_icon.png' width={40} height={40} alt="" /> */}
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-mainGreen text-lg'>{t('present')}</h4>
                            <p className='text-blackColor font-medium text-sm'>{t('present_desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-start gap-3 w-full h-[260px] max-md:h-[200px] px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        {/* <img src='/mission_icon.png' width={40} height={40} alt="" /> */}
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-mainGreen text-lg'>{t('mission')}</h4>
                            <p className='text-blackColor font-medium text-sm'>{t('mission_desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-start gap-3 w-full h-[260px] max-md:h-[200px] px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        {/* <img src='/vision_icon.png' width={40} height={40} alt="" /> */}
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-mainGreen text-lg'>{t('vision')}</h4>
                            <p className='text-blackColor font-medium text-sm'>{t('vision_desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial = {{
                        x : 100,
                        y : 0,
                        opacity : 0,
                    }}
                    whileInView = {{
                        x : 0,
                        y : 0,
                        opacity : 1,
                        transition : {duration : 1}
                    }}
                    className='flex flex-row items-start gap-3 w-full h-[260px] max-md:h-[200px] px-4 py-3 shadow-whiteShadow shadow-lg rounded-lg'>
                        {/* <img src='/commitment_icon.png' width={40} height={40} alt="" /> */}
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-mainGreen text-lg'>{t('commitment')}</h4>
                            <p className='text-blackColor font-medium text-sm'>{t('commitment_desc')}</p>
                        </div>
                    </motion.div>

                </div>

            </div>


        </section>
    )
}
