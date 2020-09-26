import Vue from 'vue'
import axios from 'axios'

import '../config/imports'
import router from "../config/routes"
import App from '../app'

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector("[name='csrf-token']").content;
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
})
