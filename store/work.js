// import axios from 'axios';

export const state = () => ({
    list:[ 
        
        {
            id:1,
            isActive:true,
            title:'Артис',
            position:'Верстальщик',
            link:'http://artis-ltd.ru/',
            linkTxt:'artis-ltd.ru',
            time:'c Cентябрь 2020 - по Октябрь 2021 ',
            description:`<p> В основные задачи входили: поддержка, разработка, рефакторинг старого кода сайтов компании.<br>
            Создание новых разделов , посадка верстки на php.
        <ul>
            <li>Разработал приложение на  Node JS для пакетной обработки картинок</li>
            <li>Написал парсер сайта на Node JS </li>
            <li>Сверстал интрнет магазин </li>
        </ul>
        </p>`
        },
        {
            id:2,
            isActive:true,
            title:'BMSGroup',
            position:'Frontend Developer',
            link:'https://bmsgroup.ru/',
            linkTxt:'bmsgroup.ru',
            time:'c Февраля Ноябрь  по настоящее время',
            description:`<p> 

            Отмечу сразу  что работодатель объявил о  сокращении штата сотрудников, и дал время мне и моим коллегам для поиска нового места работы.

            На самом деле здесь нет разделения Frontend/Backend, есть команда fullstack web.
            В основном я исправлял баги ,верстал  , рефакторил код, писал небольшие фичи ,  и методы как для бека так и для фронта.
            Разбирался с TypeScript , NestJS , как устроены проекты.

            <br>
            Стек :   VueJs, Nuxt,Express, Nest + MongoDB.

            </p>`
        },
    ],

});

export const getters = {

};

export const mutations = {

};

export const actions = {

};
