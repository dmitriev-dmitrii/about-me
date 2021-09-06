import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// @ is an alias to /src

const app = createApp(App).use(router);
// global components
import Description from '@/components/Description.vue';
app.component('Description',Description);



app.mount('#app');

