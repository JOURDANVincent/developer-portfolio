<script lang="ts">

    // STORE & DATA
	import { page } from '$app/stores';
   const studies = $page.data.studies

    // COMPONENTS
    import StudyCard from "../components/Study.card.svelte";

</script>

<div class="study_section">
    {#each studies as study}
        <StudyCard {...study} />
    {/each}
</div>

<style lang="css">

    .study_section {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

</style>