<template>
	<HomeLayout>
		<div class="legal-notice-container">
			<div class="legal-notice--title" v-html="$t('legalnotice.title')"></div>
			<div class="legal-notice--content" v-html="$t('legalnotice.content')"></div>
		</div>
	</HomeLayout>
</template>

<script>
	import HomeLayout from "./layout/Home.vue";

	export default {
		name: "LegalNotice",
		components: {
			HomeLayout
		}
	};
</script>

<style scoped>
	.legal-notice-container {
		width: 100%;
		max-width: 800px;
		margin: 0px auto;
		background-color: rgba(0,0,0,0.3);
		border-top: 2px solid #0092d1;
		padding: 40px;
	}

	.legal-notice--title {
		font-weight: bold;
		font-size: 18px;
		text-align: center;
		margin-bottom: 20px;
	}

	.legal-notice--content {
		margin-bottom: 20px;
	}
</style>
