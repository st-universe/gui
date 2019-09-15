import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import News from '../components/News.vue';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: Login
	},{
		path: '/registration',
		component: Registration
	},{
		path: '/news',
		component: News
	}]
});
