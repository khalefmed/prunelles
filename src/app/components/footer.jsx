'use client'
import React from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();
    
    return (
        <footer className='flex flex-row max-sm:flex-col max-sm:justify-start max-sm:gap-16 justify-between bg-blackColor px-28 py-8 max-sm:px-8'>
            <div className='flex flex-col gap-8'>
                {/* <img src="lynaat_logo_white.png" height={10} width={150} alt="" /> */}
                <h1 className='text-white font-extrabold text-2xl '>Prunelles</h1>
                <div className='flex flex-col justify-start gap-3'>
                    <div className='flex flex-row items-center gap-2 text-cardGrey'>
                        <img src="email_icon.png" width={20} alt="" />
                        <p className='text-sm'>direction@lesprunelles-nouakchott.net</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-cardGrey'>
                        <img src="phone_icon.png" width={20} alt="" />
                        <p className='text-sm'>+222 25069241</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-cardGrey'>
                        <img src="location_icon.png" width={20} alt="" />
                        <p className='text-sm'>216-219 ilôt NOT Tevragh Zeina Nouakchott Mauritanie</p>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-3'>
                <h3 className='text-lg font-semibold text-white'>{t('links')}</h3>
                <ul className=' text-sm flex flex-col gap-2 text-cardGrey'>
                    <li><a href="#hero">{t('home')}</a></li>
                    <li><a href="#about">{t('about')}</a></li>
                    <li><a href="#services">{t('services')}</a></li>
                    <li><a href="#contact">{t('contact')}</a></li>
                </ul>
                
            </div>


            <div className='flex flex-col gap-3'>
                <h3 className='text-lg font-semibold text-white'>Liens pédagogiques</h3>
                <ul className=' text-sm flex flex-col gap-2 text-cardGrey'>
                    <li><a href="https://jeprotegemonenfant.gouv.fr/ecrans">https://jeprotegemonenfant.gouv.fr/ecrans</a></li>
                    
                </ul>
                
            </div>



            <div className='flex flex-col max-sm:items-start gap-3'>
                <h3 className='text-lg font-semibold text-white'>{t('social_media')}</h3>
                <div className=' text-sm flex flex-col justify-center gap-2 text-cardGrey'>
                    {/* <a href=""><img src="linkedin_icon.png" width={30} alt="" /></a> */}
                    {/* <a href="https://jeprotegemonenfant.gouv.fr/ecrans">https://jeprotegemonenfant.gouv.fr/ecrans</a> */}
                    {/* <a href=""><img src="github_icon.png" width={30} alt="" /></a> */}
                    <p className='text-white font-medium'>Lundi au jeudi : 7h50 - 13h15 </p>
                    <p  className='text-white font-medium'>Vendredi : 7h50 - 12h00 </p>
                </div>
            </div>
        </footer>
    )
}
