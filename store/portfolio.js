// import axios from 'axios';

export const state = () => ({
    list:[
        {
            id:1,
            isActive:true,
            title:'Poland-Travel',
            description:'landing page ',
            stack:['Webpack 5','sCss postCss'],
            imgName:'poland-travel',
            linkGit:'https://github.com/dmitriev-dmitrii/poland-travel',
            link:'https://dmitriev-dmitrii.github.io/poland-travel/',
        },
        {
            id:19,
            isActive:true,
            title:'Vue-Todo',
            description:'Приложение список дел с сортировкой',
            stack:['VueJS 3','tailwindCss'],
            imgName:'vue-todo',
            linkGit:'https://github.com/dmitriev-dmitrii/vue-todo',
            link:'https://dmitriev-dmitrii.github.io/vue-todo/dist/',
        },
        {
            id:20,
            isActive:true,
            title:'Nuxt-Movies',
            description:'сайт с информацией о фильмах',
            stack:['Nuxt','TailwindCss'],
            imgName:'nuxt-movies',
            linkGit:'https://github.com/dmitriev-dmitrii/vue-nuxt-movies',
            link:'https://vue-nuxt-movies.herokuapp.com/',
        },
    ],

});

export const getters = {

};

export const mutations = {

};

export const actions = {

};
