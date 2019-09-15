<template>
	<HomeLayout>
		<div class="box news" v-for="news in $store.getters.getNews">
			<div class="news--date">{{ formatUnix(news.date, $t("format.datetime")) }}</div>
			<div class="news--headline">{{ news.headline }}</div>
			<div class="news--content">{{ news.text }}</div>
			<div v-for="link in news.links">
				<a v-bind:href="link" target="_blank" class="box--link">{{ link }}</a>
			</div>
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
		created() {
			this.$store.dispatch('loadNews');
		}
	};
</script>

<style scoped>
	.news {
		margin-bottom: 20px;
	}

	.news--date {
		opacity: 0.4;
		margin-bottom: 10px;
		text-align: center;
	}

	.news--headline {
		font-weight: bold;
		font-size: 18px;
		text-align: center;
		margin-bottom: 20px;
	}

	.news--content {
		margin-bottom: 20px;
	}
</style>
