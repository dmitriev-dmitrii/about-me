// import axios from 'axios';

export const state = () => ({
    list:[
        {
            id:1,
            isActive:false,
            title:'Poland-Travel',
            description:'landing page ',
            stack:['Webpack 5','sCss postCss'],
            imgName:'poland-travel',
            linkGit:'https://github.com/dmitriev-dmitrii/poland-travel',
            link:'https://dmitriev-dmitrii.github.io/poland-travel/',
        },
        {
            id:2,
            isActive:false,
            title:'Cliсker-Game',
            description:'игра на скорость кликов',
            stack:['js','css'],
            imgName:'clicker-game',
            linkGit:'https://github.com/dmitriev-dmitrii/game-clicker',
            link:'https://dmitriev-dmitrii.github.io/game-clicker/',
        },
        {
            id:3,
            isActive:false,
            title:'Dice-Game',
            description:'Игра в кости',
            stack:['js','анимации css'],
            imgName:'dice-game',
            linkGit:'https://github.com/dmitriev-dmitrii/dice-game',
            link:'https://dmitriev-dmitrii.github.io/dice-game/',
        },
        {
            id:5,
            isActive:false,
            title:'Drag-Drop Cards',
            description:'перетаскиваем карточки',
            stack:['js'],
            imgName:'drag-drop-cards',
            linkGit:'https://github.com/dmitriev-dmitrii/drag-drop-cards',
            link:'https://dmitriev-dmitrii.github.io/drag-drop-cards/',
        },
        {
            id:6,
            isActive:false,
            title:'Wheather App',
            description:'приложение погоды с геолокацией',
            stack:['VueJS','Rest Api'],
            imgName:'wheather-app',
            linkGit:'https://github.com/dmitriev-dmitrii/weather-app',
            link:'https://dmitriev-dmitrii.github.io/weather-app/app/',
        },
        {
            id:7,
            isActive:false,
            title:'advocatus',
            description:'asd',
            stack:['js'],
            imgName:'advocatus',
            linkGit:'https://github.com/dmitriev-dmitrii/advocatus',
            link:'https://dmitriev-dmitrii.github.io/advocatus/',
        },
        {
            id:99,
            isActive:false,
            title:'Jug',
            description:'landing page not linked',
            stack:['gulp','js','css'],
            imgName:'jug',
            linkGit:'https://github.com/dmitriev-dmitrii/jug',
            link:'https://dmitriev-dmitrii.github.io/jug/',
        },
        {
            id:19,
            isActive:true,
            title:'Vue-Todo',
            description:'Приложение  списка дел с сортировкой',
            stack:['VueJS 3 , Vuex','tailwindCss','Rest Api'],
            imgName:'vue-todo',
            linkGit:'https://github.com/dmitriev-dmitrii/vue-todo',
            link:'https://dmitriev-dmitrii.github.io/vue-todo/dist/',
        },
        {
            id:20,
            isActive:true,
            title:'Nuxt-Movies',
            description:'Аналог сайта КиноПоиск',
            stack:['Nuxt, Vuex, Router','TailwindCss','Rest Api',],
            imgName:'nuxt-movies',
            linkGit:'https://github.com/dmitriev-dmitrii/vue-nuxt-movies/',
            link:'https://vue-nuxt-movies.herokuapp.com/movies',
        },
    ],

});

export const getters = {

};

export const mutations = {

};

export const actions = {

};
