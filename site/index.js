import { createApp } from 'vue';

import router from './router/index.js';
import App from "./app.vue";
// import Button from '../src/components/button/package/index.js';
import LixiUiVue from '../src/index.js'
import demoBlock from './components/demo-block/index.vue'

import './style/index.scss'

var app = createApp(App);
app.component('DemoBlock', demoBlock)

app.use(router).use(LixiUiVue);

app.mount('#app');