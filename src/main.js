import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { HTTP as axios } from './axios/axios';

Vue.prototype.$http = axios;

Vue.use( Vuex );
Vue.use( VueRouter );
Vue.config.debug = true;
Vue.config.devTools = true;

//Import all vue components
import header from './components/theme-header.vue';
Vue.component( 'theme-header', header );
import footer from './components/theme-footer.vue';
Vue.component( 'theme-footer', footer );
import home from './components/home.vue';
Vue.component( 'home', home );

//Create main vue component
const App = Vue.extend( {
	template: '<div id="page" class="hfeed site"><theme-header></theme-header>' +
			'<main><router-view></router-view></main>' +
			'<theme-footer></theme-footer></div>',
	computed: {
	}
} );

//Define route for vue app
//ref : http://router.vuejs.org/en/
const router = new VueRouter( {
	// mode: 'history',
	routes: [

		{ path: '/', name: 'home', component: home }

	]
} );

//Define vuex store
const store = new Vuex.Store( {
	state: {
		title: ''
	},
	mutations: {
		rtChangeTitle( state, value ) {
			// mutate state
			state.title = value;
			document.title = ( state.title ? state.title : '' );
		}
	}
} );

//Create instance of main component
new App( {
	store,
	router
} ).$mount( '#app' );
