<template>
	<HomeLayout>
		<div class="box">
			<div class="box--header" v-html="$t('help.title')"></div>
			<div class="help--content" v-html="$t('help.content')"></div>
			<div>
				<a href="https://discord.gg/PnnGdXD" target="_blank" rel="noreferrer" class="box--link">Discord</a>
			</div>
			<div>
				<a href="https://stu.wolvnet.de/docu" target="blank" rel="noreferrer" class="box--link">{{ $t("help.documentation") }}</a>
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
	.help--content {
		margin-bottom: 20px;
	}
</style>
