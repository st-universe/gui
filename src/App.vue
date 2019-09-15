<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
    export default {
        name: "App",
        components: {
        },
        computed: {
        },
        methods: {
        }
    };
</script>

<style>
	/* open-sans-regular - latin */
	@font-face {
	  font-family: 'Open Sans';
	  font-style: normal;
	  font-weight: 400;
	  src: url('/fonts/open-sans-v17-latin-regular.eot'); /* IE9 Compat Modes */
	  src: local('Open Sans Regular'), local('OpenSans-Regular'),
		   url('/fonts/open-sans-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		   url('/fonts/open-sans-v17-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
		   url('/fonts/open-sans-v17-latin-regular.woff') format('woff'), /* Modern Browsers */
		   url('/fonts/open-sans-v17-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
		   url('/fonts/open-sans-v17-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		outline: none;
	}
	html, body, #app { height: 100%; width: 100%; }
	body {
		background: #1F2326;
		color: #aaa;
	}
</style>
