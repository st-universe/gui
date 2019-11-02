<template>
	<div class="home">
		<div>
			<div class="home--top">
				<div class="home--header">
					<img src="/images/header.png" alt="header" />
				</div>
				<div class="home--menu">
					<a href="#/">Login</a>
					<a href="#/registration">Registrieren</a>
					<a href="#/news">News</a>
					<a href="#/help">Hilfe</a>
					<a href="#/legalnotice">Impressum</a>
				</div>
			</div>
		</div>
		<div></div>
		<div>
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

	.home--top {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 800px;
		margin: 0px auto;
	}

	.home--header {
		height: 80px;
		line-height: 80px;
		text-align: center;
	}

	.home--header img {
		vertical-align: middle;
	}

	.home--menu {
		display: flex;
		justify-content: center;
	}

	.home--menu a {
		height: 80px;
		line-height: 80px;
		text-transform: uppercase;
		text-decoration: none;
		color: #ccc;
		padding: 0 10px;
	}

	.home--menu a:hover {
		color: #0092d1;
	}

	.home--copyright {
		padding: 20px 0;
	}

	.home--copyright div {
		text-align: center;
		color: #666;
	}

	.home--error {
		width: 100%;
		max-width: 800px;
		color: #f00;
		text-align: center;
		border: 1px dashed #f00;
		padding: 20px;
		margin: 0px auto;
		margin-bottom: 40px;
	}

	.box {
		width: 100%;
		max-width: 800px;
		margin: 0px auto;
		padding: 40px;
		background-color: rgba(0,0,0,0.3);
		border-top: 2px solid #0092d1;
	}

	.box-small {
		width: 100%;
		max-width: 500px;
		margin: 0px auto;
		padding: 40px;
		background-color: rgba(0,0,0,0.3);
		border-top: 2px solid #0092d1;
	}

	.box--header {
		text-align: center;
		margin-bottom: 40px;
		font-size: 24px;
	}

	input[type="text"].box--form,
	input[type="password"].box--form,
	select.box--form {
		width: 100%;
		margin-bottom: 10px;
		height: 42px;
		background-color: #272E30;
		border: 0px none;
		padding: 0 10px;
		color: #aaa;
	}

	input[type="button"].box--form {
		width: 100%;
		margin-bottom: 10px;
		height: 42px;
		background-color: #0092d1;
		border: 0px none;
		color: #fff;
		font-weight: bold;
		cursor: pointer;
	}

	a.box--link {
		margin-bottom: 10px;
		color: #0070ff;
		text-decoration: none;
	}

	a.box--link:last-child {
		margin-bottom: 0px;
	}

	a.box--link:hover {
		color: #5ea4fd;
	}

	@media only screen and (max-width: 800px) {
		.home--top {
			display: block;
		}
	}
</style>
