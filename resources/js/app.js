

require('./bootstrap');

window.Vue = require('vue').default;



Vue.component('dasar', require('./components/dasarComponent.vue').default);
Vue.component('rak', require('./components/rakComponent.vue').default);
Vue.component('keranjang', require('./components/keranjangComponent.vue').default);
Vue.component('tombol', require('./components/tombolComponent.vue').default);


const app = new Vue({
    el: '#app',
});
