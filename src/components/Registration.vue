<template>
	<HomeLayout>
		<div class="box-small">
			<div class="box--header">{{ $t("registration.title") }}</div>
			<input type="text" class="box--form" v-bind:placeholder="$t('registration.name')" />
			<input type="text" class="box--form" v-bind:placeholder="$t('registration.email')" autofocus />
			<select class="box--form">
				<option disabled selected>{{ $t("registration.selectFraction") }}</option>
				<option>Vereinte Föderation der Planeten (7/30)</option>
				<option>Romulanisches Imperium (6/30)</option>
				<option>Klingonisches Imperium (5/30)</option>
			</select>
			<input type="button" class="box--form" v-bind:value="$t('registration.submit')" />
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
		}
	};
</script>

<style scoped>
</style>
