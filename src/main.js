import Vue from 'vue'
import App from './App.vue'


// Pull in Materialize related tasks
import VueMaterials from '@edge_blade/vue-materials'
import './app-css-loader'

// Vue Plugin installations
Vue.use(VueMaterials)

// Mount the app
new Vue({
  el: '#app',
  render: h => h(App)
})
