<template>
	<div class="game">
		<div class="game--header">
			<div>
			</div>
			<div>
				<div class="box game--navlet-pms">
					<div v-for="pms in $store.getters.getNewPms">
						<div v-if="pms.new_pm_amount == 0">
							<img width="30" height="30" :src="getAssetPath() + '/buttons/pmnavlet_' + pms.folder_special_id + '_0.gif'" /><br />
							{{ pms.new_pm_amount }}
						</div>
						<div v-else class="game--new-pm">
							<img width="30" height="30" :src="getAssetPath() + '/buttons/pmnavlet_' + pms.folder_special_id + '_1.gif'" /><br />
							{{ pms.new_pm_amount }}
						</div>
					</div>
				</div>
			</div>
			<div>
				<a v-on:click="logout()" style="cursor: pointer">Logout</a>
			</div>
		</div>
		<div class="game-navigation">
			<ul>
				<li>
					<a href="#/maindesk">Maindesk</a>
				</li>
				<li>
					<a href="#/research">Forschung</a>
				</li>
			</ul>
		</div>
		<div class="game--content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "Game",
		created() {
			if (!this.pmtimer) {
				this.fetchNewPms();
			}
			this.pmtimer = setInterval(
				() => {
					this.fetchNewPms();
				},
				60000
			);
		},
		components: {
		},
		computed: {
		},
		methods: {
			logout() {
				this.$store.dispatch('logout')
					.catch((error) => {
						this.$router.push('/');
					})
					.then((response) => {
						this.$router.push('/');
					});
			},
			fetchNewPms () {
				return axios.get(
					process.env.API_URL + '/v1/player/newpms',
					{
						headers: {
							Authorization: `Bearer ${this.$store.getters.getUserToken}`
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
					this.$store.commit('updateNewPms', data.data);
				})
				.catch((error) => {
					throw error;
				});
			},
			cancelPmUpdate () {
				clearInterval(this.pmtimer);
			},
			beforeDestroty () {
				this.cancelPmUpdate();
			}
		},
		mounted() {
			if (localStorage.userToken) {
				this.userToken = localStorage.userToken;
			}
		}
	};
</script>

<style scoped>
	.game {
		display: grid;
		grid-template-columns: 200px auto;
		grid-template-rows: 120px auto;
		height: 100%;
	}

	.game--navlet-pms {
		display: grid;
		grid-template-columns: 50px 50px 50px 50px;
		height: 100%;
		text-align: center;
		padding-top: 20px;
	}

	.game--content {
		padding-top: 15px;
		padding-left: 15px;
	}

	.game--navigation {
		grid-row: 2 / 2;
	}

	.game--new-pm {
		color: #ff0000;
	}

	.game--header {
		grid-column: 1 / 3;
		display: grid;
		grid-template-columns: 300px auto 100px;
		height: 100%;
		border-bottom: 1px solid #2f2f30;
	}

	@media only screen and (max-width: 800px) {
		.game--top {
			display: block;
		}
	}
</style>
