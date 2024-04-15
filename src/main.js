import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import "@formkit/addons/css/multistep";
import "@formkit/themes/genesis";

import { plugin, defaultConfig } from '@formkit/vue'

import formKitConfig from '../formkit.config'

const app = createApp(App)
app.use(plugin, defaultConfig(formKitConfig))
app.mount('#app')
