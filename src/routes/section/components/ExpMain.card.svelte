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
        padding-right: 24px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 2rem;
    }

    h2 {
        font-size: 2.4rem; 
        color: #fff;
    }

    h3 {
        color: #E14242;
        font-size: 1.4rem; 
        font-weight: bold; 
    }

    .desc {
        height: 66px;
        overflow: hidden;
    }

    .desc p {
        font-size: 1rem;
        color: #ddd;
        font-weight: initial;
        margin-bottom: 0px;
    }

    @media(max-width: 768px) {

        .card {
            background-color: #0001;
            border-radius: 6px;
            border-top: 1px solid #444;
            border-bottom: 1px solid #444;
            box-shadow: 2px 2px 5px 2px #0002;
            padding: 18px;
            padding-bottom: 12px;
        }

        h2 {
            font-size: 1.6rem;
        }
        h3 {
            font-size: 1.4rem;
        }
        .desc p {
            font-size: 0.8rem;
        }

        .desc {
            overflow: hidden;
        }
    }

</style>