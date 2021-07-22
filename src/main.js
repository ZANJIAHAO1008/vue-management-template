import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/font-awesome.min.css'
import store from './store'
import * as _public from "./util/utils";
import animated  from 'animate.css' // 引入animated动画
const app = createApp(App)
app.config.globalProperties._public = _public;
app.use(ElementPlus)
app.use(animated )
app.use(router)
app.use(store)
app.mount('#app')