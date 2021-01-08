//require('./bootstrap');
import Vue from 'vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import "leaflet-sidebar-v2/css/leaflet-sidebar.min.css";
import ViewUI from 'view-design';
import Default from '../src/layouts/Default.vue'
import NoSidebar from '../src/layouts/NoSidebar.vue'
import VuejsDialog from 'vuejs-dialog';
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import VueLoading from 'vuejs-loading-plugin'
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue'
import router from './routes'
import store from './vuex/store'

import VueHtmlToPaper from 'vue-html-to-paper';

import JsonExcel from 'vue-json-excel'
import Datatable from 'vue2-datatable-component'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import jsPDF from 'jspdf'
//  vue.component('')

import FullCalendar from 'vue-full-calendar'
import "fullcalendar-scheduler";
//import 'fullcalendar/dist/fullcalendar';
import "fullcalendar/dist/fullcalendar.min.css";
import "fullcalendar-scheduler/dist/scheduler.min.css";
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
import PrettyCheckbox from 'pretty-checkbox-vue'
//import jspartiondata from 'jspartiondata'
// import PrettyInput from 'pretty-checkbox-vue/input';
// import PrettyCheck from 'pretty-checkbox-vue/check';
// import PrettyRadio from 'pretty-checkbox-vue/radio';
import VueTelInput from 'vue-tel-input'
import LDrawToolbar from 'vue2-leaflet-draw-toolbar';
import VueUploadComponent from 'vue-upload-component'
Vue.component('file-upload', VueUploadComponent)



import VueHtml2pdf from 'vue-html2pdf'
Vue.use(VueHtml2pdf)
// ...
Vue.component('l-draw-toolbar', LDrawToolbar);
Vue.use(VueTelInput)
const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css',
        "print.css"
    ]
}
Vue.use(VueHtmlToPaper, options);
// or using the defaults with no stylesheet
//Vue.use(VueHtmlToPaper);
// Vue.component('p-input', PrettyInput);
// Vue.component('p-check', PrettyCheck);
// Vue.component('p-radio', PrettyRadio);
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);
Vue.use(ViewUI);
Vue.use(VueFormWizard)
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)
Vue.component('downloadExcel', JsonExcel)
//Vue.component(Balloon)
//import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
var Jquery = require('jquery')
Vue.use(PrettyCheckbox);
Vue.config.devtools = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$ = Jquery

 Vue.component('default-layout', Default)
 Vue.component('no-sidebar-layout', NoSidebar)
Vue.use(ElementUI);

Vue.use(FullCalendar)
Vue.use(Datatable)
// using default options
//Vue.use(VueLoading)

Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Patientez ...', // default 'Loading'
  //loading: true, // default false
 // background: 'rgb(255,255,255)', // set custom background
})
// Tell Vue to install the plugin.
// Vue.use(VuejsDialog);
Vue.use(VuejsDialog, {
  html: true,
  loader: true,
  okText: 'Continuer',
  cancelText: 'Annuler',
  animation: 'bounce'
});

Vue.use(require('vue-shortkey')) 
//jfj

import Notifications from 'vue-notification'
Vue.use(Notifications)


Vue.component('pagination', require('laravel-vue-pagination'));

// import DocumentEditorPlugin from 'DocumentEditorPlugin'
// Vue.use(DocumentEditorPlugin);

import fab from 'vue-fab'
Vue.component('fab', fab)

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

const app = new Vue({
 // el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount("#app");
store.$app = app;
