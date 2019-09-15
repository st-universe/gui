<template>
	<HomeLayout>
		<div class="box">
			<div class="box--header" v-html="$t('legalnotice.title')"></div>
			<div v-html="$t('legalnotice.content')"></div>
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
