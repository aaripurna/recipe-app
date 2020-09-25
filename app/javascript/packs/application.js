import Vue from 'vue'

import '../config/imports'
import router from "../config/routes"
import App from '../app'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
})
