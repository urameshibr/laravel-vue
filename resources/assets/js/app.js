require('./bootstrap');
import LrUsers from './components/users.vue'
Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#content-wrapper',
    components: {
        LrUsers //<lr-users>
    }
});
