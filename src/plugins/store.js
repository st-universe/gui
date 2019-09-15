import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: []
	},
	actions: {
		loadNews(context) {
			axios.get('https://stu.wolvnet.de/api/v1/common/news').then((response) => {
				context.commit('updateNews', response.data.data);
			});
		}
	},
	mutations: {
		updateNews(state, news) {
			state.news = news;
		}
	},
	getters: {
		getNews(state) {
			return state.news;
		},
	},
	modules: {},
});
