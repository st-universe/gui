<template>
	<div class="game">
		<div class="game--header">
			<div>
			</div>
			<div>
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
	export default {
		name: "Game",
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

	.game--content {
		padding-top: 15px;
		padding-left: 15px;
	}

	.game--navigation {
		grid-row: 2 / 2;
	}

	.game--header {
		grid-column: 1 / 3;
		display: grid;
		grid-template-columns: 150px auto 100px;
		height: 100%;
		border-bottom: 1px solid #2f2f30;
	}

	@media only screen and (max-width: 800px) {
		.game--top {
			display: block;
		}
	}
</style>
