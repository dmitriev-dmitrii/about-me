import { createApp } from 'vue';
import App from './App.vue';


const app = createApp(App)

// @ is an alias to /src
// global components

import Description from '@/components/Description.vue';
app.component('Description',Description);

import SvgIcon from '@/components/SvgIcon.vue';
app.component('SvgIcon',SvgIcon);

// end global components


app.mount('#app');

