<script lang="ts">

    export let date:string;
    export let post:string;
    export let place:string;
    export let desc:string[];

</script>

<div class="card">

    <!-- <div class="date">
        {date}
    </div> -->
    
    <div>
        <div class="card-header">
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

</div>

<style lang="css">

    .card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff; 
        padding-left: 36px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 2rem;
    }

    .date {
        font-size: 3rem;
        line-height: 2.6rem;
        font-weight: bold;
        color: #777;
        vertical-align: text-top;
    }

    h2 {
        font-size: 2rem; 
        color: #fff;
    }

    h3 {
        /* color: #E14242; */
        color: #E14242;
        font-weight: bold;
        font-size: 1.4rem; 
        font-weight: bold; 
    }
    
    p {
        color: #aaa;
        font-weight: bold;
        /* margin-bottom: 4px; */
        font-size: 1.3rem;
    }

    .desc p {
        font-size: 1rem;
        color: #ddd;
        font-weight: initial;
        margin-bottom: 0px;
    }

</style>