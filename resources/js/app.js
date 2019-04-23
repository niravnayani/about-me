
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('.././plugins/js/lettering.min');
require('.././plugins/js/textillate');
require('.././plugins/js/drawsvg.min');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuebar from 'vuebar';
import Toasted from 'vue-toasted';

Vue.use(VueRouter)
Vue.use(Vuebar);
Vue.use(Toasted)

import App from './views/App'
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/contact', name: 'contact', component: Contact }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
  

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#awesome',
    components: { App },
    router,
});
