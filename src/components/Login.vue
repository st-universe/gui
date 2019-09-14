<template>
	<div class="container">
		<div class="container-row">
			<div class="menu">
				<a href="/login">Login</a>
				<a href="/registration">Registrieren</a>
				<a href="/news">News</a>
				<a href="/help">Hilfe</a>
				<a href="/github">Github</a>
				<a href="/impressum">Impressum</a>
			</div>
		</div>
		<div class="container-row"></div>
		<div class="container-row">
			<div class="login">
				<div class="header">
					<img src="images/header.png" />
				</div>
				<input type="text" placeholder="Siedler" />
				<input type="password" placeholder="Passwort" />
				<input type="button" value="Login" />
				<a href="/passwordlost" class="link">> Passwort vergessen?</a>
				<a href="/registration" class="link">> Registrieren</a>
			</div>
		</div>
		<div class="container-row"></div>
		<div class="container-row">
			<div class="copyright">
				<div>Star Trek is a registered trademark of Paramount Pictures.<br />This site is strictly non-profit.<br />No copyright infringement is intended.</div>
				<div>© 2019 STU-Team</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		components: {
		},
		computed: {
		},
		methods: {
		}
	};
</script>

<style scoped>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto 1fr auto;
		grid-template-areas: "." "." "." "." ".";
		height: 100%;
	}

	.menu {
		display: flex;
		justify-content: space-between;
		max-width: 600px;
		margin: 0px auto;
	}
	.menu a {
		height: 80px;
		line-height: 80px;
		text-transform: uppercase;
	}

	a {
		text-decoration: none;
		color: #ccc;
	}
	a:hover {
		color: #fff;
	}

	.login {
		width: 100%;
		max-width: 500px;
		margin: 0px auto;
		padding: 40px;
		background-color: rgba(0,0,0,0.3);
	}
	.login .header {
		text-align:center;
		margin-bottom: 80px;
	}
	.login input[type="text"],
	.login input[type="password"] {
		width: 100%;
		margin-bottom: 10px;
		height: 36px;
		background-color: #272E30;
		border: 0px none;
		padding: 0 10px;
		color: #aaa;
	}
	.login input[type="button"] {
		width: 100%;
		margin-bottom: 10px;
		height: 36px;
		background-color: #4A8ABB;
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

	.copyright {
		padding: 20px 0;
	}
	.copyright div {
		text-align: center;
		color: #666;
	}
</style>
