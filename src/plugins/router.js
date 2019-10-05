import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import RegistrationSuccess from '../components/RegistrationSuccess.vue';
import News from '../components/News.vue';
import Help from '../components/Help.vue';
import Maindesk from '../components/Game/Maindesk/Maindesk.vue';
import Research from '../components/Game/Research/Research.vue';
import LegalNotice from '../components/LegalNotice.vue';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: Login
	},{
		path: '/maindesk',
		component: Maindesk
	},{
		path: '/research',
		component: Research
	},{
		path: '/registration',
		component: Registration
	},{
		path: '/registration/success',
		component: RegistrationSuccess
	},{
		path: '/news',
		component: News
	},{
		path: '/help',
		component: Help
	},{
		path: '/legalnotice',
		component: LegalNotice
	}]
});
