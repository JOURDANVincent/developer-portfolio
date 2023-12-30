<script lang="ts">

    // DATA
    export let data: any;

    // COMPONENTS
    import StudyCard from "../components/Study.card.svelte";

</script>

<div class="study_section">
    {#each data as study}
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