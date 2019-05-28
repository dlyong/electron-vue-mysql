import Vue from 'vue'

import App from './App'
const Sequelize = require('sequelize');
import sequelize from './db/sequelize'


Vue.prototype.$sequelize = sequelize
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')

