<template>
	<div class="game">
   			<div class="item item-1">Header</div>
   			<div class="item item-2">
				<ul>
					<li>
						<a href="#/maindesk">Maindesk</a>
					</li>
					<li>
						<a href="#/research">Forschung</a>
					</li>
				</ul>
			</div>
			<div class="item item-3">
				<slot></slot>
			</div>
	</div>
</template>

<script>
	export default {
		name: "Game",
		components: {
		},
		computed: {
		},
		methods: {
		}
	};
</script>

<style scoped>
	.game {
		display: grid;
		grid-template-columns: 200px auto;
		grid-template-rows: 120px auto;
		height: 100%;
	}
	.item-1 {
		grid-column: 1 / 3;
	}
	.item-2 {
		grid-row: 2 / 2;
	}

	@media only screen and (max-width: 800px) {
		.game--top {
			display: block;
		}
	}
</style>
