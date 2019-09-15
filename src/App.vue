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
