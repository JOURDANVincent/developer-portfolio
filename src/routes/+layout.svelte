<script lang="ts">
	
	// STORE & DATA
	import { page } from '$app/stores';
	// import { SITE_NAME, META_DATA } from '$lib/data/meta.data'

	// COMPONENTS
	import Navbar from '$lib/components/Navbar.svelte';

</script>

<svelte:head>
	<!-- <title>{$reactiveMeta.title}</title> -->
	<link rel="canonical" href={$page.url.href} />

	<!-- <meta type="website"> -->
	<!-- <meta property="og:title" content={$reactiveMeta.title} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:description" content={$reactiveMeta.desc} />
	<meta property="og:image" content={`${$page.url.origin}/${$reactiveMeta.image}`} />
	<meta property="twitter:site" content={SITE_NAME} />
	<meta property="twitter:title" content={$reactiveMeta.title} />
	<meta property="twitter:description" content={$reactiveMeta.desc} />
	<meta property="twitter:image" content={`${$page.url.origin}/${$reactiveMeta.image}`} /> -->

</svelte:head>


<div class="app">

	<aside>
		<Navbar />
	</aside>

	<slot />

	<aside class="right-menu">
		<!-- <Footer Right /> -->
	</aside>

</div>

<style>

	.app {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 960px 1fr;
		grid-column-gap: 12px;
	}

</style>
