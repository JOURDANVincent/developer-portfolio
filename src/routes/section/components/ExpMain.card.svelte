<script lang="ts">

    export let date:string;
    export let post:string;
    export let place:string;
    export let desc:string[];

</script>

<div class="card">

    <div class="header">
        <div>
            <h2>
                {post}
            </h2>
            <h3>
                {place}
            </h3>
        </div>
    </div>

    <div class="desc">
        {#each desc as desc}
            <p>{desc}</p>
        {/each}
    </div>

</div>

<style lang="css">

    .card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff; 
        padding-left: 36px;

        & .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 2rem;

            & h2 {
                font-size: 2.4rem; 
                color: #fff;
            }

            & h3 {
                color: #E14242;
                /* font-weight: bold; */
                font-size: 1.4rem; 
                font-weight: bold; 
            }
        }
    }

    .desc {
        height: 70px;

        & p {
            font-size: 1rem;
            color: #ddd;
            font-weight: initial;
            margin-bottom: 0px;
        }
    }

</style>