import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import 'material-icons'
import 'normalize.css'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true