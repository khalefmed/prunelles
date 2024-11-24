'use client'
import {useState, React, useEffect} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';
import ImageSwiper from './swiper';

export const Galerie = () => {

    const {t, i18n} = useTranslation();

    return (
        <section id='galerie' className='overflow-hidden max-w-screen justify-center align-center items-center p-28 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('galerie')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('galerie')}</h1>
            }
            <div className='flex  justify-center align-center items-center w-1/2 max-md:w-full rounded-xl px-12'>
                <ImageSwiper/>
            </div>
            
        </section>
    )
}
