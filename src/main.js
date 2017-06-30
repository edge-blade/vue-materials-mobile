import Vue from 'vue'
import App from './App.vue'


// Pull in Materialize related tasks
import VueMaterials from '@edge_blade/vue-materials'
import 'jquery/dist/jquery'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'material-design-icons/iconfont/material-icons.css'
import 'material-design-icons/iconfont/MaterialIcons-Regular.eot'
import 'material-design-icons/iconfont/MaterialIcons-Regular.svg'
import 'material-design-icons/iconfont/MaterialIcons-Regular.ttf'
import 'material-design-icons/iconfont/MaterialIcons-Regular.woff'
import 'material-design-icons/iconfont/MaterialIcons-Regular.woff2'
import './styles/icon-styles.css'

// Vue Plugin installations
Vue.use(VueMaterials)

// Mount the app
new Vue({
  el: '#app',
  render: h => h(App)
})
