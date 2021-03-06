import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
		factions: [],
		researchList: [],
		newPms: []
	},
	actions: {
		loadNews(context) {
			axios.get(process.env.API_URL + '/v1/common/news').then((response) => {
				context.commit('updateNews', response.data.data);
			});
		},
		loadFactions(context) {
			axios.get(process.env.API_URL + '/v1/common/faction').then((response) => {
				context.commit('updateFactions', response.data.data);
			});
		},
		loadResearchList(context) {
			return axios.get(
				process.env.API_URL + '/v1/player/research',
				{
					headers: {
						Authorization: `Bearer ${this.getters.getUserToken}`
					},
				},
			)
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
				context.commit('updateResearchList', data.data);
			})
			.catch((error) => {
				throw error;
			});
		},
		logout(context) {
			return axios.post(
				process.env.API_URL + '/v1/player/logout',
				{},
				{
					headers: {
						Authorization: `Bearer ${this.getters.getUserToken}`
					},
				}
			)
			.catch((error) => {
				throw error.response.data.error.error;
			})
			.then((response) => {
				localStorage.userToken = null;
			})
			.catch((error) => {
				throw error;
			});
		},
		loadUser(context, login) {
			return axios.post(process.env.API_URL + '/v1/common/login', login)
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
					localStorage.userToken = data.data.token;
				})
				.catch((error) => {
					throw error;
				});
		},
		createUser(context, registration) {
			return axios.post(process.env.API_URL + '/v1/common/player/new', registration)
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
		updateResearchList(state, researchList) {
			state.researchList = researchList;
		},
		updateNewPms(state, data) {
			state.newPms = data;
		}
	},
	getters: {
		getNews(state) {
			return state.news;
		},
		getFactions(state) {
			return state.factions;
		},
		getResearchList(state) {
			return state.researchList;
		},
		getUserToken(state) {
			if (localStorage.userToken) {
				return localStorage.userToken;
			}
			return null;
		},
		getNewPms(state) {
			return state.newPms;
		}
	},
	modules: {},
});
