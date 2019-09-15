<template>
	<div class="home">
		<div>
			<div class="home--menu">
				<a href="#/">Login</a>
				<a href="#/registration">Registrieren</a>
				<a href="#/news">News</a>
				<a href="#/help">Hilfe</a>
				<a href="#/github">Github</a>
				<a href="#/impressum">Impressum</a>
			</div>
		</div>
		<div></div>
		<div>
			<div class="home--header">
				<img src="images/header.png" />
			</div>
			<slot></slot>
		</div>
		<div></div>
		<div>
			<div class="home--copyright">
				<div>Star Trek is a registered trademark of Paramount Pictures.<br />This site is strictly non-profit.<br />No copyright infringement is intended.</div>
				<div>© 2019 STU-Team</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		components: {
		},
		computed: {
		},
		methods: {
		}
	};
</script>

<style scoped>
	.home {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto 1fr auto;
		grid-template-areas: "." "." "." "." ".";
		height: 100%;
	}

	.home--header {
		text-align:center;
		margin-bottom: 40px;
	}

	.home--menu {
		display: flex;
		justify-content: space-between;
		max-width: 600px;
		margin: 0px auto;
	}

	.home--menu a {
		height: 80px;
		line-height: 80px;
		text-transform: uppercase;
		text-decoration: none;
		color: #ccc;
	}

	.home--menu a:hover {
		color: #fff;
	}

	.home--copyright {
		padding: 20px 0;
	}

	.home--copyright div {
		text-align: center;
		color: #666;
	}
</style>
