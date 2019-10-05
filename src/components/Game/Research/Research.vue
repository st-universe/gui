<template>
	<GameLayout>
		<div class="box">
			<div v-for="tech in $store.getters.getResearchList.available">
				<div class="research--commodity">
					<img :src="getAssetPath() + '/goods/' + tech.commodity.commodityId + '.gif'" />
					{{ tech.points }}
				</div>
				<div class="research--name">{{ tech.name }}</div>
				<div class="research--description">{{ tech.description }}</div>
			</div>
		</div>
	</GameLayout>
</template>

<script>
	import GameLayout from "./../../layout/Game.vue";

	export default {
		name: "Research",
		components: {
			GameLayout
		},
		created() {
			this.$store.dispatch('loadResearchList');
		},
		methods: {
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
