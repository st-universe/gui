<template>
	<HomeLayout>
		<div class="login">
			<div class="login--header">Login</div>
			<input type="text" placeholder="Siedler" autofocus />
			<input type="password" placeholder="Passwort" />
			<input type="button" value="Login" />
			<a href="/passwordlost" class="link">> Passwort vergessen?</a>
			<a href="/registration" class="link">> Registrieren</a>
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
		computed: {
		},
		methods: {
		}
	};
</script>

<style scoped>
	.login {
		width: 100%;
		max-width: 500px;
		margin: 0px auto;
		padding: 40px;
		background-color: rgba(0,0,0,0.3);
		border-top: 2px solid #0092d1;
	}

	.login--header {
		text-align: center;
		margin-bottom: 40px;
		font-size: 24px;
	}

	.login input[type="text"],
	.login input[type="password"] {
		width: 100%;
		margin-bottom: 10px;
		height: 42px;
		background-color: #272E30;
		border: 0px none;
		padding: 0 10px;
		color: #aaa;
	}

	.login input[type="button"] {
		width: 100%;
		margin-bottom: 10px;
		height: 42px;
		background-color: #0092d1;
		border: 0px none;
		color: #fff;
		font-weight: bold;
	}

	.login .link {
		display: block;
		margin-bottom: 10px;
		color: #ccc;
		text-decoration: none;
	}

	.login .link:last-child {
		margin-bottom: 0px;
	}
</style>
