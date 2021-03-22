import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
import store from './store.js'

import Messages from './components/Messages.vue'
import NewMessage from './components/NewMessage.vue'
import Message from './components/Message.vue'
import VueRouter from 'vue-router'


Vue.use(Vuetify)

Vue.use(BootstrapVue)

Vue.use(VueRouter)

const routes = [
  {path:"/",component:Messages},
  {path:"/NewMessage",component:NewMessage},
  {path:"/Message/:id",component:Message}
  
]

const router = new VueRouter({routes,mode:'history'})

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
