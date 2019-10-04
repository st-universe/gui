import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
		factions: [],
		userToken: null
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
		},
		loadUser(context, login) {
			return axios.post('https://stu.wolvnet.de/api/v1/common/login', login)
				.catch((error) => {
					throw error.response.data.error.error;
				})
				.then((response) => {
					if (response.data.error) {
						throw response.data.error.error;
					}

					return response.data;
				})
				.then((data) => {
					context.commit('updateUserToken', data.data.token);
				})
				.catch((error) => {
					throw error;
				});

		},
		createUser(context, registration) {
			return axios.post('https://stu.wolvnet.de/api/v1/common/player/new', registration)
				.catch((error) => {
					throw error.response.data.error.error;
				})
				.then((response) => {
					if (response.data.error) {
						throw response.data.error.error;
					}
				})
				.catch((error) => {
					throw error;
				});
		}
	},
	mutations: {
		updateNews(state, news) {
			state.news = news;
		},
		updateFactions(state, factions) {
			state.factions = factions;
		},
		updateUserToken(state, token) {
			state.userToken = token;
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
