'use client'
import {useState, React, useEffect} from 'react';
import '../../../i18n';
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from 'framer-motion';

export const Mot = () => {

    const {t, i18n} = useTranslation();

    return (
        <section id='mot' className='overflow-hidden max-w-screen p-28 flex flex-col gap-16 max-lg:p-16 max-sm:px-0 max-sm:8'>
            { i18n.language == "ar" 
            ? 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl  uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('mot')}</h1>
            : 
            <h1 className='text-center max-md:text-3xl text-transparent bg-clip-text font-bold  text-4xl tracking-[0.25rem] uppercase bg-gradient-to-r from-mainGreen to-secondGreen'>{t('mot')}</h1>
            }
            <div className=' px-12'>
            <p className='text-blackColor font-medium '>En créant l’école Les Prunelles, ma vision était claire : offrir un lieu où chaque enfant puisse grandir en harmonie, développer ses talents uniques, et s’épanouir dans un cadre qui allie exigence éducative et bienveillance.
                <br/>
                Inspirée par mon propre parcours dans l’éducation française et par mon attachement à des valeurs universelles, j’ai souhaité fonder une école qui prépare les enfants à relever les défis du monde moderne tout en restant ancrés dans des principes solides : respect, autonomie, et ouverture sur le monde.
                <br/>
                
                L’école Les Prunelles est née de l’envie de répondre aux besoins spécifiques des familles qui cherchent une éducation de qualité, enrichie par des méthodes pédagogiques innovantes et une attention particulière à l’épanouissement de chaque élève. Pour moi, chaque enfant est une promesse d’avenir, et notre rôle est de l’accompagner sur son chemin avec les outils, les connaissances et la confiance nécessaires pour réussir.
           <br/>
                Nous avons également, voulu que cette école soit un espace inclusif, où tous les élèves, quelles que soient leurs différences, trouvent leur place et se sentent valorisés. Les Prunelles est bien plus qu’une école : c’est une communauté où les élèves, enseignants et familles collaborent pour bâtir un avenir meilleur.
                <br/>
                C’est avec cette vision et cette passion que nous œuvrons chaque jour pour offrir à vos enfants un cadre propice à leur réussite scolaire et personnelle.
                <br/>
                <br/>

                <span className='font-bold text-lg text-mainGreen'>Fondatrice de l’école Les Prunelles Nouakchott</span>
                <br/>
                <span className='font-medium text-lg'>Fatima Zahra Hormat Allah </span>
            </p>
            </div>
        </section>
    )
}
