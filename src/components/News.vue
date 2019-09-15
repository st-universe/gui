<template>
	<HomeLayout>
		<div class="news-container">
			<div class="news" v-for="news in $store.getters.getNews">
				<div class="news--date">{{ formatUnix(news.date, $t("format.datetime")) }}</div>
				<div class="news--headline">{{ news.headline }}</div>
				<div class="news--content">{{ news.text }}</div>
				<div class="news--links" v-for="link in news.links">
					<div>
						<a v-bind:href="link" target="_blank" class="news--link">{{ link }}</a>
					</div>
				</div>
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
		computed: {
		},
		methods: {
		},
		created() {
			this.$store.dispatch('loadNews');
		}
	};
</script>

<style scoped>
	.news-container {
		width: 100%;
		max-width: 800px;
		margin: 0px auto;
	}

	.news {
		background-color: rgba(0,0,0,0.3);
		padding: 40px;
		margin-bottom: 20px;
		border-top: 2px solid #0092d1;
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

	.news--links {
		margin-top: 20px;
	}

	.news--link {
		color: #0070ff;
		text-decoration: none;
	}

	.news--link:hover {
		color: #5ea4fd;
	}
</style>
