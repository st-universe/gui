<template>
	<HomeLayout>
		<div class="box-small">
			<div class="box--header">{{ $t("registration_success.title") }}</div>
			<div>{{ $t("registration_success.text") }}</div>
			<br />
			<div>
				<a href="#/" class="box--link">{{ $t("registration_success.back") }}</a>
			</div>
		</div>
	</HomeLayout>
</template>

<script>
	import HomeLayout from "./layout/Home.vue";

	export default {
		name: "RegistrationSuccess",
		components: {
			HomeLayout
		},
		methods: {
		},
		created() {
		}
	};
</script>

<style>

</style>
