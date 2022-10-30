import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import './assets/index.scss';
import './assets/theme.scss';
import App from './App.vue';
import router from './router';
import "@/utils/extend"


const app = createApp(App);

const pinia = createPinia();
//添加持久化插件
pinia.use(piniaPersist)

app.use(pinia);
app.use(router);

app.mount('#app');
