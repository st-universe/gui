<template>
	<HomeLayout>
		<div class="help-container">
			<div class="help--title" v-html="$t('help.title')"></div>
			<div class="help--content" v-html="$t('help.content')"></div>
			<div class="help--links">
				<a href="https://discord.gg/PnnGdXD" target="_blank" class="help--link">Discord</a>
				<br />
				<a href="https://stu.wolvnet.de/docu" target="blank" class="help--link">{{ $t("help.documentation") }}</a>
			</div>
		</div>
	</HomeLayout>
</template>

<script>
	import HomeLayout from "./layout/Home.vue";

	export default {
		name: "Help",
		components: {
			HomeLayout
		}
	};
</script>

<style scoped>
	.help-container {
		width: 100%;
		max-width: 800px;
		margin: 0px auto;
		background-color: rgba(0,0,0,0.3);
		border-top: 2px solid #0092d1;
		padding: 40px;
	}

	.help--title {
		font-weight: bold;
		font-size: 18px;
		text-align: center;
		margin-bottom: 20px;
	}

	.help--content {
		margin-bottom: 20px;
	}

	.help--links {
	}

	.help--link {
		color: #0070ff;
		text-decoration: none;
	}

	.help--link:hover {
		color: #5ea4fd;
	}
</style>
