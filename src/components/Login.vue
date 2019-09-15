<template>
	<HomeLayout>
		<div class="box-small">
			<div class="box--header">Login</div>
			<input type="text" class="box--form" placeholder="Siedler" autofocus />
			<input type="password" class="box--form" placeholder="Passwort" />
			<input type="button" class="box--form" value="Login" />
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
		computed: {
		},
		methods: {
		}
	};
</script>

<style scoped>
</style>
