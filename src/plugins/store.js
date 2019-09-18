import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
		factions: []
	},
	actions: {
		loadNews(context) {
			axios.get('https://stu.wolvnet.de/api/v1/common/news').then((response) => {
				context.commit('updateNews', response.data.data);
			});
		},
		loadFactions(context) {
			axios.get('https://stu.wolvnet.de/api/v1/common/faction').then((response) => {
				context.commit('updateFactions', response.data.data);
			});
		}
	},
	mutations: {
		updateNews(state, news) {
			state.news = news;
		},
		updateFactions(state, factions) {
			state.factions = factions;
		}
	},
	getters: {
		getNews(state) {
			return state.news;
		},
		getFactions(state) {
			return state.factions;
		}
	},
	modules: {},
});
