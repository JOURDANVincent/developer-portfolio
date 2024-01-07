<script lang="ts">
	
	// STORE & DATA
	import { page } from '$app/stores';
	import { expandNav, margWidth } from '$lib/stores/store'
	// import { SITE_NAME, META_DATA } from '$lib/data/meta.data'

	// COMPONENTS
	import Navbar from '$lib/components/Navbar.svelte';

	// WINDOWS SIZE
	$: innerWidth = 0;
	$: innerHeight = 0;
	$: expandNav.set(innerWidth >= 1460)
	$: margWidth.set((innerWidth - 940) / 2)

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

<svelte:window bind:innerWidth bind:innerHeight />

<div class="app">

	<Navbar />

	<main>
		<slot />
	</main>

</div>

<style>

	.app {
		height: 100%;
		width: 100%;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100%;
		max-width: 940px;
		margin-inline: auto;
	}

	footer {
		display: flex;
		writing-mode: vertical-lr;
		justify-content: space-between;
		align-items: flex-end;
		padding: 24px 12px;
		color: #777;
	}

</style>
