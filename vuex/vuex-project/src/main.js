import { createApp } from 'vue';

import router from './router.js';
import store from './store';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app.use(router);

app.component('base-badge', BaseBadge);

app.use(store);

app.mount('#app');
