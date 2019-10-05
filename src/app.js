import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router.js';
import i18n from './plugins/i18n.js';
import store from './plugins/store.js';
import mixins from './plugins/mixins.js';

Vue.mixin(mixins);

//import AppGlobal from './mixins/AppGlobal.js'
//Vue.mixin(AppGlobal);


export default new Vue({
    el: '#content',
	router,
	i18n,
	store,
    render: h => h(App),
});
