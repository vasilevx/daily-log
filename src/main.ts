import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import { subscribeToStores } from './store/subscribeToStores';
import ToastService from 'primevue/toastservice';

const pinia = createPinia()
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService)
app.use(pinia);
app.mount('#app');

subscribeToStores()