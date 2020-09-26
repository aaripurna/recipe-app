import 'buefy/dist/buefy.css'
import "@fortawesome/fontawesome-free/scss/fontawesome";
import "@fortawesome/fontawesome-free/scss/solid";
import "@fortawesome/fontawesome-free/scss/regular";

import Vue from 'vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import vueDebounce from 'vue-debounce'

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(vueDebounce, {
  listenTo: ['input', 'keyup']
})
