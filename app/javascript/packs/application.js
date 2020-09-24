import Vue from 'vue'
import VueRouter from 'vue-router'
import 'buefy/dist/buefy.css'

import router from "../config/routes"
import App from '../app'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})
