<template>
	<HomeLayout>
		<div class="home--error" v-if="errorMessage">{{ errorMessage }}</div>
		<div class="box-small">
			<div class="box--header">{{ $t("registration.title") }}</div>
			<input type="text" class="box--form" v-bind:placeholder="$t('registration.name')" v-model="loginName" autofocus />
			<input type="text" class="box--form" v-bind:placeholder="$t('registration.email')" v-model="emailAddress" />
			<v-select :options="$store.getters.getFactions" class="style-chooser" label="name" v-model="faction" v-bind:placeholder="$t('registration.selectFaction')" :searchable="false" :clearable="false">
				<template slot="option" slot-scope="option">
					<div class="faction-option">
						<div class="faction-option--image">
							<img v-bind:src="'/images/factions/'+option.id+'.gif'" />
						</div>
						<div class="faction-option--text">
							<div class="faction-option--text-name">{{ option.name }} ({{option.player_amount}}/{{option.player_limit}})</div>
							<div class="faction-option--text-desc">{{ option.description }}</div>
						</div>
					</div>
				</template>
				<template slot="selected-option" slot-scope="option">
					<img v-bind:src="'/images/factions/'+option.id+'.gif'" /> {{ option.name }}
				</template>
			</v-select>
			<input type="button" class="box--form" v-bind:value="$t('registration.submit')" v-on:click="submitUser" />
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
		data() {
			return {
				errorMessage: null,
				faction: null,
				loginName: null,
				emailAddress: null
			};
		},
		methods: {
			submitUser() {
				let factionId = null;
				if (this.faction) {
					factionId = this.faction.id;
				}

				this.$store.dispatch('createUser', { loginName:this.loginName, emailAddress:this.emailAddress, factionId:factionId })
					.then((response) => {
						this.$router.push('/registration/success');
					})
					.catch((error) => {
						this.errorMessage = error;
					});
			}
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
	}

	.faction-option--image img {
		vertical-align: middle;
		padding-right: 10px !important;
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
		margin: 0 !important;
		padding: 0 !important;
	}

	.style-chooser .vs__search {
		padding: 0 10px !important;
	}

	.style-chooser .vs__actions {
		padding: 0 10px !important;
	}

	.style-chooser .vs__selected {
		position: relative !important;
		margin: 0;
		padding-left: 10px !important;
		height: 42px;
	}

	.style-chooser .vs__selected img {
		margin-right: 10px !important;
	}

	.style-chooser .vs__dropdown-option--highlight,
	.style-chooser .vs__dropdown-option--highlight * {
		background-color: #0092d1;
		color: #fff;
	}

	.style-chooser .vs__dropdown-option {
		padding: 5px 10px !important;
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
