<template>
	<HomeLayout>
		<div class="registration">
			<div class="registration--header">Registrieren</div>
			<input type="text" placeholder="E-Mail" />
			<input type="text" placeholder="Siedler" />
			<input type="button" value="Registrieren" />
		</div>
	</HomeLayout>
</template>

<script>
	import HomeLayout from "./layout/Home.vue";

	export default {
		name: "News",
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
	.registration {
		width: 100%;
		max-width: 500px;
		margin: 0px auto;
		padding: 40px;
		background-color: rgba(0,0,0,0.3);
	}

	.registration--header {
		text-align: center;
		margin-bottom: 40px;
		font-size: 24px;
	}

	.registration input[type="text"],
	.registration input[type="password"] {
		width: 100%;
		margin-bottom: 10px;
		height: 36px;
		background-color: #272E30;
		border: 0px none;
		padding: 0 10px;
		color: #aaa;
	}

	.registration input[type="button"] {
		width: 100%;
		margin-bottom: 10px;
		height: 36px;
		background-color: #4A8ABB;
		border: 0px none;
		color: #fff;
		font-weight: bold;
	}

	.registration .link {
		display: block;
		margin-bottom: 10px;
		color: #ccc;
		text-decoration: none;
	}

	.registration .link:last-child {
		margin-bottom: 0px;
	}
</style>
