<template>
	<HomeLayout>
		<div class="box-small">
			<div class="box--header">{{ $t("registration.title") }}</div>
			<input type="text" class="box--form" v-bind:placeholder="$t('registration.name')" />
			<input type="text" class="box--form" v-bind:placeholder="$t('registration.email')" autofocus />

			<v-select :options="$store.getters.getFactions" class="style-chooser" label="name" placeholder="Wähle eine Fraktion" :searchable="false" :clearable="false">
				<template slot="option" slot-scope="option">
					<div class="faction-option">
						<div class="faction-option--image">
							<img v-bind:src="'/images/factions/'+option.id+'.gif'" />
						</div>
						<div class="faction-option--text">
							<div class="faction-option--text-name">{{ option.name }}</div>
							<div class="faction-option--text-desc">{{ option.description }}</div>
						</div>
					</div>
				</template>

				<template slot="selected-option" slot-scope="option">
					<img v-bind:src="'/images/factions/'+option.id+'.gif'" /> {{ option.name }}
				</template>

			</v-select>

			<input type="button" class="box--form" v-bind:value="$t('registration.submit')" />
		</div>
	</HomeLayout>
</template>

<script>
	import HomeLayout from "./layout/Home.vue";
	import vSelect from 'vue-select';
	import 'vue-select/dist/vue-select.css';

	export default {
		name: "Registration",
		components: {
			HomeLayout,
			vSelect
		},
		computed: {
		},
		methods: {
		},
		created() {
			this.$store.dispatch('loadFactions');
		}
	};
</script>

<style>
	.faction-option {
		display: table;
	}

	.faction-option--image {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		width: 30px;
		padding-right: 15px;
		padding-top: 5px;
	}

	.faction-option--text {
		display: table-cell;
	}

	.faction-option--text-name {
		font-weight: bold;
	}

	.style-chooser {
		margin-bottom: 10px;
	}

	.style-chooser * {
		background: #272E30;
		color: #aaa;
		border: none;
		opacity: 1 !important;
	}

	.style-chooser .vs__search {
		opacity: 0.8;
	}

	.style-chooser .vs__selected {
		position: relative !important;
		margin: 0;
		padding-left: 10px;
		height: 42px;
	}

	.style-chooser .vs__selected img {
		margin-right: 10px;
	}

	.vs__dropdown-option--highlight,
	.vs__dropdown-option--highlight * {
		background-color: #0092d1;
		color: #fff;
	}

	.style-chooser .vs__search::placeholder,
	.style-chooser .vs__dropdown-toggle {
		height: 42px;
	}

	.style-chooser .vs__clear,
	.style-chooser .vs__open-indicator {
		fill: #aaa;
	}
</style>
