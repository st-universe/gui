<template>
	<GameLayout>
		<div class="box">
			<div class="research--item box-small" v-for="tech in $store.getters.getResearchList.available">
				<div class="research--commodity">
					<img :src="getAssetPath() + '/goods/' + tech.commodity.commodityId + '.gif'" />
				</div>
				<div class="research--name" v-on:click="showDetail(tech.researchId)">
					<h2>{{ tech.name }}</h2>
				</div>
				<div class="research--expandable hidden" :ref='"researchDetail" + tech.researchId'>
					<div>
						<img src="http://localhost:1337/201201.png" />
					</div>
					<div>
						<div>
							<h3>Beschreibung</h3>
						</div>
						<div>
							{{ tech.description }}
						</div>
					</div>
					<div>
						<div class="research--costs"><h3>Kosten</h3></div>
						<div class="research--costs-value">
							<img :src="getAssetPath() + '/goods/' + tech.commodity.commodityId + '.gif'" />
							{{ tech.points }}
						</div>
						<div class="research--action">
							<input type="button" class="box--form" value="Erforschen" />
						</div>
					</div>
				</div>
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
		data() {
			return {
				currentResearchDetail: null
			};
		},
		created() {
			this.$store.dispatch('loadResearchList');
		},
		methods: {
			showDetail(researchId) {
				if (this.currentResearchDetail) {
					this.currentResearchDetail.classList.add('hidden');
				}
				
				let newElement = this.$refs['researchDetail' + researchId][0];
				newElement.classList.remove('hidden');

				this.currentResearchDetail = newElement;
			}
		}
	};
</script>

<style scoped>
	.research--expandable {
		display: grid;
		grid-template-columns: 100px 600px 150px;
		margin: 10px;
	}

	.research--costs {
		text-align: center;
	}

	.research--costs-value {
		padding-top: 10px;
		text-align: center;
	}

	.research--action {
		margin-top: 20px;
	}

	.research--item {
		padding-top: 5px;
		padding-bottom: 5px;
		margin-bottom: 20px;
		background-color: rgba(0,0,0,0.3);
		border-top: 2px solid #0092d1;
	}

	.research--commodity {
		display: inline-block;
		width: 30px;
		height: 30px;
	}

	.research--name {
		display: inline-block;
		height: 30px;
		cursor: pointer;
	}

	.hidden {
		display: none;
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
</style>
