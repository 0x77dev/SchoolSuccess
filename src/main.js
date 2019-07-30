import Vue from 'vue'
import App from './App'
import brain from 'brain.js'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import i18n from './i18n'
import './registerServiceWorker'
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#5b3cc4',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})
window.brain = brain;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  i18n,
  template: '<App/>'
})
