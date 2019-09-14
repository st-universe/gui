import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js';
import i18n from './plugins/i18n.js';

//import AppGlobal from './mixins/AppGlobal.js'
//Vue.mixin(AppGlobal);

export default new Vue({
    el: '#content',
	router,
	i18n,
    render: h => h(App),
});
