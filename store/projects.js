// import axios from 'axios';

export const state = () => ({
  projectsList: [
    {
      id: 1,
      isActive: true,
      title: 'Poland-Travel',
      description: 'landing page ',
      stack: ['Webpack 5', 'sCss postCss'],
      imgName: 'poland-travel',
      linkGit: 'https://github.com/dmitriev-dmitrii/poland-travel',
      link: 'https://dmitriev-dmitrii.github.io/poland-travel/',
    },
    {
      id: 2,
      isActive: true,
      title: 'Cliсker-Game',
      description: 'игра на скорость кликов',
      stack: ['js', 'css'],
      imgName: 'clicker-game',
      linkGit: 'https://github.com/dmitriev-dmitrii/game-clicker',
      link: 'https://dmitriev-dmitrii.github.io/game-clicker/',
    },
    {
      id: 3,
      isActive: true,
      title: 'Dice-Game',
      description: 'Игра в кости',
      stack: ['js', 'анимации css'],
      imgName: 'dice-game',
      linkGit: 'https://github.com/dmitriev-dmitrii/dice-game',
      link: 'https://dmitriev-dmitrii.github.io/dice-game/',
    },
  ],
})

export const getters = {}

export const mutations = {}

export const actions = {}
