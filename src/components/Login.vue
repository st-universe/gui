<template>
	<HomeLayout>
		<div class="home--error" v-if="errorMessage">{{ errorMessage }}</div>
		<div class="box-small">
			<div class="box--header">Login</div>
			<input type="text" class="box--form" placeholder="Siedler" v-model="username" autofocus />
			<input type="password" class="box--form" placeholder="Passwort" v-model="password" />
			<input type="button" class="box--form" value="Login" v-on:click="submitLogin" />
			<div>
				<a href="/passwordlost" class="box--link">> Passwort vergessen?</a>
			</div>
			<div>
				<a href="/registration" class="box--link">> Registrieren</a>
			</div>
		</div>
	</HomeLayout>
</template>

<script>
	import HomeLayout from "./layout/Home.vue";

	export default {
		name: "Login",
		components: {
			HomeLayout
		},
		data() {
			return {
				errorMessage: null,
				username: null,
				password: null
			};
		},
		computed: {
		},
		methods: {
			submitLogin() {
				this.$store.dispatch('loadUser', { username:this.username, password:this.password })
					.catch((error) => {
						this.errorMessage = error;
					})
					.then((response) => {
						this.$router.push('/maindesk');
					});
			}
		}
	};
</script>

<style scoped>
</style>
